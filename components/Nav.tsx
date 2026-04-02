"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { Menu, X } from "lucide-react";

function useStockholmTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const formatted = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Stockholm",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

export default function Nav() {
  const stockholmTime = useStockholmTime();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-[#E5E5E5] bg-[#F7FAFC]"
      style={{
        fontFamily: "Montserrat, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        letterSpacing: "0.28px",
      }}
    >
      {/* Main bar */}
      <nav className="flex h-[41px] items-center justify-between px-6 md:px-12 text-[14px] font-black">
        <Link href="/" data-cursor="link" className="whitespace-nowrap text-outlined hover:opacity-80 transition-opacity">Hailey Yun Cho</Link>

        {/* Desktop centre links */}
        <div data-cursor="link" className="pointer-events-none absolute left-1/2 top-[20.5px] hidden md:flex -translate-x-1/2 -translate-y-1/2 items-center gap-[21px]">
          <Button variant="ghost" size="default" label="About" href="/about" className="pointer-events-auto text-outlined !font-black" />
          <Button variant="ghost" size="default" label="Work" href="/#work" className="pointer-events-auto text-outlined !font-black" />
          <a
            href="https://drive.google.com/file/d/1vuQoy2M-Yfk-CJm5tKvmYIbsKxhgyIhC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto text-outlined !font-black inline-flex items-center justify-center rounded-[2px] whitespace-nowrap transition-colors cursor-pointer font-[family-name:var(--font-montserrat)] bg-transparent hover:bg-[rgba(0,136,255,0.20)] h-[28px] px-[16px] text-[14px]"
          >
            Resume
          </a>
        </div>

        {/* Desktop timezone */}
        <span className="hidden md:block whitespace-nowrap text-outlined" aria-live="polite">
          Europe/Stockholm&nbsp;&nbsp;{stockholmTime}
        </span>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-outlined p-1 -mr-1"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#E5E5E5] bg-[#F7FAFC] px-6 py-4 flex flex-col gap-1">
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-outlined block py-2 hover:bg-[rgba(0,136,255,0.10)] rounded px-2 transition-colors"
          >
            About
          </Link>
          <Link
            href="/#work"
            onClick={() => setMenuOpen(false)}
            className="text-outlined block py-2 hover:bg-[rgba(0,136,255,0.10)] rounded px-2 transition-colors"
          >
            Work
          </Link>
          <a
            href="https://drive.google.com/file/d/1vuQoy2M-Yfk-CJm5tKvmYIbsKxhgyIhC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="text-outlined block py-2 hover:bg-[rgba(0,136,255,0.10)] rounded px-2 transition-colors"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
