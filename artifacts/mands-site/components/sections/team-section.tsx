"use client";

import * as React from "react";
import { X } from "lucide-react";
import {
  MANAGING_PARTNERS,
  ASSOCIATE_PARTNERS,
  DIRECTORS,
  type TeamMember,
} from "@/lib/team";
import { cn } from "@/lib/utils";

/* ── LinkedIn "in" icon SVG ─────────────────────────────────────────────── */

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ── LinkedIn button variants ───────────────────────────────────────────── */

function LinkedInBadge({
  href,
  name,
  variant = "icon",
}: {
  href: string;
  name: string;
  variant?: "icon" | "pill";
}) {
  if (variant === "icon") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name} on LinkedIn`}
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center justify-center rounded-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
        style={{
          width: 26,
          height: 26,
          backgroundColor: "#0A66C2",
          color: "white",
          borderRadius: "5px",
        }}
      >
        <LinkedInIcon size={14} />
      </a>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} on LinkedIn`}
      onClick={(e) => e.stopPropagation()}
      className="inline-flex items-center gap-2 rounded-md font-sans font-semibold transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        backgroundColor: "#0A66C2",
        color: "white",
        fontSize: "0.82rem",
        padding: "0.45rem 0.9rem",
        borderRadius: "6px",
        letterSpacing: "0.01em",
      }}
    >
      <LinkedInIcon size={14} />
      View Profile
    </a>
  );
}

/* ── Bio modal ──────────────────────────────────────────────────────────── */

function BioModal({
  member,
  onClose,
}: {
  member: TeamMember;
  onClose: () => void;
}) {
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: "rgba(10,14,26,0.85)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
        style={{ boxShadow: "0 32px 100px rgba(0,0,0,0.45)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top band — photo + identity */}
        <div
          className="flex flex-col sm:flex-row"
          style={{ backgroundColor: "#001F65" }}
        >
          {/* Photo column */}
          <div className="flex flex-col items-center justify-center px-8 py-8 sm:py-10 sm:w-56 shrink-0">
            <div
              style={{
                width: 130,
                height: 130,
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid rgba(255,255,255,0.20)",
                flexShrink: 0,
                boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
              }}
            >
              {member.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                >
                  <span className="font-sans font-bold text-white text-3xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Name / title / LinkedIn — right of photo on desktop */}
          <div className="flex flex-col justify-center px-8 sm:pl-0 sm:pr-10 pb-8 sm:py-10 text-center sm:text-left">
            <h3
              className="font-serif text-white leading-tight"
              style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.6rem)", fontWeight: 500 }}
            >
              {member.name}
            </h3>
            <p
              className="font-sans mt-1.5 mb-4"
              style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.60)", lineHeight: 1.4 }}
            >
              {member.title}
            </p>
            {member.linkedin && (
              <div className="flex sm:block justify-center">
                <LinkedInBadge href={member.linkedin} name={member.name} variant="pill" />
              </div>
            )}
          </div>
        </div>

        {/* Body — bio + expertise */}
        <div className="bg-white px-8 py-7">
          <p
            className="font-sans leading-[1.8]"
            style={{ fontSize: "0.93rem", color: "#374151" }}
          >
            {member.bio}
          </p>

          {member.expertise && member.expertise.length > 0 && (
            <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(0,31,101,0.08)" }}>
              <p
                className="font-sans font-semibold uppercase tracking-widest mb-3"
                style={{ fontSize: "0.68rem", color: "rgba(0,31,101,0.50)" }}
              >
                Areas of expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans font-semibold"
                    style={{
                      fontSize: "0.75rem",
                      padding: "0.3rem 0.8rem",
                      borderRadius: "99px",
                      backgroundColor: "rgba(0,31,101,0.07)",
                      color: "#001F65",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3.5 right-3.5 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X className="h-4 w-4 text-white/70" />
        </button>
      </div>
    </div>
  );
}

/* ── Person card ────────────────────────────────────────────────────────── */

function PersonCard({
  member,
  photoSize,
  onSelect,
}: {
  member: TeamMember;
  photoSize: number;
  onSelect: (m: TeamMember) => void;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-2.5">
      {/* Clickable photo */}
      <button
        type="button"
        onClick={() => onSelect(member)}
        className="group relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy focus-visible:ring-offset-2 rounded-full"
        aria-label={`View bio for ${member.name}`}
      >
        <div
          style={{
            width: photoSize,
            height: photoSize,
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid rgba(0,31,101,0.12)",
            transition: "border-color 0.2s, box-shadow 0.2s",
          }}
          className="group-hover:border-ms-navy group-hover:shadow-[0_4px_20px_rgba(0,31,101,0.20)]"
        >
          {member.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={member.photo}
              alt={member.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
                transition: "transform 0.3s",
              }}
              className="group-hover:scale-105"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: "#001F65" }}
            >
              <span
                className="font-sans font-bold text-white"
                style={{ fontSize: photoSize * 0.28 }}
              >
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </span>
            </div>
          )}
        </div>
        {/* Hover overlay */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,31,101,0.55)" }}
        >
          <span className="font-sans text-white text-[10px] font-semibold uppercase tracking-wider">
            View Bio
          </span>
        </div>
      </button>

      {/* Name + title + LinkedIn */}
      <div className="flex flex-col items-center gap-1">
        <p
          className="font-sans font-semibold leading-tight"
          style={{ fontSize: "0.875rem", color: "#001F65" }}
        >
          {member.name}
        </p>
        <p
          className="font-sans"
          style={{ fontSize: "0.72rem", color: "#6B7280", lineHeight: 1.4 }}
        >
          {member.title}
        </p>
        {member.linkedin && (
          <LinkedInBadge href={member.linkedin} name={member.name} variant="icon" />
        )}
      </div>
    </div>
  );
}

/* ── Main section ───────────────────────────────────────────────────────── */

export function TeamSection() {
  const [selected, setSelected] = React.useState<TeamMember | null>(null);

  return (
    <>
      {selected && (
        <BioModal member={selected} onClose={() => setSelected(null)} />
      )}

      {/* Managing Partners + Associate Partners */}
      <div className="mb-14">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          {/* Managing Partners */}
          <div className="flex-1">
            <p
              className="font-sans text-xs font-semibold uppercase tracking-widest mb-8"
              style={{ color: "rgba(0,31,101,0.45)" }}
            >
              Managing Partners
            </p>
            <div className="flex gap-10 flex-wrap">
              {MANAGING_PARTNERS.map((m) => (
                <PersonCard key={m.name} member={m} photoSize={180} onSelect={setSelected} />
              ))}
            </div>
          </div>

          {/* Vertical divider (desktop) */}
          <div
            className="hidden lg:block w-px self-stretch mx-8"
            style={{ backgroundColor: "rgba(0,31,101,0.10)" }}
          />

          {/* Associate Partners */}
          <div className="flex-1">
            <p
              className="font-sans text-xs font-semibold uppercase tracking-widest mb-8"
              style={{ color: "rgba(0,31,101,0.45)" }}
            >
              Associate Partners
            </p>
            <div className="flex gap-10 flex-wrap">
              {ASSOCIATE_PARTNERS.map((m) => (
                <PersonCard key={m.name} member={m} photoSize={156} onSelect={setSelected} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Directors & Practice Leads */}
      <div style={{ paddingTop: "2.5rem", borderTop: "1px solid rgba(0,31,101,0.10)" }}>
        <p
          className="font-sans text-xs font-semibold uppercase tracking-widest mb-10"
          style={{ color: "rgba(0,31,101,0.45)" }}
        >
          Directors &amp; Practice Leads
        </p>
        <div
          className="grid gap-x-6 gap-y-10"
          style={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))" }}
        >
          {DIRECTORS.map((m) => (
            <PersonCard key={m.name} member={m} photoSize={140} onSelect={setSelected} />
          ))}
        </div>
      </div>
    </>
  );
}
