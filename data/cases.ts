export const cases = [
  {
    id: "nurtura",
    title: "Nurtura",
    description: "Vertical social network for IVF patients",
    comingSoon: false,
  },
  {
    id: "detectify",
    title: "Detectify",
    description: "Design system",
    comingSoon: true,
  },
  {
    id: "appstract",
    title: "Appstract",
    description: "Bringing social shopping experience to online",
    comingSoon: true,
  },
  {
    id: "meview",
    title: "MeView",
    description: "Your self portrait, powered by peers",
    comingSoon: false,
  },
] as const;

export type CaseId = (typeof cases)[number]["id"];
