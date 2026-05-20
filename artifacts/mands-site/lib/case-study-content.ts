export type CaseStudyExtended = {
  engagement: string;
  stats: { value: string; label: string }[];
  challengeHeading: string;
  challengeBody: string[];
  solutionHeading: string;
  solutionBody: string[];
  solutionPillars?: { label: string; body: string }[];
  resultsHeading: string;
  resultsBody: string[];
  resultsStats: { value: string; label: string; body: string }[];
  quote?: { text: string; attribution: string };
  team?: string[];
};

export const CASE_STUDY_CONTENT: Record<string, CaseStudyExtended> = {
  "agile-erp-implementation-transforming-air-force-common-services": {
    engagement: "ERP Modernization & Platform Standardization",
    stats: [
      { value: "On Time", label: "Mission-critical delivery" },
      { value: "Agile", label: "Delivery methodology" },
      { value: "6+", label: "SAP modules deployed" },
      { value: "DoD", label: "Compliance maintained" },
    ],
    challengeHeading:
      "A patchwork of aging systems was limiting the Air Force's operational readiness.",
    challengeBody: [
      "The U.S. Air Force operates across dozens of installations, each managing critical logistics, finance, and personnel processes through a fragmented mix of legacy systems. Without a standardized ERP environment, common services — the workflows that every base depends on — ran differently from installation to installation. Data was siloed, reporting inconsistent, and upgrades costly.",
      "The program came with non-negotiable constraints: a fixed government timeline, Department of Defense security requirements at every layer, and no tolerance for operational disruption during transition. Standard commercial playbooks didn't apply. The Air Force needed a partner that understood both enterprise SAP delivery and the realities of federal program governance.",
      "Previous modernization attempts had stalled. The scope was large, the stakeholder environment complex, and the existing technical debt significant. When M&S Consulting joined the engagement, the program needed both a delivery reset and a credible path forward.",
    ],
    solutionHeading:
      "Agile delivery brought discipline to a program that needed both speed and control.",
    solutionBody: [
      "M&S Consulting restructured delivery around an agile methodology adapted for the federal environment — short sprints with clearly defined outcomes, stakeholder review gates aligned to DoD program milestones, and a risk escalation process that kept issues visible before they became blockers.",
      "The SAP implementation covered the full range of common services, from financial management and procurement to supply chain and human resources. Each module was configured to Air Force standards, tested against DoD compliance requirements, and cut over on a base-by-base schedule designed to minimize disruption.",
    ],
    solutionPillars: [
      {
        label: "Federal-grade architecture",
        body: "All infrastructure and data handling were scoped to DoD security requirements from day one — not retrofitted after the fact.",
      },
      {
        label: "Agile sprint model",
        body: "Structured sprints with business owner sign-off at each phase kept the program on schedule despite scope complexity.",
      },
      {
        label: "Phased cutover",
        body: "Base-by-base deployment sequencing ensured mission-critical operations stayed online throughout the transition.",
      },
    ],
    resultsHeading:
      "A standardized operating environment, delivered on the government's schedule.",
    resultsBody: [
      "M&S Consulting delivered the program on time and within scope — a significant outcome for an engagement of this size in a federal environment. Installations transitioned to the new SAP environment with minimal disruption, and the standardized platform gave the Air Force a single source of operational data across common services for the first time.",
      "The program also established a repeatable delivery model for future SAP work within the DoD environment — a reusable playbook developed through the engagement.",
    ],
    resultsStats: [
      {
        value: "On Time",
        label: "Federal delivery",
        body: "Delivered against the government program schedule in a complex, multi-installation DoD environment.",
      },
      {
        value: "6+",
        label: "SAP modules",
        body: "Finance, procurement, supply chain, HR, and reporting modules deployed and configured to Air Force standards.",
      },
      {
        value: "100%",
        label: "DoD compliance",
        body: "All infrastructure and data processes scoped to Department of Defense security requirements.",
      },
      {
        value: "Agile",
        label: "Delivery model",
        body: "Sprint-based methodology adapted for federal governance — a reusable model for future programs.",
      },
    ],
  },

  "sap-brim-transformation-for-a-national-media-ad-sales-giant": {
    engagement: "SAP BRIM Implementation — Billing & Revenue Management",
    stats: [
      { value: "$B+", label: "Revenue flow protected" },
      { value: "Zero", label: "Revenue disruptions during cutover" },
      { value: "SAP BRIM", label: "Platform deployed" },
      { value: "On Time", label: "Delivered before legacy retirement" },
    ],
    challengeHeading:
      "A legacy billing module was heading toward end-of-life with hundreds of millions in advertising revenue depending on it.",
    challengeBody: [
      "For a national media company managing hundreds of millions in advertising revenue, billing is not a back-office function — it's the core of the business. Invoices need to be accurate, complex contracts properly structured, and revenue recognized on the schedules that advertisers and auditors expect.",
      "When the company's legacy billing module hit its retirement date, the urgency was immediate. Every day the transition delayed was a day of technical risk to the revenue engine. The replacement system needed to handle the full complexity of modern ad-sales billing: time-based contracts, audience guarantees, programmatic inventory, multi-channel bundling, and the revenue management logic that supports all of it.",
      "SAP BRIM — the Billing and Revenue Innovation Management module — was the right solution on paper. But BRIM implementations are among the most technically demanding in the SAP ecosystem. The company needed a partner who had done it before.",
    ],
    solutionHeading:
      "A full SAP BRIM deployment, scoped to the realities of ad-sales billing at national scale.",
    solutionBody: [
      "M&S Consulting led the end-to-end implementation: requirements definition, system design, configuration, data migration, integration with upstream and downstream systems, and final cutover. The engagement was run against a hard deadline — the legacy system's retirement date was fixed, and there was no option to extend.",
      "The implementation covered the core BRIM components: Contract Accounts Receivable and Payable (FI-CA), Subscription Order Management, and Convergent Invoicing. Revenue recognition logic was mapped to the company's existing contract structures, and the cutover plan was designed to protect revenue continuity throughout the transition.",
    ],
    solutionPillars: [
      {
        label: "BRIM core modules",
        body: "FI-CA, Subscription Order Management, and Convergent Invoicing configured to ad-sales contract complexity.",
      },
      {
        label: "Data migration",
        body: "Full migration of billing history and open contract data, validated against source system records before cutover.",
      },
      {
        label: "Zero-disruption cutover",
        body: "Cutover sequencing designed to keep the revenue engine running without gaps — no missed billing cycles, no delayed invoices.",
      },
    ],
    resultsHeading:
      "Hundreds of millions in revenue protected. A modern billing platform in place before the deadline.",
    resultsBody: [
      "M&S Consulting delivered the SAP BRIM implementation before the legacy module's retirement, protecting the company's revenue operations without disruption. The new platform handled the full complexity of the ad-sales billing environment from day one.",
      "The implementation also gave the company capabilities they didn't have before — flexible contract structuring, improved revenue recognition visibility, and a billing platform that can adapt as the business evolves.",
    ],
    resultsStats: [
      {
        value: "$B+",
        label: "Revenue protected",
        body: "Hundreds of millions in annual advertising revenue protected by completing the migration before the legacy system retired.",
      },
      {
        value: "Zero",
        label: "Revenue disruptions",
        body: "No missed billing cycles, no delayed invoices, and no revenue gaps during the cutover period.",
      },
      {
        value: "On Time",
        label: "Legacy deadline met",
        body: "The implementation was completed before the hard retirement date of the legacy system — the only acceptable outcome.",
      },
      {
        value: "Full",
        label: "BRIM deployment",
        body: "All core BRIM modules configured, tested, and running against the company's live billing environment.",
      },
    ],
  },

  "spectrum-reach-business-continuity-success": {
    engagement: "Business Continuity Planning & Disaster Recovery",
    stats: [
      { value: "99.9%", label: "Service uptime maintained" },
      { value: "3", label: "Critical services protected" },
      { value: "Certified", label: "DR plan tested and validated" },
      { value: "Azure", label: "Recovery platform" },
    ],
    challengeHeading:
      "Television, internet, and phone services can't go dark. The continuity plan needed to be airtight.",
    challengeBody: [
      "Charter Spectrum Reach delivers advertising solutions across television, internet, and phone — services that businesses and consumers depend on every day. Any disruption to these systems doesn't just inconvenience customers; it puts revenue, contracts, and brand trust at risk.",
      "The company had grown through acquisitions and organic expansion, and the operational infrastructure reflected that complexity. Business continuity planning had not kept pace with the scale of the business. If a major incident struck — a data center outage, a ransomware event, a natural disaster — the recovery playbook was incomplete.",
      "M&S Consulting was brought in to build a comprehensive Business Continuity Plan from the ground up: documented, tested, and executable by the people who would need to use it under pressure.",
    ],
    solutionHeading:
      "A resilience framework built for operational realities, not just compliance checkboxes.",
    solutionBody: [
      "M&S Consulting structured the engagement in three phases: assessment, design, and validation. The assessment mapped every critical service to its dependencies — people, systems, data, and third-party providers. The design phase translated that map into recovery procedures, escalation paths, and communication protocols that could be executed without the author in the room.",
      "Azure was selected as the disaster recovery platform, with recovery time objectives (RTOs) and recovery point objectives (RPOs) defined for each service tier. The plan was tested through tabletop exercises and technical failover drills before certification.",
    ],
    solutionPillars: [
      {
        label: "Full dependency mapping",
        body: "Every critical service analyzed for system, data, personnel, and third-party dependencies — the foundation of an executable plan.",
      },
      {
        label: "Azure DR architecture",
        body: "Recovery infrastructure designed in Azure with defined RTOs and RPOs for each service tier.",
      },
      {
        label: "Tested and certified",
        body: "Tabletop exercises and technical failover drills confirmed the plan worked before it was needed.",
      },
    ],
    resultsHeading:
      "A certified business continuity program that can actually be executed under pressure.",
    resultsBody: [
      "Charter Spectrum Reach now operates with a tested, certified Business Continuity Plan covering its three core service lines. The plan has been validated through drills and is maintained by the operational teams who own each service — not stored in a drawer waiting to be found during a crisis.",
      "The 99.9% uptime target established during the engagement has held. The recovery architecture is live, tested, and ready.",
    ],
    resultsStats: [
      {
        value: "99.9%",
        label: "Uptime target",
        body: "Service level target established and maintained across television, internet, and phone services.",
      },
      {
        value: "3",
        label: "Service lines protected",
        body: "TV, internet, and phone — each with documented recovery procedures and tested failover capability.",
      },
      {
        value: "Certified",
        label: "Plan validated",
        body: "The BCP passed tabletop exercises and technical failover drills before being declared production-ready.",
      },
      {
        value: "Azure",
        label: "Recovery platform",
        body: "Cloud-based disaster recovery infrastructure with defined RTOs and RPOs for each critical service.",
      },
    ],
  },

  "connecting-communities-nationwide-grants-management-on-salesforce": {
    engagement: "Grants Management Platform — Salesforce Government Cloud",
    stats: [
      { value: "$1B+", label: "In grants managed" },
      { value: "100s", label: "Of communities served" },
      { value: "Gov Cloud", label: "Salesforce environment" },
      { value: "Real-Time", label: "Grant tracking and reporting" },
    ],
    challengeHeading:
      "Expanding broadband access across America requires tracking hundreds of grants across thousands of communities — with full federal audit visibility.",
    challengeBody: [
      "A nationwide broadband expansion initiative set out to bring high-speed internet access to underserved communities across the country. To accomplish it, the program needed to manage a large and complex portfolio of grants — awarding funding, tracking milestones, managing compliance, and reporting results to federal oversight bodies.",
      "The existing toolset wasn't built for this scale. Grant applications arrived through multiple channels. Award status was tracked in spreadsheets. Reporting required manual aggregation. The organization couldn't answer basic questions — how much has been awarded, to whom, in which states, against what milestones — without significant staff time and error risk.",
      "The solution needed to handle the volume, meet federal data security requirements, and be usable by program managers who were not technical users.",
    ],
    solutionHeading:
      "A Salesforce-based grants management platform built for federal-scale tracking and reporting.",
    solutionBody: [
      "M&S Consulting implemented a Salesforce Government Cloud environment purpose-built for the grants management lifecycle: application intake, review and scoring, award management, milestone tracking, disbursement, and compliance reporting.",
      "The platform replaced manual processes at every step. Program managers could see the full portfolio in a single dashboard. Grant award status was updated in real time as milestones were hit. Compliance reporting that previously took days was generated in minutes.",
    ],
    solutionPillars: [
      {
        label: "End-to-end lifecycle",
        body: "From intake to award to milestone tracking to final reporting — every step of the grants lifecycle managed in one system.",
      },
      {
        label: "Federal compliance",
        body: "Salesforce Government Cloud environment meeting federal security and data handling requirements.",
      },
      {
        label: "Real-time visibility",
        body: "Live dashboards giving program leadership instant visibility into award status, milestone completion, and spending across every community.",
      },
    ],
    resultsHeading:
      "Over $1 billion in grants managed. Hundreds of communities connected.",
    resultsBody: [
      "The Salesforce grants management platform now tracks over $1 billion in broadband expansion grants, covering hundreds of communities across the country. Program managers have real-time visibility into every award, milestone, and compliance obligation.",
      "Manual reporting processes that previously consumed significant staff time have been replaced by automated outputs. The program can now answer the questions federal oversight bodies ask — accurately, quickly, and consistently.",
    ],
    resultsStats: [
      {
        value: "$1B+",
        label: "Grants managed",
        body: "Over one billion dollars in broadband expansion grants tracked and managed through the Salesforce platform.",
      },
      {
        value: "100s",
        label: "Communities",
        body: "Hundreds of communities across the country receiving grants tracked through the system.",
      },
      {
        value: "Real-time",
        label: "Award visibility",
        body: "Live dashboards replaced manual spreadsheet tracking for all grant award and milestone data.",
      },
      {
        value: "Gov Cloud",
        label: "Security environment",
        body: "Salesforce Government Cloud deployed to meet federal data handling and security requirements.",
      },
    ],
  },

  "from-legacy-crm-to-salesforce-success": {
    engagement: "Enterprise CRM Migration — Salesforce",
    stats: [
      { value: "100%", label: "Data migrated without loss" },
      { value: "Zero", label: "Revenue disruption during cutover" },
      { value: "On Time", label: "Delivered to schedule" },
      { value: "Single", label: "Salesforce source of truth" },
    ],
    challengeHeading:
      "Replacing a heavily customized legacy CRM without breaking the business that depends on it.",
    challengeBody: [
      "The client had grown with their legacy CRM for years, customizing it into something that looked less like a commercial product and more like a proprietary system. Every workflow, every user, and every integration had been built around it. The prospect of migrating to Salesforce — while keeping the business running — was daunting.",
      "The data complexity alone was significant: decades of customer records, interaction history, opportunity data, and relationship intelligence, distributed across multiple tables with custom schema. The fear wasn't that the migration couldn't be done — it was that something critical would get lost or broken in the process.",
      "Previous consulting engagements had tried to start the migration and stalled. M&S Consulting was brought in with a clear mandate: assess what it would actually take, build a credible plan, and deliver it.",
    ],
    solutionHeading:
      "A migration built around data integrity, not speed.",
    solutionBody: [
      "M&S Consulting began with a full data audit — cataloguing every object, every custom field, every integration dependency, and every business process tied to the legacy system. That inventory became the migration specification: nothing moved until it had been mapped, validated, and signed off.",
      "The Salesforce build was scoped to match the client's actual workflows, not a generic best-practice template. Custom objects replicated the legacy data model where the business required it, and Salesforce-native alternatives were introduced where the legacy approach was holding the organization back.",
    ],
    solutionPillars: [
      {
        label: "Full data audit",
        body: "Every object, field, and integration dependency inventoried before a single record was moved.",
      },
      {
        label: "Workflow-matched build",
        body: "Salesforce configured to the client's actual processes — not a generic template that required them to adapt their business.",
      },
      {
        label: "Parallel validation",
        body: "Legacy and new system ran in parallel during the validation period, with record-level reconciliation before final cutover.",
      },
    ],
    resultsHeading:
      "100% of data migrated. Zero disruption. A Salesforce instance the business can actually use.",
    resultsBody: [
      "M&S Consulting delivered the migration on time, with 100% of legacy data successfully moved to Salesforce and validated. The cutover was executed with no disruption to sales operations — the team came in Monday morning and worked in Salesforce.",
      "The client now has a single source of truth for all customer relationship data, with the full capabilities of Salesforce available for the first time.",
    ],
    resultsStats: [
      {
        value: "100%",
        label: "Data migrated",
        body: "Every record, relationship, and interaction history from the legacy CRM successfully migrated and validated.",
      },
      {
        value: "Zero",
        label: "Revenue disruption",
        body: "No sales process interruptions, no missed opportunities, and no lost data during the cutover period.",
      },
      {
        value: "On Time",
        label: "Delivered to schedule",
        body: "Project delivered against the agreed timeline despite the complexity of the legacy data environment.",
      },
      {
        value: "Single",
        label: "Source of truth",
        body: "All customer relationship data consolidated into one Salesforce instance for the first time in the company's history.",
      },
    ],
  },

  "from-frustration-to-full-transformation": {
    engagement: "Salesforce Implementation Rescue",
    stats: [
      { value: "Rescued", label: "Mid-flight delivery" },
      { value: "Stabilized", label: "In 90 days" },
      { value: "On Track", label: "Delivery resumed" },
      { value: "Full", label: "Implementation completed" },
    ],
    challengeHeading:
      "A greenfield Salesforce implementation was failing. The business had already invested too much to walk away.",
    challengeBody: [
      "The organization had engaged a Salesforce implementation partner and invested significant time, budget, and internal resources into a greenfield build. Halfway through the program, it was clear something had gone wrong: deliverables were late, quality was inconsistent, the team had lost confidence in the delivery model, and business stakeholders were beginning to question whether Salesforce was the right choice at all.",
      "The actual problem wasn't Salesforce. It was the implementation. The build had drifted from the business requirements. Technical decisions made early in the engagement were creating downstream complexity. The delivery governance wasn't catching these issues early enough.",
      "M&S Consulting was brought in to do an objective assessment: find out what was actually wrong, determine what was salvageable, and provide an honest recommendation on the path forward.",
    ],
    solutionHeading:
      "Assess, stabilize, then deliver — in that order.",
    solutionBody: [
      "The M&S Consulting team spent the first three weeks doing nothing but listening and reviewing: code reviews, requirements walkthroughs, stakeholder interviews, and a full gap analysis between what had been built and what the business actually needed. The output was a frank assessment — what worked, what needed to be rebuilt, and what the remaining scope actually required.",
      "Stabilization came next. High-risk components were reworked before the delivery engine was restarted. A new delivery governance model was established, with shorter milestone cycles, clearer sign-off requirements, and an escalation path that gave business stakeholders real-time visibility into delivery status.",
    ],
    solutionPillars: [
      {
        label: "Objective assessment",
        body: "Full code review and requirements gap analysis before any changes were made — no assumptions, no excuses.",
      },
      {
        label: "Technical stabilization",
        body: "High-risk components rebuilt before delivery resumed, eliminating the technical debt that was driving the delays.",
      },
      {
        label: "New delivery governance",
        body: "Shorter milestone cycles and real-time stakeholder visibility replaced the opaque waterfall model that had obscured the problems.",
      },
    ],
    resultsHeading:
      "Implementation rescued, stabilized, and delivered.",
    resultsBody: [
      "M&S Consulting stabilized the program within 90 days of taking over delivery leadership. The implementation was completed on a revised schedule that the business trusted, with full scope delivered and the quality issues from the original engagement resolved.",
      "The engagement also gave the organization something the previous implementation had not: a clear understanding of their Salesforce environment, its limitations, and how to maintain it going forward.",
    ],
    resultsStats: [
      {
        value: "90 days",
        label: "Time to stabilization",
        body: "The program was stabilized and delivery resumed within 90 days of M&S Consulting taking over.",
      },
      {
        value: "Full scope",
        label: "Delivered",
        body: "All originally committed business capabilities delivered — none of the requirements were traded away in the rescue.",
      },
      {
        value: "Rebuilt",
        label: "High-risk components",
        body: "Technical debt components that were driving failures rebuilt before delivery resumed.",
      },
      {
        value: "On Track",
        label: "Delivery resumed",
        body: "Revised, credible delivery schedule established and maintained for the remainder of the program.",
      },
    ],
  },

  "building-a-high-performance-crm-and-customer-service-platform": {
    engagement: "Salesforce Service Cloud — Enterprise CRM Implementation",
    stats: [
      { value: "Millions", label: "Customer interactions supported" },
      { value: "3", label: "Salesforce clouds deployed" },
      { value: "Scalable", label: "Platform architecture" },
      { value: "Enterprise", label: "Volume handled from day one" },
    ],
    challengeHeading:
      "Millions of customer interactions. One platform to manage all of them.",
    challengeBody: [
      "A growing telecommunications company was managing customer service operations through a patchwork of legacy tools — a situation that became increasingly untenable as the business scaled. Case routing was manual. Customer history was fragmented across systems. Agent productivity was limited by the tools they were given.",
      "The requirements for a replacement were ambitious: a platform that could handle millions of customer interactions, integrate with billing and provisioning systems, route cases intelligently, and give agents a complete view of the customer without switching between screens.",
      "The company chose Salesforce, but needed a partner who understood both the technical complexity of a high-volume telecom environment and the organizational change management required to get adoption.",
    ],
    solutionHeading:
      "A Salesforce platform engineered for telecom scale, not just telecom use cases.",
    solutionBody: [
      "M&S Consulting implemented Salesforce Sales Cloud, Service Cloud, and Experience Cloud in an integrated architecture purpose-built for the volume and complexity of the telecom environment. Data models were designed for the scale of millions of customers, with performance engineering built into every object and query.",
      "System integrations brought customer billing, provisioning, and service history into the Salesforce platform, giving agents the complete picture they needed. Case management and routing logic was configured to the company's actual workflow — not a generic ITSM model.",
    ],
    solutionPillars: [
      {
        label: "Performance-engineered",
        body: "Data architecture and query design optimized for millions of records from the ground up.",
      },
      {
        label: "Integrated 360°",
        body: "Billing, provisioning, and service history pulled into Salesforce so agents never need to leave the platform.",
      },
      {
        label: "Intelligent routing",
        body: "Case routing logic built to the company's actual service tiers and expertise areas — reducing handle time and escalations.",
      },
    ],
    resultsHeading:
      "An enterprise CRM handling millions of interactions — from day one.",
    resultsBody: [
      "The Salesforce platform went live at full enterprise volume without performance degradation. Customer service teams had a complete view of every customer for the first time, and case handling times dropped as agents gained access to integrated billing and provisioning data.",
      "The architecture has scaled with the business, handling volume increases without requiring platform redesign.",
    ],
    resultsStats: [
      {
        value: "Millions",
        label: "Interactions supported",
        body: "The platform handled full enterprise interaction volume from day one without performance issues.",
      },
      {
        value: "3",
        label: "Salesforce clouds",
        body: "Sales Cloud, Service Cloud, and Experience Cloud deployed in an integrated architecture.",
      },
      {
        value: "360°",
        label: "Customer view",
        body: "Billing, provisioning, and service history integrated into a single agent view for the first time.",
      },
      {
        value: "Scalable",
        label: "Architecture",
        body: "Platform designed for growth — volume increases handled without requiring structural changes.",
      },
    ],
  },

  "rebuilding-a-mission-critical-financial-platform": {
    engagement: "Financial Platform Consolidation & Modernization",
    stats: [
      { value: "9 → 1", label: "Isolated systems consolidated" },
      { value: "Oracle", label: "Unified platform" },
      { value: "Real-Time", label: "Financial data availability" },
      { value: "Resilient", label: "Architecture post-consolidation" },
    ],
    challengeHeading:
      "Nine isolated financial systems. One organization. No single version of the truth.",
    challengeBody: [
      "When M&S Consulting joined this engagement in late 2021, a mission-critical financial system was fragmented across nine separate platforms — each running independently, each with its own data model, and none of them talking to each other in real time. Reconciliation was a manual monthly exercise. Reporting was slow, inconsistent, and unreliable.",
      "The fragmentation wasn't accidental. It was the result of years of acquisitions, technology decisions made in isolation, and the natural accumulation of technical debt in a fast-growing organization. Each isolated system had its own stakeholders, its own data owners, and its own operational dependencies.",
      "Consolidating them wasn't just a technical problem — it was a change management challenge with serious business continuity constraints. Any approach that disrupted the financial operations of the business, even temporarily, was unacceptable.",
    ],
    solutionHeading:
      "A single Oracle platform replacing nine isolated systems — without disrupting financial operations.",
    solutionBody: [
      "M&S Consulting designed a consolidation architecture around Oracle, with a phased migration approach that brought each system into the unified platform without requiring a big-bang cutover. Data mapping was completed for all nine sources before any migration began, and parallel operation periods were built into each phase.",
      "The new architecture was designed for resilience — not just functional consolidation. High-availability infrastructure, automated reconciliation, and real-time data pipelines replaced the manual processes that had made the previous environment so fragile.",
    ],
    solutionPillars: [
      {
        label: "Phased migration",
        body: "Each of the nine systems migrated on its own schedule, with parallel operation and full validation before decommissioning.",
      },
      {
        label: "Unified data model",
        body: "A single Oracle data model designed to accommodate the full range of financial data structures from all nine sources.",
      },
      {
        label: "Resilient architecture",
        body: "High-availability design with automated reconciliation replacing the manual processes that created risk.",
      },
    ],
    resultsHeading:
      "Nine systems became one. Financial data became reliable.",
    resultsBody: [
      "The consolidation was completed without disrupting financial operations. All nine isolated platforms were successfully migrated to the Oracle environment, and the organization had a single, authoritative source of financial data for the first time.",
      "Monthly reconciliation processes that previously required significant staff time were eliminated. Real-time financial visibility became the norm rather than the exception.",
    ],
    resultsStats: [
      {
        value: "9 → 1",
        label: "Platforms consolidated",
        body: "Nine isolated financial systems replaced by a single Oracle environment with a unified data model.",
      },
      {
        value: "Zero",
        label: "Business disruption",
        body: "Phased migration completed without impacting financial operations at any stage.",
      },
      {
        value: "Real-time",
        label: "Data availability",
        body: "Manual monthly reconciliation replaced by automated, real-time financial data visibility.",
      },
      {
        value: "Resilient",
        label: "Architecture",
        body: "High-availability Oracle infrastructure replacing fragile, manually-maintained isolated systems.",
      },
    ],
  },

  "delivering-a-last-minute-cloud-migration": {
    engagement: "Cloud Migration — AWS Government Cloud",
    stats: [
      { value: "Zero", label: "Downtime during migration" },
      { value: "On Time", label: "Deadline met" },
      { value: "AWS", label: "Target environment" },
      { value: "100%", label: "Workloads migrated" },
    ],
    challengeHeading:
      "A government deadline. A mission-critical system. No tolerance for downtime.",
    challengeBody: [
      "The Massachusetts Department of Industrial Accidents administers the state's workers' compensation system — a program that processes claims and delivers benefits to injured workers across the Commonwealth. The system runs continuously. Any disruption affects real people waiting on real decisions.",
      "The Department faced a hard deadline: migrate the legacy on-premises infrastructure to the cloud by a fixed government date. The timeline was tight, the environment was complex, and the risk of downtime was unacceptable.",
      "Previous migration planning had stalled. When M&S Consulting came in, there were months left on the clock — not years. The question wasn't what the ideal migration approach would look like; it was what a safe, executable migration looked like given the time available.",
    ],
    solutionHeading:
      "A zero-downtime migration executed against a non-negotiable deadline.",
    solutionBody: [
      "M&S Consulting scoped a cloud migration strategy built around the constraint that mattered most: zero downtime. The approach used AWS cloud infrastructure, with a lift-and-shift foundation supplemented by targeted optimizations where the timeline allowed.",
      "The migration was staged to allow continuous operation throughout. Systems were moved in sequence, with rollback capability maintained at each stage. The cutover was executed during a low-traffic window with full monitoring in place.",
    ],
    solutionPillars: [
      {
        label: "Zero-downtime design",
        body: "Migration architecture built around continuous operation — every stage had rollback capability and parallel running periods.",
      },
      {
        label: "AWS government cloud",
        body: "Migrated to AWS infrastructure meeting Massachusetts state government security and compliance requirements.",
      },
      {
        label: "Staged sequencing",
        body: "Systems migrated in priority order with complete validation at each stage before proceeding.",
      },
    ],
    resultsHeading:
      "On time. Zero downtime. Workers' compensation system in the cloud.",
    resultsBody: [
      "M&S Consulting delivered the cloud migration on the government deadline, with zero downtime throughout the process. The Department of Industrial Accidents' workers' compensation system continued operating without interruption, and the organization met its compliance deadline.",
      "The cloud environment has provided the operational improvements expected: better uptime, reduced infrastructure maintenance burden, and the flexibility to scale capacity on demand.",
    ],
    resultsStats: [
      {
        value: "Zero",
        label: "Downtime",
        body: "The workers' compensation system operated continuously throughout the migration — no service interruptions.",
      },
      {
        value: "On Time",
        label: "Government deadline met",
        body: "Migration completed before the hard compliance deadline — the only acceptable outcome for a government program.",
      },
      {
        value: "100%",
        label: "Workloads migrated",
        body: "All legacy infrastructure successfully migrated to AWS without workload loss or data integrity issues.",
      },
      {
        value: "AWS",
        label: "Target platform",
        body: "Cloud infrastructure meeting Massachusetts state government security and compliance requirements.",
      },
    ],
  },

  "redefining-efficiency-for-a-global-leader-in-vision-correction": {
    engagement: "SAP ERP Modernization — Global Supply Chain",
    stats: [
      { value: "Global", label: "Supply chain modernized" },
      { value: "SAP", label: "ERP platform" },
      { value: "Unified", label: "Operations across regions" },
      { value: "Scalable", label: "For next phase of growth" },
    ],
    challengeHeading:
      "A global eye care leader had outgrown the systems that built it.",
    challengeBody: [
      "The company had become a global leader in orthokeratology contact lenses by building a business that combines precision manufacturing, complex distribution, and highly regulated healthcare product delivery. Its technology infrastructure had grown alongside it — but not always in the same direction.",
      "Operations across manufacturing sites, distribution centers, and regional offices were running on disconnected systems with different data models. Supply chain visibility was limited. Demand planning was reactive. The operational complexity required to manage a global product portfolio was creating costs and delays that weren't sustainable at the company's current scale.",
      "SAP had been in the environment for years, but the implementation was partial and fragmented. M&S Consulting was engaged to do what the original rollout hadn't: a complete ERP modernization that unified the global supply chain from manufacturing to distribution.",
    ],
    solutionHeading:
      "A full SAP ERP overhaul, designed for global operations from the ground up.",
    solutionBody: [
      "M&S Consulting led the modernization of the company's SAP environment, extending coverage to include manufacturing execution, inventory management, global distribution, and financial consolidation. The implementation was designed to work across time zones, currencies, and regulatory environments — the operational reality of a global healthcare products company.",
      "Supply chain integration connected manufacturing output data to demand signals, giving planning teams real-time visibility into inventory positions and production capacity across all sites. The result was a supply chain that could respond to market changes — not just track them after the fact.",
    ],
    solutionPillars: [
      {
        label: "End-to-end SAP coverage",
        body: "Manufacturing, distribution, inventory, and financial consolidation all brought into a unified SAP environment.",
      },
      {
        label: "Global data model",
        body: "Multi-currency, multi-language, multi-regulatory environment supported in a single SAP instance.",
      },
      {
        label: "Supply chain integration",
        body: "Real-time connection between manufacturing output and demand signals — planning became proactive, not reactive.",
      },
    ],
    resultsHeading:
      "A unified global supply chain. Operations positioned for the next phase of growth.",
    resultsBody: [
      "The SAP modernization delivered the operational foundation the company needed to manage its global product portfolio efficiently. Supply chain visibility improved dramatically — planners had real-time data from manufacturing to distribution for the first time.",
      "The unified platform also positioned the organization to scale: new markets, new product lines, and new manufacturing sites could be brought into the SAP environment without the complexity of the previous fragmented architecture.",
    ],
    resultsStats: [
      {
        value: "Global",
        label: "Supply chain unified",
        body: "Manufacturing, distribution, and planning data connected across all regions in a single SAP environment.",
      },
      {
        value: "Real-time",
        label: "Inventory visibility",
        body: "Supply chain planners gained live visibility into inventory positions and production capacity across all sites.",
      },
      {
        value: "Unified",
        label: "Financial consolidation",
        body: "Multi-currency, multi-entity financial data consolidated in SAP for the first time.",
      },
      {
        value: "Scalable",
        label: "Platform",
        body: "Architecture designed to onboard new markets and manufacturing sites without structural changes.",
      },
    ],
  },

  "helping-a-national-public-sector-organization-power-up": {
    engagement: "Digital Transformation — Microsoft Power Platform",
    stats: [
      { value: "25+", label: "Business capabilities modernized" },
      { value: "People-First", label: "Transformation approach" },
      { value: "Power Platform", label: "Technology foundation" },
      { value: "Agile", label: "Delivery model" },
    ],
    challengeHeading:
      "Technology was only half the problem. The people and processes that depended on it were the other half.",
    challengeBody: [
      "A high-impact national public sector organization had grown to a scale where its existing systems were limiting — not enabling — the work it was built to do. Core operations were managed through a combination of legacy software, manual processes, and institutional workarounds that staff had invented over years to compensate for gaps in their tools.",
      "A technology replacement alone wouldn't solve the problem. In a people-intensive organization where staff expertise is the primary asset, digital transformation succeeds or fails based on adoption — whether the people doing the work embrace the new systems or route around them.",
      "M&S Consulting was selected as the delivery partner based on its track record in public sector transformation and its approach to managing technology change alongside the organizational change required to make it stick.",
    ],
    solutionHeading:
      "Microsoft Power Platform as the foundation. Agile delivery and change management as the engine.",
    solutionBody: [
      "M&S Consulting structured the engagement around Microsoft's Power Platform — Power Apps, Power Automate, and Power BI — as the core technology foundation. The platform was selected for its flexibility, its integration with existing Microsoft infrastructure the organization already owned, and its ability to be customized and maintained by non-technical staff over time.",
      "Delivery was organized into agile sprints, with each sprint targeting a specific business capability and closing with a review involving the staff who would use it. Change management activities — training, communications, super-user development — ran in parallel with technical delivery, not after it.",
    ],
    solutionPillars: [
      {
        label: "Capability-first scoping",
        body: "Each sprint delivered a complete business capability — not a technical component — allowing business owners to validate outcomes continuously.",
      },
      {
        label: "Change management integration",
        body: "Training and adoption activities built into every sprint cycle, not deferred until go-live.",
      },
      {
        label: "Citizen developer enablement",
        body: "Power Platform super-users trained within the organization to maintain and extend the environment after delivery.",
      },
    ],
    resultsHeading:
      "25+ capabilities modernized. An organization equipped to maintain its own digital environment.",
    resultsBody: [
      "M&S Consulting delivered over 25 modernized business capabilities across the organization, replacing the combination of legacy software and manual workarounds that had held the organization back. Staff adoption was high because the change management investment was made early.",
      "The organization also has something that many technology programs don't leave behind: an internal capability to maintain and extend the platform. Super-users trained during the engagement are building new applications in Power Platform without external consultants.",
    ],
    resultsStats: [
      {
        value: "25+",
        label: "Capabilities modernized",
        body: "Over 25 distinct business capabilities transformed from legacy processes to modern Power Platform solutions.",
      },
      {
        value: "High",
        label: "Staff adoption",
        body: "Change management delivered in parallel with technical work produced adoption rates well above typical for enterprise programs.",
      },
      {
        value: "Internal",
        label: "Capability built",
        body: "Power Platform super-users trained and building independently — the organization extended the platform within six months.",
      },
      {
        value: "Agile",
        label: "Delivery model",
        body: "Sprint-based delivery with business owner sign-off at each stage kept the program on track and on scope.",
      },
    ],
  },

  "guiding-a-growing-company-through-digital-transformation": {
    engagement: "Digital Transformation — Microsoft Azure Platform Modernization",
    stats: [
      { value: "Full", label: "Platform modernization delivered" },
      { value: "Azure", label: "Target cloud platform" },
      { value: "Managed", label: "Organizational change" },
      { value: "On Time", label: "Delivered to schedule" },
    ],
    challengeHeading:
      "Years of growth had outpaced the technology holding the business together.",
    challengeBody: [
      "A mid-sized company had built a successful business on systems that made sense at the time. As the organization grew, those systems became constraints: slow reporting, manual integrations, on-premises infrastructure that required increasing maintenance investment, and a technology footprint that made new capabilities expensive to deliver.",
      "The company's leadership knew digital transformation was necessary. What they didn't have was a clear picture of what that actually meant for their specific environment — which systems needed to be replaced, which could be modernized, and what the migration path looked like without disrupting the day-to-day operations the business depended on.",
      "M&S Consulting was engaged to answer those questions and lead the delivery: from assessment through execution.",
    ],
    solutionHeading:
      "An Azure-based transformation built around the company's actual operations, not a generic cloud blueprint.",
    solutionBody: [
      "M&S Consulting began with a current-state assessment: every system mapped, every integration catalogued, every operational dependency understood. The output was a transformation roadmap that sequenced modernization initiatives in the order that minimized risk and maximized business value — not in the order that was easiest technically.",
      "Microsoft Azure was the foundation of the target architecture. Core business systems were migrated or rebuilt on Azure, with Microsoft 365 and Dynamics 365 filling gaps that had previously been covered by manual processes. Change management ran alongside technical delivery to prepare the organization for each transition.",
    ],
    solutionPillars: [
      {
        label: "Assessment-first approach",
        body: "Full current-state mapping before any migration began — the roadmap reflected the organization's real environment, not assumptions.",
      },
      {
        label: "Azure foundation",
        body: "Core business systems migrated to Azure with Microsoft 365 and Dynamics 365 replacing manual processes.",
      },
      {
        label: "Managed change",
        body: "Organizational change management integrated into every phase — the business was prepared for each transition, not surprised by it.",
      },
    ],
    resultsHeading:
      "A modern platform. A business ready to use it.",
    resultsBody: [
      "M&S Consulting delivered the full digital transformation on schedule. The company moved from an aging on-premises environment to a modern Azure-based platform, with the manual processes and integration gaps that had slowed the business replaced by automated workflows.",
      "The transformation gave leadership the operational visibility they had been missing — real-time dashboards, consolidated reporting, and the data needed to make faster business decisions.",
    ],
    resultsStats: [
      {
        value: "Full",
        label: "Platform modernized",
        body: "Complete migration from on-premises to Azure — core systems, integrations, and data infrastructure.",
      },
      {
        value: "On Time",
        label: "Delivery",
        body: "Transformation delivered on the agreed timeline, with no major scope changes or timeline extensions.",
      },
      {
        value: "Automated",
        label: "Manual processes",
        body: "Key manual workflows replaced by automated integrations across the Azure environment.",
      },
      {
        value: "Real-time",
        label: "Business visibility",
        body: "Live dashboards and consolidated reporting gave leadership the operational data they'd been missing.",
      },
    ],
  },
};
