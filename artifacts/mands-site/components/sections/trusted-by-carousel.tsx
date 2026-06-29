"use client";

import { useEffect, useRef } from "react";

const LOGO_PAIRS = [
  { src: "/media/logos/trusted-by/westinghouse-wvu.png",    topAlt: "Westinghouse",                           botAlt: "West Virginia University" },
  { src: "/media/logos/trusted-by/nasa-kraft.png",          topAlt: "NASA",                                   botAlt: "Kraft" },
  { src: "/media/logos/trusted-by/ironbow-netl.png",        topAlt: "Iron Bow Technologies",                  botAlt: "National Energy Technology Laboratory" },
  { src: "/media/logos/trusted-by/metrolina-whitecase.png", topAlt: "Metrolina Greenhouses",                  botAlt: "White & Case" },
  { src: "/media/logos/trusted-by/doj-transocean.png",      topAlt: "Department of Justice / FBI",            botAlt: "Transocean" },
  { src: "/media/logos/trusted-by/charter-cmu.png",         topAlt: "Charter Communications",                 botAlt: "Carnegie Mellon University" },
  { src: "/media/logos/trusted-by/northwestern-tjx.png",    topAlt: "Northwestern University Feinberg",       botAlt: "TJX Companies" },
  { src: "/media/logos/trusted-by/vermont-toshiba.png",     topAlt: "State of Vermont",                       botAlt: "Toshiba" },
  { src: "/media/logos/trusted-by/aopa-pcori.png",          topAlt: "AOPA",                                   botAlt: "PCORI" },
  { src: "/media/logos/trusted-by/subaru-harvard.png",      topAlt: "Subaru",                                 botAlt: "Harvard University" },
];

/** Two sequential copies make the translateX wrap seamless. */
const MARQUEE_TRACK = [...LOGO_PAIRS, ...LOGO_PAIRS];

const NORMAL_SPEED = 38; // px per second
const HOVER_SPEED = 18;  // px per second — slowed, never stopped

export function TrustedByCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pos = 0;
    let speed = NORMAL_SPEED;
    let half = track.scrollWidth / 2;
    let raf = 0;
    let last = performance.now();

    const measure = () => { half = track.scrollWidth / 2; };
    window.addEventListener("resize", measure);

    const tick = (now: number) => {
      // Clamp dt so tab-switches / long frames don't cause a large jump.
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      // Smoothly ease the speed toward its target — no teleport on hover.
      const target = hoverRef.current ? HOVER_SPEED : NORMAL_SPEED;
      speed += (target - speed) * Math.min(dt * 6, 1);

      pos -= speed * dt;
      if (half > 0 && pos <= -half) pos += half; // seamless wrap

      track.style.transform = `translate3d(${pos}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section className="overflow-hidden bg-[#0A0E1A] py-14">
      <div className="ms-container">
        <div className="mb-9 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
          <p className="font-serif text-2xl italic text-white/75">
            Trusted by teams doing complex work
          </p>
          <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => { hoverRef.current = true; }}
          onMouseLeave={() => { hoverRef.current = false; }}
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          }}
        >
          <div ref={trackRef} className="flex w-max items-center" style={{ willChange: "transform" }}>
            {MARQUEE_TRACK.map((pair, index) => (
              <div
                key={`${pair.src}-${index}`}
                className="flex min-h-[76px] w-[clamp(150px,18vw,220px)] shrink-0 items-center justify-center px-6 py-4"
                aria-hidden={index >= LOGO_PAIRS.length ? "true" : undefined}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pair.src}
                  alt={`${pair.topAlt} and ${pair.botAlt}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    mixBlendMode: "screen",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
