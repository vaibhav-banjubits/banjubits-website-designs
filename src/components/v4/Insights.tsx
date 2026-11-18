import Image from "next/image";
import { insights } from "@/lib/content";
import { Icon } from "./Icon";
import { img } from "./images";
import { SecHead } from "./Studio";

const PHOTOS = [img.handsLaptop, img.towersUp, img.curveGlass];

/** Journal index: an editorial list; a photo appears beside the hovered entry. */
export function Insights() {
  return (
    <section className="sg-sec sg-insights" id="insights" aria-labelledby="sg-ins-title">
      <div className="sg-wrap">
        <SecHead n="09" label="Journal" aside="Notes from the production line" />
        <div className="sg-split">
          <h2 id="sg-ins-title" className="sg-h2 sg-rv">
            Ideas that move AI <em>into production.</em>
          </h2>
          <a href="#insights" className="sg-textlink sg-split__end sg-rv">
            All insights <Icon n="arrow" />
          </a>
        </div>

        <ol className="sg-journal">
          {insights.map((p, i) => (
            <li key={p.title} className="sg-rv">
              <a href="#insights" className="sg-journal__link">
                <span className="sg-journal__n">({String(i + 1).padStart(2, "0")})</span>
                <span className="sg-journal__cat">{p.category}</span>
                <span className="sg-journal__main">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </span>
                <span className="sg-journal__go" aria-hidden="true">
                  <Icon n="arrow-ur" />
                </span>
                <span className="sg-journal__img" aria-hidden="true">
                  <Image src={PHOTOS[i]} alt="" fill sizes="240px" />
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
