"use client";

import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, SetStateAction } from "react";
import { useToast } from "./ui/use-toast";

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
  const host = window.location.host;

  const linkToChat = 
  process.env.NODE_ENV === "development"
    ? `http://${host}/chat/${chatId}`
    : `https://${host}/chat/${chatId}`;

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(linkToChat);
      console.log("Text copied to clipboard");

      toast({
        title: "Copied Successfully",
        description: 
          "Share this to the person you want to Party Chat with! (NOTE: They must be added to the Chat to access it!)",
        className: "bg-green-600 text-white",
      });
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }

  return <div>ShareLink</div>;
}

export default ShareLink;

