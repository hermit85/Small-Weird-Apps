export type AppId = "bzzt" | "cmok" | "nwd";

export type AppData = {
  id: AppId;
  loop: string;
  /** Brand display name as the wordmark renders it on the publisher page */
  name: string;
  /** Full / formal product name (used in catalogue + legal) */
  fullName: string;
  /** What the app actually is — short, honest framing */
  category: string;
  /** Primary brand line — Polish, as the product itself uses it */
  taglinePl: string;
  /** English rendering for the publisher page */
  tagline: string;
  intro: string[];
  /** What the app pushes back against (rejected pattern) */
  input: string[];
  /** The category default loop — how the broken pattern actually flows */
  categoryDefault: string[];
  /** Loop steps — Polish (canonical, as the product uses) */
  loopStepsPl: string[];
  /** Loop steps — English mapping for the diagram labels */
  loopSteps: string[];
  /** Short descriptive bullets */
  bullets: string[];
  /** Final reframed line */
  punchline: string;
  /** Public link or null when not yet shippable */
  href: string | null;
  hrefLabel: string;
  accent: AppId;
};

export const apps: AppData[] = [
  {
    id: "bzzt",
    loop: "01",
    name: "BZZT",
    fullName: "BZZT — Zone",
    category: "Proximity",
    taglinePl: "Poznaj kogoś obok. Twarzą w twarz.",
    tagline: "Meet someone nearby. Face to face.",
    intro: [
      "Most apps for meeting people are built for browsing.",
      "BZZT is built for noticing someone now — with a 30-minute window to actually meet.",
    ],
    input: ["endless swiping", "profile shopping"],
    categoryDefault: ["profile", "swipe", "chat", "ghost"],
    loopStepsPl: ["radar", "sygnał", "iskra", "spotkanie"],
    loopSteps: ["radar", "signal", "spark", "meet"],
    bullets: ["Nearby.", "Anonymous until mutual.", "30 minutes.", "Face to face."],
    punchline: "Less swiping. More actual hello.",
    href: "https://apps.apple.com/pl/app/bzzt-zone/id6760717645?l=pl",
    hrefLabel: "Open BZZT",
    accent: "bzzt",
  },
  {
    id: "cmok",
    loop: "02",
    name: "cmok",
    fullName: "cmok",
    category: "Daily ritual",
    taglinePl: "Codzienny znak, że jest OK.",
    tagline: "A daily sign that everything is OK.",
    intro: [
      "Most safety apps start when something goes wrong.",
      "cmok starts earlier — with one tap a day, between people who already care.",
    ],
    input: ["panic theatre", "cold emergency tools"],
    categoryDefault: ["worry", "call", "no answer", "panic"],
    loopStepsPl: ["znak", "echo", "spokój"],
    loopSteps: ["sign", "echo", "reassurance"],
    bullets: ["One tap.", "No chat.", "Just presence."],
    punchline: "Less panic. More presence.",
    href: "https://apps.apple.com/pl/app/cmok/id6762090888",
    hrefLabel: "Open cmok",
    accent: "cmok",
  },
  {
    id: "nwd",
    loop: "03",
    name: "NWD",
    fullName: "New World Disorder",
    category: "Gravity league",
    taglinePl: "Wjedź. Zjedź. Wróć na górę.",
    tagline: "Ride in. Ride down. Come back up.",
    intro: [
      "Riders already race the same trails.",
      "NWD turns that into a verified, seasonal gravity league.",
    ],
    input: ["training log", "event dependency"],
    categoryDefault: ["track", "log", "forget"],
    loopStepsPl: ["bramka", "rozpęd", "meta", "tablica", "loop"],
    loopSteps: ["gate", "descent", "finish", "leaderboard", "repeat"],
    bullets: ["Official trails.", "GPS-verified.", "Seasonal podiums."],
    punchline: "Not a tracker. A gravity league.",
    href: "https://new-world-disorder.vercel.app/",
    hrefLabel: "Open NWD",
    accent: "nwd",
  },
];
