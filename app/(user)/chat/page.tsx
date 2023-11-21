import ChatList from "@/components/ChatList";


type Props = {
  params: {};
  searchParams: {
    error: string;
  };
};

function ChatsPage({ searchParams: { error } }: Props) {
  return (
    <div>
      {/* Chat Permission Chat */}
      <h1>Chats</h1>

      <ChatList />
    </div>
  );
}

export default ChatsPage;
 