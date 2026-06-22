"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback } from "react";

const PROJECTS = [
  {
    index: 0,
    num: "01",
    name: "Nurtura",
    tagline: "Your self-portrait, powered by peers.",
    description:
      "Designing emotional safety into an IVF community — where anonymity lets people be honest and structure makes it useful.",
    type: "Personal project",
    platform: "Mobile",
    year: "Spring 2025",
    href: "/work/nurtura",
    image: "/nurtura/nurtura.png",
    imageBg: "#E8EFD8",
    accentColor: "#B4EA93",
    comingSoon: false,
  },
  {
    index: 1,
    num: "02",
    name: "MeView",
    tagline: "Feedback exchange made honest by anonymity, and useful by structure.",
    description:
      "A mobile peer feedback app for Gen Z — structured by project and skill, anonymous by default, and designed around the person who has to respond.",
    type: "Personal project",
    platform: "Mobile",
    year: "Spring 2024",
    href: "/work/meview",
    image: "/meview/meview.png",
    imageBg: "#D8E9F5",
    accentColor: "#81E2FF",
    comingSoon: false,
  },
  {
    index: 2,
    num: "03",
    name: "Detectify",
    tagline: "A design system for a B2B security product where accessibility is the standard.",
    description:
      "Six months inside a cybersecurity SaaS. The case study focuses on the table redesign — the most visible, highest-stakes workstream, where WCAG failures were baked into the tokens.",
    type: "Work",
    platform: "Web",
    year: "Spring 2026",
    href: "/work/detectify",
    image: null,
    imageBg: "#EDEDEB",
    accentColor: "#FADB68",
    comingSoon: true,
  },
  {
    index: 3,
    num: "04",
    name: "Appstract",
    tagline: "When the product already exists but no one notices it, awareness becomes a design problem.",
    description:
      "A social shopping widget embedded in partner e-commerce sites. The widget was live. Engagement was near-zero. The problem wasn't the feature — it was visibility.",
    type: "Work",
    platform: "Web",
    year: "Spring 2026",
    href: "/work/appstract",
    image: null,
    imageBg: "#F5E8DF",
    accentColor: "#FD9555",
    comingSoon: true,
  },
];

export default function FullscreenCarouselVariant() {
  const [active, setActive] = useState(0);

  const prev = useCallback(
    () => setActive((i) => (i - 1 + PROJECTS.length) % PROJECTS.length),
    []
  );
  const next = useCallback(
    () => setActive((i) => (i + 1) % PROJECTS.length),
    []
  );

  const project = PROJECTS[active];

  return (
    <main
      className="flex flex-col bg-[#fefefc]"
      style={{ height: "calc(100vh - 41px)", marginTop: 41, overflow: "hidden" }}
    >
      <div className="flex flex-1 overflow-hidden">

        {/* ── Left panel ───────────────────────────────────── */}
        <div
          className="flex flex-col justify-between px-16 py-12"
          style={{ width: "42%", flexShrink: 0 }}
        >
          {/* Top: project number + label */}
          <div className="flex items-center gap-3">
            <span
              className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#969696]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {project.num} / {String(PROJECTS.length).padStart(2, "0")}
            </span>
            <span className="w-px h-3 bg-[#E5E5E5]" />
            <span
              className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#57423f]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {project.type} · {project.platform}
            </span>
            {project.comingSoon && (
              <span
                className="text-[9px] font-medium uppercase tracking-[0.1em] bg-[#F1F2F3] text-[#969696] px-2 py-0.5 rounded-sm"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Coming soon
              </span>
            )}
          </div>

          {/* Middle: title + description */}
          <div className="flex flex-col gap-5">
            <h2
              className="leading-tight text-[#141412]"
              style={{
                fontFamily: "var(--font-ibm-plex-serif)",
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: "clamp(32px, 3.5vw, 52px)",
              }}
            >
              {project.name}
            </h2>
            <p
              className="text-[14px] text-[#57423f] leading-[1.6] max-w-[380px]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {project.description}
            </p>

            {!project.comingSoon && (
              <Link
                href={project.href}
                className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.08em] text-[#141412] hover:opacity-60 transition-opacity w-fit"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                View case study
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            )}
          </div>

          {/* Bottom: navigation */}
          <div className="flex items-center gap-6">
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className="transition-all duration-200 rounded-full"
                  style={{
                    width: i === active ? 20 : 6,
                    height: 6,
                    backgroundColor: i === active ? project.accentColor : "#E5E5E5",
                  }}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={prev}
                aria-label="Previous project"
                className="w-8 h-8 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:border-[#141412] hover:bg-[#141412] hover:text-white transition-all duration-150 text-[#141412]"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M8 2L4 6L8 10"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next project"
                className="w-8 h-8 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:border-[#141412] hover:bg-[#141412] hover:text-white transition-all duration-150 text-[#141412]"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M4 2L8 6L4 10"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── Right panel ──────────────────────────────────── */}
        <div
          className="relative flex-1 overflow-hidden rounded-l-[12px]"
          style={{ backgroundColor: project.imageBg }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="58vw"
              className="object-cover object-top"
              priority
            />
          ) : (
            /* Placeholder for coming-soon projects */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span
                className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#969696]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Case study in progress
              </span>
            </div>
          )}

          {/* Year badge */}
          <div className="absolute top-6 right-6">
            <span
              className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#57423f] bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-sm"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {project.year}
            </span>
          </div>
        </div>
      </div>

      {/* Back link */}
      <div className="px-16 pb-4 flex-shrink-0">
        <Link
          href="/variants"
          className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#969696] hover:text-[#141412] transition-colors"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          ← All variants
        </Link>
      </div>
    </main>
  );
}
