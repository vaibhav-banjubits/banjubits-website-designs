"use client";

import Image from "next/image";
import { useState } from "react";
import { cases } from "./data";
import { Icon } from "./Icon";

export function Cases() {
  const [i, setI] = useState(0);
  const c = cases[i];
  const go = (n: number) => setI((n + cases.length) % cases.length);

  return (
    <section className="rt-sec rt-night" id="work" aria-labelledby="rt-work-title">
      <div className="rt-wrap">
        <div className="rt-center rt-rv">
          <p className="rt-kicker rt-kicker--night">
            <i />
            Selected work
          </p>
          <h2 id="rt-work-title" className="rt-h2">
            Different journeys. <em>Measurable results</em>
          </h2>
          <p className="rt-lede">
            Client work is anonymised to sector. Meridian is our own open-source platform.
          </p>
        </div>

        <div className="rt-tabs rt-rv" role="tablist" aria-label="Case studies">
          {cases.map((t, n) => (
            <button
              key={t.tab}
              type="button"
              role="tab"
              id={`rt-tab-${n}`}
              aria-selected={n === i}
              aria-controls="rt-case"
              tabIndex={n === i ? 0 : -1}
              onClick={() => setI(n)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") go(i + 1);
                if (e.key === "ArrowLeft") go(i - 1);
              }}
            >
              <span>0{n + 1}</span>
              {t.tab}
            </button>
          ))}
        </div>

        <article
          key={i}
          id="rt-case"
          className="rt-case"
          role="tabpanel"
          aria-labelledby={`rt-tab-${i}`}
        >
          <div className="rt-case__media">
            <Image
              src={c.photo}
              alt={c.alt}
              fill
              sizes="(max-width: 900px) 100vw, 640px"
              placeholder="blur"
              style={{ objectPosition: c.position }}
            />
            <span className="rt-chip">{c.service}</span>
          </div>
          <div className="rt-case__body">
            <p className="rt-case__sector">{c.sector}</p>
            <h3 className="rt-h3 rt-h3--lg">{c.title}</h3>
            <p className="rt-case__sum">{c.summary}</p>
            <div className="rt-case__metric">
              <p className={c.metric.text && c.metric.text.length > 5 ? "rt-big rt-big--word" : "rt-big"}>
                {c.metric.text ?? (
                  <>
                    {c.metric.lead}
                    {c.metric.count}
                    {c.metric.tail}
                  </>
                )}
              </p>
              <p>{c.metric.label}</p>
            </div>
            <ul className="rt-tags">
              {c.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </article>

        <div className="rt-case__nav">
          <button type="button" className="rt-round" onClick={() => go(i - 1)} aria-label="Previous case">
            <Icon n="chev-l" />
          </button>
          <p aria-live="polite">
            <b>0{i + 1}</b> / 0{cases.length}
          </p>
          <button type="button" className="rt-round" onClick={() => go(i + 1)} aria-label="Next case">
            <Icon n="chev-r" />
          </button>
        </div>
      </div>
    </section>
  );
}
