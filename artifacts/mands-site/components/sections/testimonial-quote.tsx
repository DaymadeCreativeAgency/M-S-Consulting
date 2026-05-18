import { cn } from "@/lib/utils";
import { NumberedSectionMark } from "@/components/technical/numbered-section-mark";

export interface TestimonialQuoteProps {
  quote: string;
  attribution?: string;
  title?: string;
  sectionNumber?: string;
  eyebrow?: string;
  tone?: "paper" | "cream" | "dark";
  className?: string;
}

export function TestimonialQuote({
  quote,
  attribution,
  title,
  sectionNumber,
  eyebrow,
  tone = "cream",
  className,
}: TestimonialQuoteProps) {
  const isDark = tone === "dark";

  return (
    <section
      className={cn(
        tone === "cream"
          ? "ms-section-editorial"
          : tone === "dark"
            ? "ms-section-dark bg-dark-base"
            : "ms-section",
        className,
      )}
    >
      <div className="ms-container">
        {(sectionNumber || eyebrow) && (
          <NumberedSectionMark
            number={sectionNumber ?? ""}
            label={eyebrow ?? ""}
            color={isDark ? "accent" : "navy"}
            className="mb-10"
          />
        )}
        <figure className="max-w-4xl mx-auto text-center">
          <blockquote>
            <p
              className={cn(
                "font-serif text-2xl md:text-3xl lg:text-4xl font-medium leading-snug tracking-display",
                isDark ? "text-dark-ink" : "text-ms-navy",
              )}
            >
              &ldquo;{quote}&rdquo;
            </p>
          </blockquote>
          {(attribution || title) && (
            <figcaption
              className={cn(
                "mt-8 font-sans text-xs font-semibold uppercase tracking-widest",
                isDark ? "text-dark-muted" : "text-charcoal-700",
              )}
            >
              {attribution && <span>{attribution}</span>}
              {attribution && title && (
                <span className="mx-2 opacity-40">/</span>
              )}
              {title && <span>{title}</span>}
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  );
}
