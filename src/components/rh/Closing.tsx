import { email, footerNav, linkedin } from "@/lib/content";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { Year } from "./Year";

export function Closing() {
  return (
    <section className="rh-sec rh-closing" id="contact" aria-labelledby="rh-close-title">
      <div className="rh-wrap">
        <div className="rh-close rh-rv">
          <svg className="rh-close__mark" viewBox="-100 -100 200 200" aria-hidden="true">
            <circle r="92" />
            <circle r="60" />
            <path d="M0 -92 V92 M-92 0 H92" />
            <path d="M0 -70 L10 0 L0 70 L-10 0Z" />
          </svg>
          <div className="rh-close__in">
            <p className="rh-kicker rh-kicker--ink">
              <i />
              Start a project
            </p>
            <h2 id="rh-close-title" className="rh-h2">
              Every destination begins with <em>a single decision</em>
            </h2>
            <p className="rh-lede">
              Tell us what you are trying to change. We will come back with how we would approach
              it, who would be involved and what the first weeks could look like.
            </p>
            <div className="rh-ctas">
              <a href={`mailto:${email}`} className="rh-btn rh-btn--ink">
                Start a conversation
                <span className="rh-btn__ic">
                  <Icon n="arrow" />
                </span>
              </a>
              <a href={`mailto:${email}`} className="rh-close__mail">
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
    <footer className="rh-foot">
      <div className="rh-wrap">
        <div className="rh-foot__grid">
          <div className="rh-foot__brand">
            <Logo light />
            <p>
              An AI engineering and product studio. We design, build and govern AI systems, digital
              products and cloud platforms.
            </p>
            <a href={linkedin} className="rh-foot__in" target="_blank" rel="noreferrer">
              <Icon n="linkedin" />
              LinkedIn
            </a>
          </div>
          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title} className="rh-foot__col">
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
        <div className="rh-foot__base">
          <p>
            &copy; <Year /> Banjubits. All rights reserved.
          </p>
          <p>Engineered with care.</p>
        </div>
      </div>
      <div className="rh-foot__word" aria-hidden="true">
        banjubits
      </div>
    </footer>
  );
}
