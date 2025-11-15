'use client';

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import {
  Message,
  MessageContent,
  MessageResponse,
  MessageActions,
  MessageAction,
} from '@/components/ai-elements/message';
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  PromptInputHeader,
  type PromptInputMessage,
  PromptInputSelect,
  PromptInputSelectContent,
  PromptInputSelectItem,
  PromptInputSelectTrigger,
  PromptInputSelectValue,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputTools,
} from '@/components/ai-elements/prompt-input';
import { Fragment, useState } from 'react';
import { CopyIcon, GlobeIcon, RefreshCcwIcon } from 'lucide-react';
import { Loader } from '@/components/ai-elements/loader';

const models = [
  {
    name: 'GPT 4o',
    value: 'openai/gpt-4o',
  },
  {
    name: 'Deepseek R1',
    value: 'deepseek/deepseek-r1',
  },
];

const CHAT_API_URL = '/api/chat';

type ChatMessage = {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
};

const ChatBotDemo = () => {
  const [input, setInput] = useState('');
  const [model, setModel] = useState<string>(models[0].value);
  const [webSearch, setWebSearch] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [status, setStatus] = useState<'idle' | 'submitted' | 'streaming'>('idle');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);
    if (!(hasText || hasAttachments)) return;

    const userMessage: ChatMessage = {
      id: `${Date.now()}`,
      role: 'user',
      content: message.text || 'Sent with attachments',
    };
    setMessages((prev) => [...prev, userMessage]);
    setStatus('submitted');
    setLoading(true);

    try {
      const res = await fetch(CHAT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model,
          messages: [
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: 'user', content: message.text },
          ],
          webSearch,
        }),
      });
      const data = await res.json();
      const assistantMsg = data.choices?.[0]?.message;
      if (assistantMsg) {
        setMessages((prev) => [
          ...prev,
          {
            id: `${Date.now()}-assistant`,
            role: assistantMsg.role,
            content: assistantMsg.content,
          },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-error`,
          role: 'assistant',
          content: 'Error fetching response from Hack Club AI.',
        },
      ]);
    } finally {
      setInput('');
      setStatus('idle');
      setLoading(false);
    }
  };

  const regenerate = async () => {
    if (messages.length === 0) return;
    // Remove last assistant message and resend last user message
    const lastUser = [...messages].reverse().find((m) => m.role === 'user');
    if (!lastUser) return;
    setMessages((prev) => prev.filter((m, i) => i < prev.length - 1));
    await handleSubmit({ text: lastUser.content, files: [] });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full h-screen">
      <div className="flex flex-col h-full">
        <Conversation className="h-full">
          <ConversationContent>
            {messages.map((message, idx) => (
              <div key={message.id}>
                <Message from={message.role}>
                  <MessageContent>
                    <MessageResponse>
                      {message.content}
                    </MessageResponse>
                  </MessageContent>
                  {message.role === 'assistant' && idx === messages.length - 1 && (
                    <MessageActions>
                      <MessageAction
                        onClick={() => regenerate()}
                        label="Retry"
                      >
                        <RefreshCcwIcon className="size-3" />
                      </MessageAction>
                      <MessageAction
                        onClick={() => navigator.clipboard.writeText(message.content)}
                        label="Copy"
                      >
                        <CopyIcon className="size-3" />
                      </MessageAction>
                    </MessageActions>
                  )}
                </Message>
              </div>
            ))}
            {loading && <Loader />}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        <PromptInput onSubmit={handleSubmit} className="mt-4" globalDrop multiple>
          <PromptInputHeader>
            <PromptInputAttachments>
              {(attachment) => <PromptInputAttachment data={attachment} />}
            </PromptInputAttachments>
          </PromptInputHeader>
          <PromptInputBody>
            <PromptInputTextarea
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </PromptInputBody>
          <PromptInputFooter>
            <PromptInputTools>
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger />
                <PromptInputActionMenuContent>
                  <PromptInputActionAddAttachments />
                </PromptInputActionMenuContent>
              </PromptInputActionMenu>
              <PromptInputButton
                variant={webSearch ? 'default' : 'ghost'}
                onClick={() => setWebSearch(!webSearch)}
              >
                <GlobeIcon size={16} />
                <span>Search</span>
              </PromptInputButton>
              <PromptInputSelect
                onValueChange={(value) => {
                  setModel(value);
                }}
                value={model}
              >
                <PromptInputSelectTrigger>
                  <PromptInputSelectValue />
                </PromptInputSelectTrigger>
                <PromptInputSelectContent>
                  {models.map((model) => (
                    <PromptInputSelectItem key={model.value} value={model.value}>
                      {model.name}
                    </PromptInputSelectItem>
                  ))}
                </PromptInputSelectContent>
              </PromptInputSelect>
            </PromptInputTools>
            <PromptInputSubmit disabled={!input && !status} status={status === 'streaming' ? 'streaming' : status === 'submitted' ? 'submitted' : undefined} />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </div>
  );
};

export default ChatBotDemo;

<style jsx global>{`
  body, html {
    overflow: hidden;
  }

  .max-w-4xl {
    /* If you want to hide scrollbars for this container only */
    overflow: hidden;
  }
`}</style>