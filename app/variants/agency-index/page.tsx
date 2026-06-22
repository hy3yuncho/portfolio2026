"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PROJECTS = [
  {
    index: "01",
    name: "Nurtura",
    descriptor: "IVF community · Mobile",
    year: "2025",
    href: "/work/nurtura",
    image: "/nurtura/nurtura.png",
    comingSoon: false,
  },
  {
    index: "02",
    name: "MeView",
    descriptor: "Peer feedback · Mobile",
    year: "2024",
    href: "/work/meview",
    image: "/meview/meview.png",
    comingSoon: false,
  },
  {
    index: "03",
    name: "Detectify",
    descriptor: "Security design system · Web",
    year: "2026",
    href: "/work/detectify",
    image: null,
    comingSoon: true,
  },
  {
    index: "04",
    name: "Appstract",
    descriptor: "Social shopping widget · Web",
    year: "2026",
    href: "/work/appstract",
    image: null,
    comingSoon: true,
  },
];

function RowContent({
  project,
  isHovered,
}: {
  project: (typeof PROJECTS)[number];
  isHovered: boolean;
}) {
  return (
    <>
      {/* Index */}
      <span
        className="w-10 flex-shrink-0 text-[12px] font-medium text-[#969696]"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {project.index}
      </span>

      {/* Project name */}
      <span
        className="flex-shrink-0 leading-none text-[#141412]"
        style={{
          fontFamily: "var(--font-ibm-plex-serif)",
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: "clamp(36px, 4vw, 56px)",
        }}
      >
        {project.name}
      </span>

      {/* Descriptor */}
      <span
        className="ml-6 flex-1 text-[14px] text-[#57423f]"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        {project.descriptor}
      </span>

      {/* Coming soon chip */}
      {project.comingSoon && (
        <span
          className="mr-4 text-[9px] font-medium uppercase tracking-[0.1em] bg-[#F1F2F3] text-[#969696] px-2 py-1 rounded-sm flex-shrink-0"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Coming soon
        </span>
      )}

      {/* Year */}
      <span
        className={[
          "text-[11px] font-medium uppercase tracking-[0.1em] flex-shrink-0 transition-colors duration-150",
          isHovered ? "text-[#141412]" : "text-[#969696]",
        ].join(" ")}
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {project.year}
      </span>

      {/* Hover thumbnail */}
      {project.image && (
        <div
          className="absolute right-0 top-0 h-full w-[120px] overflow-hidden pointer-events-none transition-all duration-200"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateX(0)" : "translateX(8px)",
          }}
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-top"
            sizes="120px"
          />
        </div>
      )}
    </>
  );
}

const rowBase =
  "flex items-center border-t border-[#E5E5E5] relative overflow-hidden transition-colors duration-150";

export default function AgencyIndexVariant() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#fefefc] pt-[41px]">
      <div className="mx-auto max-w-[1200px] px-[80px] py-16">

        {/* Section label */}
        <p
          className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#57423f] mb-10"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Selected Work
        </p>

        {/* Rows */}
        <div>
          {PROJECTS.map((project, i) => {
            const isHovered = hoveredIdx === i;
            const sharedStyle = {
              backgroundColor: isHovered && !project.comingSoon ? "#F7F4F0" : "transparent",
              paddingTop: 28,
              paddingBottom: 28,
            };

            if (project.comingSoon) {
              return (
                <div
                  key={project.index}
                  className={`${rowBase} cursor-default`}
                  style={sharedStyle}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <RowContent project={project} isHovered={isHovered} />
                </div>
              );
            }

            return (
              <Link
                key={project.index}
                href={project.href}
                className={`${rowBase} cursor-pointer group`}
                style={sharedStyle}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <RowContent project={project} isHovered={isHovered} />
              </Link>
            );
          })}
          {/* Bottom border */}
          <div className="border-t border-[#E5E5E5]" />
        </div>

        {/* Back link */}
        <div className="mt-16">
          <Link
            href="/variants"
            className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#969696] hover:text-[#141412] transition-colors"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            ← All variants
          </Link>
        </div>
      </div>
    </main>
  );
}
