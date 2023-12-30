import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className="flex p-4 items-center">
      {/* hamburger button */}
      <MobileSidebar apiLimitCount={apiLimitCount} />

      {/* menu */}
      <div className="flex w-full justify-end">
        {/* sign out and go back to public page */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
