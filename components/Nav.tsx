"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";

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
      className="fixed inset-x-0 top-0 z-50 h-[41px] border-b border-[#E5E5E5] bg-[#F7FAFC] px-12"
      style={{
        fontFamily: "Montserrat, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        letterSpacing: "0.28px",
      }}
    >
      <nav className="flex h-full items-center justify-between text-[14px] font-black">
        <Link href="/" data-cursor="link" className="whitespace-nowrap text-outlined hover:opacity-80 transition-opacity">Hailey Yun Cho</Link>

        <div data-cursor="link" className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-[21px]">
          <Button
            variant="ghost"
            size="default"
            label="About"
            href="/about"
            className="pointer-events-auto text-outlined !font-black"
          />
          <Button
            variant="ghost"
            size="default"
            label="Work"
            href="/#work"
            className="pointer-events-auto text-outlined !font-black"
          />
          <a
            href="https://drive.google.com/file/d/1aJJfK6NGMdJuvQa2r4ZCr0tS_pXVf_G8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto text-outlined !font-black inline-flex items-center justify-center rounded-[2px] whitespace-nowrap transition-colors cursor-pointer font-[family-name:var(--font-montserrat)] bg-transparent hover:bg-[rgba(0,136,255,0.20)] h-[28px] px-[16px] text-[14px]"
          >
            Resume
          </a>
        </div>

        <span className="whitespace-nowrap text-outlined" aria-live="polite">
          Europe/Stockholm&nbsp;&nbsp;{stockholmTime}
        </span>
      </nav>
    </header>
  );
}
