"use client";

import { Icon } from "./Icon";
import { email, linkedin, products } from "./data";
import { selectProduct } from "./select";
import { Year } from "./Year";

export function Footer() {
  return (
    <footer className="dh-foot">
      <div className="dh-wrap">
        <div className="dh-foot__cols">
          <div className="dh-foot__brand">
            <a href="#top" className="dh-logo" aria-label="Banjubits, back to top">
              <span className="dh-logo__word">Banjubits</span>
            <span className="dh-logo__bit" aria-hidden="true" />
            </a>
            <p>We build AI into real business work.</p>
          </div>
          <div>
            <h5>Mentis products</h5>
            {products.map((p) => (
              <a
                key={p.id}
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  selectProduct(p.id);
                }}
              >
                {p.name}
              </a>
            ))}
          </div>
          <div>
            <h5>Get in touch</h5>
            <a href={`mailto:${email}`}>
              <Icon n="mail" /> {email}
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="dh-foot__mark" aria-hidden="true">
          Banjubits
        </div>

        <div className="dh-foot__base">
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
