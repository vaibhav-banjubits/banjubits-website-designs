"use client";

import Image from "next/image";
import { useState } from "react";
import { alsoSectors, sectorPanels } from "./data";
import { Icon } from "./Icon";

/** Sector gallery: one panel is open at a time; hover, focus or tap another to open it. */
export function Sectors() {
  const [on, setOn] = useState(0);

  return (
    <section className="gl-sec gl-sec--stone gl-sectors" id="sectors" aria-labelledby="gl-sectors-title">
      <div className="gl-wrap">
        <header className="gl-head gl-head--split">
          <div>
            <p className="gl-eyebrow gl-rv">Sectors</p>
            <h2 id="gl-sectors-title" className="gl-h2 gl-rv" style={{ ["--d" as string]: ".06s" }}>
              Deep sector context, <em>not</em> generic playbooks.
            </h2>
          </div>
          <div className="gl-head__aside gl-rv" style={{ ["--d" as string]: ".12s" }}>
            <p>
              Regulated, high-stakes and high-volume environments are where governed AI earns its
              keep. These are the places we spend most of our time.
            </p>
          </div>
        </header>

        <div className="gl-pans gl-rv" style={{ ["--d" as string]: ".1s" }}>
          {sectorPanels.map((p, i) => (
            <article
              key={p.name}
              className="gl-pan"
              data-on={on === i || undefined}
              onMouseEnter={() => setOn(i)}
            >
              <Image
                src={p.photo}
                alt={p.alt}
                fill
                sizes="(max-width: 900px) 100vw, 760px"
                placeholder="blur"
                style={{ objectPosition: p.position }}
              />
              <div className="gl-pan__veil" aria-hidden="true" />
              <button
                type="button"
                className="gl-pan__btn"
                aria-expanded={on === i}
                onFocus={() => setOn(i)}
                onClick={() => setOn(i)}
              >
                <span className="gl-sr">{p.name}</span>
              </button>
              <span className="gl-pan__no" aria-hidden="true">
                0{i + 1}
              </span>
              <span className="gl-pan__rot" aria-hidden="true">
                {p.name}
              </span>
              <div className="gl-pan__body">
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <ul className="gl-tags gl-tags--night">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="gl-also gl-rv">
          <span className="gl-also__label">
            <Icon n="plus" /> Also working in
          </span>
          <ul>
            {alsoSectors.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
