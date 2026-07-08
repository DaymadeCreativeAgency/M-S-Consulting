import type { Metadata } from "next";
import { RoadmapExperience } from "@/components/roadmap/roadmap-experience";
import { RoadmapStatic } from "@/components/roadmap/roadmap-static";
import { RoadmapContact } from "@/components/roadmap/roadmap-contact";

export const metadata: Metadata = {
  title: "AI Roadmap, From Data Strategy to Smart Automation",
  description:
    "Walk M&S Consulting's 8-step AI Roadmap and take a 2-minute AI readiness assessment. Get a personalized maturity score, your recommended starting point, and the full guide.",
  alternates: { canonical: "/ai-roadmap" },
  openGraph: {
    title: "AI Roadmap, From Data Strategy to Smart Automation",
    description:
      "An interactive 8-step guide and AI readiness assessment from M&S Consulting. Find out where your organization stands.",
    images: ["/media/AI-Roadmap-2025-Tablet.png"],
  },
};

export default function AIRoadmapPage() {
  return (
    <>
      <RoadmapExperience />
      <RoadmapStatic />
      <RoadmapContact />
    </>
  );
}
