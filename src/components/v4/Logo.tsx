/** Brand-lab wordmark: "Banjubits" followed by a small square bit in the theme colour. */
export function Logo() {
  return (
    <span className="sg-logo">
      <span className="sg-logo__word">Banjubits</span>
      <span className="sg-logo__bit" aria-hidden="true" />
    </span>
  );
}

/** Rotating text ring with an arrow; links to the contact action. */
export function Badge({ href, label }: { href: string; label: string }) {
  const text = `${label} · ${label} · `;
  return (
    <a href={href} className="sg-badge" aria-label={label}>
      <svg viewBox="0 0 120 120" aria-hidden="true" className="sg-badge__ring">
        <defs>
          <path id="sg-badge-path" d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0" />
        </defs>
        <text>
          <textPath href="#sg-badge-path">{text.toUpperCase()}</textPath>
        </text>
      </svg>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="sg-badge__arrow">
        <path d="M7 17 17 7M8 7h9v9" />
      </svg>
    </a>
  );
}
