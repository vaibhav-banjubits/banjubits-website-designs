/** Brand-lab wordmark: "Banjubits" followed by a small square bit in the theme colour. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`rh-logo${light ? " rh-logo--light" : ""}`}>
      <span className="rh-logo__word">Banjubits</span>
      <span className="rh-logo__bit" aria-hidden="true" />
    </span>
  );
}
