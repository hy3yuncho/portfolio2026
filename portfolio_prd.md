# Hailey Yun Cho · Portfolio Website
### *UX/Product Design Portfolio*
**Product Requirements Document · v1.0**

| | |
|---|---|
| **Product** | Portfolio Website — haileycho.com (or similar) |
| **Platform** | Web (desktop-first, responsive) |
| **Version** | v1.0 — Launch |
| **Author** | Hailey Yun Cho |
| **Status** | In Design |
| **Stack** | Next.js 15 · Tailwind CSS v4 · TypeScript · Vercel |

---

## 1. Product Overview

### 1.1 Problem Statement

Hiring managers at Nordic and European startups receive dozens of portfolio links per role. Most portfolios fail at the same point: they show *what* was designed, not *why* specific decisions were made. The designer disappears behind polished mockups.

> **The real job of a portfolio:** Make a time-poor hiring manager think "this person thinks the way we do" within the first 90 seconds — and give them enough to justify booking a call.

### 1.2 Product Hypothesis

If the portfolio leads with concrete design thinking — named decisions, specific constraints, acknowledged tradeoffs — rather than process labels and deliverable lists, it will resonate more with design-literate reviewers at Nordic startups who value clarity over polish.

### 1.3 What This Portfolio Is

A static, fast-loading website with 4 full case studies and an about page. Content-forward. Each case study is structured as a design argument, not a timeline.

| Pages | Purpose |
|---|---|
| Home `/` | Immediate context: who Hailey is + what she's done. Entry to all 4 case studies. |
| Nurtura `/nurtura` | IVF support app. Research → design chain. Most complete case study — leads. |
| Detectify `/detectify` | [Content pending] |
| Appstract `/appstract` | Social shopping widget. Widget discoverability + ambient social signals. |
| MeView `/meview` | Peer feedback app for Gen Z. No-login responder flow, dual skill/project view. |
| About `/about` | Background, skills, contact. |

---

## 2. Users

### 2.1 Primary User

**The Hiring Manager / Design Lead** — reviewing 10–20 portfolios per open role.

| | |
|---|---|
| **Context** | Scanning on desktop, often between meetings. 60–90 seconds before deciding to read further. |
| **What they want** | Signal that the designer can think, not just execute. Concrete evidence of decisions and reasoning. |
| **What they fear** | Wasting time on a portfolio that's all process diagrams and no substance. |
| **What makes them book a call** | A case study that explains *why* a decision was made, with a specific tension or constraint named. |

### 2.2 Secondary User

**The Recruiter** — doing initial screen. Design-literate but not a practitioner.

| | |
|---|---|
| **Context** | Looking for proof points to pass forward: role type, company type, seniority signals. |
| **What they want** | Fast legibility. Role clarity. A portfolio that looks credible. |
| **Failure mode** | Gives up if the first page doesn't communicate the role level and type clearly. |

### 2.3 User Insight → Design Decision Chain

| Insight | Design decision |
|---|---|
| 60–90 second first impression | Home page must communicate who Hailey is + what she designs in one screenful |
| Readers scan before they read | Case study pages need clear visual hierarchy — summary, then detail |
| Nordic hiring culture values directness | No hype language. Specific, modest, exact. |
| Hiring managers are design-literate | Don't over-explain. Show the decision; trust the reader to evaluate it. |
| Mobile review happens but is secondary | Desktop-first design. Mobile must work but not at the expense of desktop clarity. |

---

## 3. Goals & Success Metrics

### 3.1 Primary Goal

Generate interview invitations from product design roles at Nordic/European startups and design agencies.

### 3.2 Measurable Signals

| Metric | Target |
|---|---|
| Hiring manager reaches out after viewing | Primary success signal — not trackable directly, but inbound messages are the proxy |
| Time on a case study page | >2 min = the story is working |
| Scroll depth on case study | >70% = the structure is holding attention |
| Bounce from home without clicking | <40% = the hero is doing its job |
| Page load time (LCP) | <2.5s on desktop, <3.5s on mobile |

### 3.3 Definition of Done (v1.0)

- All 3 case studies live with full copy and images
- Home page communicates role and type in one screenful
- Passes WCAG AA on text contrast
- Loads in under 2.5s on desktop
- Responsive and readable at 375px, 768px, 1280px

---

## 4. Page Specifications

---

### P01 · Home

**Purpose:** First impression. Signal design thinking quality. Route visitors to the right case study.

**Priority:** P0 — Critical

| Section | Content | Design note |
|---|---|---|
| **Hero** | Name + role label + one-line positioning statement | One screenful. No scroll required to get the essential context. |
| **Case study index** | 4 cards — see card data below | Cover image + label + title + tagline. |
| **Brief intro** | 2–3 sentences: what kind of designer Hailey is + what she's looking for | Not a full bio — that's the About page. Just enough to humanise. |

**Case study card data (confirmed):**

| Title | Label | Tagline |
|---|---|---|
| Nurtura | Personal project · Spring 2025 | Designing emotional safety into an IVF community. |
| MeView | Personal project · Spring 2024 | Feedback exchange made honest by anonymity, and useful by structure. |
| Appstract | Work · Spring 2026 | When the product already exists but no one notices it, awareness becomes a design problem. |
| Detectify | Work · Spring 2026 | A design system for a B2B security product where accessibility is the standard. |

**Key interaction:** Case study card → case study page. No other navigation needed except nav bar.

**Content status:** ✅ Ready

---

### P02 · Nurtura Case Study

**Purpose:** Showcase research-to-design thinking. The lead case study — most complete, most defensible.

**Priority:** P0 — Critical

| Section | Content | Design note |
|---|---|---|
| **Hero** | Title + one-line summary + meta (role / timeline / platform) | Sets stakes immediately |
| **The problem** | Research findings: 52% forum avoidance, 75% lonely, 77% prefer mobile | Numbers first. No paragraph-long preamble. |
| **Research → decisions table** | 5 findings mapped to 5 design decisions | The core of the case study. This is the argument. |
| **Users** | 3 personas (Billie, Mintra, Liam) — summary cards | Brief. Names + pain points, not full persona sheets. |
| **Key screens** | 5–7 annotated screens from the 17-screen set | Each annotation: what the screen does + which research insight it responds to. |
| **Key decision spotlight** | S03 Content Preferences — expanded | This is the strongest moment. Give it its own section. |
| **Prototype** | Embed or link to the React Native prototype (S01–S04) | Proof of execution depth |
| **Open questions / reflections** | Honest — what's unresolved and why | Shows intellectual maturity |

**Content status:** ✅ Ready — see `content/nurtura.md`

---

### P03 · Detectify Case Study

**Purpose:** Showcase design systems thinking and accessibility-first approach in a high-stakes B2B context. The broader project was a 6-month design system overhaul — this case study zooms into the table redesign as the most critical, most complex workstream within it.

**Priority:** P1 — Core

**⚠️ NDA constraint:** No UI screenshots can be shown publicly. This page is **text-only**. Do not add image placeholders. End with a CTA directing to email for full spec.

| Section | Content | Design note |
|---|---|---|
| **Hero** | Hook: "When tables are the product, table UX isn't a component problem. It's a product problem." | One line. Sets stakes immediately. |
| **Overview** | Role / Timeline / Platform / Users / Tools | Standard meta row |
| **The Problem** | 3 friction points: no visual hierarchy / inconsistent interactions / WCAG failures | Each point named and specific — not "the UX was complex" |
| **Constraints** | No research access / high blast radius / incremental ship / NDA | NDA stated plainly — reads as professional, not evasive |
| **Process** | Audit → Define → Design (3 phases) | Figma MCP mention lands naturally in Design phase |
| **Key Decisions** | 3 decisions (Decision 3 ⚠️ still needed) | Each: situation / options / choice / trade-off |
| **Impact** | WCAG AA achieved / design system standard / handoff time reduced | Close with: "Specific metrics available on request." |
| **Reflection** | Designing high-blast-radius component without user testing | Honest about the constraint |
| **CTA** | "Want to see the full component spec? Get in touch →" | Routes to email |

**Content status:** ⚠️ Partially blocked — `content/detectify.md` has full content except Decision 3. Can be built as text-only page now.

---

### P04 · Appstract Case Study

**Purpose:** Showcase constraint-driven design thinking. The "designing without control of the environment" case.

**Priority:** P1 — Core (once missing data is added)

| Section | Content | Design note |
|---|---|---|
| **Hero** | Title + one-line summary + meta | Lead with the constraint: "A widget on someone else's site" |
| **The problem** | Two parallel awareness problems (B2C + B2B) | Name both. The parallel structure is part of the story. |
| **The hardest constraint** | Designing without owning the environment | This is the distinctive angle — foreground it |
| **Approach** | 4 design principles + process | Principles are stronger than process steps here |
| **Key screens** | Widget default state, first-interaction, zero-state, B2B guide | ⚠️ Needs Figma link / screenshots |
| **Key decisions** | ⚠️ Needs content | Most important missing piece |
| **Impact** | ⚠️ Needs real numbers | Qualitative testing results exist; add quantitative when available |
| **Learnings** | Awareness is a design problem, not a copy problem | Strong closer — use it |

**Content status:** ⚠️ Partially ready — see `content/appstract.md`. Missing: Key Decisions, interaction rate numbers, Figma link.

---

### P05 · MeView Case Study

**Purpose:** Showcase cross-functional team collaboration and research-to-decision transparency. The "emotional UX + systemic thinking" case — responder friction as the core product problem.

**Priority:** P1 — Core (partially blocked, see content status)

| Section | Content | Design note |
|---|---|---|
| **Hero** | Title + one-line summary + meta (role / timeline / team) | Lead with the distinctive angle: "the hardest part wasn't the requester flow" |
| **The problem** | Two extremes gap: LinkedIn vs DMs. Nothing for self-exploration. | Name the specific insight: 80% of Gen Z curious about self-perception |
| **Hardest constraint** | Getting responders to actually follow through — emotional vulnerability on both sides | This reframes the whole product |
| **Research** | 10 interviews + desk research — why interviews, not surveys | Show the methodological choice, not just the findings |
| **Key decisions** | 4 decisions: no-login flow / dual view / anonymous by default / bold visual identity | Each one has a named trade-off — this is the strength of this case |
| **Key screens** | Requester flow / Responder flow / Results dashboard | ⚠️ Needs Figma screenshots |
| **Design system** | Component states, competency colour-coding, mascot characters | Visual identity as product decision — not just aesthetics |
| **Impact** | ⚠️ Needs post-launch data | Qualitative from interviews if quantitative unavailable |
| **Learnings** | No-login flow = core product decision, not nice-to-have | Strong closer |

**Content status:** ⚠️ Partially blocked — see `content/meview.md`. Missing: project year, post-launch data, remote/in-office, personal retrospective, Figma screenshots.

---

### P06 · About

**Purpose:** Human context behind the work. Bio, experience, education, photos, contact. Visitors land here after a case study — this is where they decide whether to reach out.

**Priority:** P1 — Core

**Layout:** Two-column on desktop (bio left, experience/education right). Single column on mobile.

#### Navigation
| Element | Content |
|---|---|
| Logo | Hailey Yun Cho |
| Nav links | About · Work · Resume |
| Right side | "Europe/Stockholm" + live local time display |

#### Section 1 — Bio (left column)
| Element | Content | Design note |
|---|---|---|
| **Heading** | "Hej, I'm Hailey!" | Casual, Swedish greeting — signals cultural awareness |
| **Paragraph 1** | "I'm a product designer working at the intersection of business logic and human behaviour." | One sentence. Sets role and framing. |
| **Paragraph 2** | 연 (yeon 緣) concept — invisible connections that shape meaning between people and contexts | The philosophical anchor. Gives the work a point of view. |
| **Paragraph 3** | "That idea guides my work. I design by identifying the underlying threads that connect user decisions, business goals, and brand clarity." | Connects philosophy to practice. |
| **Paragraph 4** | "Born in South Korea, shaped in Australia, and now based in Sweden..." | Cross-cultural + psychology background. Explains the lens. |
| **Outside of design** | Short bullet list of personal interests | Human texture. ⚠️ 3 items still placeholder — fill in. |

#### Section 2 — Experience (right column)
| Company | Role | Period |
|---|---|---|
| Detectify | Product Design Intern | Spring 2026 |
| Appstract | Product Designer | Spring 2026 |
| Arniqa | Product Design Intern | Summer 2025 |
| Valtech Radon | Creative Strategy Intern | Spring 2025 |
| Deloitte Consulting | FS Strategy Associate | June 2023 – Mar 2024 |

**Design note:** Each row: Company name (bold) / Role (muted) / Period (right-aligned). Clean list, no cards.

#### Section 3 — Education (right column, below experience)
| Institution | Programme | Period |
|---|---|---|
| Hyper Island | Digital Creative | 2024–2026 |
| Australian National University | B.S Psychology, B.C Finance | 2019–2023 |

#### Section 4 — Photos
4-image horizontal grid spanning full content width. No captions.

> ⚠️ Images TBD — `public/images/about/` 폴더에 저장. 어떤 사진을 넣을지 결정 필요.

#### Section 5 — Footer
| Element | Content | Design note |
|---|---|---|
| **Name** | "Hailey Yun Cho" | Large display type — styled / expressive font, yellow/orange |
| **Tagline** | ⚠️ Short description — open to roles, based in Stockholm | 1–2 lines max |
| **CTA buttons** | LINKEDIN · EMAIL · RESUME | Three outlined buttons. All caps. |
| **Footer nav** | Projects · About · Contact | Right-aligned |

**Content status:** ✅ Structure ready — see `content/about.md`. Missing: 3 personal interest bullets, 4 photos, footer tagline, LinkedIn/email/resume URLs.

---

## 5. Design System

### 5.1 Typography

| | |
|---|---|
| **Heading font** | [TBD from Figma] — suggest a clean geometric or humanist sans-serif |
| **Body font** | [TBD from Figma] — readable at 16–18px, comfortable for long case studies |
| **Scale** | 4px base unit. Type scale: 12 / 14 / 16 / 18 / 24 / 32 / 48 / 64 |
| **Weight** | Regular (400) for body, Medium (500) for UI labels, Semibold (600) for headings |

### 5.2 Colour

| Token | Use |
|---|---|
| `--color-text-primary` | Main body text |
| `--color-text-secondary` | Captions, metadata, secondary labels |
| `--color-text-muted` | Timestamps, tertiary info |
| `--color-bg-page` | Page background |
| `--color-bg-surface` | Card / section backgrounds |
| `--color-border` | Dividers, card borders |
| `--color-accent` | Links, hover states, CTAs |

> ⚠️ All values TBD from Figma. Do not hardcode hex values until Figma tokens are defined.

### 5.3 Spacing

Base unit: 4px.

| Token | Value |
|---|---|
| `spacing-xs` | 4px |
| `spacing-sm` | 8px |
| `spacing-md` | 16px |
| `spacing-lg` | 24px |
| `spacing-xl` | 32px |
| `spacing-2xl` | 48px |
| `spacing-3xl` | 64px |
| `spacing-4xl` | 96px |

### 5.4 Layout

| | |
|---|---|
| **Max content width** | `max-w-5xl` — 1024px, centred |
| **Grid** | 12-column on desktop · 4-column on mobile |
| **Section padding** | 96px top/bottom on desktop · 64px on mobile |
| **Case study body width** | `max-w-2xl` — 672px for prose readability |

---

## 6. Component Inventory

| Component | Used on | Notes |
|---|---|---|
| `Nav` | All pages | Logo + links. Sticky on desktop. |
| `CaseStudyCard` | Home | Title / description / role tag / cover image / hover state |
| `CaseStudyHero` | Case study pages | Title + meta row |
| `SectionHeading` | Case study pages | Section number + label pattern |
| `ResearchTable` | Nurtura | Finding → Insight → Decision 3-col table |
| `PersonaCard` | Nurtura | Name / pain point / need — compact |
| `ScreenAnnotation` | Case study pages | Screen image + annotation text |
| `DecisionBlock` | Appstract | Situation → Options → Choice → Trade-off |
| `Tag` | Multiple | Role / platform / timeline labels |
| `ExperienceRow` | About | Company / Role / Period — single row, no card |
| `PhotoGrid` | About | 4-image horizontal grid, full content width |
| `DisplayName` | About footer | Large expressive type — "Hailey Yun Cho" |
| `LocalTime` | About nav | Live clock showing Stockholm time |
| `Footer` | All pages | Minimal — email + LinkedIn |

---

## 7. Non-Functional Requirements

| Area | Requirement |
|---|---|
| **Performance** | LCP < 2.5s desktop. All images via Next.js `<Image />` with lazy loading. |
| **Accessibility** | WCAG AA text contrast minimum. All interactive elements keyboard navigable. Focus states visible. |
| **SEO** | `<title>` and `<meta description>` per page. Open Graph tags for sharing. |
| **Responsive** | Tested at 375px (mobile), 768px (tablet), 1280px (desktop). |
| **No JS required for content** | Static rendering. Case study text must be readable without JS. |
| **Analytics** | Simple Vercel Analytics — page views, referrers. No cookie banner needed (no PII). |

---

## 8. Content Readiness

| Page | Status | Blocking |
|---|---|---|
| Home | ✅ Can be built | Needs final About blurb |
| Nurtura | ✅ Can be built | Needs screen exports from Figma |
| MeView | ⚠️ Partially blocked | Year/timeline, post-launch data, screenshots missing |
| Appstract | ⚠️ Partially blocked | Key Decisions, numbers, Figma link missing |
| About | ⚠️ Partially blocked | Structure + bio ready. Missing: 3 interest bullets, 4 photos, footer tagline, contact URLs |
| Detectify | ⚠️ Partially blocked | Decision 3 missing. Text-only page — can be built without screenshots. |

**Build order:** Nurtura → Home → MeView → Appstract → Detectify → About

---

## 9. Out of Scope (v1.0)

Deliberately excluded to launch faster:

- Blog or writing section
- Password-protected case study mode
- Dark mode toggle
- Contact form (email link is sufficient)
- Case study PDF export
- Multi-language support
- CMS — all content stays in markdown files

---

## 10. Open Questions

| # | Question | Owner | Status |
|---|---|---|---|
| Q1 | What's the domain name? (haileycho.com, haileydesign.com, etc.) | Hailey | Open |
| Q2 | What font is used in the Figma wireframes? | Hailey | Open |
| Q3 | Detectify Decision 3 — 엔지니어링과 논의하면서 방향을 바꾼 결정, 또는 filter/sort UX 관련 결정 | Hailey | Open |
| Q4 | Prototype embed for Nurtura: iframe from Expo or recorded video? | Hailey | Open |
| Q5 | About page — 3 personal interest bullets (outside of design), 4 photos, footer tagline | Hailey | Partially resolved |
| Q6 | Appstract Key Decisions section — 3 decisions needed before that page can be finished | Hailey | Open |
| Q7 | MeView project year | Hailey | ✅ Jan–Mar 2024, 3 months |
| Q8 | MeView post-launch data — any response rate, sign-up numbers, or user quotes from testing? | Hailey | Open |
| Q9 | MeView team setup — remote or in-office? | Hailey | ✅ Side project, fully remote |

---

*Portfolio PRD v1.0 · Hailey Yun Cho · March 2026*
