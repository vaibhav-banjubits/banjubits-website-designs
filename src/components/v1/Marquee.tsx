import { sectors } from "./data";

/** A slow, endless ribbon of the sectors we have shipped in (no client logos exist yet). */
export function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="hb-marq__row" aria-hidden={hidden || undefined}>
      {sectors.map((s) => (
        <li key={s}>
          <i />
          {s}
        </li>
      ))}
    </ul>
  );
  return (
    <section className="hb-marq" aria-label="Sectors we have worked in">
      <div className="hb-marq__track">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
