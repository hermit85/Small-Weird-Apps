export type AppId = "bzzt" | "cmok" | "nwd";
export type Visual = "radar" | "dot" | "hud";

export type AppData = {
  id: AppId;
  loop: string;
  category: string;
  name: string;
  tagline: string;
  intro: string[];
  bullets: string[];
  punchline: string;
  href: string | null;
  hrefLabel: string;
  accent: AppId;
  visual: Visual;
};

export const apps: AppData[] = [
  {
    id: "bzzt",
    loop: "01",
    category: "Dating",
    name: "BZZT",
    tagline: "Dating as a live signal.",
    intro: [
      "Most dating apps are built for browsing.",
      "BZZT is built for noticing someone now.",
    ],
    bullets: ["Nearby.", "Mutual.", "Time-sensitive.", "Actually human."],
    punchline: "Less swiping. More actual hello.",
    href: "https://apps.apple.com/pl/app/bzzt-zone/id6760717645?l=pl",
    hrefLabel: "Open BZZT",
    accent: "bzzt",
    visual: "radar",
  },
  {
    id: "cmok",
    loop: "02",
    category: "Safety",
    name: "CMOK",
    tagline: "Safety as a daily reassurance loop.",
    intro: [
      "Most safety apps start when something goes wrong.",
      "CMOK starts earlier — with a small daily sign between people who care.",
    ],
    bullets: ["Quiet.", "Private.", "Human."],
    punchline: "Less panic. More presence.",
    href: null,
    hrefLabel: "Open CMOK",
    accent: "cmok",
    visual: "dot",
  },
  {
    id: "nwd",
    loop: "03",
    category: "Racing",
    name: "NWD",
    tagline: "Offline racing as a real-world game.",
    intro: [
      "Riders already race the same trails.",
      "NWD turns that into a league.",
    ],
    bullets: ["Gate.", "Ride.", "Time.", "Rank.", "Repeat."],
    punchline: "Not a tracker. A gravity league.",
    href: "https://new-world-disorder.vercel.app/",
    hrefLabel: "Open NWD",
    accent: "nwd",
    visual: "hud",
  },
];
