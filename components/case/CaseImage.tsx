"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Maximize2, X } from "lucide-react";

interface CaseImageProps {
  src: string;
  alt: string;
  label?: string;
  minHeight?: number;
  maxWidth?: string;
  bare?: boolean;
}

export default function CaseImage({
  src,
  alt,
  label,
  minHeight = 400,
  maxWidth,
  bare = false,
}: CaseImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    // lock page scroll while the lightbox is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <div
        className="w-full h-full flex flex-col items-center"
        style={maxWidth ? { maxWidth, margin: "0 auto" } : undefined}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`View full size: ${alt}`}
          className="group w-full flex-1 relative overflow-hidden block p-0 text-left"
          style={{
            minHeight,
            borderRadius: bare ? 0 : 10,
            border: bare ? "none" : "1px solid #E5E5E5",
            background: bare ? "transparent" : "#F1F2F3",
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, 1060px"
            quality={100}
          />
          {/* Expand affordance — fades in on hover/focus */}
          <span
            className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full bg-ink/70 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            aria-hidden
          >
            <Maximize2 size={14} />
          </span>
        </button>
        {label && (
          <span className="text-label text-ink-faint mt-2">
            {label}
          </span>
        )}
      </div>

      {/* Portal escapes transformed ancestors (FadeIn) that would trap position:fixed */}
      {open && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[9000] flex flex-col items-center justify-center p-4 md:p-10"
          style={{
            background: "rgba(20, 20, 18, 0.92)",
            animation: "page-fade-in 0.25s ease",
          }}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close full-size image"
            className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/25"
          >
            <X size={18} />
          </button>
          <div
            className="relative w-full flex-1 max-w-[1400px]"
            style={{ animation: "lightbox-in 0.3s cubic-bezier(0.22, 1, 0.36, 1)" }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              style={{ objectFit: "contain" }}
              sizes="100vw"
              quality={100}
            />
          </div>
          <span className="text-body-3 text-white/70 mt-3 text-center">
            {label ?? alt}
          </span>
        </div>,
        document.body
      )}
    </>
  );
}
