import Image from "next/image";
import { work } from "@/lib/content";
import { Icon } from "./Icon";
import { img } from "./images";
import { SecHead } from "./Studio";

const EXTRA = [
  { photo: img.boardroom, alt: "Leadership team reviewing a plan around a meeting table", metric: "7→1", label: "Assistants unified behind one governed front door" },
  { photo: img.callcentre, alt: "Contact-centre specialists with headsets at their desks", metric: "Human", label: "Escalation designed into every first-line call flow" },
  { photo: img.meetingData, alt: "Analysts reviewing regional data on laptops around a table", metric: "≥95%", label: "Of AI answers grounded and cited back to source" },
  { photo: img.students, alt: "Students gathered around a laptop in a bright study space", metric: "50k+", label: "People reached across institutions" },
];

export function Work() {
  return (
    <section className="sg-sec sg-sec--dark sg-work" id="work" aria-labelledby="sg-work-title">
      <div className="sg-wrap">
        <SecHead n="05" label="Selected work" aside="Client work shown by sector" dark />
        <div className="sg-split">
          <h2 id="sg-work-title" className="sg-h2 sg-rv">
            Different organisations. <em>Measurable</em> results.
          </h2>
          <p className="sg-lede sg-rv">
            Every engagement starts with the outcome and ends with a team that can run what we
            built. Four recent examples.
          </p>
        </div>

        <div className="sg-cases">
          {work.map((w, i) => {
            const x = EXTRA[i];
            return (
              <article key={w.title} className={`sg-case${i % 2 ? " sg-case--flip" : ""}`}>
                <a href="#contact" className="sg-case__link" aria-label={`${w.title} Discuss a similar project`}>
                  <figure className="sg-case__media sg-reveal">
                    <Image src={x.photo} alt={x.alt} fill sizes="(max-width: 900px) 100vw, 58vw" />
                  </figure>
                  <div className="sg-case__body sg-rv">
                    <p className="sg-case__meta">
                      <span>({String(i + 1).padStart(2, "0")})</span>
                      <span>{w.sector}</span>
                      <span>{w.service}</span>
                    </p>
                    <h3>{w.title}</h3>
                    <div className="sg-case__metric">
                      <strong>{x.metric}</strong>
                      <span>{x.label}</span>
                    </div>
                    <span className="sg-textlink sg-textlink--light">
                      Discuss a similar project <Icon n="arrow" />
                    </span>
                  </div>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
