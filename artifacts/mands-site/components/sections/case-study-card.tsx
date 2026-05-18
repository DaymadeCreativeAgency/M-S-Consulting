import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CaseStudyCardProps {
  industry: string;
  metric: { value: string; label: string };
  headline: string;
  summary: string;
  href: string;
  tone?: "light" | "dark";
  className?: string;
}

export function CaseStudyCard({
  industry,
  metric,
  headline,
  summary,
  href,
  tone = "light",
  className,
}: CaseStudyCardProps) {
  const dark = tone === "dark";

  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-lg outline-none",
        "focus-visible:ring-2 focus-visible:ring-offset-2",
        dark
          ? "focus-visible:ring-tech-accent focus-visible:ring-offset-dark-base"
          : "focus-visible:ring-ms-navy focus-visible:ring-offset-ms-paper",
        "active:translate-y-0",
        className,
      )}
    >
      <article
        className={cn(
          "h-full flex flex-col gap-6 p-8 rounded-lg border",
          "transition-all duration-200 ease-out",
          "motion-reduce:transition-colors motion-reduce:transform-none",
          dark
            ? "bg-dark-elevated border-dark-border group-hover:bg-[#181D32] group-hover:-translate-y-0.5 group-hover:shadow-dark-card group-active:bg-[#0E1322]"
            : "bg-ms-paper border-[rgba(0,31,101,0.10)] shadow-subtle group-hover:-translate-y-0.5 group-hover:shadow-card group-active:shadow-subtle group-active:translate-y-0",
        )}
      >
        <div className="flex items-center">
          <span
            className={cn(
              "inline-flex items-center rounded-pill px-3 py-1",
              "font-mono text-[10px] font-medium uppercase tracking-widest",
              dark
                ? "bg-dark-base text-tech-accent border border-dark-border"
                : "bg-ms-cream text-ms-navy",
            )}
          >
            {industry}
          </span>
        </div>

        <div className="space-y-1">
          <p
            className={cn(
              "font-mono font-normal tabular-nums leading-none",
              "text-4xl md:text-5xl",
              dark ? "text-dark-ink" : "text-ms-navy",
            )}
          >
            {metric.value}
          </p>
          <p
            className={cn(
              "font-sans text-xs font-medium uppercase tracking-widest",
              dark ? "text-dark-muted" : "text-charcoal-700",
            )}
          >
            {metric.label}
          </p>
        </div>

        <div className="flex-1 space-y-3">
          <h3
            className={cn(
              "font-sans text-xl font-semibold leading-snug transition-colors duration-200",
              dark
                ? "text-dark-ink"
                : "text-ms-ink group-hover:text-ms-navy",
            )}
          >
            {headline}
          </h3>
          <p
            className={cn(
              "font-sans text-sm leading-relaxed",
              dark ? "text-dark-muted" : "text-charcoal-700",
            )}
          >
            {summary}
          </p>
        </div>

        <div
          className={cn(
            "flex items-center gap-2 font-sans text-sm font-semibold",
            dark ? "text-tech-accent" : "text-ms-navy",
          )}
        >
          <span>Read case study</span>
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
            aria-hidden="true"
          />
        </div>
      </article>
    </Link>
  );
}
