"use client";

import { STEPS } from "@/lib/ai-roadmap";

interface RoadmapProgressProps {
  current: number;
  answered: boolean[];
  onJump: (index: number) => void;
}

/** Slim horizontal step progress — replaces the cramped vertical rail. */
export function RoadmapProgress({ current, answered, onJump }: RoadmapProgressProps) {
  return (
    <div className="w-full">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <span className="font-sans uppercase" style={{ fontSize: "0.7rem", letterSpacing: "0.18em", color: "#8FB8F0", fontWeight: 600 }}>
          Step {current + 1}
          <span style={{ color: "rgba(233,226,245,0.4)" }}> / {STEPS.length}</span>
        </span>
        <span className="font-sans truncate" style={{ fontSize: "0.72rem", color: "rgba(233,226,245,0.45)" }}>
          {STEPS[current].dimension}
        </span>
      </div>
      <div className="flex gap-1.5">
        {STEPS.map((s, i) => {
          const isCurrent = i === current;
          const isDone = answered[i];
          const reachable = i < current || isDone;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => reachable && onJump(i)}
              disabled={!reachable}
              aria-label={`Step ${i + 1}: ${s.title}`}
              aria-current={isCurrent ? "step" : undefined}
              className="h-1.5 flex-1 rounded-full transition-all duration-300 disabled:cursor-default"
              style={{
                background: isCurrent
                  ? "linear-gradient(90deg, #8FB8F0, #B8A4E8 55%, #F4A8C0)"
                  : isDone
                    ? "rgba(143,184,240,0.7)"
                    : "rgba(184,164,232,0.16)",
                cursor: reachable && !isCurrent ? "pointer" : undefined,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
