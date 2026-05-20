import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CaseStudyCardProps {
  industry: string;
  metric: { value: string; label: string };
  headline: string;
  summary: string;
  href: string;
  coverImage?: string;
  className?: string;
}

export function CaseStudyCard({
  industry,
  metric,
  headline,
  summary,
  href,
  coverImage,
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
      <article className="relative h-[400px] rounded-xl overflow-hidden cursor-pointer">
        {/* Background image */}
        {coverImage ? (
          <Image
            src={coverImage}
            alt=""
            fill
            className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-ms-navy/80" />
        )}

        {/* Permanent gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-400"
          style={{
            background:
              "linear-gradient(to top, rgba(4,8,20,0.97) 0%, rgba(4,8,20,0.65) 38%, rgba(4,8,20,0.20) 65%, rgba(4,8,20,0.08) 100%)",
          }}
        />

        {/* Hover darkening layer */}
        <div className="absolute inset-0 bg-[#040814]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Top bar: industry + metric */}
        <div className="absolute top-0 left-0 right-0 p-5 flex items-start justify-between gap-4">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-white/90">
            {industry}
          </span>
          <div className="text-right shrink-0">
            <p className="font-sans font-extrabold tabular-nums text-2xl leading-none text-white drop-shadow-sm">
              {metric.value}
            </p>
            <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.1em] text-white/60 mt-0.5 max-w-[110px] leading-tight">
              {metric.label}
            </p>
          </div>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Hover-reveal: summary + CTA */}
          <div className="overflow-hidden transition-all duration-300 ease-out max-h-0 group-hover:max-h-40">
            <p className="font-sans text-sm leading-relaxed text-white/75 line-clamp-3 mb-3">
              {summary}
            </p>
            <span className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-tech-accent">
              Read case study{" "}
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </div>

          {/* Title — always visible, lifts on hover */}
          <h3 className="font-serif text-[1.15rem] leading-[1.2] text-white mt-3 transition-transform duration-300 ease-out group-hover:-translate-y-1">
            {headline}
          </h3>
        </div>

        {/* Subtle top-left corner accent on hover */}
        <div className="absolute top-0 left-0 w-0 h-[3px] bg-tech-accent rounded-br transition-all duration-300 group-hover:w-16" />
      </article>
    </Link>
  );
}
