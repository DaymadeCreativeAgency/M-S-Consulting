"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const ACCENT_CLASSES = {
  none: "",
  sun: "text-sun-500",
  terra: "text-terra-700",
  forest: "text-forest-500",
} as const;

export type StatAccent = keyof typeof ACCENT_CLASSES;

export interface StatCalloutProps {
  value: string;
  label: string;
  context?: string;
  accent?: StatAccent;
  variant?: "featured" | "inline";
  tone?: "light" | "dark";
  className?: string;
}

type ParsedValue = {
  prefix: string;
  num: number;
  suffix: string;
  hasDecimal: boolean;
  decimals: number;
};

function parseValue(raw: string): ParsedValue {
  const match = raw.match(/^([^\d.,-]*)([\-\d.,]+)(.*)$/);
  if (!match) return { prefix: "", num: NaN, suffix: raw, hasDecimal: false, decimals: 0 };
  const [, prefix, numStr, suffix] = match;
  const hasDecimal = numStr.includes(".");
  const decimals = hasDecimal ? (numStr.split(".")[1]?.length ?? 0) : 0;
  const num = parseFloat(numStr.replace(/,/g, ""));
  return { prefix, num: isFinite(num) ? num : NaN, suffix, hasDecimal, decimals };
}

function formatNumber(value: number, parsed: ParsedValue): string {
  if (parsed.hasDecimal) {
    return value.toFixed(parsed.decimals);
  }
  return Math.round(value).toLocaleString();
}

function useCountUp(target: number, durationMs: number, start: boolean): number {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if (!start || !isFinite(target)) {
      setValue(target);
      return;
    }
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setValue(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, start]);
  return value;
}

export function StatCallout({
  value,
  label,
  context,
  accent = "none",
  variant = "featured",
  tone = "light",
  className,
}: StatCalloutProps) {
  const parsed = React.useMemo(() => parseValue(value), [value]);
  const ref = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const animated = useCountUp(parsed.num, 1200, inView);
  const display = isFinite(parsed.num) ? formatNumber(animated, parsed) : value;

  const numberColor =
    accent !== "none"
      ? ACCENT_CLASSES[accent]
      : tone === "dark"
        ? "text-dark-ink"
        : "text-ms-navy";

  return (
    <div ref={ref} className={cn("flex flex-col gap-2", className)}>
      <p
        className={cn(
          "font-mono font-normal tabular-nums leading-none",
          variant === "featured" ? "text-[clamp(3rem,8vw,5rem)]" : "text-3xl md:text-4xl",
          numberColor,
        )}
        aria-label={value}
      >
        <span aria-hidden="true">{parsed.prefix}</span>
        <span aria-hidden="true">{display}</span>
        <span aria-hidden="true">{parsed.suffix}</span>
      </p>
      <p
        className={cn(
          "font-sans text-xs font-medium uppercase tracking-widest",
          tone === "dark" ? "text-dark-muted" : "text-charcoal-700",
        )}
      >
        {label}
      </p>
      {context && (
        <p
          className={cn(
            "font-sans text-sm leading-relaxed mt-1 max-w-sm",
            tone === "dark" ? "text-dark-muted" : "text-charcoal-700",
          )}
        >
          {context}
        </p>
      )}
    </div>
  );
}
