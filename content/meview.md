# MeView — Content for Portfolio Website

> Source: 대화 기반 케이스 스터디 정리본
> ⚠️ 표시 섹션 = 실제 데이터 필요. 웹사이트 퍼블리시 전 채워주세요.

---

## Meta

| | |
|---|---|
| **Project** | MeView — Peer Feedback Mobile App |
| **Role** | Product Designer, UI Designer |
| **Platform** | Mobile (iOS / Android) |
| **Timeline** | ⚠️ 3 months — 연도 추가 필요 (e.g. Jan–Mar 2024) |
| **Team** | Project Manager, Graphic Designer, Front-end Developer, Back-end Developer |
| **Tools** | Figma |

---

## Hero / Intro

**Headline:**
MeView — turning how others see you into something you can actually use

**Subhead / summary:**
Gen Z wants peer feedback but has nowhere structured to collect it. MeView lets users request anonymous reviews from co-workers and friends, organised by project and competency — and view results as a visual skill map. The hardest design challenge wasn't the requester flow. It was making it easy enough for responders that they'd actually follow through.

---

## Context

MeView is a mobile peer feedback service that lets Gen Z collect, organise, and visualise anonymous reviews from co-workers and friends — structured by project and competency.

The project ran for 3 months as a side project. Product and UI design was my full scope — research, IA, UI, and design system — working alongside a PM, graphic designer, and two developers.

> ⚠️ Remote or in-office? Add one line here.

---

## Problem

**Who had the problem and what was it:**
Gen Z wants to understand how others perceive them, but peer feedback in practice is scattered, subjective, and hard to act on. Existing tools sit at two extremes — LinkedIn recommendations (too formal) or DMs and verbal comments (too informal). Nothing in between was designed for self-exploration.

**Why it mattered:**
Peer feedback has no natural home. The gap isn't lack of desire — 80% of people are curious about how others see them, with Gen Z most engaged. The gap is structure. Without a dedicated space, feedback either doesn't get asked for or doesn't get given.

**Hardest constraint:**
Getting people to actually respond. Asking for feedback is emotionally vulnerable — and on the responder side, following through on a feedback request is easy to deprioritise. The responder experience needed to be frictionless enough that people would actually complete it.

> ⚠️ Technical or timeline constraints? Add if relevant.

---

## Goals

**User goal:**
Users should be able to request structured peer feedback, receive it anonymously, and view it organised by project and skill — without requiring responders to sign up.

**Business goal:**
> ⚠️ Launch metrics or targets? (e.g. response rate, sign-up conversion) Add if available.

**Definition of done:**
A working prototype covering the full requester and responder flow, with shareable output.

**Priority tiers:**
- Must-have: Feedback request flow, anonymous responder flow, results dashboard
- Nice-to-have: Social sharing, comment view per reviewer

---

## Research

**Methods:** Desk research + 10 semi-structured interviews (4 students, 6 job seekers)

**Why interviews, not surveys:** We needed to understand the emotional context — not just what people do, but how it feels to ask for and receive feedback. Survey data wouldn't have surfaced that.

**Key finding from desk research:** Post-pandemic rise in identity-focused behaviour. 80% of people curious about who they are — Gen Z most engaged.

**Key finding from interviews:** The biggest barrier to feedback isn't giving it. It's asking for it. Emotional vulnerability around requesting feedback was the core friction point.

---

## Approach

**Process:** Discover → Define → Ideate → Design → Test

**IA & flow decisions:** Structured the app around two distinct user roles — requester and responder — with a no-login responder path to reduce drop-off. The dual view (Skills / Projects) emerged from the insight that users have different goals when reviewing feedback.

**Prototype fidelity:** Hi-fi interactive prototype in Figma

**Collaboration:** Worked closely with the graphic designer on branding and character design. Handed off component specs to developers via Figma.

---

## Key Decisions

### Decision 1 — No-login responder flow
**Situation:** Responders needed to leave feedback without friction. Requiring sign-up would cause significant drop-off.
**What was chosen:** No-login responder flow via shared link — open link, respond, done.
**Trade-off:** Less accountability on the responder side. Potential for low-quality or insincere responses.

### Decision 2 — Dual view: Skills and Projects
**Situation:** Feedback could be organised by person, project, or skill. Needed to pick a primary structure.
**What was chosen:** Dual view — "View by Skills" and "View by Projects" — letting users switch based on their current goal.
**Trade-off:** More complex IA. Required careful labelling to avoid confusion between the two modes.

### Decision 3 — Anonymous by default
**Situation:** Feedback on weaknesses is emotionally risky. Users might avoid requesting it, and responders might soften their answers.
**What was chosen:** Anonymous-by-default responses with optional written elaboration.
**Trade-off:** Anonymity can reduce response accountability, but it meaningfully lowers the emotional barrier for both sides — the net effect is more honest, more frequent feedback.

### Decision 4 — Bold, character-driven visual identity
**Situation:** The brand needed to balance credibility with Gen Z appeal without feeling like a corporate HR tool.
**What was chosen:** Bold, kitsch visual identity with original mascot characters ("meView characters").
**Trade-off:** Strong personality may not translate across cultures and could feel less "professional" to some hiring contexts. This was a deliberate bet on the target audience.

---

## Solution

MeView lets users request structured peer feedback by project, receive it anonymously via a shareable link (no login required for responders), and view the results as a visual skill map — organised by competency or project.

**Key flows:**

- **Requester flow** — Create a feedback form, choose project, select competency areas, share link via social or messenger
- **Responder flow** — Open link, select perceived strengths, choose relevant body-part icons, optionally write elaboration
- **Results dashboard** — View aggregated skill tags, switch between "View by Skills" and "View by Projects", tap into individual reviewer comments

**Design system:**
Components categorised into Default and Hover states. Colour-coded by competency area. Custom character illustrations for empty states and onboarding.

**Edge cases:**
- Responders who don't know the person well — acquaintance vs. team member option
- Users with no reviews yet — empty state with prompt to send first request

---

## Impact

> ⚠️ Post-launch data? Add numbers here if available.

**Qualitative (from interviews):**
> ⚠️ If interview participants highlighted anonymity and project-based structure as the most useful features, add a quote or summary here.

**Unexpected outcome:**
> ⚠️ Anything that surprised you after testing or launch?

---

## Learnings

**Most important thing I learned:**
Reducing friction for the responder is the single biggest lever for feedback volume. The no-login flow wasn't just a nice-to-have — it was the core product decision. Everything else depended on people actually responding.

**What I'd do differently:**
> ⚠️본인의 회고 한 줄 — 다음엔 다르게 했을 것?

**What I'd explore with more time:**
Test the social sharing feature with real users to see whether "Instagrammable" output actually drives organic growth, or whether it's aspirational positioning.

**Into v2:**
Explore notification design for prompting users to share results. Consider a web version for accessibility across devices.
