import * as React from "react";
import { cn } from "@/lib/utils";

export interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  tone?: "light" | "dark";
  className?: string;
}

export function CodeBlock({
  code,
  language,
  filename,
  tone = "light",
  className,
}: CodeBlockProps) {
  const isLight = tone === "light";

  return (
    <div
      className={cn("rounded-sm overflow-hidden", className)}
      style={{
        border: isLight ? "1px solid rgba(0,31,101,0.1)" : "1px solid #1F2438",
      }}
    >
      {(filename || language) && (
        <div
          className="flex items-center justify-between px-4 py-2"
          style={{
            borderBottom: isLight
              ? "1px solid rgba(0,31,101,0.1)"
              : "1px solid #1F2438",
            backgroundColor: isLight ? "rgba(0,31,101,0.03)" : "#131829",
          }}
        >
          {filename && (
            <span
              className="font-sans text-xs font-medium"
              style={{ color: isLight ? "#3D3E39" : "#8B92A8" }}
            >
              {filename}
            </span>
          )}
          {language && (
            <span
              className="technical-meta ml-auto"
              style={{ color: isLight ? "#3D3E39" : "#8B92A8" }}
            >
              {language.toUpperCase()}
            </span>
          )}
        </div>
      )}
      <pre
        className="overflow-x-auto px-4 py-4 text-sm leading-relaxed"
        style={{
          backgroundColor: isLight ? "rgba(0,31,101,0.02)" : "#0A0E1A",
          color: isLight ? "#1A1B17" : "#E8EAED",
          fontFamily: "inherit",
          margin: 0,
        }}
      >
        <code className="font-sans">{code.trim()}</code>
      </pre>
    </div>
  );
}
