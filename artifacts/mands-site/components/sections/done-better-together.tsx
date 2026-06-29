import { FadeIn } from "@/components/ui/fade-in";

const ITEMS = [
  {
    word: "Done.",
    text: "At M&S, we focus on getting things done right and on time. Project accountability is built into how we staff and manage every engagement, not bolted on at the end.",
  },
  {
    word: "Better.",
    text: "We challenge ourselves to find solutions that may be atypical in your market, developed from seeing what works and what doesn't across government, healthcare, and enterprise.",
  },
  {
    word: "Together.",
    text: "We work alongside your team as true partners. Our consultants embed in your organization, take your goals personally, and care about the outcome beyond the contract.",
  },
];

export function DoneBetterTogether() {
  return (
    <div className="divide-y divide-ms-navy/10">
      {ITEMS.map(({ word, text }, i) => (
        <FadeIn
          key={word}
          direction="up"
          delay={i * 0.12}
          className="grid grid-cols-[200px_1fr] items-start gap-10 py-7"
        >
          <h2
            className="font-serif font-medium text-ms-navy"
            style={{ fontSize: "clamp(2.25rem, 3.5vw, 3rem)", lineHeight: 1.05 }}
          >
            <span className="relative inline-block text-ms-navy">
              <span
                aria-hidden="true"
                className="absolute -bottom-[0.08em] -left-[0.04em] -right-[0.08em] z-0 h-[0.56em] bg-[#5CA7F3]/35"
              />
              <span className={word === "Together." ? "relative z-10 italic" : "relative z-10"}>
                {word}
              </span>
            </span>
          </h2>
          <p className="marketing-copy pt-1 text-charcoal-700">
            {text}
          </p>
        </FadeIn>
      ))}
    </div>
  );
}
