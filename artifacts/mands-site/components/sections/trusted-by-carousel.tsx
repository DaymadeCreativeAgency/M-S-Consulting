"use client";

import { useState, useEffect, useCallback } from "react";
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

export function TrustedByCarousel() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(LOGO_PAIRS.length / PAGE_SIZE);

  const next = useCallback(() => setPage((p) => (p + 1) % totalPages), [totalPages]);
  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  useEffect(() => {
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next]);

  const visible = LOGO_PAIRS.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <section style={{ backgroundColor: "#001F65" }} className="py-14">
      <div className="ms-container">
        <p className="font-serif italic text-white/60 text-lg mb-10">Trusted by</p>

        <div className="flex items-center gap-5">
          {/* Prev arrow */}
          <button
            onClick={prev}
            className="flex-shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors duration-200"
            aria-label="Previous clients"
          >
            <ChevronLeft size={16} />
          </button>

          {/* 5-col grid: row 1 = top halves, row 2 = bottom halves */}
          <div className="flex-1 grid grid-cols-5 gap-x-6 gap-y-0">
            {/* Row 1 — top logo from each pair */}
            {visible.map((pair, i) => (
              <div
                key={`top-${i}`}
                style={{ height: 110, overflow: "hidden", position: "relative" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pair.src}
                  alt={pair.topAlt}
                  style={{
                    width: "100%",
                    height: "auto",
                    position: "absolute",
                    top: 0,
                    mixBlendMode: "screen",
                  }}
                />
              </div>
            ))}

            {/* Row 2 — bottom logo from each pair */}
            {visible.map((pair, i) => (
              <div
                key={`bot-${i}`}
                style={{ height: 110, overflow: "hidden", position: "relative" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pair.src}
                  alt={pair.botAlt}
                  style={{
                    width: "100%",
                    height: "auto",
                    position: "absolute",
                    bottom: 0,
                    mixBlendMode: "screen",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            className="flex-shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors duration-200"
            aria-label="Next clients"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Page dots */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className="transition-colors duration-200"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: i === page ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.2)",
              }}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
