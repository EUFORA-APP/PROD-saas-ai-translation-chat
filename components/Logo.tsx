import LogoImage from "@logos/black.jpg"
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";

function Logo() {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-40 h-10">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        > 
          <Image
            priority
            src={LogoImage}
            alt="logo"
            className="dark:filter dark:invert rounded-full"
          />
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
