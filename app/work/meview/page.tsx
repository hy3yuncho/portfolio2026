"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SideNav from "@/components/SideNav";
import SectionHeader from "@/components/case/SectionHeader";
import InsightCard from "@/components/case/InsightCard";
import TwoColumnSection from "@/components/case/TwoColumnSection";
import ArrowInsightCard from "@/components/case/ArrowInsightCard";
import CaseImage from "@/components/case/CaseImage";
import CaseCTA from "@/components/CaseCTA";
import { MessageSquareDashed, LayoutTemplate, ShieldAlert, UserRoundX, Reply, HelpCircle, Bell } from "lucide-react";

// ─── Shared styles ───────────────────────────────────────────────────────────

const FONT_SANS = "var(--font-dm-sans)";
const FONT_DISPLAY = "var(--font-montserrat)";
const FONT_SERIF = "var(--font-ibm-plex-serif)";
const CHECKERBOARD = "repeating-conic-gradient(#e0e0e0 0% 25%, #f5f5f5 0% 50%) 0 0 / 20px 20px";

// ─── Sub-components ──────────────────────────────────────────────────────────

function ImagePlaceholder({ description, height = 300 }: { description: string; height?: number }) {
  return (
    <div style={{
      background: "#F1F2F3",
      borderRadius: 10,
      border: "1px solid #E5E5E5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height,
      color: "#969696",
      fontSize: 12,
      fontFamily: FONT_SANS,
      letterSpacing: "0.04em",
      textAlign: "center",
      padding: "0 32px",
    }}>
      IMAGE: {description}
    </div>
  );
}


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

function SolutionPair({
  problemText,
  solutionText,
  imageSrc,
  imageAlt,
}: {
  problemText: string;
  solutionText: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontFamily: FONT_DISPLAY, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#E05A3A" }}>
            Problem
          </span>
          <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.7, margin: 0 }}>
            {problemText}
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontFamily: FONT_DISPLAY, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#1176C5" }}>
            Solution
          </span>
          <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.7, margin: 0 }}>
            {solutionText}
          </p>
        </div>
      </div>
      <CaseImage src={imageSrc} alt={imageAlt} minHeight={580} bare />
    </div>
  );
}

// ─── SideNav config ──────────────────────────────────────────────────────────

const NAV_SECTIONS = [
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
      { label: "KEY INSIGHTS", id: "key-insights" },
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
      { label: "REFLECTION", id: "reflection" },
    ],
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function MeViewPage() {
  const landingSentinelRef = useRef<HTMLDivElement>(null);
  const [pastLanding, setPastLanding] = useState(false);

  useEffect(() => {
    const sentinel = landingSentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPastLanding(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

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
              MeView
            </h1>
            <p style={{ fontFamily: FONT_SANS, fontSize: 16, fontWeight: 400, color: "#57423F", margin: "0 0 4px" }}>
              Your self-portrait, powered by peers.
            </p>
            <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 300, color: "#666666", lineHeight: 1.7, margin: 0 }}>
              A mobile peer feedback app for Gen Z, structured by project and skill, anonymous by default, and designed around the person who has to respond.
            </p>
          </div>

          {/* Meta row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 20px" }}>
            <MetaItem label="Timeline" value="3 months" />
            <MetaItem label="Role" value="Product Designer, UI Designer" />
            <MetaItem label="Platform" value="Mobile: iOS / Android" />
            <MetaItem label="Tools" value="Figma" />
          </div>
          <div>
            <span style={{ fontFamily: FONT_DISPLAY, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#969696" }}>
              Team
            </span>
            <div style={{ marginTop: 4, display: "flex", flexDirection: "column", gap: 2 }}>
              {["Project Manager", "Graphic Designer", "Front-end Developer", "Back-end Developer"].map((m) => (
                <span key={m} style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 300, color: "#57423F" }}>{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: cover image stack */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <Image
              key={n}
              src={`/meview/case${n}.png`}
              alt={`MeView case screen ${n}`}
              width={1200}
              height={900}
              quality={100}
              sizes="(max-width: 768px) 100vw, 1060px"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          ))}
        </div>
      </div>

      {/* Sentinel — triggers SideNav + content to appear */}
      <div ref={landingSentinelRef} style={{ height: 0 }} />

      {/* ── SIDE NAV + CASE CONTENT ───────────────────────────────────────── */}
      <div style={{ display: "flex", alignItems: "flex-start", visibility: pastLanding ? "visible" : "hidden" }}>
        <SideNav sections={NAV_SECTIONS} />

        <div style={{ flex: 1, padding: "64px 72px", display: "flex", flexDirection: "column", gap: 96 }}>

          {/* ── OVERVIEW ── */}
          <div id="overview" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionHeader
              label="OVERVIEW"
              title="Turning how others see you into something you can actually use"
            />
            <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0, maxWidth: 1060 }}>
              MeView is a mobile peer feedback service that lets Gen Z collect, organise, and visualise anonymous reviews from co-workers and friends, structured by project and competency. The product ran for 3 months as a side project.
            </p>
            <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0, maxWidth: 1060 }}>
              Product and UI design was my full scope: research, IA, UI, and design system, working alongside a PM, a graphic designer, and two developers. We chose interviews over surveys to understand the emotional context: not just what people do around feedback, but how it feels to ask for it and give it.
            </p>
          </div>

          {/* ── CONTEXT ── */}
          <div id="context" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionHeader
              label="CONTEXT"
              title="Where this came from."
            />
            <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0, maxWidth: 1060 }}>
              Reflecting on my own growth, I realised I had no structured way to understand how others perceived me. I&apos;d only ever heard my own answer. Peer feedback existed, but in scattered DMs, verbal comments, vague encouragement. Nothing you could actually act on. I found a few others who felt the same way, and we built MeView.
            </p>
          </div>

          {/* ── THE PROBLEM ── */}
          <div id="the-problem" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionHeader
              label="THE PROBLEM"
              title="People want peer feedback. They have no good way to get it."
              body="Existing tools sit at two extremes: LinkedIn recommendations are too formal, DMs and verbal comments are too informal. Nothing in between is designed for self-exploration."
            />
            <TwoColumnSection
              leftWidth="1fr"
              rightWidth="1fr"
              left={
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <InsightCard
                    icon={<MessageSquareDashed size={18} color="#969696" />}
                    title="People want peer feedback. They have no good way to get it."
                    description="Existing tools sit at two extremes. LinkedIn referrals (too formal) or DMs and verbal comments (too informal). Nothing in between was designed for honest self-exploration."
                  />
                  <InsightCard
                    icon={<LayoutTemplate size={18} color="#969696" />}
                    title="The gap isn't desire. It's structure."
                    description="80% of people are curious about how others see them, with Gen Z most engaged. Without a dedicated space, feedback either doesn't get asked for or doesn't get given."
                  />
                  <InsightCard
                    icon={<ShieldAlert size={18} color="#969696" />}
                    title="Asking is emotionally vulnerable"
                    description="The biggest barrier isn't giving feedback. It's requesting it. Putting yourself forward for evaluation, even anonymously, carries real emotional risk."
                  />
                  <InsightCard
                    icon={<UserRoundX size={18} color="#969696" />}
                    title="Responders deprioritise follow-through"
                    description="A feedback request is easy to ignore. Any friction on the response side, such as sign-up, logging in, or a long form, becomes a reason not to bother."
                  />
                </div>
              }
              right={
                <CaseImage
                  src="/meview/research_synthesis.png"
                  alt="Research synthesis · Key barriers to peer feedback"
                />
              }
            />
          </div>

          {/* ── KEY INSIGHTS ── */}
          <div id="key-insights" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionHeader
              label="KEY INSIGHTS"
              title="Two findings. Two decisions."
              body="I ran desk research and 10 semi-structured interviews: 4 students and 6 job seekers. I chose interviews over surveys to understand the emotional context: not just what people do, but how it feels to ask for and give feedback."
            />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <ArrowInsightCard
                topText="Users who have to create an account just to leave feedback will drop off. The responder has no stake in the product. Zero friction isn't optional."
                bottomText="No-login responder flow via shared link. Open, respond, done."
              />
              <ArrowInsightCard
                topText="Users review feedback with different goals: sometimes across skills, sometimes by project context. One view forces a choice between them."
                bottomText="Dual view dashboard: 'View by Skills' and 'View by Projects.'"
              />
            </div>
            <CaseImage
              src="/meview/userjourney.png"
              alt="User journey · Requester vs. responder path"
              maxWidth="75%"
              minHeight={500}
            />
          </div>

          {/* ── SOLUTION ── */}
          <div id="solution" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <SectionHeader
              label="SOLUTION"
              title="The hardest part wasn't the requester flow. It was the responder's."
              body="Every decision came back to one question: will the responder actually follow through?"
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
              <SolutionPair
                problemText="Responders drop off at sign-up, often before they've given a single piece of feedback."
                solutionText="A shared link opens directly to the form. No account, no barrier. The responder selects perceived strengths, picks relevant icons, and optionally adds a written note, then they're done."
                imageSrc="/meview/case3.png"
                imageAlt="Responder link flow: no-login screen"
              />
              <SolutionPair
                problemText="Aggregated feedback loses context. 'Good communicator' in a team project is different from a client pitch."
                solutionText="Switch between 'View by Skills' for a cross-context read, 'View by Projects' for situation-specific feedback. The same data, two useful lenses."
                imageSrc="/meview/case4.png"
                imageAlt="Results dashboard: Skills / Projects toggle"
              />
              <SolutionPair
                problemText="Requesting feedback is emotionally vulnerable. Users avoid it, or soften how they ask."
                solutionText="A structured competency framework reduces the open-ended exposure of asking. Pair that with a bold, character-driven visual identity, original mascot characters and a deliberate Gen Z aesthetic, and the product signals it's a safe, non-corporate space to be honest."
                imageSrc="/meview/case5.png"
                imageAlt="Feedback request creation: requester flow"
              />
            </div>
          </div>

          {/* ── REFLECTION + CTA ── */}
          <div id="reflection" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionHeader label="REFLECTION" title="What I learnt" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "start" }}>
              {/* Left: insight cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <InsightCard
                  icon={<Reply size={18} color="#969696" />}
                  title="Start with the responder"
                  description="I tested the requester flow first, but the core tension lived on the responder side. Earlier responder research would have sharpened the no-login decision faster and reduced time spent on requester edge cases."
                />
                <InsightCard
                  icon={<HelpCircle size={18} color="#969696" />}
                  title="'Instagrammable' is an assumption"
                  description="The visual output being shareable is an assumption about Gen Z behaviour, not a tested one. Worth validating in v2 before investing more in that direction."
                />
                <InsightCard
                  icon={<Bell size={18} color="#969696" />}
                  title="Notifications are the growth loop"
                  description="Notification design for prompting users to share results is the organic growth mechanism: out of scope for v1, but high priority for v2."
                />
              </div>

              {/* Right: CTA — top-aligned with first tile */}
              <CaseCTA
                title="Want to see the prototype or talk through the process?"
                body="Curious about the decisions behind it?"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ── PREVIOUS / NEXT ───────────────────────────────────────────────── */}
      <div style={{
        display: "flex", justifyContent: "center", gap: 165,
        padding: "40px 0", borderTop: "1px solid #E5E5E5", background: "#F7FAFC",
      }}>
        {/* Previous */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}>
          <div style={{ position: "relative", width: 165, height: 100, borderRadius: 4, overflow: "hidden" }}>
            <Image src="/nurtura.png" alt="Nurtura" fill style={{ objectFit: "cover" }} sizes="100vw" />
          </div>
          <Link href="/work/nurtura" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 14, fontFamily: FONT_DISPLAY, fontWeight: 400,
            background: "#E5E5E5", borderRadius: 2, padding: "6px 12px",
            textDecoration: "none", color: "#141412",
          }}>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="#141412" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Previous Project
          </Link>
        </div>

        {/* Current */}
        <div style={{ position: "relative", width: 165, height: 100, borderRadius: 4, overflow: "hidden" }}>
          <Image src="/meview.png" alt="MeView" fill style={{ objectFit: "cover" }} sizes="100vw" />
        </div>

        {/* Next */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
          <div style={{ position: "relative", width: 165, height: 100, borderRadius: 4, overflow: "hidden" }}>
            <Image src="/nurtura.png" alt="Nurtura" fill style={{ objectFit: "cover" }} sizes="100vw" />
          </div>
          <Link href="/work/nurtura" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 14, fontFamily: FONT_DISPLAY, fontWeight: 400,
            background: "#E5E5E5", borderRadius: 2, padding: "6px 12px",
            textDecoration: "none", color: "#141412",
          }}>
            Next Project
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="#141412" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
