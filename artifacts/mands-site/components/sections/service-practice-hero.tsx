import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";

type HeroHighlightProps = {
  children: ReactNode;
};

type ServicePracticeHeroProps = {
  eyebrow: string;
  children: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  imageFit?: CSSProperties["objectFit"];
  imageObjectPosition?: CSSProperties["objectPosition"];
  imageBackground?: string;
};

export function HeroHighlight({ children }: HeroHighlightProps) {
  return (
    <span
      className="relative inline font-bold italic"
      style={{
        background:
          "linear-gradient(to top, rgba(92,167,243,0.38) 0.18em, rgba(92,167,243,0.38) 0.52em, transparent 0.52em)",
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
        paddingInline: "0.04em",
      }}
    >
      {children}
    </span>
  );
}

export function ServicePracticeHero({
  eyebrow,
  children,
  imageSrc,
  imageAlt = "",
  imageFit = "cover",
  imageObjectPosition = "center",
  imageBackground = "#0A0E1A",
}: ServicePracticeHeroProps) {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ backgroundColor: "#0A0E1A" }}
    >
      <div className="ms-container relative" style={{ zIndex: 1 }}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow mb-5" style={{ color: "#5CA7F3" }}>
              {eyebrow}
            </p>
            <h1
              className="font-serif font-medium text-white"
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.01em",
                marginBottom: "2rem",
              }}
            >
              {children}
            </h1>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-sans font-semibold transition-all duration-200"
              style={{
                backgroundColor: "#5CA7F3",
                color: "#0A0E1A",
                fontSize: "0.9rem",
                letterSpacing: "0.01em",
              }}
            >
              Schedule a Call
            </Link>
          </div>

          <div className="relative hidden lg:block" style={{ height: "480px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/graphics/geometric-5.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute"
              style={{
                top: "22%",
                left: "-12%",
                width: "116%",
                height: "auto",
                opacity: 0.9,
                mixBlendMode: "screen",
                zIndex: 0,
              }}
            />

            <div
              className="absolute overflow-hidden"
              style={{
                top: 0,
                left: "8%",
                right: 0,
                height: "64%",
                borderRadius: "20px",
                transform: "rotate(-1deg)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
                backgroundColor: imageBackground,
                zIndex: 1,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageSrc}
                alt={imageAlt}
                aria-hidden={imageAlt ? undefined : "true"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: imageFit,
                  objectPosition: imageObjectPosition,
                  display: "block",
                  padding: imageFit === "contain" ? "3rem" : undefined,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
