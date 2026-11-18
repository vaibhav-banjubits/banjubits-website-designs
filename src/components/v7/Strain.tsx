import { Icon } from "./Icon";
import { strainLeft, strainRight } from "./data";

// Six arrows leaving the same centre in different directions: the programme pulling apart.
const ARROWS = [
  { a: -90, len: 104, label: "Strategy", s: 0 },
  { a: -30, len: 84, label: "Data", s: 1 },
  { a: 30, len: 110, label: "Platform", s: 2 },
  { a: 90, len: 88, label: "Policy", s: 3 },
  { a: 150, len: 106, label: "Delivery", s: 4 },
  { a: 210, len: 82, label: "Security", s: 5 },
];

export function Strain() {
  return (
    <section className="rt-sec rt-night rt-strain" id="problem" aria-labelledby="rt-strain-title">
      <div className="rt-wrap">
        <div className="rt-center rt-rv">
          <p className="rt-kicker rt-kicker--night">
            <i />
            The problem
          </p>
          <h2 id="rt-strain-title" className="rt-h2">
            Delivery slows when every part of your AI programme{" "}
            <em>pulls in a different direction</em>
          </h2>
        </div>

        <div className="rt-strain__grid">
          <div className="rt-strain__col rt-rv">
            <p>{strainLeft.text}</p>
            <ul className="rt-list rt-list--night">
              {strainLeft.points.map((p) => (
                <li key={p}>
                  <Icon n="x" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="rt-strain__fig rt-rv" aria-hidden="true">
            <svg viewBox="-170 -170 340 340" role="presentation">
              <circle r="150" className="rt-strain__ring" />
              <circle r="98" className="rt-strain__ring rt-strain__ring--in" />
              {ARROWS.map((ar) => (
                <g
                  key={ar.label}
                  className="rt-strain__arrow"
                  style={{ ["--a" as string]: `${ar.a}deg`, ["--s" as string]: ar.s }}
                >
                  <line x1="30" y1="0" x2={ar.len} y2="0" />
                  <path d={`M${ar.len - 9} -6 L${ar.len} 0 L${ar.len - 9} 6`} />
                  <text
                    x={ar.len + 14}
                    y="4"
                    transform={`rotate(${-ar.a} ${ar.len + 14} 0)`}
                    textAnchor="middle"
                  >
                    {ar.label}
                  </text>
                </g>
              ))}
              <circle r="30" className="rt-strain__core" />
              <text y="5" textAnchor="middle" className="rt-strain__ai">
                AI
              </text>
            </svg>
          </div>

          <div className="rt-strain__col rt-rv" style={{ ["--d" as string]: "0.1s" }}>
            <p>{strainRight.text}</p>
            <ul className="rt-list rt-list--night">
              {strainRight.points.map((p) => (
                <li key={p}>
                  <Icon n="x" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rt-strain__foot rt-rv">
          <p>One team, one route, one set of rules.</p>
          <a href="#bearings" className="rt-btn">
            Find a shared direction
            <span className="rt-btn__ic">
              <Icon n="arrow" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
