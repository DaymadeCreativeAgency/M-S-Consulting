import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, ArrowUpFromLine, ShieldCheck } from "lucide-react";
import { MsToolsAccordion } from "@/components/sections/ms-tools-accordion";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { HeroHighlight, ServicePracticeHero } from "@/components/sections/service-practice-hero";

export const metadata: Metadata = {
  title: "Microsoft Consulting Services",
  description:
    "More than 15 years guiding organizations through Microsoft implementations. M&S Consulting helps you adopt, integrate, and optimize Microsoft technologies across M365, Azure, Power Platform, and more.",
  alternates: { canonical: "/service-lines/microsoft" },
};

const SERVICES = [
  {
    Icon: ClipboardList,
    title: "Strategy and Planning",
    body: [
      {
        text: "Which Microsoft tools are worth investing in for your organization? How can you best utilize these resources to maximize their value and achieve real results? What does the successful implementation of these solutions look like on both a big picture and day-to-day level?",
        bold: false,
      },
      {
        text: "Our team is here to help you answer these questions and more so we can work together to create a game plan for sustainable future success. We start by understanding the unique needs and goals of your business on a deep level. Then, we create a",
        bold: false,
      },
      {
        text: "personalized plan for an optimized integration of Microsoft solutions in your business.",
        bold: true,
      },
    ],
  },
  {
    Icon: ArrowUpFromLine,
    title: "Implementation",
    body: [
      {
        text: "You've heard about all the amazing capabilities Microsoft technologies offer. Yet actually translating those capabilities into",
        bold: false,
      },
      {
        text: "working systems that are seamlessly integrated into the structure of your business",
        bold: true,
      },
      {
        text: "is where the real work (and results) happen.",
        bold: false,
      },
      {
        text: "Our consultants are ready to lead your team through a smooth migration to the Microsoft ecosystem, minimizing any disruptions to your productivity in the process. Then, we'll set up your systems and ensure that you are taking full advantage of every available functionality.",
        bold: false,
      },
    ],
  },
  {
    Icon: ShieldCheck,
    title: "Managed Services",
    body: [
      {
        text: "Microsoft technologies are not a \u201Cset it and forget it\u201D type of service. These systems are evolving every second, meaning",
        bold: false,
      },
      {
        text: "an implementation that is optimized today may not be tomorrow.",
        bold: true,
      },
      {
        text: "That's why our team is in this with you for the long haul. We'll monitor your analytics to identify growth opportunities, update you on relevant new innovations, advise you on how to optimize your Microsoft spending, and more. We also work diligently to keep your Microsoft systems secure so you can enjoy minimized risk and maximized rewards. When you work with M&S, you'll have the seasoned wisdom of our specialists on tap at all times.",
        bold: false,
      },
    ],
  },
];

export default function MicrosoftPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ─────────────────────────────────────────── */}
      <ServicePracticeHero
        eyebrow="MICROSOFT CONSULTING SERVICES"
        imageSrc="/media/MicrosoftServiceLine.png"
        imageFit="contain"
        imageBackground="#FFFFFF"
      >
        Optimize efficiency and <HeroHighlight>scale effortlessly</HeroHighlight> with Microsoft&rsquo;s powerful solutions.
      </ServicePracticeHero>

      {/* ── SECTION 2: Intro body ────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — photo */}
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                height: "420px",
                boxShadow: "0 20px 60px rgba(0,31,101,0.12)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/media/team/consultant-meeting.jpg"
                alt="M&S Consulting team presentation"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>

            {/* Right — body text */}
            <div>
              <p
                className="font-sans"
                style={{
                  fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                  lineHeight: 1.75,
                  color: "#2D3748",
                  marginBottom: "1.5rem",
                }}
              >
                Microsoft offers a myriad of innovative solutions designed to enhance
                your organization&rsquo;s efficiency. To harness the full potential of
                these tools, it&rsquo;s important to have a thorough understanding of
                their unique capabilities. Our team has{" "}
                <strong>more than 15 years of experience</strong> guiding clients
                through a diverse array of Microsoft projects.
              </p>
              <p
                className="font-sans"
                style={{
                  fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                  lineHeight: 1.75,
                  color: "#2D3748",
                  marginBottom: "1.5rem",
                }}
              >
                We&rsquo;re here to help you get over the hump of learning,
                implementing, and optimizing these complex technologies so you can
                start reaping their full benefits faster.
              </p>
              <p
                className="font-sans"
                style={{
                  fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                  lineHeight: 1.75,
                  color: "#2D3748",
                }}
              >
                Navigate the Microsoft ecosystem confidently with our expert
                consultants on your side. We make it effortless to{" "}
                <strong>
                  equip your organization with all the latest tools for
                  productivity, communication, and innovation.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Mission Statement / CTA ──────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#001F65" }}>
        <div className="ms-container">
          <div
            className="flex flex-col items-center text-center"
            style={{ maxWidth: "820px", margin: "0 auto" }}
          >
            <p
              className="font-serif text-white font-medium"
              style={{
                fontSize: "clamp(1.35rem, 2.6vw, 2rem)",
                lineHeight: 1.55,
                marginBottom: "2.5rem",
              }}
            >
              Whether you aim to{" "}
              <strong>adopt one, some, or all</strong> of Microsoft&rsquo;s
              industry-leading software solutions, our team is here to be your
              expert guide and trusted partner. Our mission—to make the absolute
              most of your Microsoft investment.
            </p>
            <Link
              href="/contact"
              className="font-sans font-semibold inline-flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-200"
              style={{
                border: "1.5px solid rgba(255,255,255,0.7)",
                color: "white",
                fontSize: "0.9rem",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={undefined}
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Services Overview (3-col cards) ──────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <div className="mb-14">
            <h2
              className="font-serif text-ms-navy font-medium"
              style={{
                fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)",
                lineHeight: 1.2,
                marginBottom: "0.5rem",
              }}
            >
              M&amp;S Consulting Microsoft Services
            </h2>
            <p
              className="font-sans"
              style={{
                fontSize: "1rem",
                color: "#4A5568",
                fontStyle: "italic",
              }}
            >
              Our expert Microsoft consultants can help you with&hellip;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.map(({ Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-4">
                {/* Icon */}
                <div className="flex flex-col items-start gap-3 mb-1">
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      backgroundColor: "#001F65",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color="white" strokeWidth={1.5} />
                  </div>
                  {/* Colored underline accent */}
                  <div
                    style={{
                      width: "52px",
                      height: "3px",
                      borderRadius: "2px",
                      background: "linear-gradient(90deg, #5CA7F3, #001F65)",
                    }}
                  />
                </div>

                <h3
                  className="font-sans font-semibold"
                  style={{ fontSize: "1.05rem", color: "#001F65" }}
                >
                  {title}
                </h3>

                <div
                  className="font-sans"
                  style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#4A5568" }}
                >
                  {body.map((segment, i) =>
                    segment.bold ? (
                      <strong key={i} style={{ color: "#2D3748" }}>
                        {segment.text}
                      </strong>
                    ) : (
                      <span key={i}>{segment.text} </span>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Tools Accordion (dark) ───────────────────────── */}
      <MsToolsAccordion />

      {/* ── SECTION 6: Contact Form (navy) ──────────────────────────── */}
      <MsContactForm />
    </>
  );
}
