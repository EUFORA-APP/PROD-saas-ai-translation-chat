import { SetStateAction } from "react";

function ShareLink({
  isOpen,
  chatId,
  setIsOpen,
}: {
  isOpen: boolean;
  chatId: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { toast } = useToast();
  const host = window.location.host
}