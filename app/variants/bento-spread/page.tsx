import Link from "next/link";
import Image from "next/image";

// Each cell has a distinct colour accent pulled from the brand palette
const HERO = {
  name: "Nurtura",
  descriptor: "Designing emotional safety into an IVF community.",
  type: "Personal project · 2025 · Mobile",
  href: "/work/nurtura",
  image: "/nurtura/nurtura.png",
  bg: "#E8EFD8",          // soft sage
  comingSoon: false,
};

const SECONDARY = [
  {
    name: "MeView",
    descriptor: "Feedback exchange made honest by anonymity, and useful by structure.",
    type: "Personal project · 2024 · Mobile",
    href: "/work/meview",
    image: "/meview/meview.png",
    bg: "#D8E9F5",          // soft blue
    comingSoon: false,
  },
  {
    name: "Detectify",
    descriptor: "A design system for a B2B security product where accessibility is the standard.",
    type: "Work · 2026 · Web",
    href: "/work/detectify",
    image: null,
    bg: "#EDEDEB",          // neutral warm grey
    comingSoon: true,
  },
  {
    name: "Appstract",
    descriptor: "When the product already exists but no one notices it, awareness becomes a design problem.",
    type: "Work · 2026 · Web",
    href: "/work/appstract",
    image: null,
    bg: "#F5E8DF",          // soft terracotta
    comingSoon: true,
  },
];

function CellOverlay({
  name,
  descriptor,
  type,
  comingSoon,
}: {
  name: string;
  descriptor: string;
  type: string;
  comingSoon: boolean;
}) {
  return (
    <div className="absolute inset-0 flex flex-col justify-end p-6">
      {/* gradient scrim */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.08) 50%, transparent 100%)",
        }}
      />
      <div className="relative z-10">
        {comingSoon && (
          <span
            className="inline-block mb-2 text-[9px] font-medium uppercase tracking-[0.1em] bg-white/20 text-white/80 px-2 py-0.5 rounded-sm"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Coming soon
          </span>
        )}
        <p
          className="text-[10px] font-medium uppercase tracking-[0.08em] text-white/70 mb-1"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          {type}
        </p>
        <h3
          className="text-white leading-tight mb-1"
          style={{
            fontFamily: "var(--font-ibm-plex-serif)",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "clamp(20px, 2.5vw, 28px)",
          }}
        >
          {name}
        </h3>
        <p
          className="text-white/75 text-[12px] leading-[1.5] max-w-[320px]"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {descriptor}
        </p>
      </div>
    </div>
  );
}

export default function BentoSpreadVariant() {
  return (
    <main className="min-h-screen bg-[#fefefc] pt-[41px]">
      <div className="mx-auto max-w-[1200px] px-8 md:px-[80px] py-16">

        {/* Label */}
        <p
          className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#57423f] mb-8"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Selected Work
        </p>

        {/* Bento grid */}
        <div
          className="grid gap-[6px]"
          style={{
            gridTemplateColumns: "3fr 2fr",
            gridTemplateRows: "auto",
            height: "min(700px, 80vw)",
          }}
        >
          {/* Hero cell — Nurtura */}
          <Link
            href={HERO.href}
            className="relative rounded-[6px] overflow-hidden block group"
            style={{ backgroundColor: HERO.bg, gridRow: "1 / 2" }}
          >
            <Image
              src={HERO.image}
              alt={HERO.name}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <CellOverlay
              name={HERO.name}
              descriptor={HERO.descriptor}
              type={HERO.type}
              comingSoon={HERO.comingSoon}
            />
          </Link>

          {/* Right column — 3 cells */}
          <div className="flex flex-col gap-[6px]">
            {SECONDARY.map((cell) => {
              const cellContent = (
                <>
                  {cell.image && (
                    <Image
                      src={cell.image}
                      alt={cell.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  )}
                  <CellOverlay
                    name={cell.name}
                    descriptor={cell.descriptor}
                    type={cell.type}
                    comingSoon={cell.comingSoon}
                  />
                </>
              );

              if (cell.comingSoon) {
                return (
                  <div
                    key={cell.name}
                    className="relative rounded-[6px] overflow-hidden flex-1 cursor-default"
                    style={{ backgroundColor: cell.bg }}
                  >
                    {cellContent}
                  </div>
                );
              }

              return (
                <Link
                  key={cell.name}
                  href={cell.href}
                  className="relative rounded-[6px] overflow-hidden flex-1 block group"
                  style={{ backgroundColor: cell.bg }}
                >
                  {cellContent}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href="/variants"
            className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#969696] hover:text-[#141412] transition-colors"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            ← All variants
          </Link>
        </div>
      </div>
    </main>
  );
}
