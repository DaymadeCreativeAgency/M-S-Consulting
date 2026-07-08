"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { STEPS, type RoadmapStep } from "@/lib/ai-roadmap";
import { GlassIcon, STEP_ICON } from "./glass";
import { GuideDownloadGate } from "./guide-download-gate";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * A single high-level step row in the overview. Title, the readiness
 * dimension it covers, and a one-line teaser prompt, the detail (focus
 * areas, examples, pitfalls) lives in the gated PDF, not here.
 */
function OverviewStep({ step, index }: { step: RoadmapStep; index: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = STEP_ICON[step.diagram];

  return (
    <motion.article
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : reduce ? {} : { opacity: 0, y: 26 }}
      transition={{ duration: 0.55, ease, delay: reduce ? 0 : (index % 2) * 0.06 }}
      className="group relative flex gap-5 rounded-2xl p-6 transition-colors duration-300 sm:gap-7 sm:p-7"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(184,164,232,0.16)",
      }}
    >
      {/* Number + icon rail */}
      <div className="flex shrink-0 flex-col items-center gap-3">
        <span
          className="font-serif tabular-nums"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", fontWeight: 500, lineHeight: 1, color: "rgba(184,164,232,0.55)" }}
        >
          {String(step.num).padStart(2, "0")}
        </span>
        <GlassIcon icon={Icon} size={44} />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <p className="font-sans uppercase" style={{ fontSize: "0.66rem", letterSpacing: "0.22em", color: "#5CA7F3", fontWeight: 600 }}>
            {step.eyebrow}
          </p>
          <span
            className="rounded-full px-2.5 py-0.5 font-sans"
            style={{ fontSize: "0.68rem", color: "#C9BAF0", background: "rgba(184,164,232,0.1)", border: "1px solid rgba(184,164,232,0.2)" }}
          >
            {step.dimension}
          </span>
        </div>
        <h3 className="font-serif font-medium text-white" style={{ fontSize: "clamp(1.2rem, 2vw, 1.55rem)", lineHeight: 1.2 }}>
          {step.title}
        </h3>
        <p className="mt-2 font-sans" style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "rgba(233,226,245,0.62)" }}>
          {step.prompt}
        </p>
      </div>
    </motion.article>
  );
}

/**
 * The roadmap overview, a free, high-level walk through the eight steps.
 * The in-depth content (focus areas, examples, pitfalls) is the value, so it
 * lives behind the email gate at the bottom, not on the page.
 */
export function RoadmapStatic() {
  return (
    <section id="full-guide" className="scroll-mt-20" style={{ backgroundColor: "#0A0E1A" }} aria-label="AI Roadmap, the eight steps">
      <div className="ms-container py-20 lg:py-28">
        {/* ── Opener ── */}
        <div className="mb-14 grid grid-cols-1 items-center gap-10 lg:mb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
              style={{ background: "rgba(143,184,240,0.08)", border: "1px solid rgba(143,184,240,0.25)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "linear-gradient(90deg, #8FB8F0, #F4A8C0)" }} />
              <span className="font-sans uppercase" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#5CA7F3", fontWeight: 600 }}>
                The 8-Step Roadmap
              </span>
            </div>
            <h2 className="font-serif font-medium text-white" style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)", lineHeight: 1.12 }}>
              From ambition to action, <em style={{ fontStyle: "italic", color: "#C9BAF0" }}>in eight steps</em>
            </h2>
            <p className="mt-5 max-w-xl font-sans" style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(233,226,245,0.72)" }}>
              This is the roadmap M&amp;S Consulting uses to take organizations from AI ambition to working
              systems. Here&rsquo;s the high-level path, the full guide goes deep on each step with the focus
              areas, examples, and pitfalls we&rsquo;ve learned in the field.
            </p>
            <a
              href="#guide-gate"
              className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans font-semibold transition-transform duration-200 hover:scale-[1.02]"
              style={{ background: "linear-gradient(90deg, #8FB8F0, #B8A4E8 55%, #F4A8C0)", color: "#0A0E1A", fontSize: "0.88rem" }}
            >
              <ArrowDown size={15} /> Get the full guide
            </a>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[2.5rem] opacity-60 blur-3xl"
              style={{ background: "radial-gradient(50% 50% at 40% 35%, rgba(184,164,232,0.4), transparent 70%), radial-gradient(50% 50% at 75% 80%, rgba(244,168,192,0.3), transparent 70%)" }}
            />
            <div
              className="relative overflow-hidden rounded-[1.75rem]"
              style={{ border: "1px solid rgba(184,164,232,0.2)", boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}
            >
              <Image
                src="/media/AI-Roadmap-2025-Tablet.png"
                alt="The M&S Consulting AI Roadmap 2025 guide, shown on a tablet"
                width={1080}
                height={1080}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>

        {/* ── The eight steps, high-level ── */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
          {STEPS.map((step, i) => (
            <OverviewStep key={step.id} step={step} index={i} />
          ))}
        </div>

        {/* ── Gated full guide ── */}
        <div id="guide-gate" className="mx-auto mt-16 max-w-4xl scroll-mt-20 lg:mt-20">
          <GuideDownloadGate />
        </div>
      </div>
    </section>
  );
}
