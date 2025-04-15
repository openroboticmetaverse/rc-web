"use client";

import { TooltipProvider as ShadcnTooltipProvider } from "@/components/ui/tooltip";

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <ShadcnTooltipProvider>{children}</ShadcnTooltipProvider>;
}