import Image from "next/image";
import { cn } from "@/lib/utils";

export interface LogoItem {
  name: string;
  src?: string;
  width?: number;
  height?: number;
}

export interface LogoCloudProps {
  eyebrow?: string;
  logos: LogoItem[];
  tone?: "paper" | "cream" | "dark";
  className?: string;
}

export function LogoCloud({
  eyebrow,
  logos,
  tone = "cream",
  className,
}: LogoCloudProps) {
  const isDark = tone === "dark";

  return (
    <section
      className={cn(
        "py-12 border-y",
        tone === "cream"
          ? "bg-ms-cream border-[rgba(0,31,101,0.08)]"
          : tone === "dark"
            ? "bg-dark-base border-dark-border"
            : "bg-ms-paper border-[rgba(0,31,101,0.06)]",
        className,
      )}
    >
      <div className="ms-container">
        {eyebrow && (
          <p
            className={cn(
              "eyebrow text-center mb-8",
              isDark ? "text-dark-muted" : "text-charcoal-700",
            )}
          >
            {eyebrow}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {logos.map((logo) =>
            logo.src ? (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={logo.width ?? 120}
                height={logo.height ?? 40}
                className={cn(
                  "h-8 w-auto object-contain transition-opacity duration-200",
                  isDark
                    ? "brightness-0 invert opacity-50 hover:opacity-80"
                    : "grayscale opacity-50 hover:opacity-70",
                )}
              />
            ) : (
              <span
                key={logo.name}
                className={cn(
                  "font-sans text-sm font-semibold tracking-wide",
                  isDark ? "text-dark-muted" : "text-charcoal-700",
                )}
              >
                {logo.name}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
