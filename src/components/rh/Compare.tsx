import { Icon } from "./Icon";
import { compare } from "./data";

export function Compare() {
  return (
    <section className="rh-sec" id="compare" aria-labelledby="rh-cmp-title">
      <div className="rh-wrap">
        <div className="rh-center rh-rv">
          <p className="rh-kicker">
            <i />
            The right guide
          </p>
          <h2 id="rh-cmp-title" className="rh-h2">
            The right destination needs <em>the right guide</em>
          </h2>
          <p className="rh-lede">
            How the three common ways of getting AI into production compare on the things that
            decide whether it stays there.
          </p>
        </div>

        <div className="rh-cmp rh-rv" role="region" aria-label="Comparison table" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th scope="col">
                  <span className="rh-sr">Criterion</span>
                </th>
                {compare.cols.map((c, i) => (
                  <th key={c} scope="col" className={i === 2 ? "rh-hl rh-hl--top" : undefined}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compare.rows.map((r, ri) => (
                <tr key={r.label}>
                  <th scope="row">{r.label}</th>
                  {r.cells.map((c, i) => (
                    <td
                      key={i}
                      className={
                        i === 2 ? `rh-hl${ri === compare.rows.length - 1 ? " rh-hl--bot" : ""}` : undefined
                      }
                    >
                      {i === 2 ? (
                        <span className="rh-cmp__cell">
                          <Icon n="check" className="rh-cmp__ok" />
                          <span>{c}</span>
                        </span>
                      ) : (
                        c
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
