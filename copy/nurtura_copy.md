# Nurtura
*Your IVF journey, together*

A safe community app for people navigating IVF — designed around the people who need support most but avoid every platform that exists.

| | |
|---|---|
| **Timeline** | Spring 2025 (8 weeks) |
| **Role** | Solo UX/Product Designer |
| **Platform** | iOS · Mobile-first |
| **Context** | Hyper Island — vertical social network brief |
| **Tools** | Figma, React Native (Expo) |

---

## Context

### I started with a brief. I ended up with a real problem.

The assignment: design a vertical social network. 8 weeks, solo, end-to-end.

During research, one group kept coming up — IVF (In Vitro Fertilization) patients. People who desperately needed peer support but were actively avoiding every community that existed. That became my brief.

> ⚠️ **[본인 작성 필요]** IVF를 선택한 이유 — 왜 수많은 주제 중 IVF였는지. 2–3문장.

I ran the full process solo: 12 interviews, a 35-person survey, competitive analysis, and a 17-screen MVP prototype.

---

## The Problem

### The people who need community most are avoiding it

IVF patients need peer support. But the platforms that exist — Reddit, Facebook groups, generic forums — are unfiltered and emotionally unpredictable. Most patients try them once and don't come back.

To understand why, I conducted 12 semi-structured interviews (10 women going through or having gone through IVF, 2 partners) and a 35-person survey. I wanted to hear the real friction: what made them close the app, why they stayed away, what they wished existed. Interviews were transcribed and clustered in FigJam — the emotional experience cluster was the largest, and the most consequential for design.

| 75% | 52% | 77% |
|---|---|---|
| felt lonely during treatment | avoid forums due to triggering content | preferred a dedicated mobile app |

**Overwhelm by design**
Unfiltered feeds surface triggering content with no way to control what you see. Users who hit something distressing don't adjust settings — they leave.

**Isolation without exit**
The communities built to help them are the reason many stay away.

**No platform built for this**
No journey-stage context, no emotional framing. IVF users are an afterthought, not the audience.

`[ IMAGE: Affinity map · Themes clustered from interview transcripts ]`

---

## Key Insights

### Three findings. Three decisions.

I mapped the full user journey to understand where avoidance starts and where trust breaks down. Each finding led directly to a design call.

> Users who see triggering content before setting preferences don't come back to fix it. They leave.
>
> → **Design decision:** Content preferences move to onboarding — users define what they don't want to see before they enter the feed.

---

> Users want relevant content without revealing their identity. Anonymity and personalisation feel like opposites — but both are non-negotiable.
>
> → **Design decision:** Anonymity is the default at every layer. Identity is revealed only if the user chooses.

---

> The most meaningful peer connection isn't 'someone nearby.' It's 'someone who gets where I am right now.'
>
> → **Design decision:** Match cards surface journey stage and treatment round as the primary signals — not location or interests.

`[ IMAGE: Journey map · Where avoidance starts, where trust breaks down ]`

---

## Users

Three personas from research. Mintra drove primary design decisions. Liam shaped the 'For Partners' section and partner onboarding path.

**Billie, 39 — CEO, Gothenburg**
Three years into IVF as a single mother. Needs a safe space to express emotions without guilt. Existing groups amplify her isolation rather than ease it.

**Mintra, 30 — Teacher, Stockholm** *(primary)*
Trying for a second child. Friends offer unsolicited advice that adds to her stress. *"At first I just talked to my one friend who did IVF. But that's just one person. I wanted to hear more stories."*

**Liam, 35 — Civil Engineer, Stockholm**
Supporting his wife through treatment. Prefers clear, evidence-based information — but is beginning to realise he also needs space for his own emotions.

---

## Concept Exploration

With research done, I explored three directions — each addressing a distinct problem that kept surfacing.

**Concept 1 — Personalised community**
80% of users already use Facebook groups and forums. The problem isn't that communities don't exist — it's that they don't meet users where they are. A forum experience built around IVF, with filtering by stage, topic, and treatment type.

**Concept 2 — 1:1 peer matching**
Users didn't want someone vaguely supportive — they wanted someone going through something *specifically* similar. A matchmaking-style peer connect feature built around journey stage.

**Concept 3 — Emotional and informational support**
Medical information exists. Emotional preparation doesn't. A personalised guide framed around the IVF journey rather than generic health content.

**Decision: merge all three, with community as the primary surface.**
Separating them into three apps was feature sprawl masquerading as product strategy. Each concept addressed a real need — none worked alone. Community and peer matching became the primary surface; emotional and informational support became contextual depth layers, not separate tabs.

`[ IMAGE: Lo-fi sketches · Three concept directions ]`

---


## Solution

### Three problems. Three responses.

Each core decision maps directly to a failure of existing platforms.

---

**Problem**
Users hit an unfiltered feed before setting any preferences — and leave when they see something distressing.

**Solution**
Onboarding captures content preferences, journey stage, and anonymity level upfront. By the time users reach the community, it's already filtered. The home dashboard opens with a daily check-in card — the app asks how you're doing before anything else.

*77% of surveyed users preferred a dedicated app over web forums — validating the mobile-first decision.*

`[ IMAGE: S01–S05 · Onboarding flow + Home Dashboard ]`

---

**Problem**
Existing platforms force a choice: share your identity or get irrelevant content.

**Solution**
Filter chips carry over from onboarding — no manual setup needed. Community archetypes replace names. 'Sort by most supportive' surfaces empathetic content first. Users go deeper from any post without losing their place.

`[ IMAGE: S06–S08 · Community Feed + Filter + Post Detail ]`

---

**Problem**
Standard peer matching uses location or interests. For IVF users, that's the wrong signal.

**Solution**
Match cards make the logic visible: journey stage, treatment round, support type. First messages are anonymous with suggested prompts — removing blank-page anxiety. Identity is revealed only if the user decides.

`[ IMAGE: S09–S11 · Peer Connect flow ]`

---

Two supporting flows: Emotional Check-in (S12–S14) bridges daily mood to community, peer connect, or the IVF guide. The guide (S15–S17) includes a 'For partners' category and a 'Discuss in community' CTA — closing the information–community loop.

`[ IMAGE: S12–S17 · Emotional Check-in + IVF Guide ]`

---

## User Testing

I tested the hi-fi prototype with 5 users. The onboarding framing — content preferences before any community content — was specifically called out as what made users feel safe.

> *"The beginning onboarding pages made me feel really validated. As if I am truly stepping into a safe space that understands my needs."*

> *"An app that feels as though it is truly made for the needs of the targeted audience."*

> *"It feels like it's an app that would hold my hand through this journey."*

The moment I knew the core decision had worked: users said they felt safe before they'd seen a single post.

---

## Reflections

- Run usability testing earlier on the onboarding flow. Multi-screen preference-setting carries real drop-off risk that wireframe testing would have caught sooner.
- Involve a fertility counsellor from the start, not after. Language in this product carries clinical weight.
- The most impactful decisions were copy choices — not visual ones. I'd treat microcopy as a first-class design artefact from day one.

**Open questions for v2:** Crisis and moderation flow. Algorithm vs. user-browsable peer matching. Journey stage updates mid-use.

---

The prototype is complete. Usability testing and v2 scoping are next.

**Want to dig into the process? Get in touch →**

---

*Nurtura — Case Study · Hailey Yun Cho · UX Portfolio · 2025*
