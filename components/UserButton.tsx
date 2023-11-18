import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserAvatar from "./UserAvatar";

function UserButton() {
  return (
  <DropdownMenu>
    <DropdownMenuTrigger>
      <UserAvatar name="Austin Rhoades" image='https://cloud.appwrite.io/v1/storage/buckets/roar/files/65516e6139812500b79e/preview?width=2000&height=2000&gravity=top&quality=100&project=roar'/>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default UserButton;
