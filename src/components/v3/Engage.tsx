import type { CSSProperties } from "react";
import { Icon } from "./Icon";
import { steps } from "./data";

export function Engage() {
  return (
    <section className="dh-sec dh-engage" id="engage">
      <div className="dh-wrap">
        <header className="dh-head">
          <h2 className="dh-h2 dh-rv">
            Start small. <span>Prove it. Then scale.</span>
          </h2>
        </header>

        <ol className="dh-route dh-rv">
          <span className="dh-route__line" aria-hidden="true">
            <i />
          </span>
          {steps.map((s, i) => (
            <li key={s.no} style={{ "--i": i } as CSSProperties}>
              <span className="dh-route__stop">
                <Icon n={s.icon} />
              </span>
              <div className="dh-route__card">
                <span className="dh-route__no" aria-hidden="true">{s.no}</span>
                <small>{s.time}</small>
                <h3>{s.title}</h3>
                <p className="dh-route__get">
                  <b>{s.get}</b>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
