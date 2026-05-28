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

const PAGE_SIZE = 5;
const SLIDE_MS = 900;
const AUTOPLAY_MS = 4200;

const PAGES = Array.from(
  { length: Math.ceil(LOGO_PAIRS.length / PAGE_SIZE) },
  (_, i) => LOGO_PAIRS.slice(i * PAGE_SIZE, (i + 1) * PAGE_SIZE)
);

export function TrustedByCarousel() {
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalPages = PAGES.length;

  const goTo = useCallback((newPage: number) => {
    setPage((newPage + totalPages) % totalPages);
  }, [totalPages]);

  const next = useCallback(() => {
    setPage((p) => (p + 1) % totalPages);
  }, [totalPages]);

  const prev = useCallback(() => {
    setPage((p) => (p - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, next]);

  return (
    <section style={{ backgroundColor: "#001F65" }} className="py-16 overflow-hidden">
      <div className="ms-container">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-3 text-white/35">TRUSTED BY</p>
            <p className="font-serif text-2xl italic text-white/75">
              Teams doing complex work
            </p>
          </div>
          <p className="max-w-md font-sans text-sm leading-relaxed text-white/45">
            Commercial, public sector, higher education, healthcare, and mission-driven organizations.
          </p>
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
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <div
              className="flex"
              style={{
                width: `${totalPages * 100}%`,
                transform: `translateX(-${(page * 100) / totalPages}%)`,
                transition: `transform ${SLIDE_MS}ms cubic-bezier(0.65, 0, 0.15, 1)`,
              }}
            >
              {PAGES.map((logos, pageIndex) => (
                <div
                  key={pageIndex}
                  className="grid grid-cols-2 gap-x-6 gap-y-7 px-2 sm:grid-cols-5"
                  style={{ width: `${100 / totalPages}%` }}
                >
                  {logos.map((pair) => (
                    <div
                      key={pair.src}
                      className="flex min-h-[76px] items-center justify-center rounded-xl border border-white/5 bg-white/[0.025] px-5 py-4"
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
              ))}
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/5"
            />
          </div>

          <button
            onClick={next}
            className="flex-shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors duration-200"
            aria-label="Next clients"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-colors duration-200"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: i === page ? "rgba(92,167,243,0.9)" : "rgba(255,255,255,0.2)",
              }}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
