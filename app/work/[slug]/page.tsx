"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SideNav from "@/components/SideNav";
import { getCaseBySlug } from "@/data/cases";

const LABEL_STYLE = {
  fontSize: 12, fontWeight: 400, textTransform: "uppercase" as const,
  letterSpacing: "0.08em", margin: 0, fontFamily: "var(--font-montserrat)",
};
const VALUE_STYLE = {
  fontSize: 14, fontWeight: 300, marginTop: 8, marginBottom: 0,
  fontFamily: "var(--font-dm-sans)",
};
const CHECKERBOARD = "repeating-conic-gradient(#e0e0e0 0% 25%, #f5f5f5 0% 50%) 0 0 / 20px 20px";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getCaseBySlug(slug);


  if (!project) {
    notFound();
  }

  const { name, tagline, about, role, timeline, team, tools, coverImages, sections, prevProject, nextProject } = project;

  return (
    <>
      {/* PROJECT LANDING SECTION */}
      <div style={{ display: "flex", alignItems: "flex-start" }}>

        {/* Left: sticky case description */}
        <div
          style={{
            position: "sticky", top: 41, width: 340, flexShrink: 0,
            alignSelf: "flex-start", padding: "32px 32px",
          }}
        >
          <h1 style={{ fontSize: 24, fontWeight: 500, fontStyle: "italic", margin: 0, fontFamily: "var(--font-ibm-plex-serif)" }}>
            {name}
          </h1>
          <p style={{ fontSize: 16, fontWeight: 400, marginTop: 4, marginBottom: 0, fontFamily: "var(--font-dm-sans)" }}>
            {tagline}
          </p>

          <div style={{ marginTop: 24 }}>
            <p style={LABEL_STYLE}>About</p>
            <p style={{ ...VALUE_STYLE, marginTop: 8 }}>{about}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 24px", marginTop: 24 }}>
            <div>
              <p style={LABEL_STYLE}>My Role</p>
              <p style={{ ...VALUE_STYLE, marginTop: 8 }}>{role}</p>
            </div>
            <div>
              <p style={LABEL_STYLE}>Timeline</p>
              <p style={{ ...VALUE_STYLE, marginTop: 8 }}>{timeline}</p>
            </div>
            <div>
              <p style={LABEL_STYLE}>Team</p>
              {team.map((member) => (
                <p key={member} style={{ fontSize: 14, fontWeight: 300, marginTop: member === team[0] ? 8 : 0, marginBottom: 0, fontFamily: "var(--font-dm-sans)" }}>
                  {member}
                </p>
              ))}
            </div>
            <div>
              <p style={LABEL_STYLE}>Tools</p>
              {tools.map((tool) => (
                <p key={tool} style={{ fontSize: 14, fontWeight: 300, marginTop: tool === tools[0] ? 8 : 0, marginBottom: 0, fontFamily: "var(--font-dm-sans)" }}>
                  {tool}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Right: scrollable image area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
          {coverImages.length > 0 ? (
            coverImages.map((src, i) => (
              <div key={i} style={{ position: "relative", height: i === 0 ? "100vh" : "80vh" }}>
                <Image src={src} alt={`${name} cover ${i + 1}`} fill style={{ objectFit: "cover" }} sizes="100vw" />
              </div>
            ))
          ) : (
            <>
              <div style={{ height: "100vh", background: CHECKERBOARD }} />
              <div style={{ height: "80vh", background: CHECKERBOARD }} />
            </>
          )}
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #E8E8E8", margin: 0 }} />

      {/* SIDE NAV + CASE CONTENT */}
      <div style={{ display: "flex", alignItems: "flex-start", paddingTop: 80 }}>
        <SideNav />

        <div style={{ flex: 1, padding: "48px 64px", display: "flex", flexDirection: "column", gap: 80 }}>
          {sections.map((section) => (
            <div key={section.id} id={section.id} style={{ minHeight: 400, padding: 32 }}>
              <p style={{ ...LABEL_STYLE, color: "#999" }}>{section.phase}</p>
              <h2 style={{ fontSize: 22, fontWeight: 500, fontStyle: "italic", marginTop: 8, marginBottom: 16, fontFamily: "var(--font-ibm-plex-serif)" }}>
                {section.title}
              </h2>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.7, fontFamily: "var(--font-dm-sans)", whiteSpace: "pre-line" }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PREVIOUS / NEXT */}
      <div style={{
        display: "flex", justifyContent: "center", gap: 165,
        padding: "40px 0", borderTop: "1px solid #E5E5E5", background: "#F7FAFC",
      }}>
        {/* Previous */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}>
          {prevProject ? (
            <>
              <div style={{ position: "relative", width: 165, height: 100, borderRadius: 4, overflow: "hidden", flexShrink: 0 }}>
                <Image src={prevProject.thumbnail} alt={prevProject.name} fill style={{ objectFit: "cover" }} sizes="100vw" />
              </div>
              <Link href={`/work/${prevProject.slug}`} style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 14, fontFamily: "var(--font-montserrat)", fontWeight: 400,
                background: "#E5E5E5", borderRadius: 2, padding: "6px 12px",
                textDecoration: "none", color: "#141412",
              }}>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8L10 4" stroke="#141412" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Previous Project
              </Link>
            </>
          ) : (
            <div style={{ width: 165, height: 100, borderRadius: 4, background: CHECKERBOARD }} />
          )}
        </div>

        {/* Current */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: 165, height: 100, borderRadius: 4, overflow: "hidden" }}>
            {coverImages[0] ? (
              <Image src={coverImages[0]} alt={name} fill style={{ objectFit: "cover" }} sizes="100vw" />
            ) : (
              <div style={{ width: "100%", height: "100%", background: CHECKERBOARD }} />
            )}
          </div>
        </div>

        {/* Next */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
          {nextProject ? (
            <>
              <div style={{ position: "relative", width: 165, height: 100, borderRadius: 4, overflow: "hidden", flexShrink: 0 }}>
                <Image src={nextProject.thumbnail} alt={nextProject.name} fill style={{ objectFit: "cover" }} sizes="100vw" />
              </div>
              <Link href={`/work/${nextProject.slug}`} style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 14, fontFamily: "var(--font-montserrat)", fontWeight: 400,
                background: "#E5E5E5", borderRadius: 2, padding: "6px 12px",
                textDecoration: "none", color: "#141412",
              }}>
                Next Project
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="#141412" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </>
          ) : (
            <div style={{ width: 165, height: 100, borderRadius: 4, background: CHECKERBOARD }} />
          )}
        </div>
      </div>
    </>
  );
}
