"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type CursorState = "default" | "view" | "coming-soon" | "link";

export default function CustomCursor() {
  const [state, setState] = useState<CursorState>("default");
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/work/");

  useEffect(() => {
    if (isProjectPage) setState("default");
  }, [isProjectPage]);

  // Fix 1: Hide default cursor immediately on mount
  useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  useEffect(() => {
    // Fix 2: Direct position tracking — no lerp, no rAF loop
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const onOver = (e: MouseEvent) => {
      if (isProjectPage) return;
      const el = (e.target as Element).closest("[data-cursor]");
      if (el) setState((el.getAttribute("data-cursor") as CursorState) ?? "default");
    };

    const onOut = (e: MouseEvent) => {
      if (isProjectPage) return;
      const el = (e.target as Element).closest("[data-cursor]");
      if (el && !el.contains(e.relatedTarget as Node)) setState("default");
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [isProjectPage]);

  const showPill = state === "view" || state === "coming-soon";
  const pillBg = state === "coming-soon" ? "#F4673A" : "#fadb68";
  const pillColor = state === "coming-soon" ? "#ffffff" : "#141412";
  const pillText = state === "coming-soon" ? "COMING SOON" : "VIEW";

  const dotSize = state === "link" ? 24 : 12;
  const dotOpacity = state === "link" ? 0.5 : 1;

  return (
    <>
      {/* Always-visible dot */}
      <div
        style={{
          position: "fixed",
          width: dotSize,
          height: dotSize,
          background: "#fadb68",
          opacity: dotOpacity,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          left: cursorPos.x,
          top: cursorPos.y,
          transform: "translate(-50%, -50%)",
          // Only transition size/opacity — NOT position
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.2s ease",
        }}
      />

      {/* Pill label — appears next to dot on view/coming-soon */}
      <div
        style={{
          position: "fixed",
          background: pillBg,
          color: pillColor,
          borderRadius: 100,
          padding: "8px 16px",
          pointerEvents: "none",
          zIndex: 9999,
          fontFamily: "var(--font-montserrat)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.08em",
          whiteSpace: "nowrap",
          userSelect: "none",
          left: cursorPos.x + 12,
          top: cursorPos.y - 12,
          opacity: showPill ? 1 : 0,
          transform: `scale(${showPill ? 1 : 0.7})`,
          transformOrigin: "left center",
          // Only transition appearance — NOT position
          transition: "opacity 0.2s ease, transform 0.2s ease, background 0.2s ease, color 0.2s ease",
        }}
      >
        {pillText}
      </div>
    </>
  );
}
