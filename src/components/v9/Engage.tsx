import { reasons, steps } from "./data";
import { Icon } from "./Icon";

export function Engage() {
  return (
    <section className="gd-sec gd-engage" id="engage" aria-labelledby="gd-engage-h">
      <div className="gd-wrap">
        <div className="gd-head gd-rv">
          <div>
            <p className="gd-label">How we engage</p>
            <h2 className="gd-h2" id="gd-engage-h">
              Start small, prove the value, <em>then scale.</em>
            </h2>
          </div>
          <p className="gd-sub">Fixed-scope starting points. Working software every week, not slide decks.</p>
        </div>

        <ol className="gd-steps">
          {steps.map((s, n) => (
            <li className="gd-rv" style={{ ["--d" as string]: `${n * 0.08}s` }} key={s.n}>
              <span className="gd-steps__n">{s.n}</span>
              <span className="gd-steps__time">{s.time}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <div className="gd-steps__get">
                <small>You get</small>
                <b>{s.get}</b>
              </div>
            </li>
          ))}
        </ol>

        <ul className="gd-reasons gd-rv">
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
