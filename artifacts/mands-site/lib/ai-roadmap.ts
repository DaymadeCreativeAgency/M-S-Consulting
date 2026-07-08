/**
 * AI Roadmap, single source of truth.
 *
 * Powers both the interactive client experience (components/roadmap/*) and the
 * server-rendered static fallback (SEO + no-JS). Content transcribed from
 * "M&S Consulting, AI Roadmap 2025: From Data Strategy to Smart Automation".
 */

export type DiagramKind =
  | "layers"
  | "fuel"
  | "venn"
  | "untangle"
  | "applications"
  | "lifecycle"
  | "automation"
  | "execution";

export interface FocusArea {
  title: string;
  body: string;
  /** Optional callout label rendered as an inline emphasis line. */
  tag?: "Example" | "Pro Tip" | "Insight" | "Statistic" | "Checklist";
  tagBody?: string;
}

export interface AssessmentOption {
  label: string;
  /** 0 = furthest behind, 3 = most mature. Drives the readiness score. */
  weight: 0 | 1 | 2 | 3;
}

export interface StepImage {
  src: string;
  alt: string;
  /** Optional photographer credit (Unsplash). */
  credit?: string;
}

export interface RoadmapStep {
  id: string;
  num: number;
  eyebrow: string;
  title: string;
  intro: string;
  pullquote: string;
  /** The bold prompt under the intro on the dark panel. */
  prompt: string;
  /** Readiness dimension this step measures. */
  dimension: string;
  /** Short pill label on the assessment card (e.g. "Strategy check"). */
  checkInLabel: string;
  /** The single low-friction self-assessment question. */
  question: string;
  options: AssessmentOption[];
  focusAreasLabel: string;
  focusAreas: FocusArea[];
  /** Animated fallback diagram (used when no photo is supplied). */
  diagram: DiagramKind;
  /** Editorial photo shown in the full guide, in place of the diagram. */
  image?: StepImage;
}

export const STEPS: RoadmapStep[] = [
  {
    id: "current-environment",
    num: 1,
    eyebrow: "STEP 01",
    title: "Understanding Your Current Business Environment",
    intro:
      "Every successful AI initiative begins with a deep understanding of your organization's current environment. Before you embark on this journey, you must assess the foundation upon which AI will be built.",
    pullquote: "Weak foundations are the #1 reason AI projects fail.",
    prompt: "How do you lay the groundwork for AI success?",
    dimension: "Foundation & Strategy Alignment",
    checkInLabel: "Strategy check",
    question: "How clearly is AI tied to your business strategy today?",
    options: [
      { label: "We haven't connected AI to specific business goals yet", weight: 0 },
      { label: "We have ideas, but nothing formalized", weight: 1 },
      { label: "We've aligned AI with a few clear objectives", weight: 2 },
      { label: "AI is embedded in our strategic roadmap with owners", weight: 3 },
    ],
    focusAreasLabel: "KEY FOCUS AREAS",
    focusAreas: [
      {
        title: "Business Strategy Alignment",
        body: "Define how AI fits within your long-term goals. Is it to improve customer satisfaction? Reduce operational costs? Drive innovation? A clear strategy ensures every AI initiative aligns with broader objectives.",
        tag: "Example",
        tagBody:
          "A retail company looking to enhance customer experiences should focus on AI-driven personalization tools.",
      },
      {
        title: "Regulatory Environment",
        body: "Ensure compliance with industry regulations like GDPR, HIPAA, or the AI Act. Ignoring these can lead to costly delays and reputational risks.",
        tag: "Insight",
        tagBody: "Compliance isn't a hurdle; it's an opportunity to build trust and credibility.",
      },
      {
        title: "Staff and Skills Assessment",
        body: "Identify the skills your team currently has and the gaps that need filling. AI implementation often requires upskilling in data science, AI ethics, and process integration.",
        tag: "Pro Tip",
        tagBody: "Consider partnerships or training programs to accelerate AI readiness.",
      },
      {
        title: "Tech Stack Readiness",
        body: "Review your existing software and infrastructure. Are they capable of supporting AI applications? Legacy systems may need upgrades to handle large-scale data processing.",
        tag: "Statistic",
        tagBody:
          "Studies show that 60% of businesses with AI-ready systems experience faster implementation timelines.",
      },
    ],
    diagram: "layers",
    image: {
      src: "/media/roadmap-step-foundation.png",
      alt: "A glowing processor on a circuit board, the technical foundation for AI",
      credit: "Getty Images / Unsplash",
    },
  },
  {
    id: "data-strategy",
    num: 2,
    eyebrow: "STEP 02",
    title: "Defining Data, Analytics, and AI Strategy",
    intro:
      "Your AI strategy is only as good as the data it's built on. High-quality, well-governed data drives meaningful insights, while poor data quality can derail even the most ambitious initiatives.",
    pullquote: "Data is the fuel for AI. Invest in its quality and governance to drive impactful results.",
    prompt: "How do you know if your data is ready for AI?",
    dimension: "Data & Governance",
    checkInLabel: "Data readiness",
    question: "How would you describe your data quality and governance?",
    options: [
      { label: "Data is scattered, inconsistent, or hard to trust", weight: 0 },
      { label: "Usable in places, but no formal governance", weight: 1 },
      { label: "We have governance and cleanup underway", weight: 2 },
      { label: "Governed, high-quality data with MDM in place", weight: 3 },
    ],
    focusAreasLabel: "STEPS TO SUCCESS",
    focusAreas: [
      {
        title: "Data Quality Assessment",
        body: "Evaluate your data for accuracy, consistency, and relevance. Clean data ensures reliable AI outcomes.",
        tag: "Checklist",
        tagBody: "Are your datasets free from duplicates, errors, and biases?",
      },
      {
        title: "Use Case Prioritization",
        body: "Focus on high-impact areas where AI can deliver quick wins. For example, start with customer segmentation before scaling to predictive analytics.",
        tag: "Example",
        tagBody: "A manufacturing company may prioritize predictive maintenance for machinery.",
      },
      {
        title: "Data Governance and MDM",
        body: "Implement governance frameworks to maintain data quality and accessibility. Master Data Management (MDM) ensures consistency across all departments.",
        tag: "Insight",
        tagBody: "Data governance isn't just a process, it's a culture shift.",
      },
      {
        title: "AI Implementation Plan",
        body: "Develop a roadmap that ties AI initiatives to measurable business objectives, such as revenue growth or cost reduction.",
      },
    ],
    diagram: "fuel",
    image: {
      src: "/media/roadmap-step-data.png",
      alt: "A 3D landscape of data columns labeled with values, data as the fuel for AI",
      credit: "Igor Omilaev / Unsplash",
    },
  },
  {
    id: "data-platform",
    num: 3,
    eyebrow: "STEP 03",
    title: "Building a Scalable Data Platform",
    intro:
      "A robust data platform is the backbone of successful AI implementation. It's where your data is stored, processed, and transformed into insights.",
    pullquote: "A scalable data platform isn't a luxury, it's a necessity.",
    prompt: "How are you going to design your data platform?",
    dimension: "Platform & Infrastructure",
    checkInLabel: "Platform check",
    question: "How scalable is your current data platform?",
    options: [
      { label: "We rely on spreadsheets or siloed legacy systems", weight: 0 },
      { label: "Some centralized storage, but limited scalability", weight: 1 },
      { label: "Cloud platform in place, scaling selectively", weight: 2 },
      { label: "Hybrid/multi-cloud, secure and built to scale", weight: 3 },
    ],
    focusAreasLabel: "FOCUS AREAS",
    focusAreas: [
      {
        title: "Privacy and Security",
        body: "Build access controls and ensure data encryption to protect sensitive information.",
        tag: "Example",
        tagBody: "Limit healthcare professionals' access to only the data they need.",
      },
      {
        title: "Integration",
        body: "Ensure your platform connects seamlessly with your existing systems to avoid bottlenecks.",
      },
      {
        title: "Scalable Architecture",
        body: "Opt for hybrid or multi-cloud solutions to handle growing data needs while managing costs.",
        tag: "Pro Tip",
        tagBody: "Avoid vendor lock-in by diversifying your cloud providers.",
      },
      {
        title: "Analytics and Reporting",
        body: "Implement tools that turn raw data into actionable insights through dashboards and reports.",
      },
    ],
    diagram: "venn",
    image: {
      src: "/media/roadmap-step-platform.png",
      alt: "A modern data center server room, a scalable platform for AI workloads",
      credit: "Alex Shuper / Unsplash",
    },
  },
  {
    id: "everyday-tools",
    num: 4,
    eyebrow: "STEP 04",
    title: "Unlocking AI in Everyday Tools",
    intro:
      "AI is often closer than you think. Many of your existing tools already have built-in AI capabilities waiting to be leveraged.",
    pullquote: "Most businesses underutilize AI in the tools they already own. Unlock this potential for immediate value.",
    prompt: "How are you identifying hidden AI features in the systems you already have?",
    dimension: "Everyday AI Adoption",
    checkInLabel: "Tool adoption",
    question: "Are you leveraging the AI already built into your tools?",
    options: [
      { label: "We're not using built-in AI features at all", weight: 0 },
      { label: "A few people experiment with them informally", weight: 1 },
      { label: "We've rolled out some AI features intentionally", weight: 2 },
      { label: "Built-in AI is embedded across daily workflows", weight: 3 },
    ],
    focusAreasLabel: "KEY TOOLS",
    focusAreas: [
      {
        title: "Core Operational Systems",
        body: "Predict customer churn or optimize supply chains using built-in AI in your CRM or ERP systems.",
      },
      {
        title: "Office Tools",
        body: "Automate email sorting, document drafting, and meeting scheduling using AI assistants like Microsoft Copilot.",
      },
      {
        title: "Customer-Facing Apps (CRM)",
        body: "Personalize customer interactions with AI-driven segmentation and predictive analytics.",
      },
    ],
    diagram: "untangle",
    image: {
      src: "/media/roadmap-step-tools.png",
      alt: "A glassy AI generator interface, the AI already built into everyday tools",
      credit: "Philip Oroni / Unsplash",
    },
  },
  {
    id: "ml-applications",
    num: 5,
    eyebrow: "STEP 05",
    title: "Finding the Right Machine Learning Applications",
    intro:
      "Machine Learning (ML) transforms raw data into actionable insights. The challenge is identifying which ML applications will provide the most value for your business.",
    pullquote: "Machine learning applications unlock the hidden potential in your data.",
    prompt: "What are your requirements for an ML app that fits what you're trying to accomplish?",
    dimension: "ML Opportunity",
    checkInLabel: "Use case clarity",
    question: "Have you identified high-value ML use cases?",
    options: [
      { label: "We're not sure where ML could help us", weight: 0 },
      { label: "We have a few ideas worth exploring", weight: 1 },
      { label: "We've validated specific high-value use cases", weight: 2 },
      { label: "We have a prioritized ML opportunity backlog", weight: 3 },
    ],
    focusAreasLabel: "KEY APPLICATIONS",
    focusAreas: [
      {
        title: "Classification Apps",
        body: "Use ML to categorize data into meaningful groups, like fraud detection in financial transactions or sentiment analysis in customer feedback.",
        tag: "Pro Tip",
        tagBody: "The accuracy of classification depends on the quality of your training data.",
      },
      {
        title: "Prediction Models",
        body: "Predict future trends and behaviors using historical data, such as demand forecasting in retail or predictive maintenance in manufacturing.",
        tag: "Example",
        tagBody: "A manufacturing company may prioritize predictive maintenance for machinery.",
      },
      {
        title: "Computer Vision",
        body: "Analyze visual data for insights, such as defect detection in production lines or facial recognition for enhanced security.",
        tag: "Example",
        tagBody: "A retail chain uses computer vision to analyze foot traffic patterns.",
      },
      {
        title: "Generative AI",
        body: "Go beyond traditional ML with Generative AI to create new content, like personalized marketing campaigns or product designs.",
      },
    ],
    diagram: "applications",
    image: {
      src: "/media/roadmap-step-ml.png",
      alt: "Strands of light converging like a neural network, machine learning applications",
      credit: "Mohamed Nohassi / Unsplash",
    },
  },
  {
    id: "ml-delivery",
    num: 6,
    eyebrow: "STEP 06",
    title: "Bringing Machine Learning Apps to Life",
    intro:
      "Building an ML app requires more than just coding. It's a process of continuous refinement to ensure reliability and relevance.",
    pullquote: "Machine learning isn't a one-time project, it's a cycle of continuous improvement.",
    prompt: "Where are you going to start training your first ML model?",
    dimension: "ML Delivery Maturity",
    checkInLabel: "Model maturity",
    question: "Do you have a process to build, test, and maintain ML models?",
    options: [
      { label: "We've never built or deployed a model", weight: 0 },
      { label: "We've experimented but nothing is in production", weight: 1 },
      { label: "We have models in production, monitored manually", weight: 2 },
      { label: "We have a mature, monitored MLOps lifecycle", weight: 3 },
    ],
    focusAreasLabel: "KEY DEVELOPMENT STAGES",
    focusAreas: [
      {
        title: "Model Training",
        body: "Use labeled datasets to teach the ML model how to make accurate predictions.",
        tag: "Pro Tip",
        tagBody: "Training data must be diverse to avoid bias.",
      },
      {
        title: "Model Tuning",
        body: "Adjust parameters to improve the model's performance in specific scenarios.",
        tag: "Example",
        tagBody: "Fine-tuning an ML model to better detect anomalies in financial data.",
      },
      {
        title: "Model Testing",
        body: "Simulate real-world scenarios to validate accuracy and reliability before deployment.",
        tag: "Statistic",
        tagBody: "70% of ML models require multiple iterations before achieving optimal results.",
      },
      {
        title: "Model Feedback",
        body: "Continuously monitor the model in production and gather user feedback for improvements.",
      },
    ],
    diagram: "lifecycle",
  },
  {
    id: "smart-automation",
    num: 7,
    eyebrow: "STEP 07",
    title: "Smart Automation for Smarter Workflows",
    intro:
      "Automation is the bridge between manual processes and intelligent workflows. It's where businesses achieve scalability without sacrificing precision.",
    pullquote: "Automation doesn't replace humans, it enhances their capabilities. Start small, automate one workflow, and scale gradually.",
    prompt: "How and where can automation transform your business?",
    dimension: "Process Automation",
    checkInLabel: "Automation level",
    question: "How much of your repetitive work is automated today?",
    options: [
      { label: "Almost everything is still manual", weight: 0 },
      { label: "A few tasks are automated in pockets", weight: 1 },
      { label: "Several core workflows are automated (RPA)", weight: 2 },
      { label: "Intelligent automation (IPA) spans the business", weight: 3 },
    ],
    focusAreasLabel: "KEY TOOLS",
    focusAreas: [
      {
        title: "Robotic Process Automation (RPA)",
        body: "Automate repetitive, rule-based tasks such as invoice processing and data entry.",
        tag: "Example",
        tagBody: "M&S helped a finance team reduce invoice processing time by 80% with RPA.",
      },
      {
        title: "Intelligent Process Automation (IPA)",
        body: "Combine RPA with AI for tasks requiring decision-making and pattern recognition, like predictive maintenance and automated customer service chatbots.",
      },
      {
        title: "Workflow Integration",
        body: "Connect legacy systems with modern platforms to ensure seamless operations.",
      },
      {
        title: "Core Operational Systems",
        body: "Predict customer churn or optimize supply chains using built-in AI in your CRM or ERP systems.",
      },
    ],
    diagram: "automation",
    image: {
      src: "/media/roadmap-step-automation.png",
      alt: "Humanoid robots staffing a reception desk, smart automation at work",
      credit: "Point Normal / Unsplash",
    },
  },
  {
    id: "vision-to-execution",
    num: 8,
    eyebrow: "STEP 08",
    title: "From Vision to Execution",
    intro:
      "Deployment is where planning meets action. Success depends on effective collaboration and stakeholder engagement.",
    pullquote: "Successful deployment is iterative. Plan for flexibility and adaptation.",
    prompt: "How do you deploy AI in your organization with as little friction as possible?",
    dimension: "Execution & Adoption",
    checkInLabel: "Deployment readiness",
    question: "How prepared is your organization to deploy and adopt AI?",
    options: [
      { label: "We struggle to get past pilots and proofs of concept", weight: 0 },
      { label: "We can deploy, but adoption is inconsistent", weight: 1 },
      { label: "We have stakeholder buy-in and training in place", weight: 2 },
      { label: "We deploy iteratively with strong adoption and feedback loops", weight: 3 },
    ],
    focusAreasLabel: "STEPS TO SUCCESS",
    focusAreas: [
      {
        title: "Stakeholder Buy-In",
        body: "Align executives, middle managers, and end-users by tailoring the value proposition to each group.",
        tag: "Example",
        tagBody:
          "Show executives ROI, highlight operational efficiency for managers, and demonstrate ease-of-use for employees.",
      },
      {
        title: "Employee Training",
        body: "Provide role-specific training to ensure smooth adoption, sales teams learn AI-powered CRMs, while IT teams focus on system maintenance and troubleshooting.",
      },
      {
        title: "Feedback Loops",
        body: "Collect user feedback regularly to refine the AI system. Create channels for employees to report issues and suggest improvements.",
      },
      {
        title: "Continuous Monitoring",
        body: "Use analytics tools to track performance metrics and identify areas for optimization.",
      },
    ],
    diagram: "execution",
    image: {
      src: "/media/roadmap-step-execution.png",
      alt: "Two fields of threads reaching toward each other, bridging vision and execution",
      credit: "Point Normal / Unsplash",
    },
  },
];

export interface SummaryPoint {
  title: string;
  body: string;
}

export const SUMMARY: { heading: string; points: SummaryPoint[]; podcast: { title: string; body: string } } = {
  heading: "The Bottom Line: What You Need to Know",
  points: [
    { title: "Lay the Foundation", body: "Build a strong base with data governance and strategy alignment." },
    { title: "Start Small", body: "Leverage built-in tools and quick wins before scaling." },
    { title: "Iterate and Improve", body: "View AI as a continuous journey, not a one-time project." },
    {
      title: "Drive Impact",
      body: "Use AI to solve real business problems, from boosting efficiency to personalizing customer experiences.",
    },
  ],
  podcast: {
    title: "Human Coded Podcast",
    body: "This content was created from the conversations that took place over the course of 11 episodes of the Human Coded podcast. Listen to all of the expert advice, wherever you get your podcasts.",
  },
};

export interface ReadinessTier {
  name: "Exploring" | "Foundational" | "Scaling" | "Leading";
  min: number;
  blurb: string;
  color: string;
}

/** Tiers keyed off the normalized 0-100 readiness score. */
export const TIERS: ReadinessTier[] = [
  {
    name: "Exploring",
    min: 0,
    blurb:
      "You're at the start of the journey. The biggest wins right now come from laying a solid foundation, aligning AI to clear goals and getting your data in order before building.",
    color: "#5CA7F3",
  },
  {
    name: "Foundational",
    min: 31,
    blurb:
      "You've got pieces in place. Focus on governance and a scalable platform so the AI you build is trustworthy, auditable, and ready to grow.",
    color: "#8FB8F0",
  },
  {
    name: "Scaling",
    min: 56,
    blurb:
      "You're delivering real value with AI. The opportunity now is to operationalize, mature your ML lifecycle, expand automation, and drive adoption across teams.",
    color: "#B8A4E8",
  },
  {
    name: "Leading",
    min: 81,
    blurb:
      "You're ahead of the curve. The frontier for you is intelligent automation at scale, continuous improvement, and turning AI into a durable competitive advantage.",
    color: "#F4A8C0",
  },
];

export const PDF_PATH = "/media/MS_Consulting-AI_Roadmap-2025.pdf";
export const MAX_SCORE = STEPS.length * 3;

/** Map an answers array (weights aligned to STEPS order) to a normalized 0-100 score. */
export function computeScore(weights: (number | null)[]): number {
  const total = weights.reduce<number>((sum, w) => sum + (w ?? 0), 0);
  return Math.round((total / MAX_SCORE) * 100);
}

export function tierForScore(score: number): ReadinessTier {
  return [...TIERS].reverse().find((t) => score >= t.min) ?? TIERS[0];
}

/** The weakest answered dimension is the recommended starting point. */
export function recommendedStep(weights: (number | null)[]): RoadmapStep {
  let lowestIdx = 0;
  let lowest = Infinity;
  weights.forEach((w, i) => {
    if (w !== null && w < lowest) {
      lowest = w;
      lowestIdx = i;
    }
  });
  return STEPS[lowestIdx];
}
