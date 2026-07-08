import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

interface MissionCtaProps {
  /** Small uppercase label above the statement. */
  eyebrow?: string;
  /** The mission statement. Wrap emphasised phrases in <strong> for the accent highlight. */
  children: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
}

/**
 * Editorial mission / closing-CTA band used across the service-line and
 * practice-area pages. Left-aligned, asymmetric layout with an accent rule,
 * highlighted key phrases, and ambient glows, replacing the old centred block.
 */
export function MissionCta({
  eyebrow = "Our Mission",
  children,
  ctaLabel = "Schedule a Call",
  ctaHref = "/contact",
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
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:items-end lg:gap-x-16">
          <FadeIn className="lg:col-span-8">
            <p className="eyebrow mb-5" style={{ color: "#FCC541", letterSpacing: "0.16em" }}>
              {eyebrow}
            </p>
            <div
              className="mb-8 h-[3px] w-16 rounded-full"
              style={{ background: "linear-gradient(90deg, #FCC541, #5CA7F3)" }}
            />
            <p
              className="mission-statement font-serif font-medium text-white"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.32 }}
            >
              {children}
            </p>
          </FadeIn>

          <FadeIn delay={0.12} direction="none" className="lg:col-span-4 lg:pb-2">
            <Link
              href={ctaHref}
              className="group inline-flex items-center gap-2.5 rounded-full px-8 py-4 font-sans font-semibold transition-all duration-200 hover:-translate-y-0.5"
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
        </div>
      </div>
    </section>
  );
}
