"use client";

import { useState } from "react";
import { useBlueprint } from "./Blueprint";
import { email, footerNav, industries, linkedin } from "./data";
import { Icon, industryIcon } from "./Icon";
import { Logo } from "./Logo";

export function Start() {
  const { industry, setIndustry } = useBlueprint();
  const [sent, setSent] = useState(false);
  const cur = industries.find((i) => i.id === industry) ?? industries[0];

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
                Tell us the outcome. <em>We will map the route.</em>
              </h2>
              <p className="hb-lede">
                One short form. Your industry and the problem go in; a draft blueprint and a named
                person come back.
              </p>
              <ul className="hb-ticks">
                <li>
                  <Icon n="check" />
                  Four fields, no procurement paperwork
                </li>
                <li>
                  <Icon n="check" />
                  Draft architecture, workstreams and risks first
                </li>
                <li>
                  <Icon n="check" />
                  Prefer email? <a href={`mailto:${email}`}>{email}</a>
                </li>
              </ul>
            </div>

            {sent ? (
              <div className="hb-form hb-form--done hb-rv" role="status">
                <span className="hb-form__ok">
                  <Icon n="check" />
                </span>
                <h3 className="hb-h3">Thanks, that is the form working.</h3>
                <p>
                  This is a design concept, so nothing was sent. On the live site this would save a
                  lead with your industry ({cur.label}) and source page, then confirm by email.
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
                <fieldset className="hb-form__fs">
                  <legend className="hb-form__l">Your industry</legend>
                  <div className="hb-chips hb-chips--sm">
                    {industries.map((i) => (
                      <button
                        key={i.id}
                        type="button"
                        className="hb-chip"
                        aria-pressed={i.id === industry}
                        onClick={() => setIndustry(i.id)}
                      >
                        <Icon n={industryIcon[i.id]} />
                        {i.label}
                      </button>
                    ))}
                  </div>
                </fieldset>
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
                  <span>What do you want to change?</span>
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
              An AI engineering and product studio. We design, build and govern production AI
              systems and platforms.
            </p>
            <p className="hb-foot__social">
              <a href={`mailto:${email}`} aria-label="Email Banjubits">
                <Icon n="mail" />
              </a>
              <a href={linkedin} aria-label="Banjubits on LinkedIn" target="_blank" rel="noreferrer">
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
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="hb-foot__base">
          <span>© 2026 Banjubits. Client work is anonymised to sector.</span>
          <span>Govern · Ground · Humans decide</span>
        </div>
      </div>
      <div className="hb-foot__mark" aria-hidden="true">
        banjubits
      </div>
    </footer>
  );
}
