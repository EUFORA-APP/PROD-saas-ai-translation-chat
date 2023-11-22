import { getServerSession } from "next-auth";
import DarkModeToggle from "./DarkModeToggle";
import Logo from './Logo';
import UserButton from "./UserButton";
import { authOptions } from "@/auth";
import Link from "next/link";
import { MessagesSquare } from "lucide-react";
import CreateChatButton from "./CreateChatButton";
import UpgradeBanner from "./UpgradeBanner";
import LanguageSelect from "./LanguageSelect";

async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
      <nav className='flex flex-col sm:flex-row items-center justify-center p-1 sm:p-4 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto'>
        <div className="w-full sm:w-auto text-center mb-2 sm:mb-0">
          <Logo />
        </div>
        
        <div className="flex-1 flex items-center justify-center sm:justify-end space-x-4 mt-0 sm:mt-0">
          <LanguageSelect />

          {session ? (
            <>
              <Link href={'/chat'} prefetch={false}>
                <MessagesSquare className="text-black dark:text-white" />
              </Link>
              <CreateChatButton />
            </>
          ): (
            <Link href="/pricing">Pricing</Link>
          )}

          <DarkModeToggle />
          <UserButton session={session} />
        </div>
      </nav>

      <UpgradeBanner />
    </header>
  );
}

export default Header;
