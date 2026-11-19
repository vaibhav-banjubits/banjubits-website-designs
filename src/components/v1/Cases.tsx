"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cases } from "./data";
import { Icon } from "./Icon";

/**
 * An interactive showcase: six engagements as a list, one open at a time, with a large photo and the
 * result alongside. It advances on its own (paused while hovered or focused) and respects
 * prefers-reduced-motion by not advancing at all. Each carries an honest status.
 */
export function Cases() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const cur = cases[active];

  return (
    <section id="work" className="hb-sec">
      <div className="hb-wrap">
        <div className="hb-head hb-rv">
          <div>
            <p className="hb-kicker">
              <i /> Case studies
            </p>
            <h2 className="hb-h2">
              Every story starts with <em>the result.</em>
            </h2>
          </div>
          <p className="hb-head__side">
            Clients are anonymised. Each case is labelled: delivered, in delivery, a live demo, or still a proposal.
          </p>
        </div>

        <div
          className="hb-show hb-rv"
          data-paused={paused || undefined}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="hb-show__panel" aria-live="polite">
            {cases.map((c, i) => (
              <div key={c.id} className="hb-show__slide" data-on={i === active || undefined}>
                <Image
                  src={c.photo}
                  alt={i === active ? c.alt : ""}
                  aria-hidden={i === active ? undefined : true}
                  fill
                  sizes="(min-width: 1020px) 52vw, 100vw"
                  style={{ objectPosition: c.position }}
                />
              </div>
            ))}
            <span className="hb-show__shade" aria-hidden="true" />
            <span className="hb-show__tag">{cur.sector}</span>
            <div key={cur.id} className="hb-show__metric">
              <strong data-long={cur.metric.length > 7 || undefined}>{cur.metric}</strong>
              <span>{cur.metricLabel}</span>
            </div>
          </div>

          <ol className="hb-show__list">
            {cases.map((c, i) => {
              const on = i === active;
              return (
                <li key={c.id} className="hb-row" data-on={on || undefined}>
                  <button
                    type="button"
                    className="hb-row__btn"
                    aria-expanded={on}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                  >
                    <span className="hb-row__no">0{i + 1}</span>
                    <span className="hb-row__t">
                      <small>
                        {c.service} · {c.status}
                      </small>
                      {c.title}
                    </span>
                  </button>
                  <div className="hb-row__more">
                    <div>
                      <p>{c.summary}</p>
                      <ul className="hb-tags">
                        {c.tags.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                      {c.product ? (
                        <Link href={`/v4/mentis/${c.product}`} className="hb-link">
                          See the product <Icon n="arrow" />
                        </Link>
                      ) : (
                        <Link href="/v4#start" className="hb-link">
                          Start a similar project <Icon n="arrow" />
                        </Link>
                      )}
                    </div>
                  </div>
                  {on && (
                    <i
                      className="hb-row__bar"
                      aria-hidden="true"
                      onAnimationEnd={() => setActive((a) => (a + 1) % cases.length)}
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
