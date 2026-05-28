import type { Metadata } from "next";

import { StandaloneMarketingPage } from "@/components/sections/standalone-marketing-page";

export const metadata: Metadata = {
  title: "Appalachia Software Factory",
  description:
    "The Appalachia Software Factory is M&S Consulting's West Virginia-rooted initiative for custom software, talent development, startups, and regional innovation.",
  alternates: { canonical: "/appalachia-software-factory" },
};

const sections = [
  {
    eyebrow: "Built in West Virginia",
    title: "World-class software from Appalachia",
    body: [
      "The Appalachia Software Factory began with a simple question: what if world-class software could be designed and developed in West Virginia?",
      "ASF answers that question with a distributed team of developers, data scientists, product strategists, and mentors based in Appalachia and connected to enterprise, startup, and public-sector work.",
    ],
    bullets: [
      "Enterprise-grade software development rooted in West Virginia.",
      "Real opportunities for regional technical talent to stay and grow locally.",
      "A delivery model that connects economic development with practical client outcomes.",
    ],
  },
  {
    eyebrow: "Talent Model",
    title: "Mentorship on real product work",
    body: [
      "ASF is more than a development shop. Early-career developers contribute to real projects under experienced mentorship, gaining exposure to client solutions and venture development.",
      "Teams work in small, outcome-focused sprints that reduce risk, accelerate learning, and keep progress visible.",
    ],
    bullets: [
      "Early-career developers paired with experienced practitioners.",
      "Outcome-focused sprints for client and venture work.",
      "Practical learning through production-grade software delivery.",
    ],
  },
  {
    eyebrow: "Innovation",
    title: "A platform for collaboration and growth",
    body: [
      "ASF creates a place where forward-thinking clients, talented developers, startups, and mission-aligned partners can build together.",
      "The initiative reflects M&S's belief that innovation can come from anywhere and thrive when vision, execution, mentorship, and opportunity are aligned.",
    ],
    bullets: [
      "Custom software solutions for enterprises and public-sector partners.",
      "Startup and venture development opportunities.",
      "Long-term innovation capacity rooted in the region.",
    ],
  },
  {
    eyebrow: "Why It Matters",
    title: "Regional resilience as a software advantage",
    body: [
      "Appalachia's legacy of craftsmanship, resilience, and creativity is a natural fit for software development. ASF channels those strengths into products, platforms, and technical careers.",
      "For clients, that means a reliable software partner. For builders, it means meaningful work without leaving home.",
    ],
  },
];

export default function AppalachiaSoftwareFactoryPage() {
  return (
    <StandaloneMarketingPage
      eyebrow="Appalachia Software Factory"
      title="Built in West Virginia. Built to scale."
      description="ASF is M&S Consulting's homegrown initiative to develop custom software while investing in the people and potential of Appalachia."
      stats={[
        { value: "WV", label: "Rooted in Appalachia" },
        { value: "Sprints", label: "Outcome-focused delivery" },
        { value: "Talent", label: "Mentorship and growth" },
      ]}
      intro={[
        "The Appalachia Software Factory connects enterprise-grade software development with regional economic growth. It grows talent, supports startups, and delivers high-quality products from the heart of Appalachia.",
        "ASF is built on the belief that people should not have to leave the region to do meaningful technology work. The future of software can include Appalachia, not just the traditional tech centers.",
      ]}
      cards={[
        { title: "Clients", body: "Reliable product and software delivery from an experienced consulting organization." },
        { title: "Developers", body: "Mentored project work that creates real experience and local opportunity." },
        { title: "Startups", body: "Product thinking and development support for emerging ventures." },
        { title: "Partners", body: "A mission-aligned model for regional innovation and workforce growth." },
      ]}
      sections={sections}
      finalCta={{
        eyebrow: "Build With ASF",
        title: "World-class code can come from West Virginia.",
        body: "Whether you are a developer seeking meaningful work or an organization looking for a software partner, ASF is proving what is possible from Appalachia.",
      }}
    />
  );
}
