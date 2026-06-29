"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { STEPS } from "@/lib/ai-roadmap";
import { RoadmapProgress } from "./roadmap-progress";
import { RoadmapStepView } from "./roadmap-step";
import { RoadmapResults } from "./roadmap-results";

const RESULTS_INDEX = STEPS.length;

export function RoadmapExperience() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => STEPS.map(() => null));
  const stageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const dir = useRef(1);
  const advanceTimeoutRef = useRef<number | null>(null);

  const clearAdvanceTimeout = useCallback(() => {
    if (advanceTimeoutRef.current !== null) {
      window.clearTimeout(advanceTimeoutRef.current);
      advanceTimeoutRef.current = null;
    }
  }, []);

  const weights = answers.map((a, i) => (a === null ? null : STEPS[i].options[a].weight));
  const answeredFlags = answers.map((a) => a !== null);
  const isResults = index === RESULTS_INDEX;
  const currentAnswered = !isResults && answers[index] !== null;

  const scrollToStage = useCallback(() => {
    stageRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }, [reduce]);

  const goTo = useCallback((i: number) => {
    setIndex(Math.max(0, Math.min(RESULTS_INDEX, i)));
  }, []);

  // Focus the step region on change for screen-reader + keyboard users.
  useEffect(() => {
    if (index > 0 || isResults) headingRef.current?.focus({ preventScroll: true });
  }, [index, isResults]);

  useEffect(() => () => clearAdvanceTimeout(), [clearAdvanceTimeout]);

  function handleSelect(optionIndex: number) {
    clearAdvanceTimeout();

    const isFirstSelection = answers[index] === null;

    setAnswers((prev) => {
      const next = [...prev];
      next[index] = optionIndex;
      return next;
    });
    dir.current = 1;

    // Auto-advance once on the first pick for this step. Changing an answer
    // stays put so users aren't yanked forward when comparing options or editing.
    if (isFirstSelection) {
      advanceTimeoutRef.current = window.setTimeout(() => {
        advanceTimeoutRef.current = null;
        setIndex((cur) => Math.min(RESULTS_INDEX, cur + 1));
      }, 450);
    }
  }

  function handleNext() {
    if (!currentAnswered) return;
    clearAdvanceTimeout();
    dir.current = 1;
    goTo(index + 1);
  }

  function handleBack() {
    clearAdvanceTimeout();
    dir.current = -1;
    goTo(index - 1);
  }

  function handleRestart() {
    clearAdvanceTimeout();
    setAnswers(STEPS.map(() => null));
    dir.current = -1;
    setIndex(0);
    scrollToStage();
  }

  // Keyboard navigation — forward only when the step is answered.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight" && currentAnswered && index < RESULTS_INDEX) {
        dir.current = 1;
        goTo(index + 1);
      }
      if (e.key === "ArrowLeft" && index > 0) {
        dir.current = -1;
        goTo(index - 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, currentAnswered, goTo]);

  const step = STEPS[index];
  const variants = {
    enter: (d: number) => (reduce ? { opacity: 0 } : { opacity: 0, x: d * 28 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => (reduce ? { opacity: 0 } : { opacity: 0, x: d * -28 }),
  };

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#070A14" }} aria-label="AI Readiness Assessment">
      {/* Ambient mesh + grid behind the whole experience */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          background:
            "radial-gradient(60% 50% at 18% 0%, rgba(143,184,240,0.16), transparent 60%), radial-gradient(55% 45% at 85% 10%, rgba(244,168,192,0.14), transparent 60%), radial-gradient(60% 60% at 50% 110%, rgba(184,164,232,0.16), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,164,232,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(184,164,232,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="ms-container relative py-14 lg:py-20">
        {/* ── Header ── */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
            style={{ background: "rgba(143,184,240,0.08)", border: "1px solid rgba(143,184,240,0.25)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "linear-gradient(90deg, #8FB8F0, #F4A8C0)" }} />
            <span className="font-sans uppercase" style={{ fontSize: "0.68rem", letterSpacing: "0.24em", color: "#8FB8F0", fontWeight: 600 }}>
              M&amp;S Consulting · AI Roadmap
            </span>
          </div>
          <h1 className="font-serif font-medium text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1.1 }}>
            <em style={{ fontStyle: "italic" }}>From</em> Data Strategy <em style={{ fontStyle: "italic" }}>to</em> Smart Automation
          </h1>
          <p className="mx-auto mt-5 font-sans" style={{ fontSize: "1.05rem", lineHeight: 1.6, color: "rgba(233,226,245,0.7)", maxWidth: "34rem" }}>
            Eight questions, about two minutes. See where your organization stands — and get a
            personalized roadmap for what to do next.
          </p>
        </div>

        {/* ── Stage ── */}
        <div ref={stageRef} className="mx-auto max-w-5xl scroll-mt-24">
          {!isResults && (
            <div className="mb-6 px-1">
              <RoadmapProgress
                current={index}
                answered={answeredFlags}
                onJump={(i) => {
                  clearAdvanceTimeout();
                  dir.current = i < index ? -1 : 1;
                  goTo(i);
                }}
              />
            </div>
          )}

          <div ref={headingRef} tabIndex={-1} className="outline-none" aria-live="polite">
            <AnimatePresence mode="wait" custom={dir.current}>
              {isResults ? (
                <motion.div
                  key="results"
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? {} : { opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <RoadmapResults weights={weights} active onRestart={handleRestart} />
                </motion.div>
              ) : (
                <motion.div
                  key={step.id}
                  custom={dir.current}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <RoadmapStepView step={step} selected={answers[index]} onSelect={handleSelect} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Controls ── */}
          {!isResults && (
            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                disabled={index === 0}
                className="font-sans inline-flex items-center gap-2 rounded-full px-5 py-2.5 transition-colors duration-200 disabled:opacity-30"
                style={{ border: "1px solid rgba(184,164,232,0.3)", color: "rgba(233,226,245,0.85)", fontSize: "0.88rem" }}
              >
                <ArrowLeft size={15} /> Back
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!currentAnswered}
                title={currentAnswered ? undefined : "Choose an answer to continue"}
                className="font-sans inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-semibold transition-all duration-200 disabled:cursor-not-allowed"
                style={{
                  background: currentAnswered
                    ? "linear-gradient(90deg, #8FB8F0, #B8A4E8 55%, #F4A8C0)"
                    : "rgba(184,164,232,0.12)",
                  color: currentAnswered ? "#0A0E1A" : "rgba(233,226,245,0.4)",
                  fontSize: "0.88rem",
                }}
              >
                {index === STEPS.length - 1 ? "See my results" : "Next"} <ArrowRight size={15} />
              </button>
            </div>
          )}

          {/* Quiet path to the reading experience */}
          {!isResults && (
            <div className="mt-7 text-center">
              <a
                href="#full-guide"
                className="font-sans inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:underline"
                style={{ fontSize: "0.82rem", color: "rgba(233,226,245,0.45)" }}
              >
                <BookOpen size={13} /> Prefer to browse? Skip to the 8-step overview
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
