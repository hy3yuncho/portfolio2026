/**
 * Shared Nurtura case study content — layout-agnostic.
 * Each variant page wraps this with its own hero + nav structure.
 */

import Image from "next/image";
import SectionHeader from "@/components/case/SectionHeader";
import InsightCard from "@/components/case/InsightCard";
import TwoColumnSection from "@/components/case/TwoColumnSection";
import ArrowInsightCard from "@/components/case/ArrowInsightCard";
import CaseImage from "@/components/case/CaseImage";
import CaseCTA from "@/components/CaseCTA";
import {
  Users,
  HeartHandshake,
  Sparkles,
  FlaskConical,
  Stethoscope,
  PenLine,
  LayoutList,
  UserX,
  Blocks,
} from "lucide-react";

const LABEL_COLOR = "#549D5B";

interface NurturaContentProps {
  /** Pass "numbered" to render large section index numbers (magazine variant) */
  variant?: "default" | "numbered";
  /** Override content padding / max-width — variants can tune this */
  contentClass?: string;
}

function SectionNum({ n }: { n: string }) {
  return (
    <span
      className="text-[11px] font-medium text-[#C5C5C5] tabular-nums block mb-1"
      style={{ fontFamily: "var(--font-montserrat)", letterSpacing: "0.08em" }}
    >
      {n}
    </span>
  );
}

export default function NurturaContent({
  variant = "default",
  contentClass = "",
}: NurturaContentProps) {
  const numbered = variant === "numbered";
  const sectionBase = `flex flex-col gap-6 ${contentClass}`;

  return (
    <div className="flex flex-col gap-24">

      {/* ── THE BRIEF ── */}
      <div id="the-brief" className={sectionBase}>
        {numbered && <SectionNum n="01" />}
        <SectionHeader
          label="THE BRIEF"
          labelColor={LABEL_COLOR}
          title="I started with a brief. I ended up with a real problem."
        />
        <p className="text-body-2 text-ink-muted leading-[1.8] m-0">
          The brief was from Hyper Island: 8 weeks, solo, end-to-end:{" "}
          <em>"Create a user-centred vertical social network."</em> The scope
          covered the full design process: research, define, ideate, prototype.
          Deliverable was a hi-fi prototype with a documented design rationale.
          No engineering handoff. The goal was design thinking depth, not
          production readiness.
        </p>
        <p className="text-body-2 text-ink-muted leading-[1.8] m-0">
          I ran the full process solo: 12 interviews, a 35-person survey,
          affinity mapping, three concept directions, navigation testing, lo-fi
          and hi-fi iterations, and usability testing.
        </p>
      </div>

      {/* ── THE PROBLEM ── */}
      <div id="the-problem" className={sectionBase}>
        {numbered && <SectionNum n="02" />}
        <SectionHeader
          label="THE PROBLEM"
          labelColor={LABEL_COLOR}
          title="The people who need community most are avoiding it."
          body="To understand what people going through IVF actually needed, not just what they said they needed, I conducted 11 semi-structured interviews with 12 participants alongside a 35-person survey. I wanted to hear the real friction: what made them close the app, why they stayed away from forums, what they wished existed."
        />
        <TwoColumnSection
          left={
            <div className="flex flex-col gap-3">
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
            <CaseImage
              src="/nurtura/affinity.png"
              alt="Affinity map · Themes clustered from interview transcripts"
              minHeight={340}
            />
          }
        />
      </div>

      {/* ── KEY INSIGHTS ── */}
      <div id="key-insights" className={sectionBase}>
        {numbered && <SectionNum n="03" />}
        <SectionHeader
          label="KEY INSIGHTS"
          labelColor={LABEL_COLOR}
          title="Three findings. Three decisions."
          body="I mapped the full user journey to understand where avoidance starts and where trust breaks down. Three things became structurally clear, and each one became a design decision."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        <CaseImage
          src="/nurtura/ujm.png"
          alt="Journey map · Where confidence drops, where decisions happen, where users disengage"
          minHeight={320}
        />
      </div>

      {/* ── CONCEPT EXPLORATION ── */}
      <div id="concept-exploration" className={sectionBase}>
        {numbered && <SectionNum n="04" />}
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
              description:
                "80% of users already rely on Facebook groups and forums. The problem isn't that people don't use communities. It's that those communities don't meet them where they are. This concept addressed that directly: a forum experience built around IVF, with personalisation by stage, topic, and treatment type.",
              imageSrc: "/nurtura/concept 1.png",
              imageAlt: "Concept 1 · Lo-fi sketch: community groups",
            },
            {
              n: 2,
              icon: <HeartHandshake size={18} color="#969696" />,
              title: "1:1 peer matching",
              description:
                "Friends and family, however well-meaning, can't provide the support that comes from shared experience. Users wanted to find someone going through something specifically similar, not just someone vaguely supportive. This concept was a matchmaking-style peer connect feature.",
              imageSrc: "/nurtura/concept 2.png",
              imageAlt: "Concept 2 · Lo-fi sketch: peer matching",
            },
            {
              n: 3,
              icon: <Sparkles size={18} color="#969696" />,
              title: "Emotional and informational support",
              description:
                "Medical information exists. Emotional preparation doesn't. This concept took inspiration from pregnancy tracking apps and reframed them for IVF, personalised by journey stage and focused on emotional readiness alongside clinical detail.",
              imageSrc: "/nurtura/concept 3.png",
              imageAlt: "Concept 3 · Lo-fi sketch: emotional support",
            },
          ].map(({ n, icon, title, description, imageSrc, imageAlt }) => (
            <TwoColumnSection
              key={n}
              left={<InsightCard icon={icon} title={title} description={description} />}
              right={<CaseImage src={imageSrc} alt={imageAlt} minHeight={240} />}
            />
          ))}
        </div>
        <div className="bg-surface-raised border border-border border-l-[3px] border-l-accent rounded-[5px] px-6 py-5 flex flex-col gap-2">
          <span className="text-label" style={{ color: LABEL_COLOR }}>
            Decision
          </span>
          <p className="text-body-2 text-ink-secondary font-medium leading-[1.7] m-0">
            Merge all three, with community as the primary surface.
          </p>
          <p className="text-body-2 text-ink-muted leading-[1.7] m-0">
            After sketching all three as low-fidelity screens, separating community, peer
            connection, and information into three apps was feature sprawl masquerading as
            product strategy. Each concept addressed a real need, but none of them worked
            alone. The decision was to merge community and peer matching as the primary
            surface, with emotional and informational support woven through as contextual
            depth rather than separate tabs.
          </p>
        </div>
      </div>

      {/* ── SOLUTION ── */}
      <div id="solution" className={sectionBase}>
        {numbered && <SectionNum n="05" />}
        <SectionHeader
          label="SOLUTION"
          labelColor={LABEL_COLOR}
          title="Three problems. Three responses."
          body="Each core decision maps directly to a failure of existing platforms. The navigation test between concepts also reshaped the information architecture: peer connect moved from a top-level tab into a depth layer inside the community."
        />
        <div className="flex flex-col gap-12">
          {[
            {
              problemText:
                "Users hit an unfiltered feed before setting any preferences and leave. Settings-first design assumes users will return to configure. They don't.",
              solutionText:
                "Onboarding captures content preferences, journey stage, and anonymity level before users ever see the feed. By the time they reach the community, it's already filtered for them. 'You can change this anytime' reduces commitment anxiety: the framing is control, not protection.",
              imageSrc: "/nurtura/case2.png",
              imageAlt: "S01–S05 · Onboarding flow + Home Dashboard",
            },
            {
              problemText:
                "Existing platforms force a choice: share your identity or get irrelevant content. Neither is acceptable. Both should be possible at once.",
              solutionText:
                "Filter chips carry over directly from onboarding, giving context without exposure. Community archetypes replace real names. 'Sort by most supportive' surfaces empathetic content first. Users go deeper from any post without leaving the feed.",
              imageSrc: "/nurtura/case3.png",
              imageAlt: "S06–S08 · Community Feed + Filter + Post Detail",
            },
            {
              problemText:
                "Standard peer matching uses location or interests. For IVF users, that's the wrong signal. 'Someone nearby' isn't what they're looking for.",
              solutionText:
                "Match cards make the logic visible: journey stage, treatment round, support type. First messages are anonymous, with suggested prompts to remove blank-page anxiety. Users move toward identity at their own pace.",
              imageSrc: "/nurtura/case4.png",
              imageAlt: "S09–S11 · Peer Connect flow",
            },
          ].map((pair, i) => (
            <div key={i} className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <span className="text-label" style={{ color: "#E05A3A" }}>Problem</span>
                  <p className="text-body-2 text-ink-muted leading-[1.7] m-0">{pair.problemText}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-label" style={{ color: LABEL_COLOR }}>Solution</span>
                  <p className="text-body-2 text-ink-muted leading-[1.7] m-0">{pair.solutionText}</p>
                </div>
              </div>
              <CaseImage src={pair.imageSrc} alt={pair.imageAlt} minHeight={580} bare />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-body-2 text-ink-muted leading-[1.8] m-0">
            Two supporting flows close the loop. The emotional check-in (S12–S14) is a
            low-friction daily touchpoint; the reflection result bridges emotional state to
            community, peer connect, or guide content, making it feel purposeful rather than
            just logging. The IVF guide (S15–S17) includes a dedicated &ldquo;For
            Partners&rdquo; section, a perspective existing platforms ignore entirely, and
            closes with &ldquo;Discuss in community&rdquo; to bridge information back to
            connection.
          </p>
          <CaseImage
            src="/nurtura/case5.png"
            alt="S12–S17 · Emotional Check-in + IVF Guide flows"
            minHeight={580}
            bare
          />
        </div>
      </div>

      {/* ── USER TESTING ── */}
      <div id="user-testing" className={sectionBase}>
        {numbered && <SectionNum n="06" />}
        <SectionHeader
          label="USER TESTING"
          labelColor={LABEL_COLOR}
          title="Users felt safe before seeing a single post."
          body="I tested the hi-fi prototype with 5 users, concept and evaluation testing. The onboarding framing was specifically called out as making users feel validated before they'd seen any community content."
        />
        <div className="flex flex-col gap-3">
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
      <div id="reflections" className={sectionBase}>
        {numbered && <SectionNum n="07" />}
        <SectionHeader
          label="REFLECTIONS"
          labelColor={LABEL_COLOR}
          title="What I'd do differently."
        />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 md:gap-10 items-start">
          <div className="flex flex-col gap-3">
            <InsightCard
              icon={<FlaskConical size={18} color="#969696" />}
              title="Run usability testing earlier on onboarding"
              description="I validated the concept direction first and iterated on hi-fi screens before doing task-based testing on onboarding. Earlier usability testing would have surfaced friction in the content preference flow faster."
            />
            <InsightCard
              icon={<Stethoscope size={18} color="#969696" />}
              title="Involve a fertility counsellor from the start"
              description="The emotional safety framing was research-led, but the clinical accuracy of the IVF guide content wasn't validated by a professional. For a health-adjacent product, that's a gap."
            />
            <InsightCard
              icon={<PenLine size={18} color="#969696" />}
              title="The most impactful decisions were copy choices"
              description="'You can change this anytime.' 'Others felt this way too this week.' These lines carry more emotional weight than any visual decision I made."
            />
          </div>
          <CaseCTA />
        </div>
      </div>

    </div>
  );
}
