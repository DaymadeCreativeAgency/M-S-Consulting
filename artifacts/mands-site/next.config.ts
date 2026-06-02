import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const BLOG_SLUGS = [
  "2024-art-school-made-me-a-better-consultant",
  "6-reasons-to-ensure-your-crm-is-aligned-with-your-sales-process",
  "a-thank-you-to-our-mentors-stories-that-shaped-ms-women-in-technology",
  "agentforce-use-cases-how-ms-consulting-helps-organizations-automate-and-scale",
  "an-introduction-to-the-microsoft-practice",
  "an-urgent-rescue-delivering-a-last-minute-cloud-migration-for-a-critical-government-agency",
  "are-you-sitting-on-hidden-cash-in-your-inventory",
  "billing-and-invoicing-keep-it-simple",
  "blueprints-burnout-and-the-human-side-of-change",
  "building-a-robust-operations-power-app-to-replace-a-maxed-out-sharepoint-site",
  "business-continuity-plan",
  "carahsoft-partnership",
  "carnegie-mellon-university-graad-project-case-study",
  "cloud-migration-is-not-a-strategy",
  "disaster-proofing-your-sap-hana-data-an-overview-of-different-techniques",
  "elev8-govcon-nomination-showcases-ms-consultings-leadership-in-federal-contracting",
  "elevate-your-enterprise-part-2",
  "elevate-your-enterprise-part-3",
  "elevate-your-enterprise-turn-your-salesforce-org-into-a-growth-engine",
  "embracing-ai-as-a-skeptical-project-manager",
  "embracing-multi-cloud-expertise-ms-consultings-advantage-in-the-growing-multi-cloud-landscape",
  "expertise-across-six-practice-areas",
  "four-law-firms-that-actually-got-digital-transformation-right-and-what-they-did-differently",
  "harnessing-generative-ai-in-government-strategies-for-addressing-bias-privacy-and-security",
  "how-to-be-effective-as-an-introvert-in-your-career",
  "how-to-know-if-sap-is-the-right-erp-system-for-your-business-a-step-by-step-guide",
  "introducing-the-ai-roadmap-transforming-business-with-strategic-ai-adoption",
  "introducing-the-appalachia-software-factory",
  "law-firm-data-analytics-the-legal-industrys-digital-transformation-wake-up-call",
  "level-up-your-skills-the-future-of-learning-through-gamification",
  "low-code-no-code-platform-comparison-2025",
  "managing-change-when-agile-sprints-arent-working-and-what-to-do-about-it",
  "mastering-salesforce-ui-customization",
  "maximizing-productivity-how-to-lead-a-large-scrum-team-effectively",
  "ms-consulting-implements-moodr-health-platform-to-provide-employees-with-proactive-mental-health-support",
  "ms-splash-announcements-app-solves-major-salesforce-challenges",
  "multi-dimensional-tech-partner",
  "notes-from-a-project-rescue",
  "oracle-cloud-expansion-infrastructure-as-code-iac-implementation-case-study",
  "overcoming-the-challenges-of-launching-and-scaling-rpa",
  "redefining-efficiency-for-a-global-leader-in-vision-correction",
  "rise-with-sap-whats-in-it-for-you",
  "salesforce-3-simple-solutions-to-solve-common-problems",
  "salesforce-agentforce-a-new-era-of-enterprise-service-automation",
  "servant-leadership-the-key-to-winning-together",
  "stop-buying-ai-tools-that-dont-work-what-actually-delivers-in-legal-practice",
  "the-art-of-active-listening-enhancing-communication-in-life-and-work",
  "the-change-management-work-nobody-budgets-for",
  "the-evolution-of-rpa-transforming-business-with-intelligent-automation",
  "the-importance-of-creating-visual-solutions-for-complex-data-problems",
  "the-money-youre-losing-in-procurement-and-dont-even-know-it",
  "the-three-pillars-of-change-management-people-organizational-and-technology",
  "transforming-public-sector-technology-services-the-human-story-behind-the-ms-consulting-and-carahsoft-partnership",
  "unlocking-the-hidden-power-of-your-law-firms-data",
  "unlocking-the-power-of-transferable-skills-in-business",
  "unleashing-innovation-process-impact-blueprinting-workshops",
  "value-driven-outcomes-2",
  "what-erp-modernization-actually-requires",
  "why-ai-pilots-stall",
  "why-digital-transformation-will-define-the-law-firms-of-tomorrow",
  "why-digital-transformation-will-define-the-law-firms-of-tomorrow-2",
  "why-microsoft-technology-is-the-smart-choice-for-modern-enterprises",
  "why-most-tech-projects-fail-and-what-to-do-about-it",
  "why-your-customers-keep-asking-wheres-my-order-and-how-to-fix-it-for-good",
  "why-your-expensive-technology-sits-unused-the-change-management-problem-law-firms-ignore",
  "why-your-finance-team-still-dreads-month-end-and-what-actually-works-to-fix-it",
  "why-your-law-firms-tech-stack-is-probably-a-mess-and-how-to-fix-it",
  "women-in-tech-leadership-stories",
  "your-data-problem-is-a-business-problem",
];

const PODCAST_SLUGS = [
  "ai-in-2024",
  "human-coded-001",
  "human-coded-002-understanding-your-current-business-environment-for-successful-ai-integration",
  "human-coded-004-unlocking-business-insights-with-ai-powered-data-platforms",
  "human-coded-005",
  "human-coded-006-unlocking-built-in-ai-to-leverage-what-you-already-have",
  "human-coded-007",
  "human-coded-008",
  "human-coded-009-deploying-ai-that-delivers",
  "human-coded-010-the-ethics-of-ai",
  "human-coded-012-ai-in-2024-lessons-learned-and-predictions-for-the-year-ahead",
  "human-coded-013-ai-the-microsoft-ecosystem-a-business-leaders-guide",
  "human-coded-014-the-change-equation-people-process-and-technology",
  "human-coded-015-turning-resistance-into-buy-in-the-art-of-people-change-management",
  "human-coded-016-blueprinting-organizational-change-management-for-real-results",
  "human-coded-017-why-great-technology-still-fails-without-the-right-people-behind-it",
  "human-coded-018-the-story-of-the-appalachian-software-factory",
  "human-coded-019-monarch-learning-labs-and-the-future-of-hands-on-learning",
  "human-coded-020-how-gtd-speech-is-giving-time-back-to-speech-therapists",
  "human-coded-021-exploring-the-innovation-behind-innovagents-building-user-friendly-salesforce-apps",
  "human-coded-022-transforming-business-workflows-a-deep-dive-into-braided",
  "human-coded-023-revolutionizing-wayfinding-following-the-journey-of-get2there",
];

const LEGACY_PAGE_REDIRECTS = [
  ["/ack", "/"],
  ["/acng-cloud-strategy-meetup", "/contact"],
  ["/afcea-west-2026", "/contact"],
  ["/agentforce-world-tour-2025", "/contact"],
  ["/agile-project-management", "/practice-areas/agile-pm"],
  ["/ai", "/practice-areas/ai"],
  ["/atlassian", "/service-lines/atlassian"],
  ["/aws", "/service-lines/aws"],
  ["/blog-2", "/blog"],
  ["/cloud-infrastructure-consulting", "/practice-areas/cloud"],
  ["/cloud-infrastructure-services", "/practice-areas/cloud"],
  ["/confirm-subscription", "/contact"],
  ["/contact-us", "/contact"],
  ["/cyber-identity-security", "/practice-areas/cyber"],
  ["/data-analytics", "/practice-areas/data-analytics"],
  ["/enterprise-apps", "/practice-areas/enterprise-apps"],
  ["/human-coded", "/podcast"],
  ["/integration-security", "/practice-areas/cyber"],
  ["/microsoft", "/service-lines/microsoft"],
  ["/oracle", "/service-lines/oracle"],
  ["/pmaas", "/practice-areas/agile-pm"],
  ["/public-sector", "/about#government-designations"],
  ["/salesforce", "/service-lines/salesforce"],
  ["/salesforcecom", "/service-lines/salesforce"],
  ["/sap", "/service-lines/sap"],
  ["/snowflake", "/service-lines/snowflake"],
  ["/what-we-do", "/practice-areas"],
];

const LEGACY_FOCUS_AREA_REDIRECTS = [
  ["/focus-areas/agile-project-management", "/practice-areas/agile-pm"],
  ["/focus-areas/ai", "/practice-areas/ai"],
  ["/focus-areas/ai-consulting-services", "/practice-areas/ai"],
  ["/focus-areas/bigdata-and-bi", "/practice-areas/data-analytics"],
  ["/focus-areas/cloud-infrastructure-consulting", "/practice-areas/cloud"],
  ["/focus-areas/cloud-infrastructure-services", "/practice-areas/cloud"],
  ["/focus-areas/cyber-identity-security", "/practice-areas/cyber"],
  ["/focus-areas/data-analytics", "/practice-areas/data-analytics"],
  ["/focus-areas/enterprise-apps", "/practice-areas/enterprise-apps"],
  ["/focus-areas/oracle", "/service-lines/oracle"],
  ["/focus-areas/salesforce", "/service-lines/salesforce"],
  ["/focus-areas/salesforcecom", "/service-lines/salesforce"],
];

const LEGACY_SERVICE_REDIRECTS = [
  ["/atlassian-jira-confluence-bitbucket-service-desk", "/service-lines/atlassian"],
  ["/oracle-cloud-devops-and-cloud-native-applications", "/service-lines/oracle"],
];

const LEGACY_CASE_STUDY_REDIRECTS = [
  [
    "/case-studies/helping-a-national-public-sctor-organization-power-up",
    "/case-studies/helping-a-national-public-sector-organization-power-up",
  ],
];

function permanentRedirect(source: string, destination: string) {
  return {
    source,
    destination,
    permanent: true,
  };
}

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  async redirects() {
    return [
      permanentRedirect("/blog/:slug(human-coded-.*)", "/podcast/:slug"),
      permanentRedirect("/blog/ai-in-2024", "/podcast/ai-in-2024"),
      ...LEGACY_PAGE_REDIRECTS.map(([source, destination]) =>
        permanentRedirect(source, destination)
      ),
      ...LEGACY_FOCUS_AREA_REDIRECTS.map(([source, destination]) =>
        permanentRedirect(source, destination)
      ),
      ...LEGACY_SERVICE_REDIRECTS.map(([source, destination]) =>
        permanentRedirect(source, destination)
      ),
      ...LEGACY_CASE_STUDY_REDIRECTS.map(([source, destination]) =>
        permanentRedirect(source, destination)
      ),
      ...BLOG_SLUGS.map((slug) => permanentRedirect(`/${slug}`, `/blog/${slug}`)),
      ...PODCAST_SLUGS.map((slug) => permanentRedirect(`/${slug}`, `/podcast/${slug}`)),
    ];
  },
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "logo.clearbit.com" },
    ],
  },
};

export default withMDX(nextConfig);
