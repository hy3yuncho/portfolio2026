# Appstract — Content for Portfolio Website

> Source: appstract_portfolio_case_card_v2.docx
> ⚠️ 빨간색으로 표시된 섹션 = 실제 데이터 필요 (숫자, Figma 링크 등). 웹사이트 퍼블리시 전 채워주세요.

---

## Meta

| | |
|---|---|
| **Project** | Appstract — social shopping widget for partner e-commerce sites |
| **Role** | Solo Designer — product strategy, research, end-to-end UI |
| **Platform** | Web (embedded widget) |
| **Timeline** | 2–4 months |
| **Team** | Solo. Worked directly with founders and stakeholders. |
| **Tools** | Figma |

---

## Hero / Intro

**Headline:**
Appstract — making a live product visible to the people it was built for

**Subhead / summary:**
Appstract's social shopping widget was embedded across partner e-commerce sites — but shoppers weren't engaging with it. The product existed; awareness of it didn't. I redesigned the widget's default state and first-interaction flow around a single insight: the social activity itself is the best advertisement for the product.

---

## Context

Appstract is a social shopping layer embedded as a widget into partner e-commerce sites — designed to bring shared, communal discovery into online retail.

Solo designer on an early-stage startup, end-to-end: from product strategy and research synthesis through to high-fidelity UI. No other designers. Worked directly with founders on both strategic direction and design decisions. Remote.

---

## Problem

**Two awareness problems in parallel:**

**B2C:** Shoppers on partner sites don't notice or understand the widget. The value proposition — shopping is better when shared — isn't landing at the moment of use.

**B2B:** Partner e-commerce sites aren't actively surfacing or promoting the feature. Even if the widget is present, it competes with everything else on the page for attention it isn't getting.

**Why it mattered for the business:**
A product that exists but isn't used doesn't generate the engagement data, social proof, or network effects that a social commerce platform depends on to grow. Awareness isn't a marketing problem here — it's a product and UX problem. If the widget doesn't communicate its own value in context, no amount of external promotion closes the gap.

**Constraints:**
- The integration touchpoint is a widget on third-party sites — Appstract doesn't control the surrounding page, layout, or context.
- In-product prompts and tooltips had already been tried with limited effect. The solution needed to go beyond standard UI nudges.
- No confirmed platform target, locked feature set, or established design language at the start of the engagement.

**Hardest challenge:**
Designing for awareness without owning the environment. The widget lives inside someone else's product. Every solution had to work within that constraint — which meant the widget itself had to earn attention and communicate value in a matter of seconds, with no guaranteed context around it.

---

## Goals

**User goal (B2C):**
A shopper on a partner site should notice the Appstract widget, immediately understand what it offers, and feel compelled to try it — ideally within a single product page visit.

**Business goal (B2B):**
Partner e-commerce sites should understand how to surface and promote the widget effectively, with clear placement and activation guidance.

**North star:**
Increase widget interaction rate from near-zero to measurable first engagement. The definition of activation: a user interacts with the widget at least once during a session.

**Definition of done:**
High-fidelity widget designs and first-interaction flows, validated through user testing, with a clear B2B integration playbook for partner sites.

**Priority tiers:**
- Must-have: widget discoverability, instant value communication, frictionless first interaction
- Nice-to-have: partner-side configuration UI, retention mechanics, post-session engagement hooks

> ⚠️ Add baseline widget interaction rate if available — this makes the Impact section significantly stronger.

---

## Approach

**Process:** Discover → Define → Ideate → Prototype → Test → Refine

**Research:**
- User testing sessions to understand why existing in-product prompts and tooltips weren't converting. Goal: identify where attention drops and what language or framing resonates.
- Desk research into widget discovery patterns, contextual onboarding, and social proof mechanics in embedded third-party products.
- Survey-driven synthesis to capture how users already involve others in shopping decisions — used to sharpen the value proposition language inside the widget.

**Design principles for this problem:**
1. Earn attention before asking for action. The widget must justify its presence before prompting a click.
2. Make the social value concrete, not abstract. "Shopping is better when shared" needs to show, not tell.
3. Design for the three-second window. On a product page, that's the realistic time available to communicate value.
4. Respect the host environment. The widget is a guest on someone else's site — it should integrate without disrupting.

**Fidelity:** Rapid low-fi concepts for widget entry states → wireframes for first-interaction flows → high-fidelity final designs. Kept fidelity low during ideation to test multiple discovery approaches before committing.

**Collaboration:** Worked closely with founders on both the B2C widget design and the B2B partner guidance. User testing findings fed directly back into design iteration.

---

## Key Decisions

> ⚠️ This section needs your input — list 3–5 specific decisions you made.
> Format: Situation → Options considered → Direction chosen → Trade-off

*(To be filled in)*

---

## Solution

**Summary:**
A redesigned embedded widget and first-interaction flow, built around a single insight: the social activity itself is the best advertisement for the product. The widget's default state surfaces live social signals to create curiosity and communicate value before any click.

**Key flows designed:**

- **Widget default state** — ambient social signals (peer activity, reactions, shared browsing indicators) visible without any interaction required.
- **First-interaction moment** — frictionless entry into the shared shopping experience from the product page context.
- **Onboarding within the widget** — progressive disclosure of social mechanics without pulling users away from the shopping page.
- **Zero-state handling** — widget behaviour when social data is sparse, so early-stage low density doesn't undermine credibility.
- **B2B placement guide** — recommended integration patterns for partner sites to maximise widget discoverability without disrupting the host page.

**Design system:**
Established widget-specific components: entry state variants, social signal indicators, reaction patterns, and interaction states. Designed to integrate cleanly across different partner site environments.

**Edge cases:**
Zero-state (no social data yet), single-user state (the shopper is alone but should still feel the potential of shared shopping), and the moment of transition from widget to active shared session.

> ⚠️ Add Figma link or screenshots of widget states here.

---

## Impact

**Research foundation:**
User testing sessions identified the specific drop-off points in the existing tooltip approach and validated which social signals generated the most curiosity and intent to interact.

> ⚠️ Replace the placeholders below with real data before publishing:
> - Widget interaction rate before redesign: X% → after: Y%
> - X out of Y users in testing engaged with the redesigned widget vs. the previous version
> - Strongest user quote from testing that validates the awareness approach
> - Partner site response to the placement guide / B2B recommendations
> - Any unexpected behaviour observed post-launch

**Compared to goals:**
The redesign addressed the root cause — conceptual illegibility at the point of use — rather than iterating on the surface of the existing tooltip approach. Qualitative testing confirmed users understood the widget's value faster with the ambient social signal approach than with the previous copy-led prompts.

---

## Learnings

**Most important thing I learned:**
Awareness is a design problem, not a copy problem. The existing prompts failed not because the words were wrong, but because the interaction model assumed users would stop, read, and decide — on a product page, that's not how attention works. Social signals create curiosity without requiring a conscious decision to engage.

**What I'd do differently:**
Audit the partner integration earlier. Understanding how different partner sites were actually placing the widget — and where it was getting lost — would have shaped the design constraints more precisely from the start.

**What I'd explore with more time:**
Run longitudinal testing to measure whether first-interaction users return and bring others. The real measure of the redesign isn't a single session click — it's whether the social loop activates. Also invest more in the B2B side: partner site configuration, onboarding, and success metrics guidance.

**Into v2:**
Design the sparse-data and new-partner states more robustly. Explore whether partner sites can seed early social activity to avoid the cold-start problem. Begin designing the post-session experience — what happens after a shared shopping moment to drive return visits.
