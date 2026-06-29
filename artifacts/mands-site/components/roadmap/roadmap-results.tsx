"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Loader2, Lock, CheckCircle2 } from "lucide-react";
import {
  STEPS,
  SUMMARY,
  PDF_PATH,
  computeScore,
  tierForScore,
  recommendedStep,
} from "@/lib/ai-roadmap";

type Status = "locked" | "submitting" | "unlocked" | "error";

/** Animated count-up for the score dial. */
function useCountUp(target: number, run: boolean) {
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? target : 0);
  useEffect(() => {
    if (!run) return;
    if (reduce) {
      setVal(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, reduce]);
  return val;
}

function ScoreDial({ score, color, animate }: { score: number; color: string; animate: boolean }) {
  const reduce = useReducedMotion();
  const display = useCountUp(score, animate);
  const r = 78;
  const circ = 2 * Math.PI * r;
  return (
    <div className="relative" style={{ width: 200, height: 200 }}>
      <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
        <circle cx="100" cy="100" r={r} fill="none" stroke="rgba(184,164,232,0.15)" strokeWidth="10" />
        <motion.circle
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={reduce ? false : { strokeDashoffset: circ }}
          animate={animate ? { strokeDashoffset: circ - (circ * score) / 100 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-serif tabular-nums text-white" style={{ fontSize: "3rem", lineHeight: 1 }}>
          {display}
        </span>
        <span className="font-sans uppercase" style={{ fontSize: "0.6rem", letterSpacing: "0.18em", color: "rgba(233,226,245,0.5)" }}>
          out of 100
        </span>
      </div>
    </div>
  );
}

interface RoadmapResultsProps {
  weights: (number | null)[];
  active: boolean;
  onRestart: () => void;
}

export function RoadmapResults({ weights, active, onRestart }: RoadmapResultsProps) {
  const [status, setStatus] = useState<Status>("locked");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [company, setCompany] = useState("");
  const [subscribe, setSubscribe] = useState(true);

  const score = computeScore(weights);
  const tier = tierForScore(score);
  const rec = recommendedStep(weights);

  // Two lowest-scored dimensions = the priorities to surface.
  const priorities = STEPS.map((s, i) => ({ step: s, weight: weights[i] ?? 0 }))
    .sort((a, b) => a.weight - b.weight)
    .slice(0, 3);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    const profileLines = STEPS.map((s, i) => {
      const w = weights[i];
      const opt = w === null ? "—" : s.options.find((o) => o.weight === w)?.label ?? "—";
      return `${s.eyebrow} · ${s.dimension}: ${opt}`;
    }).join("\n");

    const summary = `AI Readiness Assessment\nScore: ${score}/100 (${tier.name})\nRecommended starting point: ${rec.eyebrow} — ${rec.title}\n\n${profileLines}`;

    try {
      const subscribePromise = subscribe
        ? fetch("/api/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email,
              firstName,
              fields: { ai_readiness_score: String(score), ai_readiness_tier: tier.name, company },
            }),
          }).catch(() => {})
        : Promise.resolve();

      // Qualified lead to the sales inbox (Formspree), mirroring the contact form.
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_URL;
      const notify = endpoint
        ? fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              name: firstName,
              email,
              company,
              _subject: `AI Roadmap lead — ${tier.name} (${score}/100)`,
              message: summary,
            }),
          }).catch(() => {})
        : Promise.resolve();

      await Promise.all([subscribePromise, notify]);
      setStatus("unlocked");
    } catch {
      setStatus("error");
    }
  }

  const unlocked = status === "unlocked";

  return (
    <div
      className="overflow-hidden rounded-3xl px-6 py-12 sm:px-10 lg:px-14 lg:py-16"
      style={{
        backgroundColor: "#0A0E1A",
        border: "1px solid rgba(184,164,232,0.16)",
        boxShadow: "0 24px 70px rgba(0,0,0,0.5)",
      }}
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="mb-3 font-sans uppercase" style={{ fontSize: "0.7rem", letterSpacing: "0.22em", color: "#5CA7F3", fontWeight: 600 }}>
            YOUR AI READINESS PROFILE
          </p>
          <h2 className="font-serif font-medium text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", lineHeight: 1.15 }}>
            Here&rsquo;s where your organization stands.
          </h2>
        </div>

        {/* Score + tier */}
        <div className="flex flex-col items-center gap-7 sm:flex-row sm:justify-center sm:gap-12">
          <ScoreDial score={score} color={tier.color} animate={active} />
          <div className="max-w-sm text-center sm:text-left">
            <p className="font-sans uppercase" style={{ fontSize: "0.65rem", letterSpacing: "0.16em", color: "rgba(184,164,232,0.85)", marginBottom: "0.4rem" }}>
              Maturity tier
            </p>
            <p className="font-serif font-medium" style={{ fontSize: "2rem", lineHeight: 1.1, color: tier.color, marginBottom: "0.75rem" }}>
              {tier.name}
            </p>
            <p className="font-sans" style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "rgba(233,226,245,0.78)" }}>
              {tier.blurb}
            </p>
          </div>
        </div>

        {/* Gated detail block */}
        <div className="relative mt-12">
          <div
            className="rounded-2xl p-7 sm:p-9 transition-all duration-500"
            style={{
              backgroundColor: "#2C1A4A",
              filter: unlocked ? "none" : "blur(7px)",
              opacity: unlocked ? 1 : 0.55,
              pointerEvents: unlocked ? "auto" : "none",
              userSelect: unlocked ? "auto" : "none",
            }}
            aria-hidden={!unlocked}
          >
            <p className="font-sans uppercase" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#B8A4E8", fontWeight: 600, marginBottom: "1rem" }}>
              Your recommended starting point
            </p>
            <p className="font-serif font-medium text-white" style={{ fontSize: "1.5rem", lineHeight: 1.2, marginBottom: "0.5rem" }}>
              {rec.eyebrow}: {rec.title}
            </p>
            <p className="font-sans" style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "rgba(233,226,245,0.78)", marginBottom: "1.75rem" }}>
              {rec.intro}
            </p>

            <p className="font-sans uppercase" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#B8A4E8", fontWeight: 600, marginBottom: "0.9rem" }}>
              Your top priorities
            </p>
            <ol className="flex flex-col gap-3">
              {priorities.map(({ step }, i) => (
                <li key={step.id} className="flex items-start gap-3">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-sans tabular-nums"
                    style={{ fontSize: "0.7rem", fontWeight: 600, border: "1.5px solid rgba(244,168,192,0.6)", color: "#F4A8C0" }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-sans font-semibold text-white" style={{ fontSize: "0.9rem" }}>{step.dimension}</p>
                    <p className="font-sans" style={{ fontSize: "0.84rem", lineHeight: 1.5, color: "rgba(233,226,245,0.7)" }}>{step.title}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Lock overlay */}
          {!unlocked && (
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div
                className="w-full max-w-md rounded-2xl p-7 sm:p-8"
                style={{ backgroundColor: "rgba(10,14,26,0.92)", border: "1px solid rgba(184,164,232,0.25)", boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(92,167,243,0.15)" }}>
                    <Lock size={15} color="#5CA7F3" />
                  </div>
                  <p className="font-serif text-white" style={{ fontSize: "1.15rem" }}>Unlock your roadmap</p>
                </div>
                <p className="font-sans" style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "rgba(233,226,245,0.72)", marginBottom: "1.25rem" }}>
                  Get your personalized starting point, prioritized next steps, and the full AI Roadmap guide (PDF).
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First name"
                      aria-label="First name"
                      className="font-sans rounded-lg bg-transparent px-3.5 py-2.5 text-white outline-none"
                      style={{ border: "1px solid rgba(184,164,232,0.25)", fontSize: "0.88rem" }}
                    />
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company"
                      aria-label="Company"
                      className="font-sans rounded-lg bg-transparent px-3.5 py-2.5 text-white outline-none"
                      style={{ border: "1px solid rgba(184,164,232,0.25)", fontSize: "0.88rem" }}
                    />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    aria-label="Work email"
                    className="font-sans rounded-lg bg-transparent px-3.5 py-2.5 text-white outline-none"
                    style={{ border: "1px solid rgba(184,164,232,0.35)", fontSize: "0.88rem" }}
                  />
                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={subscribe}
                      onChange={(e) => setSubscribe(e.target.checked)}
                      className="h-4 w-4 rounded accent-[#F4A8C0]"
                    />
                    <span className="font-sans" style={{ fontSize: "0.88rem", color: "rgba(233,226,245,0.85)" }}>
                      Keep me subscribed to the M&amp;S newsletter for AI insights and updates
                    </span>
                  </label>
                  {status === "error" && (
                    <p className="font-sans" style={{ fontSize: "0.8rem", color: "#F4A8C0" }}>
                      Something went wrong — try again, or email{" "}
                      <a href="mailto:ai@mandsc.com" className="underline">ai@mandsc.com</a>.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="font-sans inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-200 disabled:opacity-60"
                    style={{ background: "linear-gradient(90deg, #8FB8F0, #B8A4E8 55%, #F4A8C0)", color: "#0A0E1A", fontSize: "0.88rem" }}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={15} className="animate-spin" /> Unlocking…
                      </>
                    ) : (
                      <>
                        Reveal my results <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                  <p className="font-sans text-center" style={{ fontSize: "0.72rem", color: "rgba(233,226,245,0.4)" }}>
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Unlocked extras */}
        {unlocked && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <div className="mb-8 flex items-center justify-center gap-2 text-center">
              <CheckCircle2 size={16} color="#8FB8F0" />
              <span className="font-sans" style={{ fontSize: "0.85rem", color: "rgba(233,226,245,0.75)" }}>
                Your results are unlocked{subscribe ? " — we\u2019ve sent the guide your way" : "."}
              </span>
            </div>

            {/* Summary takeaways */}
            <div className="rounded-2xl p-7 sm:p-9" style={{ backgroundColor: "#2C1A4A" }}>
              <p className="mb-5 font-serif font-medium text-white" style={{ fontSize: "1.3rem" }}>{SUMMARY.heading}</p>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {SUMMARY.points.map((pt) => (
                  <div key={pt.title}>
                    <p className="font-serif" style={{ fontSize: "1rem", fontStyle: "italic", color: "#D9CCF0", marginBottom: "0.25rem" }}>{pt.title}</p>
                    <p className="font-sans" style={{ fontSize: "0.85rem", lineHeight: 1.55, color: "rgba(233,226,245,0.75)" }}>{pt.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={PDF_PATH}
                download
                className="font-sans inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold transition-all duration-200"
                style={{ background: "linear-gradient(90deg, #8FB8F0, #B8A4E8 55%, #F4A8C0)", color: "#0A0E1A", fontSize: "0.88rem" }}
              >
                <Download size={15} /> Download the full guide
              </a>
              <Link
                href="/contact"
                className="font-sans inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold transition-all duration-200"
                style={{ border: "1.5px solid rgba(255,255,255,0.5)", color: "white", fontSize: "0.88rem" }}
              >
                Book a strategy call <ArrowRight size={15} />
              </Link>
            </div>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={onRestart}
                className="font-sans underline-offset-4 hover:underline"
                style={{ fontSize: "0.8rem", color: "rgba(233,226,245,0.5)" }}
              >
                Retake the assessment
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
