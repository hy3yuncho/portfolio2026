"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SideNav from "@/components/SideNav";
import SectionHeader from "@/components/case/SectionHeader";
import InsightCard from "@/components/case/InsightCard";
import CaseCTA from "@/components/CaseCTA";
import { ScanSearch, LayoutList, ShieldCheck, Play, Pause } from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

const FONT_DISPLAY = "var(--font-montserrat)";
const LABEL_COLOR = "#E05A3A";
const IMAGE_SIZES = "(max-width: 768px) 100vw, 530px";
// These single-image steps render at (almost) the full content column width,
// which isn't capped — so the browser needs to know it can request a large image.
const PROCESS_IMAGE_SIZES = "100vw";
const DESIGN_IMAGE_SIZES = "(max-width: 768px) 100vw, 400px";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPausedRef = useRef(false);
  const seekingRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // The loadedmetadata event can fire before React attaches its listener
    // (autoplay video loads fast), so check for already-available duration too.
    if (video.duration && !Number.isNaN(video.duration)) {
      setDuration(video.duration);
    }

    // Browsers pause off-screen autoplaying video and never resume it on their own —
    // resume/pause manually as it scrolls in and out of view. Respect an explicit
    // user pause (via the button below) instead of overriding it on scroll.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!userPausedRef.current) video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPausedRef.current = false;
      video.play().catch(() => {});
    } else {
      userPausedRef.current = true;
      video.pause();
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const value = Number(e.target.value);
    video.currentTime = value;
    setCurrentTime(value);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="relative group">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        aria-label={label}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => {
          if (!seekingRef.current) setCurrentTime(e.currentTarget.currentTime);
        }}
        style={{ width: "100%", height: "auto", display: "block", borderRadius: 10 }}
      >
        <source src={src} type="video/mp4" />
        <source src={src} type="video/quicktime" />
      </video>
      {/* WCAG 2.2.2 (Pause, Stop, Hide) — this autoplays and loops indefinitely,
          so it needs reachable controls to stop and scrub it. Hidden until hover/focus
          to match the expand-affordance pattern already used on CaseImage. */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center gap-2 px-3 pb-3 pt-8 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)", borderRadius: "0 0 10px 10px" }}
      >
        <input
          type="range"
          className="case-video-seek flex-1"
          style={{ "--seek-progress": `${progress}%` } as React.CSSProperties}
          min={0}
          max={duration || 0}
          step={0.01}
          value={currentTime}
          onChange={handleSeek}
          onPointerDown={() => { seekingRef.current = true; }}
          onPointerUp={() => { seekingRef.current = false; }}
          aria-label={`Seek ${label}`}
        />
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? `Pause ${label}` : `Play ${label}`}
          className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full bg-ink/70 text-white"
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        </button>
      </div>
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

type CaseMedia = { src: string; type: "video" | "image"; width?: number; height?: number };

const PROCESS_STEPS: {
  step: string;
  text: string;
  media: CaseMedia[];
}[] = [
  {
    step: "AUDIT",
    text: "Mapped every table instance across the product. Ran a WCAG audit to log contrast failures, missing focus states, and keyboard navigation gaps. This gave the redesign a concrete list of failures to address, not just a general brief to make it better.",
    media: [{ src: "/detectify/table audit excel.mov", type: "video" }],
  },
  {
    step: "DEFINE",
    text: "Set design principles before touching Figma: scannability first, progressive disclosure for dense data, accessibility as a non-negotiable baseline. Aligned early with engineering on what could and couldn't ship, so the redesign was constrained by reality, not just ambition.",
    media: [{ src: "/detectify/table define.png", type: "image", width: 13824, height: 7808 }],
  },
  {
    step: "DESIGN",
    text: "Built a component system covering every state: default, hover, selected, loading, empty, error. Included interaction design for drag-and-drop column reordering. Used Figma Make to build an interactive prototype showing live state changes, not just static screens.",
    media: [{ src: "/detectify/table design.png", type: "image", width: 9789, height: 9024 }],
  },
  {
    step: "ITERATION",
    text: "Ran a design critique with engineers, product, and sales. Presented the interview insights, redesign scope, and first prototype together. The decisions were legible, not just the visuals.",
    media: [{ src: "/detectify/table iteration.png", type: "image", width: 14842, height: 6750 }],
  },
];

const PROBLEM_BEFORE_IMAGES: CaseMedia[] = [
  { src: "/detectify/table before.png", type: "image", width: 3627, height: 1668 },
  { src: "/detectify/table before 2.png", type: "image", width: 3624, height: 1722 },
  { src: "/detectify/table before 3.png", type: "image", width: 3624, height: 1902 },
];

// ─── Page ────────────────────────────────────────────────────────────────────

const PROBLEM_INSIGHTS = [
  {
    icon: <ScanSearch size={18} color="#767676" />,
    title: "No visual hierarchy",
    description: "Every row looked the same. Users couldn't tell at a glance what needed their attention and had to read every single row to find out. Scanning was slow. Mistakes happened.",
  },
  {
    icon: <LayoutList size={18} color="#767676" />,
    title: "Inconsistent interactions across the product",
    description: "Filters and sorting worked differently depending on which table you were in. Users had to relearn the same UI in different parts of the product. No pattern ever stuck.",
  },
  {
    icon: <ShieldCheck size={18} color="#767676" />,
    title: "Accessibility failures in a product that sells to compliance teams",
    description: "Column headers disappeared on scroll, so users lost track of what each column meant. The horizontal scrollbar sat at the very bottom of the table (not the screen), so to scroll sideways, users first had to scroll through hundreds of rows to reach it. Both were WCAG failures. In a product Detectify sells to security and compliance teams, that's not just a UX problem. It's a credibility problem.",
  },
];

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
              <div className="flex flex-col gap-6 md:gap-8">
                {PROBLEM_INSIGHTS.map((insight, i) => {
                  const image = PROBLEM_BEFORE_IMAGES[i];
                  return (
                    <div key={insight.title} className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 md:gap-10 items-start">
                      <InsightCard {...insight} />
                      {image && (
                        <Image
                          src={image.src}
                          alt={`Detectify table before redesign, view ${i + 1} of ${PROBLEM_BEFORE_IMAGES.length}`}
                          width={image.width ?? 1194}
                          height={image.height ?? 792}
                          quality={100}
                          sizes={IMAGE_SIZES}
                          style={{ width: "100%", height: "auto", display: "block", borderRadius: 10 }}
                        />
                      )}
                    </div>
                  );
                })}
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
                <div className="flex flex-col gap-14">
                  {PROCESS_STEPS.map(({ step, text, media }) => (
                    <div key={step} className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <span className="text-label" style={{ color: LABEL_COLOR }}>{step}</span>
                        <p className="text-body-2 text-ink-muted leading-[1.8] m-0">{text}</p>
                      </div>
                      <div className={media.length > 1 ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : undefined}>
                        {media.map(({ src, type, width, height }, i) =>
                          type === "video" ? (
                            <CaseVideo key={src} src={src} label={`${step} process documentation`} />
                          ) : (
                            <Image
                              key={src}
                              src={src}
                              alt={media.length > 1 ? `${step} process documentation, image ${i + 1} of ${media.length}` : `${step} process documentation`}
                              width={width ?? 800}
                              height={height ?? 600}
                              quality={100}
                              sizes={media.length > 1 ? DESIGN_IMAGE_SIZES : PROCESS_IMAGE_SIZES}
                              style={{ width: "100%", height: "auto", display: "block", borderRadius: 10 }}
                            />
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div></FadeIn>

              {/* ── SOLUTION ── */}
              <FadeIn><div id="solution" className="flex flex-col gap-4">
                <SectionHeader
                  label="SOLUTION"
                  labelColor={LABEL_COLOR}
                  title="Three problems, three decisions."
                />
                <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 md:gap-10 items-center">
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
                  The redesigned table became the design system standard for all data views in the product. WCAG AA compliance was achieved at the component level. Engineering handoff got faster once interactive prototypes replaced static annotated screens.
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
