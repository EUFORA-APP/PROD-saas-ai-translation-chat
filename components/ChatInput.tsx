'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

const formSchema = z.object({
    input: z.string().max(1000),
  });

function ChatInput({ chatId }: { chatId: string }) {
  const { data: session } = useSession();

  const form = useForm<Zap.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  return (
    <div>ChatInput</div>
  )
}

export default ChatInput
