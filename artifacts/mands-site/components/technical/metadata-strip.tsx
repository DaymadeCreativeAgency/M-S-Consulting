import * as React from "react";
import { cn } from "@/lib/utils";

export interface MetadataStripProps {
  items: string[];
  tone?: "light" | "dark";
  className?: string;
}

export function MetadataStrip({
  items,
  tone = "light",
  className,
}: MetadataStripProps) {
  const isLight = tone === "light";
  return (
    <div
      className={cn("py-2.5 px-4 rounded-xs", className)}
      style={{
        border: isLight
          ? "1px solid rgba(0,31,101,0.1)"
          : "1px solid #1F2438",
      }}
    >
      <p
        className="technical-meta"
        style={{ color: isLight ? "#3D3E39" : "#8B92A8" }}
      >
        {items.join(" · ")}
      </p>
    </div>
  );
}
