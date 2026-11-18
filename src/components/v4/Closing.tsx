import Image from "next/image";
import { email, footerNav, linkedin } from "@/lib/content";
import { Icon } from "./Icon";
import { img } from "./images";
import { Badge, Logo } from "./Logo";
import { Year } from "./Year";

export function Closing() {
  return (
    <section className="sg-cta" id="contact" aria-labelledby="sg-cta-title">
      <div className="sg-cta__bg" aria-hidden="true" data-parallax="0.08">
        <Image src={img.blindsLight} alt="" fill sizes="100vw" />
      </div>
      <div className="sg-wrap sg-cta__inner">
        <p className="sg-cta__kicker sg-rv">(10) Begin</p>
        <h2 id="sg-cta-title" className="sg-cta__title sg-rv">
          Every system begins with <em>a single decision.</em>
        </h2>
        <div className="sg-cta__row sg-rv">
          <p>
            Tell us the outcome you need. We will come back with an honest view of the route, the
            risks and the team to get there.
          </p>
          <div className="sg-cta__actions">
            <a href={`mailto:${email}`} className="sg-cta__mail">
              {email}
            </a>
            <a href={`mailto:${email}`} className="sg-btn sg-btn--light">
              Start a project <Icon n="arrow" />
            </a>
          </div>
          <Badge href={`mailto:${email}`} label="Start a project" />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="sg-foot">
      <div className="sg-wrap">
        <div className="sg-foot__top">
          <div className="sg-foot__brand">
            <Logo />
            <p>
              An AI engineering and product studio. We design, build and ship AI systems, digital
              products and cloud platforms.
            </p>
          </div>
          {footerNav.map((col) => (
            <nav key={col.title} className="sg-foot__col" aria-label={col.title}>
              <p>{col.title}</p>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="sg-foot__col">
            <p>Contact</p>
            <ul>
              <li>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
              <li>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="sg-foot__word" aria-hidden="true">
          Banjubits
        </p>
        <div className="sg-foot__bottom">
          <span>
            © <Year /> Banjubits. All rights reserved.
          </span>
          <span>AI engineering &amp; product studio</span>
          <a href="#top" className="sg-foot__up">
            Back to top
            <svg viewBox="0 0 24 24" aria-hidden="true" className="sg-ic">
              <path d="M12 19V5M6 11l6-6 6 6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
