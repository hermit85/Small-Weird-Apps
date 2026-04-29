export type AppId = "bzzt" | "cmok" | "nwd";

export type AppData = {
  id: AppId;
  /** loop number as a 2-char string ('01' / '02' / '03') */
  loop: string;
  /** brand display name (the wordmark) */
  name: string;
  /** full / formal product name (used on /legal) */
  fullName: string;
  /** what the app actually is (used on /legal) */
  category: string;
  /** public link or null when not yet shippable */
  href: string | null;
  accent: AppId;
};

export const apps: AppData[] = [
  {
    id: "bzzt",
    loop: "01",
    name: "BZZT",
    fullName: "BZZT Zone",
    category: "Proximity",
    href: "https://apps.apple.com/pl/app/bzzt-zone/id6760717645?l=pl",
    accent: "bzzt",
  },
  {
    id: "cmok",
    loop: "02",
    name: "cmok",
    fullName: "cmok",
    category: "Daily ritual",
    href: "https://apps.apple.com/pl/app/cmok/id6762090888",
    accent: "cmok",
  },
  {
    id: "nwd",
    loop: "03",
    name: "NWD",
    fullName: "New World Disorder",
    category: "Gravity league",
    href: "https://new-world-disorder.vercel.app/",
    accent: "nwd",
  },
];
