"use client";
// Logo component

import { Bot } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  name?: string;
  className?: string;
  hideName?: boolean;
}

const Logo = ({ name = "Social Agent", className, hideName = false }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Bot className="h-4 w-4" />
      </div>
      {!hideName && <span className="text-base font-bold">{name}</span>}
    </div>
  );
}

export default Logo;