"use client";

import { useEffect, useState, useCallback } from "react";

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

  useEffect(() => {
    const t = setTimeout(advance, autoplayMs);
    return () => clearTimeout(t);
  }, [advance, autoplayMs]);

  return (
    <section
      id="testimonials"
      style={{ backgroundColor: "#001F65" }}
      className="relative overflow-hidden py-24 lg:py-32"
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
        className="absolute -left-20 top-20 h-72 w-72 rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute -right-16 bottom-12 h-44 w-44 rounded-full bg-[#5CA7F3]/10 blur-2xl"
      />

      <div className="ms-container relative">
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow mb-4 text-white/40">WHAT OUR CLIENTS ARE SAYING</p>
            <h2
              className="font-serif font-medium text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.08 }}
            >
              Proof from teams who had to get it right.
            </h2>
          </div>
          <p className="max-w-xl font-sans text-base leading-relaxed text-white/58 lg:justify-self-end">
            Complex programs need more than slideware. These clients saw measurable
            progress because the work made it into operations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.22)] backdrop-blur-sm md:p-10">
            <div
              aria-hidden="true"
              className="absolute right-8 top-4 select-none font-serif text-[9rem] leading-none text-white/[0.055]"
            >
              &ldquo;
            </div>

            <div className="relative" style={{ minHeight: "clamp(320px, 28vw, 420px)" }}>
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
                    className="absolute inset-0 flex flex-col justify-between"
                    style={{
                      opacity,
                      transform,
                      zIndex,
                      pointerEvents,
                      transition:
                        "opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)",
                      willChange: "opacity, transform",
                    }}
                  >
                    <div>
                      <div className="mb-8 flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#5CA7F3]" />
                        <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-white/42">
                          Client Outcome
                        </span>
                      </div>
                      <p
                        className="font-serif text-white"
                        style={{
                          fontSize: "clamp(1.45rem, 3vw, 2.35rem)",
                          lineHeight: 1.36,
                          fontWeight: 400,
                          maxWidth: "860px",
                        }}
                      >
                        {t.quote}
                      </p>
                    </div>

                    <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-sans text-sm font-semibold text-white">
                          {t.name}
                        </p>
                        <p className="mt-1 font-sans text-xs text-white/48">
                          {t.title}
                          {t.org ? ` · ${t.org}` : ""}
                        </p>
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

          <div className="grid grid-cols-1 gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => goTo(i)}
                className="group rounded-2xl border p-4 text-left transition-all duration-300"
                style={{
                  borderColor: i === active ? "rgba(92,167,243,0.65)" : "rgba(255,255,255,0.1)",
                  backgroundColor: i === active ? "rgba(92,167,243,0.12)" : "rgba(255,255,255,0.035)",
                  transform: i === active ? "translateX(-6px)" : "translateX(0)",
                }}
                aria-label={`Show testimonial from ${t.title}`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-sans text-xs font-bold"
                    style={{
                      backgroundColor: i === active ? "#5CA7F3" : "rgba(255,255,255,0.08)",
                      color: i === active ? "#0A0E1A" : "rgba(255,255,255,0.55)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-sans text-sm font-semibold text-white/85">
                      {t.title}
                    </span>
                    <span className="mt-1 block font-sans text-xs leading-relaxed text-white/42">
                      {t.org || "Client partner"}
                    </span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
