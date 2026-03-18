/**
 * src/lib/types.ts
 * Copy to src/lib/types.ts after bootstrapping.
 *
 * Shared TypeScript interfaces for the portfolio.
 * These map directly to the component APIs defined in CLAUDE.md.
 */

// ── Navigation ────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
}

// ── Case studies ──────────────────────────────────────────────────────────────

export type CaseStudySlug = 'nurtura' | 'detectify' | 'appstract' | 'meview'

export interface CaseStudy {
  slug: CaseStudySlug
  title: string
  label: string          // e.g. 'PERSONAL PROJECT · SPRING 2025'
  description: string
  coverImage: string     // src for Next.js <Image />, starts with /images/
  coverImageAlt: string
  href: string           // e.g. '/nurtura'
}

// ── Components — ProjectCard ──────────────────────────────────────────────────

export type ProjectCardVariant = 'default' | 'medium' | 'large'

// ── Components — CaseTile ─────────────────────────────────────────────────────

export type CaseTileVariant = 'icon' | 'picture'

// ── Components — Button ───────────────────────────────────────────────────────

export type ButtonVariant = 'default' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize    = 'sm' | 'default' | 'lg' | 'icon'

// ── Components — SideNav ─────────────────────────────────────────────────────

export interface SideNavItem {
  id: string         // matches DOM section id — used for scroll-spy active state
  label: string      // display label, shown in all-caps
}

export interface SideNavPhase {
  label: string      // phase name e.g. 'Discover', 'Define', 'Develop', 'Deliver'
  items: SideNavItem[]
}

// ── Components — ProjectNav ───────────────────────────────────────────────────

export interface ProjectNavItem {
  title: string
  image: string      // 165×100 thumbnail src for Next.js <Image />
  imageAlt: string
  href: string
}

// ── Font loading (next/font) ──────────────────────────────────────────────────
// Reference: how to declare fonts in src/app/layout.tsx
//
// import { DM_Sans, IBM_Plex_Serif, Montserrat, IBM_Plex_Mono } from 'next/font/google'
//
// const dmSans = DM_Sans({
//   subsets: ['latin'],
//   weight: ['300', '400', '500'],
//   variable: '--font-sans',
// })
// const ibmPlexSerif = IBM_Plex_Serif({
//   subsets: ['latin'],
//   weight: ['500'],
//   style: ['italic'],
//   variable: '--font-serif',
// })
// const montserrat = Montserrat({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '900'],
//   style: ['normal', 'italic'],
//   variable: '--font-display',
// })
// const ibmPlexMono = IBM_Plex_Mono({
//   subsets: ['latin'],
//   weight: ['400', '500'],
//   variable: '--font-mono',
// })
//
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className={`${dmSans.variable} ${ibmPlexSerif.variable} ${montserrat.variable} ${ibmPlexMono.variable}`}>
//       <body>{children}</body>
//     </html>
//   )
// }
