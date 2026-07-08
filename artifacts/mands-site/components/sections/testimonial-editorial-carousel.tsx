"use client";

import { useCallback, useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  org: string;
};

interface TestimonialEditorialCarouselProps {
  testimonials: Testimonial[];
  autoplayMs?: number;
}

const PORTRAITS = [
  "/media/team/headshot-1.png",
  "/media/team/headshot-2.png",
  "/media/team/headshot-3.png",
  "/media/team/headshot-4.png",
];

export function TestimonialEditorialCarousel({
  testimonials,
  autoplayMs = 7000,
}: TestimonialEditorialCarouselProps) {
  const [active, setActive] = useState(0);
  const n = testimonials.length;

  const goTo = useCallback((idx: number) => {
    setActive(idx);
  }, []);

  const advance = useCallback(() => {
    setActive((current) => (current + 1) % n);
  }, [n]);

  useEffect(() => {
    const t = window.setTimeout(advance, autoplayMs);
    return () => window.clearTimeout(t);
  }, [active, advance, autoplayMs]);

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="ms-container">
        <div className="mb-10 grid gap-8 border-b border-[#1A1B17]/15 pb-4 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.45fr)]">
          <p className="font-sans text-sm font-bold uppercase tracking-[0.22em] text-[#1A1B17]">
            Testimonials
          </p>
          <p className="hidden font-sans text-sm font-bold tracking-[0.22em] text-[#1A1B17] lg:block">
            {active + 1} / {n}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.45fr)] lg:gap-14">
          <div className="relative min-h-[400px] overflow-hidden sm:min-h-[440px] lg:min-h-[520px]">
            {testimonials.map((testimonial, i) => (
              <blockquote
                key={testimonial.name}
                aria-hidden={i !== active}
                className="absolute inset-0 max-w-5xl font-sans text-[clamp(1.55rem,2.2vw,2.75rem)] font-semibold leading-[1.26] tracking-normal text-[#1A1B17]"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? "translateY(0)" : "translateY(14px)",
                  visibility: i === active ? "visible" : "hidden",
                  transition: "opacity 520ms ease, transform 520ms ease",
                }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            ))}
          </div>

          <div className="divide-y divide-[#1A1B17]/15">
            {testimonials.map((testimonial, i) => {
              const isActive = i === active;

              return (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => goTo(i)}
                  className="grid w-full grid-cols-[minmax(0,1fr)_76px] items-start gap-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy lg:py-6"
                >
                  <div>
                    <p
                      className={
                        isActive
                          ? "font-sans text-[1.35rem] font-semibold leading-tight text-[#1A1B17]"
                          : "font-sans text-[1.35rem] font-semibold leading-tight text-[#A7A7A7]"
                      }
                    >
                      {testimonial.name}
                    </p>
                    {isActive ? (
                      <>
                        <p className="mt-2 font-sans text-[1.05rem] leading-snug text-[#A0A0A0]">
                          {testimonial.title}
                        </p>
                        <p className="mt-1 font-sans text-[1.05rem] leading-snug text-[#A0A0A0]">
                          {testimonial.org || "Client Organization"}
                        </p>
                      </>
                    ) : null}
                  </div>
                  {isActive ? (
                    <img
                      src={PORTRAITS[i % PORTRAITS.length]}
                      alt=""
                      aria-hidden="true"
                      className="h-[76px] w-[76px] object-cover"
                    />
                  ) : (
                    <span aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
