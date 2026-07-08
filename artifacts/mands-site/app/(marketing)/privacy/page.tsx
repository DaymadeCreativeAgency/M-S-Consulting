import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | M&S Consulting" },
  description:
    "M&S Consulting's privacy policy, how we collect, use, and protect your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="ms-section bg-ms-paper">
        <div className="ms-container max-w-3xl">
          <p className="eyebrow text-ms-navy mb-4">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl text-ms-ink mb-6">
            Privacy Policy
          </h1>
          <p className="font-sans text-sm text-charcoal-700 mb-12">
            Effective date: January 1, 2024 &nbsp;·&nbsp; Last updated: January 1, 2024
          </p>

          <div className="prose-ms space-y-10">
            <Section title="1. Overview">
              <p>
                M&S Consulting, LLC ("M&S Consulting," "we," "us," or "our") operates
                mandsconsulting.com (the "Site"). This Privacy Policy explains how we
                collect, use, disclose, and protect information about you when you visit
                the Site or interact with us. By using the Site, you agree to the
                practices described in this policy.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <p>We collect information in the following ways:</p>
              <ul>
                <li>
                  <strong>Information you provide directly.</strong> When you complete a
                  contact form, request a consultation, or subscribe to communications,
                  you may provide your name, email address, phone number, company name,
                  job title, and a description of your inquiry.
                </li>
                <li>
                  <strong>Automatically collected information.</strong> When you visit
                  the Site, we and our service providers may automatically collect
                  certain technical information, including your IP address, browser type
                  and version, operating system, referring URLs, pages viewed, time
                  spent on pages, and other usage data.
                </li>
                <li>
                  <strong>Cookies and similar technologies.</strong> We use cookies and
                  similar tracking technologies to operate the Site, remember your
                  preferences, and analyze traffic. You can control cookies through your
                  browser settings; disabling cookies may limit some Site functionality.
                </li>
              </ul>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and schedule consultations.</li>
                <li>Provide, maintain, and improve the Site.</li>
                <li>
                  Send you marketing communications if you have opted in, or where
                  permitted by applicable law.
                </li>
                <li>
                  Analyze how the Site is used in order to improve content and user
                  experience.
                </li>
                <li>Comply with legal obligations and enforce our policies.</li>
                <li>Protect the security and integrity of the Site.</li>
              </ul>
            </Section>

            <Section title="4. Legal Basis for Processing (EEA/UK Visitors)">
              <p>
                If you are located in the European Economic Area or the United Kingdom,
                we process your personal data on the following legal bases: (a)
                performance of a contract or pre-contractual steps at your request; (b)
                compliance with a legal obligation; (c) our legitimate interests in
                operating the Site and marketing our services, where not overridden by
                your interests or rights; or (d) your consent, where we have obtained
                it.
              </p>
            </Section>

            <Section title="5. Sharing Your Information">
              <p>
                We do not sell your personal information. We may share your information
                with:
              </p>
              <ul>
                <li>
                  <strong>Service providers.</strong> Third-party vendors who help us
                  operate the Site, send email, analyze traffic, or provide CRM
                  services. These parties are contractually required to protect your
                  information and use it only for the purpose of providing services to
                  us.
                </li>
                <li>
                  <strong>Business transfers.</strong> In connection with a merger,
                  acquisition, or sale of all or part of our business, your information
                  may be transferred as part of that transaction.
                </li>
                <li>
                  <strong>Legal requirements.</strong> When we believe disclosure is
                  required to comply with applicable law, regulation, court order, or
                  governmental request, or to protect the rights, property, or safety of
                  M&S Consulting, our clients, or others.
                </li>
              </ul>
            </Section>

            <Section title="6. Data Retention">
              <p>
                We retain personal information for as long as necessary to fulfill the
                purposes described in this policy, unless a longer retention period is
                required or permitted by law. Contact form submissions are retained for
                up to three years unless an ongoing business relationship is established.
              </p>
            </Section>

            <Section title="7. Security">
              <p>
                We implement reasonable administrative, technical, and physical
                safeguards designed to protect your information from unauthorized access,
                use, or disclosure. No method of transmission over the internet or
                electronic storage is completely secure, however, and we cannot guarantee
                absolute security.
              </p>
            </Section>

            <Section title="8. Your Rights and Choices">
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Access, correct, or delete personal information we hold about you.</li>
                <li>Object to or restrict certain types of processing.</li>
                <li>
                  Withdraw consent where processing is based on consent (this does not
                  affect the lawfulness of prior processing).
                </li>
                <li>
                  Lodge a complaint with your local data protection authority (EEA/UK
                  residents).
                </li>
              </ul>
              <p>
                To exercise these rights, contact us at{" "}
                <a href="mailto:privacy@mandsconsulting.com">
                  privacy@mandsconsulting.com
                </a>
                . We will respond within the timeframe required by applicable law.
              </p>
            </Section>

            <Section title="9. Third-Party Links">
              <p>
                The Site may contain links to third-party websites. We are not
                responsible for the privacy practices or content of those sites. We
                encourage you to review the privacy policies of any third-party sites you
                visit.
              </p>
            </Section>

            <Section title="10. Children's Privacy">
              <p>
                The Site is not directed to individuals under the age of 16. We do not
                knowingly collect personal information from children. If we become aware
                that a child under 16 has provided us with personal information, we will
                take steps to delete it.
              </p>
            </Section>

            <Section title="11. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. The "Last updated"
                date at the top of this page reflects the most recent revision. Continued
                use of the Site after the effective date constitutes acceptance of the
                updated policy. For material changes, we will provide more prominent
                notice as required by law.
              </p>
            </Section>

            <Section title="12. Contact Us">
              <p>
                If you have questions about this Privacy Policy or our data practices,
                please contact us:
              </p>
              <address className="not-italic font-sans text-sm text-ms-ink mt-3 space-y-1">
                <p>M&S Consulting, LLC</p>
                <p>Morgantown, WV</p>
                <p>
                  Email:{" "}
                  <a href="mailto:privacy@mandsconsulting.com">
                    privacy@mandsconsulting.com
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a href="https://mandsconsulting.com">mandsconsulting.com</a>
                </p>
              </address>
            </Section>
          </div>
        </div>
      </section>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h2 className="font-sans text-lg font-semibold text-ms-ink">{title}</h2>
      <div className="font-sans text-[15px] leading-relaxed text-charcoal-700 space-y-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:space-y-2 [&_a]:text-ms-navy [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-ms-navy/80">
        {children}
      </div>
    </div>
  );
}
