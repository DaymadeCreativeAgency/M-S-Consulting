import * as React from "react";
import { cn } from "@/lib/utils";

export interface TechnicalGridBackgroundProps {
  tone?: "light" | "dark";
  size?: number;
  className?: string;
}

export function TechnicalGridBackground({
  tone = "dark",
  size = 48,
  className,
}: TechnicalGridBackgroundProps) {
  const lineColor =
    tone === "dark"
      ? "rgba(31,36,56,0.65)"
      : "rgba(0,31,101,0.06)";

  return (
    <div
      aria-hidden="true"
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{
        backgroundImage: `linear-gradient(${lineColor} 1px, transparent 1px), linear-gradient(90deg, ${lineColor} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}
