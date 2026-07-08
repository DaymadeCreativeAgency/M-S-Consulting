import type { Metadata } from "next";
import { TestimonialCinematicCarousel } from "@/components/sections/testimonial-cinematic-carousel";
import { TestimonialEditorialCarousel } from "@/components/sections/testimonial-editorial-carousel";
import { TestimonialLightCardCarousel } from "@/components/sections/testimonial-light-card-carousel";

const TESTIMONIALS = [
  {
    quote:
      "M&S Consulting has been a trusted business partner to me for the last 9 years. They help empower organizations to leverage the technological advancements available. I would recommend them to any organization.",
    name: "CIO",
    title: "Deltacom (now Windstream)",
    org: "Telecommunications",
  },
  {
    quote:
      "Using AI, M&S developed an innovative solution that is much better, much faster, and much less expensive than our previous process. Very rare to get all three benefits at once.",
    name: "Senior Partner",
    title: "International Law Firm",
    org: "Legal Services",
  },
  {
    quote:
      "Last year we worked 1.8 million hourly hours. This year, we will do the same amount of work in 1.7 million hours. Because of M&S Consulting's tech solutions, we will have a 100,000-hour reduction just by giving people true expectations.",
    name: "COO",
    title: "Horticulture Industry",
    org: "",
  },
  {
    quote:
      "M&S resources helped us identify areas for process improvement in correlation with customer requirements. Those resources were Lean Six Sigma trained, and also provided that methodology expertise and support in facilitation of the activities.",
    name: "Process Improvement Group Leader",
    title: "Lockheed Martin",
    org: "Defense & Aerospace",
  },
];

export const metadata: Metadata = {
  title: "Testimonial Section Variants",
  robots: { index: false, follow: false },
};

function VariantLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="ms-container py-7">
      <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#64748B]">
        {children}
      </p>
    </div>
  );
}

export default function TestimonialVariantsPage() {
  return (
    <>
      <VariantLabel>Variation 1: Cinematic Split Panel</VariantLabel>
      <TestimonialCinematicCarousel testimonials={TESTIMONIALS} />
      <VariantLabel>Variation 2: Editorial Testimonial Index</VariantLabel>
      <TestimonialEditorialCarousel testimonials={TESTIMONIALS} />
      <VariantLabel>Variation 3: Light Split Card Carousel</VariantLabel>
      <TestimonialLightCardCarousel testimonials={TESTIMONIALS} />
    </>
  );
}
