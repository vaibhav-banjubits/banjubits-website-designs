"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PROMISES } from "./data";
import { Icon } from "./Icon";
import { img } from "./images";

const STEPS = 8; // 0..6 build the answer, 7 holds, then it replays

/** A small, looping picture of the three promises at work. Illustrative, labelled as such. */
function AnswerCard() {
  const [step, setStep] = useState(6);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = window.setTimeout(() => setStep(0), 0);
    const id = window.setInterval(() => setStep((s) => (s + 1) % (STEPS + 2)), 1250);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(id);
    };
  }, []);

  const s = step > STEPS ? 0 : step;
  const on = (n: number) => (s >= n ? " ld-on" : "");

  return (
    <div className="ld-ask" role="img" aria-label="Illustration: a question is answered with its sources, then waits for a named person to approve it.">
      <div className="ld-ask__bar">
        <span className="ld-ask__dot" />
        <b>Mentis Atlas</b>
        <span className="ld-ask__tag">Illustration</span>
      </div>

      <p className={`ld-ask__q ld-step${on(0)}`}>Which customer programs are still waiting on qualification?</p>

      <div className={`ld-ask__src ld-step${on(1)}`}>
        <span>Reading</span>
        {["Program docs", "Email", "Tickets", "PLM"].map((t, i) => (
          <i key={t} style={{ transitionDelay: `${i * 90}ms` }}>
            {t}
          </i>
        ))}
      </div>

      <div className={`ld-ask__a ld-step${on(2)}`}>
        <p>
          Three programs are waiting: <b>Aurora</b>, <b>Kestrel</b> and <b>Meridian</b>. Aurora is blocked on a
          reliability report.
        </p>
        <div className={`ld-ask__cite ld-step${on(3)}`}>
          <span>
            <Icon n="file-search" /> Program doc §4
          </span>
          <span>
            <Icon n="mail" /> Email, 12 Nov
          </span>
          <span>
            <Icon n="layers" /> Ticket 4821
          </span>
        </div>
      </div>

      <div className={`ld-ask__ok ld-step${on(4)}${s >= 6 ? " ld-done" : ""}`}>
        <div>
          <small>Draft update to customer</small>
          <b>{s >= 6 ? "Approved by R. Shah · logged" : "Needs approval from R. Shah"}</b>
        </div>
        <span className="ld-ask__btn">
          {s >= 6 ? <Icon n="check" /> : "Approve"}
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="ld-hero" id="top">
      <div className="ld-wrap ld-hero__grid">
        <div className="ld-hero__copy">
          <p className="ld-kicker">
            <span className="ld-kicker__dot" /> AI engineering company
          </p>
          <h1 className="ld-h1">
            We build AI into <em>real business work</em>, in a way leadership can trust.
          </h1>
          <p className="ld-lead">
            Banjubits designs, builds and runs production AI inside your business. Our Mentis accelerators get you
            to a working pilot in weeks, not months.
          </p>
          <div className="ld-hero__cta">
            <a href="#products" className="ld-btn ld-btn--lg">
              <span>See what we build</span>
              <Icon n="arrow-right" />
            </a>
            <a href="#start" className="ld-btn ld-btn--ghost ld-btn--lg">
              <span>Book a working session</span>
            </a>
          </div>
        </div>

        <div className="ld-hero__stage" aria-hidden={false}>
          <div className="ld-hero__photo">
            <Image
              src={img.facade}
              alt=""
              fill
              priority
              sizes="(max-width: 980px) 100vw, 46vw"
              style={{ objectFit: "cover", objectPosition: "58% 50%" }}
            />
          </div>
          <AnswerCard />
          <div className="ld-hero__chip">
            <Icon n="clock" />
            <span>
              Weeks, not months
              <small>to a working pilot</small>
            </span>
          </div>
        </div>
      </div>

      <div className="ld-wrap">
        <ul className="ld-promises">
          {PROMISES.map((p) => (
            <li key={p.title}>
              <span className="ld-promises__ic">
                <Icon n={p.icon} />
              </span>
              <div>
                <h2>{p.title}</h2>
                <p>{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
