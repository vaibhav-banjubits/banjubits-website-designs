import Image from "next/image";
import Link from "next/link";
import { Demo } from "./Demos";
import { products, type Product } from "./data";
import { Icon } from "./Icon";
import { pillClass } from "./Products";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

/** One page per Mentis accelerator: what it is, a demo, an explainer-video slot, and the proof. */
export function ProductPage({ product: p }: { product: Product }) {
  const others = products.filter((o) => o.id !== p.id);
  return (
    <>
      <section className="hb-hero hb-hero--page">
        <div className="hb-aurora" aria-hidden="true">
          <i className="hb-aurora__a" />
          <i className="hb-aurora__b" />
        </div>
        <div className="hb-wrap hb-hero__in">
          <div className="hb-hero__copy">
            <nav className="hb-crumb hb-up" aria-label="Breadcrumb">
              <Link href="/v1#products">Mentis accelerators</Link>
              <span aria-hidden="true">/</span>
              <span>{p.name}</span>
            </nav>
            <p className="hb-kicker hb-up" style={d(40)}>
              <i /> {p.capability}
            </p>
            <h1 className="hb-h1 hb-up" style={d(100)}>
              {p.name}: <em>{p.headline}.</em>
            </h1>
            <p className="hb-lede hb-up" style={d(180)}>
              {p.summary}
            </p>
            <p className="hb-status hb-up" style={d(240)}>
              <span className={pillClass(p.status)}>{p.status}</span>
              <span>{p.statusNote}</span>
            </p>
            <div className="hb-actions hb-up" style={d(320)}>
              <Link href="/v1#start" className="hb-btn" data-magnet>
                <span>Start a project</span>
                <span className="hb-btn__ic">
                  <Icon n="arrow" />
                </span>
              </Link>
              <Link href="/v1#products" className="hb-btn hb-btn--ghost" data-magnet>
                <span>All Mentis products</span>
              </Link>
            </div>
          </div>

          <div className="hb-pstage hb-pstage--solo hb-up" style={d(160)}>
            <div className="hb-pstage__panel">
              <Demo id={p.id} />
            </div>
          </div>
        </div>
      </section>

      <section className="hb-sec hb-sec--tight-top">
        <div className="hb-wrap">
          <div className="hb-video hb-rv">
            <Image
              src={p.photo}
              alt=""
              aria-hidden="true"
              fill
              sizes="(min-width: 1280px) 1240px, 100vw"
              style={{ objectPosition: p.photoPosition }}
            />
            <span className="hb-video__shade" aria-hidden="true" />
            <span className="hb-video__play" aria-hidden="true">
              <Icon n="play" />
            </span>
            <div className="hb-video__cap">
              <b>{p.name} in two minutes</b>
              <span>Explainer video · coming soon</span>
            </div>
          </div>
        </div>
      </section>

      <section className="hb-sec hb-sec--soft">
        <div className="hb-wrap">
          <div className="hb-three">
            <article className="hb-rv">
              <p className="hb-three__k">The challenge</p>
              <p className="hb-three__big">{p.challenge}</p>
              <p className="hb-three__res">
                <small>Result</small>
                {p.result}
              </p>
            </article>
            <article className="hb-rv" style={d(80)}>
              <p className="hb-three__k">What we do</p>
              <ul className="hb-ticks hb-ticks--dark">
                {p.does.map((t) => (
                  <li key={t}>
                    <Icon n="check" />
                    {t}
                  </li>
                ))}
              </ul>
            </article>
            <article className="hb-rv" style={d(160)}>
              <p className="hb-three__k">What changes for you</p>
              <ul className="hb-ticks hb-ticks--dark">
                {p.changes.map((t) => (
                  <li key={t}>
                    <Icon n="check" />
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="hb-sec hb-sec--tight">
        <div className="hb-slab hb-slab--navy">
          <div className="hb-glow hb-glow--a" aria-hidden="true" />
          <div className="hb-wrap">
            <div className="hb-pfproof hb-rv">
              <div>
                <p className="hb-kicker hb-kicker--dark">
                  <i /> {p.proof.label}
                </p>
                <h2 className="hb-h2">
                  {p.proof.label.startsWith("Related")
                    ? "Related delivery"
                    : p.proof.label.startsWith("Built")
                      ? "Built, with a live demo"
                      : "Proven in delivery"}
                </h2>
                <p className="hb-lede">{p.proof.text}</p>
              </div>
              {p.proof.metrics && (
                <ul className="hb-pfproof__m">
                  {p.proof.metrics.map((m) => (
                    <li key={m.label}>
                      <strong>{m.value}</strong>
                      <span>{m.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="hb-sec">
        <div className="hb-wrap">
          <div className="hb-head hb-rv">
            <div>
              <p className="hb-kicker">
                <i /> More Mentis accelerators
              </p>
              <h2 className="hb-h2">
                Build the stack <em>one proof at a time.</em>
              </h2>
            </div>
          </div>
          <ul className="hb-others">
            {others.map((o) => (
              <li key={o.id} className="hb-rv">
                <Link href={`/v1/mentis/${o.slug}`} className="hb-other">
                  <span className="hb-pcard__ic">
                    <Icon n={o.icon} />
                  </span>
                  <span>
                    <b>{o.name}</b>
                    <small>{o.capability}</small>
                  </span>
                  <span className={pillClass(o.status)}>{o.status}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="hb-sec hb-sec--tight">
        <div className="hb-slab hb-slab--grad hb-slab--cta">
          <div className="hb-glow hb-glow--e" aria-hidden="true" />
          <div className="hb-wrap hb-cta">
            <h2 className="hb-h2">
              Bring one business problem. <em>Leave with a plan.</em>
            </h2>
            <Link href="/v1#start" className="hb-btn" data-magnet>
              <span>Start a project</span>
              <span className="hb-btn__ic">
                <Icon n="arrow" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
