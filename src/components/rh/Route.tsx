import { steps } from "./data";

// Points the dashed route passes through, in the 1200 x 140 map space.
const PINS = [
  { x: 150, y: 104 },
  { x: 450, y: 40 },
  { x: 750, y: 104 },
  { x: 1050, y: 40 },
];
const PATH =
  "M0 74 C80 74 80 104 150 104 S370 40 450 40 S670 104 750 104 S970 40 1050 40 S1140 74 1200 74";

export function Route() {
  return (
    <section className="rh-sec rh-mist" id="approach" aria-labelledby="rh-route-title">
      <div className="rh-wrap">
        <div className="rh-center rh-rv">
          <p className="rh-kicker">
            <i />
            Our approach
          </p>
          <h2 id="rh-route-title" className="rh-h2">
            How we find the <em>right direction</em> for your business
          </h2>
        </div>

        <div className="rh-route">
          <div className="rh-route__map" aria-hidden="true" data-draw>
            <svg viewBox="0 0 1200 140">
              <path d={PATH} className="rh-route__path" pathLength="100" />
            </svg>
            {PINS.map((p, i) => (
              <span
                key={i}
                className="rh-pin"
                style={{ left: `${(p.x / 1200) * 100}%`, top: `${(p.y / 140) * 100}%`, ["--i" as string]: i }}
              >
                <b>{i + 1}</b>
              </span>
            ))}
          </div>

          <ol className="rh-route__steps">
            {steps.map((s, i) => (
              <li key={s.no} className="rh-rv" style={{ ["--d" as string]: `${i * 0.1}s` }}>
                <span className="rh-route__no">{s.no}</span>
                <h3 className="rh-h3">{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
