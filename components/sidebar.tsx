"use client";

import {
  Code,
  ImageIcon,
  LayoutDashboard,
  Menu,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { number } from "zod";
import FreeCounter from "@/components/free-counter";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashbord",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image-generation",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video-generation",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music-generation",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code-generation",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

type SidebarProps = {
  apiLimitCount: number;
  isPro: boolean;
};

const Sidebar = ({ apiLimitCount, isPro = false }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full py-4 space-y-4 text-white bg-primary">
      <div className="px-3 py-2 flex-1">
        {/* logo */}
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1 className={cn("font-bold text-2xl", poppins.className)}>
            Idevtify
          </h1>
        </Link>

        {/* menu */}
        {routes?.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
              pathname === route.href
                ? "text-white bg-white/10"
                : "text-zinc-400"
            )}
          >
            <div className="flex items-center flex-1">
              <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
              {route.label}
            </div>
          </Link>
        ))}
      </div>

      <FreeCounter isPro={isPro} apiLimitCount={apiLimitCount} />
    </div>
  );
};

export default Sidebar;
