"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { products, STAGES, type ProductId } from "./data";
import { Icon } from "./Icon";

function pickTopic(id: ProductId) {
  window.dispatchEvent(new CustomEvent("ld:topic", { detail: id }));
}

/**
 * "What do you need AI to do?" — the product line-up, entered through the buyer's own words.
 * One job on the left, the Mentis product that does it on the right, with honest status.
 */
export function Finder() {
  const [i, setI] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const p = products[i];

  const go = (n: number, focus = false) => {
    const next = (n + products.length) % products.length;
    setI(next);
    if (focus) tabs.current[next]?.focus();
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      go(i + 1, true);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      go(i - 1, true);
    } else if (e.key === "Home") {
      e.preventDefault();
      go(0, true);
    } else if (e.key === "End") {
      e.preventDefault();
      go(products.length - 1, true);
    }
  };

  return (
    <section className="ld-sec ld-finder" id="products" aria-labelledby="ld-finder-h">
      <div className="ld-wrap">
        <div className="ld-head ld-rv">
          <p className="ld-label">What we do</p>
          <h2 className="ld-h2" id="ld-finder-h">
            Start with the job you need <em>done</em>.
          </h2>
          <p className="ld-sub">
            Six things leadership teams ask us for. Each has a Mentis accelerator behind it, so you start from
            proven building blocks, not a blank page.
          </p>
        </div>

        <div className="ld-finder__grid ld-rv">
          <div className="ld-jobs" role="tablist" aria-label="What do you need AI to do?" aria-orientation="vertical" onKeyDown={onKey}>
            {products.map((x, n) => (
              <button
                key={x.id}
                ref={(el) => {
                  tabs.current[n] = el;
                }}
                role="tab"
                id={`ld-tab-${x.id}`}
                aria-selected={n === i}
                aria-controls="ld-panel"
                tabIndex={n === i ? 0 : -1}
                className={`ld-job${n === i ? " ld-is-on" : ""}`}
                onClick={() => setI(n)}
              >
                <span className="ld-job__n">{String(n + 1).padStart(2, "0")}</span>
                <span className="ld-job__t">
                  <b>{x.job}</b>
                  <small>
                    <span className={`ld-dot ld-dot--${x.stage}`} />
                    {x.name} · {STAGES[x.stage].short}
                  </small>
                </span>
                <Icon n="arrow-right" className="ld-job__go" />
              </button>
            ))}
          </div>

          <article
            className="ld-panel"
            id="ld-panel"
            role="tabpanel"
            aria-labelledby={`ld-tab-${p.id}`}
            aria-live="polite"
            tabIndex={0}
            key={p.id}
          >
            <div className="ld-panel__photo">
              <Image
                src={p.photo}
                alt={p.photoAlt}
                fill
                sizes="(max-width: 980px) 100vw, 58vw"
                style={{ objectFit: "cover", objectPosition: p.position }}
              />
              <span className={`ld-chip ld-chip--${p.stage}`}>
                <span className={`ld-dot ld-dot--${p.stage}`} />
                {STAGES[p.stage].label}
              </span>
              <div className="ld-panel__name">
                <span className="ld-panel__ic">
                  <Icon n={p.icon} />
                </span>
                <div>
                  <small>{p.capability}</small>
                  <b>{p.name}</b>
                </div>
              </div>
            </div>

            <div className="ld-panel__body">
              <h3>{p.headline}</h3>
              <p className="ld-panel__sum">{p.summary}</p>

              <ul className="ld-panel__changes">
                {p.changes.map((c) => (
                  <li key={c}>
                    <Icon n="check" />
                    {c}
                  </li>
                ))}
              </ul>

              <div className="ld-panel__proof">
                <strong>{p.proof.value}</strong>
                <div>
                  <b>{p.proof.label}</b>
                  <p>{p.proof.text}</p>
                </div>
              </div>

              <p className={`ld-panel__note ld-panel__note--${p.stage}`}>
                <span className={`ld-dot ld-dot--${p.stage}`} />
                {p.stageNote}
              </p>

              <div className="ld-panel__foot">
                <a href="#start" className="ld-btn ld-btn--sm" onClick={() => pickTopic(p.id)}>
                  <span>Talk to us about {p.name.replace("Mentis ", "")}</span>
                  <Icon n="arrow-right" />
                </a>
                <span className="ld-soon" title="Explainer video in production">
                  <Icon n="activity" /> Explainer video · coming soon
                </span>
              </div>
            </div>
          </article>
        </div>

        <p className="ld-finder__more ld-rv">
          <Icon n="plus" /> More Mentis products will be added here as we build them.
        </p>
      </div>
    </section>
  );
}
