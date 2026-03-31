export interface CaseSection {
  id: string;
  phase: "discover" | "define" | "develop" | "deliver";
  title: string;
  content: string;
}

export interface CaseNav {
  slug: string;
  name: string;
  thumbnail: string;
}

export interface Case {
  slug: string;
  name: string;
  tagline: string;
  about: string;
  role: string;
  timeline: string;
  team: string[];
  tools: string[];
  coverImages: string[];
  sections: CaseSection[];
  prevProject: CaseNav | null;
  nextProject: CaseNav | null;
}

export const cases: Case[] = [
  {
    slug: "nurtura",
    name: "Nurtura",
    tagline: "IVF support companion app",
    about:
      "A solo research-to-prototype project designing a mobile companion for IVF patients — addressing emotional isolation, information overload, and the lack of safe community space during treatment.",
    role: "Product Designer",
    timeline: "Spring 2025",
    team: ["Solo project"],
    tools: ["Figma", "React Native (Expo)"],
    coverImages: ["/nurtura.png"],
    sections: [
      {
        id: "overview",
        phase: "discover",
        title: "Overview",
        content: "Nurtura is an IVF companion app built from scratch — research, IA, UI, and a working React Native prototype across 17 screens and 5 flows.",
      },
      {
        id: "context",
        phase: "discover",
        title: "Context",
        content: "IVF treatment is physically demanding and emotionally isolating. Patients navigate a flood of clinical information while managing anxiety, grief, and hope — often alone.",
      },
      {
        id: "the-problem",
        phase: "discover",
        title: "The Problem",
        content: "Existing tools are either purely clinical (hospital portals) or unmoderated (forums). Neither is designed for the emotional reality of IVF — where triggering content and information overload are real risks.",
      },
      {
        id: "insights",
        phase: "define",
        title: "Insights",
        content: "52% of users avoid IVF forums due to triggering content. The onboarding content filter (S03) was a direct response to this finding — giving users control over what they see from day one.",
      },
      {
        id: "solution",
        phase: "define",
        title: "Solution",
        content: "A content-filtered companion app with a safe community space, treatment tracker, and personalised information feed — each screen mapping to a specific user insight.",
      },
      {
        id: "design-decisions",
        phase: "develop",
        title: "Design Decisions",
        content: "Every screen in the 17-screen prototype traces back to a research finding. The key decisions: content filtering at onboarding, anonymous community mode, and a treatment timeline tied to emotional checkpoints rather than clinical milestones.",
      },
      {
        id: "prototype",
        phase: "deliver",
        title: "Prototype",
        content: "17 screens across 5 flows built in Figma and implemented as a working React Native (Expo) prototype. Includes onboarding, community, tracker, content feed, and profile flows.",
      },
      {
        id: "more",
        phase: "deliver",
        title: "More",
        content: "Full PRD, component documentation, and research synthesis available. The prototype is navigable end-to-end.",
      },
    ],
    prevProject: { slug: "meview", name: "MeView", thumbnail: "/meview.png" },
    nextProject: { slug: "meview", name: "MeView", thumbnail: "/meview.png" },
  },
  {
    slug: "meview",
    name: "MeView",
    tagline: "Your self-portrait, powered by peers",
    about:
      "MeView lets Gen Z request anonymous peer feedback, organised by project and competency, and view results as a visual skill map. The hardest design challenge wasn't the requester flow — it was making it easy enough for responders that they'd actually follow through.",
    role: "Product Designer, UI Designer",
    timeline: "3 months",
    team: ["Project Manager", "Graphic Designer", "Front-end Developer", "Back-end Developer"],
    tools: ["Figma"],
    coverImages: ["/meview.png"],
    sections: [
      {
        id: "overview",
        phase: "discover",
        title: "Overview",
        content:
          "MeView is a mobile peer feedback app for Gen Z — structured feedback by project and competency, with a no-login responder flow and a visual skill map output. I owned product and UI design end-to-end over 3 months, working with a PM, graphic designer, and two developers.",
      },
      {
        id: "context",
        phase: "discover",
        title: "Context",
        content:
          "Post-pandemic identity-focused behaviour drove the product idea. 80% of people are curious about how others perceive them — Gen Z most engaged. Desk research and 10 semi-structured interviews (4 students, 6 job seekers) shaped the problem framing.\n\nWe needed to understand the emotional context, not just behaviour — so interviews, not surveys.",
      },
      {
        id: "the-problem",
        phase: "discover",
        title: "The Problem",
        content:
          "Peer feedback has no structured home. Existing tools sit at two extremes — LinkedIn recommendations (too formal) or DMs and verbal comments (too informal). Nothing designed for self-exploration.\n\nThe hardest constraint wasn't getting people to ask for feedback. It was getting responders to actually follow through. Easy to deprioritise, easy to forget.",
      },
      {
        id: "insights",
        phase: "define",
        title: "Insights",
        content:
          "The biggest barrier to feedback isn't giving it — it's asking for it. Emotional vulnerability around requesting feedback was the core friction point on the requester side.\n\nOn the responder side: any sign-up requirement would cause significant drop-off. The responder flow had to be open-link, respond, done — no account needed.",
      },
      {
        id: "solution",
        phase: "define",
        title: "Solution",
        content:
          "MeView lets users request structured peer feedback by project, receive it anonymously via a shareable link — no login required for responders — and view results as a visual skill map organised by competency or project.\n\nKey flows: requester creates a form and shares a link; responder opens link and responds without an account; results dashboard shows aggregated skill tags with a Skills / Projects toggle.",
      },
      {
        id: "design-decisions",
        phase: "develop",
        title: "Design Decisions",
        content:
          "**No-login responder flow** — Requiring sign-up would cause drop-off. Trade-off: less accountability, potential for low-quality responses.\n\n**Dual view (Skills / Projects)** — Users have different goals when reviewing feedback. Two modes: view by competency or by project. Trade-off: more complex IA.\n\n**Anonymous by default** — Anonymity lowers the emotional barrier for both sides. Trade-off: reduced accountability, but net effect is more honest, more frequent feedback.\n\n**Bold, character-driven brand** — Deliberate bet on Gen Z aesthetic with original mascot characters. Trade-off: strong personality may not translate to all hiring contexts.",
      },
      {
        id: "prototype",
        phase: "deliver",
        title: "Prototype",
        content:
          "Hi-fi interactive prototype in Figma covering the full requester and responder flow. Components categorised into Default and Hover states, colour-coded by competency area. Custom character illustrations for empty states and onboarding.\n\nHanded off component specs to developers via Figma.",
      },
      {
        id: "more",
        phase: "deliver",
        title: "More",
        content:
          "Most important learning: reducing friction for the responder is the single biggest lever for feedback volume. The no-login flow wasn't a nice-to-have — it was the core product decision.\n\nNext: explore notification design for prompting result sharing, and test whether the 'Instagrammable' output actually drives organic growth.",
      },
    ],
    prevProject: { slug: "nurtura", name: "Nurtura", thumbnail: "/nurtura.png" },
    nextProject: { slug: "nurtura", name: "Nurtura", thumbnail: "/nurtura.png" },
  },
];

export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug);
}
