import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";

export const pages = [
  {
    label: "Dashbord",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
    bgColor: "text-sky-500/10",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "text-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image-generation",
    color: "text-pink-700",
    bgColor: "text-pink-700/10",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video-generation",
    color: "text-orange-700",
    bgColor: "text-orange-700/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music-generation",
    color: "text-emerald-500",
    bgColor: "text-emerald-500/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code-generation",
    color: "text-green-700",
    bgColor: "text-green-700/10",
  },
  {
    label: "Setting",
    icon: Settings,
    href: "/setting",
  },
]
