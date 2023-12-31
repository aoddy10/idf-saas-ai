"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { tools } from "@/lib/constants";

const DashboardPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="mb-8 space-y-4">
        <div className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </div>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with a smart AI - Experience the power of AI
        </p>
      </div>

      <div className="p-4 md:px-20 lg:px-32 space-y-4">
        {tools?.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center px-4">
              <div className={cn("p-2 mr-5 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </>
  );
};

export default DashboardPage;
