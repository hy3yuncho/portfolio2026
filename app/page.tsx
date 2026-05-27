import DetectifyCardAnimation from "@/components/DetectifyCardAnimation";
import AppstractCardAnimation from "@/components/AppstractCardAnimation";
import FadeIn from "@/components/FadeIn";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#fefefc]">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <HeroSection />

        {/* ── Selected Work ─────────────────────────────────────────────── */}
        <section id="work" className="mx-auto max-w-[1060px] px-4 md:px-6 pt-8 pb-16 md:py-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#57423f] mb-5 md:mb-0"
             style={{ fontFamily: "var(--font-montserrat)" }}>
            Selected Work
          </p>
          <div className="flex flex-col md:flex-row gap-5">

            {/* Left column */}
            <div className="flex flex-1 flex-col gap-5 mt-0 md:mt-[170px]">

              {/* Detectify */}
              <FadeIn delay={0}>
                <div className="block group transition-opacity duration-200 ease-out hover:opacity-60" data-cursor="coming-soon">
                  <div className="relative overflow-hidden">
                    <DetectifyCardAnimation />
                    <span className="md:hidden absolute top-3 right-3 bg-[#F4673A] text-white text-[9px] font-medium uppercase tracking-[0.1em] px-2 py-1 rounded-sm"
                          style={{ fontFamily: "var(--font-montserrat)" }}>
                      Coming soon
                    </span>
                  </div>
                  <div className="mt-3">
                    <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#57423f]"
                       style={{ fontFamily: "var(--font-montserrat)" }}>
                      Work · Spring 2026
                    </p>
                    <h3 className="mt-1 text-[22px] italic font-medium text-[#141412]"
                        style={{ fontFamily: "var(--font-ibm-plex-serif)" }}>
                      Detectify
                    </h3>
                    <p className="mt-1 text-[16px] text-[#57423f]"
                       style={{ fontFamily: "var(--font-dm-sans)" }}>
                      A design system for a B2B security product where accessibility is the standard.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Nurtura */}
              <FadeIn delay={100}>
                <Link href="/work/nurtura" className="block group transition-opacity duration-200 ease-out hover:opacity-60" data-cursor="view">
                  <div className="overflow-hidden aspect-[4/3] md:aspect-auto md:h-[731px]">
                    <Image
                      src="/nurtura/nurtura.png"
                      alt="Nurtura"
                      width={519}
                      height={731}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#57423f]"
                       style={{ fontFamily: "var(--font-montserrat)" }}>
                      Personal project · Spring 2025
                    </p>
                    <h3 className="mt-1 text-[22px] italic font-medium text-[#141412]"
                        style={{ fontFamily: "var(--font-ibm-plex-serif)" }}>
                      Nurtura
                    </h3>
                    <p className="mt-1 text-[16px] text-[#57423f]"
                       style={{ fontFamily: "var(--font-dm-sans)" }}>
                      Designing emotional safety into an IVF community
                    </p>
                  </div>
                </Link>
              </FadeIn>

            </div>

            {/* Right column */}
            <div className="flex flex-1 flex-col gap-5 mt-0 md:mt-[170px]">

              {/* Appstract */}
              <FadeIn delay={50}>
                <div className="block group transition-opacity duration-200 ease-out hover:opacity-60" data-cursor="coming-soon">
                  <div className="relative overflow-hidden">
                    <AppstractCardAnimation />
                    <span className="md:hidden absolute top-3 right-3 bg-[#F4673A] text-white text-[9px] font-medium uppercase tracking-[0.1em] px-2 py-1 rounded-sm"
                          style={{ fontFamily: "var(--font-montserrat)" }}>
                      Coming soon
                    </span>
                  </div>
                  <div className="mt-3">
                    <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#57423f]"
                       style={{ fontFamily: "var(--font-montserrat)" }}>
                      Work · Spring 2026
                    </p>
                    <h3 className="mt-1 text-[22px] italic font-medium text-[#141412]"
                        style={{ fontFamily: "var(--font-ibm-plex-serif)" }}>
                      Appstract
                    </h3>
                    <p className="mt-1 text-[16px] text-[#57423f]"
                       style={{ fontFamily: "var(--font-dm-sans)" }}>
                      When the product already exists but no one notices it, awareness becomes a design problem.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* MeView */}
              <FadeIn delay={150}>
                <Link href="/work/meview" className="block group transition-opacity duration-200 ease-out hover:opacity-60" data-cursor="view">
                  <div className="overflow-hidden aspect-[4/3] md:aspect-auto md:h-[488px]">
                    <Image
                      src="/meview/meview.png"
                      alt="MeView"
                      width={519}
                      height={731}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#57423f]"
                       style={{ fontFamily: "var(--font-montserrat)" }}>
                      Personal project · Spring 2024
                    </p>
                    <h3 className="mt-1 text-[22px] italic font-medium text-[#141412]"
                        style={{ fontFamily: "var(--font-ibm-plex-serif)" }}>
                      MeView
                    </h3>
                    <p className="mt-1 text-[16px] text-[#57423f]"
                       style={{ fontFamily: "var(--font-dm-sans)" }}>
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
