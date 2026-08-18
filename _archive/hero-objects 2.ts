// Hero "breathing universe" — object graph data.
// Every floating object on the hero is a node; connections are the edges
// drawn as constellation lines (ambient + hover graph view).

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
  connections: string[]
  /** hero-settle entrance stagger, ms. */
  settleDelay: number
  priority?: boolean
}

/** Parallax strength by depth — 1 → 0.3x, 2 → 0.6x, 3 → 1x of base 0.036. */
export const DEPTH_PARALLAX: Record<HeroDepth, number> = {
  1: 0.011,
  2: 0.022,
  3: 0.036,
}

// Desktop layout — Figma frame 1440×1040. left/top are % of that frame,
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
    // left: -4.4% — intentionally cropped by the section's left edge
    className: 'absolute left-0 top-[58px] md:left-[-4.4%] md:top-[28.2%]',
    imgClassName: 'w-[145px] md:w-[28.47vw] md:max-w-[410px] md:rotate-[-1.2deg]',
    depth: 1,
    connections: ['coffee', 'aesop'],
    settleDelay: 150,
    priority: true,
  },
  {
    id: 'kanelbulle',
    src: '/landing_page/kanelbulle.png',
    width: 250,
    height: 364,
    className: 'absolute left-[24px] top-[35px] md:left-[64.4%] md:top-[34.4%]',
    imgClassName: 'w-[68px] md:w-[16.46vw] md:max-w-[237px]',
    depth: 2,
    connections: ['coffee', 'bike'],
    settleDelay: 220,
    priority: true,
  },
  {
    id: 'coffee',
    src: '/landing_page/dripcoffee.png',
    width: 380,
    height: 576,
    // Figma bbox (78.8%, 3.9%, 562w) — intentionally cropped by the right edge
    className: 'absolute left-[285px] top-[41px] md:left-[83%] md:top-[7.9%]',
    imgClassName:
      'rotate-[12.83deg] w-[109px] md:rotate-[12.8deg] md:w-[30.63vw] md:max-w-[441px]',
    depth: 3,
    connections: ['notebook'],
    settleDelay: 290,
    priority: true,
  },
  {
    id: 'polaroid',
    src: '/landing_page/polaroid.png',
    width: 156,
    height: 240,
    // Figma bbox (44.9%, 5.9%, 242w)
    className: 'absolute left-[200px] top-[55px] md:left-[47.2%] md:top-[7.7%]',
    imgClassName: 'rotate-[15.62deg] w-[59px] md:rotate-[15.6deg] md:w-[12.29vw] md:max-w-[177px]',
    depth: 2,
    connections: ['bike', 'hanok', 'quokka'],
    settleDelay: 360,
    priority: true,
  },
  {
    id: 'folder',
    src: '/landing_page/folder.png',
    width: 82,
    height: 66,
    className:
      'flex absolute flex-col items-center left-[286px] top-[104px] md:left-[65.5%] md:top-[16.8%]',
    imgWrapClassName: 'overflow-hidden w-[20px] md:w-[5.28vw] md:max-w-[76px]',
    imgClassName: 'w-full',
    caption: 'portfolio_final_final_',
    captionClassName:
      'mt-[2px] text-center leading-tight text-[#474747] break-all text-[4px] w-[20px] md:text-[11px] md:w-[5.28vw] md:max-w-[76px]',
    depth: 2,
    connections: [],
    settleDelay: 430,
  },
  {
    id: 'aesop',
    src: '/landing_page/handcream.png',
    width: 360,
    height: 462,
    // Figma bbox (48.8%, 39.1%, 385w) — 55.3° tilt makes the raw conversion critical
    className: 'absolute left-[261px] top-[155px] md:left-[52.1%] md:top-[45%]',
    imgClassName: 'rotate-[70.43deg] w-[69px] md:rotate-[55.3deg] md:w-[20.21vw] md:max-w-[291px]',
    depth: 2,
    connections: [],
    settleDelay: 570,
  },
  {
    id: 'dnd',
    src: '/landing_page/dnd.png',
    width: 151,
    height: 68,
    className: 'absolute hidden md:block md:left-[28.5%] md:top-[17.4%]',
    imgClassName: 'md:w-[10.49vw] md:max-w-[151px]',
    depth: 2,
    connections: [],
    settleDelay: 640,
  },
  {
    id: 'figma',
    src: '/landing_page/toolbar.png',
    width: 418,
    height: 48,
    className: 'absolute hidden md:block md:left-[29.2%] md:top-[71.6%]',
    imgClassName: 'md:w-[29.03vw] md:max-w-[418px]',
    depth: 1,
    connections: ['folder', 'dnd', 'earphones'],
    settleDelay: 700,
  },
  {
    id: 'bike',
    src: '/landing_page/bike.png',
    width: 850,
    height: 530,
    // Figma bbox (64.4%, 53.7%, 536w)
    className: 'absolute hidden md:block md:left-[66.1%] md:top-[57.9%]',
    imgClassName: 'md:rotate-[-10.9deg] md:w-[33.82vw] md:max-w-[487px]',
    depth: 1,
    connections: ['earphones'],
    settleDelay: 760,
  },
  {
    id: 'hanok',
    src: '/landing_page/hanok.png',
    width: 500,
    height: 750,
    className: 'absolute hidden md:block md:left-0 md:top-[3.1%]',
    imgClassName: 'md:w-[16.88vw] md:max-w-[243px]',
    depth: 1,
    connections: [],
    settleDelay: 820,
  },
  {
    id: 'quokka',
    src: '/landing_page/quokka.png',
    width: 1080,
    height: 1350,
    // Figma top was 31.3% — nudged down so it nestles into the notebook page
    // instead of perching on its top edge (provisional, pending exact Figma check)
    className: 'absolute hidden md:block md:left-[11.5%] md:top-[34%]',
    imgClassName: 'md:w-[7.29vw] md:max-w-[105px]',
    depth: 2,
    connections: [],
    settleDelay: 880,
  },
  {
    id: 'earphones',
    src: '/landing_page/earphones.png',
    width: 736,
    height: 736,
    className: 'absolute hidden md:block md:left-[53.1%] md:top-[54.6%]',
    imgClassName: 'md:w-[14.65vw] md:max-w-[211px]',
    depth: 2,
    connections: [],
    settleDelay: 940,
  },
  {
    id: 'tangerine',
    src: '/landing_page/tangerine.png',
    width: 1180,
    height: 900,
    // Figma top was 67.3% — pushed to 76% to clear the post-it above it
    className: 'absolute hidden md:block md:left-[9.9%] md:top-[76%]',
    imgClassName: 'md:w-[13.4vw] md:max-w-[193px]',
    depth: 3,
    connections: ['hanok'],
    settleDelay: 1000,
  },
]

// Labels keyed by the two ids sorted alphabetically, joined with '-'.
export const CONNECTION_LABELS: Record<string, string> = {
  'coffee-notebook': 'morning pages',
  'figma-folder': 'portfolio_final_final_',
  'dnd-figma': 'deep work mode',
  'coffee-kanelbulle': 'fika',
  'bike-kanelbulle': 'weekend ride',
  'bike-polaroid': 'exploring the city',
  'aesop-notebook': 'small rituals',
  'hanok-tangerine': 'winter in Korea',
  'hanok-polaroid': "where I'm from",
  'polaroid-quokka': 'spirit animal',
  'bike-earphones': 'commute soundtrack',
  'earphones-figma': 'focus playlist',
}

export function edgeKey(a: string, b: string): string {
  return [a, b].sort().join('-')
}

export type HeroEdge = { key: string; a: string; b: string; label?: string }

/** Unique, deduplicated edge list built from per-object connections. */
export const HERO_EDGES: HeroEdge[] = (() => {
  const ids = new Set(HERO_OBJECTS.map((o) => o.id))
  const seen = new Map<string, HeroEdge>()
  for (const o of HERO_OBJECTS) {
    for (const c of o.connections) {
      if (!ids.has(c)) continue
      const key = edgeKey(o.id, c)
      if (!seen.has(key)) {
        seen.set(key, { key, a: o.id, b: c, label: CONNECTION_LABELS[key] })
      }
    }
  }
  return [...seen.values()]
})()

/**
 * Breathing drift parameters — deterministic per id (hash, not Math.random)
 * so SSR and client markup match and values never change across renders.
 */
export function breatheParams(id: string): { duration: number; delay: number } {
  let h = 0
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0
  return {
    duration: 4 + (h % 400) / 100, // 4–8s
    delay: -(((h >> 8) % 800) / 100), // negative → desynced phases
  }
}
