"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";
import { getApiLimitCount } from "@/lib/api-limit";

type MobileSidebarProps = {
  apiLimitCount: number;
};

const MobileSidebar = ({ apiLimitCount }: MobileSidebarProps) => {
  const [isMounted, setIsMounted] = useState(false);

  // declare isMounted and set to true when it's mounted to fix hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
