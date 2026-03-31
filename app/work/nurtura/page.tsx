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
import { Users, HeartHandshake, Sparkles, FlaskConical, Stethoscope, PenLine, LayoutList, UserX, Blocks } from "lucide-react";

// ─── Shared styles ────────────────────────────────────────────────────────────

const FONT_SANS = "var(--font-dm-sans)";
const FONT_DISPLAY = "var(--font-montserrat)";
const FONT_SERIF = "var(--font-ibm-plex-serif)";
const CHECKERBOARD = "repeating-conic-gradient(#e0e0e0 0% 25%, #f5f5f5 0% 50%) 0 0 / 20px 20px";

// ─── Sub-components ───────────────────────────────────────────────────────────

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
  stat,
  imagePlaceholder,
  imageSrc,
  imageAlt,
  imageHeight = 580,
}: {
  problemText: string;
  solutionText: string;
  stat?: string;
  imagePlaceholder: string;
  imageSrc?: string;
  imageAlt?: string;
  imageHeight?: number;
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
          <span style={{ fontFamily: FONT_DISPLAY, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#549D5B" }}>
            Solution
          </span>
          <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.7, margin: 0 }}>
            {solutionText}
          </p>
        </div>
        {stat && (
          <p style={{ fontFamily: FONT_SANS, fontSize: 12, fontWeight: 300, color: "#969696", lineHeight: 1.6, margin: 0, borderLeft: "2px solid #E5E5E5", paddingLeft: 12 }}>
            {stat}
          </p>
        )}
      </div>
      {imageSrc
        ? <CaseImage src={imageSrc} alt={imageAlt ?? ""} minHeight={imageHeight} bare />
        : <ImagePlaceholder description={imagePlaceholder} height={imageHeight} />
      }
    </div>
  );
}

// ─── SideNav config ───────────────────────────────────────────────────────────

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
    items: [
      { label: "KEY INSIGHTS", id: "key-insights" },
    ],
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function NurturaPage() {
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
              Nurtura
            </h1>
            <p style={{ fontFamily: FONT_SANS, fontSize: 16, fontWeight: 400, color: "#57423F", margin: "0 0 4px" }}>
              Designing emotional safety into an IVF community.
            </p>
            <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 300, color: "#666666", lineHeight: 1.7, margin: 0 }}>
              52% of IVF patients avoid online forums because the content is too triggering. Instead of adding more features to an already overwhelming landscape, I designed a community platform with emotional guardrails built in from onboarding.
            </p>
          </div>

          {/* Meta */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 20px" }}>
            <MetaItem label="Timeline" value="Spring 2025 (8 weeks)" />
            <MetaItem label="Role" value="Solo UX/Product Designer" />
            <MetaItem label="Platform" value="iOS mobile app" />
            <MetaItem label="Tools" value="Figma, React Native (Expo)" />
          </div>
        </div>

        {/* Right: cover image stack */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
          {[
            { src: "/nurtura/nurtura case 1.png", alt: "Nurtura app cover" },
            { src: "/nurtura/case2.png", alt: "Nurtura onboarding flow" },
            { src: "/nurtura/case3.png", alt: "Nurtura community feed" },
            { src: "/nurtura/case4.png", alt: "Nurtura peer connect flow" },
            { src: "/nurtura/case5.png", alt: "Nurtura emotional check-in and IVF guide flows" },
          ].map(({ src, alt }) => (
            <Image
              key={src}
              src={src}
              alt={alt}
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

          {/* ── THE BRIEF ── */}
          <div id="the-brief" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionHeader
              label="THE BRIEF"
              labelColor="#549D5B"
              title="I started with a brief. I ended up with a real problem."
            />
            <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0, maxWidth: 1060 }}>
              The brief was from Hyper Island: 8 weeks, solo, end-to-end: <em>"Create a user-centred vertical social network."</em> The scope covered the full design process: research, define, ideate, prototype. Deliverable was a hi-fi prototype with a documented design rationale. No engineering handoff. The goal was design thinking depth, not production readiness.
            </p>
            <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0, maxWidth: 1060 }}>
              I ran the full process solo: 12 interviews, a 35-person survey, affinity mapping, three concept directions, navigation testing, lo-fi and hi-fi iterations, and usability testing.
            </p>
          </div>

          {/* ── THE PROBLEM ── */}
          <div id="the-problem" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionHeader
              label="THE PROBLEM"
              labelColor="#549D5B"
              title="The people who need community most are avoiding it."
              body="To understand what people going through IVF actually needed, not just what they said they needed, I conducted 11 semi-structured interviews with 12 participants alongside a 35-person survey. I wanted to hear the real friction: what made them close the app, why they stayed away from forums, what they wished existed."
            />

            <TwoColumnSection
              leftWidth="1fr"
              rightWidth="1fr"
              left={
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <InsightCard
                    icon={<LayoutList size={18} color="#969696" />}
                    title="Overwhelm by design"
                    description="Unfiltered feeds surface triggering content, including pregnancy announcements and success stories, before users have set any preferences. The result isn't just discomfort. It's abandonment."
                  />
                  <InsightCard
                    icon={<UserX size={18} color="#969696" />}
                    title="Isolation without exit"
                    description="75% felt lonely during the process. 60% felt misunderstood by people close to them. The communities built to help them were actively making things worse."
                  />
                  <InsightCard
                    icon={<Blocks size={18} color="#969696" />}
                    title="No platform built for this"
                    description="No journey-stage context, no emotional framing, no partner perspective. Existing platforms treated IVF users as a general audience and then wondered why they left."
                  />
                </div>
              }
              right={
                <CaseImage src="/nurtura/affinity.png" alt="Affinity map · Themes clustered from interview transcripts" minHeight={340} />
              }
            />

          </div>

          {/* ── KEY INSIGHTS ── */}
          <div id="key-insights" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionHeader
              label="KEY INSIGHTS"
              labelColor="#549D5B"
              title="Three findings. Three decisions."
              body="I mapped the full user journey to understand where avoidance starts and where trust breaks down. Three things became structurally clear, and each one became a design decision."
            />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
              <ArrowInsightCard
                topText="Users who see triggering content before setting any preferences don't come back to fix it. They leave. The damage happens before they've had a chance to customise anything."
                bottomText="Content preferences move to onboarding: users define what they don't want before entering the feed. Set once, applied everywhere."
              />
              <ArrowInsightCard
                topText="Users want relevant content without revealing their identity. Both are non-negotiable. Existing platforms force a choice between personalisation and anonymity."
                bottomText="Anonymity is the default at every layer: community archetypes instead of names, illustrated avatars, anonymous first messages. Identity is revealed only if the user chooses."
              />
              <ArrowInsightCard
                topText="The most meaningful peer connection isn't 'someone nearby' or 'someone with similar interests.' It's 'someone who gets where I am right now': same stage, same round of treatment."
                bottomText="Match cards surface journey stage and treatment round as the primary signals, not location or interests. Smaller match pool for rare stages is an acceptable tradeoff at MVP."
              />
            </div>

            <CaseImage src="/nurtura/ujm.png" alt="Journey map · Where confidence drops, where decisions happen, where users disengage" minHeight={320} />
          </div>

          {/* ── CONCEPT EXPLORATION ── */}
          <div id="concept-exploration" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionHeader
              label="CONCEPT EXPLORATION"
              labelColor="#549D5B"
              title="Three directions, one decision."
              body="With research done, I explored three directions around the three core problems: loneliness and isolation, lack of tailored community, and the emotional information gap throughout the journey."
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {[
                {
                  n: 1,
                  title: "Personalised community groups",
                  description: "80% of users already rely on Facebook groups and forums. The problem isn't that people don't use communities. It's that those communities don't meet them where they are. This concept addressed that directly: a forum experience built around IVF, with personalisation by stage, topic, and treatment type.",
                  imageSrc: "/nurtura/concept 1.png",
                  imageAlt: "Concept 1 · Lo-fi sketch: community groups",
                },
                {
                  n: 2,
                  title: "1:1 peer matching",
                  description: "Friends and family, however well-meaning, can't provide the support that comes from shared experience. Users wanted to find someone going through something specifically similar, not just someone vaguely supportive. This concept was a matchmaking-style peer connect feature.",
                  imageSrc: "/nurtura/concept 2.png",
                  imageAlt: "Concept 2 · Lo-fi sketch: peer matching",
                },
                {
                  n: 3,
                  title: "Emotional and informational support",
                  description: "Medical information exists. Emotional preparation doesn't. This concept took inspiration from pregnancy tracking apps and reframed them for IVF, personalised by journey stage and focused on emotional readiness alongside clinical detail.",
                  imageSrc: "/nurtura/concept 3.png",
                  imageAlt: "Concept 3 · Lo-fi sketch: emotional support",
                },
              ].map(({ n, title, description, imageSrc, imageAlt }) => (
                <TwoColumnSection
                  key={n}
                  leftWidth="1fr"
                  rightWidth="1fr"
                  left={
                    <InsightCard
                      icon={n === 1 ? <Users size={18} color="#969696" /> : n === 2 ? <HeartHandshake size={18} color="#969696" /> : <Sparkles size={18} color="#969696" />}
                      title={title}
                      description={description}
                    />
                  }
                  right={<CaseImage src={imageSrc} alt={imageAlt} minHeight={240} />}
                />
              ))}
            </div>

            {/* Decision callout */}
            <div style={{
              background: "#F7FAFC",
              border: "1px solid #E5E5E5",
              borderLeft: "3px solid #FADB68",
              borderRadius: 5,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}>
              <span style={{ fontFamily: FONT_DISPLAY, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#549D5B" }}>
                Decision
              </span>
              <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 500, color: "#57423F", lineHeight: 1.7, margin: 0 }}>
                Merge all three, with community as the primary surface.
              </p>
              <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.7, margin: 0 }}>
                After sketching all three as low-fidelity screens, separating community, peer connection, and information into three apps was feature sprawl masquerading as product strategy. Each concept addressed a real need, but none of them worked alone. The decision was to merge community and peer matching as the primary surface, with emotional and informational support woven through as contextual depth rather than separate tabs.
              </p>
            </div>

          </div>

          {/* ── SOLUTION ── */}
          <div id="solution" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <SectionHeader
              label="SOLUTION"
              labelColor="#549D5B"
              title="Three problems. Three responses."
              body="Each core decision maps directly to a failure of existing platforms. The navigation test between concepts also reshaped the information architecture: peer connect moved from a top-level tab into a depth layer inside the community."
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
              <SolutionPair
                problemText="Users hit an unfiltered feed before setting any preferences and leave. Settings-first design assumes users will return to configure. They don't."
                solutionText="Onboarding captures content preferences, journey stage, and anonymity level before users ever see the feed. By the time they reach the community, it's already filtered for them. 'You can change this anytime' reduces commitment anxiety: the framing is control, not protection."
                stat="77% of surveyed users preferred a dedicated app over web forums."
                imagePlaceholder="S01–S05 · Onboarding flow + Home Dashboard"
                imageSrc="/nurtura/case2.png"
                imageAlt="S01–S05 · Onboarding flow + Home Dashboard"
              />
              <SolutionPair
                problemText="Existing platforms force a choice: share your identity or get irrelevant content. Neither is acceptable. Both should be possible at once."
                solutionText="Filter chips carry over directly from onboarding, giving context without exposure. Community archetypes replace real names. 'Sort by most supportive' surfaces empathetic content first, a sorting option unique to Nurtura. Users go deeper from any post without leaving the feed."
                imagePlaceholder="S06–S08 · Community Feed + Filter + Post Detail"
                imageSrc="/nurtura/case3.png"
                imageAlt="S06–S08 · Community Feed + Filter + Post Detail"
              />
              <SolutionPair
                problemText="Standard peer matching uses location or interests. For IVF users, that's the wrong signal. 'Someone nearby' isn't what they're looking for."
                solutionText="Match cards make the logic visible: journey stage, treatment round, support type. First messages are anonymous, with suggested prompts to remove blank-page anxiety. Users move toward identity at their own pace."
                imagePlaceholder="S09–S11 · Peer Connect flow"
                imageSrc="/nurtura/case4.png"
                imageAlt="S09–S11 · Peer Connect flow"
              />
            </div>

            {/* Supporting flows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0 }}>
                Two supporting flows close the loop. The emotional check-in (S12–S14) is a low-friction daily touchpoint; the reflection result bridges emotional state to community, peer connect, or guide content, making it feel purposeful rather than just logging. The IVF guide (S15–S17) includes a dedicated &ldquo;For Partners&rdquo; section, a perspective existing platforms ignore entirely, and closes with &ldquo;Discuss in community&rdquo; to bridge information back to connection.
              </p>
              <CaseImage src="/nurtura/case5.png" alt="S12–S17 · Emotional Check-in + IVF Guide flows" minHeight={580} bare />
            </div>
          </div>

          {/* ── USER TESTING ── */}
          <div id="user-testing" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionHeader
              label="USER TESTING"
              labelColor="#549D5B"
              title="Users felt safe before seeing a single post."
              body="I tested the hi-fi prototype with 5 users, concept and evaluation testing. The onboarding framing was specifically called out as making users feel validated before they'd seen any community content. That was the moment I knew the core decision had worked."
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <InsightCard
                title='"As if I am truly stepping into a safe space that understands my needs."'
                description="On the onboarding content preferences screen, before a single feed post was visible."
              />
              <InsightCard
                title='"An app that feels as though it is truly made for the needs of the targeted audience."'
                description="On the overall product experience."
              />
              <InsightCard
                title={"\"It feels like it's an app that would hold my hand through this journey.\""}
                description="On the emotional tone and pacing of the full prototype."
              />
            </div>
          </div>

          {/* ── REFLECTIONS + CTA ── */}
          <div id="reflections" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionHeader
              label="REFLECTIONS"
              labelColor="#549D5B"
              title="What I'd do differently."
            />

            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "start" }}>
              {/* Left: reflection tiles */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <InsightCard
                  icon={<FlaskConical size={18} color="#969696" />}
                  title="Run usability testing earlier on onboarding"
                  description="I validated the concept direction first and iterated on hi-fi screens before doing task-based testing on onboarding. Earlier usability testing would have surfaced friction in the content preference flow faster, and reduced how much I had to revise copy at hi-fi stage."
                />
                <InsightCard
                  icon={<Stethoscope size={18} color="#969696" />}
                  title="Involve a fertility counsellor from the start"
                  description="The emotional safety framing was research-led, but the clinical accuracy of the IVF guide content wasn't validated by a professional. For a health-adjacent product, that's a gap. In a real product, expert review would happen before, not after, design."
                />
                <InsightCard
                  icon={<PenLine size={18} color="#969696" />}
                  title="The most impactful decisions were copy choices"
                  description="'You can change this anytime.' 'Others felt this way too this week.' These lines carry more emotional weight than any visual decision I made. Writing the copy as a design decision, not a detail, was the shift that made the onboarding work."
                />
              </div>

              {/* Right: CTA */}
              <CaseCTA />
            </div>
          </div>

        </div>
      </div>

      {/* ── PREVIOUS / NEXT ────────────────────────────────────────────────── */}
      <div style={{
        display: "flex", justifyContent: "center", gap: 165,
        padding: "40px 0", borderTop: "1px solid #E5E5E5", background: "#F7FAFC",
      }}>
        {/* Previous */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}>
          <div style={{ position: "relative", width: 165, height: 100, borderRadius: 4, overflow: "hidden" }}>
            <Image src="/meview.png" alt="MeView" fill style={{ objectFit: "cover" }} sizes="100vw" />
          </div>
          <Link href="/work/meview" style={{
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: 165, height: 100, borderRadius: 4, overflow: "hidden" }}>
            <Image src="/nurtura.png" alt="Nurtura" fill style={{ objectFit: "cover" }} sizes="100vw" />
          </div>
        </div>

        {/* Next */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
          <div style={{ position: "relative", width: 165, height: 100, borderRadius: 4, overflow: "hidden" }}>
            <Image src="/meview.png" alt="MeView" fill style={{ objectFit: "cover" }} sizes="100vw" />
          </div>
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
