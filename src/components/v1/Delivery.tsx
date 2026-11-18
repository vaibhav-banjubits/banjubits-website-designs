"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { doneItems, models, steps } from "./data";
import { Icon } from "./Icon";
import { img } from "./images";

// How many Definition-of-Done items are ticked once each step is reached.
const TICKS = [1, 2, 4, 5];

/** The delivery steps scroll past while a sticky Definition of Done ticks itself off. */
export function Delivery() {
  const [step, setStep] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) setStep(Number((e.target as HTMLElement).dataset.step));
      },
      { rootMargin: "-42% 0px -48% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const ticked = TICKS[step];
  const pct = Math.round((ticked / doneItems.length) * 100);

  return (
    <section id="delivery" className="hb-sec">
      <div className="hb-wrap">
        <div className="hb-head hb-rv">
          <div>
            <p className="hb-kicker">
              <i /> How we deliver
            </p>
            <h2 className="hb-h2">
              Four steps. <em>A person approves every gate.</em>
            </h2>
          </div>
          <p className="hb-head__side">
            Plan, code-review and deploy gates are part of delivery from day one, not bolted on after
            the system exists.
          </p>
        </div>

        <div className="hb-photo hb-rv">
          <Image
            src={img.session}
            alt="Three colleagues at a glass wall mapping a delivery process, from discover to operate, on sticky notes"
            fill
            sizes="(min-width: 1280px) 1240px, 100vw"
            style={{ objectPosition: "50% 45%" }}
          />
          <span className="hb-photo__shade" aria-hidden="true" />
          <span className="hb-photo__cap">A working session, not a slide deck</span>
        </div>

        <div className="hb-deliv">
          <aside className="hb-dod" aria-label="Definition of Done">
            <div className="hb-dod__card">
              <div className="hb-dod__head">
                <b>Definition of Done</b>
                <span>{pct}%</span>
              </div>
              <div className="hb-dod__track" aria-hidden="true">
                <i style={{ width: `${pct}%` }} />
              </div>
              <ul>
                {doneItems.map((it, i) => (
                  <li key={it.label} data-on={i < ticked || undefined}>
                    <i>
                      <Icon n="check" />
                    </i>
                    <span>{it.label}</span>
                    {it.gate && <em>{it.gate}</em>}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <ol className="hb-steps">
            {steps.map((s, i) => (
              <li
                key={s.no}
                className="hb-step"
                data-step={i}
                data-on={i === step || undefined}
                ref={(el) => {
                  refs.current[i] = el;
                }}
              >
                <span className="hb-step__no">{s.no}</span>
                <div>
                  <h3 className="hb-h3">{s.title}</h3>
                  <p>{s.text}</p>
                  {s.gate && <span className="hb-step__gate">{s.gate}</span>}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <ul className="hb-models">
          {models.map((m, i) => (
            <li key={m.name} className="hb-rv" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
              <span className="hb-models__no">0{i + 1}</span>
              <h3>{m.name}</h3>
              <p>{m.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
