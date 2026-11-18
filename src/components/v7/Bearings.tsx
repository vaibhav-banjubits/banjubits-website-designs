import { Icon } from "./Icon";
import { bearings } from "./data";

const TICKS = Array.from({ length: 72 }, (_, i) => i);

function Compass() {
  return (
    <div className="rt-compass" aria-hidden="true">
      <svg viewBox="-160 -160 320 320" role="presentation">
        <circle r="150" className="rt-compass__rim" />
        <circle r="116" className="rt-compass__rim rt-compass__rim--in" />
        {TICKS.map((i) => {
          const major = i % 18 === 0;
          const mid = i % 6 === 0;
          return (
            <line
              key={i}
              x1="0"
              x2="0"
              y1={-(150 - 3)}
              y2={-(150 - (major ? 22 : mid ? 14 : 8))}
              transform={`rotate(${i * 5})`}
              className={major ? "rt-compass__tick rt-compass__tick--major" : "rt-compass__tick"}
            />
          );
        })}
        {[
          ["N", 0, -90],
          ["E", 90, 0],
          ["S", 0, 98],
          ["W", -90, 0],
        ].map(([l, x, y]) => (
          <text key={String(l)} x={x as number} y={(y as number) + 6} textAnchor="middle" className="rt-compass__dir">
            {l}
          </text>
        ))}
        <g className="rt-compass__needle">
          <path d="M0 -84 L11 0 L-11 0 Z" className="rt-compass__n" />
          <path d="M0 84 L11 0 L-11 0 Z" className="rt-compass__s" />
          <circle r="7" className="rt-compass__pin" />
        </g>
      </svg>
    </div>
  );
}

export function Bearings() {
  return (
    <section className="rt-sec" id="bearings" aria-labelledby="rt-bear-title">
      <div className="rt-wrap">
        <div className="rt-center rt-rv">
          <p className="rt-kicker">
            <i />
            How we steer
          </p>
          <h2 id="rt-bear-title" className="rt-h2">
            Every dependable AI system is guided by <em>four bearings</em>
          </h2>
          <p className="rt-lede">
            We hold four commitments constant on every engagement, whatever the technology and
            whoever the client.
          </p>
        </div>

        <div className="rt-bear">
          <div className="rt-bear__c rt-rv">
            <Compass />
            <a href="#contact" className="rt-btn">
              Plan your route
              <span className="rt-btn__ic">
                <Icon n="arrow" />
              </span>
            </a>
          </div>
          {bearings.map((b, i) => (
            <article
              key={b.no}
              className={`rt-card rt-bear__card rt-bear__card--${i + 1} rt-rv`}
              style={{ ["--d" as string]: `${i * 0.08}s` }}
            >
              <span className="rt-card__ic">
                <Icon n={b.icon} />
              </span>
              <p className="rt-card__no">{b.no}</p>
              <h3 className="rt-h3">{b.title}</h3>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
