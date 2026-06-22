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
import { Users, HeartHandshake, Sparkles, FlaskConical, Stethoscope, PenLine, LayoutList, UserX, Blocks } from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

const LABEL_COLOR = "#549D5B";

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
        {stat && (
          <p className="text-body-3 text-ink-faint leading-[1.6] m-0 border-l-2 border-border pl-3">
            {stat}
          </p>
        )}
      </div>
      {imageSrc
        ? <CaseImage src={imageSrc} alt={imageAlt ?? ""} minHeight={imageHeight} bare />
        : (
          <div
            className="bg-surface-subtle rounded-[10px] border border-border flex items-center justify-center text-ink-faint text-body-3 tracking-[0.04em] text-center px-8"
            style={{ height: imageHeight }}
          >
            IMAGE: {imagePlaceholder}
          </div>
        )
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

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row items-start">

        {/* Left: sticky project meta */}
        <div
          className="w-full md:w-[340px] md:flex-shrink-0"
          style={{ position: "sticky", top: 41, alignSelf: "flex-start", padding: "40px 32px", display: "flex", flexDirection: "column", gap: 24 }}
        >
          <div>
            <h1 className="text-h1 text-ink" style={{ margin: "0 0 8px" }}>
              Nurtura
            </h1>
            <p className="text-body-1 text-ink-secondary" style={{ margin: "0 0 8px" }}>
              Designing emotional safety into an IVF community.
            </p>
            <p className="text-body-2-light text-ink-muted leading-[1.7] m-0">
              52% of IVF patients avoid online forums because the content is too triggering. I didn&apos;t add more features to an already overwhelming landscape. I built emotional guardrails in from the start.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-4">
            <MetaItem label="Timeline" value="Spring 2025 (8 weeks)" />
            <MetaItem label="Role" value="Solo UX/Product Designer" />
            <MetaItem label="Platform" value="iOS mobile app" />
            <MetaItem label="Tools" value="Figma, React Native (Expo)" />
          </div>
        </div>

        {/* Right: cover image stack */}
        <div className="flex-1 flex flex-col gap-1">
          {[
            { src: "/nurtura/nurtura case 1.png", alt: "Nurtura app cover" },
            { src: "/nurtura/case2.png", alt: "Nurtura onboarding flow" },
            { src: "/nurtura/case3.png", alt: "Nurtura community feed" },
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

      {/* ── SIDE NAV + CASE CONTENT ───────────────────────────────────────── */}
      <div className="flex items-start">
        <SideNav sections={NAV_SECTIONS} />

        <div className="flex-1 px-5 py-14 md:px-28 md:py-24 flex flex-col gap-20">

          {/* ── THE BRIEF ── */}
          <FadeIn><div id="the-brief" className="flex flex-col gap-4">
            <SectionHeader
              label="THE BRIEF"
              labelColor={LABEL_COLOR}
              title="I started with a brief. I ended up with a real problem."
            />
            <p className="text-body-2 text-ink-muted leading-[1.8] m-0">
              The brief was from Hyper Island: <em>&ldquo;Create a user-centred vertical social network.&rdquo;</em> 8 weeks, solo, research through to hi-fi prototype.
            </p>
          </div></FadeIn>

          {/* ── THE PROBLEM ── */}
          <FadeIn><div id="the-problem" className="flex flex-col gap-4">
            <SectionHeader
              label="THE PROBLEM"
              labelColor={LABEL_COLOR}
              title="The people who need community most are avoiding it."
              body="I talked to 12 people going through IVF (10 patients, 2 partners) and ran a survey with 35 more. I wanted to hear the real friction: what made them close the app, why they stayed away from forums, what they wished existed."
            />

            <TwoColumnSection
              left={
                <div className="flex flex-col gap-4">
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
          </div></FadeIn>

          {/* ── KEY INSIGHTS ── */}
          <FadeIn><div id="key-insights" className="flex flex-col gap-4">
            <SectionHeader
              label="KEY INSIGHTS"
              labelColor={LABEL_COLOR}
              title="Three findings. Three decisions."
              body="I mapped the full user journey to understand where avoidance starts and where trust breaks down. Three things became structurally clear, and each one became a design decision."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
          </div></FadeIn>

          {/* ── CONCEPT EXPLORATION ── */}
          <FadeIn><div id="concept-exploration" className="flex flex-col gap-4">
            <SectionHeader
              label="CONCEPT EXPLORATION"
              labelColor={LABEL_COLOR}
              title="Three directions, one decision."
              body="With research done, I explored three directions around the three core problems: loneliness and isolation, lack of tailored community, and the emotional information gap throughout the journey."
            />

            <div className="flex flex-col gap-10">
              {[
                {
                  n: 1,
                  icon: <Users size={18} color="#969696" />,
                  title: "Personalised community groups",
                  description: "80% of users already rely on Facebook groups and forums. The problem isn't that people don't use communities. It's that those communities don't meet them where they are. This concept addressed that directly: a forum experience built around IVF, with personalisation by stage, topic, and treatment type.",
                  imageSrc: "/nurtura/concept 1.png",
                  imageAlt: "Concept 1 · Lo-fi sketch: community groups",
                },
                {
                  n: 2,
                  icon: <HeartHandshake size={18} color="#969696" />,
                  title: "1:1 peer matching",
                  description: "Friends and family, however well-meaning, can't provide the support that comes from shared experience. Users wanted to find someone going through something specifically similar, not just someone vaguely supportive. This concept was a matchmaking-style peer connect feature.",
                  imageSrc: "/nurtura/concept 2.png",
                  imageAlt: "Concept 2 · Lo-fi sketch: peer matching",
                },
                {
                  n: 3,
                  icon: <Sparkles size={18} color="#969696" />,
                  title: "Emotional and informational support",
                  description: "Medical information exists. Emotional preparation doesn't. This concept took inspiration from pregnancy tracking apps and reframed them for IVF, personalised by journey stage and focused on emotional readiness alongside clinical detail.",
                  imageSrc: "/nurtura/concept 3.png",
                  imageAlt: "Concept 3 · Lo-fi sketch: emotional support",
                },
              ].map(({ n, icon, title, description, imageSrc, imageAlt }) => (
                <TwoColumnSection
                  key={n}
                  left={
                    <InsightCard
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  }
                  right={<CaseImage src={imageSrc} alt={imageAlt} minHeight={240} />}
                />
              ))}
            </div>

            {/* Decision callout */}
            <div className="bg-surface-subtle border border-border border-l-[3px] border-l-accent rounded-[5px] px-5 py-4 flex flex-col gap-2">
              <span className="text-label" style={{ color: LABEL_COLOR }}>Decision</span>
              <p className="text-body-2 text-ink-secondary font-medium leading-[1.7] m-0">
                Merge all three, with community as the primary surface.
              </p>
              <p className="text-body-2 text-ink-muted leading-[1.7] m-0">
                After sketching all three as low-fidelity screens, separating community, peer connection, and information into three apps was feature sprawl masquerading as product strategy. Each concept addressed a real need, but none of them worked alone. The decision was to merge community and peer matching as the primary surface, with emotional and informational support woven through as contextual depth rather than separate tabs.
              </p>
            </div>

          </div></FadeIn>

          {/* ── SOLUTION ── */}
          <FadeIn><div id="solution" className="flex flex-col gap-4">
            <SectionHeader
              label="SOLUTION"
              labelColor={LABEL_COLOR}
              title="Three problems. Three responses."
              body="Each core decision maps directly to a failure of existing platforms. The navigation test between concepts also reshaped the information architecture: peer connect moved from a top-level tab into a depth layer inside the community."
            />

            <div className="flex flex-col gap-10">
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
            <div className="flex flex-col gap-4">
              <p className="text-body-2 text-ink-muted leading-[1.8] m-0">
                Two supporting flows close the loop. The emotional check-in (S12–S14) is a low-friction daily touchpoint; the reflection result bridges emotional state to community, peer connect, or guide content, making it feel purposeful rather than just logging. The IVF guide (S15–S17) includes a dedicated &ldquo;For Partners&rdquo; section, a perspective existing platforms ignore entirely, and closes with &ldquo;Discuss in community&rdquo; to bridge information back to connection.
              </p>
              <CaseImage src="/nurtura/case5.png" alt="S12–S17 · Emotional Check-in + IVF Guide flows" minHeight={580} bare />
            </div>
          </div></FadeIn>

          {/* ── USER TESTING ── */}
          <FadeIn><div id="user-testing" className="flex flex-col gap-4">
            <SectionHeader
              label="USER TESTING"
              labelColor={LABEL_COLOR}
              title="Users felt safe before seeing a single post."
              body="I tested the hi-fi prototype with 5 users, concept and evaluation testing. The onboarding framing was specifically called out as making users feel validated before they'd seen any community content. That was the moment I knew the core decision had worked."
            />

            <div className="flex flex-col gap-4">
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
          </div></FadeIn>

          {/* ── REFLECTIONS + CTA ── */}
          <FadeIn><div id="reflections" className="flex flex-col gap-4">
            <SectionHeader
              label="REFLECTIONS"
              labelColor={LABEL_COLOR}
              title="What the project taught me."
            />

            <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 md:gap-10 items-start">
              {/* Left: reflection tiles */}
              <div className="flex flex-col gap-4">
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
          </div></FadeIn>

        </div>
      </div>
    </>
  );
}
