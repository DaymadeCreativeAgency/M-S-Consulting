"use client";

import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  org: string;
};

interface TestimonialsStackProps {
  testimonials: Testimonial[];
  autoplayMs?: number;
}

function ProgressBar({ durationMs }: { durationMs: number }) {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    const t = setTimeout(() => setWidth("100%"), 60);
    return () => {
      clearTimeout(t);
      setWidth("0%");
    };
  }, []);

  return (
    <div
      style={{
        height: "3px",
        backgroundColor: "rgba(255,255,255,0.1)",
        overflow: "hidden",
        borderRadius: "999px",
      }}
    >
      <div
        style={{
          height: "100%",
          width,
          backgroundColor: "#5CA7F3",
          transition: `width ${durationMs}ms linear`,
          borderRadius: "999px",
        }}
      />
    </div>
  );
}

export function TestimonialsStack({
  testimonials,
  autoplayMs = 7000,
}: TestimonialsStackProps) {
  const n = testimonials.length;
  const [active, setActive] = useState(0);
  const [exiting, setExiting] = useState<number | null>(null);

  const goTo = useCallback(
    (idx: number) => {
      if (idx === active) return;
      setExiting(active);
      setActive(idx);
      setTimeout(() => setExiting(null), 700);
    },
    [active]
  );

  const advance = useCallback(() => {
    goTo((active + 1) % n);
  }, [active, n, goTo]);

  const retreat = useCallback(() => {
    goTo((active - 1 + n) % n);
  }, [active, n, goTo]);

  useEffect(() => {
    const t = setTimeout(advance, autoplayMs);
    return () => clearTimeout(t);
  }, [advance, autoplayMs]);

  return (
    <section
      id="testimonials"
      style={{ backgroundColor: "#001F65" }}
      className="relative overflow-hidden py-14 lg:py-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 18% 18%, rgba(92,167,243,0.16), transparent 28%), radial-gradient(circle at 82% 68%, rgba(252,197,65,0.12), transparent 32%), linear-gradient(135deg, rgba(255,255,255,0.04), transparent 42%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-16 bottom-12 h-44 w-44 rounded-full bg-[#5CA7F3]/10 blur-2xl"
      />

      <div className="ms-container relative">
        <div className="mb-6 max-w-3xl">
          <div>
            <p className="eyebrow mb-3 text-white/40">WHAT OUR CLIENTS ARE SAYING</p>
            <h2
              className="font-serif font-medium text-white"
              style={{ fontSize: "clamp(1.75rem, 2.9vw, 2.55rem)", lineHeight: 1.08 }}
            >
              Proof from teams who had to get it right.
            </h2>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] px-14 py-7 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-sm md:px-20 md:py-8">
          <button
            type="button"
            onClick={retreat}
            className="absolute left-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/18 bg-[#001F65]/45 text-white/60 transition-colors duration-200 hover:border-white/55 hover:bg-[#001F65]/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-6"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={advance}
            className="absolute right-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/18 bg-[#001F65]/45 text-white/60 transition-colors duration-200 hover:border-white/55 hover:bg-[#001F65]/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-6"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
          <div
            aria-hidden="true"
            className="absolute right-8 top-2 select-none font-serif text-[7rem] leading-none text-white/[0.05]"
          >
            &ldquo;
          </div>

          <div className="relative" style={{ minHeight: "clamp(315px, 24vw, 390px)" }}>
            {testimonials.map((t, i) => {
              const isActive = i === active;
              const isExiting = i === exiting;

              let opacity = 0;
              let transform = "translateX(34px) scale(0.985)";
              let zIndex = 1;
              let pointerEvents: React.CSSProperties["pointerEvents"] = "none";

              if (isActive) {
                opacity = 1;
                transform = "translateX(0px) scale(1)";
                zIndex = 20;
                pointerEvents = "auto";
              } else if (isExiting) {
                opacity = 0;
                transform = "translateX(-28px) scale(0.985)";
                zIndex = 10;
              }

              return (
                <article
                  key={t.name}
                  aria-hidden={!isActive}
                  className="absolute inset-0 flex flex-col justify-between"
                  style={{
                    opacity,
                    transform,
                    zIndex,
                    pointerEvents,
                    visibility: isActive || isExiting ? "visible" : "hidden",
                    transition:
                      "opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)",
                    willChange: "opacity, transform",
                  }}
                >
                  <div className="pr-0 md:pr-6">
                    <p
                      className="font-serif text-white"
                      style={{
                        fontSize: "clamp(1.22rem, 2vw, 1.78rem)",
                        lineHeight: 1.36,
                        fontWeight: 400,
                        maxWidth: "940px",
                      }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-5 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-[#BFDFFF]">
                        {t.name}
                      </p>
                      <p className="mt-2 font-serif text-xl font-medium leading-tight text-white md:text-2xl">
                        {t.title}
                      </p>
                      {t.org && (
                        <p className="mt-1 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                          {t.org}
                        </p>
                      )}
                    </div>
                    <div className="min-w-[160px]">
                      <ProgressBar key={active} durationMs={autoplayMs} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
