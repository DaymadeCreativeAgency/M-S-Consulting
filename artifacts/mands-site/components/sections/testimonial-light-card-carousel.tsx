"use client";

import { useCallback, useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  org: string;
};

interface TestimonialLightCardCarouselProps {
  testimonials: Testimonial[];
  autoplayMs?: number;
}

const IMAGES = [
  "/media/team/contact-laptop.jpg",
  "/media/team/consultant-meeting.jpg",
  "/media/team/about-office.png",
  "/media/team/ms-2025-group-photo.jpg",
];

export function TestimonialLightCardCarousel({
  testimonials,
  autoplayMs = 7000,
}: TestimonialLightCardCarouselProps) {
  const [active, setActive] = useState(0);
  const n = testimonials.length;

  const advance = useCallback(() => {
    setActive((current) => (current + 1) % n);
  }, [n]);

  const retreat = useCallback(() => {
    setActive((current) => (current - 1 + n) % n);
  }, [n]);

  useEffect(() => {
    const t = window.setTimeout(advance, autoplayMs);
    return () => window.clearTimeout(t);
  }, [active, advance, autoplayMs]);

  return (
    <section className="relative overflow-hidden bg-[#001F65] px-4 py-12 lg:px-6 lg:py-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(92,167,243,0.65), transparent 42%), url('/media/teamwork-rowing.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(0.75)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1480px] overflow-hidden rounded-[2rem] bg-white text-[#282828] shadow-[0_24px_90px_rgba(0,0,0,0.24)] lg:grid-cols-[0.42fr_0.58fr] lg:min-h-[600px]">
        <div className="relative min-h-[320px] overflow-hidden rounded-b-[2rem] sm:min-h-[360px] lg:min-h-0 lg:rounded-r-[2rem] lg:rounded-bl-none">
          {testimonials.map((testimonial, i) => (
            <img
              key={testimonial.name}
              src={IMAGES[i % IMAGES.length]}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover grayscale"
              style={{
                opacity: i === active ? 1 : 0,
                transform: i === active ? "scale(1)" : "scale(1.035)",
                visibility: i === active ? "visible" : "hidden",
                transition: "opacity 620ms ease, transform 900ms ease",
              }}
            />
          ))}
        </div>

        <div className="flex min-h-[540px] flex-col px-8 py-10 sm:px-12 lg:min-h-[600px] lg:px-16 lg:py-12">
          <p className="shrink-0 font-sans text-sm font-bold text-ms-navy">M&amp;S Consulting</p>
          <div className="relative mt-6 min-h-[300px] flex-1 overflow-hidden sm:min-h-[320px] lg:mt-8 lg:min-h-[360px]">
            {testimonials.map((testimonial, i) => (
              <figure
                key={testimonial.name}
                aria-hidden={i !== active}
                className="absolute inset-0 flex flex-col"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? "translateX(0)" : "translateX(16px)",
                  visibility: i === active ? "visible" : "hidden",
                  transition: "opacity 560ms ease, transform 560ms ease",
                }}
              >
                <blockquote className="font-sans text-[clamp(1.35rem,2vw,2.45rem)] font-bold leading-[1.26] tracking-normal text-[#2B2B2B]">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 shrink-0 lg:mt-8">
                  <p className="font-sans text-xl font-bold text-[#2B2B2B]">{testimonial.name}</p>
                  <p className="mt-2 font-sans text-lg font-semibold text-[#7A7A7A]">
                    {testimonial.title}
                    {testimonial.org ? ` / ${testimonial.org}` : ""}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 shrink-0 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mt-10">
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, i) => (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => setActive(i)}
                  className={i === active ? "h-2.5 w-12 rounded-full bg-[#2B2B2B]" : "h-2.5 w-2.5 rounded-full bg-[#8C8C8C]"}
                />
              ))}
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={retreat}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5A5A5A] font-sans text-3xl text-white transition-colors hover:bg-[#3F3F3F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={advance}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5A5A5A] font-sans text-3xl text-white transition-colors hover:bg-[#3F3F3F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
