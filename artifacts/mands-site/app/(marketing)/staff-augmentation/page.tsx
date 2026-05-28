import type { Metadata } from "next";

import { StandaloneMarketingPage } from "@/components/sections/standalone-marketing-page";

export const metadata: Metadata = {
  title: "Staff Augmentation Services",
  description:
    "Strategic staff augmentation from M&S Consulting, backed by 20+ years of technology delivery and a 250-person consulting network.",
  alternates: { canonical: "/staff-augmentation" },
};

const sections = [
  {
    eyebrow: "Scale",
    title: "Add capacity without slowing the team down",
    body: [
      "Even strong teams do not always have the specialized expertise or bandwidth needed for every initiative. Staff augmentation gives you access to the right people when demand changes.",
      "M&S can supplement an existing team with a few specialists, provide project management support, or take ownership of a workstream when you need more hands and more delivery discipline.",
    ],
    bullets: [
      "Specialists who integrate into active projects quickly.",
      "Flexible support that scales up or down with demand.",
      "Only pay for the expertise and capacity you use.",
    ],
  },
  {
    eyebrow: "Fit",
    title: "Support for teams of every size",
    body: [
      "From small organizations to large enterprises and major consulting firms, M&S provides strategic staff augmentation tailored to the challenge in front of the client.",
      "We can provide a dedicated IT team, a small group of specialists, or individual consultants to fill precise gaps in expertise.",
    ],
    bullets: [
      "Full-team support without permanent hiring overhead.",
      "One or two specialists for targeted skill gaps.",
      "Personalized staffing models that match project needs.",
    ],
  },
  {
    eyebrow: "Momentum",
    title: "Meet projects where they already are",
    body: [
      "Bringing outside talent into an active project can feel risky. Our consultants are accustomed to learning quickly, adapting fast, and delivering value from day one.",
      "Because the team is backed by M&S delivery leadership, every consultant brings more than individual experience. They bring access to a broader network of technical and project expertise.",
    ],
    bullets: [
      "Fast onboarding into existing teams and delivery rhythms.",
      "Agile, project management, and technical expertise in one network.",
      "Support that complements your team instead of creating extra coordination burden.",
    ],
  },
  {
    eyebrow: "Advantage",
    title: "A staffing model backed by delivery experience",
    body: [
      "Traditional staffing often gives you one person's isolated experience. M&S staff augmentation gives you a consultant backed by a 250-person organization with leaders who have delivered complex digital programs themselves.",
      "Our leadership comes from real-world technology delivery, not only recruiting. That difference shapes how we identify talent, support consultants, and help clients get meaningful outcomes.",
    ],
    bullets: [
      "A connected network of specialized expertise.",
      "Consultants supported by experienced delivery leaders.",
      "Talent selected for project impact, not just resume keywords.",
    ],
  },
];

export default function StaffAugmentationPage() {
  return (
    <StandaloneMarketingPage
      eyebrow="Staff Augmentation"
      title="The right people, right where your team needs them."
      description="M&S supplements technology teams with consultants who bring specialized expertise, delivery judgment, and the support of a deep consulting bench."
      stats={[
        { value: "20+", label: "Years supplementing teams" },
        { value: "250", label: "Consultants across the country" },
        { value: "Flexible", label: "Project, team, or specialist support" },
      ]}
      intro={[
        "Your team may not have every specialization in-house, and it may not be able to scale workload instantly as demand changes. That does not mean your project needs to stall.",
        "M&S staff augmentation helps organizations fill critical gaps, boost productivity, and access expertise without turning every need into a full-time hire.",
      ]}
      cards={[
        { title: "Specialized Expertise", body: "Bring in the exact technical or delivery skill your team is missing." },
        { title: "Project Recovery", body: "Add experienced support when an initiative becomes larger or harder than expected." },
        { title: "Managed Workstreams", body: "Let M&S lead a focused scope while your internal team stays focused on core work." },
        { title: "Partner Capacity", body: "Expand delivery bandwidth for consulting firms and implementation partners." },
      ]}
      sections={sections}
      finalCta={{
        eyebrow: "Get Support",
        title: "Even the best teams need extra reach sometimes.",
        body: "Tell us where your team is stretched, and we can help identify the people and delivery model that fit.",
      }}
    />
  );
}
