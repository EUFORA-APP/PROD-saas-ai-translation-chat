import { authOptions } from "@/auth";
import ChatInput from "@/components/ChatInput";
import { getServerSession } from "next-auth";

async function ChatPage() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {/* Admin Controls */}
      {/* ChatMember Settings */} 

      {/* Chat Messages */ }

      {/* Chat Input */}
      <ChatInput />
    </>
  )
}

export default ChatPage;
