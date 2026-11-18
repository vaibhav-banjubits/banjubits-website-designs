import Image from "next/image";
import type { CSSProperties } from "react";
import { img } from "./images";
import { Icon } from "./Icon";

export function Insights() {
  return (
    <section className="dh-sec dh-sec--light dh-sec--tight" id="insights">
      <div className="dh-wrap">
        <header className="dh-shead">
          <p className="dh-pill dh-rv">
            <i className="dh-dot"></i>Insights
          </p>
          <div>
            <h2 className="dh-display dh-rv">
              Ideas that move <em>delivery forward.</em>
            </h2>
            <p
              className="dh-lede dh-rv"
              style={{ "--d": ".08s" } as CSSProperties}
            >
              Practical notes from the teams building production AI: what holds
              up, what breaks, and what we would do again.
            </p>
          </div>
        </header>

        <div className="dh-posts">
          <a href="#insights" className="dh-post dh-rv">
            <figure>
              <Image
                src={img["code-glow"]}
                alt="Colourful source code on a dark screen"
                sizes="(max-width: 860px) 90vw, (max-width: 1100px) 45vw, 400px"
              />
            </figure>
            <div className="dh-post__meta">
              <span className="dh-tag">
                <Icon n="rocket" />
                AI delivery
              </span>
            </div>
            <h3>Why most enterprise AI projects fail before production</h3>
            <p>
              The gap between a demo and a production system is where most AI
              initiatives stall. Here is how to bridge it.
            </p>
            <span className="dh-post__go">
              Read the article{" "}
              <span className="dh-round">
                <Icon n="arrow-right" />
              </span>
            </span>
          </a>
          <a
            href="#insights"
            className="dh-post dh-rv"
            style={{ "--d": ".08s" } as CSSProperties}
          >
            <figure>
              <Image
                src={img["circuit-board"]}
                alt="Close-up of a circuit board"
                sizes="(max-width: 860px) 90vw, (max-width: 1100px) 45vw, 400px"
              />
            </figure>
            <div className="dh-post__meta">
              <span className="dh-tag">
                <Icon n="workflow" />
                Architecture
              </span>
            </div>
            <h3>Designing agent orchestration for enterprise compliance</h3>
            <p>
              Multi-agent systems need governance from day one. Architecture
              patterns that hold up at scale.
            </p>
            <span className="dh-post__go">
              Read the article{" "}
              <span className="dh-round">
                <Icon n="arrow-right" />
              </span>
            </span>
          </a>
          <a
            href="#insights"
            className="dh-post dh-rv"
            style={{ "--d": ".16s" } as CSSProperties}
          >
            <figure>
              <Image
                src={img["ai-3d"]}
                alt="Three-dimensional letters A and I over flowing blue lines"
                sizes="(max-width: 860px) 90vw, (max-width: 1100px) 45vw, 400px"
              />
            </figure>
            <div className="dh-post__meta">
              <span className="dh-tag">
                <Icon n="mic" />
                Voice AI
              </span>
            </div>
            <h3>Building voice AI that handles real banking conversations</h3>
            <p>
              Lessons from deploying conversational AI in regulated financial
              environments, with human escalation paths.
            </p>
            <span className="dh-post__go">
              Read the article{" "}
              <span className="dh-round">
                <Icon n="arrow-right" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
