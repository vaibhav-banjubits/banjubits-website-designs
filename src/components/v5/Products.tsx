import { products } from "@/lib/content";
import { Icon } from "./Icon";

/** Line-art emblems, one per product. Decorative. */
function Emblem({ i }: { i: number }) {
  if (i === 0)
    return (
      <svg viewBox="0 0 120 120" className="lx-emblem" aria-hidden="true">
        <circle cx="60" cy="60" r="46" className="lx-emblem__ring lx-emblem__spin" />
        <circle cx="60" cy="60" r="30" />
        <circle cx="60" cy="60" r="14" />
        <path d="M60 14v92M14 60h92" className="lx-emblem__faint" />
        <circle cx="92.5" cy="27.5" r="3.5" className="lx-emblem__dot" />
      </svg>
    );
  if (i === 1)
    return (
      <svg viewBox="0 0 120 120" className="lx-emblem" aria-hidden="true">
        {[22, 34, 46, 58, 70, 82, 94].map((x, k) => (
          <line key={x} x1={x} x2={x} y1={60 - [8, 18, 30, 40, 26, 16, 10][k]} y2={60 + [8, 18, 30, 40, 26, 16, 10][k]} className="lx-emblem__wave" style={{ ["--k" as string]: k }} />
        ))}
        <circle cx="60" cy="60" r="52" className="lx-emblem__faint" />
      </svg>
    );
  return (
    <svg viewBox="0 0 120 120" className="lx-emblem" aria-hidden="true">
      <path d="M60 14 100 37v46L60 106 20 83V37z" />
      <path d="M60 14v46m0 0 40-23M60 60 20 37M60 60v46" className="lx-emblem__faint" />
      <path d="M60 36 80 47.5v23L60 82 40 70.5v-23z" className="lx-emblem__ring lx-emblem__breathe" />
      <circle cx="60" cy="60" r="3.5" className="lx-emblem__dot" />
    </svg>
  );
}

const KICKER = ["Governance, risk & compliance", "Talent & hiring", "Engineering design"];

export function Products() {
  return (
    <section className="lx-sec lx-sec--night lx-prod" id="products" aria-labelledby="lx-prod-title">
      <div className="lx-prod__glow" aria-hidden="true" />
      <div className="lx-wrap">
        <header className="lx-head lx-head--split">
          <div>
            <p className="lx-eyebrow lx-eyebrow--night lx-rv">
              <span className="lx-eyebrow__rule" aria-hidden="true" />
              Our products
            </p>
            <h2 id="lx-prod-title" className="lx-h2 lx-rv" style={{ ["--d" as string]: ".06s" }}>
              Mentis. <span className="lx-soft">What we learned in delivery, made into products.</span>
            </h2>
          </div>
          <div className="lx-head__aside lx-rv" style={{ ["--d" as string]: ".12s" }}>
            <p>
              Three copilots built on the same governed foundations as our client work, where
              people stay accountable for every decision that matters.
            </p>
          </div>
        </header>

        <div className="lx-prods">
          {products.map((p, i) => (
            <article key={p.name} className="lx-prodcard lx-lit lx-rv" style={{ ["--d" as string]: `${i * 0.08}s` }}>
              <div className="lx-prodcard__art">
                <Emblem i={i} />
              </div>
              <p className="lx-prodcard__kicker">{KICKER[i]}</p>
              <h3>{p.name}</h3>
              <p className="lx-prodcard__text">{p.text}</p>
              <a href="#contact" className="lx-link lx-link--night">
                Request a walkthrough <Icon n="arrow" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
