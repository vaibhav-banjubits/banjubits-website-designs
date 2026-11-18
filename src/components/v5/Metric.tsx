/** Sets a metric such as "7→1" with the arrow as a smaller brass glyph, so the figures read cleanly. */
export function Metric({ v }: { v: string }) {
  const parts = v.split("→");
  if (parts.length < 2) return <>{v}</>;
  return (
    <>
      {parts[0]}
      <span className="lx-arrow" aria-hidden="true">
        →
      </span>
      <span className="lx-sr"> to </span>
      {parts[1]}
    </>
  );
}
