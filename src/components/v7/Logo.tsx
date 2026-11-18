/** Brand-lab wordmark: "Banjubits" followed by a small square bit in the theme colour. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`rt-logo${light ? " rt-logo--light" : ""}`}>
      <span className="rt-logo__word">Banjubits</span>
      <span className="rt-logo__bit" aria-hidden="true" />
    </span>
  );
}
