# MeView: Content for Portfolio Website

> Source: MeView_CaseStudy_v2.md
> 이 파일의 구조 = 웹 페이지 섹션 순서와 1:1 대응.
> `[ IMAGE: ... ]` 표시 = 해당 위치에 Figma 스크린샷 삽입 필요.
> Claude Code: 섹션 순서와 카피를 그대로 사용할 것. 재해석 금지.

---

## Landing Page Card

| | |
|---|---|
| **Label** | Personal project · Spring 2024 |
| **Title** | MeView |
| **Tagline** | Feedback exchange made honest by anonymity, and useful by structure. |
| **href** | `/meview` |

---

## Meta (Hero 상단 표시)

| | |
|---|---|
| **Timeline** | Jan – Mar 2024 (3 months) |
| **Role** | Product Designer, UX Researcher |
| **Platform** | iOS · Android |
| **Team** | PM, Graphic Designer, Front-end Developer, Back-end Developer |
| **Tools** | Figma |

---

## Hero

**Title:** MeView

**Subtitle:**
*Turning how others see you into something you can actually use*

**Description:**
A mobile peer feedback app for Gen Z, structured by project and skill, anonymous by default, and designed around the person who has to respond.

---

## Section 1: Context

**Section heading:** A simple brief. A real gap.

MeView lets Gen Z collect anonymous peer feedback by project and competency, then view results as a visual skill map.

Three months, fully remote. I owned research, IA, UI, and design system, working alongside a PM, graphic designer, and two developers.

---

## Section 2: The Problem

**Section heading:** People want peer feedback. They have no good way to get it.

Existing tools sit at two extremes: LinkedIn recommendations (too formal) or DMs and verbal comments (too informal). Nothing in between was designed for honest self-exploration.

**The gap isn't desire. It's structure.**
80% of people are curious about how others see them. Without a dedicated space, feedback either doesn't get asked for or doesn't get given.

**Asking is emotionally vulnerable**
The biggest barrier isn't giving feedback. It's requesting it.

**Responders deprioritise follow-through**
A feedback request is easy to ignore. Any friction in the responder experience and they won't complete it.

`[ IMAGE: Research synthesis · Key barriers to peer feedback ]`

---

## Section 3: Key Insights

**Section heading:** Two findings. Two decisions.

I ran desk research and 10 semi-structured interviews: 4 students and 6 job seekers. I chose interviews over surveys to understand the emotional context: not just what people do around feedback, but how it *feels* to ask for it and receive it.

**Insight 1 (pull quote):**
> Users who have to create an account just to leave feedback will drop off. The responder has no stake in the product. Zero friction isn't optional.
>
> → **Design decision:** No-login responder flow via shared link. Open, respond, done.

**Insight 2 (pull quote):**
> Users review feedback with different goals: sometimes across skills, sometimes by project context. One view forces a choice between them.
>
> → **Design decision:** Dual view dashboard: "View by Skills" and "View by Projects."

`[ IMAGE: User journey · Requester vs. responder path ]`

---

## Section 4: Solution

**Section heading:** The hardest part wasn't the requester flow. It was the responder's.

**Intro line:** Every decision came back to one question: will the responder actually follow through?

---

### Solution 1: No-login responder flow

**Problem:**
Responders drop off at sign-up, often before they've given a single piece of feedback.

**Solution:**
A shared link opens directly to the form. No account, no barrier. The responder has no stake in MeView. Making this frictionless wasn't a nice-to-have; it was the core product decision. Anonymous by default, which made responders *more* specific, not less.

`[ IMAGE: Responder flow ]`

---

### Solution 2: Dual view dashboard

**Problem:**
Aggregated feedback loses context. "Good communicator" in a team project is different from a client pitch.

**Solution:**
Switch between "View by Skills" for a cross-context read, "View by Projects" for situation-specific feedback. Both views are useful at different times, and the IA complexity is a worthwhile tradeoff.

`[ IMAGE: Results dashboard · Skills view + Projects view ]`

---

### Solution 3: Structured request flow

**Problem:**
Requesting feedback is emotionally vulnerable. Users avoid it, or soften how they ask.

**Solution:**
Structured competency framework with a bold, character-driven visual identity. Users ask about specific skills within a specific project, not "what do you think of me?" The structure takes the weight out of asking. The visual identity keeps it from feeling like a corporate HR tool.

`[ IMAGE: Requester flow + Design system ]`

---

## Section 5: Reflections

- Tested the requester flow first, but the core tension lived on the responder side. Earlier responder research would have sharpened the no-login decision faster.
- "Instagrammable" output is an assumption about Gen Z behaviour, not a tested one. Worth validating in v2.
- Notification design for result sharing is the organic growth loop: out of scope for v1, high priority for v2.

---

## CTA (페이지 하단)

**Text:** Want to see the prototype or talk through the process? Get in touch →

**Link:** mailto:hy3yun.cho@gmail.com

---

## Image Placeholders 요약 (Claude Code용)

| 위치 | 파일 경로 | 내용 |
|---|---|---|
| Section 2 하단 | `public/images/meview/research-synthesis.png` | Research synthesis · Key barriers to peer feedback |
| Section 3 하단 | `public/images/meview/user-journey.png` | User journey · Requester vs. responder path |
| Solution 1 하단 | `public/images/meview/responder-flow.png` | Responder flow screens |
| Solution 2 하단 | `public/images/meview/results-dashboard.png` | Results dashboard · Skills view + Projects view |
| Solution 3 하단 | `public/images/meview/requester-flow.png` | Requester flow + Design system |
