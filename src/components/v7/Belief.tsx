import Image from "next/image";
import { Icon } from "./Icon";
import { beliefs } from "./data";
import { img } from "./images";

export function Belief() {
  return (
    <section className="rt-sec" id="about" aria-labelledby="rt-belief-title">
      <div className="rt-wrap">
        <div className="rt-belief">
          <figure className="rt-belief__media rt-rv">
            <Image
              src={img.workingSession}
              alt="Three colleagues mapping a delivery journey on a glass wall with sticky notes"
              fill
              sizes="(max-width: 900px) 100vw, 560px"
              placeholder="blur"
              style={{ objectPosition: "30% 50%" }}
            />
            <figcaption className="rt-chip">A delivery working session</figcaption>
          </figure>

          <div className="rt-belief__body rt-rv" style={{ ["--d" as string]: "0.1s" }}>
            <p className="rt-kicker">
              <i />
              About the studio
            </p>
            <h2 id="rt-belief-title" className="rt-h2">
              Behind every project is <em>a simple belief</em>
            </h2>
            <p className="rt-belief__quote">
              AI only matters once it is running in production, under control and owned by the
              people who rely on it.
            </p>
            <p>
              That is why we plan the gates before the build, write the Definition of Done before
              the first sprint, and treat handover as part of the work, not the end of it.
            </p>
            <ul className="rt-belief__list">
              {beliefs.map((b) => (
                <li key={b.title}>
                  <Icon n="check" />
                  <div>
                    <h3>{b.title}</h3>
                    <p>{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a href="#contact" className="rt-btn rt-btn--ink">
              Meet the team
              <span className="rt-btn__ic">
                <Icon n="arrow" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
