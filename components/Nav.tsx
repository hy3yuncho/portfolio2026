"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-[#E5E5E5] bg-[#F7FAFC] w-full"
      style={{
        fontFamily: "Montserrat, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        letterSpacing: "0.28px",
      }}
    >
      <nav className="flex h-[41px] items-center justify-between px-4 md:px-12 w-full">
        {/* Name — always left */}
        <Link
          href="/"
          data-cursor="link"
          className="shrink-0 text-outlined hover:opacity-80 transition-opacity font-black text-[14px]"
        >
          Hailey Yun Cho
        </Link>

        {/* Links — mobile: inline right | desktop: absolute centre */}
        <div className="flex items-center gap-3 md:absolute md:left-1/2 md:top-[20.5px] md:-translate-x-1/2 md:-translate-y-1/2 md:gap-[21px]">
          <Link
            href="/about"
            data-cursor="link"
            className="text-outlined font-black text-[13px] md:text-[14px] hover:opacity-70 transition-opacity uppercase"
          >
            About
          </Link>
          <Link
            href="/#work"
            data-cursor="link"
            className="text-outlined font-black text-[13px] md:text-[14px] hover:opacity-70 transition-opacity uppercase"
          >
            Work
          </Link>
          <a
            href="https://drive.google.com/file/d/1_YIKgDu14n9s1XxqmHR_wZT6BhSv6OGm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            className="text-outlined font-black text-[13px] md:text-[14px] hover:opacity-70 transition-opacity uppercase"
          >
            Resume
          </a>
        </div>

        {/* Timezone — desktop only, right */}
        <span
          className="hidden md:block whitespace-nowrap text-outlined font-black text-[14px]"
          aria-live="polite"
        >
          Europe/Stockholm&nbsp;&nbsp;{stockholmTime}
        </span>
      </nav>
    </header>
  );
}
