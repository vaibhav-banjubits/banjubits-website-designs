"use client";

import Link from "next/link";
import { useState } from "react";
import { email, footerNav, linkedin } from "./data";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Start() {
  const [sent, setSent] = useState(false);

  return (
    <section id="start" className="hb-sec hb-sec--tight">
      <div className="hb-slab hb-slab--grad">
        <div className="hb-glow hb-glow--a" aria-hidden="true" />
        <div className="hb-glow hb-glow--e" aria-hidden="true" />
        <div className="hb-wrap">
          <div className="hb-start">
            <div className="hb-start__copy hb-rv">
              <p className="hb-kicker hb-kicker--dark">
                <i /> Start a project
              </p>
              <h2 className="hb-h2">
                Bring one business problem. <em>Leave with a plan.</em>
              </h2>
              <p className="hb-lede">
                A 90-minute working session. You leave with the options, the risks and the shape of a first pilot.
              </p>
              <p className="hb-start__mail">
                Prefer email? <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>

            {sent ? (
              <div className="hb-form hb-form--done hb-rv" role="status">
                <span className="hb-form__ok">
                  <Icon n="check" />
                </span>
                <h3 className="hb-h3">Thanks, that is the form working.</h3>
                <p>
                  This is a design concept, so nothing was sent. On the live site this would save a lead with your
                  details and source page, then confirm by email.
                </p>
                <button type="button" className="hb-btn hb-btn--ghost" onClick={() => setSent(false)}>
                  <span>Back to the form</span>
                </button>
              </div>
            ) : (
              <form
                className="hb-form hb-rv"
                style={{ "--d": "100ms" } as React.CSSProperties}
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="hb-form__row">
                  <label className="hb-field">
                    <span>Your name</span>
                    <input name="name" type="text" autoComplete="name" required />
                  </label>
                  <label className="hb-field">
                    <span>Work email</span>
                    <input name="email" type="email" autoComplete="email" required />
                  </label>
                </div>
                <label className="hb-field">
                  <span>What is the business problem?</span>
                  <textarea
                    name="problem"
                    rows={4}
                    placeholder="The workflow, the outcome and any constraint we should know about"
                    required
                  />
                </label>
                <button type="submit" className="hb-btn hb-form__go" data-magnet>
                  <span>Start a project</span>
                  <span className="hb-btn__ic">
                    <Icon n="arrow" />
                  </span>
                </button>
                <p className="hb-form__note">Concept build: this form does not send anything yet.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="hb-foot">
      <div className="hb-wrap">
        <div className="hb-foot__top">
          <div className="hb-foot__brand">
            <Logo />
            <p>
              An AI engineering company. We design, build and run production AI for enterprises and institutions, with
              your people in charge.
            </p>
            <p className="hb-foot__social">
              <a href={`mailto:${email}`} aria-label="Email BanjuBits">
                <Icon n="mail" />
              </a>
              <a href={linkedin} aria-label="BanjuBits on LinkedIn" target="_blank" rel="noreferrer">
                <Icon n="linkedin" />
              </a>
            </p>
          </div>
          {footerNav.map((g) => (
            <nav key={g.title} aria-label={g.title}>
              <h3>{g.title}</h3>
              <ul>
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="hb-foot__base">
          <span>© 2026 BanjuBits. Client work is anonymised.</span>
        </div>
      </div>
      <div className="hb-foot__mark" aria-hidden="true">
        banjubits
      </div>
    </footer>
  );
}
