import DetectifyCardAnimation from "@/components/DetectifyCardAnimation";
import AppstractCardAnimation from "@/components/AppstractCardAnimation";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#fefefc]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[680px] w-full overflow-hidden bg-[#fefefc] pt-[41px]">
          {/* Moleskin notebook – bottom of mobile hero; y:609 on desktop (partially overflows into work section) */}
          <Image
            src="/landing_page/moleskin.png"
            alt="Open notebook"
            width={430}
            height={449}
            quality={100}
            className="pointer-events-none select-none absolute left-0 md:-left-[58px] w-[130px] md:w-[430px]"
            style={{ top: 0, height: "auto" }}
            priority
          />

          {/* Cinnamon roll – desktop only */}
          <Image
            src="/landing_page/kanelbulle.png"
            alt="Cinnamon roll"
            width={250}
            height={364}
            quality={100}
            className="pointer-events-none select-none hidden md:block md:absolute"
            style={{ left: 193, top: 10, height: "auto" }}
            priority
          />

          {/* Coffee – desktop only */}
          <Image
            src="/landing_page/dripcoffee.png"
            alt="Pour-over coffee"
            width={380}
            height={576}
            quality={100}
            className="pointer-events-none select-none hidden md:block md:absolute rotate-[6deg]"
            style={{ left: 1060, top: 66, height: "auto" }}
            priority
          />

          {/* Polaroid photo – desktop only */}
          <Image
            src="/landing_page/polaroid.png"
            alt="Polaroid photo"
            width={156}
            height={240}
            quality={100}
            className="pointer-events-none select-none hidden md:block md:absolute rotate-[15.62deg]"
            style={{ left: 756, top: 120, height: "auto" }}
            priority
          />

          {/* Folder icon – desktop only */}
          <div
            className="hidden md:flex md:absolute flex-col items-center"
            style={{ left: 1039, top: 147 }}
          >
            <div style={{ width: 82, height: 50, overflow: "hidden" }}>
              <Image
                src="/landing_page/folder.png"
                alt="Folder"
                width={82}
                height={66}
                quality={100}
                className="pointer-events-none select-none"
                style={{ height: "auto" }}
              />
            </div>
            <p
              className="mt-1 text-center text-[11px] leading-tight text-[#474747] break-all"
              style={{ width: 82 }}
            >
              portfolio_final_final_final
            </p>
          </div>

          {/* Hero name */}
          <h1
            className="text-outlined-strong absolute top-[150px] md:top-[330px] text-[36px] md:text-[64px] font-black italic leading-none w-full text-center"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Hailey Yun Cho
          </h1>

          {/* Post-it note with text – desktop only */}
          <div
            className="hidden md:block pointer-events-none select-none"
            style={{ position: "absolute", left: 160, top: 418, width: 371 }}
          >
            <Image
              src="/landing_page/postit.png"
              alt="Post-it note"
              width={371}
              height={190}
              quality={100}
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            <p
              style={{
                position: "absolute",
                top: 28,
                left: 32,
                right: 32,
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                fontWeight: 400,
                color: "#141412",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Hailey is a product designer who weaves the red thread between business, behaviour and branding.
              <br /><br />
              Currently based in Stockholm.
            </p>
          </div>

          {/* Do Not Disturb pill – desktop only */}
          <Image
            src="/landing_page/dnd.png"
            alt="Do Not Disturb"
            width={151}
            height={68}
            quality={100}
            className="pointer-events-none select-none hidden md:block md:absolute"
            style={{ left: 600, top: 450, height: "auto" }}
          />

          {/* Hand cream – desktop only */}
          <Image
            src="/landing_page/handcream.png"
            alt="Hand cream"
            width={360}
            height={462}
            quality={100}
            className="pointer-events-none select-none hidden md:block md:absolute rotate-[18deg]"
            style={{ left: 820, top: 290, height: "auto" }}
          />

          {/* Rock – desktop only */}
          <Image
            src="/landing_page/rock.png"
            alt="Rock"
            width={155}
            height={87}
            quality={100}
            className="pointer-events-none select-none hidden md:block md:absolute rotate-[-10.47deg]"
            style={{ left: 553, top: 211, height: "auto" }}
          />

          {/* Figma toolbar – desktop only */}
          <Image
            src="/landing_page/toolbar.png"
            alt="Figma toolbar"
            width={418}
            height={48}
            quality={100}
            className="pointer-events-none select-none hidden md:block md:absolute"
            style={{ left: 530, top: 575, height: "auto" }}
          />

        </section>

        {/* Selected Work */}
        <section id="work" className="mx-auto max-w-[1060px] px-6 py-16">
          <div className="flex gap-5">
            {/* Left column */}
            <div className="flex flex-1 flex-col gap-5 mt-[170px]">
              {/* Detectify – coming soon */}
              <FadeIn delay={0}>
              <div className="block group transition-opacity duration-200 ease-out hover:opacity-60" data-cursor="coming-soon">
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
              </FadeIn>

              {/* Nurtura */}
              <FadeIn delay={100}>
              <Link href="/work/nurtura" className="block group transition-opacity duration-200 ease-out hover:opacity-60" data-cursor="view">
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
              </FadeIn>
            </div>

            {/* Right column – offset down to create stagger */}
            <div className="flex flex-1 flex-col gap-5 mt-[170px]">
              {/* Appstract – coming soon */}
              <FadeIn delay={50}>
              <div className="block group transition-opacity duration-200 ease-out hover:opacity-60" data-cursor="coming-soon">
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
              </FadeIn>

              {/* MeView */}
              <FadeIn delay={150}>
              <Link href="/work/meview" className="block group transition-opacity duration-200 ease-out hover:opacity-60" data-cursor="view">
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
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
