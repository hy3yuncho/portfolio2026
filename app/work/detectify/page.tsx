"use client";

import FadeIn from "@/components/FadeIn";
import SideNav from "@/components/SideNav";
import SectionHeader from "@/components/case/SectionHeader";
import InsightCard from "@/components/case/InsightCard";
import TwoColumnSection from "@/components/case/TwoColumnSection";
import DecisionBlock from "@/components/case/DecisionBlock";
import CaseCTA from "@/components/CaseCTA";
import { ScanSearch, LayoutList, ShieldCheck } from "lucide-react";

// ─── Shared styles ────────────────────────────────────────────────────────────

const FONT_SANS = "var(--font-dm-sans)";
const FONT_DISPLAY = "var(--font-montserrat)";
const FONT_SERIF = "var(--font-ibm-plex-serif)";
const CHECKERBOARD = "repeating-conic-gradient(#e0e0e0 0% 25%, #f5f5f5 0% 50%) 0 0 / 20px 20px";

// ─── Sub-components ───────────────────────────────────────────────────────────

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <span style={{ fontFamily: FONT_DISPLAY, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#969696" }}>
        {label}
      </span>
      <span style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 300, color: "#57423F" }}>
        {value}
      </span>
    </div>
  );
}

function NumberBadge({ n }: { n: number }) {
  return (
    <div style={{
      width: 28, height: 28, borderRadius: "50%",
      background: "#E5E5E5", display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: FONT_DISPLAY, fontSize: 13, fontWeight: 600, color: "#141412", flexShrink: 0,
    }}>
      {n}
    </div>
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

// ─── Page ────────────────────────────────────────────────────────────────────

export default function DetectifyPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div style={{ display: "flex", alignItems: "flex-start" }}>

        {/* Left: sticky project meta */}
        <div style={{
          position: "sticky", top: 41, width: 340, flexShrink: 0,
          alignSelf: "flex-start", padding: "40px 32px", display: "flex",
          flexDirection: "column", gap: 24,
        }}>
          <div>
            <h1 style={{ fontFamily: FONT_SERIF, fontSize: 24, fontWeight: 500, fontStyle: "italic", margin: "0 0 6px" }}>
              Detectify
            </h1>
            <p style={{ fontFamily: FONT_SANS, fontSize: 16, fontWeight: 400, color: "#57423F", margin: "0 0 4px" }}>
              A design system for a B2B security product where accessibility is the standard.
            </p>
            <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 300, color: "#666666", lineHeight: 1.7, margin: 0 }}>
              When tables are the product, bad table UX is a product problem.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 20px" }}>
            <MetaItem label="Timeline" value="Spring 2026 (6 months)" />
            <MetaItem label="Role" value="Product Design Intern" />
            <MetaItem label="Platform" value="B2B web app" />
            <MetaItem label="Tools" value="Figma, Figma Make" />
          </div>
          <div>
            <span style={{ fontFamily: FONT_DISPLAY, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#969696" }}>
              Team
            </span>
            <div style={{ marginTop: 4, display: "flex", flexDirection: "column", gap: 2 }}>
              {["1 Product Design Lead", "2 Front-end Developers"].map((m) => (
                <span key={m} style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 300, color: "#57423F" }}>{m}</span>
              ))}
            </div>
          </div>

        </div>

        {/* Right: cover images */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ height: "100vh", background: CHECKERBOARD }} />
          <div style={{ height: "60vh", background: CHECKERBOARD }} />
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #E8E8E8", margin: 0 }} />

      {/* ── SIDE NAV + CASE CONTENT ───────────────────────────────────────── */}
      <div style={{ display: "flex", alignItems: "flex-start", paddingTop: 80 }}>
        <SideNav sections={NAV_SECTIONS} />

        <div style={{ flex: 1, padding: "64px 72px", display: "flex", flexDirection: "column", gap: 96 }}>

          {/* ── OVERVIEW ── */}
          <FadeIn><div id="overview" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionHeader
              label="OVERVIEW"
              labelColor="#1176C5"
              title="One design system. Six months. Start from the ground up."
            />
            <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0, maxWidth: 1060 }}>
              As a product design intern at Detectify, I worked on a comprehensive design system: establishing visual foundations, consolidating components, and closing the gap between design and engineering handoff. The table redesign was one focused workstream within that larger project, but it wasn't a component task. It was a product problem hiding inside a component.
            </p>
          </div></FadeIn>

          {/* ── THE PROBLEM ── */}
          <FadeIn><div id="the-problem" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionHeader
              label="THE PROBLEM"
              labelColor="#E05A3A"
              title="Security professionals were losing time inside a tool built to save it."
              body="Detectify's users — security engineers and analysts — need to scan through hundreds of vulnerabilities, decide what's critical, and act fast. The table was supposed to make that possible. It wasn't."
            />
            <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0, maxWidth: 1060 }}>
              To understand where things were breaking down, I ran 5 interviews with people across product, sales, and customer success: the teams closest to how real users worked with the data. Three friction points kept coming up.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
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
                description="Column headers disappeared on scroll, so users lost track of what each column meant. The horizontal scrollbar sat at the very bottom of the table — not the screen — so to scroll sideways, users first had to scroll through hundreds of rows to reach it. Both were WCAG failures. In a product Detectify sells to security and compliance teams, that's not just a UX problem. It's a credibility problem."
              />
            </div>
          </div></FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 96 }}>

            {/* ── KEY INSIGHTS ── */}
            <FadeIn><div id="key-insights" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <SectionHeader
                label="KEY INSIGHTS"
                labelColor="#1176C5"
                title="Three things that had to change."
                body="After mapping every table instance across the product and running a full WCAG audit, three principles defined the scope of the redesign."
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <InsightCard
                  icon={<NumberBadge n={1} />}
                  title="Scannability first"
                  description="The most important thing a security professional can do is find what matters quickly. Every density decision had to serve that, not the other way around."
                />
                <InsightCard
                  icon={<NumberBadge n={2} />}
                  title="Customisation as a feature, not a setting"
                  description="Users wanted to see their data their way. Not a layout option buried in preferences — but drag-and-drop column reordering, right there in the table."
                />
                <InsightCard
                  icon={<NumberBadge n={3} />}
                  title="Accessibility as a baseline, not a pass/fail audit"
                  description="WCAG AA compliance wasn't a checkbox. It meant touching colour tokens used across the entire product, not just the table component. That had to be scoped and agreed with engineering from the start."
                />
              </div>
            </div></FadeIn>

            {/* ── PROCESS ── */}
            <FadeIn><div id="process" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <SectionHeader
                label="PROCESS"
                labelColor="#1176C5"
                title="Audit · Define · Design · Iterate"
              />
              <TwoColumnSection
                leftWidth="1fr"
                rightWidth="1fr"
                left={
                  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <span style={{ fontFamily: FONT_DISPLAY, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#1176C5" }}>Audit</span>
                      <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0 }}>
                        Mapped every table instance across the product. Ran a WCAG audit to log contrast failures, missing focus states, and keyboard navigation gaps. This gave the redesign a concrete list of failures to address — not just a general brief to make it better.
                      </p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <span style={{ fontFamily: FONT_DISPLAY, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#1176C5" }}>Define</span>
                      <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0 }}>
                        Set design principles before touching Figma: scannability first, progressive disclosure for dense data, accessibility as a non-negotiable baseline. Aligned early with engineering on what could and couldn't ship, so the redesign was constrained by reality, not just ambition.
                      </p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <span style={{ fontFamily: FONT_DISPLAY, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#1176C5" }}>Design</span>
                      <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0 }}>
                        Built a component system covering every state: default, hover, selected, loading, empty, error. Included interaction design for drag-and-drop column reordering. Used Figma Make to build an interactive prototype showing live state changes, not just static screens.
                      </p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <span style={{ fontFamily: FONT_DISPLAY, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#1176C5" }}>Iteration</span>
                      <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0 }}>
                        Ran a design critique with engineers, product, and sales. Presented the interview insights, redesign scope, and first prototype together — so the decisions were legible, not just the visuals.
                      </p>
                    </div>
                  </div>
                }
                right={
                  <div style={{
                    background: "#F1F2F3", borderRadius: 10,
                    border: "1px solid #E5E5E5", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    minHeight: 340, color: "#969696", fontSize: 12,
                    fontFamily: FONT_SANS, letterSpacing: "0.04em",
                    textAlign: "center", padding: "0 32px",
                  }}>
                    IMAGE: Process documentation
                  </div>
                }
              />
            </div></FadeIn>

            {/* ── SOLUTION ── */}
            <FadeIn><div id="solution" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <SectionHeader
                label="SOLUTION"
                labelColor="#1176C5"
                title="Three problems. Three decisions."
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <DecisionBlock
                  number={1}
                  title="Information density vs. scannability"
                  situation="Security data is dense by nature. The answer wasn't to simplify the data but to contain it properly."
                  options={[
                    "Show all columns by default",
                    "Progressive disclosure with full column customisation",
                    "Opinionated default with user-controlled layout",
                  ]}
                  chosen="Sticky header so column labels never disappear. Internal scroll with a viewport-fixed horizontal scrollbar, so users don't have to scroll through 500 rows to reach it. Drag-and-drop columns so users put what they care about first."
                  tradeoff="Column reordering adds interaction complexity. Scoped it to power users via an explicit toggle rather than making it the default state."
                />
                <DecisionBlock
                  number={2}
                  title="WCAG compliance without breaking the design system"
                  situation="Full WCAG AA compliance required updating colour tokens used across the entire product, not just the table component."
                  options={[
                    "Fix only the table component",
                    "Update tokens at the source to fix the whole design system",
                  ]}
                  chosen="Worked with the frontend team to update tokens at the source. New colours were designed to be accessible and coherent with the existing visual language."
                  tradeoff="Slower to implement. But patching only the table would have created two conflicting colour standards in the codebase."
                />
                <DecisionBlock
                  number={3}
                  title="Reducing handoff friction"
                  situation="Static annotated screens were causing back-and-forth between design and engineering on component behaviour and states."
                  options={[
                    "Annotate screens more thoroughly",
                    "Build an interactive prototype in Figma Make showing live state changes",
                  ]}
                  chosen="Built the prototype in Figma Make covering every state and the drag-and-drop interaction in real time. Engineers could see exactly how the component behaved before a single line was written."
                  tradeoff="More upfront design time. But annotation back-and-forth dropped significantly — the prototype became the handoff artefact."
                />
              </div>
            </div></FadeIn>

            {/* ── IMPACT ── */}
            <FadeIn><div id="impact" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <SectionHeader
                label="IMPACT"
                labelColor="#1176C5"
                title="A new standard. Across the whole product."
              />
              <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0, maxWidth: 1060 }}>
                The redesigned table became the design system standard for all data views in the product. WCAG AA compliance was achieved at the component level. Engineering handoff time reduced as interactive prototypes replaced static annotated screens as the handoff artefact.
              </p>
              <p style={{ fontFamily: FONT_SANS, fontSize: 13, fontWeight: 300, color: "#969696", lineHeight: 1.6, margin: 0 }}>
                Specific metrics available on request.
              </p>
            </div></FadeIn>

            {/* ── REFLECTION ── */}
            <FadeIn><div id="reflection" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <SectionHeader
                label="REFLECTION"
                labelColor="#1176C5"
                title="What I'd do differently."
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
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

              {/* CTA */}
              <div style={{ marginTop: 16 }}>
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
