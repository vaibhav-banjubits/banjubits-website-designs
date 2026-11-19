"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { products, STAGES, type ProductId } from "./data";
import { Icon } from "./Icon";

function pickTopic(id: ProductId) {
  window.dispatchEvent(new CustomEvent("gd:topic", { detail: id }));
}

/** The product line-up as an index: one row per Mentis product, opens to its detail. */
export function Index() {
  const [open, setOpen] = useState<ProductId | null>("atlas");

  // "What we hear" links elsewhere on the page open the matching product here.
  useEffect(() => {
    const on = (e: Event) => setOpen((e as CustomEvent<ProductId>).detail);
    window.addEventListener("gd:open", on);
    return () => window.removeEventListener("gd:open", on);
  }, []);

  return (
    <section className="gd-sec gd-index" id="products" aria-labelledby="gd-index-h">
      <div className="gd-wrap">
        <div className="gd-head gd-rv">
          <div>
            <p className="gd-label">What we build</p>
            <h2 className="gd-h2" id="gd-index-h">
              Six accelerators. <em>One job each.</em>
            </h2>
          </div>
          <div className="gd-head__side">
            <p className="gd-sub">
              The Mentis accelerators are built from our own delivery work, so you start from proven building
              blocks, not a blank page.
            </p>
            <ul className="gd-legend" aria-label="What the status dots mean">
              {(Object.keys(STAGES) as Array<keyof typeof STAGES>).map((k) => (
                <li key={k}>
                  <span className={`gd-dot gd-dot--${k}`} />
                  {STAGES[k].label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="gd-idx gd-rv">
          {products.map((p, n) => {
            const isOpen = open === p.id;
            return (
              <li key={p.id} className={`gd-row${isOpen ? " gd-is-open" : ""}`} id={`gd-row-${p.id}`}>
                <h3>
                  <button
                    className="gd-row__head"
                    aria-expanded={isOpen}
                    aria-controls={`gd-panel-${p.id}`}
                    id={`gd-head-${p.id}`}
                    onClick={() => setOpen(isOpen ? null : p.id)}
                  >
                    <span className="gd-row__n">{String(n + 1).padStart(2, "0")}</span>
                    <span className="gd-row__name">
                      {p.name}
                      <small>{p.capability}</small>
                    </span>
                    <span className="gd-row__job">{p.job}</span>
                    <span className="gd-row__stage">
                      <span className={`gd-dot gd-dot--${p.stage}`} />
                      {STAGES[p.stage].short}
                    </span>
                    <span className="gd-row__tog" aria-hidden="true">
                      <Icon n={isOpen ? "minus" : "plus"} />
                    </span>
                  </button>
                </h3>

                <div
                  className="gd-row__panel"
                  id={`gd-panel-${p.id}`}
                  role="region"
                  aria-labelledby={`gd-head-${p.id}`}
                  inert={!isOpen}
                >
                  <div className="gd-row__inner">
                    <div className="gd-row__copy">
                      <p className="gd-row__headline">{p.headline}</p>
                      <p className="gd-row__sum">{p.summary}</p>
                      <ul className="gd-row__changes">
                        {p.changes.map((c) => (
                          <li key={c}>
                            <Icon n="check" />
                            {c}
                          </li>
                        ))}
                      </ul>
                      <div className="gd-row__proof">
                        <strong>{p.proof.value}</strong>
                        <div>
                          <b>{p.proof.label}</b>
                          <p>{p.proof.text}</p>
                        </div>
                      </div>
                      <p className="gd-row__note">
                        <span className={`gd-dot gd-dot--${p.stage}`} />
                        {p.stageNote}
                      </p>
                      <div className="gd-row__foot">
                        <a href="#start" className="gd-btn gd-btn--sm" onClick={() => pickTopic(p.id)}>
                          <span>Talk to us about {p.name.replace("Mentis ", "")}</span>
                          <Icon n="arrow-right" />
                        </a>
                        <span className="gd-soon">
                          <Icon n="activity" /> Explainer video · coming soon
                        </span>
                      </div>
                    </div>
                    <figure className="gd-row__photo">
                      <Image
                        src={p.photo}
                        alt={p.photoAlt}
                        fill
                        sizes="(max-width: 980px) 100vw, 46vw"
                        style={{ objectFit: "cover", objectPosition: p.position }}
                      />
                      <figcaption>
                        <Icon n={p.icon} />
                        {p.name}
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="gd-more gd-rv">
          <Icon n="plus" /> More Mentis products will be added here as we build them.
        </p>
      </div>
    </section>
  );
}
