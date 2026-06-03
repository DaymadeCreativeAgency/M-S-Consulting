"use client";

import * as React from "react";
import { FadeIn } from "@/components/ui/fade-in";

type AboutStat = {
  value: number;
  suffix?: string;
  label: string;
  note: string;
  format?: "plain" | "number";
};

const STATS: AboutStat[] = [
  { value: 2002, label: "Year founded", note: "Morgantown, West Virginia", format: "plain" },
  { value: 250, suffix: "+", label: "Consultants on staff", note: "Commercial & public sector specialists" },
  { value: 20, suffix: "+", label: "Years of delivery", note: "Across government, enterprise & nonprofit" },
];

function CountUpNumber({
  value,
  suffix = "",
  delay = 0,
  format = "number",
}: {
  value: number;
  suffix?: string;
  delay?: number;
  format?: AboutStat["format"];
}) {
  const [displayValue, setDisplayValue] = React.useState(0);
  const [hasStarted, setHasStarted] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHasStarted(true);
      },
      { threshold: 0.45 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasStarted]);

  React.useEffect(() => {
    if (!hasStarted) return;

    let frame = 0;
    let timeout: number | undefined;
    const duration = 1200;
    const startTime = performance.now();

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setDisplayValue(Math.round(value * easeOutQuart(progress)));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    timeout = window.setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, delay * 1000);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [delay, hasStarted, value]);

  return (
    <div
      ref={ref}
      className="font-sans font-bold tabular-nums"
      style={{
        fontSize: "clamp(2.4rem, 4vw, 3.5rem)",
        color: "#001F65",
        lineHeight: 1,
        letterSpacing: "-0.02em",
      }}
    >
      {format === "plain" ? displayValue : displayValue.toLocaleString()}
      {suffix}
    </div>
  );
}

export function AboutStatsStrip() {
  return (
    <section style={{ backgroundColor: "#EFEADB", borderBottom: "1px solid rgba(0,31,101,0.08)" }}>
      <div className="ms-container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[rgba(0,31,101,0.12)]">
          {STATS.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.08} className="text-center md:px-10">
              <CountUpNumber value={stat.value} suffix={stat.suffix} delay={index * 0.08} format={stat.format} />
              <div
                className="font-sans font-semibold mt-2 mb-1"
                style={{ fontSize: "0.86rem", color: "#001F65", textTransform: "uppercase", letterSpacing: "0.08em" }}
              >
                {stat.label}
              </div>
              <div className="marketing-note" style={{ color: "#4B5563" }}>
                {stat.note}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
