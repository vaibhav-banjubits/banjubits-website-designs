import Image from "next/image";
import { products } from "@/lib/content";
import { Icon } from "./Icon";
import { img } from "./images";
import { SecHead } from "./Studio";

const META = [
  { tag: "Governance, risk & compliance", photo: img.balconies, alt: "Ordered balconies on a modern facade" },
  { tag: "Talent", photo: img.twistTower, alt: "A twisting tower rising into the sky" },
  { tag: "Engineering", photo: img.sawtooth, alt: "The sharp sawtooth outline of a factory roof" },
];

export function Products() {
  return (
    <section className="sg-sec sg-products" id="products" aria-labelledby="sg-prod-title">
      <div className="sg-wrap">
        <SecHead n="08" label="Mentis" aside="Our own AI products" />
        <div className="sg-split">
          <h2 id="sg-prod-title" className="sg-h2 sg-rv">
            We build our own AI products <em>the same way.</em>
          </h2>
          <p className="sg-lede sg-rv">
            Mentis is our product line: copilots with citations, approvals and audit trails built
            in, so people stay in charge of every decision that matters.
          </p>
        </div>

        <div className="sg-prods">
          {products.map((p, i) => (
            <article key={p.name} className="sg-prod sg-rv" style={{ ["--d" as string]: `${i * 0.1}s` }}>
              <a href="#contact" className="sg-prod__link">
                <figure className="sg-prod__img">
                  <Image src={META[i].photo} alt={META[i].alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
                  <span className="sg-prod__no">Mentis / 0{i + 1}</span>
                </figure>
                <p className="sg-prod__tag">{META[i].tag}</p>
                <h3>{p.name.replace("Mentis ", "")}</h3>
                <p className="sg-prod__text">{p.text}</p>
                <span className="sg-textlink">
                  Request a demo <Icon n="arrow" />
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
