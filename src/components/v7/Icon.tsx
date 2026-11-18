// Lucide icons (ISC licence), inlined as paths.
const PATHS: Record<string, string> = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  "arrow-ur": "M7 17 17 7M8 7h9v9",
  "chev-l": "m15 6-6 6 6 6",
  "chev-r": "m9 6 6 6-6 6",
  check: "M20 6 9 17l-5-5",
  x: "M18 6 6 18M6 6l12 12",
  plus: "M12 5v14M5 12h14",
  shield: "M12 3 5 6v6c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9V6l-7-3ZM9 12l2 2 4-4",
  layers: "m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5",
  spark:
    "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  linkedin: "M6 9v11M6 5.5v.01M10 20v-6a3 3 0 0 1 6 0v6M10 9v11",
  target:
    "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM12 12h.01",
  users:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  boxes: "M12 3 4 7v10l8 4 8-4V7l-8-4ZM4 7l8 4 8-4M12 11v10",
  lock: "M6 11h12v9H6zM9 11V8a3 3 0 0 1 6 0v3",
  file: "M7 3h7l4 4v14H7zM14 3v4h4M10 13h5M10 17h5",
  key: "M15 9a4 4 0 1 1-3.5 5.9L4 15v-3l2-.5V10l2-.5L11.1 9.3A4 4 0 0 1 15 9ZM16 8.5h.01",
  rotate: "M3 12a9 9 0 0 1 15.5-6.2L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.2L3 16M3 21v-5h5",
};

export function Icon({ n, className = "" }: { n: keyof typeof PATHS | string; className?: string }) {
  return (
    <svg
      className={`rt-ic ${className}`.trim()}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[n] ?? ""} />
    </svg>
  );
}
