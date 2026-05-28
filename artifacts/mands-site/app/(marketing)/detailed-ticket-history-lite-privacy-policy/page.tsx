import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detailed Ticket History Lite Privacy Policy",
  description:
    "Data security, privacy statement, and EULA for M&S Consulting Atlassian apps including Issue History Analytics.",
  alternates: { canonical: "/detailed-ticket-history-lite-privacy-policy" },
};

const privacySections = [
  {
    title: "Overview",
    body: [
      "This is a data security and privacy statement for the Issue History Analytics app.",
    ],
  },
  {
    title: "App Architecture",
    body: [
      "This application operates exclusively on the client side. All required raw data is fetched using Atlassian APIs in your browser and processed for display without sending it to M&S Consulting servers.",
      "Any settings and configuration required for the app to work are saved within your Jira instance.",
    ],
  },
  {
    title: "Privacy",
    body: [
      "We do not collect personal data from your use of our application. Usage statistics and licensing information are collected through Atlassian's Marketplace API.",
    ],
  },
  {
    title: "Data Collected From Server and Data Center Apps",
    body: [
      "No data is collected or sent to M&S Consulting servers. Your data does not leave your own servers under any circumstances.",
    ],
  },
  {
    title: "Cloud Apps",
    body: [
      "Our plugin requires read permission to read your issues, issue details, and issue changelogs.",
      "No personally identifiable data is stored on M&S Consulting servers because the application runs exclusively on the client side. All configuration is stored in Atlassian servers.",
    ],
  },
  {
    title: "Security",
    body: [
      "All application components and code are served using SSL. If you have found a security vulnerability, email atlassian.applications@mandsconsulting.com immediately.",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons.",
      "We will notify you of material changes by posting the updated policy in our app or through other communication methods.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, contact atlassian.applications@mandsconsulting.com.",
    ],
  },
];

const eulaSections = [
  {
    title: "License Grant",
    body: [
      "M&S Consulting grants you a personal, non-transferable, non-exclusive license to use our software on your devices in accordance with this EULA.",
      "You are responsible for ensuring your device meets the minimum requirements of the software.",
    ],
  },
  {
    title: "Restrictions",
    body: [
      "You may not edit, alter, modify, adapt, decompile, disassemble, or reverse engineer the software or attempt to do so.",
      "You may not reproduce, copy, distribute, resell, or use the software in any way that breaches applicable law or this EULA.",
    ],
  },
  {
    title: "Intellectual Property and Ownership",
    body: [
      "M&S Consulting retains ownership of the software as originally downloaded by you and all subsequent downloads. The software and all related intellectual property rights remain the property of M&S Consulting.",
      "M&S Consulting reserves the right to grant licenses to use the software to third parties.",
    ],
  },
  {
    title: "Termination",
    body: [
      "This EULA is effective from the date you first use the software and continues until terminated. You may terminate it at any time by written notice to M&S Consulting.",
      "It will terminate immediately if you fail to comply with any term. Upon termination, licenses granted by this EULA immediately terminate and you must stop all access and use.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "This EULA and any dispute arising out of or in connection with it shall be governed by and construed in accordance with the laws of the United States.",
    ],
  },
];

export default function DetailedTicketHistoryLitePrivacyPolicyPage() {
  return (
    <>
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0A0E1A" }}>
        <div className="ms-container max-w-4xl">
          <p className="eyebrow mb-5" style={{ color: "#5CA7F3" }}>
            Atlassian Apps
          </p>
          <h1
            className="font-serif text-white font-medium"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)", lineHeight: 1.12, marginBottom: "1.5rem" }}
          >
            Data Security and Privacy Statement
          </h1>
          <p className="font-sans" style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.68)" }}>
            Privacy policy and end-user license agreement for Issue History Analytics and M&S Consulting Atlassian apps.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container max-w-4xl">
          <div className="space-y-12">
            {privacySections.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif font-medium mb-4" style={{ color: "#001F65", fontSize: "1.8rem" }}>
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="font-sans" style={{ color: "#4A5568", lineHeight: 1.75 }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <section className="pt-8 border-t border-[rgba(0,31,101,0.12)]">
              <h2 className="font-serif font-medium mb-4" style={{ color: "#001F65", fontSize: "2rem" }}>
                End-User License Agreement for M&S Consulting Atlassian Apps
              </h2>
              <p className="font-sans mb-5" style={{ color: "#4A5568", lineHeight: 1.75 }}>
                This End-User License Agreement is a legally binding agreement between you and M&S Consulting. It governs your acquisition and use of third-party Atlassian apps supplied by M&S Consulting directly or through an authorized reseller or distributor.
              </p>
              <p className="font-sans" style={{ color: "#4A5568", lineHeight: 1.75 }}>
                By installing or using the software, including a free trial, you confirm your acceptance of the software and agree to be bound by this agreement.
              </p>
            </section>

            {eulaSections.map((section) => (
              <section key={section.title}>
                <h3 className="font-serif font-medium mb-4" style={{ color: "#001F65", fontSize: "1.45rem" }}>
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="font-sans" style={{ color: "#4A5568", lineHeight: 1.75 }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <section className="rounded-2xl p-8" style={{ backgroundColor: "#EFEADB" }}>
              <p className="font-sans font-semibold mb-2" style={{ color: "#001F65" }}>
                M&S Consulting
              </p>
              <p className="font-sans" style={{ color: "#4A5568", lineHeight: 1.75 }}>
                1 Suburban Ct.<br />
                Morgantown, WV 26505<br />
                (888) 812-6318
              </p>
              <p className="font-sans mt-4" style={{ color: "#4A5568" }}>
                Effective Date: 09/14/2023
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
