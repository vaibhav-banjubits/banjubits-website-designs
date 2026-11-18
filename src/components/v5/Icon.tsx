// Lucide icons (ISC licence), inlined as paths.
const PATHS: Record<string, string> = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  "arrow-ur": "M7 17 17 7M8 7h9v9",
  check: "M20 6 9 17l-5-5",
  plus: "M12 5v14M5 12h14",
  shield: "M12 3 5 6v6c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9V6l-7-3ZM9 12l2 2 4-4",
  layers: "m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5",
  cloud: "M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 9.5a4 4 0 0 1-.5 8.5H7Z",
  flow: "M4 6h6v4H4zM14 14h6v4h-6zM7 10v4a2 2 0 0 0 2 2h5",
  spark: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z",
  grid: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  linkedin: "M6 9v11M6 5.5v.01M10 20v-6a3 3 0 0 1 6 0v6M10 9v11",
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM12 12h.01",
  gate: "M4 21V8l8-5 8 5v13M9 21v-6h6v6",
  lock: "M6 11h12v10H6zM8.5 11V7.5a3.5 3.5 0 0 1 7 0V11",
  handoff: "M3 12h7l2-3 2 6 2-3h5",
  pause: "M9 5v14M15 5v14",
  play: "M7 5l12 7-12 7V5Z",
};

export function Icon({ n, className = "" }: { n: keyof typeof PATHS | string; className?: string }) {
  return (
    <svg className={`lx-ic${className ? ` ${className}` : ""}`} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={PATHS[n] ?? ""} />
    </svg>
  );
}
