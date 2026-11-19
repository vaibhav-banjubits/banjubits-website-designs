"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Icon } from "./Icon";
import { img } from "./images";
import { email } from "./data";

export function Start() {
  const [sent, setSent] = useState(false);

  // No back end yet: this opens the visitor's email app with the message filled in.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\n\nThe business problem:\n${f.get("problem")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent("90-minute working session")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="dh-sec dh-sec--dark dh-start" id="start">
      <Image src={img["earth-night"]} alt="" fill sizes="100vw" className="dh-start__img" />
      <div className="dh-start__bg" aria-hidden="true" />
      <div className="dh-wrap dh-start__grid">
        <div>
          <h2 className="dh-h2 dh-rv">
            Bring one problem. <span>Leave with a plan.</span>
          </h2>
          <p className="dh-sub dh-rv">A 90-minute working session: the AI options, the risks and the shape of a first pilot.</p>
          <a className="dh-start__mail dh-rv" href={`mailto:${email}`}>
            <Icon n="mail" /> {email}
          </a>
        </div>

        <form className="dh-form dh-rv" onSubmit={onSubmit}>
          <div className="dh-form__head">
            <b>Book a working session</b>
            <span>90 minutes</span>
          </div>
          <label>
            <span>Work email</span>
            <span className="dh-field">
              <Icon n="mail" />
              <input name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
            </span>
          </label>
          <label>
            <span>Your business problem</span>
            <span className="dh-field dh-field--area">
              <Icon n="message-square" />
              <textarea name="problem" rows={3} required placeholder="What would you like AI to do for your business?" />
            </span>
          </label>
          <button type="submit" className="dh-btn dh-btn--lg">
            <span>Send</span>
            <span className="dh-btn__chip">
              <Icon n="arrow-right" />
            </span>
          </button>
          <p className="dh-form__note" role="status">
            <Icon n="lock" /> {sent ? "Your email app should open, ready to send." : "Opens your email app, ready to send."}
          </p>
        </form>
      </div>
    </section>
  );
}
