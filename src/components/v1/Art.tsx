// Illustrations for the bento tiles: soft gradients, with a few small things moving. Decorative only.

/** Orchestration: three assistants go through one governed gate to the systems behind them. */
export function ArtAi() {
  const left = [
    { y: 52, t: "Assistant A" },
    { y: 120, t: "Assistant B" },
    { y: 188, t: "Assistant C" },
  ];
  const right = [
    { y: 52, t: "Documents" },
    { y: 120, t: "Core systems" },
    { y: 188, t: "Data platform" },
  ];
  return (
    <svg className="hb-art" viewBox="0 0 640 240" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="hbA-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0f2d52" />
          <stop offset="1" stopColor="#0b9a8d" />
        </linearGradient>
        <radialGradient id="hbA-glow">
          <stop offset="0" stopColor="#4fe3d6" stopOpacity=".55" />
          <stop offset="1" stopColor="#4fe3d6" stopOpacity="0" />
        </radialGradient>
        {left.map((l, i) => (
          <path key={`pl${i}`} id={`hbA-l${i}`} d={`M150 ${l.y} C 240 ${l.y}, 250 120, 320 120`} />
        ))}
        {right.map((r, i) => (
          <path key={`pr${i}`} id={`hbA-r${i}`} d={`M320 120 C 390 120, 400 ${r.y}, 474 ${r.y}`} />
        ))}
      </defs>
      <circle cx="320" cy="120" r="110" fill="url(#hbA-glow)" />
      <g className="hb-art__wire">
        {left.map((l, i) => (
          <use key={i} href={`#hbA-l${i}`} />
        ))}
        {right.map((r, i) => (
          <use key={i} href={`#hbA-r${i}`} />
        ))}
      </g>
      {left.map((l) => (
        <g key={l.t}>
          <rect x="34" y={l.y - 19} width="116" height="38" rx="12" className="hb-art__card" />
          <circle cx="54" cy={l.y} r="6" fill="url(#hbA-g)" />
          <text x="68" y={l.y + 4} className="hb-art__t">
            {l.t}
          </text>
        </g>
      ))}
      {right.map((r) => (
        <g key={r.t}>
          <rect x="474" y={r.y - 19} width="136" height="38" rx="12" className="hb-art__card" />
          <rect x="488" y={r.y - 5} width="10" height="10" rx="3" fill="#3e7cb1" opacity=".85" />
          <text x="506" y={r.y + 4} className="hb-art__t">
            {r.t}
          </text>
        </g>
      ))}
      <circle cx="320" cy="120" r="44" fill="url(#hbA-g)" />
      <circle cx="320" cy="120" r="44" className="hb-art__ping" />
      <path d="M320 100l-14 5.5v9c0 9.5 6 15.5 14 18 8-2.5 14-8.5 14-18v-9L320 100Z" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="m314 120 4.5 4.5L327 115" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <g className="hb-art__pulses">
        {left.map((l, i) => (
          <circle key={`a${i}`} r="4.5" className="hb-art__pulse">
            <animateMotion dur="3.2s" begin={`${i * 0.9}s`} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href={`#hbA-l${i}`} />
            </animateMotion>
          </circle>
        ))}
        {right.map((r, i) => (
          <circle key={`b${i}`} r="4.5" className="hb-art__pulse hb-art__pulse--b">
            <animateMotion dur="3.2s" begin={`${1.6 + i * 0.9}s`} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href={`#hbA-r${i}`} />
            </animateMotion>
          </circle>
        ))}
      </g>
    </svg>
  );
}

/** Digital products: an app window with a live chart and a phone beside it. */
export function ArtProduct() {
  const bars = [46, 62, 54, 78, 70, 92, 84];
  return (
    <svg className="hb-art" viewBox="0 0 640 240" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="hbP-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0b9a8d" />
          <stop offset="1" stopColor="#0f2d52" />
        </linearGradient>
      </defs>
      <rect x="70" y="26" width="360" height="190" rx="18" className="hb-art__card hb-art__shadow" />
      <path d="M70 62H430" className="hb-art__rule" />
      <circle cx="92" cy="44" r="4.5" fill="#f0a3a3" />
      <circle cx="108" cy="44" r="4.5" fill="#f3d37a" />
      <circle cx="124" cy="44" r="4.5" fill="#8fd4a8" />
      <rect x="90" y="80" width="86" height="12" rx="6" className="hb-art__skel" />
      <rect x="90" y="102" width="62" height="8" rx="4" className="hb-art__skel hb-art__skel--s" />
      <rect x="90" y="128" width="86" height="30" rx="10" fill="url(#hbP-g)" opacity=".92" />
      <rect x="90" y="168" width="86" height="30" rx="10" className="hb-art__skel" />
      <g>
        {bars.map((h, i) => (
          <rect
            key={i}
            x={206 + i * 29}
            y={196 - h * 1.5}
            width="19"
            height={h * 1.5}
            rx="6"
            fill="url(#hbP-g)"
            opacity={0.35 + i * 0.09}
            className="hb-art__bar"
            style={{ animationDelay: `${i * 0.12}s` }}
          />
        ))}
      </g>
      <rect x="478" y="40" width="104" height="186" rx="22" className="hb-art__card hb-art__shadow" />
      <rect x="520" y="48" width="20" height="5" rx="2.5" className="hb-art__skel" />
      <rect x="494" y="70" width="72" height="58" rx="12" fill="url(#hbP-g)" opacity=".9" />
      <rect x="494" y="140" width="72" height="9" rx="4.5" className="hb-art__skel" />
      <rect x="494" y="158" width="50" height="9" rx="4.5" className="hb-art__skel hb-art__skel--s" />
      <rect x="494" y="182" width="72" height="30" rx="10" className="hb-art__skel" />
    </svg>
  );
}

/** Production engineering: a release pipeline with a human gate between stages. */
export function ArtPipeline() {
  const stages = ["Plan", "Build", "Review", "Ship"];
  return (
    <svg className="hb-art" viewBox="0 0 640 240" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="hbL-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0f2d52" />
          <stop offset="1" stopColor="#0b9a8d" />
        </linearGradient>
        <path id="hbL-track" d="M60 120 H580" />
      </defs>
      <path d="M60 120 H580" className="hb-art__wire hb-art__wire--thick" />
      <path d="M60 120 H580" stroke="url(#hbL-g)" strokeWidth="3" strokeLinecap="round" strokeDasharray="520" className="hb-art__draw" fill="none" />
      {stages.map((s, i) => {
        const x = 60 + i * 173;
        return (
          <g key={s}>
            <rect x={x - 46} y="92" width="92" height="56" rx="16" className="hb-art__card hb-art__shadow" />
            <text x={x} y="125" className="hb-art__t hb-art__t--c">
              {s}
            </text>
            {i < 3 && (
              <g transform={`translate(${x + 86} 120)`}>
                <rect x="-13" y="-13" width="26" height="26" rx="8" transform="rotate(45)" fill="url(#hbL-g)" />
                <path d="m-5 0 3.5 3.5L5 -3.5" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            )}
          </g>
        );
      })}
      <text x="320" y="190" className="hb-art__t hb-art__t--c hb-art__t--soft">
        A person approves every gate
      </text>
      <circle r="6.5" className="hb-art__pulse">
        <animateMotion dur="4.4s" repeatCount="indefinite">
          <mpath href="#hbL-track" />
        </animateMotion>
      </circle>
    </svg>
  );
}
