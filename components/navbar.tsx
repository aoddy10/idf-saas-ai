import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex p-4 items-center">
      {/* hamburger button */}
      <Button variant="ghost" className="md:hidden">
        <Menu />
      </Button>

      {/* menu */}
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
