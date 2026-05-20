"use client";

import * as React from "react";
import Image from "next/image";
import { X, Linkedin, ExternalLink } from "lucide-react";
import {
  MANAGING_PARTNERS,
  ASSOCIATE_PARTNERS,
  DIRECTORS,
  type TeamMember,
} from "@/lib/team";
import { cn } from "@/lib/utils";

/* ── Initials avatar ────────────────────────────────────────────────────── */

function InitialsAvatar({
  name,
  size,
  className,
}: {
  name: string;
  size: number;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      className={cn("flex items-center justify-center shrink-0", className)}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "#001F65",
        border: "2px solid rgba(0,31,101,0.15)",
      }}
    >
      <span
        className="font-sans font-bold"
        style={{
          fontSize: size * 0.32,
          color: "white",
          letterSpacing: "0.02em",
          userSelect: "none",
        }}
      >
        {initials}
      </span>
    </div>
  );
}

/* ── Photo or initials ──────────────────────────────────────────────────── */

function PersonPhoto({
  member,
  size,
}: {
  member: TeamMember;
  size: number;
}) {
  if (!member.photo) {
    return <InitialsAvatar name={member.name} size={size} />;
  }
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        flexShrink: 0,
        position: "relative",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={member.photo}
        alt={member.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top center",
          display: "block",
        }}
      />
    </div>
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(10,14,26,0.80)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl overflow-hidden"
        style={{ backgroundColor: "#FFFFFF", boxShadow: "0 24px 80px rgba(0,0,0,0.3)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navy header band */}
        <div
          className="px-8 pt-8 pb-6 flex flex-col items-center text-center"
          style={{ backgroundColor: "#001F65" }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid rgba(255,255,255,0.25)",
              flexShrink: 0,
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
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <span className="font-sans font-bold text-white text-2xl">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </span>
              </div>
            )}
          </div>
          <h3 className="font-serif text-white mt-4 text-xl leading-tight">
            {member.name}
          </h3>
          <p
            className="font-sans text-sm mt-1"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            {member.title}
          </p>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 px-4 py-1.5 rounded-full font-sans text-xs font-semibold transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.20)",
              }}
            >
              <Linkedin className="h-3 w-3" />
              LinkedIn
              <ExternalLink className="h-2.5 w-2.5 opacity-60" />
            </a>
          )}
        </div>

        {/* Bio body */}
        <div className="px-8 py-6">
          <p
            className="font-sans text-[0.92rem] leading-[1.75]"
            style={{ color: "#2D3748" }}
          >
            {member.bio}
          </p>
          {member.expertise && member.expertise.length > 0 && (
            <div className="mt-5">
              <p
                className="font-sans text-[10px] font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#001F65" }}
              >
                Areas of expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full font-sans text-xs font-semibold"
                    style={{
                      backgroundColor: "rgba(0,31,101,0.08)",
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
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X className="h-4 w-4 text-white" />
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
    <div className="flex flex-col items-center text-center gap-3">
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

      {/* Name + title */}
      <div>
        <p
          className="font-sans font-semibold leading-tight"
          style={{ fontSize: "0.875rem", color: "#001F65" }}
        >
          {member.name}
        </p>
        <p
          className="font-sans mt-0.5"
          style={{ fontSize: "0.73rem", color: "#6B7280", lineHeight: 1.4 }}
        >
          {member.title}
        </p>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-1.5 font-sans text-[11px] font-semibold transition-opacity hover:opacity-70"
            style={{ color: "#0077B5" }}
            onClick={(e) => e.stopPropagation()}
            aria-label={`${member.name} on LinkedIn`}
          >
            <Linkedin className="h-3 w-3" />
            LinkedIn
          </a>
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

      {/* Managing Partners + Associate Partners in one horizontal band */}
      <div className="mb-14">
        <div
          className="flex flex-col lg:flex-row gap-12 lg:gap-0"
        >
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
                <PersonCard
                  key={m.name}
                  member={m}
                  photoSize={180}
                  onSelect={setSelected}
                />
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
                <PersonCard
                  key={m.name}
                  member={m}
                  photoSize={156}
                  onSelect={setSelected}
                />
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
            <PersonCard
              key={m.name}
              member={m}
              photoSize={110}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>
    </>
  );
}
