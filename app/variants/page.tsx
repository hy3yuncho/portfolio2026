import Link from "next/link";

const VARIANT_GROUPS = [
  {
    group: "Projects page — Selected Work section",
    variants: [
      {
        id: "agency-index",
        name: "Agency Index",
        description:
          "Scandinavian editorial. Four full-width text rows with hairline dividers. Large italic project names, thumbnail on hover. No cards.",
        href: "/variants/agency-index",
      },
      {
        id: "bento-spread",
        name: "Bento Spread",
        description:
          "Asymmetric two-column grid. One large hero cell (Nurtura) plus three stacked smaller cells. Colour-accented, image-forward.",
        href: "/variants/bento-spread",
      },
      {
        id: "fullscreen-carousel",
        name: "Fullscreen Carousel",
        description:
          "One project per viewport. Left panel: metadata and description. Right panel: full-bleed cover. Arrow navigation.",
        href: "/variants/fullscreen-carousel",
      },
    ],
  },
  {
    group: "Case study page — Nurtura demo",
    variants: [
      {
        id: "case-study-magazine",
        name: "Magazine Scroll",
        description:
          "No sticky meta panel. Full-width cover images, then a centred editorial column. Scroll-progress bar replaces SideNav. Section numbers (01–07) visible. Like a long-form editorial piece.",
        href: "/variants/case-study-magazine",
      },
      {
        id: "case-study-document",
        name: "Document",
        description:
          "Compact side-by-side hero. Permanent left TOC (always visible, scroll-spy active highlight). Right content column. Structured, scannable, report-like.",
        href: "/variants/case-study-document",
      },
      {
        id: "case-study-cinematic",
        name: "Cinematic Hero",
        description:
          "Full-viewport cover image with project title and tagline overlaid in large type. Scroll down to a horizontal meta strip, then the existing SideNav + content pattern.",
        href: "/variants/case-study-cinematic",
      },
    ],
  },
];

export default function VariantsPage() {
  return (
    <main className="min-h-screen bg-[#fefefc] pt-[41px]">
      <div className="mx-auto max-w-[960px] px-8 py-16">
        <p
          className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#969696] mb-2"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Design exploration
        </p>
        <h1
          className="text-[28px] font-medium italic text-[#141412] mb-2"
          style={{ fontFamily: "var(--font-ibm-plex-serif)" }}
        >
          Projects page — layout variants
        </h1>
        <p
          className="text-[14px] text-[#666666] mb-12 max-w-[560px]"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Three alternative layouts for the Selected Work section. Click to preview each one.
        </p>

        <div className="flex flex-col gap-12">
          {VARIANT_GROUPS.map((grp) => (
            <div key={grp.group}>
              <p
                className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#C5C5C5] mb-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {grp.group}
              </p>
              <div className="flex flex-col divide-y divide-[#E5E5E5]">
                {grp.variants.map((v) => (
                  <Link
                    key={v.id}
                    href={v.href}
                    className="group flex items-start gap-8 py-7 hover:bg-[#F7F4F0] -mx-4 px-4 transition-colors duration-150"
                  >
                    <div className="flex-1">
                      <h2
                        className="text-[20px] font-medium italic text-[#141412] mb-2 group-hover:underline underline-offset-2"
                        style={{ fontFamily: "var(--font-ibm-plex-serif)" }}
                      >
                        {v.name}
                      </h2>
                      <p
                        className="text-[14px] text-[#666666] leading-[1.7]"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {v.description}
                      </p>
                    </div>
                    <span
                      className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#969696] mt-1 flex-shrink-0 group-hover:text-[#141412] transition-colors"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Preview →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#E5E5E5]">
          <Link
            href="/"
            className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#969696] hover:text-[#141412] transition-colors"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
