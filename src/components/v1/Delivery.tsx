"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { doneItems, steps } from "./data";
import { Icon } from "./Icon";
import { img } from "./images";

// How many "what you have so far" items are ticked once each step is reached.
const TICKS = [2, 3, 5, 6];

/** How we engage: four steps scroll past while a sticky card tallies what you have at each stage. */
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
    <section id="engage" className="hb-sec">
      <div className="hb-wrap">
        <div className="hb-head hb-rv">
          <div>
            <p className="hb-kicker">
              <i /> How we engage
            </p>
            <h2 className="hb-h2">
              Start small, prove value, <em>then scale.</em>
            </h2>
          </div>
          <p className="hb-head__side">
            Fixed-scope starting points. Working software every week, not slide decks. The people who scope the work are
            the people who build it.
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
          <aside className="hb-dod" aria-label="What you have so far">
            <div className="hb-dod__card">
              <div className="hb-dod__head">
                <b>What you have so far</b>
                <span>{pct}%</span>
              </div>
              <div className="hb-dod__track" aria-hidden="true">
                <i style={{ width: `${pct}%` }} />
              </div>
              <ul>
                {doneItems.map((label, i) => (
                  <li key={label} data-on={i < ticked || undefined}>
                    <i>
                      <Icon n="check" />
                    </i>
                    <span>{label}</span>
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
                  <span className="hb-step__time">{s.time}</span>
                  <p>{s.text}</p>
                  <span className="hb-step__gate">You get: {s.get}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
