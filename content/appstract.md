# Appstract: Content for Portfolio Website

> Source: appstract_portfolio_case_card_v3.docx
> ⚠️ 빨간색으로 표시된 섹션 = 실제 데이터 필요 (숫자, Figma 링크 등). 웹사이트 퍼블리시 전 채워주세요.

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
| **Project** | Appstract — a social shopping layer embedded as a widget into partner e-commerce sites |
| **Tagline** | Your group chat, inside the store. |
| **Role** | Solo Designer: product strategy, research, end-to-end UI |
| **Platform** | Web (embedded widget) |
| **Timeline** | 2–4 months |
| **Team** | Solo. No other designers. Worked directly with founders and stakeholders on strategic direction and design decisions. |
| **Environment** | Early-stage startup, internal product. Remote. |
| **Tools** | Figma |

---

## Hero / Intro

**Headline:**
Appstract: making a live product visible to the people it was built for

**Subhead / summary:**
Appstract's social shopping widget was embedded across partner e-commerce sites, but shoppers weren't engaging with it. The product existed; awareness of it didn't. I redesigned the widget's default state and first-interaction flow around a single insight: the social activity itself is the best advertisement for the product.

---

## Context

Appstract is a social shopping layer embedded as a widget into partner e-commerce sites, designed to bring shared, communal discovery into online retail.

Solo designer on an early-stage startup, end-to-end: from product strategy and research synthesis through to high-fidelity UI. No other designers. Worked directly with founders on both strategic direction and design decisions. Remote.

---

## Problem

**The core problem:**
Appstract's social shopping widget was live and embedded across partner e-commerce sites — but users weren't engaging with it. The product existed; awareness of it didn't. Shoppers were completing purchases through the same solo, transactional flows as always, without ever discovering that a shared layer was available to them.

**Two awareness problems in parallel:**

**B2C:** Shoppers on partner sites don't notice or understand the widget. The value proposition — shopping is better when shared — isn't landing at the moment of use.

**B2B:** Partner e-commerce sites aren't actively surfacing or promoting the feature. Even if the widget is present, it competes with everything else on the page for attention it isn't getting.

**Why it mattered for the business:**
A product that exists but isn't used doesn't generate the engagement data, social proof, or network effects that a social commerce platform depends on to grow. Awareness isn't a marketing problem here — it's a product and UX problem. If the widget doesn't communicate its own value in context, no amount of external promotion closes the gap.

**Constraints:**
- The integration touchpoint is a widget on third-party sites. Appstract doesn't control the surrounding page, layout, or context.
- In-product prompts and tooltips had already been tried with limited effect. The solution needed to go beyond standard UI nudges.
- No confirmed platform target, locked feature set, or established design language at the start of the engagement. High strategic ambiguity alongside a concrete live product.

**Hardest challenge:**
Designing for awareness without owning the environment. The widget lives inside someone else's product. Every solution had to work within that constraint — meaning the widget itself had to earn attention and communicate value in a matter of seconds, with no guaranteed context around it.

---

## Goals

**Goal 1 (B2C):**
A shopper on a partner site should notice the Appstract widget, immediately understand what it offers, and feel compelled to try it — ideally within a single product page visit.

**Goal 2 (B2B):**
Partner e-commerce sites should understand how to surface and promote the widget effectively, with clear placement and activation guidance.

**North star:**
Increase widget interaction rate from near-zero to measurable first engagement. The definition of activation: a user interacts with the widget at least once during a session.

**Definition of done:**
High-fidelity widget designs and first-interaction flows, validated through user testing, with a clear B2B integration playbook for partner sites.

**Priority tiers:**
- Must-have: widget discoverability, instant value communication, frictionless first interaction
- Nice-to-have: partner-side configuration UI, retention mechanics, post-session engagement hooks

> ⚠️ Add baseline widget interaction rate if available, as this makes the Impact section significantly stronger.

---

## Approach

**Process:** Discover → Define → Ideate → Prototype → Test → Refine

**Research:**
- User testing sessions to understand why existing in-product prompts and tooltips weren't converting. Goal: identify where attention drops and what language or framing resonates.
- Qualitative survey (~10 questions, ~5 min) to capture how users already involve others in shopping decisions — findings directly shaped the feature direction.
- Desk research into widget discovery patterns, contextual onboarding, and social proof mechanics in embedded third-party products.

**Design principles for this problem:**
1. Earn attention before asking for action. The widget must justify its presence before prompting a click.
2. Make the social value concrete, not abstract. "Shopping is better when shared" needs to show, not tell.
3. Design for the three-second window. On a product page, that's the realistic time available to communicate value.
4. Reduce friction on both sides. The sender's effort to share, and the receiver's effort to respond, both needed to approach zero.

**Fidelity:** Rapid low-fi concepts for widget entry states → wireframes for first-interaction flows → high-fidelity final designs. Kept fidelity low during ideation to test multiple discovery approaches before committing.

**Collaboration:** Worked closely with founders on both the B2C widget design and the B2B partner guidance. User testing findings fed directly back into design iteration.

---

## Key Decisions

### Decision 1 — Rethinking the entry point

**Situation:** The widget had already tried tooltips and in-product prompts with limited effect. Options: iterate on the same approach (better copy, better timing) or rethink the entry point entirely.

**Direction chosen:** Rethought the entry point. Shifted from "here is a tooltip explaining the feature" to designing a widget state that communicates value through its visual form — the social activity itself becomes the awareness mechanism.

**Trade-off:** More design complexity and a longer iteration cycle. A better tooltip would have shipped faster, but the root issue was conceptual legibility, not copy quality.

---

### Decision 2 — Treating B2C and B2B as one connected challenge

**Situation:** Should the B2C and B2B problems be solved as one design challenge or two separate workstreams?

**Direction chosen:** Treated as one connected challenge: a widget compelling enough for shoppers to use would naturally become an asset partners want to promote. Solved B2C first; B2B guidance followed from that foundation.

**Trade-off:** B2B-specific needs (placement logic, configuration, partner onboarding) got less dedicated design time early on.

---

### Decision 3 — Ambient social signals in the default state

**Situation:** How much of the social experience should be visible before a user takes any action? Show ambient social signals vs. keep the widget minimal until interaction.

**Direction chosen:** Designed ambient social signals (reactions, peer activity, shared browsing indicators) into the widget's default state. The social proof is the awareness mechanic.

**Trade-off:** Requires real usage data to look credible. Empty or low-signal states in early periods need careful handling to avoid the widget feeling abandoned.

---

### Decision 4 — Introducing Micro Poll as a separate flow

**Situation:** Qualitative research showed sharing attempts rarely produced a clear decision, and asking for opinions felt too effortful. Options: improve the existing sharing flow or introduce a new lightweight mechanic.

**Direction chosen:** Designed a dedicated fast reaction flow (Micro Poll) as a separate, lower-friction path alongside the standard share. Async emoji reactions reduce the response bar to near-zero on both sides.

**Trade-off:** Two parallel sharing flows add UI surface area and require users to choose a path. The tradeoff was worth it because the use cases are genuinely distinct.

---

## Solution

**Summary:**
A redesigned embedded widget and first-interaction flow, built around a single insight: the social activity itself is the best advertisement for the product. The widget's default state surfaces live social signals to create curiosity and communicate value before any click. A dedicated fast reaction feature further reduces the friction of getting opinions from friends.

**Key flows designed:**

- **Widget default state:** ambient social signals (peer activity, reactions, shared browsing indicators) visible without any interaction required.
- **First-interaction moment:** frictionless entry into the shared shopping experience from the product page context.
- **In-widget onboarding:** progressive disclosure of social mechanics without pulling users away from the shopping page.
- **Zero-state handling:** widget behaviour when social data is sparse, so early-stage low density doesn't undermine credibility.
- **Micro Poll / Fast Reaction flow:** see Feature Deep Dive below.
- **B2B placement guide:** recommended integration patterns for partner sites to maximise widget discoverability without disrupting the host page.

**Design system:**
Established widget-specific components: entry state variants, social signal indicators, reaction patterns, and interaction states. Designed to integrate cleanly across different partner site environments.

**Edge cases:**
Zero-state (no social data yet), single-user state (the shopper is alone), sparse-data state on newly integrated partner sites, and the transition from reaction to active conversation thread.

> ⚠️ Add Figma link or screenshots of widget states here.

---

## Feature Deep Dive: Micro Poll / Fast Reaction

### The Research Behind It

Two findings from qualitative research pointed directly to this feature:

**Finding 1:** Sharing attempts rarely produced a clear decision. Conversations would start in group chats or DMs and fade out without resolution — not because people didn't care, but because there was no low-effort way to respond.

**Finding 2:** Asking for opinions felt effortful enough that people dropped off before doing it at all. Composing a message, providing context, and waiting for a reply was too high a cost relative to the perceived value.

The design response: reduce the ask on both sides. For the sender — one flow to share, no message required. For the receiver — a curated emoji set, no typing, just a gut reaction.

---

### What It Does

**Where it lives:** Triggered when a user decides to share items from their cart. They can select this flow instead of a standard share.

**Core mechanic:** The user sends one or multiple products to friends. Friends respond with an emoji from a custom set — async, whenever suits them. Once reactions come in, a conversation thread opens automatically, so a quick reaction can escalate into a fuller discussion if needed.

**Reaction type:** Custom emoji set — curated for shopping-relevant gut reactions (not a generic emoji picker).

**Mode:** Async — friends respond in their own time. No pressure, no live session required.

---

### How It Works

1. **Trigger** — User is viewing their cart and wants a quick opinion. They select the Micro Poll flow from the sharing options.
2. **Select products** — User picks one or multiple products to send. No message required — the product card does the talking.
3. **Send** — Friends receive the product(s) and a prompt to react with the custom emoji set.
4. **React** — Friends respond with an emoji — async, no account required at the reaction step. Near-zero friction on the receiver's side.
5. **Thread opens** — Once reactions come in, a conversation thread opens with the reaction as the first message. The quick signal can naturally become a fuller conversation.

---

### Design Rationale

**Why async:** Synchronous co-shopping requires both parties to be available at the same time — a high coordination cost that most casual sharing scenarios don't justify. Async respects the reality of how friends communicate.

**Why a custom emoji set:** A generic emoji picker puts the cognitive load on the receiver. A curated set scoped to shopping reactions (love it, not sure, too expensive, yes get it) removes decision paralysis and makes responding feel like a reflex, not a task.

**Why thread after reaction:** The feature shouldn't dead-end. A reaction is a signal, not a conclusion. Threading reactions into a conversation means the micro poll is an entry point into deeper engagement — not a replacement for it.

**Why a separate flow:** The standard sharing flow serves a different intent — sharing for awareness or discovery. Micro Poll serves a specific intent: I need a quick opinion before I decide. Keeping them as separate flows preserves clarity of purpose on both sides.

---

### Scope & Edge Cases

**In scope:**
- Single and multi-product poll sending
- Custom emoji reaction set
- Async reaction receipt and display
- Automatic thread creation on first reaction
- Empty state when no reactions have come in yet

**Edge cases designed for:**
- No reactions received — a waiting state that doesn't feel abandoned.
- Partial reactions — some friends have reacted, others haven't. The thread opens with whoever has responded.
- Multi-product poll — reactions are tied to specific products, not the poll as a whole.

**Not in scope (v1):**
- Timed polls or reaction deadlines
- Aggregated reaction analytics for the sender
- Public or open polls beyond direct friend sharing

> ⚠️ Add Figma link or screenshots of Micro Poll flow here.
> ⚠️ Add any user testing findings specific to this feature — e.g. X out of Y participants completed a reaction without prompting.

---

## Impact

**Research foundation:**
User testing sessions identified the specific drop-off points in the existing tooltip approach and validated which social signals generated the most curiosity and intent to interact. Qualitative survey findings directly led to the Micro Poll feature.

> ⚠️ Replace the placeholders below with real data before publishing:
> - Widget interaction rate before redesign: X% → after: Y%
> - X out of Y users in testing engaged with the redesigned widget vs. the previous version
> - Strongest user quote from testing that validates the awareness approach
> - Partner site response to the placement guide / B2B recommendations
> - Micro Poll: X out of Y test users completed a fast reaction without prompting

**Compared to goals:**
The redesign addressed the root cause — conceptual illegibility at the point of use — rather than iterating on the surface of the existing tooltip approach. The Micro Poll feature directly closed the gap between intent to share and actual sharing behaviour identified in research.

---

## Learnings

**Most important thing I learned:**
Awareness is a design problem, not a copy problem. The existing prompts failed not because the words were wrong, but because the interaction model assumed users would stop, read, and decide. On a product page, that's not how attention works. Social signals create curiosity without requiring a conscious decision to engage.

**What I'd do differently:**
Audit the partner integration earlier. Understanding how different partner sites were actually placing the widget — and where it was getting lost — would have shaped the design constraints more precisely from the start.

**What I'd explore with more time:**
Run longitudinal testing to measure whether first-interaction users return and bring others. Also explore the invitation loop more deeply — growth in social products lives there. And invest more in the B2B side: partner configuration, onboarding, and success metrics guidance.

**Into v2:**
Design the sparse-data and new-partner states more robustly. Explore whether partners can seed early social activity to avoid the cold-start problem. Begin designing the post-session experience — what happens after a shared moment to drive return visits. Extend the Micro Poll into a richer async decision-making tool.
