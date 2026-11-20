import { Icon } from "./Icon";
import { bearings } from "./data";

const TICKS = Array.from({ length: 72 }, (_, i) => i);

function Compass() {
  return (
    <div className="rh-compass" aria-hidden="true">
      <svg viewBox="-160 -160 320 320" role="presentation">
        <circle r="150" className="rh-compass__rim" />
        <circle r="116" className="rh-compass__rim rh-compass__rim--in" />
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
              className={major ? "rh-compass__tick rh-compass__tick--major" : "rh-compass__tick"}
            />
          );
        })}
        {[
          ["N", 0, -90],
          ["E", 90, 0],
          ["S", 0, 98],
          ["W", -90, 0],
        ].map(([l, x, y]) => (
          <text key={String(l)} x={x as number} y={(y as number) + 6} textAnchor="middle" className="rh-compass__dir">
            {l}
          </text>
        ))}
        <g className="rh-compass__needle">
          <path d="M0 -84 L11 0 L-11 0 Z" className="rh-compass__n" />
          <path d="M0 84 L11 0 L-11 0 Z" className="rh-compass__s" />
          <circle r="7" className="rh-compass__pin" />
        </g>
      </svg>
    </div>
  );
}

export function Bearings() {
  return (
    <section className="rh-sec" id="bearings" aria-labelledby="rh-bear-title">
      <div className="rh-wrap">
        <div className="rh-center rh-rv">
          <p className="rh-kicker">
            <i />
            How we steer
          </p>
          <h2 id="rh-bear-title" className="rh-h2">
            Every dependable AI system is guided by <em>four bearings</em>
          </h2>
          <p className="rh-lede">
            We hold four commitments constant on every engagement, whatever the technology and
            whoever the client.
          </p>
        </div>

        <div className="rh-bear">
          <div className="rh-bear__c rh-rv">
            <Compass />
            <a href="#contact" className="rh-btn">
              Plan your route
              <span className="rh-btn__ic">
                <Icon n="arrow" />
              </span>
            </a>
          </div>
          {bearings.map((b, i) => (
            <article
              key={b.no}
              className={`rh-card rh-bear__card rh-bear__card--${i + 1} rh-rv`}
              style={{ ["--d" as string]: `${i * 0.08}s` }}
            >
              <span className="rh-card__ic">
                <Icon n={b.icon} />
              </span>
              <p className="rh-card__no">{b.no}</p>
              <h3 className="rh-h3">{b.title}</h3>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
