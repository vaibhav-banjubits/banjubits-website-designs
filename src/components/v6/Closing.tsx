import Image from "next/image";
import { email, footerNav, linkedin } from "@/lib/content";
import { Icon } from "./Icon";
import { img } from "./images";
import { Logo } from "./Logo";
import { Year } from "./Year";

export function Closing() {
  return (
    <section className="gl-closing" id="contact" aria-labelledby="gl-close-title">
      <div className="gl-wrap">
        <div className="gl-close gl-grain gl-rv">
          <div className="gl-close__bg" aria-hidden="true">
            <Image src={img.archWalker} alt="" fill sizes="1400px" placeholder="blur" />
          </div>
          <div className="gl-close__ring" aria-hidden="true" />
          <div className="gl-close__in">
            <p className="gl-eyebrow gl-eyebrow--night">Start a project</p>
            <h2 id="gl-close-title" className="gl-close__title">
              Have a system that needs to <em>work in production</em>?
            </h2>
            <p className="gl-close__lede">
              Tell us what you are trying to change. We will come back with how we would approach
              it, who would be involved and what the first weeks could look like.
            </p>
            <div className="gl-close__ctas">
              <a href={`mailto:${email}`} className="gl-btn gl-btn--gilt">
                Start a conversation
                <span className="gl-btn__ic">
                  <Icon n="arrow" />
                </span>
              </a>
              <a href={`mailto:${email}`} className="gl-close__mail">
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
    <footer className="gl-foot">
      <div className="gl-wrap">
        <div className="gl-foot__grid">
          <div className="gl-foot__brand">
            <a href="#top" aria-label="Banjubits, back to top">
              <Logo />
            </a>
            <p>
              An AI engineering and product studio. We design, build and govern AI systems, digital
              products and cloud platforms.
            </p>
            <a href={linkedin} className="gl-foot__in" target="_blank" rel="noreferrer">
              <Icon n="linkedin" />
              LinkedIn
            </a>
          </div>
          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title} className="gl-foot__col">
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
        <div className="gl-foot__base">
          <p>
            &copy; <Year /> Banjubits. All rights reserved.
          </p>
          <p>Engineered with care.</p>
        </div>
      </div>
      <div className="gl-foot__mark" aria-hidden="true">
        banjubits
      </div>
    </footer>
  );
}
