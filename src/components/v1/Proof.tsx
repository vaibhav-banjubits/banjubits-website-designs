import { proofBar } from "./data";

/** What the engagements prove: four published points on a deep-navy stage (lower on the page than before). */
export function Proof() {
  return (
    <section className="hb-proof" aria-label="What our engagements prove">
      <div className="hb-slab hb-slab--navy">
        <div className="hb-glow hb-glow--a" aria-hidden="true" />
        <div className="hb-glow hb-glow--b" aria-hidden="true" />
        <div className="hb-wrap">
          <div className="hb-proof__head hb-rv">
            <p className="hb-kicker hb-kicker--dark">
              <i /> Pilots that reached production
            </p>
          </div>
          <ul className="hb-proof__list">
            {proofBar.map((p, i) => (
              <li key={p.tag} className="hb-rv" style={{ "--d": `${i * 90}ms` } as React.CSSProperties}>
                <div className="hb-proof__item">
                  <span className="hb-proof__sector">{p.tag}</span>
                  <strong className="hb-proof__fig">
                    <span data-count={p.value}>{p.value.toLocaleString("en-US")}</span>
                    {p.tail === "%" ? p.tail : p.tail && <span className="hb-proof__tail">{p.tail}</span>}
                  </strong>
                  <span className="hb-proof__label">{p.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
