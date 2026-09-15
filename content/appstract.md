# Appstract — Content for Portfolio Website

> Synced 2026-08-19 to match the live copy in `app/work/appstract/page.tsx` (last edited 2026-08-18), which had drifted ahead of this file. Structure below now mirrors the page 1:1: Overview → The Problem → Key Decisions → Solution → Learnings + CTA.
>
> ⚠️ Still open: no images exist yet anywhere on this page. See "Images Needed" at the bottom — that's the one real gap left before publishing.

---

## Landing Page Card

| | |
|---|---|
| **Label** | Work · Spring 2026 |
| **Title** | Appstract |
| **Tagline** | When the product already exists but no one notices it, awareness becomes a design problem. |
| **href** | `/appstract` |

---

## Meta

| | |
|---|---|
| **Project** | Appstract — social shopping widget for partner e-commerce sites |
| **Role** | Solo Designer |
| **Platform** | Web (embedded widget) |
| **Timeline** | 2–4 months |
| **Team** | Solo. Worked directly with founders. |
| **Tools** | Figma |

---

## Hero

**H1:** Appstract

**Intro line 1 (body-1):**
Social shopping widget embedded in partner e-commerce sites. The product was live. Engagement was near-zero.

**Intro line 2 (body-2-light):**
I redesigned the default state and first-interaction flow around one insight: the social activity itself is the best advertisement for the product.

---

## Overview

**Title:** Making a live product visible to the people it was built for.

**Body:**
Appstract is a social shopping layer embedded into partner e-commerce sites. By the time I joined, the widget was live. Engagement was near-zero. I was the only designer on it, working directly with the founders from research through final UI.

---

## The Problem

**Title:** Two awareness failures, one product.

**Intro:** The problem operated on two levels at once. Fixing one without the other wouldn't have changed the outcome.

1. **B2C: shoppers don't notice the widget**
   Tooltip-based prompts assumed users would stop, read, and decide. On a product page, attention doesn't work that way.

2. **B2B: partner sites aren't surfacing it**
   Even when present, the widget competed with everything else on the page. Partners had no guidance on placement or activation.

3. **The hardest constraint: no ownership of the environment**
   The widget lives inside someone else's product. It had to earn attention and communicate value in seconds, with no guaranteed context around it.

*(Right column, alongside item 1: image slot — see Images Needed)*

---

## Key Decisions

**Title:** Four calls. Each one traded something.

**Intro:** User testing, a short survey, and desk research into widget discovery patterns. The finding that drove everything: attention on a product page can't be commanded. It has to be earned.

**1. Rethinking the entry point**
- Situation: Tooltips and in-product prompts had already been tried with limited effect.
- Options: Iterate on the same approach (better copy, better timing) / Rethink the entry point entirely.
- Chosen: Shifted from "here is a tooltip explaining the feature" to designing a widget state that communicates value through its visual form. The social activity itself becomes the awareness mechanism.
- Trade-off: Longer iteration cycle. A better tooltip would have shipped faster, but the root issue was conceptual legibility, not copy quality.

**2. B2C and B2B as one connected challenge**
- Situation: Should the two problems be solved as one design challenge or two separate workstreams?
- Chosen: Treated as one: a widget compelling enough for shoppers to use would naturally become an asset partners want to promote. Solved B2C first; B2B guidance followed from that foundation.
- Trade-off: B2B-specific needs (placement logic, partner onboarding) got less dedicated design time early on.

**3. Ambient social signals in the default state**
- Situation: How much of the social experience should be visible before a user takes any action?
- Options: Keep the widget minimal until interaction / Surface ambient social signals in the default state.
- Chosen: Designed peer activity, reactions, and shared browsing indicators into the default state. The social proof is the awareness mechanic.
- Trade-off: Requires real usage data to look credible. Low-signal states in early periods need careful handling.

**4. Micro Poll as a separate flow**
- Situation: Research showed sharing attempts rarely produced a clear decision. Asking for opinions felt effortful enough that people dropped off before doing it.
- Options: Improve the existing sharing flow / Introduce a dedicated lower-friction mechanic.
- Chosen: Designed a fast reaction flow (Micro Poll) as a separate path alongside standard share. Async emoji reactions (scoped to shopping gut reactions) reduce the response bar to near-zero on both sides.
- Trade-off: Two parallel flows add UI surface area. Worth it because the use cases are genuinely distinct: share for discovery vs. get a quick opinion before deciding.

---

## Solution

**Title:** Show the social activity. Don't describe it.

1. **Widget default state: ambient social signals**
   Peer activity, reactions, and shared browsing indicators visible before any interaction. The widget earns its place on the page before asking for a click.

2. **First-interaction: frictionless entry**
   The transition from widget to active shared shopping session is designed to feel effortless. No modal, no redirect. Stays in the product page context.

3. **Micro Poll: async fast reactions**
   User sends one or more products to friends. Friends respond with a curated emoji set, async, no account required. Once reactions come in, a conversation thread opens automatically. The quick signal becomes an entry point, not a dead end.

4. **Zero-state and sparse-data handling**
   Widget behaviour when social data is sparse or the partner site is newly integrated. Early-stage low density shouldn't make the product feel abandoned.

5. **B2B placement guide**
   Recommended integration patterns for partner sites to maximise discoverability without disrupting the host page.

---

## Learnings

**Title:** What I'd do differently.

1. **Audit the partner integration earlier**
   Understanding how different partner sites were actually placing the widget (and where it was getting lost) would have shaped the constraints more precisely. I worked from assumptions that could have been replaced with observations.

2. **Awareness is a design problem, not a copy problem**
   The existing prompts failed not because the words were wrong, but because the interaction model assumed users would stop, read, and decide. Social signals create curiosity without requiring a conscious decision to engage.

3. **Invest more in the B2B side**
   The widget's success depends as much on how partners place it as on the widget design itself. Partner configuration and onboarding guidance were underspecified.

**CTA:**
- Title: Want to talk through the process?
- Body: Full designs, research synthesis, and the B2B placement guide are available on request.
- Button label: Get in touch

---

## Images Needed

The page currently renders every visual slot as an empty checkerboard placeholder — nothing has been dropped in yet. Suggested file location: `public/appstract/` (matches the `/nurtura/`, `/meview/` convention already used elsewhere).

**Must-have (the page reads as unfinished without these):**

1. **Hero cover, primary** (`100vh` slot) — The money shot: widget's ambient-signal default state live on a real partner product page. This is the first thing a hiring manager sees; it has to sell "social activity as awareness mechanic" at a glance.
2. **Hero cover, secondary** (`60vh` slot) — Either the Micro Poll flow in action, or a tighter crop/detail shot of the default-state widget. Give the second cover a distinct job from the first, not a repeat.
3. **The Problem → widget default state, before/after** — This slot already exists in the layout (`IMAGE: Widget default state · Before / After`). Old tooltip-based prompt vs. the new ambient-signal state, side by side. This is the single image that makes Decision 1 legible without reading the text.
4. **Micro Poll flow** — Screenshot sequence: send product → friend reacts with emoji → conversation thread opens. It's the most novel piece of the solution and currently has zero visual support.

**Strengthens the argument (add if time allows):**

5. **Zero-state / sparse-data handling** — Shows craft on an easy-to-skip edge case; this is often what separates a portfolio piece from a feature list.
6. **First-interaction transition** — A short before/during/after sequence (widget → active shared session), proving "no modal, no redirect" rather than just claiming it.
7. **B2B placement guide** — Can be a diagram rather than a screenshot: widget positioned correctly vs. incorrectly across a couple of partner page layouts.
8. **Process artifact** — If any research synthesis or desk-research board exists (survey results, discovery-pattern notes from Key Decisions' intro), one image here would match the process transparency Nurtura's affinity map and journey map already establish elsewhere in the portfolio.

Not needed: a separate image for Decision 2 (B2C/B2B sequencing) or Decision 3 (ambient signals) — Decision 3 is already covered by #1 and #3 above; Decision 2 is a strategic call, not a visual one.
