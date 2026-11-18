import Image from "next/image";
import heroBand from "@/assets/img/band-operations.webp";
import heroPill from "@/assets/img/case-03-workforce.webp";
import approachImg from "@/assets/img/delivery-working-session.webp";
import {
  email,
  footerNav,
  insights,
  linkedin,
  models,
  principles,
  products,
  sectors,
  services,
  stats,
  work,
  type CaseStudy,
} from "@/lib/content";
import { ArrowButton, ArrowIcon, Label, Logo, TextLink } from "./bits";
import { CursorZone, ServiceList } from "./Interactive";

/* ================================================================ HERO */

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <h1 className="hero__title">
          <span className="ln">
            <span className="ln__in">
              We build AI
              <span className="hero__pill" aria-hidden="true">
                <Image
                  src={heroPill}
                  alt=""
                  fill
                  sizes="240px"
                  placeholder="blur"
                  priority
                />
              </span>
            </span>
          </span>
          <span className="ln">
            <span className="ln__in">that works in</span>
          </span>
          <span className="ln">
            <span className="ln__in">
              production<span className="hero__dot">.</span>
            </span>
          </span>
        </h1>

        <div className="hero__aside">
          <p>
            Banjubits is an AI engineering and product studio. We design, build
            and ship AI systems, digital products and cloud platforms for
            enterprises and growing companies.
          </p>
          <div className="hero__ctas">
            <ArrowButton href="#contact">Start a project</ArrowButton>
            <TextLink href="#work">See our work</TextLink>
          </div>
        </div>
      </div>

      <div className="wrap">
        <figure className="hero__media">
          <Image
            src={heroBand}
            alt="Engineers monitoring production systems on an operations floor at dusk"
            fill
            sizes="(min-width: 1440px) 1312px, 92vw"
            placeholder="blur"
            priority
          />
          <figcaption className="hero__caption">
            <span>One senior team, from first workshop to production handoff.</span>
            <span className="hero__caption-tags">
              AI systems <i>/</i> Digital products <i>/</i> Cloud engineering
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ============================================================= SECTORS */

export function Sectors() {
  const row = (hidden: boolean) => (
    <ul className="marquee__row" aria-hidden={hidden || undefined}>
      {sectors.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  );

  return (
    <section className="sectors" aria-label="Industries we work in">
      <div className="wrap sectors__in">
        <p className="sectors__label">
          Built for regulated,
          <br />
          operational work
        </p>
        <div className="marquee">
          <div className="marquee__track">
            {row(false)}
            {row(true)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================================== ABOUT */

export function About() {
  return (
    <section className="about" id="about">
      <div className="wrap grid12">
        <div className="about__label">
          <Label>About us</Label>
        </div>
        <div className="about__body">
          <p className="statement rv">
            We&apos;re a senior team of AI engineers, product designers and
            platform specialists.{" "}
            <span>
              We take AI from a promising demo to a system your operations
              depend on — governed, documented and handed over to the people
              who run it.
            </span>
          </p>

          <dl className="stats">
            {stats.map((s) => (
              <div key={s.value} className="stat rv">
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>

          <TextLink href="#approach">How we work</TextLink>
        </div>
      </div>
    </section>
  );
}

/* ================================================================ WORK */

function CaseCard({ c, order }: { c: CaseStudy; order: number }) {
  return (
    <a href="#contact" className="case rv" style={{ order }}>
      <div className={`case__media case__media--${c.shape}`} data-cursor>
        <Image
          src={c.image}
          alt={c.alt}
          fill
          sizes="(min-width: 960px) 46vw, 92vw"
          placeholder="blur"
        />
        <span className="case__go" aria-hidden="true">
          <ArrowIcon />
        </span>
      </div>
      <p className="case__meta">
        <span>{c.service}</span>
        <span>{c.sector}</span>
      </p>
      <h3 className="case__title">{c.title}</h3>
    </a>
  );
}

export function Work() {
  return (
    <section className="work" id="work">
      <div className="wrap">
        <header className="head">
          <h2 className="h2">
            Selected work<sup className="h2__count">({work.length})</sup>
          </h2>
          <div className="head__aside">
            <p>
              Production systems for enterprises, public institutions and
              growing companies. Clients are anonymised; the results are not.
            </p>
            <TextLink href="#contact">All case studies</TextLink>
          </div>
        </header>

        <CursorZone className="work__grid">
          <div className="work__col">
            <CaseCard c={work[0]} order={0} />
            <CaseCard c={work[2]} order={2} />
          </div>
          <div className="work__col">
            <CaseCard c={work[1]} order={1} />
            <CaseCard c={work[3]} order={3} />
          </div>
        </CursorZone>
      </div>
    </section>
  );
}

/* ============================================================ SERVICES */

export function Services() {
  return (
    <section className="services slab slab--ink" id="services">
      <div className="wrap">
        <header className="head head--dark">
          <div>
            <Label>What we do</Label>
            <h2 className="h2">
              Four disciplines.
              <br />
              One accountable team.
            </h2>
          </div>
          <div className="head__aside">
            <p>
              Most engagements start with one discipline and grow into
              another. Because the same team carries the work, nothing gets
              lost in a handoff.
            </p>
          </div>
        </header>

        <ServiceList services={services} />
      </div>
    </section>
  );
}

/* ============================================================ APPROACH */

export function Approach() {
  return (
    <section className="approach" id="approach">
      <div className="wrap grid12">
        <figure className="approach__media">
          <Image
            src={approachImg}
            alt="Banjubits engineers mapping a delivery plan from discovery to operation on a glass wall"
            fill
            sizes="(min-width: 960px) 46vw, 92vw"
            placeholder="blur"
          />
        </figure>

        <div className="approach__body">
          <Label>How we work</Label>
          <h2 className="h2 h2--sm">
            Outcome first.
            <br />
            Governed by design.
          </h2>
          <p className="lede">
            Every engagement starts with the workflow that needs to change, not
            the model. Security, review and handoff are part of the plan from
            the first week.
          </p>

          <ol className="steps">
            {principles.map((p, i) => (
              <li key={p.title} className="rv">
                <span className="steps__no">0{i + 1}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="models">
            <p className="models__h">Three ways to engage</p>
            <ul>
              {models.map((m) => (
                <li key={m.name}>
                  <h3>{m.name}</h3>
                  <p>{m.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ PRODUCTS */

export function Products() {
  return (
    <section className="products slab slab--saffron" id="products">
      <div className="wrap products__in">
        <div className="products__intro">
          <Label>Our products</Label>
          <h2 className="h2 h2--sm">
            Mentis. AI copilots we build and run ourselves.
          </h2>
          <p>
            The same patterns we ship for clients, packaged as products:
            grounded answers, human approval at every gate and an audit trail
            by default.
          </p>
        </div>

        <ul className="products__list">
          {products.map((p) => (
            <li key={p.name}>
              <a href="#contact" className="prod">
                <span className="prod__name">{p.name}</span>
                <span className="prod__text">{p.text}</span>
                <span className="prod__go" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================ INSIGHTS */

export function Insights() {
  return (
    <section className="insights" id="insights">
      <div className="wrap">
        <header className="head">
          <h2 className="h2">Insights</h2>
          <div className="head__aside">
            <p>
              Field notes from production work, written for the people who
              have to run the system afterwards.
            </p>
            <TextLink href="#insights">All articles</TextLink>
          </div>
        </header>

        <div className="posts">
          {insights.map((p) => (
            <a key={p.title} href="#insights" className="post rv">
              <div className="post__media">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 960px) 30vw, 92vw"
                  placeholder="blur"
                />
              </div>
              <p className="post__cat">{p.category}</p>
              <h3 className="post__title">{p.title}</h3>
              <p className="post__text">{p.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================================================== CONTACT + FOOTER */

export function ContactFooter() {
  return (
    <footer className="foot" id="contact">
      <div className="wrap">
        <div className="contact">
          <Label>Start a project</Label>
          <p className="contact__lede">
            Have a workflow that AI keeps almost solving? Tell us about it.
          </p>
          <a href={`mailto:${email}`} className="contact__big">
            <span>Let&apos;s talk</span>
            <span className="contact__chip" aria-hidden="true">
              <ArrowIcon />
            </span>
          </a>

          <div className="contact__row">
            <div>
              <p className="contact__k">Email</p>
              <a href={`mailto:${email}`} className="contact__v">
                {email}
              </a>
            </div>
            <div>
              <p className="contact__k">Discovery call</p>
              <a
                href={`mailto:${email}?subject=Discovery%20call%20request`}
                className="contact__v"
              >
                Book a discovery call
              </a>
            </div>
            <div>
              <p className="contact__k">Follow</p>
              <a
                href={linkedin}
                className="contact__v"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="foot__grid">
          <div className="foot__brand">
            <Logo onDark />
            <p>
              An AI engineering and product studio. We design, build and ship
              production AI systems and platforms.
            </p>
          </div>
          {footerNav.map((col) => (
            <div key={col.title} className="foot__col">
              <p className="foot__h">{col.title}</p>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="foot__legal">
          <span>© 2026 Banjubits. All client work anonymised.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
