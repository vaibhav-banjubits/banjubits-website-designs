import Image from "next/image";
import { models } from "@/lib/content";
import { Icon } from "./Icon";
import { img } from "./images";
import { SecHead } from "./Studio";

const BEST = [
  "Teams with a roadmap who need more hands",
  "New products and platforms that need momentum",
  "Well-defined scope with a fixed budget",
];

export function Models() {
  return (
    <section className="sg-sec sg-sec--alt sg-models" aria-labelledby="sg-mod-title">
      <div className="sg-wrap">
        <SecHead n="07" label="Engagement" aside="Three ways to work with us" />
        <div className="sg-models__grid">
          <figure className="sg-models__img sg-reveal">
            <Image
              src={img.orangeChairs}
              alt="Terracotta chairs around a long boardroom table"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </figure>
          <div>
            <h2 id="sg-mod-title" className="sg-h2 sg-rv">
              Three models. <em>One standard</em> of delivery.
            </h2>
            <ol className="sg-models__list">
              {models.map((m, i) => (
                <li key={m.name} className="sg-rv">
                  <span className="sg-models__n">({String(i + 1).padStart(2, "0")})</span>
                  <div>
                    <h3>{m.name}</h3>
                    <p>{m.text}</p>
                    <p className="sg-models__best">
                      <span>Best for</span> {BEST[i]}
                    </p>
                  </div>
                  <a href="#contact" className="sg-models__go" aria-label={`Discuss the ${m.name} model`}>
                    <Icon n="arrow-ur" />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
