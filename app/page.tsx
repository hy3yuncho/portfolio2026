import DetectifyCardAnimation from "@/components/DetectifyCardAnimation";
import AppstractCardAnimation from "@/components/AppstractCardAnimation";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#fefefc]">
        {/* Hero Section */}
        <section className="relative h-[680px] w-full overflow-hidden bg-[#fefefc] pt-[41px]">
          {/* Moleskin notebook – left edge, 72px below nav */}
          <Image
            src="/moleskin.png"
            alt="Open notebook"
            width={370}
            height={494}
            className="pointer-events-none select-none absolute left-0"
            style={{ top: 72, height: "auto" }}
            priority
          />

          {/* Do Not Disturb pill */}
          {/* Natural: 302×136 → at width 151, proportional height = 68 */}
          <Image
            src="/dnd.png"
            alt="Do Not Disturb"
            width={151}
            height={68}
            className="pointer-events-none select-none absolute"
            style={{ left: 415, top: 155, height: "auto" }}
          />

          {/* Polaroid photo – center-right, rotated 15 deg */}
          {/* Natural: 2612×3918 → at width 185, proportional height = 278 */}
          <Image
            src="/polaroid.png"
            alt="Polaroid photo"
            width={185}
            height={278}
            className="pointer-events-none select-none absolute rotate-[15deg]"
            style={{ left: 800, top: 118, height: "auto" }}
            priority
          />

          {/* Folder icon with label */}
          {/* Natural: 140×112 → display at width 65; clip bottom ~12px to hide baked-in filename text */}
          <div
            className="absolute flex flex-col items-center"
            style={{ left: 1044, top: 125 }}
          >
            <div style={{ width: 65, height: 40, overflow: "hidden" }}>
              <Image
                src="/folder.png"
                alt="Folder"
                width={65}
                height={52}
                className="pointer-events-none select-none"
                style={{ height: "auto" }}
              />
            </div>
            <p
              className="mt-1 text-center text-[9px] leading-tight text-[#474747] break-all"
              style={{ width: 65 }}
            >
              portfolio_final_final_final
            </p>
          </div>

          {/* Coffee – top right, rotated 13 deg */}
          {/* Natural: 550×932 → at width 280, proportional height = 475 */}
          <Image
            src="/coffee.png"
            alt="Pour-over coffee"
            width={280}
            height={475}
            className="pointer-events-none select-none absolute rotate-[13deg]"
            style={{ left: 1205, top: 115, height: "auto" }}
            priority
          />

          {/* Hero name – centered, 290px below nav bottom */}
          <h1
            className="text-outlined-strong absolute text-[64px] font-black italic leading-none w-full text-center"
            style={{
              top: 331,
              fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
            }}
          >
            Hailey Yun Cho
          </h1>

          {/* Post-it note */}
          {/* Natural: 1113×570 → at width 351, proportional height = 180 */}
          <Image
            src="/postit.png"
            alt="Post-it note"
            width={351}
            height={180}
            className="pointer-events-none select-none absolute"
            style={{ left: 177, top: 452, height: "auto" }}
          />

          {/* Rock / pebble */}
          {/* Natural: 177×140 → at width 150, proportional height = 119 */}
          <Image
            src="/rock.png"
            alt="Rock"
            width={150}
            height={119}
            className="pointer-events-none select-none absolute"
            style={{ left: 556, top: 480, height: "auto" }}
          />

          {/* Figma toolbar */}
          {/* Natural: 852×112 → at width 355, proportional height = 47 */}
          <Image
            src="/toolbar.png"
            alt="Figma toolbar"
            width={355}
            height={47}
            className="pointer-events-none select-none absolute"
            style={{ left: 716, top: 538, height: "auto" }}
          />
        </section>

        {/* Selected Work */}
        <section id="work" className="mx-auto max-w-[1060px] px-6 py-16">
          <div className="flex gap-5">
            {/* Left column */}
            <div className="flex flex-1 flex-col gap-5 mt-[170px]">
              {/* Detectify – coming soon */}
              <div className="block group" data-cursor="coming-soon">
                <div className="overflow-hidden">
                  <DetectifyCardAnimation />
                </div>
                <div className="mt-3">
                  <p
                    className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#57423f]"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    On going · Spring 2026
                  </p>
                  <h3
                    className="mt-1 text-[22px] italic font-medium text-[#141412]"
                    style={{ fontFamily: "var(--font-ibm-plex-serif)" }}
                  >
                    Detectify
                  </h3>
                  <p
                    className="mt-1 text-[16px] text-[#57423f]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    A design system for a B2B security product where accessibility is the standard.
                  </p>
                </div>
              </div>

              {/* Nurtura */}
              <Link href="/work/nurtura" className="block group" data-cursor="view">
                <div className="overflow-hidden" style={{ height: 731 }}>
                  <Image
                    src="/nurtura/nurtura.png"
                    alt="Nurtura"
                    width={519}
                    height={731}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="mt-3">
                  <p
                    className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#57423f]"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Personal project · Spring 2025
                  </p>
                  <h3
                    className="mt-1 text-[22px] italic font-medium text-[#141412]"
                    style={{ fontFamily: "var(--font-ibm-plex-serif)" }}
                  >
                    Nurtura
                  </h3>
                  <p
                    className="mt-1 text-[16px] text-[#57423f]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Designing emotional safety into an IVF community
                  </p>
                </div>
              </Link>
            </div>

            {/* Right column – offset down to create stagger */}
            <div className="flex flex-1 flex-col gap-5 mt-[170px]">
              {/* Appstract – coming soon */}
              <div className="block group" data-cursor="coming-soon">
                <div className="overflow-hidden">
                  <AppstractCardAnimation />
                </div>
                <div className="mt-3">
                  <p
                    className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#57423f]"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    On going · Spring 2026
                  </p>
                  <h3
                    className="mt-1 text-[22px] italic font-medium text-[#141412]"
                    style={{ fontFamily: "var(--font-ibm-plex-serif)" }}
                  >
                    Appstract
                  </h3>
                  <p
                    className="mt-1 text-[16px] text-[#57423f]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    When the product already exists but no one notices it, awareness becomes a design problem.
                  </p>
                </div>
              </div>

              {/* MeView */}
              <Link href="/work/meview" className="block group" data-cursor="view">
                <div className="overflow-hidden" style={{ height: 488 }}>
                  <Image
                    src="/meview/meview.png"
                    alt="MeView"
                    width={519}
                    height={731}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="mt-3">
                  <p
                    className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#57423f]"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Side project · Spring 2024
                  </p>
                  <h3
                    className="mt-1 text-[22px] italic font-medium text-[#141412]"
                    style={{ fontFamily: "var(--font-ibm-plex-serif)" }}
                  >
                    MeView
                  </h3>
                  <p
                    className="mt-1 text-[16px] text-[#57423f]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Feedback exchange made honest by anonymity, and useful by structure.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
