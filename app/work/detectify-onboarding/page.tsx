"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SideNav from "@/components/SideNav";
import SectionHeader from "@/components/case/SectionHeader";
import InsightCard from "@/components/case/InsightCard";
import DecisionBlock from "@/components/case/DecisionBlock";
import CaseCTA from "@/components/CaseCTA";
import {
  EyeOff,
  TrendingDown,
  Lock,
  LayoutDashboard,
  AlignLeft,
  ListChecks,
  Mic,
  FlaskConical,
  Lightbulb,
  GitMerge,
} from "lucide-react";

// ─── Shared styles ────────────────────────────────────────────────────────────

const FONT_SANS = "var(--font-dm-sans)";
const FONT_DISPLAY = "var(--font-montserrat)";
const FONT_SERIF = "var(--font-ibm-plex-serif)";
const CHECKERBOARD = "repeating-conic-gradient(#e0e0e0 0% 25%, #f5f5f5 0% 50%) 0 0 / 20px 20px";
const LABEL_COLOR = "#1176C5";

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

function NdaNote() {
  return (
    <div style={{
      background: "#F7FAFC",
      border: "1px solid #E5E5E5",
      borderLeft: "3px solid #E5E5E5",
      borderRadius: 5,
      padding: "14px 18px",
    }}>
      <p style={{ fontFamily: FONT_SANS, fontSize: 13, fontWeight: 400, color: "#969696", lineHeight: 1.6, margin: 0 }}>
        NDA applies. UI screenshots available on request. Get in touch to see the full prototype walkthrough.
      </p>
    </div>
  );
}

// ─── SideNav config ───────────────────────────────────────────────────────────

const NAV_SECTIONS = [
  {
    label: "Discover",
    items: [
      { label: "CONTEXT", id: "context" },
      { label: "THE PROBLEM", id: "the-problem" },
    ],
  },
  {
    label: "Define",
    items: [
      { label: "GOALS", id: "goals" },
      { label: "KEY INSIGHTS", id: "approach" },
    ],
  },
  {
    label: "Develop",
    items: [
      { label: "KEY DECISIONS", id: "key-decisions" },
      { label: "SOLUTION", id: "solution" },
    ],
  },
  {
    label: "Deliver",
    items: [
      { label: "IMPACT", id: "impact" },
      { label: "LEARNINGS", id: "learnings" },
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DetectifyOnboardingPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <div style={{ display: "flex", alignItems: "flex-start" }}>

        {/* Left: sticky project meta */}
        <div style={{
          position: "sticky", top: 41, width: 340, flexShrink: 0,
          alignSelf: "flex-start", padding: "40px 32px", display: "flex",
          flexDirection: "column", gap: 24,
        }}>
          <div>
            <h1 style={{ fontFamily: FONT_SERIF, fontSize: 24, fontWeight: 500, fontStyle: "italic", margin: "0 0 6px" }}>
              Detectify Onboarding
            </h1>
            <p style={{ fontFamily: FONT_SANS, fontSize: 16, fontWeight: 400, color: "#57423F", margin: "0 0 4px" }}>
              Redesigning first impressions for a product that takes 24 hours to prove itself.
            </p>
            <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 300, color: "#666666", lineHeight: 1.7, margin: 0 }}>
              Users were dropping off before they&apos;d ever seen Detectify work. The onboarding demanded technical effort before establishing any product value, and the platform couldn&apos;t tell the difference between a new user who needed setup help and an existing user who didn&apos;t.
            </p>
          </div>

          {/* Meta */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 20px" }}>
            <MetaItem label="Timeline" value="April–June 2026" />
            <MetaItem label="Role" value="Product Designer" />
            <MetaItem label="Platform" value="Web · B2B SaaS" />
            <MetaItem label="Tools" value="Figma, Figma Make" />
          </div>
          <div>
            <span style={{ fontFamily: FONT_DISPLAY, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#969696" }}>
              Team
            </span>
            <div style={{ marginTop: 4, display: "flex", flexDirection: "column", gap: 2 }}>
              {["Lead Product Designer", "2 Front-end Engineers"].map((m) => (
                <span key={m} style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 300, color: "#57423F" }}>{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: cover placeholder (NDA) */}
        <div style={{ flex: 1, minHeight: "60vh", background: CHECKERBOARD }} />
      </div>

      {/* ── SIDE NAV + CASE CONTENT ───────────────────────────────────────── */}
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <SideNav sections={NAV_SECTIONS} />

        <div style={{ flex: 1, padding: "56px 64px", display: "flex", flexDirection: "column", gap: 80 }}>

          {/* ── CONTEXT ── */}
          <FadeIn><div id="context" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <SectionHeader
              label="CONTEXT"
              labelColor={LABEL_COLOR}
              title="An internship brief. A real activation problem."
            />
            <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0, maxWidth: 640 }}>
              Detectify is a B2B cybersecurity SaaS whose web app helps security teams scan, prioritise, and act on vulnerability data. This project focused on the onboarding experience for new users entering the product for the first time: guiding them through domain setup and their first scan.
            </p>
            <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0, maxWidth: 640 }}>
              This workstream ran alongside and following the table redesign within the same 6-month internship. I led research synthesis and UI prototyping, working closely with a PM and two developers. Design decisions were made jointly with the lead product designer.
            </p>
            <NdaNote />
          </div></FadeIn>

          {/* ── THE PROBLEM ── */}
          <FadeIn><div id="the-problem" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <SectionHeader
              label="THE PROBLEM"
              labelColor={LABEL_COLOR}
              title="Users hit a wall before they understood what they were building toward."
              body="Three things were breaking at once."
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <InsightCard
                icon={<TrendingDown size={18} color="#969696" />}
                title="Effort before value"
                description="New users were immediately asked to manually enter a technical asset. A high-friction task with no context for why it mattered. 69% dropped off at this step alone. Formatting errors (typing https:// instead of example.com) caused a 14–51% failure rate on that single input field."
              />
              <InsightCard
                icon={<Lock size={18} color="#969696" />}
                title="Broken technical flows"
                description="DNS verification required multi-step preparation users weren't ready for. The API scanning setup had a 100% failure rate from authentication to first scan, and generated 73% of all platform support tickets."
              />
              <InsightCard
                icon={<EyeOff size={18} color="#969696" />}
                title="The wrong users hitting setup"
                description="The 'Get Started' page was showing up for existing users, enterprise admins switching team contexts, and new team members joining already-configured accounts. Users landed on it an average of 3.1 times. It wasn't an onboarding gate. It was a loop."
              />
            </div>
          </div></FadeIn>

          {/* ── GOALS ── */}
          <FadeIn><div id="goals" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <SectionHeader
              label="GOALS"
              labelColor={LABEL_COLOR}
              title="Enable first scan in under 5 minutes. Set the right expectations."
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <InsightCard
                icon={<ListChecks size={18} color="#969696" />}
                title="User goal"
                description="Enable a new user to add a domain and initiate their first scan in under 5 minutes, without feeling lost or uncertain about what to do next."
              />
              <InsightCard
                icon={<TrendingDown size={18} color="#969696" />}
                title="Business goals"
                description="Increase Tour Completion Rate and reduce time-to-first-scan. Every improvement to activation translates directly to lower cost-per-activated-user."
              />
            </div>

            {/* Priority tiers */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ background: "#F1F2F3", borderRadius: 5, padding: "16px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontFamily: FONT_DISPLAY, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: LABEL_COLOR }}>
                  Must-have
                </span>
                <ul style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0, paddingLeft: 16 }}>
                  <li>Numeric progress indicators replacing dot navigation</li>
                  <li>Animated GIFs showing mouse-driven workflows in-context</li>
                  <li>Explicit data-delay messaging before the empty dashboard</li>
                </ul>
              </div>
              <div style={{ background: "#F1F2F3", borderRadius: 5, padding: "16px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontFamily: FONT_DISPLAY, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#969696" }}>
                  Shelved for V1
                </span>
                <ul style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0, paddingLeft: 16 }}>
                  <li>Deferred domain verification: letting users explore before completing DNS setup. Deprioritised due to engineering complexity, not UX preference.</li>
                </ul>
              </div>
            </div>

            <p style={{ fontFamily: FONT_SANS, fontSize: 13, fontWeight: 400, color: "#969696", lineHeight: 1.6, margin: 0 }}>
              Definition of done: a hi-fi V2 prototype validated through internal testing, with 100% of testers rating the new progress system as clearer than the previous version.
            </p>
          </div></FadeIn>

          {/* ── APPROACH ── */}
          <FadeIn><div id="approach" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <SectionHeader
              label="KEY INSIGHTS"
              labelColor={LABEL_COLOR}
              title="The invisible problem: users didn't know how lost they were."
              body="Four think-aloud sessions with internal stakeholders (security expert, non-technical user, and others). Made cognitive load visible: where people hesitated, where assumptions collapsed."
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <InsightCard
                icon={<Mic size={18} color="#969696" />}
                title="Progress invisibility drove abandonment more than technical friction"
                description="The existing dot-based navigation gave users no sense of how far they were in the process. Users didn't abandon because the DNS step was hard. They abandoned because they couldn't tell if the end was near. This reframed the entire redesign priority."
              />
              <InsightCard
                icon={<AlignLeft size={18} color="#969696" />}
                title="63% of users chose to skip the guided tour"
                description="Not because they didn't need help. Because they wanted to explore first. The existing design treated skipping as failure. The redesign had to treat it as a valid path."
              />
              <InsightCard
                icon={<ListChecks size={18} color="#969696" />}
                title="Setup was being served to users who didn't need it"
                description="The platform had no logic for distinguishing first-time users from returning ones. Routing the wrong users into setup wasn't just annoying. It was eroding trust in the product for people who were already activated."
              />
            </div>

            <div style={{
              background: "#F7FAFC",
              border: "1px solid #E5E5E5",
              borderLeft: "3px solid #FADB68",
              borderRadius: 5,
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}>
              <span style={{ fontFamily: FONT_DISPLAY, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: LABEL_COLOR }}>
                Most surprising finding
              </span>
              <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.7, margin: 0 }}>
                The dot-based navigation wasn&apos;t just aesthetically vague. Users genuinely couldn&apos;t tell how far into the process they were. This uncertainty made them more likely to abandon than the technical friction itself. Progress visibility was the primary problem, not the verification step.
              </p>
            </div>
          </div></FadeIn>

          {/* ── KEY DECISIONS ── */}
          <FadeIn><div id="key-decisions" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <SectionHeader
              label="KEY DECISIONS"
              labelColor={LABEL_COLOR}
              title="Three calls. Each one traded something."
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <DecisionBlock
                number={1}
                title="Dot navigation to numeric progress"
                situation="The existing tour used dot indicators for navigation. They were visually minimal, but gave users no sense of where they were in the sequence or how much remained."
                options={[
                  "Keep dots: preserve visual simplicity",
                  "Switch to numeric labels ('Step 2 of 4') with segmented progress bars",
                ]}
                chosen="Numeric labels and segmented progress bars."
                tradeoff="Sacrificed visual cleanliness for functional clarity. 6/6 testers rated numeric progress as clearer in prototype testing. This wasn't a close call. The dot approach had been optimising for aesthetics at the cost of comprehension."
              />
              <DecisionBlock
                number={2}
                title="Static screenshots to animated GIFs"
                situation="The existing tour guided users through complex interactions using static UI screenshots. Testers noted these felt outdated and didn't communicate what to do. Only what the UI looked like."
                options={[
                  "Keep static screenshots: lower production effort, faster to maintain",
                  "Replace with short animated GIFs showing actual mouse-driven workflows",
                ]}
                chosen="Animated GIFs."
                tradeoff="Higher asset production time and increased load weight. Accepted because static images were actively misleading: they showed a state, not an action. The animated format shows what to do, not just where to look."
              />
              <DecisionBlock
                number={3}
                title="Empty completion state to expectation management modal"
                situation="When a user completed the tour, the product had nothing to show them. The first scan takes 8–24 hours. The previous flow ended on an empty dashboard with no explanation, which read as a product failure rather than a technical delay."
                options={[
                  "Silent completion: let users land on the empty dashboard",
                  "Explicit success modal with a countdown, context about the delay, and links to Detectify University",
                ]}
                chosen="An expectation management success modal."
                tradeoff="The dashboard would still be empty. But by naming the delay, providing a countdown, and linking to educational content, we separated 'the scan is running' from 'nothing is happening.' We accepted that we couldn't fix the delay. Only the interpretation of it."
              />
            </div>
          </div></FadeIn>

          {/* ── SOLUTION ── */}
          <FadeIn><div id="solution" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <SectionHeader
              label="SOLUTION"
              labelColor={LABEL_COLOR}
              title="A value-first onboarding system built around one principle: show the product before asking for the effort."
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <InsightCard
                icon={<GitMerge size={18} color="#969696" />}
                title="The Floating Control Card"
                description="A persistent widget that travels with the user through the UI. When not in focus, it collapses into a progress ring, giving users a way to exit the tour and re-enter it without losing their place. Setup follows you. You don't chase setup."
              />
              <InsightCard
                icon={<Lightbulb size={18} color="#969696" />}
                title="Numeric progress over dot navigation"
                description="Dots look clean. They tell you nothing. 4/4 testers couldn't identify where they were in the sequence using dots. Numbers replaced them. Not as a visual upgrade, but a functional one. 6/6 testers rated numeric progress as clearer in prototype testing."
              />
              <InsightCard
                icon={<LayoutDashboard size={18} color="#969696" />}
                title="Smart routing"
                description="If a team already has assets or active scans, or if a user is an existing team member, the 'Get Started' page is bypassed entirely. New users get onboarding. Everyone else gets their dashboard."
              />
              <InsightCard
                icon={<FlaskConical size={18} color="#969696" />}
                title="Defensive input design"
                description="Real-time format validation on the domain entry field, auto-stripping https:// and trailing slashes, with clear placeholder examples. The 14–51% formatting failure rate was a copy and validation problem, not a user problem."
              />
              <InsightCard
                icon={<EyeOff size={18} color="#969696" />}
                title="Empty state as expectation management"
                description="The final screen after scan creation now explicitly communicates the 8 to 24-hour scan delay. What previously looked like a broken confirmation became a clear, calm handoff."
              />
            </div>
            <NdaNote />
          </div></FadeIn>

          {/* ── IMPACT ── */}
          <FadeIn><div id="impact" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <SectionHeader
              label="IMPACT"
              labelColor={LABEL_COLOR}
              title="100% clarity. Shipped in 3 milestones."
            />
            <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0, maxWidth: 640 }}>
              In prototype testing, 6/6 testers rated the new numeric progress system as clearer than the previous dot-based version. The V2 prototype cleared the definition of done threshold: 100% clarity rating on progress tracking.
            </p>
            <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0, maxWidth: 640 }}>
              The project shipped in 3 milestones. The redesign also resolved the Monitoring vs. Scanning conceptual confusion, which 50% of testers had flagged as a source of early drop-off.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ background: "#F1F2F3", borderRadius: 5, padding: "16px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontFamily: FONT_SANS, fontSize: 13, fontWeight: 300, fontStyle: "italic", color: "#666666", lineHeight: 1.6 }}>
                  &ldquo;Moving from a labyrinth to a guided path. The Cheese Strategy finally made the product&apos;s purpose legible.&rdquo;
                </span>
                <span style={{ fontFamily: FONT_DISPLAY, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#969696" }}>
                  Joel, Security Expert
                </span>
              </div>
              <div style={{ background: "#F1F2F3", borderRadius: 5, padding: "16px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontFamily: FONT_SANS, fontSize: 13, fontWeight: 300, fontStyle: "italic", color: "#666666", lineHeight: 1.6 }}>
                  &ldquo;The yellow focus highlights directed attention to core features without feeling heavy-handed.&rdquo;
                </span>
                <span style={{ fontFamily: FONT_DISPLAY, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#969696" }}>
                  Sanjidah, Tester
                </span>
              </div>
            </div>
            <p style={{ fontFamily: FONT_SANS, fontSize: 13, fontWeight: 300, color: "#969696", lineHeight: 1.6, margin: 0 }}>
              Live metrics from Milestone 1 available on request.
            </p>
          </div></FadeIn>

          {/* ── LEARNINGS + CTA ── */}
          <FadeIn><div id="learnings" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <SectionHeader
              label="LEARNINGS"
              labelColor={LABEL_COLOR}
              title="What I'd do differently."
            />
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <InsightCard
                  icon={<Lightbulb size={18} color="#969696" />}
                  title="Start usability testing on progress navigation earlier"
                  description="The dot vs. number finding only emerged in prototype testing. Earlier low-fi testing on navigation patterns would have surfaced this faster and saved iteration cycles at hi-fi stage."
                />
                <InsightCard
                  icon={<Mic size={18} color="#969696" />}
                  title="Involve non-technical stakeholders in the problem framing"
                  description="Think-aloud sessions with internal stakeholders were valuable, but they skewed toward technical users. The non-technical user sessions were the most revealing. I'd weight that perspective more heavily from the start."
                />
                <InsightCard
                  icon={<GitMerge size={18} color="#969696" />}
                  title="The routing logic was the highest-impact decision, but the last to get attention"
                  description="Smart targeting would directly address the 3.1 average 'Get Started' views per user. It deserved to be scoped earlier, not discovered mid-process."
                />
              </div>
              <CaseCTA
                title="Want to see the prototype?"
                body="Full walkthrough and live metrics available on request."
              />
            </div>
          </div></FadeIn>

        </div>
      </div>

      {/* ── PREVIOUS / NEXT ────────────────────────────────────────────────── */}
      <div style={{
        display: "flex", justifyContent: "center", gap: 165,
        padding: "40px 0", borderTop: "1px solid #E5E5E5", background: "#F7FAFC",
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}>
          <div style={{ width: 165, height: 100, borderRadius: 4, overflow: "hidden", background: "#F1F2F3" }} />
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

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: 165, height: 100, borderRadius: 4, overflow: "hidden", background: "#F1F2F3" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
          <div style={{ width: 165, height: 100, borderRadius: 4, overflow: "hidden", background: "#F1F2F3" }} />
          <Link href="/work/meview" style={{
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
