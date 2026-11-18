import { products } from "@/lib/content";
import { EmblemAtlas, EmblemForge, EmblemInterviews } from "./Art";
import { productExtras } from "./data";
import { Icon } from "./Icon";

const EMBLEMS = [EmblemAtlas, EmblemInterviews, EmblemForge];

export function Products() {
  return (
    <section className="gl-sec gl-sec--mist gl-products" id="products" aria-labelledby="gl-products-title">
      <div className="gl-wrap">
        <header className="gl-head gl-head--split">
          <div>
            <p className="gl-eyebrow gl-rv">Mentis, our own products</p>
            <h2 id="gl-products-title" className="gl-h2 gl-rv" style={{ ["--d" as string]: ".06s" }}>
              Products we build for <em>ourselves</em>, to the same standard.
            </h2>
          </div>
          <div className="gl-head__aside gl-rv" style={{ ["--d" as string]: ".12s" }}>
            <p>
              Mentis is where we apply what we have learned about governed AI to problems we see
              again and again. Each product keeps a person in charge of the decision.
            </p>
          </div>
        </header>

        <div className="gl-prods">
          {products.map((p, i) => {
            const Emblem = EMBLEMS[i];
            return (
              <article
                key={p.name}
                className="gl-prod gl-rv"
                style={{ ["--d" as string]: `${i * 0.09}s` }}
              >
                {/* The reveal lives on the article; tilt and light live on the card inside it. */}
                <div className="gl-prod__card gl-tilt gl-lit gl-grain">
                  <span className="gl-prod__sheen" aria-hidden="true" />
                  <div className="gl-prod__top">
                    <span className="gl-prod__kicker">{productExtras[i].kicker}</span>
                    <span className="gl-prod__no">0{i + 1}</span>
                  </div>
                  <div className="gl-prod__emblem" aria-hidden="true">
                    <Emblem />
                  </div>
                  <div className="gl-prod__body">
                    <h3>{p.name}</h3>
                    <p>{p.text}</p>
                  </div>
                  <div className="gl-prod__foot">
                    <p>
                      <small>Best for</small>
                      {productExtras[i].best}
                    </p>
                    <a href="#contact" className="gl-go" aria-label={`Talk to us about ${p.name}`}>
                      <Icon n="arrow-ur" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
