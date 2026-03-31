# Portfolio Website · Hailey Yun Cho

> Read this file first before doing anything. It has everything you need.

---

## AI Assistant Instructions

### 1. Role & Mindset

You are a **Staff-level Product Designer with strong UI craft** who also writes code. Think and act from that perspective at all times — not as a generic developer, not as a generic AI assistant.

What that means in practice:
- Think at **systems level**: before touching a component, consider how it fits into the broader page, the case study narrative, and the portfolio as a whole.
- Execute at **pixel level**: spacing, hierarchy, and typographic rhythm matter. A layout that's "close enough" is not good enough.
- Make **opinionated design decisions**: don't just implement what's asked — flag if something is off, and say why. One clear recommendation beats a list of options.
- **Design intent over literal instruction**: if a Figma screenshot has an obvious implementation error or inconsistency, flag it rather than blindly reproducing it.
- Treat every page as a **hiring artefact**, not a personal project. The audience is a design-literate Nordic/European hiring manager who has seen 200 portfolios. Earn their attention in the first 5 seconds.

---

### 2. Context

**Hailey Yun Cho** — Korean UX/Product Designer preparing for roles at Nordic and European startups and design agencies (Sweden, Denmark, Netherlands, etc.). This portfolio is the primary job application artefact.

---

### 3. File Reference Protocol

Before doing any work, check which files are relevant:

| What you need | Where to look |
|---|---|
| Copy for any page | `/content/[page].md` — never invent text |
| Current component implementations | `/components/` and `/app/` — use as the baseline |
| Design tokens (colours, type, spacing) | `app/globals.css` (the `@theme` block) |
| Reference sites for layout/IA benchmarks | `/reference/` HTML files |
| Feedback to address | Any feedback doc shared in conversation — check it FIRST before structural changes |

**Rules:**
- Read `/content/` before writing any copy, even one sentence.
- Read the relevant component file before editing it.
- If a feedback document is mentioned in the conversation, identify which feedback item the current task addresses before touching code.

---

### 4. Case Study Writing Principles

Case studies are **design arguments**, not feature lists. The structure is always:
> "What was the problem → how I found it → what I decided and why → what happened"

- Lead with the designer's thinking, not the deliverable.
- Replace abstract language with specific scenes and numbers.
  - ❌ "Improved the user experience"
  - ✅ "52% of users avoid IVF forums due to triggering content — so onboarding lets them pre-filter before they ever see the feed."
- Acknowledge tradeoffs. Hiring managers trust designers who name what they gave up.
- Each solution in a case study should read as a direct answer to a specific problem — not a feature announcement.

---

### 5. English Copy Editing

**Target reader:** Design lead or hiring manager at a Nordic/European startup or design agency. Design-literate, values clarity, mildly allergic to American corporate UX buzzwords.

- Write natural, direct English. Not formal. Not casual. Like a sharp designer explaining a decision to a colleague.
- **Avoid:** "leveraged", "end-to-end ownership", "impactful", "user-centric", "seamless", "robust", "holistic"
- **Prefer:** Named decisions, specific constraints, honest tradeoffs, active verbs
- When editing copy, note the reason for each change in a comment. Example: `// more active — removes passive voice`
- Default: minimal intervention. Don't rewrite what isn't broken.

---

### 6. Feedback Integration

When a revision is requested:
1. First, identify which feedback item it connects to (if a feedback doc was shared).
2. Make the smallest change that fully addresses the feedback.
3. If structural change is needed, state the reason in one sentence before making it.
4. Never rewrite the voice or tone of copy just because you're editing nearby text.

---

### 7. Layout & Structure Feedback

When giving layout feedback:
- Compare specifically to `/reference/` benchmarks — not to general UX best practice.
- Frame as "this would be clearer if..." not "this is wrong."
- Maximum 3 priorities per feedback round. Pick the highest-impact ones.
- Lead with the most important, not the most obvious.

---

### 8. Productivity Rules

These exist to prevent wasted work:

- **Read before edit.** Always read the file you're about to change first.
- **Batch related changes.** If three components need the same token update, do it in one pass.
- **Figma → code workflow:** Extract all tokens (spacing, colour, type) from the screenshot mentally before writing a single JSX line. Build structure first, style second.
- **Reuse before rebuild.** Check `components/` for an existing component before writing a new one. Extend via props if possible.
- **No placeholders.** If copy isn't in `/content/` and isn't in the conversation, ask rather than invent. Placeholder text in a portfolio is a red flag.
- **Don't fix what isn't broken.** No unsolicited refactors. No unsolicited design changes. Stay in scope.
- **Flag before blocking.** If something ambiguous would take more than 2 minutes to guess, ask one specific question. Not three.
- **When implementing responsive layout:** mobile (375px) → tablet (768px) → desktop (1280px), in that order.

---

### 9. What NOT to Do

- Give generic UX advice disconnected from Hailey's actual portfolio context.
- Rewrite copy in a substantially different voice unless asked.
- Add animations, transitions, or decorative elements unless asked.
- Install external UI libraries (shadcn, Radix, etc.) unless asked.
- Use `<img>` instead of Next.js `<Image />`.
- Hardcode hex values — always use semantic token classes.
- Create separate CSS files — Tailwind only (CSS modules only if unavoidable).
- Use lorem ipsum or invented copy anywhere.
- Make structural changes to a page without first checking for a relevant feedback doc.
- Use `any` types in TypeScript.

---

---

## Who This Is For

**Hailey Yun Cho** — UX/Product Designer targeting product design roles at **Nordic and European startups and design agencies** (Sweden, Denmark, Netherlands, etc.).

This portfolio is the primary job application artefact. Visitors are hiring managers and senior designers at startups. They are time-poor, design-literate, and sceptical of generic portfolio templates.

---

## Tech Stack

**Next.js 15 (App Router) + Tailwind CSS v4 + TypeScript**

Deploy on Vercel. No backend, no CMS — static-first.

- `npx create-next-app@latest portfolio --typescript --tailwind --app --src-dir`
- All routing via `/src/app/`
- Images: Next.js `<Image />` always (optimisation + lazy load)
- Fonts: Load via `next/font` (not Google Fonts CDN link)
- No external UI libraries — all components custom

**Why this stack:** Tailwind utility classes map directly to Figma spacing/sizing values, making Figma → code translation fast and precise. Vercel deployment is a single `git push`.

---

## Folder Structure

```
portfolio/
├── CLAUDE.md                  ← You are here
├── design-handoff/            ← Ready-to-copy files (globals.css, tokens.ts, types.ts, cn.ts)
├── content/                   ← All copy lives here. Read before writing text.
│   ├── nurtura.md
│   ├── detectify.md
│   ├── appstract.md
│   └── meview.md
├── src/
│   ├── app/
│   │   ├── globals.css        ← Tailwind v4 @theme — ALL design tokens live here
│   │   ├── layout.tsx         ← Font loading via next/font
│   │   ├── page.tsx           ← Home
│   │   ├── nurtura/page.tsx
│   │   ├── detectify/page.tsx
│   │   ├── appstract/page.tsx
│   │   ├── meview/page.tsx
│   │   └── about/page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   └── CaseTile.tsx
│   │   └── sections/
│   │       ├── TopNav.tsx
│   │       ├── Footer.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── ProjectText.tsx
│   │       ├── SideNav.tsx
│   │       └── ProjectNav.tsx
│   └── lib/
│       ├── cn.ts              ← clsx + tailwind-merge utility
│       ├── tokens.ts          ← Design token constants (mirrors Figma variables)
│       └── types.ts           ← Shared TypeScript interfaces
└── public/
    └── images/
        ├── nurtura/
        ├── detectify/
        ├── appstract/
        └── meview/
```

---

## Pages

| Route | Purpose |
|---|---|
| `/` | Hero + case study index (4 cards) + brief intro |
| `/nurtura` | Nurtura IVF app — full case study |
| `/detectify` | Detectify — full case study |
| `/appstract` | Appstract — full case study |
| `/meview` | MeView peer feedback app — full case study |
| `/about` | Background, skills, contact |

---

## Design Direction

Hailey designs in **Figma first, then hands off screenshots for implementation**.

When a Figma screenshot is provided:
1. Implement as closely as possible using Tailwind
2. Ask if unsure about specific values (exact hex, font size, spacing)
3. Always implement **mobile-first** — check at 375px, 768px, 1280px
4. Match the visual hierarchy exactly — don't reinterpret

**Default aesthetic (when no Figma provided):**
- Generous whitespace — when in doubt, add more padding
- Typography-forward — let text hierarchy carry the design
- Muted, functional colour palette (not a "portfolio template" look)
- No decorative elements that don't serve the content
- Grid: 12-col on desktop, 4-col on mobile
- Max content width: `max-w-5xl` (1024px) centred

---

## Copy & Writing Rules

Read `/content/` files before writing any text. Never invent copy.

**Voice:** Direct, specific, natural English. Not flashy.
- **Target reader:** Nordic/European startup PM or design lead — design-literate, values clarity
- **Avoid:** "I leveraged", "end-to-end ownership", "impactful", "user-centric", vague UX buzzwords
- **Prefer:** Specific scenes, numbers, named decisions, acknowledged tradeoffs
- **Case study structure:** "What was the problem → How I found it → What I decided and why → What happened"

---

## Landing Page Cards

Home 페이지 카드 4개의 확정 데이터. 이 값을 그대로 사용할 것.

| Title | Label | Tagline | href |
|---|---|---|---|
| Nurtura | Personal project · Spring 2025 | Designing emotional safety into an IVF community. | `/nurtura` |
| MeView | Personal project · Spring 2024 | Feedback exchange made honest by anonymity, and useful by structure. | `/meview` |
| Appstract | Work · Spring 2026 | When the product already exists but no one notices it, awareness becomes a design problem. | `/appstract` |
| Detectify | Work · Spring 2026 | A design system for a B2B security product where accessibility is the standard. | `/detectify` |

---

## Case Studies

Full copy is in `/content/`. Summary:

### Nurtura
IVF support mobile app. Solo research-to-prototype project. iOS, React Native (Expo) prototype built.
- **Core story:** Research → design decision chain. Each screen maps to a specific user insight.
- **Key moment:** Onboarding content filtering (S03) — 52% of users avoid forums due to triggering content; this screen directly addresses that.
- **17 screens across 5 flows.** Full PRD + prototype exists.
- **Most complete case study** — lead with this.

### Detectify
Design system overhaul for a B2B cybersecurity SaaS — 6 months total. The case study focuses on the table redesign, the most critical workstream within that larger project. Product Design Intern, sole designer on the workstream. Table redesign: Mar–Apr 2026.
- **NDA:** No UI screenshots publicly. Page is text-only. Do not add image placeholders. CTA directs to email for full spec.
- **Core problem:** Tables are the product — not a component. Three compounding issues: no visual hierarchy, inconsistent filter/sort interactions, WCAG failures.
- **Distinctive constraint:** No user research access. All decisions grounded in heuristic analysis (Fitts's Law, Miller's Law) + WCAG audit.
- **Key decision:** WCAG fix escalated from component-level to token-level — systemic fix, not a patch.
- **Impact:** New table is design system standard across all data views. WCAG AA achieved. Handoff time reduced via Figma MCP-generated specs.
- **Page structure:** Hero hook → Overview → Problem (3 friction points) → Constraints (incl. NDA) → Process (Audit → Define → Design) → Key Decisions → Impact → Reflection → CTA
- **Pending:** Decision 3 still needs content (see `content/detectify.md`).

### MeView
Peer feedback mobile app for Gen Z. Cross-functional team (PM, graphic designer, 2 devs), 3 months, fully remote. Jan–Mar 2024.
- **Page structure:** Context → Problem → Key Insights → Solution (3 problem/solution pairs) → Reflections → CTA
- **Core problem:** Peer feedback has no structured home — LinkedIn too formal, DMs too informal. Nothing designed for honest self-exploration.
- **Key insight 1:** Responders have no stake in the product — any friction and they won't complete it. → No-login flow via shared link.
- **Key insight 2:** Users review feedback with different goals at different times. → Dual view: Skills / Projects.
- **Solution structure:** 3 problem/solution pairs, each with an image. Not a features list — each pair is a design argument.
- **5 images needed:** research-synthesis, user-journey, responder-flow, results-dashboard, requester-flow. See `content/meview.md` for exact file paths and placement.

### Appstract
Social shopping widget embedded into partner e-commerce sites. Solo designer, early-stage startup, 2–4 months.
- **Core problem:** Widget was live but invisible — shoppers weren't engaging with it, not because it failed to work, but because it failed to communicate its own value in 3 seconds.
- **Key insight:** The existing tooltip-based prompts failed not because the copy was wrong, but because the interaction model assumed users would stop, read, and decide. On a product page, attention doesn't work that way.
- **Solution:** Redesigned widget default state around ambient social signals — surfacing live peer activity before any click, so the value is *shown*, not described.
- **Distinctive challenge:** Designing for awareness without owning the environment — the widget lives inside someone else's site.
- **Deliverables:** Widget default state, first-interaction flow, zero-state handling, B2B placement guide for partner sites.
- **Pending before publish:** Real interaction rate numbers, Figma link, Key Decisions section (see `content/appstract.md` for ⚠️ markers).

---

## Design System

> The full token files are in `/design-handoff/`. Copy them into `src/` when bootstrapping.

### Colour — Tailwind class reference

Always use **semantic aliases** — never hardcode hex values in components.

| Tailwind class | Hex | Usage |
|---|---|---|
| `text-ink` / `bg-ink` | `#141412` | Primary text, near-black |
| `text-ink-secondary` | `#57423F` | Secondary text, warm brown |
| `text-ink-muted` | `#666666` | Muted / supporting text |
| `text-ink-faint` | `#969696` | Placeholder, disabled |
| `bg-surface` | `#FEFEFC` | Page background |
| `bg-surface-raised` | `#F7FAFC` | Nav, footer, card backgrounds |
| `bg-surface-subtle` | `#F1F2F3` | Inset tiles, tag chips |
| `border-border` | `#E5E5E5` | Default border |
| `border-border-strong` | `#D9D9D9` | Dividers |
| `bg-brand` / `text-brand` | `#6558FE` | Brand purple (primary) |
| `text-accent` / `bg-accent` | `#FADB68` | Brand yellow (name, logo mark) |
| `bg-yellow` | `#FADB68` | Highlight — yellow |
| `bg-blue-accent` | `#81E2FF` | Highlight — blue |
| `bg-green-accent` | `#B4EA93` | Highlight — green |
| `bg-pink-accent` | `#F6B7D0` | Highlight — pink |
| `bg-orange-accent` | `#FD9555` | Highlight — orange |

### Typography — Tailwind class reference

Custom utilities defined in `globals.css`. Combine with a colour class.

| Class | Figma style | Font · Weight · Size |
|---|---|---|
| `text-h1` | h1 | IBM Plex Serif · Medium Italic · 24px |
| `text-h2` | h2 | IBM Plex Serif · Medium Italic · 22px |
| `text-h3` | h3 | DM Sans · Medium · 20px |
| `text-h4` | h4 | IBM Plex Serif · Medium Italic · 16px |
| `text-body-1` | body 1 | DM Sans · Regular · 16px |
| `text-body-1-light` | body 1 light | DM Sans · Light · 16px |
| `text-body-2` | body 2 | DM Sans · Regular · 14px |
| `text-body-2-light` | body2 light | DM Sans · Light · 14px |
| `text-body-3` | body 3 | DM Sans · Light · 12px, lh 20px |
| `text-label` | meta/label | Montserrat · Medium · 12px, uppercase |
| `text-nav` | meta/top nav | Montserrat · Black · 14px, uppercase |
| `text-display` | meta/landing page | Montserrat · Black Italic · 64px |
| `text-btn` | meta/Button1 | Montserrat · Regular · 14px |
| `text-btn-sm` | meta/Button2 | Montserrat · Light · 12px |

**Example:**
```tsx
<h1 className="text-h1 text-ink">Nurtura</h1>
<p className="text-body-2 text-ink-muted">IVF companion app</p>
<span className="text-label text-ink-secondary">PERSONAL PROJECT</span>
```

### Font loading (layout.tsx)

```tsx
import { DM_Sans, IBM_Plex_Serif, Montserrat, IBM_Plex_Mono } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-sans',
})
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'], weight: ['500'], style: ['italic'], variable: '--font-serif',
})
const montserrat = Montserrat({
  subsets: ['latin'], weight: ['300', '400', '500', '900'], style: ['normal', 'italic'], variable: '--font-display',
})
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono',
})

// Add all .variable classes to <html>
```

### Spacing

Tailwind v4 uses 4px base unit — `p-4` = 16px, `p-6` = 24px, `p-8` = 32px etc.
Figma token `spacing/6` (24px) → `p-6`, `gap-6`, `px-6` in Tailwind.

### Shadow

```tsx
shadow-[0_1px_2px_rgba(0,0,0,0.05)]  // xs — default button
shadow-[0_2px_4px_rgba(0,0,0,0.08)]  // sm — elevated card
```

---

## Component API

> All components live in `src/components/`. Below are the exact prop interfaces.
> See `/design-handoff/types.ts` for the full TypeScript types.

### `ui/Button.tsx`

```tsx
interface ButtonProps {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost'  // default: 'default'
  size?: 'sm' | 'default' | 'lg' | 'icon'                  // default: 'default'
  label?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  href?: string          // renders <Link> when set
  onClick?: () => void
  className?: string
}
```

| variant | bg | border | text |
|---|---|---|---|
| `default` | `bg-border` (#E5E5E5) | — | `text-ink` |
| `secondary` | `bg-surface-subtle` (#F1F2F3) | — | `text-ink` |
| `outline` | `bg-surface` (#FEFEFC) | `border-border` | `text-ink` |
| `ghost` | transparent | — | `text-ink` |

| size | height | padding | font class |
|---|---|---|---|
| `sm` | 16px | 8px 12px | `text-btn-sm` |
| `default` | 28px | 8px 16px | `text-btn` |
| `lg` | 36px | 8px 16px | `text-btn` |
| `icon` | 36×36px | — | — |

All buttons: `rounded-sm` (2px), `shadow-[0_1px_2px_rgba(0,0,0,0.05)]`, `focus-visible:outline-2 focus-visible:outline-brand`

### `ui/CaseTile.tsx`

```tsx
interface CaseTileProps {
  variant: 'icon' | 'picture'
  icon?: React.ReactNode    // variant='icon' only, lucide at size={18}
  image?: string            // variant='picture' only, Next.js <Image> src
  imageAlt?: string
  title: string
  description: string
  className?: string
}
```

Container: `w-[536px] bg-surface-subtle rounded-[5px] p-3`
- `icon` variant: icon 18×18px, gap 10px, title `text-body-2 text-ink-secondary`
- `picture` variant: image 60×65px bg-white rounded-[10px], gap 16px, title `text-body-2 text-ink-muted`
- Description: `text-body-3 text-ink-muted` on both variants

### `sections/TopNav.tsx`

```tsx
interface TopNavProps {
  name?: string       // default: 'Hailey Yun Cho'
  links?: NavLink[]   // default: [{About,/about},{Work,/},{Resume,/resume.pdf}]
  timezone?: string   // IANA tz, default: 'Europe/Stockholm'
}
```

Design: `h-[41px] fixed top-0 w-full bg-surface-raised border-b border-border z-50 px-6`
Layout: name left (`text-nav text-accent`) · links centre (`gap-[21px]`) · timezone+clock right
Font: `text-nav` (Montserrat Black 14px, uppercase, tracking-wide) · all in `text-accent`

### `sections/Footer.tsx`

```tsx
interface FooterProps {
  name?: string           // default: 'Hailey Yun Cho'
  tagline?: string
  ctaLinks?: NavLink[]    // default: LinkedIn · Email · Resume
  navLinks?: NavLink[]    // default: Projects · About · Contact
}
```

Design: `min-h-[349px] bg-surface-raised border-t border-border px-20 py-16`
Name: `text-display text-accent` · Tagline: `text-body-1 text-ink` · CTA: `<Button>` default size · Nav: `<Button variant="ghost" size="sm">`

### `sections/ProjectCard.tsx`

```tsx
interface ProjectCardProps {
  variant?: 'default' | 'medium' | 'large'  // default: 'default'
  image: string
  imageAlt: string
  label: string       // 'CASE STUDY · SPRING 2025'
  title: string
  description: string
  href: string
  className?: string
}
```

Width: `w-[519px]` · Image heights: default=423px, medium=561px, large=731px
Label: `text-label text-ink-secondary` · Title: `text-h2 text-ink tracking-[0.44px]` · Desc: `text-body-1 text-ink-secondary`

### `sections/ProjectText.tsx`

```tsx
interface ProjectTextProps {
  label: string    // 'THE BRIEF' — section marker
  heading: string
  body: string
  className?: string
}
```

Design: `max-w-[1063px] flex flex-col gap-[10px]`
Label: `text-label` (DM Mono) · Heading: `text-h3 text-ink-muted` · Body: `text-body-2 text-ink-faint`

### `sections/SideNav.tsx`

```tsx
interface SideNavProps {
  phases: SideNavPhase[]  // { label: string; items: { id: string; label: string }[] }[]
  activeId?: string       // drives scroll-spy active highlight
  homeHref?: string       // default: '/'
}
```

Design: `w-[165px] sticky top-0 h-screen bg-surface-raised border-r border-border py-[60px]`
Phase headers: `<Button size="sm">` default variant + `<ArrowRight size={10} />` right
Sub-items: `<Button size="sm" variant="ghost">` + `<CornerDownRight size={10} />` left
Back to Top: `absolute bottom-0 left-0` `<Button size="sm">` + `<ArrowUp size={10} />` left

### `sections/ProjectNav.tsx`

```tsx
interface ProjectNavProps {
  previous?: ProjectNavItem   // { title, image, imageAlt, href }
  current?: ProjectNavItem
  next?: ProjectNavItem
}
```

Design: `w-full bg-surface-raised py-6 px-[208px] flex justify-between items-end`
Thumbnails: `w-[165px] h-[100px] rounded-sm object-cover`
Previous: `<Button leftIcon={<ArrowLeft />}>` · Next: `<Button rightIcon={<ArrowRight />}>`

---

## Component Conventions

```tsx
// File naming
CaseStudyCard.tsx       // PascalCase
use-scroll-progress.ts  // kebab-case for hooks

// Component structure
export default function ComponentName({ prop }: Props) {
  return (...)
}

// Types
interface Props {
  title: string
  href: string
}
```

- TypeScript everywhere (`.tsx` / `.ts`)
- No `any` types
- Tailwind for all styling — no CSS modules unless unavoidable
- `cn()` utility for conditional classes (`clsx` + `tailwind-merge`)
- All interactive elements must have `focus-visible` styles

---

## Working with Figma Designs

Hailey will share Figma screenshots (full page or component). When given a screenshot:

1. **Don't ask what to build** — implement what you see
2. Match spacing by eye using Tailwind increments (4px base unit)
3. If text content is visible in the screenshot, use the exact copy from `/content/` — don't use placeholder text
4. If a colour isn't in the design system, ask before hardcoding
5. Responsive behaviour: interpret desktop Figma → add mobile layout using common sense unless told otherwise

---

## Common Claude Code Tasks

| Task | How to handle |
|---|---|
| "Implement this Figma design" | Build it. Ask only if specific values are ambiguous. |
| "Add copy for X section" | Read `/content/` first. Use exact copy from there. |
| "Fix responsive layout" | Mobile-first. Test breakpoints: 375, 768, 1280px |
| "Add a new section to the case study" | Match the visual pattern of existing sections on the page |
| "Make it look more minimal" | Increase whitespace, reduce decorative elements, simplify type hierarchy |

---

## What NOT to Do

- Don't use placeholder/lorem ipsum text — use content from `/content/` or ask
- Don't add animations/transitions unless specifically asked
- Don't install UI libraries (shadcn, Radix, etc.) unless asked
- Don't refactor working code unless asked
- Don't create separate CSS files — Tailwind only
- Don't use `<img>` — use Next.js `<Image />` with `alt` text always

---

*Last updated: March 2026*
