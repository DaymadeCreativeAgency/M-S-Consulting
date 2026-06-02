import { cn } from "@/lib/utils";
import { NumberedSectionMark } from "@/components/technical/numbered-section-mark";

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeatureGridProps {
  sectionNumber?: string;
  eyebrow?: string;
  heading?: string;
  subhead?: string;
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  tone?: "paper" | "cream" | "dark";
  className?: string;
}

const COL_CLASS = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
} as const;

export function FeatureGrid({
  sectionNumber,
  eyebrow,
  heading,
  subhead,
  items,
  columns = 3,
  tone = "paper",
  className,
}: FeatureGridProps) {
  const isDark = tone === "dark";
  const hasHeader = Boolean(sectionNumber || eyebrow || heading || subhead);

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
            className="mb-6"
          />
        )}
        {heading && (
          <h2
            className={cn(
              "font-serif text-3xl md:text-4xl font-medium tracking-display mb-4 max-w-3xl",
              isDark ? "text-dark-ink" : "text-ms-navy",
            )}
          >
            {heading}
          </h2>
        )}
        {subhead && (
          <p
            className={cn(
              "font-sans text-lg leading-relaxed max-w-2xl",
              isDark ? "text-dark-muted" : "text-charcoal-700",
            )}
          >
            {subhead}
          </p>
        )}
        <div
          className={cn(
            "grid gap-5",
            COL_CLASS[columns],
            hasHeader ? "mt-10" : "",
          )}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                "rounded-lg p-6 border",
                isDark
                  ? "bg-dark-elevated border-dark-border"
                  : tone === "cream"
                    ? "bg-ms-paper border-[rgba(0,31,101,0.08)]"
                    : "bg-ms-cream/50 border-[rgba(0,31,101,0.08)]",
              )}
            >
              <h3
                className={cn(
                  "font-sans text-base font-semibold mb-2 leading-snug",
                  isDark ? "text-dark-ink" : "text-ms-navy",
                )}
              >
                {item.title}
              </h3>
              <p
                className={cn(
                  "font-sans text-[0.95rem] leading-relaxed",
                  isDark ? "text-dark-muted" : "text-charcoal-700",
                )}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
