"use client";

import { useEffect, useState } from "react";
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
        <span className="whitespace-nowrap text-outlined">Hailey Yun Cho</span>

        <div className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-[21px]">
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
          <Button
            variant="ghost"
            size="default"
            label="Resume"
            href="#"
            className="pointer-events-auto text-outlined !font-black"
          />
        </div>

        <span className="whitespace-nowrap text-outlined" aria-live="polite">
          Europe/Stockholm&nbsp;&nbsp;{stockholmTime}
        </span>
      </nav>
    </header>
  );
}
