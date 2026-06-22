"use client";

/**
 * Variant B: Document
 *
 * - Compact hero: project name + tagline left-aligned, cover image right (no full-height stack)
 * - Horizontal meta strip (role / timeline / platform / tools) spans full width below hero
 * - Two-column layout: 220px fixed left TOC + scrollable right content column
 * - TOC has all nav items always visible, active item highlighted with scroll-spy
 * - Section containers have subtle top borders and tight section-label typography
 * - Professional, structured, report-like
 */

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NurturaContent from "@/app/variants/case-study/NurturaContent";

const NAV_ITEMS = [
  { id: "the-brief", label: "THE BRIEF", phase: "Discover" },
  { id: "the-problem", label: "THE PROBLEM", phase: "Discover" },
  { id: "key-insights", label: "KEY INSIGHTS", phase: "Define" },
  { id: "concept-exploration", label: "EXPLORATION", phase: "Develop" },
  { id: "solution", label: "SOLUTION", phase: "Develop" },
  { id: "user-testing", label: "USER TESTING", phase: "Deliver" },
  { id: "reflections", label: "REFLECTIONS", phase: "Deliver" },
];

const META = [
  { label: "Timeline", value: "Spring 2025 · 8 weeks" },
  { label: "Role", value: "Solo UX/Product Designer" },
  { label: "Platform", value: "iOS mobile app" },
  { label: "Tools", value: "Figma, React Native (Expo)" },
];

function TOC({ activeId }: { activeId: string }) {
  // Group by phase
  const phases = Array.from(new Set(NAV_ITEMS.map((i) => i.phase)));

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="flex-shrink-0 bg-[#F7FAFC] border-r border-[#E5E5E5]"
      style={{
        width: 200,
        position: "sticky",
        top: 41,
        height: "calc(100vh - 41px)",
        overflowY: "auto",
        padding: "32px 0",
      }}
    >
      {phases.map((phase) => (
        <div key={phase} className="mb-5">
          <p
            className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#C5C5C5] px-5 mb-2"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {phase}
          </p>
          {NAV_ITEMS.filter((i) => i.phase === phase).map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={[
                  "w-full text-left px-5 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] transition-colors duration-100",
                  isActive
                    ? "text-[#549D5B] bg-[#F0F7F1]"
                    : "text-[#969696] hover:text-[#141412]",
                ].join(" ")}
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#549D5B] mr-2 mb-[1px]" />
                )}
                {item.label}
              </button>
            );
          })}
        </div>
      ))}

      {/* Back home */}
      <div className="absolute bottom-4 left-0 right-0 px-5">
        <Link
          href="/variants"
          className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#C5C5C5] hover:text-[#969696] transition-colors"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          ← Variants
        </Link>
      </div>
    </div>
  );
}

export default function DocumentVariant() {
  const [activeId, setActiveId] = useState("the-brief");

  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-10% 0px -70% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <main className="min-h-screen bg-[#fefefc] pt-[41px]">

      {/* ── Hero: compact side-by-side ─────────────────────────────────── */}
      <div className="flex items-stretch border-b border-[#E5E5E5]">
        {/* Left: title + tagline */}
        <div
          className="flex flex-col justify-center gap-5 px-10 py-10"
          style={{ width: 420, flexShrink: 0 }}
        >
          <div>
            <p
              className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#969696] mb-3"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Personal project · Spring 2025
            </p>
            <h1
              className="text-[#141412] leading-tight mb-3"
              style={{
                fontFamily: "var(--font-ibm-plex-serif)",
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: 40,
              }}
            >
              Nurtura
            </h1>
            <p
              className="text-[14px] text-[#666666] leading-[1.65]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              52% of IVF patients avoid online forums because the content is too
              triggering. A community platform with emotional guardrails built in
              from onboarding.
            </p>
          </div>

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-4 border-t border-[#E5E5E5]">
            {META.map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span
                  className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#C5C5C5]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {label}
                </span>
                <span
                  className="text-[12px] text-[#57423f]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: thumbnail of first case image */}
        <div className="flex-1 relative overflow-hidden bg-[#E8EFD8]" style={{ minHeight: 300 }}>
          <Image
            src="/nurtura/nurtura case 1.png"
            alt="Nurtura app cover"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* ── Two-column: TOC + case content ─────────────────────────────── */}
      <div className="flex items-start">
        <TOC activeId={activeId} />

        <div
          className="flex-1 px-12 py-12"
          style={{ minWidth: 0 }}
        >
          <NurturaContent />
        </div>
      </div>

      {/* Variant label */}
      <div className="border-t border-[#E5E5E5] py-4 px-12">
        <span
          className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#C5C5C5]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Variant B: Document
        </span>
      </div>
    </main>
  );
}
