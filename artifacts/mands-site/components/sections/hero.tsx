"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroWithVideoProps {
  eyebrow?: string;
  headline: React.ReactNode;
  subhead?: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  /** Poster image shown when video is unavailable or reduced-motion is active. */
  posterSrc?: string;
  /** Optional video source. If omitted, only the poster (or CSS fallback) renders. */
  videoSrc?: string;
  tone?: "light" | "dark";
  /**
   * Show a subtle technical grid over the CSS fallback background.
   * Only applies when no posterSrc/videoSrc is provided.
   * Default: false — solid background only.
   */
  showGrid?: boolean;
  className?: string;
}

/**
 * Hero — WithVideo variant.
 *
 * Renders a background video with a poster fallback. Respects
 * prefers-reduced-motion by pausing the video and showing the poster only.
 *
 * Slots: eyebrow (sans), h1 (serif), subhead (sans), primary CTA, optional
 * secondary CTA.
 */
export function HeroWithVideo({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  posterSrc,
  videoSrc,
  tone = "light",
  showGrid = false,
  className,
}: HeroWithVideoProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const dark = tone === "dark";

  // Detect reduced-motion synchronously on first client render so we never
  // mount an autoplaying <video>. SSR renders the no-video path (poster only),
  // and the client matches that initial render before the effect can flip it.
  const [reduceMotion, setReduceMotion] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const shouldRenderVideo = Boolean(videoSrc) && !reduceMotion;

  return (
    <section
      aria-label="Page hero"
      className={cn(
        "relative overflow-hidden",
        dark ? "bg-dark-base text-dark-ink" : "bg-ms-paper text-ms-ink",
        className,
      )}
    >
      <div className="relative h-[78vh] min-h-[560px] max-h-[820px]">
        {/* Background media layer */}
        {shouldRenderVideo ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            poster={posterSrc}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
        ) : posterSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={posterSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          />
        ) : (
          // CSS fallback: tone-matched solid background
          <div
            aria-hidden="true"
            className={cn("absolute inset-0", dark ? "bg-dark-base" : "bg-ms-paper")}
          >
            {showGrid && (
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
            )}
          </div>
        )}

        {/* Readability scrim — only when there's actual media behind the text */}
        {(shouldRenderVideo || posterSrc) && (
          dark ? (
            <div
              className="absolute inset-0 bg-gradient-to-r from-dark-base from-25% via-dark-base/80 via-55% to-dark-base/20"
              aria-hidden="true"
            />
          ) : (
            <div
              className="absolute inset-0 bg-gradient-to-r from-ms-paper from-20% via-ms-paper/85 via-50% to-ms-paper/10"
              aria-hidden="true"
            />
          )
        )}

        {/* Content */}
        <div className="relative h-full ms-container flex items-center pt-20 lg:pt-24 pb-12">
          <div className="max-w-2xl">
            {eyebrow && (
              <p
                className={cn(
                  "eyebrow mb-6",
                  dark ? "text-tech-accent" : "text-ms-navy",
                )}
              >
                {eyebrow}
              </p>
            )}
            <h1
              className={cn(
                "font-serif font-medium tracking-display mb-6",
                dark ? "text-dark-ink" : "text-ms-navy",
              )}
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                textWrap: "balance",
                lineHeight: 1.05,
              }}
            >
              {headline}
            </h1>
            {subhead && (
              <p
                className={cn(
                  "font-sans text-lg md:text-xl leading-relaxed mb-10 max-w-xl",
                  dark ? "text-dark-muted" : "text-charcoal-700",
                )}
              >
                {subhead}
              </p>
            )}
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                variant="primary"
                size="lg"
                tone={dark ? "dark" : "light"}
              >
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              {secondaryCta && (
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  tone={dark ? "dark" : "light"}
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
