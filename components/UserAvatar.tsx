import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

function UserAvatar({
  name,
  image,
  className,
}: {
  name?: string | null;
  image?: string | null; 
  className?: string;
}) {
  return (
    <Avatar className={cn("bg-white text-black ", className)}>
      {image && (
        <Image
        src={image}
        alt={name || "User name"}
        width={40}
        height={40}
        className="rounded-full "
      />
      )}
      <AvatarImage src="https://cloud.appwrite.io/v1/storage/buckets/roar/files/65516e6139812500b79e/preview?width=2000&height=2000&gravity=top&quality=100&project=roar" />
      <AvatarFallback>
        
      </AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar
