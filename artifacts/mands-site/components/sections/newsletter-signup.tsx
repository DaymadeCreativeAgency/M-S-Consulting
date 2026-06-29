"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "sent" | "error";

/**
 * Standalone newsletter signup card.
 * Drops into any page — pass `tone="cream"` for light backgrounds,
 * `tone="navy"` (default) for dark backgrounds.
 */
export function NewsletterSignup({
  heading = "Stay ahead of the curve.",
  subhead = "Practical AI, digital transformation, and technology insights — delivered to your inbox.",
  eyebrow = "NEWSLETTER",
  tone = "navy",
  tagIds,
  className,
}: {
  heading?: string;
  subhead?: string;
  eyebrow?: string;
  tone?: "navy" | "cream";
  /** Kit tag IDs to apply when someone subscribes from this page */
  tagIds?: number[];
  className?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const isNavy = tone === "navy";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, tagIds }),
      });
      if (!res.ok) throw new Error("Subscription failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const inputBase = cn(
    "font-sans w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200",
    isNavy
      ? "bg-white/8 border border-white/16 text-white placeholder:text-white/35 focus:border-[#5CA7F3]/60 focus:ring-4 focus:ring-[#5CA7F3]/15"
      : "bg-white border border-[#001F65]/14 text-[#1A1B17] placeholder:text-[#94A3B8] focus:border-[#001F65]/40 focus:ring-4 focus:ring-[#001F65]/8",
  );

  return (
    <section
      className={cn("py-16 lg:py-20", isNavy ? "bg-[#001F65]" : "bg-[#EFEADB]", className)}
    >
      <div className="ms-container">
        <div
          className={cn(
            "overflow-hidden rounded-2xl",
            isNavy
              ? "border border-white/10 bg-white/[0.04]"
              : "border border-[#001F65]/10 bg-white shadow-[0_14px_40px_rgba(0,31,101,0.07)]",
          )}
        >
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: copy */}
            <div className="px-8 py-10 sm:px-12 lg:py-12">
              <p
                className={cn(
                  "eyebrow mb-4",
                  isNavy ? "text-[#5CA7F3]" : "text-[#001F65]",
                )}
              >
                {eyebrow}
              </p>
              <h2
                className={cn(
                  "font-serif font-medium",
                  isNavy ? "text-white" : "text-[#001F65]",
                )}
                style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", lineHeight: 1.2 }}
              >
                {heading}
              </h2>
              <p
                className={cn(
                  "mt-4 font-sans",
                  isNavy ? "text-white/65" : "text-[#4A5568]",
                )}
                style={{ fontSize: "1rem", lineHeight: 1.75 }}
              >
                {subhead}
              </p>
            </div>

            {/* Right: form */}
            <div
              className={cn(
                "flex items-center px-8 py-10 sm:px-12 lg:py-12",
                isNavy
                  ? "border-t border-white/8 lg:border-l lg:border-t-0"
                  : "border-t border-[#001F65]/8 lg:border-l lg:border-t-0",
              )}
            >
              {status === "sent" ? (
                <div className="flex flex-col gap-3">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full",
                      isNavy ? "bg-[#5CA7F3]/15" : "bg-[#001F65]/8",
                    )}
                  >
                    <CheckCircle2
                      size={20}
                      className={isNavy ? "text-[#5CA7F3]" : "text-[#001F65]"}
                    />
                  </div>
                  <p
                    className={cn(
                      "font-serif font-medium",
                      isNavy ? "text-white" : "text-[#001F65]",
                    )}
                    style={{ fontSize: "1.3rem" }}
                  >
                    You&rsquo;re subscribed.
                  </p>
                  <p
                    className={cn(
                      "font-sans text-sm",
                      isNavy ? "text-white/65" : "text-[#4A5568]",
                    )}
                  >
                    Thanks for signing up — look out for insights in your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First name"
                      aria-label="First name"
                      className={inputBase}
                    />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Work email"
                      aria-label="Work email"
                      className={inputBase}
                    />
                  </div>

                  {status === "error" && (
                    <p
                      className="font-sans text-sm text-red-400"
                    >
                      Something went wrong — please try again.
                    </p>
                  )}

                  <div className="flex items-center justify-between gap-4">
                    <p
                      className={cn(
                        "font-sans text-xs",
                        isNavy ? "text-white/35" : "text-[#94A3B8]",
                      )}
                    >
                      No spam. Unsubscribe anytime.
                    </p>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className={cn(
                        "font-sans inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-colors duration-200 disabled:opacity-60",
                        isNavy
                          ? "bg-[#5CA7F3] text-[#0A0E1A] hover:bg-white"
                          : "bg-[#001F65] text-white hover:bg-[#002580]",
                      )}
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          Subscribing…
                        </>
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight size={14} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
