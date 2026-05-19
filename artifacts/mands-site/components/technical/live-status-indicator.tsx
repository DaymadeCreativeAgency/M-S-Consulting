import * as React from "react";
import { cn } from "@/lib/utils";

const COLOR_MAP = {
  sun:    { light: "#FCC541", dark: "#FCC541" },
  accent: { light: "#5CA7F3", dark: "#5CA7F3" },
  forest: { light: "#688A85", dark: "#688A85" },
  terra:  { light: "#C82F07", dark: "#C82F07" },
} as const;

export type StatusColor = keyof typeof COLOR_MAP;

export interface LiveStatusIndicatorProps {
  label: string;
  color?: StatusColor;
  tone?: "light" | "dark";
  className?: string;
}

export function LiveStatusIndicator({
  label,
  color = "accent",
  tone = "light",
  className,
}: LiveStatusIndicatorProps) {
  const dotColor = COLOR_MAP[color][tone];
  const textColor = tone === "dark" ? "#E8EAED" : "#1A1B17";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span
        className="status-dot flex-shrink-0"
        style={{ backgroundColor: dotColor }}
        aria-hidden="true"
      />
      <span className="technical-meta" style={{ color: textColor }}>
        {label}
      </span>
    </div>
  );
}
