import { stats } from "@/lib/content";
import { Icon } from "./Icon";
import { deliverables } from "./data";

export function Proof() {
  return (
    <section className="rt-sec" id="proof" aria-labelledby="rt-proof-title">
      <div className="rt-wrap">
        <div className="rt-center rt-rv">
          <p className="rt-kicker">
            <i />
            Proof, not promises
          </p>
          <h2 id="rt-proof-title" className="rt-h2">
            Every engagement ends with a <em>handover worth keeping</em>
          </h2>
        </div>

        <div className="rt-proof">
          <ul className="rt-stats">
            {stats.map((s, i) => (
              <li key={s.value} className="rt-card rt-rv" style={{ ["--d" as string]: `${i * 0.07}s` }}>
                <p className="rt-big">{s.value}</p>
                <p>{s.label}</p>
              </li>
            ))}
          </ul>

          <div className="rt-deliver rt-rv">
            <p className="rt-kicker rt-kicker--night">
              <i />
              At handover you receive
            </p>
            <ul>
              {deliverables.map((d) => (
                <li key={d.title}>
                  <span className="rt-card__ic rt-card__ic--night">
                    <Icon n={d.icon} />
                  </span>
                  <div>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
