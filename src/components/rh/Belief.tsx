import Image from "next/image";
import { Icon } from "./Icon";
import { beliefs } from "./data";
import { img } from "./images";

export function Belief() {
  return (
    <section className="rh-sec" id="about" aria-labelledby="rh-belief-title">
      <div className="rh-wrap">
        <div className="rh-belief">
          <figure className="rh-belief__media rh-rv">
            <Image
              src={img.workingSession}
              alt="Three colleagues mapping a delivery journey on a glass wall with sticky notes"
              fill
              sizes="(max-width: 900px) 100vw, 560px"
              placeholder="blur"
              style={{ objectPosition: "30% 50%" }}
            />
            <figcaption className="rh-chip">A delivery working session</figcaption>
          </figure>

          <div className="rh-belief__body rh-rv" style={{ ["--d" as string]: "0.1s" }}>
            <p className="rh-kicker">
              <i />
              About the studio
            </p>
            <h2 id="rh-belief-title" className="rh-h2">
              Behind every project is <em>a simple belief</em>
            </h2>
            <p className="rh-belief__quote">
              AI only matters once it is running in production, under control and owned by the
              people who rely on it.
            </p>
            <p>
              That is why we plan the gates before the build, write the Definition of Done before
              the first sprint, and treat handover as part of the work, not the end of it.
            </p>
            <ul className="rh-belief__list">
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
            <a href="#contact" className="rh-btn rh-btn--ink">
              Meet the team
              <span className="rh-btn__ic">
                <Icon n="arrow" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
