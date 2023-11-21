"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { getDoc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import { addChatRef, chatMembersRef } from "@/lib/converters/ChatMembers";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { getUserByEmailRef } from "@/lib/converters/User";
import { useToast } from "@/components/ui/use-toast";
import useAdminId from "@/hooks/useAdminId";
import { PlusCircleIcon } from "lucide-react";
import { ShareLink } from "./ShareLink";
import { useSubscriptionStore } from "@/store/store";
import { ToastAction } from "./ui/toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

function InviteUser({ chatId }: { chatId: string }) {
  const { data: session } = useSession();
  const { toast } = useToast();
  const adminId = useAdminId({ chatId });
  const subscription = useSubscriptionStore((state) => state.subscription);
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [openInviteLink, setOpenInviteLink] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!session?.user.id) return;

    toast({
      title: "Sending Party Invite",
      description: "The Invite to the Party is on its way! Feel free to send some more."
    });

    // We need to get the users current chats to check if they are about to exceed the chat limit for standard plan
    const noOfUsersInChat = (await getDocs(chatMembersRef(chatId))).docs.map(
      (doc) => doc.data()
    ).length;

    // check if the user is about to exceed the PRO plan which is 3 chats
    const isPro =
    subscription?.role === "pro" && subscription.status === "active";

    if (!isPro && noOfUsersInChat >= 2) {
      toast({
        title: "Please upgrade to Pro Tier",
        description: "Uh ohh! You have exceeded the limit of users in a single chat for the Free Standard Tier, upgrade now to grow the Party",
        variant: "destructive",
        action: (
          <ToastAction
            altText="Upgrade"
            onClick={() => router.push("/register")}
          >
            Upgrade to Pro
          </ToastAction>
        ),
      });

      return;
    } 

  const querySnapshot = await getDocs(getUserByEmailRef(values.email));
  {/*sends email onlyy to register users below*/}
  if (querySnapshot.empty) {
    toast({
      title: "User not signed up",
      description:
      "Uh oh! It looks like you invite was not sent, please ask them to sign up first.",
      variant: "destructive",
    });

      return;
  } else {
    const user = querySnapshot.docs[0].data();

    await setDoc(addChatRef(chatId, user.id), {
      userId: user.id!,
      email: user.email!,
      timestamp: serverTimestamp(),
      chatId: chatId,
      isAdmin: false,
      image: user.image || "",
    })
      .then(() => {
        setOpen(false);

        toast({
          title: "Added to the Party Chat",
          description: "Your compadre is now in the Party, SUCCESS!",
          className: "bg-green-600 text-white",
          duration: 3000,
        });

        setOpenInviteLink(true);
      })
      .catch(() => {
        toast({
          title: "Error",
          description:
            "Uh ohh! Unfortunately they were not added to the party, try again."
        });

        setOpen(false);
      });
  }

    form.reset();
  };

  return (
    adminId === session?.user.id && (
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircleIcon className="mr-1" />
              Add User To Chat
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add User To Chat</DialogTitle>
              <DialogDescription>
                Please enter any one you meet to invite them to this 
                chat!{" "}
                <span className="text-indigo-600 font-bold">
                  (Note: they must be registered)
                </span>
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col space-y-2"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="john@doe.com" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button className="ml-auto sm:w-fit w-full" type="submit">
                  Add To Chat
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

        <ShareLink
          isOpen={openInviteLink}
          setIsOpen={setOpenInviteLink}
          chatId={chatId}
        />
      </>
    )
  );
}

export default InviteUser;
