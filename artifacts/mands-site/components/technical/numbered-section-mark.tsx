import * as React from "react";
import { cn } from "@/lib/utils";

const COLOR_CLASSES = {
  navy: "text-ms-navy",
  accent: "text-tech-accent",
  dark: "text-dark-muted",
} as const;

export type NumberedSectionMarkColor = keyof typeof COLOR_CLASSES;

export interface NumberedSectionMarkProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, "color"> {
  number: string;
  label: string;
  color?: NumberedSectionMarkColor;
}

export function NumberedSectionMark({
  number,
  label,
  color = "navy",
  className,
  ...props
}: NumberedSectionMarkProps) {
  return (
    <p
      className={cn(
        "font-mono text-xs font-medium uppercase tracking-widest",
        COLOR_CLASSES[color],
        className,
      )}
      {...props}
    >
      <span>{number}</span>
      <span aria-hidden="true" className="mx-2 opacity-50">
        /
      </span>
      <span>{label}</span>
    </p>
  );
}
