import { promises } from "./data";

/** Three promises, nothing else. */
export function Why() {
  return (
    <section id="why" className="hb-sec hb-sec--soft">
      <div className="hb-wrap">
        <div className="hb-head hb-head--solo hb-rv">
          <div>
            <p className="hb-kicker">
              <i /> Why BanjuBits
            </p>
            <h2 className="hb-h2">
              AI inside your business, <em>with your people in charge.</em>
            </h2>
          </div>
        </div>
        <ul className="hb-pledge">
          {promises.map((p, i) => (
            <li key={p.title} className="hb-rv" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
              <span className="hb-pledge__no">0{i + 1}</span>
              <b>{p.title}</b>
              <span>{p.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
