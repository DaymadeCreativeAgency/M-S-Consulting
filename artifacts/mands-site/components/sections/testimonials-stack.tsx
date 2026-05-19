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

export function TestimonialsStack({
  testimonials,
  autoplayMs = 7000,
}: TestimonialsStackProps) {
  const n = testimonials.length;
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (fading || idx === active) return;
      setFading(true);
      setTimeout(() => {
        setActive(idx);
        setFading(false);
      }, 260);
    },
    [active, fading]
  );

  const advance = useCallback(() => {
    goTo((active + 1) % n);
  }, [active, n, goTo]);

  useEffect(() => {
    const t = setTimeout(advance, autoplayMs);
    return () => clearTimeout(t);
  }, [advance, autoplayMs]);

  const slot = (i: number) => {
    const offset = ((i - active) % n + n) % n;
    if (offset === 0) return "foreground";
    if (offset === n - 1) return "ghost1";
    if (offset === n - 2) return "ghost2";
    return "hidden";
  };

  return (
    <section
      id="testimonials"
      style={{ backgroundColor: "#001F65" }}
      className="py-24 lg:py-32 overflow-hidden"
    >
      <div className="ms-container">

        <p className="eyebrow mb-14" style={{ color: "rgba(255,255,255,0.35)" }}>
          WHAT OUR CLIENTS ARE SAYING
        </p>

        {/* Stack stage */}
        <div className="relative" style={{ minHeight: "clamp(280px, 36vw, 420px)" }}>
          {testimonials.map((t, i) => {
            const s = slot(i);
            const styles: React.CSSProperties = {
              position: "absolute",
              inset: 0,
              transition: "opacity 0.45s ease, transform 0.45s ease",
            };

            if (s === "foreground") {
              styles.opacity = fading ? 0 : 1;
              styles.transform = fading ? "translateY(-10px)" : "translateY(0)";
              styles.zIndex = 20;
            } else if (s === "ghost1") {
              styles.opacity = fading ? 0.03 : 0.045;
              styles.transform = "translateY(22px) scale(0.988)";
              styles.zIndex = 10;
              styles.transformOrigin = "top left";
              styles.userSelect = "none";
              styles.pointerEvents = "none";
            } else if (s === "ghost2") {
              styles.opacity = fading ? 0.01 : 0.02;
              styles.transform = "translateY(42px) scale(0.976)";
              styles.zIndex = 5;
              styles.transformOrigin = "top left";
              styles.userSelect = "none";
              styles.pointerEvents = "none";
            } else {
              styles.opacity = 0;
              styles.zIndex = 1;
              styles.pointerEvents = "none";
            }

            const isFg = s === "foreground";

            return (
              <div key={t.name} style={styles}>
                {/* Quote mark */}
                <span
                  className="font-serif block mb-5 leading-none select-none"
                  aria-hidden="true"
                  style={{
                    fontSize: "2.25rem",
                    color: isFg ? "rgba(92,167,243,0.55)" : "rgba(255,255,255,0.4)",
                    lineHeight: 1,
                  }}
                >
                  &ldquo;
                </span>

                {/* Quote text */}
                <p
                  className="font-serif text-white"
                  style={{
                    fontSize: "clamp(1.25rem, 2.4vw, 1.75rem)",
                    lineHeight: 1.5,
                    fontWeight: 400,
                    maxWidth: "820px",
                    marginBottom: "2rem",
                  }}
                >
                  {t.quote}
                </p>

                {/* Attribution — only visible on foreground */}
                {isFg && (
                  <div className="flex items-center gap-4">
                    <span
                      className="block w-8 h-px flex-shrink-0"
                      style={{ backgroundColor: "rgba(92,167,243,0.45)" }}
                      aria-hidden="true"
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
                )}
              </div>
            );
          })}
        </div>

        {/* Dot navigation */}
        <div className="flex items-center gap-3 mt-12">
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
                transition: "width 0.3s ease, background-color 0.3s ease",
                padding: 0,
              }}
            />
          ))}
          <span
            className="font-sans ml-2"
            style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}
          >
            {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </span>
        </div>

      </div>
    </section>
  );
}
