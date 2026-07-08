"use client";

import { useCallback, useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  org: string;
};

interface TestimonialCinematicCarouselProps {
  testimonials: Testimonial[];
  autoplayMs?: number;
}

const SLIDE_IMAGES = [
  "/media/rowing-team-movement.jpg",
  "/media/teamwork-rowing.jpg",
  "/media/team/consultant-meeting.jpg",
  "/media/three-team-hands-scaled.jpg",
];

function SlideProgress({ durationMs, slideKey }: { durationMs: number; slideKey: number }) {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    setWidth("0%");
    const t = setTimeout(() => setWidth("100%"), 80);
    return () => clearTimeout(t);
  }, [slideKey]);

  return (
    <div className="h-[3px] overflow-hidden rounded-full bg-white/12">
      <div
        className="h-full rounded-full bg-white"
        style={{
          width,
          transition: `width ${durationMs}ms linear`,
        }}
      />
    </div>
  );
}

export function TestimonialCinematicCarousel({
  testimonials,
  autoplayMs = 7500,
}: TestimonialCinematicCarouselProps) {
  const [active, setActive] = useState(0);
  const [exiting, setExiting] = useState<number | null>(null);
  const n = testimonials.length;

  const goTo = useCallback(
    (idx: number) => {
      if (idx === active) return;
      setExiting(active);
      setActive(idx);
      window.setTimeout(() => setExiting(null), 650);
    },
    [active],
  );

  const advance = useCallback(() => {
    goTo((active + 1) % n);
  }, [active, goTo, n]);

  const retreat = useCallback(() => {
    goTo((active - 1 + n) % n);
  }, [active, goTo, n]);

  useEffect(() => {
    const t = window.setTimeout(advance, autoplayMs);
    return () => window.clearTimeout(t);
  }, [active, advance, autoplayMs]);

  return (
    <section className="bg-white px-4 py-10 lg:px-6 lg:py-14">
      <div className="mx-auto max-w-[1480px] overflow-hidden rounded-[1.5rem] bg-[#0B0B0B] p-4 text-white shadow-[0_24px_90px_rgba(0,0,0,0.24)] sm:p-5 lg:grid lg:min-h-[700px] lg:grid-cols-[0.47fr_0.53fr] lg:gap-10">
        <div className="flex min-h-[560px] flex-col justify-between px-2 py-6 sm:min-h-[600px] sm:px-5 lg:min-h-0 lg:px-8 lg:py-10">
          <div className="flex min-h-0 flex-1 flex-col">
            <p className="mb-6 flex shrink-0 items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.22em] text-white/38 lg:mb-8">
              <span aria-hidden="true" className="text-base text-white/80">
                *
              </span>
              Client Stories
            </p>
            <div className="relative min-h-[280px] flex-1 overflow-hidden sm:min-h-[340px] lg:min-h-[400px]">
              {testimonials.map((testimonial, i) => {
                const isActive = i === active;
                const isExiting = i === exiting;

                return (
                  <blockquote
                    key={testimonial.name}
                    aria-hidden={!isActive}
                    className="absolute inset-0 font-serif text-[clamp(1.3rem,1.75vw,2rem)] font-medium leading-[1.25] text-white"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0) scale(1)"
                        : isExiting
                          ? "translateY(-12px) scale(0.99)"
                          : "translateY(14px) scale(0.99)",
                      visibility: isActive || isExiting ? "visible" : "hidden",
                      transition:
                        "opacity 650ms cubic-bezier(0.4,0,0.2,1), transform 650ms cubic-bezier(0.4,0,0.2,1)",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-1 top-0 flex gap-3"
                    >
                      <span className="h-10 w-4 rounded-sm bg-white/[0.045]" />
                      <span className="h-10 w-4 rounded-sm bg-white/[0.045]" />
                    </span>
                    <span className="relative block pt-1">&ldquo;{testimonial.quote}&rdquo;</span>
                  </blockquote>
                );
              })}
            </div>
          </div>

          <div className="mt-8 shrink-0 lg:mt-10">
            <div className="mb-6 border-t border-white/12" />
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="min-h-[88px]">
                {testimonials.map((testimonial, i) => (
                  <div
                    key={testimonial.name}
                    aria-hidden={i !== active}
                    className={i === active ? "block" : "hidden"}
                  >
                    <p className="mb-2 font-sans text-base tracking-[0.08em] text-white/80">★★★★★</p>
                    <p className="font-sans text-sm font-bold text-white">{testimonial.name}</p>
                    <p className="mt-1 font-sans text-sm text-white/60">
                      {testimonial.title}
                      {testimonial.org ? ` / ${testimonial.org}` : ""}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <p className="font-sans text-sm font-bold text-white/28">
                  {String(active + 1).padStart(2, "0")}/{String(n).padStart(2, "0")}
                </p>
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={retreat}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 font-sans text-xl text-white/55 transition-colors hover:bg-white/18 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={advance}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-white font-sans text-xl text-[#111215] transition-colors hover:bg-[#E8EAED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  →
                </button>
              </div>
            </div>
            <div className="mt-7">
              <SlideProgress durationMs={autoplayMs} slideKey={active} />
            </div>
          </div>
        </div>

        <div className="relative mt-4 min-h-[300px] overflow-hidden rounded-[1.2rem] bg-white/8 sm:min-h-[340px] lg:mt-0 lg:min-h-0">
          {testimonials.map((testimonial, i) => {
            const isActive = i === active;
            const isExiting = i === exiting;

            return (
              <img
                key={testimonial.name}
                src={SLIDE_IMAGES[i % SLIDE_IMAGES.length]}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full min-h-[260px] w-full object-cover grayscale"
                style={{
                  filter: "grayscale(1) contrast(1.05) blur(0.7px)",
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? "scale(1.02) translateX(0)"
                    : isExiting
                      ? "scale(1.04) translateX(-18px)"
                      : "scale(1.04) translateX(18px)",
                  visibility: isActive || isExiting ? "visible" : "hidden",
                  transition:
                    "opacity 650ms cubic-bezier(0.4,0,0.2,1), transform 900ms cubic-bezier(0.4,0,0.2,1)",
                }}
              />
            );
          })}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,11,11,0.22),transparent_48%)]"
          />
          <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-3">
            {testimonials.map((testimonial, i) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === active}
                onClick={() => goTo(i)}
                className={i === active ? "h-2 w-12 rounded-full bg-white" : "h-2 w-2 rounded-full bg-white/45"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
