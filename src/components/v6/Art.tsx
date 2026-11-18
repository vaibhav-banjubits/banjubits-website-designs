/**
 * Line-art illustrations for the capability cards and product emblems.
 * Strokes use currentColor, so the parent card sets the tone. Motion is CSS-only
 * (see the gl-art rules in v6.css) and switches off under prefers-reduced-motion.
 */

type P = { className?: string };

const base = { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" } as const;

/* ------------------------------------------------------------ capabilities */

/** AI systems: a governed constellation. Diamonds on the spokes are the review gates. */
export function ArtAI({ className = "" }: P) {
  const nodes = [
    [92, 92, 5],
    [190, 40, 4],
    [272, 84, 6],
    [304, 170, 5],
    [232, 224, 6],
    [110, 210, 5],
    [58, 150, 4],
  ] as const;
  return (
    <svg className={`gl-art ${className}`} viewBox="0 0 360 270" aria-hidden="true" focusable="false" {...base}>
      <g strokeWidth="1" opacity="0.4">
        <circle cx="180" cy="135" r="46" strokeDasharray="2 6" />
        <circle cx="180" cy="135" r="92" strokeDasharray="2 8" />
        <circle cx="180" cy="135" r="132" strokeDasharray="2 10" />
      </g>
      <g strokeWidth="1" opacity="0.28">
        <path d="M92 92 190 40 272 84 304 170 232 224 110 210 58 150Z" />
      </g>
      <g strokeWidth="1.2" className="gl-art__flow">
        {nodes.map(([x, y], i) => (
          <path key={i} d={`M180 135 L${x} ${y}`} style={{ animationDelay: `${i * -1.4}s` }} />
        ))}
      </g>
      <g strokeWidth="1.2">
        {[0, 2, 4].map((i) => {
          const [x, y] = nodes[i];
          const gx = 180 + (x - 180) * 0.56;
          const gy = 135 + (y - 135) * 0.56;
          return <rect key={i} x={gx - 5} y={gy - 5} width="10" height="10" transform={`rotate(45 ${gx} ${gy})`} className="gl-art__gate" />;
        })}
      </g>
      <g>
        {nodes.map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} className="gl-art__node" style={{ ["--d" as string]: `${i * 0.45}s` }} />
        ))}
      </g>
      <circle cx="180" cy="135" r="18" strokeWidth="1.4" />
      <circle cx="180" cy="135" r="7" className="gl-art__core" />
    </svg>
  );
}

/** Digital products: three layered screens. */
export function ArtProduct({ className = "" }: P) {
  return (
    <svg className={`gl-art ${className}`} viewBox="0 0 360 270" aria-hidden="true" focusable="false" {...base}>
      <g className="gl-art__layer" style={{ ["--d" as string]: "0s" }} opacity="0.35" strokeWidth="1.2">
        <rect x="64" y="40" width="190" height="128" rx="14" />
      </g>
      <g className="gl-art__layer" style={{ ["--d" as string]: "-1.6s" }} opacity="0.6" strokeWidth="1.2">
        <rect x="96" y="70" width="190" height="128" rx="14" />
      </g>
      <g className="gl-art__layer" style={{ ["--d" as string]: "-3.2s" }} strokeWidth="1.3">
        <rect x="128" y="100" width="190" height="128" rx="14" className="gl-art__fill" />
        <path d="M128 126h190" opacity="0.5" />
        <circle cx="146" cy="113" r="2.6" />
        <circle cx="158" cy="113" r="2.6" />
        <circle cx="170" cy="113" r="2.6" />
        <path d="M148 150h70M148 166h46" opacity="0.7" />
        <rect x="148" y="186" width="54" height="22" rx="11" className="gl-art__pill" />
        <path d="M246 208v-34M266 208v-52M286 208v-24" strokeWidth="5" opacity="0.85" />
      </g>
    </svg>
  );
}

/** Cloud & platforms: stacked planes with a beam moving up the stack. */
export function ArtCloud({ className = "" }: P) {
  const planes = [196, 150, 104];
  return (
    <svg className={`gl-art ${className}`} viewBox="0 0 360 270" aria-hidden="true" focusable="false" {...base}>
      <path d="M180 52v178" strokeWidth="1" strokeDasharray="2 6" opacity="0.45" />
      {planes.map((y, i) => (
        <g key={y} strokeWidth="1.3" opacity={1 - i * 0.18}>
          <path d={`M180 ${y - 40}l78 40-78 40-78-40z`} className={i === 2 ? "gl-art__fill" : undefined} />
          <path d={`M102 ${y}v14l78 40 78-40v-14`} opacity="0.4" />
        </g>
      ))}
      <circle r="4" className="gl-art__beam" cx="180" cy="236" />
      <g strokeWidth="1" opacity="0.5">
        <path d="M262 80h40M262 80l-12 6M302 80l12-6" />
        <path d="M58 196h40M98 196l-12-6" />
      </g>
    </svg>
  );
}

/** Automation & data: sources, a processor, and packets travelling through. */
export function ArtFlow({ className = "" }: P) {
  return (
    <svg className={`gl-art ${className}`} viewBox="0 0 360 270" aria-hidden="true" focusable="false" {...base}>
      <g strokeWidth="1.2">
        <rect x="30" y="52" width="76" height="40" rx="10" />
        <rect x="30" y="116" width="76" height="40" rx="10" />
        <rect x="30" y="180" width="76" height="40" rx="10" />
        <rect x="146" y="98" width="68" height="74" rx="14" className="gl-art__fill" />
        <rect x="254" y="72" width="76" height="40" rx="10" />
        <rect x="254" y="158" width="76" height="40" rx="10" />
      </g>
      <g strokeWidth="1.2" opacity="0.55">
        <path d="M106 72c24 0 24 49 40 49M106 136h40M106 200c24 0 24-44 40-44" className="gl-art__flow" />
        <path d="M214 121c20 0 20-29 40-29M214 149c20 0 20 29 40 29" className="gl-art__flow" />
      </g>
      <g strokeWidth="1.2" opacity="0.5">
        <path d="M44 66h30M44 78h18M44 130h30M44 142h18M44 194h30M44 206h18" />
        <path d="M268 86h30M268 98h18M268 172h30M268 184h18" />
      </g>
      <path d="M160 135h40M160 123h24M160 147h30" strokeWidth="1.4" />
      <circle r="3.4" className="gl-art__packet gl-art__packet--a" />
      <circle r="3.4" className="gl-art__packet gl-art__packet--b" />
      <circle r="3.4" className="gl-art__packet gl-art__packet--c" />
    </svg>
  );
}

/* ---------------------------------------------------------------- products */

/** Mentis Atlas: a compass over a citation grid. */
export function EmblemAtlas({ className = "" }: P) {
  return (
    <svg className={`gl-art gl-art--emblem ${className}`} viewBox="0 0 120 120" aria-hidden="true" focusable="false" {...base}>
      <g strokeWidth="1" opacity="0.4">
        <path d="M10 60h100M60 10v100" />
        <path d="M24 24l72 72M96 24 24 96" strokeDasharray="2 4" />
      </g>
      <circle cx="60" cy="60" r="44" strokeWidth="1.2" />
      <circle cx="60" cy="60" r="30" strokeWidth="1" strokeDasharray="2 5" opacity="0.7" className="gl-art__spin" />
      <g className="gl-art__needle">
        <path d="M60 22 70 60 60 98 50 60Z" strokeWidth="1.4" />
        <path d="M60 22 70 60H50Z" className="gl-art__fill" />
      </g>
      <circle cx="60" cy="60" r="3.4" className="gl-art__core" />
      <g strokeWidth="1.4">
        <path d="M60 10v8M60 102v8M10 60h8M102 60h8" />
      </g>
    </svg>
  );
}

/** Mentis Interviews: a conversation made of waveform bars. */
export function EmblemInterviews({ className = "" }: P) {
  const bars = [18, 34, 52, 30, 62, 40, 24, 46, 28];
  return (
    <svg className={`gl-art gl-art--emblem ${className}`} viewBox="0 0 120 120" aria-hidden="true" focusable="false" {...base}>
      <path d="M22 20h76a10 10 0 0 1 10 10v44a10 10 0 0 1-10 10H58l-20 18V84H22a10 10 0 0 1-10-10V30a10 10 0 0 1 10-10Z" strokeWidth="1.3" />
      <g strokeWidth="4.5">
        {bars.map((h, i) => (
          <path
            key={i}
            d={`M${28 + i * 8.5} ${52 - h / 2}v${h}`}
            className="gl-art__bar"
            style={{ animationDelay: `${i * -0.35}s` }}
          />
        ))}
      </g>
      <circle cx="98" cy="26" r="3.4" className="gl-art__core" />
    </svg>
  );
}

/** Mentis Forge: an isometric part with construction lines. */
export function EmblemForge({ className = "" }: P) {
  return (
    <svg className={`gl-art gl-art--emblem ${className}`} viewBox="0 0 120 120" aria-hidden="true" focusable="false" {...base}>
      <circle cx="60" cy="60" r="48" strokeWidth="1" strokeDasharray="2 6" opacity="0.5" className="gl-art__spin" />
      <g strokeWidth="1.3">
        <path d="M60 22 94 41v38L60 98 26 79V41Z" />
        <path d="M26 41 60 60 94 41M60 60v38" />
        <path d="M60 22 94 41 60 60 26 41Z" className="gl-art__fill" />
      </g>
      <g strokeWidth="1" opacity="0.55">
        <path d="M8 60h18M94 60h18M60 4v18" strokeDasharray="2 3" />
      </g>
      <circle cx="94" cy="41" r="3" className="gl-art__core" />
      <circle cx="26" cy="79" r="3" className="gl-art__core" />
    </svg>
  );
}
