import { stats } from "@/lib/content";
import { Icon } from "./Icon";
import { deliverables } from "./data";

export function Proof() {
  return (
    <section className="rh-sec" id="proof" aria-labelledby="rh-proof-title">
      <div className="rh-wrap">
        <div className="rh-center rh-rv">
          <p className="rh-kicker">
            <i />
            Proof, not promises
          </p>
          <h2 id="rh-proof-title" className="rh-h2">
            Every engagement ends with a <em>handover worth keeping</em>
          </h2>
        </div>

        <div className="rh-proof">
          <ul className="rh-stats">
            {stats.map((s, i) => (
              <li key={s.value} className="rh-card rh-rv" style={{ ["--d" as string]: `${i * 0.07}s` }}>
                <p className="rh-big">{s.value}</p>
                <p>{s.label}</p>
              </li>
            ))}
          </ul>

          <div className="rh-deliver rh-rv">
            <p className="rh-kicker rh-kicker--night">
              <i />
              At handover you receive
            </p>
            <ul>
              {deliverables.map((d) => (
                <li key={d.title}>
                  <span className="rh-card__ic rh-card__ic--night">
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
