import { reasons, steps } from "./data";
import { Icon } from "./Icon";

export function Engage() {
  return (
    <section className="ld-sec ld-engage" id="engage" aria-labelledby="ld-engage-h">
      <div className="ld-wrap">
        <div className="ld-head ld-rv">
          <p className="ld-label">How we engage</p>
          <h2 className="ld-h2" id="ld-engage-h">
            Start small, prove the value, <em>then scale</em>.
          </h2>
          <p className="ld-sub">Fixed-scope starting points. Working software every week, not slide decks.</p>
        </div>

        <ol className="ld-steps">
          {steps.map((s, n) => (
            <li className="ld-step-card ld-rv" style={{ ["--d" as string]: `${n * 0.1}s` }} key={s.n}>
              <span className="ld-step-card__n">{s.n}</span>
              <span className="ld-step-card__time">{s.time}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <div className="ld-step-card__get">
                <small>You get</small>
                <b>{s.get}</b>
              </div>
            </li>
          ))}
        </ol>

        <ul className="ld-reasons ld-rv">
          {reasons.map((r) => (
            <li key={r}>
              <Icon n="check" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
