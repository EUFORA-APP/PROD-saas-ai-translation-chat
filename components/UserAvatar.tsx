import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

function UserAvatar({
  name,
  image,
  className,
}: {
  name: string;
  image: string;
  className?: string;
}) {
  return (
    <Avatar className={cn("bg-white text-black", className)}>
      {image && (
        <Image
        src={image}
        alt={name}
        width={42/*0 $CGC deep value*/}
        height={42/*$420 demeber 12,2023 $CGC deep value ?? $SHIB*/}
        className="rounded-full"
      />
      )}
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar
