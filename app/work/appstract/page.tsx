"use client";

import FadeIn from "@/components/FadeIn";
import SideNav from "@/components/SideNav";
import SectionHeader from "@/components/case/SectionHeader";
import InsightCard from "@/components/case/InsightCard";
import TwoColumnSection from "@/components/case/TwoColumnSection";
import DecisionBlock from "@/components/case/DecisionBlock";
import CaseCTA from "@/components/CaseCTA";
import { Eye, MousePointerClick, Layers, Wifi, MessageCircle, Users } from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

const FONT_SANS = "var(--font-dm-sans)";
const CHECKERBOARD = "repeating-conic-gradient(#e0e0e0 0% 25%, #f5f5f5 0% 50%) 0 0 / 20px 20px";
const LABEL_COLOR = "#F4673A";

// ─── Sub-components ───────────────────────────────────────────────────────────

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-label text-ink-faint">{label}</span>
      <span className="text-body-2-light text-ink-secondary">{value}</span>
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
      <div className="flex flex-col md:flex-row items-start">

        {/* Left: sticky project meta */}
        <div
          className="w-full md:w-[340px] md:flex-shrink-0"
          style={{ position: "sticky", top: 41, alignSelf: "flex-start", padding: "40px 32px", display: "flex", flexDirection: "column", gap: 24 }}
        >
          <div>
            <h1 className="text-h1 text-ink" style={{ margin: "0 0 8px" }}>
              Appstract
            </h1>
            <p className="text-body-1 text-ink-secondary" style={{ margin: "0 0 8px" }}>
              Social shopping widget embedded in partner e-commerce sites. The product was live. Engagement was near-zero.
            </p>
            <p className="text-body-2-light text-ink-muted leading-[1.7] m-0">
              The widget was live. Shoppers weren&apos;t engaging. I redesigned the default state and first-interaction flow around one insight: the social activity itself is the best advertisement for the product.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-4">
            <MetaItem label="Timeline" value="2–4 months" />
            <MetaItem label="Role" value="Solo Designer" />
            <MetaItem label="Platform" value="Web (embedded widget)" />
            <MetaItem label="Tools" value="Figma" />
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-label text-ink-faint">Team</span>
            <div className="flex flex-col gap-1">
              <span className="text-body-2-light text-ink-secondary">Solo. Worked directly with founders.</span>
            </div>
          </div>
        </div>

        {/* Right: cover images */}
        <div className="flex-1 flex flex-col gap-1">
          <div style={{ height: "100vh", background: CHECKERBOARD }} />
          <div style={{ height: "60vh", background: CHECKERBOARD }} />
        </div>
      </div>

      <hr className="border-0 border-t border-border m-0" />

      {/* ── SIDE NAV + CASE CONTENT ───────────────────────────────────────── */}
      <div className="flex items-start">
        <SideNav sections={NAV_SECTIONS} />

        <div className="flex-1 px-5 py-14 md:px-28 md:py-24 flex flex-col gap-20">

          {/* ── OVERVIEW ── */}
          <FadeIn><div id="overview" className="flex flex-col gap-4">
            <SectionHeader
              label="OVERVIEW"
              labelColor={LABEL_COLOR}
              title="Making a live product visible to the people it was built for."
            />
            <p className="text-body-2 text-ink-muted leading-[1.8] m-0">
              Appstract is a social shopping layer embedded into partner e-commerce sites. By the time I joined, the widget was live. Engagement was near-zero. I was the only designer on it, working end-to-end with the founders from research through final UI.
            </p>
          </div></FadeIn>

          {/* ── THE PROBLEM ── */}
          <FadeIn><div id="the-problem" className="flex flex-col gap-4">
            <SectionHeader
              label="THE PROBLEM"
              labelColor="#E05A3A"
              title="Two awareness failures, one product."
              body="The problem operated on two levels simultaneously. Fixing one without the other wouldn't move the needle."
            />
            <TwoColumnSection
              left={
                <div className="flex flex-col gap-4">
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
                <div className="bg-surface-subtle rounded-[10px] border border-border flex items-center justify-center min-h-[340px] text-ink-faint text-body-3 tracking-[0.04em] text-center px-8">
                  IMAGE: Widget default state · Before / After
                </div>
              }
            />
          </div></FadeIn>

          {/* ── KEY DECISIONS ── */}
          <FadeIn><div id="key-decisions" className="flex flex-col gap-4">
            <SectionHeader
              label="KEY DECISIONS"
              labelColor={LABEL_COLOR}
              title="Four calls. Each one traded something."
              body="User testing, a short survey, and desk research into widget discovery patterns. The finding that drove everything: attention on a product page can&apos;t be commanded. It has to be earned."
            />
            <div className="flex flex-col gap-4">
              <DecisionBlock
                number={1}
                title="Rethinking the entry point"
                situation="Tooltips and in-product prompts had already been tried with limited effect."
                options={[
                  "Iterate on the same approach: better copy, better timing",
                  "Rethink the entry point entirely",
                ]}
                chosen="Shifted from 'here is a tooltip explaining the feature' to designing a widget state that communicates value through its visual form. The social activity itself becomes the awareness mechanism."
                tradeoff="Longer iteration cycle. A better tooltip would have shipped faster, but the root issue was conceptual legibility, not copy quality."
                labelColor={LABEL_COLOR}
              />
              <DecisionBlock
                number={2}
                title="B2C and B2B as one connected challenge"
                situation="Should the two problems be solved as one design challenge or two separate workstreams?"
                chosen="Treated as one: a widget compelling enough for shoppers to use would naturally become an asset partners want to promote. Solved B2C first; B2B guidance followed from that foundation."
                tradeoff="B2B-specific needs (placement logic, partner onboarding) got less dedicated design time early on."
                labelColor={LABEL_COLOR}
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
                labelColor={LABEL_COLOR}
              />
              <DecisionBlock
                number={4}
                title="Micro Poll as a separate flow"
                situation="Research showed sharing attempts rarely produced a clear decision. Asking for opinions felt effortful enough that people dropped off before doing it."
                options={[
                  "Improve the existing sharing flow",
                  "Introduce a dedicated lower-friction mechanic",
                ]}
                chosen="Designed a fast reaction flow (Micro Poll) as a separate path alongside standard share. Async emoji reactions (scoped to shopping gut reactions) reduce the response bar to near-zero on both sides."
                tradeoff="Two parallel flows add UI surface area. Worth it because the use cases are genuinely distinct: share for discovery vs. get a quick opinion before deciding."
                labelColor={LABEL_COLOR}
              />
            </div>
          </div></FadeIn>

          {/* ── SOLUTION ── */}
          <FadeIn><div id="solution" className="flex flex-col gap-4">
            <SectionHeader
              label="SOLUTION"
              labelColor={LABEL_COLOR}
              title="Show the social activity. Don't describe it."
            />
            <div className="flex flex-col gap-4">
              <InsightCard
                icon={<Layers size={18} color="#969696" />}
                title="Widget default state: ambient social signals"
                description="Peer activity, reactions, and shared browsing indicators visible before any interaction. The widget earns its place on the page before asking for a click."
              />
              <InsightCard
                icon={<MousePointerClick size={18} color="#969696" />}
                title="First-interaction: frictionless entry"
                description="The transition from widget to active shared shopping session is designed to feel effortless. No modal, no redirect. Stays in the product page context."
              />
              <InsightCard
                icon={<MessageCircle size={18} color="#969696" />}
                title="Micro Poll: async fast reactions"
                description="User sends one or more products to friends. Friends respond with a curated emoji set, async, no account required. Once reactions come in, a conversation thread opens automatically. The quick signal becomes an entry point, not a dead end."
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
          <FadeIn><div id="learnings" className="flex flex-col gap-4">
            <SectionHeader
              label="LEARNINGS"
              labelColor={LABEL_COLOR}
              title="What I'd do differently."
            />
            <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 md:gap-10 items-start">
              <div className="flex flex-col gap-4">
                <InsightCard
                  icon={<Eye size={18} color="#969696" />}
                  title="Audit the partner integration earlier"
                  description="Understanding how different partner sites were actually placing the widget (and where it was getting lost) would have shaped the constraints more precisely. I worked from assumptions that could have been replaced with observations."
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
