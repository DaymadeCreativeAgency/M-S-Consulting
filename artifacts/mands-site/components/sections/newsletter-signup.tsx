"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "sent" | "error";

/**
 * Standalone newsletter signup card.
 * Drops into any page — pass `tone="cream"` for light backgrounds,
 * `tone="navy"` (default) for dark backgrounds.
 */
export function NewsletterSignup({
  heading = "Better technology decisions start with better questions.",
  subhead = "Get practical notes on AI, cloud, data, security, and enterprise transformation from the people doing the work.",
  eyebrow = "THE M&S FIELD NOTES",
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
    "font-sans w-full rounded-md px-4 py-3.5 text-sm outline-none transition-colors duration-200",
    isNavy
      ? "border border-white/16 bg-white/8 text-white placeholder:text-white/42 focus:border-[#5CA7F3]/70 focus:ring-4 focus:ring-[#5CA7F3]/15"
      : "border border-[#001F65]/16 bg-white text-[#1A1B17] placeholder:text-[#64748B] focus:border-[#001F65]/45 focus:ring-4 focus:ring-[#001F65]/8",
  );
  const inputStyle = {
    backgroundColor: isNavy ? "rgba(255,255,255,0.08)" : "#FFFFFF",
    border: isNavy ? "1px solid rgba(255,255,255,0.16)" : "1px solid rgba(0,31,101,0.16)",
    borderRadius: "0.375rem",
    boxSizing: "border-box" as const,
    color: isNavy ? "#FFFFFF" : "#1A1B17",
    fontSize: "0.875rem",
    outline: "none",
    padding: "0.875rem 1rem",
    width: "100%",
  };

  return (
    <section
      className={cn("py-14 lg:py-18", isNavy ? "bg-[#06101F]" : "bg-[#F4F7FB]", className)}
      aria-labelledby="newsletter-heading"
    >
      <div className="ms-container">
        <div
          className={cn(
            "overflow-hidden rounded-lg border shadow-[0_18px_54px_rgba(0,31,101,0.10)]",
            isNavy ? "border-white/10 bg-[#071735]" : "border-[#001F65]/10 bg-white",
          )}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr]">
            <div
              className="relative min-h-[260px] lg:min-h-[470px]"
              style={{
                height: "clamp(260px, 36vw, 470px)",
                minHeight: "260px",
                position: "relative",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/media/newsletter-keyboard-collage.png"
                alt="Collage of hands typing on a keyboard"
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  display: "block",
                  height: "100%",
                  inset: 0,
                  objectFit: "cover",
                  objectPosition: "center",
                  position: "absolute",
                  width: "100%",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(6,16,31,0.00) 0%, rgba(6,16,31,0.28) 100%)",
                }}
                aria-hidden="true"
              />
            </div>

            <div
              className={cn(
                "relative flex items-center px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12",
                isNavy ? "text-white" : "text-[#001F65]",
              )}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: isNavy
                    ? "linear-gradient(135deg, rgba(92,167,243,0.12), transparent 42%), linear-gradient(315deg, rgba(252,197,65,0.10), transparent 48%)"
                    : "linear-gradient(135deg, rgba(92,167,243,0.13), transparent 48%)",
                }}
                aria-hidden="true"
              />

              <div className="relative w-full">
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded-full",
                      isNavy ? "bg-[#5CA7F3]/16 text-[#9DCCFF]" : "bg-[#001F65]/8 text-[#001F65]",
                    )}
                  >
                    <Sparkles size={18} aria-hidden="true" />
                  </span>
                  <p className={cn("eyebrow", isNavy ? "text-[#9DCCFF]" : "text-[#001F65]")}>
                    {eyebrow}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
                  <div>
                    <h2
                      id="newsletter-heading"
                      className={cn("font-serif font-medium", isNavy ? "text-white" : "text-[#001F65]")}
                      style={{ fontSize: "clamp(1.75rem, 3vw, 2.55rem)", lineHeight: 1.08 }}
                    >
                      {heading}
                    </h2>
                    <p
                      className={cn("mt-4 font-sans", isNavy ? "text-white/72" : "text-[#334155]")}
                      style={{ fontSize: "1rem", lineHeight: 1.65 }}
                    >
                      {subhead}
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 xl:grid-cols-1">
                      {["Useful, not fluffy", "Enterprise-focused", "Written by practitioners"].map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <CheckCircle2
                            size={16}
                            className={isNavy ? "text-[#FCC541]" : "text-[#001F65]"}
                            aria-hidden="true"
                          />
                          <span className={cn("font-sans text-sm font-semibold", isNavy ? "text-white/86" : "text-[#001F65]")}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {status === "sent" ? (
                    <div
                      className={cn(
                        "rounded-lg border p-7",
                        isNavy ? "border-white/12 bg-white/10" : "border-[#001F65]/12 bg-[#F8FAFC]",
                      )}
                      style={{
                        borderRadius: "0.5rem",
                        padding: "1.75rem",
                      }}
                    >
                      <div
                        className={cn(
                          "mb-5 flex h-12 w-12 items-center justify-center rounded-full",
                          isNavy ? "bg-[#5CA7F3]/15" : "bg-[#001F65]/8",
                        )}
                      >
                        <CheckCircle2
                          size={20}
                          className={isNavy ? "text-[#9DCCFF]" : "text-[#001F65]"}
                        />
                      </div>
                      <p
                        className={cn("font-serif font-medium", isNavy ? "text-white" : "text-[#001F65]")}
                        style={{ fontSize: "1.45rem" }}
                      >
                        You&rsquo;re subscribed.
                      </p>
                      <p className={cn("mt-3 font-sans text-sm", isNavy ? "text-white/65" : "text-[#475569]")}>
                        Thanks for signing up. We&rsquo;ll send the useful stuff your way.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className={cn(
                        "flex w-full flex-col gap-4 rounded-lg border p-6 sm:p-7",
                        isNavy ? "border-white/14 bg-white/10 shadow-[0_22px_60px_rgba(0,0,0,0.22)]" : "border-[#001F65]/14 bg-[#F8FAFC] shadow-[0_18px_46px_rgba(0,31,101,0.10)]",
                      )}
                      style={{
                        backgroundColor: isNavy ? "rgba(255,255,255,0.10)" : "#F8FAFC",
                        border: isNavy ? "1px solid rgba(255,255,255,0.14)" : "1px solid rgba(0,31,101,0.14)",
                        borderRadius: "0.5rem",
                        boxSizing: "border-box",
                        boxShadow: isNavy ? "0 22px 60px rgba(0,0,0,0.22)" : "0 18px 46px rgba(0,31,101,0.10)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        padding: "1.75rem",
                        width: "100%",
                      }}
                    >
                      <div>
                        <p className={cn("font-sans text-base font-bold", isNavy ? "text-white" : "text-[#001F65]")}>
                          Join the list
                        </p>
                        <p className={cn("mt-1 font-sans text-sm", isNavy ? "text-white/58" : "text-[#64748B]")}>
                          Short notes for leaders making complex systems work.
                        </p>
                      </div>

                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First name"
                        aria-label="First name"
                        className={inputBase}
                        style={inputStyle}
                      />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Work email"
                        aria-label="Work email"
                        className={inputBase}
                        style={inputStyle}
                      />

                      {status === "error" && (
                        <p className="font-sans text-sm text-red-400">
                          Something went wrong. Please try again.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className={cn(
                          "font-sans inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-bold transition-colors duration-200 disabled:opacity-60",
                          isNavy
                            ? "bg-[#FCC541] text-[#06101F] hover:bg-white"
                            : "bg-[#001F65] text-white hover:bg-[#002580]",
                        )}
                        style={{
                          alignItems: "center",
                          backgroundColor: isNavy ? "#FCC541" : "#001F65",
                          border: 0,
                          borderRadius: "0.375rem",
                          boxSizing: "border-box",
                          color: isNavy ? "#06101F" : "#FFFFFF",
                          cursor: status === "submitting" ? "default" : "pointer",
                          display: "inline-flex",
                          fontSize: "0.875rem",
                          fontWeight: 700,
                          gap: "0.5rem",
                          justifyContent: "center",
                          padding: "0.875rem 1.5rem",
                          width: "100%",
                        }}
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 size={15} className="animate-spin" />
                            Subscribing
                          </>
                        ) : (
                          <>
                            Sign me up
                            <ArrowRight size={15} />
                          </>
                        )}
                      </button>

                      <p className={cn("font-sans text-xs", isNavy ? "text-white/42" : "text-[#64748B]")}>
                        No spam. No list swaps. Unsubscribe anytime.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
