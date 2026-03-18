# Nurtura — Content for Portfolio Website

> Web-ready copy for the Nurtura case study page.
> Source: Nurtura PRD v1.0 + case study doc.
> Do not rewrite this copy — use it as-is or make minimal edits for fit.

---

## Meta

| | |
|---|---|
| **Project** | Nurtura — IVF Support Mobile App |
| **Role** | Solo UX/Product Designer (research → prototype) |
| **Platform** | iOS mobile app |
| **Timeline** | [Add duration] |
| **Tools** | Figma, React Native (Expo) |

---

## Hero / Intro

**Headline:**
Nurtura — designing a safe space for people navigating IVF

**Subhead / summary:**
52% of IVF patients avoid online forums because the content is too triggering. Instead of adding more features to an already overwhelming landscape, I designed a community platform with emotional guardrails built in from onboarding.

---

## The Problem

People navigating IVF face significant emotional isolation. Existing platforms — Facebook groups, Reddit, generic forums — amplify negativity, lack content filtering, and offer no personalisation. The result: users leave more overwhelmed than when they arrived.

**Research finding:**
- 52% of IVF patients avoid online forums due to triggering content
- 75% felt lonely during the process
- 77% preferred a dedicated mobile app over web-based platforms

---

## Research → Design Decisions

This is the chain I wanted to make visible in the portfolio: every screen traces back to a specific finding.

| Finding | What it meant for design |
|---|---|
| 75% felt lonely | Community feed as the primary surface — not information, not features |
| 52% avoid forums | Content preferences in onboarding (before they see a single post) |
| 83% want filtering | Filter chips always visible at the top of the feed — not buried in settings |
| 51% triggered by content | Onboarding guardrails + filter always accessible |
| 40% prefer anonymity | Anonymous by default; identity revealed only by choice |

---

## Users

Three personas from 12 interviews + 35-person survey.

**Billie — Emotional Rollercoaster**
39, CEO, Gothenburg. Single mother, 3 years into IVF. Needs a safe space to express emotions without guilt when seeing others' successes.

**Mintra — Overwhelmed by existing groups**
30, Teacher, Västerås. Wants a positivity-filtered community she can actually stay in.

**Liam — The partner**
35, Civil Engineer, Stockholm. Supporting his wife. Struggles to find resources built for partners, not patients.

*Billie and Mintra drove primary design decisions. Liam shaped the "Supporting a partner" onboarding path and the For Partners section in the guide.*

---

## Product Overview

Nurtura is a safe community platform with emotional guardrails. Rather than combining three separate products (community / peer matchmaking / informational support) into feature sprawl, Nurtura treats peer connection and information as natural depth layers within a single, coherent community experience.

**Core features:**
- Safe community feed with content filtering
- Peer connect — 1:1 connections, initiated from within the community
- Emotional check-in (daily, private)
- IVF information guide (personalised by journey stage)

---

## Key Design Decision — Onboarding Content Preferences (S03)

*This is the most important screen in the portfolio. Use it to show the research → design decision chain.*

52% of users avoid forums because of triggering content. The standard solution would be to add a settings screen. I put it in onboarding, before users ever see the feed.

The screen asks: *"What would you like to avoid seeing?"* — checkboxes for pregnancy announcements, success stories, medical procedures, baby/child images. Below: *"You can change this anytime."*

That last line matters: it reduces commitment anxiety. The framing is "you're in control" rather than "we're protecting you."

---

## Screen Overview

17 screens across 5 flows.

| Flow | Screens | Why it's in the portfolio |
|---|---|---|
| Onboarding | S01–S04 | Shows the research → UI decision chain |
| Home | S05 | Hub connecting all 4 features |
| Community + Filter | S06–S08 | Main value proposition |
| Peer Connect | S09–S11 | Differentiator from generic forums |
| Emotional Check-in | S12–S14 | Shows emotional safety thinking |
| IVF Guide | S15–S17 | Information + community bridge |

---

## Selected Screen Notes (for annotations)

### S03 · Content Preferences — Why this screen exists
52% avoid forums due to negative content. This screen puts the user in control of what appears in their feed — before they've ever seen it. "You can change this anytime" reduces commitment anxiety.

### S07 · Post Detail — The conversion moment
The "Connect with [name]" CTA appears naturally in the post context, not as a separate feature tab. This is the main conversion point from community browsing to 1:1 peer connection.

### S11 · First Message — Removing blank-page anxiety
Three suggested prompts ("I just wanted to say hi", "Today was tough for me", "How are you holding up?") remove the friction of first contact. Emotional framing normalises vulnerability from the first interaction.

### S14 · Reflection Result — Where it all comes together
The mood check-in doesn't just log data — it surfaces relevant guide content, shows community solidarity ("Others felt this way too this week"), and offers peer connection based on emotional state. All four research insights converge in this screen.

---

## Prototype

A tappable prototype of the onboarding flow (S01–S04) was built in React Native (Expo) as part of the portfolio. [Link or embed]

---

## What I'd Do Differently

[Add honest reflection here — e.g. moderation model, what the MVP excludes and why, open questions from the PRD]

**Open questions from the PRD (honest about what's unresolved):**
- How should the app handle a user who reports feeling unsafe or suicidal? A moderation + crisis resource flow is needed.
- Should peer matches be algorithmically generated or user-browsable? Trade-off: control vs discovery.
- How should the app handle users who change journey stage mid-process?

---

## Out of Scope (intentional)

Real-time chat, AI chatbot, clinic integration, Android — each excluded to preserve focus on the core value proposition: safe community + peer connection. These are trade-offs, not oversights.
