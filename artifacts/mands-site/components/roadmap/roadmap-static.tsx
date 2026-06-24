"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Download,
  Eye,
  Lightbulb,
  ListChecks,
  Mic,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { STEPS, SUMMARY, PDF_PATH, type FocusArea, type RoadmapStep } from "@/lib/ai-roadmap";
import { StepDiagram } from "./diagrams";
import { GlassIcon, STEP_ICON } from "./glass";

const ease = [0.22, 1, 0.36, 1] as const;

/** Each focus-area tag gets a small, distinctive icon for quick scanning. */
const TAG_ICON: Record<NonNullable<FocusArea["tag"]>, LucideIcon> = {
  Example: Lightbulb,
  "Pro Tip": Sparkles,
  Insight: Eye,
  Statistic: BarChart3,
  Checklist: ListChecks,
};

/** A uniform, equal-height focus-area card. The grid stretches them to match. */
function FocusCard({ fa, idx }: { fa: FocusArea; idx: number }) {
  const TagIcon = fa.tag ? TAG_ICON[fa.tag] : null;
  return (
    <div
      className="flex h-full flex-col rounded-2xl p-6 transition-colors duration-300"
      style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(184,164,232,0.16)" }}
    >
      <div className="mb-3 flex items-center gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
          style={{ background: "rgba(184,164,232,0.12)", border: "1px solid rgba(184,164,232,0.25)" }}
        >
          {TagIcon ? (
            <TagIcon size={16} color="#C9BAF0" strokeWidth={1.8} />
          ) : (
            <span className="font-sans tabular-nums" style={{ fontSize: "0.78rem", fontWeight: 700, color: "#C9BAF0" }}>
              {idx + 1}
            </span>
          )}
        </span>
        <p className="font-serif" style={{ fontSize: "1.05rem", fontStyle: "italic", color: "#E3DAF4", lineHeight: 1.25 }}>
          {fa.title}
        </p>
      </div>

      <p className="font-sans flex-1" style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "rgba(233,226,245,0.76)" }}>
        {fa.body}
      </p>

      {fa.tag && (
        <div
          className="mt-4 rounded-xl px-3.5 py-3"
          style={{ background: "rgba(184,164,232,0.08)", border: "1px solid rgba(184,164,232,0.14)" }}
        >
          <p className="font-sans" style={{ fontSize: "0.84rem", lineHeight: 1.55, color: "rgba(233,226,245,0.82)" }}>
            <span
              className="font-sans uppercase"
              style={{ fontSize: "0.66rem", letterSpacing: "0.14em", fontWeight: 700, color: "#F4A8C0", marginRight: "0.5rem" }}
            >
              {fa.tag}
            </span>
            {fa.tagBody}
          </p>
        </div>
      )}
    </div>
  );
}

function GuideStep({ step, index }: { step: RoadmapStep; index: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const Icon = STEP_ICON[step.diagram];
  const flip = index % 2 === 1;

  return (
    <motion.article
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : reduce ? {} : { opacity: 0, y: 36 }}
      transition={{ duration: 0.7, ease }}
      className="relative overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:p-12"
      style={{
        background: "linear-gradient(162deg, #0C1120 0%, #12132B 52%, #1B1540 100%)",
        border: "1px solid rgba(184,164,232,0.16)",
        boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
      }}
    >
      {/* Oversized step number watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute select-none font-serif"
        style={{
          top: "-2.2rem",
          fontSize: "clamp(7rem, 14vw, 12rem)",
          fontWeight: 500,
          lineHeight: 1,
          color: "rgba(184,164,232,0.06)",
          ...(flip ? { left: "1.5rem" } : { right: "1.5rem" }),
        }}
      >
        {String(step.num).padStart(2, "0")}
      </span>

      {/* ── Chapter hero ── */}
      <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className={flip ? "lg:order-2" : ""}>
          <div className="mb-5 flex items-center gap-4">
            <GlassIcon icon={Icon} size={56} />
            <div>
              <p className="font-sans uppercase" style={{ fontSize: "0.7rem", letterSpacing: "0.24em", color: "#5CA7F3", fontWeight: 600 }}>
                {step.eyebrow}
              </p>
              <p className="font-sans" style={{ fontSize: "0.78rem", color: "rgba(233,226,245,0.55)", marginTop: "0.2rem" }}>
                {step.dimension}
              </p>
            </div>
          </div>

          <h3 className="font-serif font-medium text-white" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)", lineHeight: 1.16, marginBottom: "1rem" }}>
            {step.title}
          </h3>
          <p className="font-sans" style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(233,226,245,0.74)", marginBottom: "1.5rem" }}>
            {step.intro}
          </p>
          <p
            className="font-serif"
            style={{ fontSize: "1.2rem", fontStyle: "italic", lineHeight: 1.45, color: "#C9BAF0", borderLeft: "2px solid rgba(184,164,232,0.5)", paddingLeft: "1.1rem" }}
          >
            {step.pullquote}
          </p>
        </div>

        {/* Visual panel — consistent framing & height for every step */}
        <div className={flip ? "lg:order-1" : ""}>
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ background: "linear-gradient(155deg, rgba(26,18,48,0.65), rgba(44,26,74,0.5))", border: "1px solid rgba(184,164,232,0.18)" }}
          >
            {step.image ? (
              <div className="relative h-64 w-full sm:h-80">
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                {/* Blend the photo into the dark, iridescent card */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{ background: "linear-gradient(155deg, rgba(12,17,32,0.35) 0%, rgba(27,21,64,0.15) 45%, rgba(44,26,74,0.5) 100%)" }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(184,164,232,0.14), inset 0 -40px 60px rgba(12,17,32,0.45)" }}
                />
                {step.image.credit && (
                  <span
                    className="pointer-events-none absolute bottom-2.5 right-3 font-sans"
                    style={{ fontSize: "0.6rem", letterSpacing: "0.04em", color: "rgba(233,226,245,0.45)" }}
                  >
                    {step.image.credit}
                  </span>
                )}
              </div>
            ) : (
              <>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-60"
                  style={{ background: "radial-gradient(70% 60% at 30% 20%, rgba(143,184,240,0.18), transparent 70%), radial-gradient(60% 60% at 80% 90%, rgba(244,168,192,0.16), transparent 70%)" }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(184,164,232,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(184,164,232,0.7) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="relative h-64 w-full p-5 sm:h-80">
                  <StepDiagram kind={step.diagram} active={inView} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── Focus areas — uniform grid ── */}
      <div className="relative mt-10">
        <p className="mb-5 font-sans uppercase" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#B8A4E8", fontWeight: 600 }}>
          {step.focusAreasLabel}
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {step.focusAreas.map((fa, i) => (
            <FocusCard key={fa.title} fa={fa} idx={i} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/**
 * The full guide — the reading experience. Dark/premium to match the
 * assessment. Client component, but still server-rendered for first paint,
 * so all step content remains crawlable for SEO.
 */
export function RoadmapStatic() {
  return (
    <section id="full-guide" className="scroll-mt-20" style={{ backgroundColor: "#0A0E1A" }} aria-label="AI Roadmap — the full guide">
      <div className="ms-container py-20 lg:py-28">
        {/* ── Opener with product visual ── */}
        <div className="mb-16 grid grid-cols-1 items-center gap-10 lg:mb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
              style={{ background: "rgba(143,184,240,0.08)", border: "1px solid rgba(143,184,240,0.25)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "linear-gradient(90deg, #8FB8F0, #F4A8C0)" }} />
              <span className="font-sans uppercase" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#5CA7F3", fontWeight: 600 }}>
                The Complete Guide
              </span>
            </div>
            <h2 className="font-serif font-medium text-white" style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)", lineHeight: 1.12 }}>
              The eight steps, <em style={{ fontStyle: "italic", color: "#C9BAF0" }}>in depth</em>
            </h2>
            <p className="mt-5 max-w-xl font-sans" style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(233,226,245,0.72)" }}>
              The full roadmap M&amp;S Consulting uses to take organizations from ambition to action — each step
              with the focus areas, examples, and pitfalls we&rsquo;ve learned in the field.
            </p>
            <a
              href={PDF_PATH}
              download
              className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans font-semibold transition-transform duration-200 hover:scale-[1.02]"
              style={{ background: "linear-gradient(90deg, #8FB8F0, #B8A4E8 55%, #F4A8C0)", color: "#0A0E1A", fontSize: "0.88rem" }}
            >
              <Download size={15} /> Download the guide (PDF)
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

        {/* ── Chapters ── */}
        <div className="flex flex-col gap-10 lg:gap-14">
          {STEPS.map((step, i) => (
            <GuideStep key={step.id} step={step} index={i} />
          ))}
        </div>

        {/* ── Bottom line ── */}
        <div className="mx-auto mt-16 max-w-5xl lg:mt-20">
          <div
            className="relative overflow-hidden rounded-3xl p-8 sm:p-12"
            style={{ background: "linear-gradient(155deg, #0F1424 0%, #1A1230 60%, #2C1A4A 100%)", border: "1px solid rgba(184,164,232,0.2)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, #F4A8C0, transparent 70%)" }}
            />
            <div className="relative">
              <p className="mb-2 font-sans uppercase" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#B8A4E8", fontWeight: 600 }}>
                The Bottom Line
              </p>
              <h3 className="font-serif font-medium text-white" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.16, marginBottom: "2rem" }}>
                {SUMMARY.heading}
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {SUMMARY.points.map((pt, i) => (
                  <div
                    key={pt.title}
                    className="flex h-full flex-col rounded-2xl p-6"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(184,164,232,0.14)" }}
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-sans tabular-nums"
                        style={{ fontSize: "0.72rem", fontWeight: 700, border: "1.5px solid rgba(244,168,192,0.55)", color: "#F4A8C0" }}
                      >
                        {i + 1}
                      </span>
                      <p className="font-serif" style={{ fontSize: "1.1rem", fontStyle: "italic", color: "#E3DAF4" }}>
                        {pt.title}
                      </p>
                    </div>
                    <p className="font-sans" style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "rgba(233,226,245,0.76)" }}>
                      {pt.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Podcast provenance */}
              <div
                className="mt-7 flex items-start gap-4 rounded-2xl p-5"
                style={{ background: "rgba(143,184,240,0.07)", border: "1px solid rgba(143,184,240,0.18)" }}
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "rgba(143,184,240,0.14)", border: "1px solid rgba(143,184,240,0.3)" }}
                >
                  <Mic size={17} color="#8FB8F0" strokeWidth={1.8} />
                </span>
                <p className="font-sans" style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "rgba(233,226,245,0.76)" }}>
                  <span className="font-semibold text-white">{SUMMARY.podcast.title}.</span> {SUMMARY.podcast.body}
                </p>
              </div>

              <div className="mt-9 flex flex-col items-start gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: "rgba(184,164,232,0.16)" }}>
                <p className="font-sans" style={{ fontSize: "0.92rem", color: "rgba(233,226,245,0.72)", maxWidth: "26rem" }}>
                  Want the polished, designed version to share with your team?
                </p>
                <a
                  href={PDF_PATH}
                  download
                  className="font-sans inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 font-semibold transition-transform duration-200 hover:scale-[1.02]"
                  style={{ background: "linear-gradient(90deg, #8FB8F0, #B8A4E8 55%, #F4A8C0)", color: "#0A0E1A", fontSize: "0.88rem" }}
                >
                  <Download size={15} /> Download the PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
