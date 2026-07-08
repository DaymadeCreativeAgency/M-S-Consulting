"use client";

import { Check } from "lucide-react";
import type { RoadmapStep } from "@/lib/ai-roadmap";
import { GlassIcon, STEP_ICON } from "./glass";

interface RoadmapStepViewProps {
  step: RoadmapStep;
  selected: number | null;
  onSelect: (optionIndex: number) => void;
}

/**
 * A single assessment step rendered as two distinct panes: a "concept" card
 * that frames the idea, and a high-contrast "question" card that makes the
 * decision unmistakably the primary action. Deep reference detail lives in the
 * full guide, not here.
 */
export function RoadmapStepView({ step, selected, onSelect }: RoadmapStepViewProps) {
  const Icon = STEP_ICON[step.diagram];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.84fr_1.16fr] lg:gap-5">
      {/* ── Concept card ── */}
      <div
        className="relative overflow-hidden rounded-3xl p-7 sm:p-9"
        style={{
          background: "linear-gradient(158deg, #141A2E 0%, #1A1438 52%, #271751 100%)",
          border: "1px solid rgba(184,164,232,0.18)",
          boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
        }}
      >
        {/* iridescent bloom */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #F4A8C0, transparent 70%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #8FD3E8, transparent 70%)" }}
        />

        <div className="relative">
          <div className="mb-6 flex items-center gap-4">
            <GlassIcon icon={Icon} size={58} />
            <div>
              <p
                className="font-sans uppercase"
                style={{ fontSize: "0.7rem", letterSpacing: "0.24em", color: "#8FB8F0", fontWeight: 600 }}
              >
                {step.eyebrow}
              </p>
              <p
                className="font-sans"
                style={{ fontSize: "0.78rem", color: "rgba(233,226,245,0.55)", marginTop: "0.2rem" }}
              >
                {step.dimension}
              </p>
            </div>
          </div>

          <h2
            className="font-serif font-medium text-white"
            style={{ fontSize: "clamp(1.55rem, 2.6vw, 2.15rem)", lineHeight: 1.16, marginBottom: "1rem" }}
          >
            {step.title}
          </h2>

          <p className="font-sans" style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(233,226,245,0.74)" }}>
            {step.intro}
          </p>

          <p
            className="font-serif"
            style={{
              fontSize: "1.15rem",
              fontStyle: "italic",
              lineHeight: 1.45,
              color: "#C9BAF0",
              borderLeft: "2px solid rgba(184,164,232,0.5)",
              paddingLeft: "1.1rem",
              margin: "1.75rem 0 0",
            }}
          >
            {step.pullquote}
          </p>
        </div>
      </div>

      {/* ── Question card ── */}
      <div
        className="relative flex flex-col rounded-3xl p-7 sm:p-9"
        style={{
          background: "#0B1020",
          border: "1px solid rgba(184,164,232,0.16)",
          boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
        }}
      >
        <div
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5"
          style={{ background: "rgba(244,168,192,0.1)", border: "1px solid rgba(244,168,192,0.3)" }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "linear-gradient(90deg, #B8A4E8, #F4A8C0)" }}
          />
          <span
            className="font-sans uppercase"
            style={{ fontSize: "0.68rem", letterSpacing: "0.2em", color: "#F4A8C0", fontWeight: 700 }}
          >
            {step.checkInLabel}
          </span>
        </div>

        <h3
          className="font-serif font-medium text-white"
          style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.95rem)", lineHeight: 1.22, marginBottom: "1.6rem" }}
        >
          {step.question}
        </h3>

        <div className="flex flex-col gap-2.5" role="radiogroup" aria-label={step.question}>
          {step.options.map((opt, i) => {
            const isSel = selected === i;
            return (
              <button
                key={opt.label}
                type="button"
                role="radio"
                aria-checked={isSel}
                onClick={() => onSelect(i)}
                className="group flex items-center gap-3.5 rounded-2xl px-4 py-4 text-left transition-all duration-200"
                style={{
                  border: isSel ? "1.5px solid #F4A8C0" : "1px solid rgba(184,164,232,0.22)",
                  backgroundColor: isSel ? "rgba(244,168,192,0.1)" : "rgba(255,255,255,0.02)",
                  boxShadow: isSel ? "0 8px 26px rgba(244,168,192,0.18)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isSel) {
                    e.currentTarget.style.backgroundColor = "rgba(184,164,232,0.08)";
                    e.currentTarget.style.borderColor = "rgba(184,164,232,0.45)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSel) {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)";
                    e.currentTarget.style.borderColor = "rgba(184,164,232,0.22)";
                  }
                }}
              >
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-200"
                  style={{
                    border: isSel ? "1.5px solid #F4A8C0" : "1.5px solid rgba(184,164,232,0.4)",
                    backgroundColor: isSel ? "#F4A8C0" : "transparent",
                  }}
                >
                  {isSel && <Check size={13} strokeWidth={3} color="#0A0E1A" />}
                </span>
                <span
                  className="font-sans"
                  style={{ fontSize: "0.98rem", lineHeight: 1.45, color: "rgba(233,226,245,0.94)" }}
                >
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>

        <p
          className="mt-5 font-sans"
          style={{ fontSize: "0.78rem", color: "rgba(233,226,245,0.4)" }}
        >
          Pick the option that sounds most like you today, there are no wrong answers.
        </p>
      </div>
    </div>
  );
}
