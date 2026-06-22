# Nurtura — Content for Portfolio Website

> Web-ready copy for the Nurtura case study page.
> Source: Nurtura PRD v1.0 + Nurtura_CaseStudy_Copy.docx.

---

## Landing Page Card

| | |
|---|---|
| **Label** | Personal project · Spring 2025 |
| **Title** | Nurtura |
| **Tagline** | Designing emotional safety into an IVF community. |
| **href** | `/nurtura` |

---

## Meta

| | |
|---|---|
| **Project** | Nurtura — IVF Support Mobile App |
| **Role** | Solo UX/Product Designer (research → prototype) |
| **Platform** | iOS mobile app |
| **Timeline** | Spring 2025 (8 weeks) |
| **Tools** | Figma, React Native (Expo) |

---

## The Brief

**Section label:** THE BRIEF

**The brief:**
*"Create a user-centred vertical social network."*

8 weeks. Solo. Research through to hi-fi prototype — the goal was to show the full design thinking chain, not just the screens.

**How I chose IVF:**
> ⚠️ 이 부분은 본인만 쓸 수 있어요 — 왜 IVF를 골랐는지. 2–3문장으로 작성해주세요.

---

## Hero / Intro

**Headline:**
Nurtura — designing a safe space for people navigating IVF

**Subhead / summary:**
51% of IVF patients avoid online forums because the content is too triggering. I didn't add more features to an already overwhelming landscape — I built emotional guardrails in from the start.

---

## The Problem

I talked to 12 people going through IVF — 10 patients and 2 partners — and ran a survey with 35 more. One pattern came up everywhere: people were using existing platforms, but leaving worse than when they arrived.

Facebook groups, Reddit threads, generic forums — none of them were designed with the emotional weight of IVF in mind. Unfiltered feeds, no journey context, no way to avoid content that could destabilise you mid-cycle.

After mapping all the interviews, the emotional experience cluster was the largest. Not information gaps. Not missing features. Emotional safety.

Key findings:
- 75% felt lonely during the process
- 60% felt misunderstood by the people around them
- 60% had strong negative reactions to pregnancy and baby content online
- 70% experienced anxiety from inconsistent information
- 51% sometimes or always avoid IVF forums due to triggering content

**Image placeholder:** Affinity map · Themes clustered from interview transcripts

---

## Key Insights

The people who need community most are the ones opting out. That told me the problem wasn't a lack of platforms — it was that none of them had made emotional safety a design priority.

Three things became clear:

**Control has to come before exposure.** If someone gets triggered by an unfiltered feed, they don't go back to change their settings. They just leave.

**Anonymity and personalisation aren't opposites.** People wanted relevant content without having to reveal their identity. The design had to hold both at once.

**"Someone who gets where I am right now."** Matching by journey stage — not location, not interests — was what people actually asked for.

**Image placeholder:** Journey map · Where confidence drops, where users disengage

---

## Users

Three personas from research.

**Billie — The Emotional Rollercoaster**
39, CEO, Gothenburg. Single mother, 3 years into IVF. Needs a space to process emotions without the guilt of seeing others' announcements. She doesn't know anyone who's been through IVF — and existing communities only amplify that isolation.

**Mintra — The One Who Just Wants to Hear More Stories**
30, Teacher, Stockholm. Engaged, trying for a second child. Her friends mean well but keep offering advice when she just wants to be heard. *"At first, I just talked to my one friend who did IVF. But that's just one person. I wanted to hear more stories."*

**Liam — The Logical Companion**
35, Civil Engineer, Stockholm. Supporting his wife through IVF. He defaults to wanting facts and data — but is slowly realising he also needs somewhere to process how he's feeling.

*Mintra drove primary design decisions. Liam shaped the partner perspective throughout.*

---

## Research → Design Decisions

Every screen traces back to a specific finding.

| Finding | Design decision |
|---|---|
| 75% felt lonely | Community feed as the primary surface — not features, not information |
| 51% avoid forums | Content preferences in onboarding — before they see a single post |
| 83% wanted to filter by treatment type | Filter chips always visible at the top of the feed |
| 60% triggered by pregnancy/baby content | Onboarding guardrails + filter always accessible |
| 40% prefer anonymity | Anonymous by default; identity revealed only at their own pace |

**Image placeholder:** Research synthesis · Key insights mapped to design decisions

---

## Concept Exploration

I explored three directions: a personalised community forum, 1:1 peer matchmaking, and an emotionally-framed IVF guide. Each addressed a real need. None of them worked alone.

The decision was to merge community and peer connect as the core product, with emotional support and information as depth layers — not separate sections. Three separate apps isn't a product strategy.

**Image placeholder:** Lo-fi sketches · Three concept directions side by side

---

## Iteration

First version had four nav tabs: Forum/Groups, Messages, Connect, Profile. I ran a usability test across 5 tasks. The Connect feature was nearly impossible to find — users ended up in the Forum looking for it.

Two things were clear: the home screen felt like a settings menu, and peer connect didn't make sense as a separate tab. People expected to find it inside the community, not in a dedicated section.

I went back to low-fidelity and rebuilt the information architecture around how the features related to each other — not how they'd look.

**Image placeholder:** Navigation architecture · Before and after

---

## Concept 4 — Final Direction

After the iteration round, I refocused on what the product needed to actually *do*. The earlier version had followed the research findings too literally — technically correct, but no clear value proposition.

**Final concept:** *A personal guide for people going through IVF, with tracking tools, emotional support, and a community — all mapped to where you are in the process right now.*

Primary function: tailored online community
Secondary function: personal tracking + self-support

---

## Design Decisions

### Decision 1 — Content preferences in onboarding, not settings

52% of users avoid forums because of triggering content. The obvious fix is a settings screen. I put it in onboarding, before they've ever seen the feed.

*"What would you like to avoid seeing?"* — checkboxes for pregnancy announcements, success stories, medical content, baby images. And below: *"You can change this anytime."*

That last line matters. It reframes the screen from "we're protecting you" to "you're in control."

### Decision 2 — Peer connect lives inside a post, not a separate tab

Early concepts treated community, peer matching, and information as three separate sections. That produced feature sprawl and a blurry value proposition. I merged them as depth layers — peer connect is reached from within a post, not from the nav.

A more coherent product was worth the discoverability tradeoff at MVP.

### Decision 3 — Anonymity by default, identity by choice

40% of users prefer anonymity — but personalisation requires context. Rather than forcing a choice upfront, I made anonymity the default at every layer: community archetypes instead of names, illustrated avatars, anonymous first messages. Identity surfaces progressively, at the user's pace.

### Decision 4 — Match by journey stage, not interests

Standard peer matching uses location or shared interests. For IVF, the most meaningful signal is treatment stage. Match cards show journey stage, round of treatment, and support type — the matching logic is visible, not hidden.

A smaller match pool for rare stages is an acceptable tradeoff. Match quality matters more than quantity at MVP.

---

## Screen Overview

17 screens across 5 flows.

| Flow | Screens | Why it matters |
|---|---|---|
| Onboarding | S01–S04 | Where the research → design chain is most visible |
| Home | S05 | Hub connecting all 4 features |
| Community + Filter | S06–S08 | The core value proposition |
| Peer Connect | S09–S11 | What makes this different from a generic forum |
| Emotional Check-in | S12–S14 | Emotional safety in practice |
| IVF Guide | S15–S17 | Information and community bridged together |

---

**Onboarding — set once, applied everywhere (S01–S04)**
Content preferences, journey stage, and anonymity level — all set before they see a single post. By the time they reach the community, it's already filtered for them.

*Image: S01–S04 · Onboarding flow*

**A home that knows where you are (S05)**
The daily check-in sits at the top of the dashboard — not because it's the most-used feature, but because it sets the emotional tone for every session. The app asks how you're doing before anything else.

*Image: S05 · Home Dashboard*

**Community built around your context (S06–S08)**
Filter chips carry over from onboarding. Sort by "most supportive" surfaces empathetic content first — unique to Nurtura. Users can go deeper from any post without leaving the feed.

*Image: S06–S08 · Community Feed + Filter + Post Detail*

**Connect without exposure (S09–S11)**
Match cards show journey stage, treatment round, and support type. First messages are anonymous, with suggested prompts — to remove the blank-page anxiety of reaching out to a stranger.

*Image: S09–S11 · Peer Connect flow*

**Check in without commitment (S12–S14)**
A low-friction daily touchpoint. The reflection result bridges emotional state to community, peer connect, or guide — so the check-in feels purposeful, not just logging.

*Image: S12–S14 · Emotional Check-in flow*

**Information that knows its audience (S15–S17)**
"For partners" addresses the Liam persona directly — a perspective existing IVF platforms ignore entirely. "Discuss in community" closes the information–community loop.

*Image: S15–S17 · IVF Guide flow*

---

## Selected Screen Notes

### S03 · Content Preferences
52% avoid forums due to negative content. This screen gives users control over their feed before they've ever seen it. "You can change this anytime" reduces commitment anxiety.

### S07 · Post Detail — The conversion moment
The "Connect with [name]" CTA appears naturally in the post context, not as a feature tab. This is where community browsing turns into 1:1 peer connection.

### S11 · First Message
Three suggested prompts ("I just wanted to say hi", "Today was tough for me", "How are you holding up?") remove the friction of reaching out. Emotional framing normalises vulnerability from the first message.

### S14 · Reflection Result
The mood check-in doesn't just log — it surfaces relevant guide content, shows community solidarity ("Others felt this way too this week"), and offers a peer connection based on emotional state. All four research insights converge here.

---

## User Testing

I tested the hi-fi prototype with 5 users. A few quotes that stuck:

- *"The beginning onboarding pages made me feel really validated. As if I'm truly stepping into a safe space that understands my needs."*
- *"An app that makes a scary topic feel more approachable."*
- *"It feels like it would hold my hand through this journey."*
- *"I really like the balance between the medical side and the emotional comforting side."*

The onboarding framing — content preferences before any community content — was specifically called out. That was the moment I knew the core decision had landed.

---

## Prototype

A tappable prototype of the onboarding flow (S01–S04) was built in React Native (Expo). [Link or embed]

---

## CTA

**Section label:** MORE

**Body:**
Prototype complete. Usability testing and v2 scoping are next.

**CTA text:** Want to dig into the process? Get in touch →

**Link:** mailto:hy3yun.cho@gmail.com

---

## What I'd Do Differently

A few things I'd change:

- I'd push for even one usability session with internal users before finalising the column hierarchy. Designing without direct user access meant leaning hard on principles over observed behaviour — which worked, but left open questions.
- The moderation model is unresolved. What happens when a user reports feeling unsafe? That flow needs to exist before this ships.
- Should peer matches be algorithmically suggested or user-browsable? I landed on browsable for control — but discovery suffers. Worth testing both.

---

## Out of Scope (intentional)

Real-time chat, AI chatbot, clinic integration, Android — excluded to keep the core value proposition clear. These are trade-offs, not oversights.
