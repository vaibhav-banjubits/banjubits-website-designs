// Lucide icons (ISC licence), inlined as paths.
const PATHS: Record<string, string> = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  "arrow-ur": "M7 17 17 7M8 7h9v9",
  check: "M20 6 9 17l-5-5",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  linkedin: "M6 9v11M6 5.5v.01M10 20v-6a3 3 0 0 1 6 0v6M10 9v11",
  user: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
  users:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  shield: "M12 3 5 6v6c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9V6l-7-3ZM9 12l2 2 4-4",
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM12 12h.01",
  sparkle:
    "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z",
  play: "M6 4l14 8-14 8Z",
  book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14ZM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5",
  route: "M6 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM9 16h6a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6",
  swap: "M17 3l4 4-4 4M3 7h18M7 21l-4-4 4-4M21 17H3",
  cube: "M21 8 12 3 3 8v8l9 5 9-5V8ZM3 8l9 5 9-5M12 13v8",
  mic: "M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3ZM19 11a7 7 0 0 1-14 0M12 18v4",
  layers: "m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5",
  grid: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
};

export function Icon({ n, className = "" }: { n: keyof typeof PATHS | string; className?: string }) {
  return (
    <svg className={`hb-ic ${className}`.trim()} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={PATHS[n] ?? ""} />
    </svg>
  );
}
