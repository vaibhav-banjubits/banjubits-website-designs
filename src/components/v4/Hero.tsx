import Image from "next/image";
import { Icon } from "./Icon";
import { img } from "./images";
import { Badge } from "./Logo";

const LEDGER = [
  { v: "7→1", l: "Siloed AI assistants unified behind one governed entry point" },
  { v: "95%", pre: "≥", l: "AI answers grounded and cited back to source", count: 95 },
  { v: "50k+", l: "People reached through a multi-institution platform", count: 50, post: "k+" },
  { v: "100%", l: "Scoring parity validated before a legacy cutover", count: 100, post: "%" },
];

export function Hero() {
  return (
    <section className="sg-hero" id="top" aria-labelledby="sg-hero-title">
      <div className="sg-wrap">
        <div className="sg-hero__meta sg-rv">
          <span>AI engineering &amp; product studio</span>
          <span className="sg-hero__meta-mid">AI systems · Digital products · Cloud · Data</span>
          <span>(Scroll)</span>
        </div>

        <h1 id="sg-hero-title" className="sg-hero__title">
          <span className="sg-line"><span>Engineering AI</span></span>
          <span className="sg-line"><span>that earns its place</span></span>
          <span className="sg-line"><span>in <em>production.</em></span></span>
        </h1>

        <div className="sg-hero__row">
          <Badge href="#contact" label="Start a project" />
          <div className="sg-hero__intro sg-rv" style={{ ["--d" as string]: ".5s" }}>
            <p>
              We design, build and govern AI systems, digital products and cloud platforms for
              enterprises and growing companies, with human review gates built in from the first
              prototype.
            </p>
            <div className="sg-hero__ctas">
              <a href="#contact" className="sg-btn">
                Start a project <Icon n="arrow" />
              </a>
              <a href="#work" className="sg-textlink">
                View selected work
              </a>
            </div>
          </div>
        </div>
      </div>

      <figure className="sg-hero__figure sg-reveal">
        <div className="sg-hero__img" data-parallax="0.06">
          <Image
            src={img.archWalker}
            alt="A lone figure walks across sweeping white architecture under a dark sky"
            fill
            priority
            sizes="100vw"
            placeholder="blur"
          />
        </div>
        <figcaption className="sg-wrap">
          <span>Fig. 01</span>
          <span>The route from pilot to production</span>
        </figcaption>
      </figure>

      <div className="sg-wrap">
        <dl className="sg-ledger">
          {LEDGER.map((s, i) => (
            <div key={s.l} className="sg-rv" style={{ ["--d" as string]: `${i * 0.08}s` }}>
              <dt>{s.l}</dt>
              <dd>
                {s.count !== undefined ? (
                  <>
                    {s.pre}
                    <span data-count={s.count}>{s.count}</span>
                    {s.post ?? "%"}
                  </>
                ) : (
                  s.v
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
