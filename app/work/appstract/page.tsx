"use client";

import FadeIn from "@/components/FadeIn";
import SideNav from "@/components/SideNav";
import SectionHeader from "@/components/case/SectionHeader";
import InsightCard from "@/components/case/InsightCard";
import TwoColumnSection from "@/components/case/TwoColumnSection";
import DecisionBlock from "@/components/case/DecisionBlock";
import CaseCTA from "@/components/CaseCTA";
import { Eye, MousePointerClick, Layers, Wifi, MessageCircle, Users } from "lucide-react";

// ─── Shared styles ────────────────────────────────────────────────────────────

const FONT_SANS = "var(--font-dm-sans)";
const FONT_DISPLAY = "var(--font-montserrat)";
const FONT_SERIF = "var(--font-ibm-plex-serif)";
const CHECKERBOARD = "repeating-conic-gradient(#e0e0e0 0% 25%, #f5f5f5 0% 50%) 0 0 / 20px 20px";
const LABEL_COLOR = "#F4673A";

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

// ─── SideNav config ───────────────────────────────────────────────────────────

const NAV_SECTIONS = [
  {
    label: "Discover",
    items: [
      { label: "OVERVIEW", id: "overview" },
      { label: "THE PROBLEM", id: "the-problem" },
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
      { label: "LEARNINGS", id: "learnings" },
    ],
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AppstractPage() {
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
              Appstract
            </h1>
            <p style={{ fontFamily: FONT_SANS, fontSize: 16, fontWeight: 400, color: "#57423F", margin: "0 0 4px" }}>
              Your group chat, inside the store.
            </p>
            <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 300, color: "#666666", lineHeight: 1.7, margin: 0 }}>
              The widget was live. Shoppers weren&apos;t engaging. I redesigned the default state and first-interaction flow around one insight: the social activity itself is the best advertisement for the product.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 20px" }}>
            <MetaItem label="Timeline" value="2–4 months" />
            <MetaItem label="Role" value="Solo Designer" />
            <MetaItem label="Platform" value="Web (embedded widget)" />
            <MetaItem label="Tools" value="Figma" />
          </div>
          <div>
            <span style={{ fontFamily: FONT_DISPLAY, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#969696" }}>
              Team
            </span>
            <div style={{ marginTop: 4, display: "flex", flexDirection: "column", gap: 2 }}>
              {["Solo. Worked directly with founders."].map((m) => (
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
      <div className="flex items-start pt-0 md:pt-20">
        <SideNav sections={NAV_SECTIONS} />

        <div className="flex-1 px-5 py-12 md:px-[72px] md:py-16" style={{ display: "flex", flexDirection: "column", gap: 96 }}>

          {/* ── OVERVIEW ── */}
          <FadeIn><div id="overview" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <SectionHeader
              label="OVERVIEW"
              labelColor={LABEL_COLOR}
              title="Making a live product visible to the people it was built for."
            />
            <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0, maxWidth: 1060 }}>
              Appstract embeds a social shopping layer as a widget into partner e-commerce sites. The widget was live and integrated across partner sites. Engagement was near-zero. I was the sole designer, working end-to-end from research through high-fidelity UI, directly with the founders.
            </p>
          </div></FadeIn>

          {/* ── THE PROBLEM ── */}
          <FadeIn><div id="the-problem" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionHeader
              label="THE PROBLEM"
              labelColor="#E05A3A"
              title="Two awareness failures, one product."
              body="The problem operated on two levels simultaneously. Fixing one without the other wouldn't move the needle."
            />
            <TwoColumnSection
              leftWidth="1fr"
              rightWidth="1fr"
              left={
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <InsightCard
                    icon={<Eye size={18} color="#969696" />}
                    title="B2C: shoppers don't notice the widget"
                    description="Tooltip-based prompts assumed users would stop, read, and decide. On a product page, attention doesn't work that way."
                  />
                  <InsightCard
                    icon={<Wifi size={18} color="#969696" />}
                    title="B2B: partner sites aren't surfacing it"
                    description="Even when present, the widget competed with everything else on the page. Partners had no guidance on placement or activation."
                  />
                  <InsightCard
                    icon={<MousePointerClick size={18} color="#969696" />}
                    title="The hardest constraint: no ownership of the environment"
                    description="The widget lives inside someone else's product. It had to earn attention and communicate value in seconds, with no guaranteed context around it."
                  />
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
                  IMAGE: Widget default state · Before / After
                </div>
              }
            />
          </div></FadeIn>

          {/* ── KEY DECISIONS ── */}
          <FadeIn><div id="key-decisions" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionHeader
              label="KEY DECISIONS"
              labelColor={LABEL_COLOR}
              title="Four calls. Each one traded something."
              body="Research included user testing sessions, a qualitative survey on how people involve others in shopping decisions, and desk research into widget discovery patterns in embedded third-party products."
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <DecisionBlock
                number={1}
                title="Rethinking the entry point"
                situation="Tooltips and in-product prompts had already been tried with limited effect."
                options={[
                  "Iterate on the same approach — better copy, better timing",
                  "Rethink the entry point entirely",
                ]}
                chosen="Shifted from 'here is a tooltip explaining the feature' to designing a widget state that communicates value through its visual form — the social activity itself becomes the awareness mechanism."
                tradeoff="Longer iteration cycle. A better tooltip would have shipped faster, but the root issue was conceptual legibility, not copy quality."
              />
              <DecisionBlock
                number={2}
                title="B2C and B2B as one connected challenge"
                situation="Should the two problems be solved as one design challenge or two separate workstreams?"
                chosen="Treated as one: a widget compelling enough for shoppers to use would naturally become an asset partners want to promote. Solved B2C first; B2B guidance followed from that foundation."
                tradeoff="B2B-specific needs (placement logic, partner onboarding) got less dedicated design time early on."
              />
              <DecisionBlock
                number={3}
                title="Ambient social signals in the default state"
                situation="How much of the social experience should be visible before a user takes any action?"
                options={[
                  "Keep the widget minimal until interaction",
                  "Surface ambient social signals in the default state",
                ]}
                chosen="Designed peer activity, reactions, and shared browsing indicators into the default state. The social proof is the awareness mechanic."
                tradeoff="Requires real usage data to look credible. Low-signal states in early periods need careful handling."
              />
              <DecisionBlock
                number={4}
                title="Micro Poll as a separate flow"
                situation="Research showed sharing attempts rarely produced a clear decision. Asking for opinions felt effortful enough that people dropped off before doing it."
                options={[
                  "Improve the existing sharing flow",
                  "Introduce a dedicated lower-friction mechanic",
                ]}
                chosen="Designed a fast reaction flow (Micro Poll) as a separate path alongside standard share. Async emoji reactions — scoped to shopping gut reactions — reduce the response bar to near-zero on both sides."
                tradeoff="Two parallel flows add UI surface area. Worth it because the use cases are genuinely distinct: share for discovery vs. get a quick opinion before deciding."
              />
            </div>
          </div></FadeIn>

          {/* ── SOLUTION ── */}
          <FadeIn><div id="solution" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionHeader
              label="SOLUTION"
              labelColor={LABEL_COLOR}
              title="Show the social activity. Don't describe it."
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <InsightCard
                icon={<Layers size={18} color="#969696" />}
                title="Widget default state: ambient social signals"
                description="Peer activity, reactions, and shared browsing indicators visible before any interaction. The widget earns its place on the page before asking for a click."
              />
              <InsightCard
                icon={<MousePointerClick size={18} color="#969696" />}
                title="First-interaction: frictionless entry"
                description="The transition from widget to active shared shopping session is designed to feel effortless. No modal, no redirect — stays in the product page context."
              />
              <InsightCard
                icon={<MessageCircle size={18} color="#969696" />}
                title="Micro Poll: async fast reactions"
                description="User sends one or more products to friends. Friends respond with a curated emoji set — async, no account required. Once reactions come in, a conversation thread opens automatically. The quick signal becomes an entry point, not a dead end."
              />
              <InsightCard
                icon={<Users size={18} color="#969696" />}
                title="Zero-state and sparse-data handling"
                description="Widget behaviour when social data is sparse or the partner site is newly integrated. Early-stage low density shouldn't make the product feel abandoned."
              />
              <InsightCard
                icon={<Wifi size={18} color="#969696" />}
                title="B2B placement guide"
                description="Recommended integration patterns for partner sites to maximise discoverability without disrupting the host page."
              />
            </div>
          </div></FadeIn>

          {/* ── LEARNINGS + CTA ── */}
          <FadeIn><div id="learnings" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionHeader
              label="LEARNINGS"
              labelColor={LABEL_COLOR}
              title="What I'd do differently."
            />
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <InsightCard
                  icon={<Eye size={18} color="#969696" />}
                  title="Audit the partner integration earlier"
                  description="Understanding how different partner sites were actually placing the widget — and where it was getting lost — would have shaped the constraints more precisely. I worked from assumptions that could have been replaced with observations."
                />
                <InsightCard
                  icon={<Layers size={18} color="#969696" />}
                  title="Awareness is a design problem, not a copy problem"
                  description="The existing prompts failed not because the words were wrong, but because the interaction model assumed users would stop, read, and decide. Social signals create curiosity without requiring a conscious decision to engage."
                />
                <InsightCard
                  icon={<Wifi size={18} color="#969696" />}
                  title="Invest more in the B2B side"
                  description="The widget's success depends as much on how partners place it as on the widget design itself. Partner configuration and onboarding guidance were underspecified."
                />
              </div>
              <CaseCTA
                title="Want to talk through the process?"
                body="Full designs, research synthesis, and the B2B placement guide are available on request."
                ctaLabel="Get in touch"
              />
            </div>
          </div></FadeIn>

        </div>
      </div>
    </>
  );
}
