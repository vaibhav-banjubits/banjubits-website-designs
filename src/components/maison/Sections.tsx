import type { CSSProperties } from "react";
import Image from "next/image";
import { industries, pains, steps, why } from "./data";
import { Cases } from "./Cases";
import { Explorer } from "./Explorer";
import { Icon } from "./Icon";
import { img } from "./images";

const d = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

/* 01 · the range */
export function Products() {
  return (
    <section className="mn-sec" id="products">
      <div className="mn-wrap">
        <header className="mn-shead">
          <p className="mn-pill mn-rv">
            <i className="mn-dot" />
            The Mentis range
          </p>
          <div>
            <h2 className="mn-display mn-rv">
              Pick the problem. <em>We bring the product.</em>
            </h2>
            <p className="mn-lede mn-rv" style={d(0.1)}>
              Ready-made building blocks, so a working pilot takes weeks, not
              quarters. Each one is labelled with what is built today.
            </p>
          </div>
        </header>
        <Explorer />
      </div>
    </section>
  );
}

/* 02 · what leaders ask */
export function Questions() {
  return (
    <section className="mn-sec mn-sec--dark mn-ask" id="questions">
      <div className="mn-ask__rings" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="mn-wrap">
        <header className="mn-shead mn-shead--dark">
          <p className="mn-pill mn-pill--dark mn-rv">
            <i className="mn-dot" />
            What leaders ask us
          </p>
          <h2 className="mn-display mn-display--light mn-rv">
            Five worries. <em>Five straight answers.</em>
          </h2>
        </header>

        <ol className="mn-qs">
          {pains.map((p, i) => (
            <li key={p.q} className="mn-q mn-rv" style={d(i * 0.05)}>
              <span className="mn-q__no">{String(i + 1).padStart(2, "0")}</span>
              <p className="mn-q__q">&ldquo;{p.q}&rdquo;</p>
              <div className="mn-q__a">
                <h3>{p.answer}</h3>
                <p>{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* 03 · proof */
export function Work() {
  return (
    <section className="mn-sec mn-work" id="work">
      <div className="mn-wrap">
        <header className="mn-shead">
          <p className="mn-pill mn-rv">
            <i className="mn-dot" />
            Proof
          </p>
          <h2 className="mn-display mn-rv">
            Real work, <em>real numbers.</em>
          </h2>
        </header>
      </div>
      <Cases />
    </section>
  );
}

/* 04 · how we engage */
export function Approach() {
  return (
    <section className="mn-sec mn-sec--tight" id="approach">
      <div className="mn-wrap">
        <header className="mn-shead">
          <p className="mn-pill mn-rv">
            <i className="mn-dot" />
            How we engage
          </p>
          <h2 className="mn-display mn-rv">
            From first call to <em>AI in daily work.</em>
          </h2>
        </header>

        <div className="mn-road" id="road">
          <svg
            className="mn-road__svg"
            viewBox="0 0 1200 420"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="mn-road__bed"
              d="M-20 250 C 120 150, 260 150, 330 250 S 540 350, 640 240 S 860 130, 960 250 S 1120 330, 1220 220"
            />
            <path
              className="mn-road__dash"
              d="M-20 250 C 120 150, 260 150, 330 250 S 540 350, 640 240 S 860 130, 960 250 S 1120 330, 1220 220"
            />
            <path
              className="mn-road__glow"
              id="mn-roadGlow"
              d="M-20 250 C 120 150, 260 150, 330 250 S 540 350, 640 240 S 860 130, 960 250 S 1120 330, 1220 220"
              pathLength="1"
            />
          </svg>
          {steps.map((s, i) => (
            <div
              key={s.no}
              className={`mn-step mn-step--${i + 1} mn-rv`}
              style={d(i * 0.08)}
            >
              <span className="mn-pin">
                <Icon n={s.icon} />
              </span>
              <div className="mn-step__txt">
                <small>
                  {s.no} · {s.time}
                </small>
                <h3>{s.title}</h3>
                <p>{s.get}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 05 · why us */
export function Why() {
  return (
    <section className="mn-sec mn-sec--dark mn-why" id="why">
      <Image
        src={img["ops-floor"]}
        alt=""
        fill
        sizes="100vw"
        className="mn-why__img"
      />
      <div className="mn-why__tint" aria-hidden="true" />
      <div className="mn-wrap">
        <header className="mn-shead mn-shead--dark">
          <p className="mn-pill mn-pill--dark mn-rv">
            <i className="mn-dot" />
            Why Banjubits
          </p>
          <h2 className="mn-display mn-display--light mn-rv">
            Built to be <em>trusted.</em>
          </h2>
        </header>

        <ul className="mn-whys">
          {why.map((w, i) => (
            <li key={w.title} className="mn-whys__i mn-rv" style={d(i * 0.05)}>
              <span className="mn-whys__ic">
                <Icon n={w.icon} />
              </span>
              {w.title}
            </li>
          ))}
        </ul>

        <p className="mn-ind mn-rv">
          <span>Built for</span>
          {industries.map((x) => (
            <em key={x}>{x}</em>
          ))}
        </p>
      </div>
    </section>
  );
}
