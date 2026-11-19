import { industries } from "./data";

/** A slow ribbon of the industries named in the capabilities deck (no client logos exist yet). */
export function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="hb-marq__row" aria-hidden={hidden || undefined}>
      {[...industries, ...industries].map((s, i) => (
        <li key={`${s}-${i}`}>
          <i />
          {s}
        </li>
      ))}
    </ul>
  );
  return (
    <section className="hb-marq" aria-label="Industries we work in">
      <div className="hb-marq__track">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
