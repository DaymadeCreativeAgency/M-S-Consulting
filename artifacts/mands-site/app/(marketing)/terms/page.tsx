import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Terms of Use | M&S Consulting" },
  description:
    "Terms governing your use of mandsconsulting.com and M&S Consulting's digital properties.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main>
      <section className="ms-section bg-ms-paper">
        <div className="ms-container max-w-3xl">
          <p className="eyebrow text-ms-navy mb-4">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl text-ms-ink mb-6">
            Terms of Use
          </h1>
          <p className="font-sans text-sm text-charcoal-700 mb-12">
            Effective date: January 1, 2024 &nbsp;·&nbsp; Last updated: January 1, 2024
          </p>

          <div className="space-y-10">
            <Section title="1. Acceptance of Terms">
              <p>
                By accessing or using mandsconsulting.com (the "Site"), you agree to be
                bound by these Terms of Use ("Terms") and our Privacy Policy, which is
                incorporated herein by reference. If you do not agree to these Terms, do
                not use the Site. These Terms apply to all visitors, users, and others
                who access or use the Site.
              </p>
            </Section>

            <Section title="2. Use of the Site">
              <p>
                You may use the Site for lawful purposes only and in accordance with
                these Terms. You agree not to:
              </p>
              <ul>
                <li>
                  Use the Site in any way that violates applicable federal, state, local,
                  or international law or regulation.
                </li>
                <li>
                  Transmit, or procure the sending of, any unsolicited or unauthorized
                  advertising or promotional material.
                </li>
                <li>
                  Attempt to gain unauthorized access to, interfere with, damage, or
                  disrupt any part of the Site or any server, computer, or database
                  connected to the Site.
                </li>
                <li>
                  Use any robot, spider, scraper, or other automated means to access the
                  Site for any purpose without our express written permission, except as
                  expressly permitted by our robots.txt file.
                </li>
                <li>
                  Engage in any conduct that restricts or inhibits anyone's use or
                  enjoyment of the Site, or which may harm M&S Consulting or users of
                  the Site.
                </li>
              </ul>
            </Section>

            <Section title="3. Intellectual Property">
              <p>
                The Site and its entire contents, features, and functionality,
                including but not limited to all information, software, text, displays,
                images, and the design, selection, and arrangement thereof, are owned
                by M&S Consulting, LLC, its licensors, or other providers of such
                material, and are protected by United States and international copyright,
                trademark, patent, trade secret, and other intellectual property or
                proprietary rights laws.
              </p>
              <p>
                These Terms permit you to use the Site for your personal, non-commercial
                use only. You must not reproduce, distribute, modify, create derivative
                works of, publicly display, publicly perform, republish, download, store,
                or transmit any of the material on our Site without M&S Consulting's
                prior written consent, except as permitted by applicable law.
              </p>
            </Section>

            <Section title="4. Trademarks">
              <p>
                The M&S Consulting name, logo, and all related names, logos, product and
                service names, designs, and slogans are trademarks of M&S Consulting,
                LLC. You must not use such marks without our prior written permission.
                All other names, logos, product and service names, designs, and slogans
                on the Site are the trademarks of their respective owners.
              </p>
            </Section>

            <Section title="5. Disclaimer of Warranties">
              <p>
                THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT
                ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER M&S
                CONSULTING NOR ANY PERSON ASSOCIATED WITH M&S CONSULTING MAKES ANY
                WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY,
                RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SITE.
              </p>
              <p>
                THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR
                LIMITED UNDER APPLICABLE LAW.
              </p>
            </Section>

            <Section title="6. Limitation of Liability">
              <p>
                TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL M&S CONSULTING,
                ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES,
                AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR ANY INDIRECT, SPECIAL,
                INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT
                LIMITATION LOST PROFITS, LOSS OF DATA, OR LOSS OF GOODWILL, ARISING OUT
                OF OR IN CONNECTION WITH YOUR USE OF, OR INABILITY TO USE, THE SITE,
                WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT
                LIABILITY, OR ANY OTHER LEGAL THEORY.
              </p>
            </Section>

            <Section title="7. Indemnification">
              <p>
                You agree to defend, indemnify, and hold harmless M&S Consulting, its
                affiliates, licensors, and service providers, and its and their
                respective officers, directors, employees, contractors, agents,
                licensors, suppliers, successors, and assigns from and against any
                claims, liabilities, damages, judgments, awards, losses, costs, expenses,
                or fees (including reasonable attorneys' fees) arising out of or relating
                to your violation of these Terms or your use of the Site.
              </p>
            </Section>

            <Section title="8. Links to Third-Party Sites">
              <p>
                The Site may contain links to websites operated by third parties. These
                links are provided for your convenience only. M&S Consulting has no
                control over the content of those sites and accepts no responsibility for
                them or for any loss or damage that may arise from your use of them.
              </p>
            </Section>

            <Section title="9. Geographic Restrictions">
              <p>
                M&S Consulting is based in Morgantown, West Virginia, United States.
                The Site is intended for use by persons located in the United States.
                We make no claims that the Site or any of its content is accessible or
                appropriate outside of the United States. Access to the Site may not be
                legal by certain persons or in certain countries. If you access the Site
                from outside the United States, you do so on your own initiative and are
                responsible for compliance with local laws.
              </p>
            </Section>

            <Section title="10. Governing Law and Jurisdiction">
              <p>
                These Terms and any dispute or claim arising out of or related to them,
                their subject matter, or their formation shall be governed by and
                construed in accordance with the laws of the State of West Virginia,
                without giving effect to any choice or conflict of law provisions. Any
                legal suit, action, or proceeding arising out of or related to these
                Terms or the Site shall be instituted exclusively in the federal or state
                courts of Monongalia County, West Virginia.
              </p>
            </Section>

            <Section title="11. Changes to the Terms">
              <p>
                We may revise and update these Terms from time to time at our sole
                discretion. All changes are effective immediately when we post them. Your
                continued use of the Site following the posting of revised Terms means
                you accept and agree to the changes.
              </p>
            </Section>

            <Section title="12. Contact Information">
              <p>
                Questions about the Terms of Use should be sent to us at:
              </p>
              <address className="not-italic font-sans text-sm text-ms-ink mt-3 space-y-1">
                <p>M&S Consulting, LLC</p>
                <p>Morgantown, WV</p>
                <p>
                  Email:{" "}
                  <a href="mailto:legal@mandsconsulting.com">
                    legal@mandsconsulting.com
                  </a>
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
