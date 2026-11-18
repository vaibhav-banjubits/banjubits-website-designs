// Palettes and type pairings copied verbatim from banjubits-brand-lab/index.html.
// Add or change values in the brand lab first, then regenerate; do not invent them here.

export const TOKEN_KEYS = [
  "bg", "surface", "border", "ink", "muted", "subtle",
  "primary", "primaryInk", "accent",
  "inverse", "inverseInk", "inverseMuted", "inverseAccent",
  "success", "warn", "danger",
  "viz1", "viz2", "viz3", "viz4", "viz5",
] as const;
export type TokenKey = (typeof TOKEN_KEYS)[number];
export type Tokens = Record<TokenKey, string>;

const T = (a: string[]): Tokens =>
  Object.fromEntries(TOKEN_KEYS.map((k, i) => [k, a[i]])) as Tokens;

export type Direction = {
  id: string;
  n: string;
  name: string;
  tag: string;
  line: string;
  light: Tokens;
  dark: Tokens;
};

export type TypePair = {
  id: string;
  name: string;
  sub: string;
  display: string;
  body: string;
  dw: number;
  dt: string;
};

export const DIRECTIONS: Direction[] = [
  {
    id: "live",
    n: "01",
    name: "As live",
    tag: "Baseline",
    line: "What ships today: Mentis colours on white, coral CTAs. The reference point, and it fails AA on its main button.",
    light: T(["#FFFFFF", "#FBFCFD", "#E6EAEE", "#293241", "#838891", "#A5A9AF", "#EE6C4D", "#FFFFFF", "#3D5A80", "#293241", "#FFFFFF", "#A9B1BE", "#EE6C4D", "#2F855A", "#C27C0E", "#E53E3E", "#3D5A80", "#EE6C4D", "#5A3D80", "#8FB0D8", "#98C1D9"]),
    dark: T(["#1F252F", "#293241", "#3A4557", "#E0FBFC", "#7F8896", "#5E6878", "#EE6C4D", "#FFFFFF", "#8FB0D8", "#121820", "#E0FBFC", "#8792A2", "#EE6C4D", "#48BB78", "#ECC94B", "#FC8181", "#8FB0D8", "#EE6C4D", "#9F7AEA", "#3D5A80", "#98C1D9"]),
  },
  {
    id: "fixed",
    n: "02",
    name: "Live, AA-fixed",
    tag: "Minimum change",
    line: "Same identity, zero rebrand cost: coral deepened to #C4502F for any fill carrying text, greys pulled above 4.5:1.",
    light: T(["#FFFFFF", "#F6F9FB", "#D9E0E8", "#293241", "#4F5867", "#5F6876", "#C4502F", "#FFFFFF", "#3D5A80", "#293241", "#FFFFFF", "#C3CAD5", "#F4A08A", "#276749", "#975A16", "#B83227", "#3D5A80", "#C4502F", "#5A3D80", "#2B7A8C", "#7A8FAD"]),
    dark: T(["#161B24", "#1F2632", "#333D4D", "#EEF3F8", "#B4BDCB", "#97A2B3", "#F08A6E", "#1A1F28", "#9DBBE3", "#0E121A", "#EEF3F8", "#AAB4C3", "#F4A08A", "#68D391", "#F6C66B", "#FC8A8A", "#8FB0D8", "#F08A6E", "#B39DDB", "#6CC3D5", "#E0FBFC"]),
  },
  {
    id: "mentis",
    n: "03",
    name: "Mentis guidelines",
    tag: "Mandated",
    line: "The Mentis doc applied literally: Royal Blue leads, Deep Purple supports, coral demoted to highlights and data.",
    light: T(["#F4FDFE", "#FFFFFF", "#D3E4EA", "#293241", "#4A5568", "#5B6472", "#3D5A80", "#FFFFFF", "#5A3D80", "#293241", "#E0FBFC", "#B8C4D2", "#F4A08A", "#2E7D5B", "#9C5B12", "#B4382A", "#3D5A80", "#5A3D80", "#EE6C4D", "#5E8FB8", "#293241"]),
    dark: T(["#1B2230", "#243044", "#34435A", "#E0FBFC", "#B6C3D3", "#98A8BD", "#98B6E0", "#14202F", "#C2AEE6", "#121822", "#E0FBFC", "#A9B7C9", "#F4A08A", "#6FD3A3", "#F2C46D", "#FF9C8F", "#98B6E0", "#C2AEE6", "#EE6C4D", "#98C1D9", "#E0FBFC"]),
  },
  {
    id: "harbour",
    n: "04",
    name: "Deep Harbour",
    tag: "New",
    line: "Deep navy + electric teal. Royal Blue matured for finance and security buyers; teal is the live-AI signal.",
    light: T(["#F5F7FA", "#FFFFFF", "#DCE3EC", "#0B1B30", "#46566E", "#5A6880", "#0F2D52", "#FFFFFF", "#0B7A75", "#0B1B30", "#F5F7FA", "#A9B8CC", "#4FE3D6", "#13795B", "#A15C07", "#B42318", "#0F2D52", "#0B9A8D", "#3E7CB1", "#7A5AF8", "#C77812"]),
    dark: T(["#07111F", "#0E1D31", "#1F3350", "#E8F0F8", "#A3B3C7", "#8496AD", "#2EE6D6", "#04131F", "#4FE3D6", "#030A14", "#E8F0F8", "#93A5BC", "#4FE3D6", "#3DD68C", "#F5B84A", "#FF7A6E", "#2EE6D6", "#5B9BFF", "#F5B84A", "#A78BFA", "#E8F0F8"]),
  },
  {
    id: "ledger",
    n: "05",
    name: "Ledger",
    tag: "New",
    line: "Warm ink + saffron on off-white paper. Editorial and consultancy-grade; saffron marks the one action.",
    light: T(["#FAF7F0", "#FFFFFF", "#E7E0D2", "#1C1917", "#57534E", "#69625A", "#F0A830", "#1C1917", "#9A4F06", "#1C1917", "#FAF7F0", "#BDB4A6", "#F5B544", "#3F7D3A", "#92400E", "#B42318", "#1C1917", "#BD7E0E", "#7C6F5B", "#C2410C", "#4D7C8A"]),
    dark: T(["#14110F", "#1E1A17", "#352E28", "#F5EFE4", "#BDB3A4", "#A0968A", "#F5B544", "#1C1917", "#F5B544", "#0B0908", "#F5EFE4", "#A89F92", "#F5B544", "#7BC67A", "#F59E0B", "#F87171", "#F5B544", "#F5EFE4", "#E26D3A", "#8FB8C4", "#A8A29E"]),
  },
  {
    id: "signal",
    n: "06",
    name: "Signal",
    tag: "New · dark hero",
    line: "Graphite + signal violet with a dark-first hero. Product-grade precision; a thread back to Mentis purple.",
    light: T(["#F7F7F8", "#FFFFFF", "#E4E4E7", "#18181B", "#52525B", "#63636C", "#5B3DF5", "#FFFFFF", "#5B3DF5", "#0E0E11", "#F4F4F5", "#A1A1AA", "#A594FF", "#15803D", "#A16207", "#B91C1C", "#5B3DF5", "#18181B", "#0E9F87", "#8B7AF0", "#C47A06"]),
    dark: T(["#0E0E11", "#18181B", "#2A2A2F", "#F4F4F5", "#A1A1AA", "#8B8B94", "#8F7CFF", "#0E0E11", "#A594FF", "#050507", "#F4F4F5", "#A1A1AA", "#A594FF", "#4ADE80", "#FBBF24", "#F87171", "#8F7CFF", "#22C3A6", "#F4F4F5", "#F59E0B", "#71717A"]),
  },
];

export const MONO_STACK =
  '"Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace';

export const TYPES: TypePair[] = [
  {
    id: "inter",
    name: "Inter",
    sub: "Inter 650 / 400",
    display: "\"Inter\", system-ui, sans-serif",
    body: "\"Inter\", system-ui, sans-serif",
    dw: 650,
    dt: "-0.032em",
  },
  {
    id: "manrope",
    name: "Manrope + Inter",
    sub: "Manrope 700 / Inter 400",
    display: "\"Manrope\", system-ui, sans-serif",
    body: "\"Inter\", system-ui, sans-serif",
    dw: 700,
    dt: "-0.035em",
  },
  {
    id: "jakarta",
    name: "Plus Jakarta Sans",
    sub: "Jakarta 700 / 400",
    display: "\"Plus Jakarta Sans\", system-ui, sans-serif",
    body: "\"Plus Jakarta Sans\", system-ui, sans-serif",
    dw: 700,
    dt: "-0.035em",
  },
  {
    id: "fraunces",
    name: "Fraunces + Inter",
    sub: "Fraunces 500 / Inter 400",
    display: "\"Fraunces\", Georgia, serif",
    body: "\"Inter\", system-ui, sans-serif",
    dw: 480,
    dt: "-0.025em",
  },
];
