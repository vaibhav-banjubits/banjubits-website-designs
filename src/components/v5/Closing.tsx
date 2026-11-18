import Image from "next/image";
import { email, footerNav, linkedin } from "@/lib/content";
import { Year } from "./Year";
import { Icon } from "./Icon";
import { img } from "./images";
import { Logo } from "./Logo";

export function Closing() {
  return (
    <section className="lx-close" id="contact" aria-labelledby="lx-close-title">
      <div className="lx-wrap">
        <div className="lx-close__panel lx-mask">
          <Image src={img.heroTowers} alt="" fill sizes="(max-width: 1360px) 100vw, 1360px" placeholder="blur" className="lx-close__img" />
          <div className="lx-close__veil" aria-hidden="true" />
          <div className="lx-close__inner">
            <p className="lx-eyebrow lx-eyebrow--night">
              <span className="lx-eyebrow__rule" aria-hidden="true" />
              Start a project
            </p>
            <h2 id="lx-close-title" className="lx-close__title">
              Have a system that has to work <em>in production?</em>
            </h2>
            <p className="lx-close__lede">
              Tell us about the outcome you need. We will come back with how we would approach it,
              who would do the work and what a first phase could look like.
            </p>
            <div className="lx-close__ctas">
              <a href={`mailto:${email}`} className="lx-btn lx-btn--light">
                Book an introductory call <Icon n="arrow" />
              </a>
              <a href={`mailto:${email}`} className="lx-btn lx-btn--glass">
                <Icon n="mail" /> {email}
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
    <footer className="lx-foot">
      <div className="lx-wrap">
        <div className="lx-foot__top">
          <div className="lx-foot__brand">
            <Logo />
            <p>
              An AI engineering and product studio. We design, build and govern systems that hold
              up in production.
            </p>
            <a href={linkedin} className="lx-iconbtn" aria-label="Banjubits on LinkedIn" target="_blank" rel="noreferrer">
              <Icon n="linkedin" />
            </a>
          </div>
          {footerNav.map((col) => (
            <nav key={col.title} className="lx-foot__col" aria-label={col.title}>
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
        <div className="lx-foot__word" aria-hidden="true">
          banjubits
        </div>
        <div className="lx-foot__base">
          <span>
            © <Year /> Banjubits. All rights reserved.
          </span>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
    </footer>
  );
}
