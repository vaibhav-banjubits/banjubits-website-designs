import { reasons, steps } from "./data";
import { Icon } from "./Icon";

export function Engage() {
  return (
    <section className="st-sec st-engage" id="engage" aria-labelledby="st-engage-h">
      <div className="st-wrap">
        <div className="st-head st-head--center st-rv">
          <p className="st-label">How we engage</p>
          <h2 className="st-h2" id="st-engage-h">
            Start small, prove the value, <em>then scale.</em>
          </h2>
          <p className="st-sub">Fixed-scope starting points. Working software every week, not slide decks.</p>
        </div>

        <div className="st-flowcard st-rv">
          <ol className="st-flow">
            {steps.map((s) => (
              <li key={s.n}>
                <span className="st-flow__n">{s.n}</span>
                <span className="st-flow__time">{s.time}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="st-flow__get">
                  <small>You get</small>
                  <b>{s.get}</b>
                </div>
              </li>
            ))}
          </ol>

          <ul className="st-reasons">
            {reasons.map((r) => (
              <li key={r}>
                <Icon n="check" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
