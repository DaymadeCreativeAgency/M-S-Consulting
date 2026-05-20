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
  technologies?: string[];
  coverImage?: string;
  className?: string;
}

export function CaseStudyCard({
  industry,
  metric,
  headline,
  summary,
  href,
  technologies = [],
  className,
}: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block outline-none rounded-xl",
        "focus-visible:ring-2 focus-visible:ring-ms-navy focus-visible:ring-offset-2",
        className
      )}
    >
      <article className="h-full flex flex-col rounded-xl border border-[rgba(0,31,101,0.10)] bg-ms-paper overflow-hidden transition-all duration-200 hover:shadow-[0_8px_32px_rgba(0,31,101,0.12)] hover:border-[rgba(0,31,101,0.22)] hover:-translate-y-0.5">

        {/* Metric band */}
        <div
          className="px-6 py-5 border-b border-[rgba(0,31,101,0.08)]"
          style={{ backgroundColor: "#EFEADB" }}
        >
          <div className="flex items-start justify-between gap-4">
            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-ms-navy font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-white leading-none self-start mt-0.5">
              {industry}
            </span>
            <div className="text-right shrink-0">
              <p className="font-sans font-extrabold tabular-nums text-[1.9rem] leading-none text-ms-navy">
                {metric.value}
              </p>
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-ms-navy/60 mt-1 leading-tight max-w-[130px] ml-auto">
                {metric.label}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
          <h3 className="font-serif text-[1.1rem] leading-[1.22] text-ms-ink mb-3 group-hover:text-ms-navy transition-colors duration-200 line-clamp-3">
            {headline}
          </h3>
          <p className="font-sans text-[0.84rem] leading-relaxed text-charcoal-700 flex-1 line-clamp-2">
            {summary}
          </p>

          {/* Footer */}
          <div className="mt-5 pt-4 border-t border-[rgba(0,31,101,0.07)] flex items-center justify-between gap-2">
            {technologies.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {technologies.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded font-sans text-[10px] font-semibold text-ms-navy bg-ms-navy/[0.07]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : (
              <span />
            )}
            <span className="inline-flex items-center gap-1 font-sans text-xs font-bold text-ms-navy shrink-0 group-hover:gap-2 transition-all duration-200">
              Read{" "}
              <ArrowRight
                className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
