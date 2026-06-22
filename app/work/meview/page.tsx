"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SideNav from "@/components/SideNav";
import SectionHeader from "@/components/case/SectionHeader";
import InsightCard from "@/components/case/InsightCard";
import TwoColumnSection from "@/components/case/TwoColumnSection";
import ArrowInsightCard from "@/components/case/ArrowInsightCard";
import CaseImage from "@/components/case/CaseImage";
import CaseCTA from "@/components/CaseCTA";
import { MessageSquareDashed, LayoutTemplate, ShieldAlert, UserRoundX, Reply, HelpCircle, Bell } from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

const LABEL_COLOR = "#1176C5";

// ─── Sub-components ───────────────────────────────────────────────────────────

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-label text-ink-faint">{label}</span>
      <span className="text-body-2-light text-ink-secondary">{value}</span>
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
    <div className="flex flex-col gap-10">
      <div className="bg-surface-subtle rounded-[5px] p-5 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <span className="text-label" style={{ color: "#E05A3A" }}>Problem</span>
          <p className="text-body-2 text-ink-muted leading-[1.7] m-0">{problemText}</p>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-label" style={{ color: LABEL_COLOR }}>Solution</span>
          <p className="text-body-2 text-ink leading-[1.7] m-0 font-medium">{solutionText}</p>
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
              MeView
            </h1>
            <p className="text-body-1 text-ink-secondary" style={{ margin: "0 0 8px" }}>
              A peer feedback app for Gen Z, built around the person giving feedback, not just the person asking for it.
            </p>
            <p className="text-body-2-light text-ink-muted leading-[1.7] m-0">
              A mobile peer feedback app for Gen Z, structured by project and skill, anonymous by default, and designed around the person who has to respond.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-4">
            <MetaItem label="Timeline" value="3 months" />
            <MetaItem label="Role" value="Product Designer, UI Designer" />
            <MetaItem label="Platform" value="Mobile: iOS / Android" />
            <MetaItem label="Tools" value="Figma" />
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-label text-ink-faint">Team</span>
            <div className="flex flex-col gap-1">
              {["Project Manager", "Graphic Designer", "Front-end Developer", "Back-end Developer"].map((m) => (
                <span key={m} className="text-body-2-light text-ink-secondary">{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: cover image stack */}
        <div className="flex-1 flex flex-col gap-1">
          {[1, 2, 3].map((n) => (
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

      {/* ── SIDE NAV + CASE CONTENT ───────────────────────────────────────── */}
      <div className="flex items-start">
        <SideNav sections={NAV_SECTIONS} />

        <div className="flex-1 px-5 py-14 md:px-28 md:py-24 flex flex-col gap-20">

          {/* ── OVERVIEW ── */}
          <FadeIn><div id="overview" className="flex flex-col gap-4">
            <SectionHeader
              label="OVERVIEW"
              labelColor={LABEL_COLOR}
              title="Turning how others see you into something you can actually use"
            />
            <p className="text-body-2 text-ink-muted leading-[1.8] m-0">
              MeView is a mobile peer feedback service that lets Gen Z collect, organise, and visualise anonymous reviews from co-workers and friends, structured by project and competency. The product ran for 3 months as a side project.
            </p>
            <p className="text-body-2 text-ink-muted leading-[1.8] m-0">
              Product and UI design was my full scope: research, IA, UI, and design system, working alongside a PM, a graphic designer, and two developers. We chose interviews over surveys to understand the emotional context: not just what people do around feedback, but how it feels to ask for it and give it.
            </p>
          </div></FadeIn>

          {/* ── CONTEXT ── */}
          <FadeIn><div id="context" className="flex flex-col gap-4">
            <SectionHeader
              label="CONTEXT"
              labelColor={LABEL_COLOR}
              title="A problem I knew firsthand."
            />
            <p className="text-body-2 text-ink-muted leading-[1.8] m-0">
              Reflecting on my own growth, I realised I had no structured way to understand how others perceived me. I&apos;d only ever heard my own answer. Peer feedback existed, but in scattered DMs, verbal comments, vague encouragement. Nothing you could actually act on. I found a few others who felt the same way, and we built MeView.
            </p>
          </div></FadeIn>

          {/* ── THE PROBLEM ── */}
          <FadeIn><div id="the-problem" className="flex flex-col gap-4">
            <SectionHeader
              label="THE PROBLEM"
              labelColor={LABEL_COLOR}
              title="People want peer feedback. They have no good way to get it."
              body="Existing tools sit at two extremes: LinkedIn recommendations are too formal, DMs and verbal comments are too informal. Nothing in between is designed for self-exploration."
            />
            <TwoColumnSection
              left={
                <div className="flex flex-col gap-4">
                  <InsightCard
                    icon={<MessageSquareDashed size={18} color="#969696" />}
                    title="LinkedIn is too formal. DMs are too casual. Nothing in between."
                    description="Existing tools sit at two extremes: referrals designed for public profiles, or informal comments that disappear. Nothing was built for honest, structured self-exploration."
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
          </div></FadeIn>

          {/* ── KEY INSIGHTS ── */}
          <FadeIn><div id="key-insights" className="flex flex-col gap-4">
            <SectionHeader
              label="KEY INSIGHTS"
              labelColor={LABEL_COLOR}
              title="Two findings. Two decisions."
              body="10 interviews: 4 students, 6 job seekers. I wanted to understand the emotional context. Not just what people do around feedback, but how it feels to ask for it."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
          </div></FadeIn>

          {/* ── SOLUTION ── */}
          <FadeIn><div id="solution" className="flex flex-col gap-4">
            <SectionHeader
              label="SOLUTION"
              labelColor={LABEL_COLOR}
              title="The hardest part wasn't the requester flow. It was the responder's."
              body="Every decision came back to one question: will the responder actually follow through?"
            />
            <div className="flex flex-col gap-10">
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
          </div></FadeIn>

          {/* ── REFLECTION + CTA ── */}
          <FadeIn><div id="reflection" className="flex flex-col gap-4">
            <SectionHeader
              label="REFLECTION"
              labelColor={LABEL_COLOR}
              title="What this taught me."
            />
            <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 md:gap-10 items-start">
              <div className="flex flex-col gap-4">
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

              <CaseCTA
                title="Want to see the prototype or talk through the process?"
                body="The full prototype, research synthesis, and design system are available on request."
              />
            </div>
          </div></FadeIn>

        </div>
      </div>
    </>
  );
}
