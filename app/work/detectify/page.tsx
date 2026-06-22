"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SideNav from "@/components/SideNav";
import SectionHeader from "@/components/case/SectionHeader";
import InsightCard from "@/components/case/InsightCard";
import CaseCTA from "@/components/CaseCTA";
import { ScanSearch, LayoutList, ShieldCheck } from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

const FONT_DISPLAY = "var(--font-montserrat)";
const LABEL_COLOR = "#E05A3A";
const IMAGE_SIZES = "(max-width: 768px) 100vw, 530px";

// ─── Sub-components ───────────────────────────────────────────────────────────

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-label text-ink-faint">{label}</span>
      <span className="text-body-2-light text-ink-secondary">{value}</span>
    </div>
  );
}

function NumberBadge({ n }: { n: number }) {
  return (
    <div
      className="flex items-center justify-center flex-shrink-0 rounded-full bg-border text-ink"
      style={{ width: 28, height: 28, fontFamily: FONT_DISPLAY, fontSize: 13, fontWeight: 600 }}
    >
      {n}
    </div>
  );
}

function CaseVideo({ src, label }: { src: string; label: string }) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      aria-label={label}
      style={{ width: "100%", height: "auto", display: "block", borderRadius: 10 }}
    >
      <source src={src} type="video/mp4" />
      <source src={src} type="video/quicktime" />
    </video>
  );
}

// ─── SideNav config ───────────────────────────────────────────────────────────

const NAV_SECTIONS = [
  {
    label: "Discover",
    items: [
      { label: "OVERVIEW", id: "overview" },
      { label: "THE PROBLEM", id: "the-problem" },
      { label: "KEY INSIGHTS", id: "key-insights" },
    ],
  },
  {
    label: "Define",
    items: [
      { label: "PROCESS", id: "process" },
    ],
  },
  {
    label: "Develop",
    items: [
      { label: "SOLUTION", id: "solution" },
    ],
  },
  {
    label: "Deliver",
    items: [
      { label: "IMPACT", id: "impact" },
      { label: "REFLECTION", id: "reflection" },
    ],
  },
];

const PROCESS_STEPS: {
  step: string;
  text: string;
  mediaSrc: string;
  mediaType: "video" | "image";
  mediaWidth?: number;
  mediaHeight?: number;
}[] = [
  {
    step: "AUDIT",
    text: "Mapped every table instance across the product. Ran a WCAG audit to log contrast failures, missing focus states, and keyboard navigation gaps. This gave the redesign a concrete list of failures to address, not just a general brief to make it better.",
    mediaSrc: "/detectify/table audit excel.mov",
    mediaType: "video",
  },
  {
    step: "DEFINE",
    text: "Set design principles before touching Figma: scannability first, progressive disclosure for dense data, accessibility as a non-negotiable baseline. Aligned early with engineering on what could and couldn't ship, so the redesign was constrained by reality, not just ambition.",
    mediaSrc: "/detectify/table define.png",
    mediaType: "image",
    mediaWidth: 1024,
    mediaHeight: 590,
  },
  {
    step: "DESIGN",
    text: "Built a component system covering every state: default, hover, selected, loading, empty, error. Included interaction design for drag-and-drop column reordering. Used Figma Make to build an interactive prototype showing live state changes, not just static screens.",
    mediaSrc: "/detectify/table design.png",
    mediaType: "image",
    mediaWidth: 864,
    mediaHeight: 578,
  },
  {
    step: "ITERATION",
    text: "Ran a design critique with engineers, product, and sales. Presented the interview insights, redesign scope, and first prototype together. The decisions were legible, not just the visuals.",
    mediaSrc: "/detectify/table iteration.png",
    mediaType: "image",
    mediaWidth: 1112,
    mediaHeight: 508,
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function DetectifyPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row items-start pt-[41px]">

        {/* Left: sticky project meta */}
        <div
          className="w-full md:w-[340px] md:flex-shrink-0"
          style={{ position: "sticky", top: 41, alignSelf: "flex-start", padding: "40px 32px", display: "flex", flexDirection: "column", gap: 24 }}
        >
          <div>
            <h1 className="text-h1 text-ink" style={{ margin: "0 0 8px" }}>
              Detectify
            </h1>
            <p className="text-body-1 text-ink-secondary" style={{ margin: "0 0 8px" }}>
              Sole designer on Detectify&apos;s table redesign. The component security teams use to triage hundreds of vulnerabilities a day.
            </p>
            <p className="text-body-2-light text-ink-muted leading-[1.7] m-0">
              When tables are the product, bad table UX is a product problem. I fixed it at the token level, not just the component.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-4">
            <MetaItem label="Timeline" value="Spring 2026 (6 months)" />
            <MetaItem label="Role" value="Product Design Intern" />
            <MetaItem label="Platform" value="B2B web app" />
            <MetaItem label="Tools" value="Figma, Figma Make" />
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-label text-ink-faint">Team</span>
            <div className="flex flex-col gap-1">
              {["1 Product Design Lead", "2 Front-end Developers"].map((m) => (
                <span key={m} className="text-body-2-light text-ink-secondary">{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: hero video */}
        <div className="flex-1">
          <CaseVideo src="/detectify/how table should interact.mov" label="Detectify table interaction demo" />
        </div>
      </div>

      <hr className="border-0 border-t border-border m-0" />

      {/* ── SIDE NAV + CASE CONTENT ──────────────────────────────────────── */}
      <div className="flex items-start">
          <SideNav sections={NAV_SECTIONS} />

          <div className="flex-1 px-5 py-14 md:px-28 md:py-24 flex flex-col gap-20">

            {/* ── OVERVIEW ── */}
            <FadeIn><div id="overview" className="flex flex-col gap-4">
              <SectionHeader
                label="OVERVIEW"
                labelColor={LABEL_COLOR}
                title="One design system. Six months. Start from the ground up."
              />
              <p className="text-body-2 text-ink-muted leading-[1.8] m-0">
                As a product design intern at Detectify, I worked on a comprehensive design system: establishing visual foundations, consolidating components, and closing the gap between design and engineering handoff. The table redesign was one focused workstream within that larger project, but it wasn&apos;t a component task. It was a product problem hiding inside a component.
              </p>
            </div></FadeIn>

            {/* ── THE PROBLEM ── */}
            <FadeIn><div id="the-problem" className="flex flex-col gap-4">
              <SectionHeader
                label="THE PROBLEM"
                labelColor={LABEL_COLOR}
                title="Security professionals were losing time inside a tool built to save it."
                body="Detectify's users (security engineers and analysts) need to scan through hundreds of vulnerabilities, decide what's critical, and act fast. The table was supposed to make that possible. It wasn't."
              />
              <p className="text-body-2 text-ink-muted leading-[1.8] m-0">
                To understand where things were breaking down, I ran 5 interviews with people across product, sales, and customer success: the teams closest to how real users worked with the data. Three friction points kept coming up.
              </p>
              <div className="grid grid-cols-1 md:gap-10 items-start" style={{ gridTemplateColumns: "2fr 3fr", gap: 40 }}>
                <div className="flex flex-col gap-4">
                  <InsightCard
                    icon={<ScanSearch size={18} color="#969696" />}
                    title="No visual hierarchy"
                    description="Every row looked the same. Users couldn't tell at a glance what needed their attention and had to read every single row to find out. Scanning was slow. Mistakes happened."
                  />
                  <InsightCard
                    icon={<LayoutList size={18} color="#969696" />}
                    title="Inconsistent interactions across the product"
                    description="Filters and sorting worked differently depending on which table you were in. Users had to relearn the same UI in different parts of the product. No pattern ever stuck."
                  />
                  <InsightCard
                    icon={<ShieldCheck size={18} color="#969696" />}
                    title="Accessibility failures in a product that sells to compliance teams"
                    description="Column headers disappeared on scroll, so users lost track of what each column meant. The horizontal scrollbar sat at the very bottom of the table (not the screen), so to scroll sideways, users first had to scroll through hundreds of rows to reach it. Both were WCAG failures. In a product Detectify sells to security and compliance teams, that's not just a UX problem. It's a credibility problem."
                  />
                </div>
                <Image
                  src="/detectify/table before img.png"
                  alt="Detectify table before redesign"
                  width={1194}
                  height={792}
                  quality={100}
                  sizes={IMAGE_SIZES}
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: 10 }}
                />
              </div>
            </div></FadeIn>

            <div className="flex flex-col gap-14">

              {/* ── KEY INSIGHTS ── */}
              <FadeIn><div id="key-insights" className="flex flex-col gap-4">
                <SectionHeader
                  label="KEY INSIGHTS"
                  labelColor={LABEL_COLOR}
                  title="Three things that had to change."
                  body="After mapping every table instance across the product and running a full WCAG audit, three principles defined the scope of the redesign."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
                  <div className="flex flex-col gap-4">
                    <InsightCard
                      icon={<NumberBadge n={1} />}
                      title="Scannability first"
                      description="The most important thing a security professional can do is find what matters quickly. Every density decision had to serve that, not the other way around."
                    />
                    <InsightCard
                      icon={<NumberBadge n={2} />}
                      title="Customisation as a feature, not a setting"
                      description="Users wanted to see their data their way. Not a layout option buried in preferences: drag-and-drop column reordering, right there in the table."
                    />
                    <InsightCard
                      icon={<NumberBadge n={3} />}
                      title="Accessibility as a baseline, not a pass/fail audit"
                      description="WCAG AA compliance wasn't a checkbox. It meant touching colour tokens used across the entire product, not just the table component. That had to be scoped and agreed with engineering from the start."
                    />
                  </div>
                  <Image
                    src="/detectify/table key insight.png"
                    alt="Key insights from the Detectify table audit"
                    width={782}
                    height={640}
                    quality={100}
                    sizes={IMAGE_SIZES}
                    style={{ width: "100%", height: "auto", display: "block", borderRadius: 10 }}
                  />
                </div>
              </div></FadeIn>

              {/* ── PROCESS ── */}
              <FadeIn><div id="process" className="flex flex-col gap-4">
                <SectionHeader
                  label="PROCESS"
                  labelColor={LABEL_COLOR}
                  title="Audit · Define · Design · Iterate"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  {PROCESS_STEPS.map(({ step, text, mediaSrc, mediaType, mediaWidth, mediaHeight }) => (
                    <div key={step} className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <span className="text-label" style={{ color: LABEL_COLOR }}>{step}</span>
                        <p className="text-body-2 text-ink-muted leading-[1.8] m-0">{text}</p>
                      </div>
                      {mediaType === "video" ? (
                        <CaseVideo src={mediaSrc} label={`${step} process documentation`} />
                      ) : (
                        <Image
                          src={mediaSrc}
                          alt={`${step} process documentation`}
                          width={mediaWidth ?? 800}
                          height={mediaHeight ?? 600}
                          quality={100}
                          sizes={IMAGE_SIZES}
                          style={{ width: "100%", height: "auto", display: "block", borderRadius: 10 }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div></FadeIn>

              {/* ── SOLUTION ── */}
              <FadeIn><div id="solution" className="flex flex-col gap-4">
                <SectionHeader
                  label="SOLUTION"
                  labelColor={LABEL_COLOR}
                  title="Three problems, Three decisions."
                />
                <div className="grid grid-cols-1 items-start" style={{ gridTemplateColumns: "2fr 3fr", gap: 40 }}>
                  <div className="flex flex-col gap-4">
                    <InsightCard
                      title="Scannability first"
                      description="Sticky header so column labels never disappear. Viewport-fixed horizontal scrollbar so users don't have to scroll through hundreds of rows to reach it. Drag-and-drop columns so users put what they care about first."
                    />
                    <InsightCard
                      title="WCAG compliance without breaking the design system"
                      description="Updated colour tokens at the source rather than patching only the table. New colours were designed to be accessible and coherent with the existing visual language."
                    />
                    <InsightCard
                      title="Reducing handoff friction"
                      description="Built an interactive prototype in Figma Make covering every state and the drag-and-drop interaction. Engineers could see exactly how the component behaved before a single line was written."
                    />
                  </div>
                  <CaseVideo src="/detectify/how table should interact.mov" label="Redesigned Detectify table interaction" />
                </div>
              </div></FadeIn>

              {/* ── IMPACT ── */}
              <FadeIn><div id="impact" className="flex flex-col gap-4">
                <SectionHeader
                  label="IMPACT"
                  labelColor={LABEL_COLOR}
                  title="A new standard. Across the whole product."
                />
                <p className="text-body-2 text-ink-muted leading-[1.8] m-0">
                  The redesigned table became the design system standard for all data views in the product. WCAG AA compliance was achieved at the component level. Engineering handoff time reduced as interactive prototypes replaced static annotated screens as the handoff artefact.
                </p>
                <p className="text-body-3 text-ink-faint leading-[1.6] m-0">
                  Specific metrics available on request.
                </p>
              </div></FadeIn>

              {/* ── REFLECTION ── */}
              <FadeIn><div id="reflection" className="flex flex-col gap-4">
                <SectionHeader
                  label="REFLECTION"
                  labelColor={LABEL_COLOR}
                  title="Three things I'd do differently."
                />
                <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 md:gap-10 items-start">
                  <div className="flex flex-col gap-4">
                    <InsightCard
                      icon={<NumberBadge n={1} />}
                      title="Talk to end users, not just internal proxies"
                      description="The 5 interviews I ran were with internal teams: product, sales, CSM. They knew the product well, but they weren't the people sitting in front of the table at 9am trying to triage 200 vulnerabilities. Direct user sessions would have added a layer of friction I was probably missing."
                    />
                    <InsightCard
                      icon={<NumberBadge n={2} />}
                      title="Scope the token work earlier"
                      description="The WCAG audit surfaced colour token changes late in the process. Flagging that dependency in week one would have saved significant back-and-forth with engineering."
                    />
                    <InsightCard
                      icon={<NumberBadge n={3} />}
                      title="Interactive prototypes changed how I think about handoff"
                      description="Building the prototype in Figma Make wasn't just a handoff artefact. It forced me to design every state properly before handoff, not as an afterthought. I'd bring that into every project from the start now."
                    />
                  </div>
                  <CaseCTA
                    title="Want to see the full component spec or walk through the process?"
                    body="The full component spec, WCAG audit, and process documentation are available on request."
                    ctaLabel="Get in touch"
                    ctaHref="mailto:hy3yun.cho@gmail.com"
                  />
                </div>
              </div></FadeIn>

            </div>

          </div>
        </div>
    </>
  );
}
