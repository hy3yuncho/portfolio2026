"use client";

import { useEffect, useState } from "react";

type SubItem = { label: string; id: string };
type NavSection = { label: string; items: SubItem[] };

type SideNavProps = {
  sections?: NavSection[];
  homeHref?: string;
  className?: string;
};

const defaultSections: NavSection[] = [
  {
    label: "Discover",
    items: [
      { label: "OVERVIEW", id: "overview" },
      { label: "CONTEXT", id: "context" },
      { label: "THE PROBLEM", id: "the-problem" },
    ],
  },
  {
    label: "Define",
    items: [
      { label: "INSIGHTS", id: "insights" },
      { label: "SOLUTION", id: "solution" },
    ],
  },
  {
    label: "Develop",
    items: [{ label: "DESIGN DECISIONS", id: "design-decisions" }],
  },
  {
    label: "Deliver",
    items: [
      { label: "PROTOTYPE", id: "prototype" },
      { label: "MORE", id: "more" },
    ],
  },
];

const FONT = "font-['Montserrat',sans-serif] font-light text-[12px]";
const BASE = `inline-flex items-center gap-[6px] ${FONT} text-[#141412] px-3 h-[24px] rounded-[2px] transition-colors whitespace-nowrap`;
const FILLED = `${BASE} bg-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[rgba(0,136,255,0.25)]`;
const GHOST = `${BASE} bg-transparent hover:bg-[rgba(0,136,255,0.25)]`;
const ACTIVE = `${BASE} bg-[rgba(0,136,255,0.15)] text-[#0050cc]`;

export default function SideNav({
  sections = defaultSections,
  homeHref = "/",
  className,
}: SideNavProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const allIds = sections.flatMap((s) => s.items.map((i) => i.id));
    const observers: IntersectionObserver[] = [];

    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return (
    <aside
      className={`bg-[#f7fafc] border-r border-[#e5e5e5] flex flex-col justify-between w-[165px] min-h-screen py-[60px] px-3 ${className ?? ""}`}
      style={{ position: "sticky", top: 41, alignSelf: "flex-start", height: "calc(100vh - 41px)" }}
    >
      <nav className="flex flex-col gap-6 items-start w-full">
        {/* Home */}
        <a href={homeHref} className={FILLED}>
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          HOME
        </a>

        {sections.map((section) => {
          const isPhaseActive = section.items.some((i) => i.id === activeId);
          return (
            <div key={section.label} className="flex flex-col gap-2 w-full">
              {/* Phase header */}
              <span className={`${isPhaseActive ? ACTIVE : FILLED} cursor-default`}>
                {section.label}
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>

              {/* Sub-items */}
              {section.items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={item.id === activeId ? ACTIVE : GHOST}
                >
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4v6a2 2 0 0 0 2 2h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item.label}
                </a>
              ))}
            </div>
          );
        })}
      </nav>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={FILLED}
      >
        <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
          <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to Top
      </button>
    </aside>
  );
}
