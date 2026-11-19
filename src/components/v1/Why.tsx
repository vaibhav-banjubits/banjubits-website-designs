import { industries, promises, why } from "./data";
import { Icon } from "./Icon";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

/** Why leadership teams choose BanjuBits: a sticky statement, six plain reasons, and three promises. */
export function Why() {
  return (
    <section id="why" className="hb-sec hb-sec--soft">
      <div className="hb-wrap">
        <div className="hb-whyx">
          <div className="hb-whyx__side hb-rv">
            <p className="hb-kicker">
              <i /> Why leadership teams choose us
            </p>
            <h2 className="hb-h2">
              AI inside your business, <em>with your people in charge.</em>
            </h2>
            <p className="hb-whyx__lede">
              The people who scope your project are the people who build it. We prove the value before anything scales,
              then hand over a system your team can run.
            </p>
            <div className="hb-whyx__ind">
              <p>Industries we work in</p>
              <ul>
                {industries.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>

          <ol className="hb-reasons">
            {why.map((w, i) => (
              <li key={w.title} className="hb-reason hb-rv" style={d((i % 2) * 60)}>
                <span className="hb-reason__ic">
                  <Icon n={w.icon} />
                </span>
                <div>
                  <b>{w.title}</b>
                  <span>{w.text}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="hb-vows hb-rv">
          <div className="hb-glow hb-glow--a" aria-hidden="true" />
          <p className="hb-kicker hb-kicker--dark">
            <i /> Three promises on every engagement
          </p>
          <ul>
            {promises.map((p, i) => (
              <li key={p.title}>
                <span className="hb-vows__no">0{i + 1}</span>
                <b>{p.title}</b>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
