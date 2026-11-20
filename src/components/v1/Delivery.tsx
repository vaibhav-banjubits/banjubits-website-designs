import { steps } from "./data";

/** How we engage: four steps in a row. Title, timing, one line. */
export function Delivery() {
  return (
    <section id="engage" className="hb-sec">
      <div className="hb-wrap">
        <div className="hb-head hb-head--solo hb-rv">
          <div>
            <p className="hb-kicker">
              <i /> How we engage
            </p>
            <h2 className="hb-h2">
              Start small, prove value, <em>then scale.</em>
            </h2>
          </div>
        </div>

        <ol className="hb-flow">
          {steps.map((s, i) => (
            <li key={s.no} className="hb-flow__step hb-rv" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
              <span className="hb-flow__no">{s.no}</span>
              <h3 className="hb-h3">{s.title}</h3>
              <span className="hb-flow__time">{s.time}</span>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
