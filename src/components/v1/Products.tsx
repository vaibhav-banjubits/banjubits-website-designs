import Link from "next/link";
import { products } from "./data";
import { Icon } from "./Icon";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export const pillClass = (s: string) => `hb-pill hb-pill--${s.toLowerCase().replace(" ", "-")}`;

/** The Mentis accelerators: six products, each on its own page. Kept to name, one line and status. */
export function Products() {
  return (
    <section id="products" className="hb-sec hb-sec--soft">
      <div className="hb-wrap">
        <div className="hb-head hb-head--solo hb-rv">
          <div>
            <p className="hb-kicker">
              <i /> Mentis accelerators
            </p>
            <h2 className="hb-h2">
              Six products, <em>each with a proven head start.</em>
            </h2>
          </div>
        </div>

        <ul className="hb-pgrid">
          {products.map((p, i) => (
            <li key={p.id} className="hb-rv" style={d((i % 3) * 80)}>
              <Link href={`/v1/mentis/${p.slug}`} className="hb-pcard">
                <span className="hb-pcard__top">
                  <span className="hb-pcard__ic">
                    <Icon n={p.icon} />
                  </span>
                  <span className={pillClass(p.status)}>{p.status}</span>
                </span>
                <span className="hb-h3">{p.name}</span>
                <span className="hb-pcard__sum">{p.summary}</span>
                <span className="hb-link">
                  Explore <Icon n="arrow" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
