// Hero desk objects — static collage data (positions match Figma 613:197).

export type HeroDepth = 1 | 2 | 3

export type HeroObject = {
  id: string
  /** Image under /public. */
  src: string
  /** Intrinsic image size for next/image. */
  width: number
  height: number
  /** Wrapper classes: absolute positioning per breakpoint (kept from the original layout). */
  className: string
  /** Classes on the <Image>: rendered width + rotation per breakpoint. */
  imgClassName?: string
  /** Extra div between wrapper and image (folder needs an overflow crop). */
  imgWrapClassName?: string
  /** Small text under the image (folder filename). */
  caption?: string
  captionClassName?: string
  /** 1 = far (slow parallax), 3 = near (fast parallax). */
  depth: HeroDepth
  /** hero-settle entrance stagger, ms. */
  settleDelay: number
  priority?: boolean
}

/** Parallax strength by depth — halved from the original for a calmer hero. */
export const DEPTH_PARALLAX: Record<HeroDepth, number> = {
  1: 0.0055,
  2: 0.011,
  3: 0.018,
}

// Desktop layout — Figma frame 1440w; hero band tightened to 1440×880
// after removing the lower objects (quokka/earphones/bike/tangerine). left/top are % of that frame,
// widths are vw (px/1440*100) capped at the 1440-scale px value so objects
// never overgrow on ultrawide. Mobile (non-md) values are unchanged.
//
// Rotated objects (polaroid/coffee/aesop/bike): Figma's x/y/size describe the
// on-canvas bounding box of the ROTATED layer, but CSS rotate() keeps the
// unrotated layout box at left/top and spills outward. Their values below are
// converted (layout W = bboxW / (cosθ + aspect·sinθ), position re-centred) so
// the rendered footprint matches Figma. Derivation uses the actual PNG aspect
// ratios, not the width/height props.
export const HERO_OBJECTS: HeroObject[] = [
  {
    id: 'notebook',
    src: '/landing_page/moleskin.png',
    width: 430,
    height: 449,
    // Figma 613:198 — bbox (-63, 293) 409.7×539.7, inner 398.6w @ -1.21°
    className: 'absolute left-0 top-[58px] md:left-[-3.99%] md:top-[29.27%]',
    imgClassName: 'w-[145px] md:w-[27.68vw] md:max-w-[399px] md:rotate-[-1.21deg]',
    depth: 1,
    settleDelay: 150,
    priority: true,
  },
  {
    id: 'kanelbulle',
    src: '/landing_page/kanelbulle.png',
    width: 250,
    height: 364,
    className: 'absolute left-[24px] top-[35px] md:left-[64.38%] md:top-[40.68%]',
    imgClassName: 'w-[68px] md:w-[16.46vw] md:max-w-[237px]',
    depth: 2,
    settleDelay: 220,
    priority: true,
  },
  {
    id: 'coffee',
    src: '/landing_page/dripcoffee.png',
    width: 380,
    height: 576,
    // Figma 613:232 — bbox (1030, 41) 561.8², inner 441w @ 12.83° (right edge crops)
    className: 'absolute left-[285px] top-[41px] md:left-[75.72%] md:top-[2.85%]',
    imgClassName:
      'rotate-[12.83deg] w-[109px] md:rotate-[12.83deg] md:w-[30.63vw] md:max-w-[441px]',
    depth: 3,
    settleDelay: 290,
    priority: true,
  },
  {
    id: 'polaroid',
    src: '/landing_page/polaroid.png',
    width: 156,
    height: 240,
    // Figma 613:200 — bbox 242.1×308, inner 177w @ 15.62°; raised 38px to clear the name
    className: 'absolute left-[200px] top-[55px] md:left-[42.05%] md:top-[5.11%]',
    imgClassName: 'rotate-[15.62deg] w-[59px] md:rotate-[15.62deg] md:w-[12.29vw] md:max-w-[177px]',
    depth: 2,
    settleDelay: 360,
    priority: true,
  },
  {
    id: 'folder',
    src: '/landing_page/folder.png',
    width: 82,
    height: 66,
    // Figma 613:207 — column (943, 175) w76: 60px icon + 12px caption, gap 4
    className:
      'flex absolute flex-col items-center left-[286px] top-[104px] md:left-[65.49%] md:top-[19.89%] md:gap-[4px]',
    imgWrapClassName: 'overflow-hidden w-[20px] md:w-[4.17vw] md:max-w-[60px]',
    imgClassName: 'w-full',
    caption: 'portfolio_final_final_final',
    captionClassName:
      'mt-[2px] md:mt-0 text-center leading-tight text-[#141412] break-all text-[4px] w-[20px] md:text-[min(0.83vw,12px)] md:w-[5.28vw] md:max-w-[76px]',
    depth: 2,
    settleDelay: 430,
  },
  {
    id: 'aesop',
    src: '/landing_page/handcream.png',
    width: 360,
    height: 462,
    // Figma 613:233 — bbox (453, 407) 385×368.2, inner 290w @ 55.3°
    className: 'absolute left-[261px] top-[155px] md:left-[34.74%] md:top-[51.99%]',
    imgClassName: 'rotate-[70.43deg] w-[69px] md:rotate-[55.3deg] md:w-[20.17vw] md:max-w-[290px]',
    depth: 2,
    settleDelay: 500,
  },
  {
    id: 'dnd',
    src: '/landing_page/dnd.png',
    width: 151,
    height: 68,
    className: 'absolute hidden md:block md:left-[28.54%] md:top-[20.57%]',
    imgClassName: 'md:w-[10.49vw] md:max-w-[151px]',
    depth: 2,
    settleDelay: 570,
  },
  {
    id: 'figma',
    src: '/landing_page/toolbar.png',
    width: 418,
    height: 48,
    className: 'absolute hidden md:block md:left-[29.17%] md:top-[84.66%]',
    imgClassName: 'md:w-[29.03vw] md:max-w-[418px]',
    depth: 1,
    settleDelay: 640,
  },
  {
    id: 'hanok',
    src: '/landing_page/hanok.png',
    width: 500,
    height: 750,
    // Figma 765:312 — (0, 32) 243×364, flush with the left edge
    className: 'absolute hidden md:block md:left-0 md:top-[3.64%]',
    imgClassName: 'md:w-[16.88vw] md:max-w-[243px]',
    depth: 1,
    settleDelay: 80,
  },
]

