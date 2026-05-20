import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
  coverImage,
  className,
}: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block outline-none rounded-xl",
        "focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A]",
        className
      )}
    >
      <article
        className="h-full flex flex-col rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5"
        style={{
          backgroundColor: "#131829",
          border: "1px solid #1F2438",
        }}
      >
        {/* Cover image */}
        <div className="relative aspect-[16/10] overflow-hidden shrink-0">
          {coverImage ? (
            <Image
              src={coverImage}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          ) : (
            <div style={{ backgroundColor: "#1F2438" }} className="absolute inset-0" />
          )}

          {/* Scrim for text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,14,26,0.80) 0%, rgba(10,14,26,0.25) 50%, rgba(10,14,26,0.10) 100%)",
            }}
          />

          {/* Industry tag — top left */}
          <span
            className="absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-md font-sans text-[10px] font-bold uppercase tracking-[0.1em] leading-none"
            style={{
              backgroundColor: "rgba(10,14,26,0.65)",
              color: "#8B92A8",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {industry}
          </span>

        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
          <h3
            className="font-serif text-[1.05rem] leading-[1.22] mb-2.5 line-clamp-2 transition-colors duration-200"
            style={{ color: "#E8EAED" }}
          >
            {headline}
          </h3>
          <p
            className="font-sans text-[0.82rem] leading-relaxed flex-1 line-clamp-2"
            style={{ color: "#8B92A8" }}
          >
            {summary}
          </p>

          {/* Footer */}
          <div
            className="mt-4 pt-4 flex items-center justify-between gap-2"
            style={{ borderTop: "1px solid #1F2438" }}
          >
            {technologies.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {technologies.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded font-sans text-[10px] font-semibold"
                    style={{
                      backgroundColor: "rgba(92,167,243,0.10)",
                      color: "#5CA7F3",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : (
              <span />
            )}
            <span
              className="inline-flex items-center gap-1 font-sans text-xs font-bold shrink-0 group-hover:gap-2 transition-all duration-200"
              style={{ color: "#5CA7F3" }}
            >
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
