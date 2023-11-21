type Props = {
  paramsss: {};
  searchParams: {
    error: string;
  };
};

function ChatsPage({ searchParams: { error } }: Props) {
  return (
    <div>
      {/* Chat Permission Chat */}

      {/* ChatList */}
      <ChatList />
    </div>
  );
}

export default ChatsPage;
 