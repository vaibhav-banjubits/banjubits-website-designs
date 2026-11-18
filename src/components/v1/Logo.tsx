/** Brand-lab wordmark: "Banjubits" followed by a small square bit in the theme colour. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`hb-logo${light ? " hb-logo--light" : ""}`}>
      <span className="hb-logo__word">Banjubits</span>
      <span className="hb-logo__bit" aria-hidden="true" />
    </span>
  );
}
