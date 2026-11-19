"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { email, linkedin, products, type ProductId } from "./data";
import { Icon } from "./Icon";
import { img } from "./images";
import { selectProduct } from "./select";
import { Year } from "./Year";

export function Footer() {
  const [sent, setSent] = useState(false);

  // No back end yet: this opens the visitor's email app with the message filled in.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Email: ${f.get("email")}\n\nThe business problem:\n${f.get("problem")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent("90-minute working session")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const open = (id: ProductId) => selectProduct(id);

  return (
    <footer className="mn-foot" id="contact">
      <Image
        src={img["earth-night"]}
        alt=""
        fill
        sizes="100vw"
        className="mn-foot__img"
      />
      <div className="mn-foot__bg" aria-hidden="true" />
      <div className="mn-wrap">
        <div className="mn-cta">
          <div>
            <p className="mn-eyebrow mn-eyebrow--mint">
              <i className="mn-dot" />
              Book a working session
            </p>
            <h2 className="mn-display mn-display--light">
              Bring one problem. <em>Leave with a plan.</em>
            </h2>
            <p className="mn-lede mn-lede--dark">
              Ninety minutes on the AI options, the risks and the shape of a
              first pilot.
            </p>
            <a href={`mailto:${email}`} className="mn-cta__mail">
              <Icon n="mail" />
              {email}
            </a>
          </div>

          <form className="mn-form" onSubmit={onSubmit}>
            <label>
              <span>Work email</span>
              <span className="mn-field">
                <Icon n="mail" />
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@company.com"
                />
              </span>
            </label>
            <label>
              <span>Your business problem</span>
              <span className="mn-field mn-field--area">
                <Icon n="message-square" />
                <textarea
                  name="problem"
                  rows={3}
                  required
                  placeholder="What would you like AI to do for your business?"
                />
              </span>
            </label>
            <button type="submit" className="mn-btn mn-btn--lg">
              <span>Send</span>
              <span className="mn-btn__chip">
                <Icon n="arrow-right" />
              </span>
            </button>
            <p className="mn-form__note" role="status">
              <Icon n="lock" />
              {sent
                ? "Your email app should open, ready to send."
                : "Opens your email app, ready to send."}
            </p>
          </form>
        </div>

        <div className="mn-foot__cols">
          <div>
            <h5>Products</h5>
            {products.map((p) => (
              <a key={p.id} href="#products" onClick={() => open(p.id)}>
                {p.name}
              </a>
            ))}
          </div>
          <div>
            <h5>Banjubits</h5>
            <a href="#questions">Questions</a>
            <a href="#work">Proof</a>
            <a href="#approach">How we engage</a>
            <a href="#why">Why us</a>
          </div>
          <div className="mn-foot__contact">
            <h5>Get in touch</h5>
            <dl>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${email}`}>{email}</a>
              </dd>
              <dt>Social</dt>
              <dd>
                <a
                  className="mn-soc"
                  href={linkedin}
                  aria-label="Banjubits on LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.82-2.05 3.75-2.05 4 0 4.74 2.64 4.74 6.07v5.88h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4V9.75Z" />
                  </svg>
                </a>
              </dd>
            </dl>
          </div>
        </div>

        <div className="mn-foot__mark" aria-hidden="true">
          Banjubits
        </div>

        <div className="mn-foot__base">
          <p>
            © <Year /> Banjubits. All rights reserved.
          </p>
          <p>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
