"use client";

/**
 * Variant A: Magazine Scroll
 *
 * - No sticky left meta panel
 * - Cover images stack full-width at the top
 * - Project title + meta appear in a centred block below the images
 * - A thin progress bar pins to the top of the viewport (replaces SideNav)
 * - Content flows as a single centred editorial column
 * - Section numbers (01–07) appear as faint labels above each section header
 * - No SideNav
 */

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NurturaContent from "@/app/variants/case-study/NurturaContent";

const COVER_IMAGES = [
  { src: "/nurtura/nurtura case 1.png", alt: "Nurtura app cover" },
  { src: "/nurtura/case2.png", alt: "Nurtura onboarding flow" },
  { src: "/nurtura/case3.png", alt: "Nurtura community feed" },
  { src: "/nurtura/case4.png", alt: "Nurtura peer connect" },
  { src: "/nurtura/case5.png", alt: "Nurtura emotional check-in and IVF guide" },
];

const META = [
  { label: "Timeline", value: "Spring 2025 · 8 weeks" },
  { label: "Role", value: "Solo UX/Product Designer" },
  { label: "Platform", value: "iOS mobile app" },
  { label: "Tools", value: "Figma, React Native (Expo)" },
];

function ProgressBar() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) setPct((scrollTop / docHeight) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-[41px] left-0 right-0 h-[2px] z-40 bg-[#E5E5E5]"
      role="progressbar"
      aria-valuenow={Math.round(pct)}
    >
      <div
        className="h-full bg-[#549D5B] transition-all duration-100 ease-linear"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export default function MagazineVariant() {
  return (
    <main className="min-h-screen bg-[#fefefc] pt-[41px]">
      <ProgressBar />

      {/* ── Full-width cover images ─────────────────────────────────────── */}
      <div className="flex flex-col gap-[2px]">
        {COVER_IMAGES.map(({ src, alt }) => (
          <Image
            key={src}
            src={src}
            alt={alt}
            width={1600}
            height={1200}
            quality={90}
            sizes="100vw"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        ))}
      </div>

      {/* ── Title block ────────────────────────────────────────────────── */}
      <div className="border-b border-[#E5E5E5] py-12 md:py-16">
        <div className="mx-auto max-w-[760px] px-6">
          {/* Type + date */}
          <p
            className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#969696] mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Personal project · Spring 2025 · Mobile
          </p>

          {/* Project name */}
          <h1
            className="text-[#141412] leading-tight mb-4"
            style={{
              fontFamily: "var(--font-ibm-plex-serif)",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "clamp(36px, 5vw, 64px)",
            }}
          >
            Nurtura
          </h1>

          {/* Tagline */}
          <p
            className="text-[18px] text-[#57423f] leading-[1.6] max-w-[600px] mb-8"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            52% of IVF patients avoid online forums because the content is too triggering.
            Instead of adding more features, I designed a community platform with emotional
            guardrails built in from onboarding.
          </p>

          {/* Meta strip */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {META.map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span
                  className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#969696]"
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
          </div>
        </div>
      </div>

      {/* ── Case content ────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-[760px] px-6 py-16">
        <NurturaContent variant="numbered" />
      </div>

      {/* ── Footer nav ──────────────────────────────────────────────────── */}
      <div className="border-t border-[#E5E5E5] py-8 px-6">
        <div className="mx-auto max-w-[760px] flex justify-between items-center">
          <Link
            href="/variants"
            className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#969696] hover:text-[#141412] transition-colors"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            ← All variants
          </Link>
          <span
            className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#969696]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Variant A: Magazine Scroll
          </span>
        </div>
      </div>
    </main>
  );
}
