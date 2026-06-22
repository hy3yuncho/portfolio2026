"use client";

/**
 * Variant C: Cinematic Hero
 *
 * - First viewport: full-screen cover with project title + tagline overlaid
 *   in large type at the bottom-left. Sage-green tinted background.
 * - Scroll down → horizontal meta strip spans full width.
 * - Then: SideNav (from existing component) + case content column.
 * - The hero gives each project a strong unique visual identity.
 */

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SideNav from "@/components/SideNav";
import NurturaContent from "@/app/variants/case-study/NurturaContent";

const NAV_SECTIONS = [
  {
    label: "Discover",
    items: [
      { label: "THE BRIEF", id: "the-brief" },
      { label: "THE PROBLEM", id: "the-problem" },
    ],
  },
  {
    label: "Define",
    items: [{ label: "KEY INSIGHTS", id: "key-insights" }],
  },
  {
    label: "Develop",
    items: [
      { label: "EXPLORATION", id: "concept-exploration" },
      { label: "SOLUTION", id: "solution" },
    ],
  },
  {
    label: "Deliver",
    items: [
      { label: "USER TESTING", id: "user-testing" },
      { label: "REFLECTIONS", id: "reflections" },
    ],
  },
];

const META = [
  { label: "Timeline", value: "Spring 2025 · 8 weeks" },
  { label: "Role", value: "Solo UX/Product Designer" },
  { label: "Platform", value: "iOS mobile app" },
  { label: "Tools", value: "Figma, React Native (Expo)" },
];

function ScrollHint() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span
        className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/60"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        Scroll
      </span>
      <div className="w-px h-8 bg-white/30" />
    </div>
  );
}

export default function CinematicVariant() {
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setHeroVisible(window.scrollY < 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#fefefc]">

      {/* ── Cinematic hero ──────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden bg-[#D4E8C2]"
        style={{ height: "100vh", marginTop: 41 }}
      >
        {/* Cover image */}
        <Image
          src="/nurtura/nurtura case 1.png"
          alt="Nurtura app cover"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
          style={{ opacity: 0.65 }}
        />

        {/* Gradient scrim: heavy at bottom, lighter at top */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 40%, rgba(20,20,18,0.7) 75%, rgba(20,20,18,0.88) 100%)",
          }}
        />

        {/* Title block: bottom-left */}
        <div className="absolute bottom-0 left-0 right-0 px-12 pb-20 md:pb-24">
          <p
            className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/60 mb-3"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Personal project · Spring 2025 · Mobile
          </p>
          <h1
            className="text-white leading-tight mb-4"
            style={{
              fontFamily: "var(--font-ibm-plex-serif)",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "clamp(44px, 6vw, 80px)",
              maxWidth: 700,
            }}
          >
            Nurtura
          </h1>
          <p
            className="text-white/75 leading-[1.5] max-w-[560px]"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(15px, 1.5vw, 18px)",
            }}
          >
            Designing emotional safety into an IVF community.
          </p>
        </div>

        <ScrollHint />
      </div>

      {/* ── Meta strip ──────────────────────────────────────────────────── */}
      <div className="bg-[#F7FAFC] border-b border-[#E5E5E5]">
        <div className="flex flex-wrap items-start gap-x-10 gap-y-4 px-8 md:px-12 py-5">
          {META.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span
                className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#C5C5C5]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {label}
              </span>
              <span
                className="text-[13px] text-[#57423f]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {value}
              </span>
            </div>
          ))}
          <div className="ml-auto flex items-center">
            <Link
              href="/variants"
              className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#C5C5C5] hover:text-[#969696] transition-colors"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              ← All variants
            </Link>
          </div>
        </div>
      </div>

      {/* ── SideNav + case content ─────────────────────────────────────── */}
      <div className="flex items-start">
        <SideNav sections={NAV_SECTIONS} />
        <div className="flex-1 px-5 py-12 md:px-[72px] md:py-16">
          <NurturaContent />
        </div>
      </div>

      {/* Variant label */}
      <div className="border-t border-[#E5E5E5] py-4 px-12">
        <span
          className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#C5C5C5]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Variant C: Cinematic Hero
        </span>
      </div>
    </main>
  );
}
