import { email, footerNav, linkedin } from "@/lib/content";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { Year } from "./Year";

export function Closing() {
  return (
    <section className="rt-sec rt-closing" id="contact" aria-labelledby="rt-close-title">
      <div className="rt-wrap">
        <div className="rt-close rt-rv">
          <svg className="rt-close__mark" viewBox="-100 -100 200 200" aria-hidden="true">
            <circle r="92" />
            <circle r="60" />
            <path d="M0 -92 V92 M-92 0 H92" />
            <path d="M0 -70 L10 0 L0 70 L-10 0Z" />
          </svg>
          <div className="rt-close__in">
            <p className="rt-kicker rt-kicker--ink">
              <i />
              Start a project
            </p>
            <h2 id="rt-close-title" className="rt-h2">
              Every destination begins with <em>a single decision</em>
            </h2>
            <p className="rt-lede">
              Tell us what you are trying to change. We will come back with how we would approach
              it, who would be involved and what the first weeks could look like.
            </p>
            <div className="rt-ctas">
              <a href={`mailto:${email}`} className="rt-btn rt-btn--ink">
                Start a conversation
                <span className="rt-btn__ic">
                  <Icon n="arrow" />
                </span>
              </a>
              <a href={`mailto:${email}`} className="rt-close__mail">
                <Icon n="mail" />
                {email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="rt-foot">
      <div className="rt-wrap">
        <div className="rt-foot__grid">
          <div className="rt-foot__brand">
            <Logo light />
            <p>
              An AI engineering and product studio. We design, build and govern AI systems, digital
              products and cloud platforms.
            </p>
            <a href={linkedin} className="rt-foot__in" target="_blank" rel="noreferrer">
              <Icon n="linkedin" />
              LinkedIn
            </a>
          </div>
          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title} className="rt-foot__col">
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="rt-foot__base">
          <p>
            &copy; <Year /> Banjubits. All rights reserved.
          </p>
          <p>Engineered with care.</p>
        </div>
      </div>
      <div className="rt-foot__word" aria-hidden="true">
        banjubits
      </div>
    </footer>
  );
}
