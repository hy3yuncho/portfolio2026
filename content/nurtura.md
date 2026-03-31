# Nurtura: Content for Portfolio Website

> Web-ready copy for the Nurtura case study page.
> Source: Nurtura PRD v1.0 + Nurtura_CaseStudy_Copy.docx.
> Do not rewrite this copy. Use it as-is or make minimal edits for fit.

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
| **Project** | Nurtura: IVF Support Mobile App |
| **Role** | Solo UX/Product Designer (research → prototype) |
| **Platform** | iOS mobile app |
| **Timeline** | Spring 2025 (8 weeks) |
| **Tools** | Figma, React Native (Expo) |

---

## The Brief

**Section label:** THE BRIEF

**The brief:**
*"Create a user-centred vertical social network."*

This was a school project brief from Hyper Island: 8 weeks, solo, end-to-end. The scope covered the full design process: research, define, ideate, prototype. Deliverable was a hi-fi prototype with a documented design rationale.

**Scope:**
8 weeks. Solo. Research through to hi-fi prototype and documented rationale. No engineering handoff. The goal was to demonstrate design thinking depth, not production readiness.

**How I chose IVF:**
> ⚠️ 이 부분은 본인만 쓸 수 있어요. 왜 수많은 vertical social network 주제 중에 IVF를 골랐는지. 개인적 연결고리가 있었는지, 리서치 과정에서 발견했는지, 아니면 다른 이유가 있는지. 2–3문장으로 작성해주세요.
>
> 예시 방향 (참고용, 그대로 쓰지 마세요):
> "I wanted to design for a community that was underserved rather than just underdesigned. The emotional stakes were high enough to make every design decision matter. IVF kept coming up as I mapped communities where existing platforms actively made things worse."

---

## Hero / Intro

**Headline:**
Nurtura: designing a safe space for people navigating IVF

**Subhead / summary:**
52% of IVF patients avoid online forums because the content is too triggering. Instead of adding more features to an already overwhelming landscape, I designed a community platform with emotional guardrails built in from onboarding.

---

## The Problem

To understand what people going through IVF actually needed, not just what they said they needed, I conducted 11 semi-structured interviews with 12 participants (10 women currently going through or having gone through IVF, and 2 partners), alongside a 35-person survey. Interviews were held both in person and online, lasting around 45 minutes to an hour. I wanted to hear the real friction: what made them close the app, why they stayed away from forums, what they wished existed.

What I found wasn't a lack of platforms. It was that existing platforms like Facebook groups, Reddit, and generic forums were actively making things worse. Unfiltered feeds, no journey context, no emotional framing. The result: users left more overwhelmed than when they arrived.

I transcribed all interviews and ran an affinity mapping session in FigJam to cluster statements into themes: community, emotional experience, information, social expectations, family, and coping strategies. The emotional experience cluster was the largest, and the most consequential for design.

**Research findings:**
- 9/12 (75%) felt lonely during the process
- 7/12 (60%) felt misunderstood or unsupported by people close to them
- 8/12 (70%) experienced stress and anxiety from inconsistent or insufficient information
- 7/12 (60%) had strong negative emotional reactions to pregnancy and baby content online
- 51% sometimes or always avoid IVF forums due to triggering content
- 77% preferred a dedicated mobile app over a web-based platform

**Image placeholder:** Affinity map · Themes clustered from interview transcripts

---

## Research → Design Decisions

This is the chain I wanted to make visible in the portfolio: every screen traces back to a specific finding.

| Finding | What it meant for design |
|---|---|
| 75% felt lonely | Community feed as the primary surface, not information or features |
| 51% avoid forums | Content preferences in onboarding (before they see a single post) |
| Filtering by fertility treatment type preferred (83%) | Filter chips always visible at the top of the feed, not buried in settings |
| 60% triggered by pregnancy/baby content | Onboarding guardrails + filter always accessible |
| 40% prefer anonymity | Anonymous by default; identity revealed only by choice |

**Image placeholder:** Research synthesis · Key insights mapped to design decisions

---

## Key Insights

The avoidance behaviour is the signal. The people who need community most are the ones opting out. That told me the problem wasn't a lack of platforms. Existing platforms simply hadn't made safety a design priority.

Three things became clear from research:

**Content control needs to happen before exposure.** Users who hit an unfiltered feed and feel triggered don't come back to adjust settings. They just leave.

**Anonymity and personalisation aren't opposites.** Users want relevant content without revealing their identity. The design had to hold both at once.

**Peer connection lands best when matched by journey stage, not location or interests.** "Someone who gets where I am right now" was the consistent ask.

**Image placeholder:** Journey map · Where confidence drops, where decisions happen, where users disengage

---

## Users

Three personas from research.

**Billie: The Emotional Rollercoaster**
39, CEO, Gothenburg. Single mother, 3 years into IVF. Needs a safe space to express emotions without guilt when seeing others' successes. Not knowing people who have gone through IVF, she feels isolated, and existing groups only amplify that.

**Mintra: The One Who Just Wants to Hear More Stories**
30, Teacher, Stockholm. Engaged, trying for a second child. Her friends offer unsolicited advice and try to fix things, which adds to her stress. Pregnancies in her friend group trigger jealousy she keeps to herself. *"At first, I just talked to my one friend who did IVF. But that's just one person. I wanted to hear more stories."*

**Liam: The Logical Companion**
35, Civil Engineer, Stockholm. Supporting his wife through IVF. Prefers clear, scientifically backed information, but is starting to realise he also needs a safe place to feel his own emotions instead of suppressing them.

*Mintra drove primary design decisions (revised as the main persona in final iteration). Liam shaped the "For Partners" section in the guide and the partner onboarding path.*

---

## Concept Exploration

With research done, I moved into ideation around three distinct problems that kept surfacing: users feel lonely and misunderstood, existing platforms lack tailored community and emotional safety, and there's a consistent gap in emotionally framed information throughout the journey.

I explored three separate concept directions:

**Concept 1: Personalized Community Groups & Forums**
Nearly 80% of users already rely on Facebook groups and forums. The problem isn't that people don't use communities. It's that those communities don't meet them where they are. This concept addressed that gap directly: a forum experience built around IVF, with personalisation options to filter by stage, topic, and treatment type.

**Concept 2: 1:1 Matchmaking & Peer Support**
Many users emphasized that friends and family, however well-meaning, couldn't provide the kind of support that comes from shared experience. Every IVF journey is different. Users wanted to find someone going through something *specifically similar*, not just someone vaguely supportive. This concept was a matchmaking-style peer connect feature.

**Concept 3: Emotional & Informational Support**
Research highlighted a consistent gap: medical information is available, but the emotional preparation isn't. This concept took inspiration from pregnancy tracking apps and reframed them for IVF, personalised by journey stage and focused on emotional readiness alongside clinical detail.

**Decision: combine Concepts 1 and 2, with emotional support as a layer**
After sketching all three as low-fidelity screens, it became clear that separating community, peer connection, and information into three separate apps was feature sprawl masquerading as product strategy. Each concept addressed a real need, but none of them worked alone. The decision was to merge community and peer matching as the primary surface, with emotional and informational support woven through as contextual depth rather than separate tabs.

**Image placeholder:** Lo-fi sketches · Three concept directions side by side

---

## Iteration

The first version of the merged concept had a nav bar with four tabs: Forum/Groups, Messages, Connect, Profile. I ran a user navigation test on this prototype covering 5 tasks: community browsing, peer finding, and messaging. The results were clear: the "Connect" feature was almost impossible to find. Users ended up in Forums looking for it, or tapped through success stories instead.

Key findings from the navigation test:
- The main page felt more like a settings menu than an engaging home screen
- "Connect" and "Add Friend" were not intuitive from the nav. Users expected to find them inside the community, not in a separate tab
- Forum filtering was well-received and easy to use
- Anonymous posting was appreciated

This pushed me back to the drawing board on information architecture. The navigation test result confirmed what the research had already suggested: peer connect shouldn't be a destination. It should be a natural extension of reading a post, a depth layer rather than a separate tab.

I stepped back to low-fidelity and resketeched the flow without a home screen, focusing on how the main features related to each other structurally rather than how they'd look.

**Image placeholder:** Navigation architecture sketch · Before and after merging depth layers

---

## Concept 4: Final Direction

After the iteration round, I refocused the concept on what the product actually needed to *do*, not just what features it contained. The earlier version had followed the research findings too literally, producing a product that was technically correct but unclear in its value proposition.

The refined concept placed the individual IVF journey at the center, not the community or the features. The community exists to serve the journey. The peer connections, check-ins, and guide content all map back to where the user is *right now* in their process.

**Final concept statement:** *A personal guide for people going through the IVF journey, offering insights into the physical and emotional changes at each stage. The app includes tracking tools, emotional support resources, and an online community to keep users informed, connected, and supported.*

Primary function: tailored online community
Secondary function: personal tracking + self-support

---

## Product Overview

Nurtura is a safe community platform with emotional guardrails. Rather than combining three separate products (community / peer matchmaking / informational support) into feature sprawl, Nurtura treats peer connection and information as natural depth layers within a single, coherent community experience.

**Core features:**
- Safe community feed with content filtering
- Peer connect: 1:1 connections, initiated from within the community
- Emotional check-in (daily, private)
- IVF information guide (personalised by journey stage)

---

## Design Decisions

### Decision 1: Content preferences in onboarding, not settings

*This is the most important screen in the portfolio. Use it to show the research → design decision chain.*

52% of users avoid forums because of triggering content. The standard solution would be to add a settings screen. I put it in onboarding, before users ever see the feed.

The screen asks: *"What would you like to avoid seeing?"* with checkboxes for pregnancy announcements, success stories, medical procedures, baby/child images. Below: *"You can change this anytime."*

That last line matters: it reduces commitment anxiety. The framing is "you're in control" rather than "we're protecting you."

### Decision 2: Peer connect lives inside a post, not a separate tab

Early concepts had community, peer matching, and information as three separate sections. That created feature sprawl and an unclear value prop. I merged them as depth layers. Peer connect is reached from within a post, not from the nav. A more coherent product was worth the discoverability tradeoff at MVP.

*Image: Navigation architecture · Before vs. after merging depth layers*

### Decision 3: Anonymity by default, identity by choice

40% of users prefer anonymity, but personalisation requires context. Rather than forcing a choice, I made anonymity the default at every layer: community archetypes instead of names, illustrated avatars, anonymous first messages. Identity is revealed progressively, at the user's pace.

### Decision 4: Match by journey stage, not interests

Standard peer matching uses location or shared interests. For IVF users, the most meaningful signal is treatment stage. Match cards make the matching logic visible: journey stage, round of treatment, support type. Smaller match pool for rare stages is an acceptable tradeoff. Match quality matters more than quantity at MVP.

*Image: S10 · Match card anatomy, showing visible matching logic*

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

### Flow descriptions (for section headers in the case study)

**Onboarding: set once, applied everywhere (S01–S04)**
Users set content preferences, journey stage, and anonymity level before they ever see the feed. By the time they reach the community, it's already filtered for them.
*Image: S01–S04 · Onboarding flow*

**A home that knows where you are (S05)**
The daily check-in card sits at the top of the dashboard. Not because it's the most-used feature, but because it sets the emotional tone for every session. The app asks how you're doing before it asks anything else.
*Image: S05 · Home Dashboard*

**Community built around your context (S06–S08)**
Filter chips carry over directly from onboarding preferences. Sort by 'most supportive' surfaces empathetic content first, a sorting option unique to Nurtura. Users can go deeper from any post without leaving the feed.
*Image: S06–S08 · Community Feed + Filter + Post Detail*

**Connect without exposure (S09–S11)**
Peer match cards surface journey stage, treatment round, and support type as the primary signals. First messages are anonymous, with suggested prompts to remove blank-page anxiety. Users move toward identity at their own pace.
*Image: S09–S11 · Peer Connect flow*

**Check in without commitment (S12–S14)**
A low-friction daily touchpoint. The reflection result bridges emotional state to community, peer connect, or guide, making check-in feel purposeful rather than just logging.
*Image: S12–S14 · Emotional Check-in flow*

**Information that knows its audience (S15–S17)**
'For partners' directly addresses the Liam persona, a perspective existing IVF platforms ignore entirely. 'Reviewed by fertility counsellor' distinguishes Nurtura from generic search. 'Discuss in community' closes the information–community loop.
*Image: S15–S17 · IVF Guide flow*

---

## Selected Screen Notes (for annotations)

### S03 · Content Preferences: Why this screen exists
52% avoid forums due to negative content. This screen puts the user in control of what appears in their feed, before they've ever seen it. "You can change this anytime" reduces commitment anxiety.

### S07 · Post Detail: The conversion moment
The "Connect with [name]" CTA appears naturally in the post context, not as a separate feature tab. This is the main conversion point from community browsing to 1:1 peer connection.

### S11 · First Message: Removing blank-page anxiety
Three suggested prompts ("I just wanted to say hi", "Today was tough for me", "How are you holding up?") remove the friction of first contact. Emotional framing normalises vulnerability from the first interaction.

### S14 · Reflection Result: Where it all comes together
The mood check-in doesn't just log data. It surfaces relevant guide content, shows community solidarity ("Others felt this way too this week"), and offers peer connection based on emotional state. All four research insights converge in this screen.

---

## User Testing: Hi-fi Prototype

I tested the high-fidelity prototype with 5 users (concept and evaluation testing). The feedback validated the core design direction:

- *"The beginning onboarding pages made me feel really validated. As if I am truly stepping into a safe space that understands my needs."*
- *"The navigation and layout is intuitive and makes sense."*
- *"An app that feels as though it is truly made for the needs of the targeted audience."*
- *"I really like the balance between the medical and scientific parts and the emotional comforting side."*
- *"An app that makes a scary topic feel more approachable."*
- *"It feels like it's an app that would hold my hand through this journey!"*

The onboarding framing, starting with content preferences before showing any community content, was specifically called out as making users feel safe before they'd seen anything. That was the moment I knew the core design decision had worked.

---

## Prototype

A tappable prototype of the onboarding flow (S01–S04) was built in React Native (Expo) as part of the portfolio. [Link or embed]

---

## CTA

**Section label:** MORE

**Body:**
This project is still in progress. The prototype is complete. Usability testing and v2 scoping are next.

**CTA text:** Want to dig into the process? Get in touch →

**Link:** mailto:hy3yun.cho@gmail.com

---

## What I'd Do Differently

[Add honest reflection here, e.g. moderation model, what the MVP excludes and why, open questions from the PRD]

**Open questions from the PRD (honest about what's unresolved):**
- How should the app handle a user who reports feeling unsafe or suicidal? A moderation + crisis resource flow is needed.
- Should peer matches be algorithmically generated or user-browsable? Trade-off: control vs discovery.
- How should the app handle users who change journey stage mid-process?

---

## Out of Scope (intentional)

Real-time chat, AI chatbot, clinic integration, and Android were each excluded to preserve focus on the core value proposition: safe community + peer connection. These are trade-offs, not oversights.
