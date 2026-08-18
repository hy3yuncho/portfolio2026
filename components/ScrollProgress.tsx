"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Thin reading-progress bar under the fixed nav — case study pages only.
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const show = pathname.startsWith("/work/");

  useEffect(() => {
    if (!show) return;
    let raf = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [show, pathname]);

  if (!show) return null;

  return (
    <div
      aria-hidden
      className="fixed left-0 top-[41px] z-40 h-[3px] w-full pointer-events-none"
    >
      <div
        className="h-full w-full bg-[#fadb68]"
        style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }}
      />
    </div>
  );
}
