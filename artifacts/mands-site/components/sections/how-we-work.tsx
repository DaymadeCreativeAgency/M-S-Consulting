"use client";

import { useState, useRef } from "react";

interface WorkPhase {
  title: string;
  description: string;
  bullets: string[];
}

const FADE_MS = 160;

export function HowWeWork({ phases }: { phases: WorkPhase[] }) {
  const [active, setActive] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const select = (i: number) => {
    if (i === active) return;
    setOpacity(0);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActive(i);
      setOpacity(1);
    }, FADE_MS);
  };

  const item = phases[active];

  return (
    <section
      id="how-we-work"
      style={{ backgroundColor: "#0A0E1A" }}
      className="py-24 lg:py-32 overflow-hidden"
    >
      <div className="ms-container">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <p className="eyebrow text-tech-accent mb-4">HOW TO WORK WITH US</p>
            <h2
              className="font-serif font-medium text-white"
              style={{
                fontSize: "clamp(2rem, 3.45vw, 3rem)",
                lineHeight: 1.1,
                maxWidth: "none",
              }}
            >
              Three ways to engage M&amp;S.
            </h2>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-0 lg:gap-20 items-start">

          {/* LEFT: step selector rail */}
          <nav aria-label="Engagement phases" className="flex flex-col mb-10 lg:mb-0">
            {phases.map((phase, i) => {
              const isActive = i === active;
              return (
                <button
                  key={phase.title}
                  type="button"
                  onClick={() => select(i)}
                  aria-pressed={isActive}
                  className="group text-left py-7 border-t border-dark-border last:border-b relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tech-accent focus-visible:ring-inset"
                >
                  {/* Active left bar */}
                  <span
                    className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300"
                    style={{ backgroundColor: isActive ? "#5CA7F3" : "transparent" }}
                    aria-hidden="true"
                  />

                  <div className="pl-5">
                    <span
                      className="font-sans text-xs font-semibold tracking-widest uppercase block mb-2 transition-colors duration-300"
                      style={{ color: isActive ? "#5CA7F3" : "rgba(139,146,168,0.5)" }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className="font-serif transition-colors duration-300"
                      style={{
                        fontSize: "clamp(1.25rem, 2vw, 1.6rem)",
                        color: isActive ? "#E8EAED" : "#8B92A8",
                        lineHeight: 1.2,
                      }}
                    >
                      {phase.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* RIGHT: content panel */}
          <div
            style={{
              opacity,
              transition: `opacity ${FADE_MS}ms ease-in-out`,
            }}
          >
            {/* Giant watermark number */}
            <div className="relative">
              <span
                className="absolute select-none pointer-events-none font-sans font-bold leading-none text-white"
                aria-hidden="true"
                style={{
                  fontSize: "clamp(8rem, 16vw, 14rem)",
                  opacity: 0.035,
                  top: "-0.1em",
                  right: 0,
                  lineHeight: 1,
                }}
              >
                0{active + 1}
              </span>

              {/* Step number + title */}
              <div className="mb-8">
                <span className="eyebrow text-tech-accent mb-3 block">
                  0{active + 1} / {item.title.toUpperCase()}
                </span>
                <p
                  className="font-serif text-white leading-relaxed"
                  style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)", maxWidth: "42ch" }}
                >
                  {item.description}
                </p>
              </div>

              {/* Divider */}
              <div
                className="mb-8"
                style={{ height: 1, backgroundColor: "rgba(31,36,56,1)", width: "100%" }}
                aria-hidden="true"
              />

              {/* Bullets — 2-col grid */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                {item.bullets.map((b, bi) => (
                  <li key={b} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#5CA7F3" }}
                      aria-hidden="true"
                    />
                    <span className="font-sans text-sm font-semibold text-dark-muted leading-snug">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
