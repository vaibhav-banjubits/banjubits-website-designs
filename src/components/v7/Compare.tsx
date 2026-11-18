import { Icon } from "./Icon";
import { compare } from "./data";

export function Compare() {
  return (
    <section className="rt-sec" id="compare" aria-labelledby="rt-cmp-title">
      <div className="rt-wrap">
        <div className="rt-center rt-rv">
          <p className="rt-kicker">
            <i />
            The right guide
          </p>
          <h2 id="rt-cmp-title" className="rt-h2">
            The right destination needs <em>the right guide</em>
          </h2>
          <p className="rt-lede">
            How the three common ways of getting AI into production compare on the things that
            decide whether it stays there.
          </p>
        </div>

        <div className="rt-cmp rt-rv" role="region" aria-label="Comparison table" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th scope="col">
                  <span className="rt-sr">Criterion</span>
                </th>
                {compare.cols.map((c, i) => (
                  <th key={c} scope="col" className={i === 2 ? "rt-hl rt-hl--top" : undefined}>
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
                        i === 2 ? `rt-hl${ri === compare.rows.length - 1 ? " rt-hl--bot" : ""}` : undefined
                      }
                    >
                      {i === 2 ? (
                        <span className="rt-cmp__cell">
                          <Icon n="check" className="rt-cmp__ok" />
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
