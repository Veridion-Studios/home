// import { streamText, UIMessage, convertToModelMessages } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    messages,
    model,
  }: {
    messages: { role: string; content: string }[];
    model: string;
  } = await req.json();

  const apiKey = process.env.HACKCLUB_API_KEY || process.env.NEXT_PUBLIC_HACKCLUB_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Missing Hack Club AI API key' }), { status: 401 });
  }

  // Optionally add system prompt
  const allMessages = [
    { role: 'system', content: 'You are a helpful assistant that can answer questions and help with tasks.' },
    ...messages,
  ];

  const body = {
    model: model,
    messages: allMessages,
    temperature: 0.7,
    // Add other options as needed
  };

  const response = await fetch('https://ai.hackclub.com/proxy/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: { 'Content-Type': 'application/json' },
  });
}