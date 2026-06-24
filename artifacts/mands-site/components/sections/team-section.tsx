"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import {
  MANAGING_PARTNERS,
  ASSOCIATE_PARTNERS,
  DIRECTORS,
  type TeamMember,
} from "@/lib/team";

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
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-[200] bg-[#0A0E1A]/80"
        aria-hidden="true"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="team-bio-title"
        className="fixed inset-0 z-[201] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
      >
        <div
          className="pointer-events-auto relative w-full max-w-2xl overflow-hidden rounded-2xl"
          style={{ boxShadow: "0 32px 100px rgba(0,0,0,0.45)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top band — photo + identity */}
          <div className="flex flex-col sm:flex-row" style={{ backgroundColor: "#001F65" }}>
            <div className="flex shrink-0 flex-col items-center justify-center px-8 py-8 sm:w-56 sm:py-10">
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
                      objectPosition: member.photoPosition ?? "top center",
                      transform: member.photoScale ? `scale(${member.photoScale})` : undefined,
                      transformOrigin: member.photoTransformOrigin ?? "center top",
                    }}
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                  >
                    <span className="font-sans text-3xl font-bold text-white">
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

            <div className="flex flex-col justify-center px-8 pb-8 text-center sm:pl-0 sm:pr-10 sm:py-10 sm:text-left">
              <h3
                id="team-bio-title"
                className="font-serif font-medium leading-tight text-white"
                style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.6rem)" }}
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
                <div className="flex justify-center sm:block">
                  <LinkedInBadge href={member.linkedin} name={member.name} variant="pill" />
                </div>
              )}
            </div>
          </div>

          {/* Body — bio + expertise */}
          <div className="bg-white px-8 py-7">
            <p className="marketing-copy" style={{ color: "#374151" }}>
              {member.bio}
            </p>

            {member.expertise && member.expertise.length > 0 && (
              <div className="mt-6 border-t pt-5" style={{ borderColor: "rgba(0,31,101,0.08)" }}>
                <p
                  className="mb-3 font-sans font-semibold uppercase tracking-widest"
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

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3.5 top-3.5 flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="h-4 w-4 text-white/70" />
          </button>
        </div>
      </div>
    </>,
    document.body,
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
    <div className="flex flex-col items-center gap-2.5 text-center">
      <button
        type="button"
        onClick={() => onSelect(member)}
        className="group relative shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy focus-visible:ring-offset-2"
        style={{ width: photoSize, height: photoSize }}
        aria-label={`View bio for ${member.name}`}
      >
        <span
          className="block h-full w-full overflow-hidden rounded-full border-[3px] border-[rgba(0,31,101,0.12)] transition-[border-color,box-shadow] duration-200 group-hover:border-ms-navy group-hover:shadow-[0_4px_20px_rgba(0,31,101,0.20)]"
        >
          {member.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={member.photo}
              alt=""
              className="block h-full w-full object-cover"
              style={{
                objectPosition: member.photoPosition ?? "top center",
                transform: member.photoScale ? `scale(${member.photoScale})` : undefined,
                transformOrigin: member.photoTransformOrigin ?? "center top",
              }}
            />
          ) : (
            <span
              className="flex h-full w-full items-center justify-center"
              style={{ backgroundColor: "#001F65" }}
            >
              <span className="font-sans font-bold text-white" style={{ fontSize: photoSize * 0.28 }}>
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </span>
            </span>
          )}
        </span>

        <span
          className="absolute inset-0 flex items-center justify-center rounded-full bg-[#001F65]/55 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden="true"
        >
          <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-white">
            View Bio
          </span>
        </span>
      </button>

      <div className="flex flex-col items-center gap-1">
        <p className="font-sans text-[0.92rem] font-semibold leading-tight" style={{ color: "#001F65" }}>
          {member.name}
        </p>
        <p className="marketing-note" style={{ color: "#4B5563" }}>
          {member.title}
        </p>
        {member.linkedin && <LinkedInBadge href={member.linkedin} name={member.name} variant="icon" />}
      </div>
    </div>
  );
}

/* ── Main section ───────────────────────────────────────────────────────── */

export function TeamSection() {
  const [selected, setSelected] = React.useState<TeamMember | null>(null);
  const closeModal = React.useCallback(() => setSelected(null), []);

  return (
    <>
      {selected && <BioModal member={selected} onClose={closeModal} />}

      {/* Managing Partners + Associate Partners */}
      <div className="mb-14">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-0">
          <div className="flex-1">
            <p
              className="mb-8 font-sans text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(0,31,101,0.45)" }}
            >
              Managing Partners
            </p>
            <div className="flex flex-wrap gap-10">
              {MANAGING_PARTNERS.map((m) => (
                <PersonCard key={m.name} member={m} photoSize={180} onSelect={setSelected} />
              ))}
            </div>
          </div>

          <div
            className="mx-8 hidden w-px self-stretch lg:block"
            style={{ backgroundColor: "rgba(0,31,101,0.10)" }}
          />

          <div className="flex-1">
            <p
              className="mb-8 font-sans text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(0,31,101,0.45)" }}
            >
              Associate Partners
            </p>
            <div className="flex flex-wrap gap-10">
              {ASSOCIATE_PARTNERS.map((m) => (
                <PersonCard key={m.name} member={m} photoSize={156} onSelect={setSelected} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Directors & Practice Leads */}
      <div className="border-t pt-10" style={{ borderColor: "rgba(0,31,101,0.10)" }}>
        <p
          className="mb-10 font-sans text-xs font-semibold uppercase tracking-widest"
          style={{ color: "rgba(0,31,101,0.45)" }}
        >
          Directors &amp; Practice Leads
        </p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {DIRECTORS.map((m) => (
            <PersonCard key={m.name} member={m} photoSize={140} onSelect={setSelected} />
          ))}
        </div>
      </div>
    </>
  );
}
