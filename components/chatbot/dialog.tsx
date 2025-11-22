import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BotMessageSquare } from "lucide-react"

export function DialogChatbot() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
             <Button size="icon" variant="ghost">
               <BotMessageSquare className="size-5"/>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Veridion Studios Helper</DialogTitle>
            <DialogDescription>
              This dialog will load a chatbot when it is implemented.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}


export default DialogChatbot