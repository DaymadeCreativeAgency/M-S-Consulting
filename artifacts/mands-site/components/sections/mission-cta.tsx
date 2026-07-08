import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

interface MissionCtaProps {
  /** The closing statement. Wrap emphasised phrases in <strong> for the accent highlight. */
  children: React.ReactNode;
  /** Short invitation line beside the CTA button. */
  ctaLead?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Hide the invitation row entirely, e.g. when a contact form sits directly below. */
  hideCta?: boolean;
}

/**
 * Closing statement band used across the service-line and practice-area pages.
 * The statement itself is the hero, followed by a divider and a plain-language
 * invitation to act — no category label. Replaces the old centred block.
 */
export function MissionCta({
  children,
  ctaLead = "Let’s start the conversation.",
  ctaLabel = "Schedule a Call",
  ctaHref = "/contact",
  hideCta = false,
}: MissionCtaProps) {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ backgroundColor: "#001F65" }}
    >
      {/* ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-28 h-80 w-80 rounded-full bg-[#5CA7F3]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-[-8rem] h-80 w-80 rounded-full bg-[#FCC541]/10 blur-3xl"
      />

      <div className="ms-container relative">
        <FadeIn className="max-w-4xl">
          <div
            className="mb-8 h-[3px] w-14 rounded-full"
            style={{ background: "linear-gradient(90deg, #FCC541, #5CA7F3)" }}
          />
          <p
            className="mission-statement font-serif font-medium text-white"
            style={{ fontSize: "clamp(1.6rem, 3.1vw, 2.65rem)", lineHeight: 1.28 }}
          >
            {children}
          </p>
        </FadeIn>

        {!hideCta && (
        <FadeIn
          delay={0.1}
          direction="none"
          className="mt-10 flex flex-col gap-6 border-t pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-14"
          style={{ borderColor: "rgba(255,255,255,0.15)" }}
>
          <p className="font-sans" style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem" }}>
            {ctaLead}
          </p>
          <Link
            href={ctaHref}
            className="group inline-flex shrink-0 items-center gap-2.5 rounded-full px-8 py-4 font-sans font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#001F65",
              fontSize: "0.95rem",
              letterSpacing: "0.01em",
            }}
          >
            {ctaLabel}
            <ArrowRight
              size={17}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </FadeIn>
        )}
      </div>
    </section>
  );
}
