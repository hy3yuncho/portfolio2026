'use client'

import Image from 'next/image'
import { useMouseParallax } from '@/hooks/useMouseParallax'
import PostItNote from '@/components/PostItNote'

function px(x: number, y: number, depth: number): React.CSSProperties {
  return {
    translate: `${(x * depth).toFixed(2)}px ${(y * depth).toFixed(2)}px`,
    transition: 'translate 200ms ease-out',
  }
}

export default function HeroSection() {
  const mouse = useMouseParallax()

  return (
    <section className="relative h-[290px] md:h-[680px] w-full overflow-hidden bg-[#fefefc]">

      {/* Moleskin notebook */}
      <div
        className="absolute left-0 top-[58px] md:-left-[58px] md:top-0"
        style={px(mouse.x, mouse.y, 0.012)}
      >
        <Image
          src="/landing_page/moleskin.png"
          alt="Open notebook"
          width={430}
          height={449}
          quality={100}
          className="pointer-events-none select-none w-[145px] md:w-[430px]"
          style={{ height: 'auto' }}
          priority
        />
      </div>

      {/* Cinnamon roll */}
      <div
        className="absolute left-[24px] top-[35px] md:left-[193px] md:top-[10px]"
        style={px(mouse.x, mouse.y, 0.022)}
      >
        <Image
          src="/landing_page/kanelbulle.png"
          alt="Cinnamon roll"
          width={250}
          height={364}
          quality={100}
          className="pointer-events-none select-none w-[68px] md:w-[250px]"
          style={{ height: 'auto' }}
          priority
        />
      </div>

      {/* Coffee */}
      <div
        className="absolute left-[285px] top-[41px] md:left-[1060px] md:top-[66px]"
        style={px(mouse.x, mouse.y, 0.018)}
      >
        <Image
          src="/landing_page/dripcoffee.png"
          alt="Pour-over coffee"
          width={380}
          height={576}
          quality={100}
          className="pointer-events-none select-none rotate-[12.83deg] w-[109px] md:rotate-[6deg] md:w-[380px]"
          style={{ height: 'auto' }}
          priority
        />
      </div>

      {/* Polaroid */}
      <div
        className="absolute left-[200px] top-[55px] md:left-[756px] md:top-[120px]"
        style={px(mouse.x, mouse.y, 0.038)}
      >
        <Image
          src="/landing_page/polaroid.png"
          alt="Polaroid photo"
          width={156}
          height={240}
          quality={100}
          className="pointer-events-none select-none rotate-[15.62deg] w-[59px] md:w-[156px]"
          style={{ height: 'auto' }}
          priority
        />
      </div>

      {/* Folder */}
      <div
        className="flex absolute flex-col items-center left-[286px] top-[104px] md:left-[1039px] md:top-[147px]"
        style={px(mouse.x, mouse.y, 0.028)}
      >
        <div className="overflow-hidden w-[20px] md:w-[82px]">
          <Image
            src="/landing_page/folder.png"
            alt="Folder"
            width={82}
            height={66}
            quality={100}
            className="pointer-events-none select-none w-full"
            style={{ height: 'auto' }}
          />
        </div>
        <p className="mt-[2px] text-center leading-tight text-[#474747] break-all text-[4px] w-[20px] md:text-[11px] md:w-[82px]">
          portfolio_final_final_
        </p>
      </div>

      {/* Rock */}
      <div
        className="absolute left-[144px] top-[92px] md:left-[553px] md:top-[211px]"
        style={px(mouse.x, mouse.y, 0.032)}
      >
        <Image
          src="/landing_page/rock.png"
          alt="Rock"
          width={155}
          height={87}
          quality={100}
          className="pointer-events-none select-none rotate-[-10.47deg] w-[38px] md:w-[155px]"
          style={{ height: 'auto' }}
        />
      </div>

      {/* Hand cream */}
      <div
        className="absolute left-[261px] top-[155px] md:left-[820px] md:top-[290px]"
        style={px(mouse.x, mouse.y, 0.020)}
      >
        <Image
          src="/landing_page/handcream.png"
          alt="Hand cream"
          width={360}
          height={462}
          quality={100}
          className="pointer-events-none select-none rotate-[70.43deg] w-[69px] md:rotate-[18deg] md:w-[360px]"
          style={{ height: 'auto' }}
        />
      </div>

      {/* Hero name */}
      <h1
        className="text-outlined-strong absolute font-black italic leading-none
                   top-[138px] left-[70px] w-[280px] text-left text-[30px]
                   md:top-[330px] md:left-1/2 md:-translate-x-1/2 md:w-[90vw] md:text-center md:text-[64px]"
        style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
      >
        Hailey Yun Cho
      </h1>

      {/* Post-it note */}
      <div
        className="absolute pointer-events-none select-none left-[66px] top-[185px] md:left-[160px] md:top-[418px]"
        style={px(mouse.x, mouse.y, 0.007)}
      >
        {/* Scale to 147px wide on mobile (351 * 0.419 ≈ 147), natural size on desktop */}
        <div className="origin-top-left scale-[0.419] md:scale-100">
          <PostItNote />
        </div>
      </div>

      {/* DND pill — desktop only */}
      <div
        className="absolute hidden md:block md:left-[600px] md:top-[450px]"
        style={px(mouse.x, mouse.y, 0.026)}
      >
        <Image
          src="/landing_page/dnd.png"
          alt="Do Not Disturb"
          width={151}
          height={68}
          quality={100}
          className="pointer-events-none select-none md:w-[151px]"
          style={{ height: 'auto' }}
        />
      </div>

      {/* Figma toolbar — desktop only */}
      <div
        className="absolute hidden md:block md:left-[530px] md:top-[575px]"
        style={px(mouse.x, mouse.y, 0.010)}
      >
        <Image
          src="/landing_page/toolbar.png"
          alt="Figma toolbar"
          width={418}
          height={48}
          quality={100}
          className="pointer-events-none select-none md:w-[418px]"
          style={{ height: 'auto' }}
        />
      </div>

    </section>
  )
}
