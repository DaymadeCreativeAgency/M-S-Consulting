"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const VISIBLE_COUNT = 5;
const SLIDE_MS = 900;
const AUTOPLAY_MS = 4200;

const LOGO_TRACK = [...LOGO_PAIRS, ...LOGO_PAIRS.slice(0, VISIBLE_COUNT)];

export function TrustedByCarousel() {
  const [current, setCurrent] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalSlides = LOGO_PAIRS.length;

  const next = useCallback(() => {
    setTransitionEnabled(true);
    setCurrent((p) => p + 1);
  }, []);

  const prev = useCallback(() => {
    if (current === 0) {
      setTransitionEnabled(false);
      setCurrent(totalSlides);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
          setCurrent(totalSlides - 1);
        });
      });
      return;
    }

    setTransitionEnabled(true);
    setCurrent((p) => p - 1);
  }, [current, totalSlides]);

  useEffect(() => {
    if (current !== totalSlides) return;

    const reset = setTimeout(() => {
      setTransitionEnabled(false);
      setCurrent(0);
      requestAnimationFrame(() => setTransitionEnabled(true));
    }, SLIDE_MS);

    return () => clearTimeout(reset);
  }, [current, totalSlides]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, next]);

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
          className="flex items-center gap-5"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={prev}
            className="flex-shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors duration-200"
            aria-label="Previous clients"
          >
            <ChevronLeft size={16} />
          </button>

          <div
            className="relative flex-1 overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)",
            }}
          >
            <div
              className="flex px-2"
              style={{
                transform: `translateX(-${current * (100 / VISIBLE_COUNT)}%)`,
                transition: transitionEnabled
                  ? `transform ${SLIDE_MS}ms cubic-bezier(0.65, 0, 0.15, 1)`
                  : "none",
              }}
            >
              {LOGO_TRACK.map((pair, index) => (
                <div
                  key={`${pair.src}-${index}`}
                  className="flex min-h-[76px] shrink-0 items-center justify-center px-5 py-4"
                  style={{ flexBasis: `${100 / VISIBLE_COUNT}%` }}
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

          <button
            onClick={next}
            className="flex-shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors duration-200"
            aria-label="Next clients"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
