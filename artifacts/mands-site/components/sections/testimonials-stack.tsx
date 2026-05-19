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
        height: "1px",
        backgroundColor: "rgba(255,255,255,0.08)",
        marginTop: "28px",
        overflow: "hidden",
        borderRadius: "1px",
      }}
    >
      <div
        style={{
          height: "100%",
          width,
          backgroundColor: "rgba(92,167,243,0.45)",
          transition: `width ${durationMs}ms linear`,
          borderRadius: "1px",
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
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Depth gradient — lighter pool top-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 80% at 75% 20%, rgba(2,30,110,0.9) 0%, transparent 65%)",
        }}
      />

      {/* Decorative oversized quote mark */}
      <div
        className="absolute pointer-events-none select-none"
        aria-hidden="true"
        style={{
          right: "5%",
          top: "8%",
          fontFamily: "Georgia, 'Source Serif 4', serif",
          fontSize: "clamp(180px, 20vw, 320px)",
          lineHeight: 1,
          color: "rgba(255,255,255,0.03)",
          userSelect: "none",
          letterSpacing: "-0.05em",
        }}
      >
        &ldquo;
      </div>

      <div className="ms-container relative">
        <p className="eyebrow mb-14" style={{ color: "rgba(255,255,255,0.35)" }}>
          WHAT OUR CLIENTS ARE SAYING
        </p>

        {/* Quote stage */}
        <div
          className="relative"
          style={{ minHeight: "clamp(260px, 34vw, 400px)" }}
        >
          {testimonials.map((t, i) => {
            const isActive = i === active;
            const isExiting = i === exiting;

            let opacity = 0;
            let transform = "translateY(14px)";
            let zIndex = 1;
            let pointerEvents: React.CSSProperties["pointerEvents"] = "none";

            if (isActive) {
              opacity = 1;
              transform = "translateY(0px)";
              zIndex = 20;
              pointerEvents = "auto";
            } else if (isExiting) {
              opacity = 0;
              transform = "translateY(-10px)";
              zIndex = 10;
            }

            return (
              <div
                key={t.name}
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity,
                  transform,
                  zIndex,
                  pointerEvents,
                  transition:
                    "opacity 0.65s cubic-bezier(0.4,0,0.2,1), transform 0.65s cubic-bezier(0.4,0,0.2,1)",
                  willChange: "opacity, transform",
                }}
              >
                {/* Left accent bar */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "6px",
                    width: "2px",
                    height: "52px",
                    backgroundColor: "rgba(92,167,243,0.5)",
                    borderRadius: "2px",
                  }}
                />

                {/* Quote text */}
                <p
                  className="font-serif text-white"
                  style={{
                    fontSize: "clamp(1.2rem, 2.3vw, 1.7rem)",
                    lineHeight: 1.6,
                    fontWeight: 400,
                    maxWidth: "780px",
                    marginBottom: "2.25rem",
                    paddingLeft: "22px",
                  }}
                >
                  {t.quote}
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-4 pl-[22px]">
                  <span
                    aria-hidden="true"
                    style={{
                      display: "block",
                      width: "28px",
                      height: "1px",
                      flexShrink: 0,
                      backgroundColor: "rgba(92,167,243,0.4)",
                    }}
                  />
                  <div>
                    <p className="font-sans text-sm font-semibold text-white">
                      {t.name}
                    </p>
                    <p
                      className="font-sans text-xs mt-0.5"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {t.title}
                      {t.org ? ` · ${t.org}` : ""}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dot navigation */}
        <div className="flex items-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                width: i === active ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor:
                  i === active
                    ? "rgba(92,167,243,0.85)"
                    : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                transition: "width 0.35s ease, background-color 0.35s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Autoplay progress bar */}
        <ProgressBar key={active} durationMs={autoplayMs} />
      </div>
    </section>
  );
}
