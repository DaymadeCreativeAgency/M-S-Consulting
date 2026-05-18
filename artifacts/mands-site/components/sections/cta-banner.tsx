import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface CTABannerProps {
  eyebrow?: string;
  heading: string;
  subhead?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tone?: "navy" | "cream";
  className?: string;
}

export function CTABanner({
  eyebrow,
  heading,
  subhead,
  primaryCta,
  secondaryCta,
  tone = "navy",
  className,
}: CTABannerProps) {
  const isNavy = tone === "navy";

  return (
    <section
      className={cn(
        isNavy ? "py-20 md:py-28 bg-ms-navy" : "ms-section-editorial",
        className,
      )}
    >
      <div className="ms-container text-center max-w-3xl mx-auto">
        {eyebrow && (
          <p
            className={cn(
              "eyebrow mb-4",
              isNavy ? "text-white/50" : "text-ms-navy/60",
            )}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={cn(
            "font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-display mb-4",
            isNavy ? "text-white" : "text-ms-navy",
          )}
        >
          {heading}
        </h2>
        {subhead && (
          <p
            className={cn(
              "font-sans text-lg leading-relaxed mb-10",
              isNavy ? "text-white/70" : "text-charcoal-700",
            )}
          >
            {subhead}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {isNavy ? (
            <>
              <Link
                href={primaryCta.href}
                className={cn(
                  "inline-flex items-center justify-center px-6 h-11 rounded-md",
                  "font-sans text-sm font-semibold",
                  "bg-white text-ms-navy hover:bg-ms-cream",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ms-navy",
                  "transition-colors duration-200",
                )}
              >
                {primaryCta.label}
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className={cn(
                    "inline-flex items-center justify-center px-6 h-11 rounded-md",
                    "font-sans text-sm font-semibold",
                    "border border-white/40 text-white hover:bg-white/10 hover:border-white/70",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                    "transition-colors duration-200",
                  )}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </>
          ) : (
            <>
              <Button asChild variant="primary" size="lg">
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              {secondaryCta && (
                <Button asChild variant="secondary" size="lg">
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
