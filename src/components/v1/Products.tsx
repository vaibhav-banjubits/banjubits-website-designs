import Link from "next/link";
import { products } from "./data";
import { Icon } from "./Icon";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export const pillClass = (s: string) => `hb-pill hb-pill--${s.toLowerCase().replace(" ", "-")}`;

/** The Mentis accelerators: six capabilities, each on its own page. */
export function Products() {
  return (
    <section id="products" className="hb-sec hb-sec--soft">
      <div className="hb-wrap">
        <div className="hb-head hb-rv">
          <div>
            <p className="hb-kicker">
              <i /> Mentis accelerators
            </p>
            <h2 className="hb-h2">
              Six ways we put AI to work, <em>each with a proven head start.</em>
            </h2>
          </div>
          <p className="hb-head__side">
            Built in our own delivery work, so you start from proven building blocks, not a blank page. Every product has
            its own page.
          </p>
        </div>

        <ul className="hb-pgrid">
          {products.map((p, i) => (
            <li key={p.id} className="hb-rv" style={d((i % 3) * 80)}>
              <Link href={`/v4/mentis/${p.slug}`} className="hb-pcard">
                <span className="hb-pcard__top">
                  <span className="hb-pcard__ic">
                    <Icon n={p.icon} />
                  </span>
                  <span className={pillClass(p.status)}>{p.status}</span>
                </span>
                <span className="hb-pcard__cap">{p.capability}</span>
                <span className="hb-h3">{p.name}</span>
                <span className="hb-pcard__sum">{p.summary}</span>
                <span className="hb-pcard__res">
                  <small>Result</small>
                  {p.result}
                </span>
                <span className="hb-pcard__ev">
                  <i aria-hidden="true" />
                  {p.proof.label}
                </span>
                <span className="hb-link">
                  Explore {p.name} <Icon n="arrow" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="hb-bene hb-rv">
          <li>
            <b>Faster start.</b> Weeks, not months, to a working pilot.
          </li>
          <li>
            <b>Lower risk.</b> Building blocks already proven in production work.
          </li>
          <li>
            <b>No lock-in.</b> Open standards. Swap AI models and tools as your needs change.
          </li>
        </ul>

        <p className="hb-legend hb-legend--light hb-rv">
          <span className="hb-pill hb-pill--live">Live</span>
          <span className="hb-pill hb-pill--pilot">Pilot</span>
          <span className="hb-pill hb-pill--in-development">In development</span>
          <span className="hb-pill hb-pill--roadmap">Roadmap</span>
          <span>We say plainly what is built and what is not.</span>
        </p>
      </div>
    </section>
  );
}
