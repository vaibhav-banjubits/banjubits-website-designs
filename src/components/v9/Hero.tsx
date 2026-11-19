import Image from "next/image";
import { PROMISES } from "./data";
import { Icon } from "./Icon";
import { img } from "./images";

export function Hero() {
  return (
    <section className="gd-hero" id="top">
      <div className="gd-wrap">
        <p className="gd-eyebrow gd-up" style={{ ["--i" as string]: 0 }}>
          <span className="gd-eyebrow__dot" /> AI engineering company
        </p>
        <h1 className="gd-h1 gd-up" style={{ ["--i" as string]: 1 }}>
          We build AI into <em>real business work</em>, in a way leadership can trust.
        </h1>
        <div className="gd-hero__row">
          <p className="gd-lead gd-up" style={{ ["--i" as string]: 2 }}>
            Banjubits designs, builds and runs production AI inside your business. Our Mentis accelerators get you to
            a working pilot in weeks, not months.
          </p>
          <div className="gd-hero__cta gd-up" style={{ ["--i" as string]: 3 }}>
            <a href="#products" className="gd-btn gd-btn--lg">
              <span>See what we build</span>
              <Icon n="arrow-right" />
            </a>
            <a href="#start" className="gd-link gd-link--lg">
              Book a working session <Icon n="arrow-up-right" />
            </a>
          </div>
        </div>
      </div>

      <div className="gd-band">
        <Image
          src={img.facade}
          alt="Glass office tower at dusk, lit warm from the horizon"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "50% 38%" }}
          className="gd-band__img"
        />
        <div className="gd-wrap gd-band__wrap">
          <ul className="gd-promises">
            {PROMISES.map((p, n) => (
              <li key={p.title}>
                <span className="gd-promises__n">0{n + 1}</span>
                <h2>{p.title}</h2>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
