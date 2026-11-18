"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  DIRECTIONS,
  MONO_STACK,
  TOKEN_KEYS,
  TYPES,
  type Direction,
  type TypePair,
} from "./palettes";
import "./picker.css";

/**
 * Palette + type selector for every homepage version (/, /v3 to /v7).
 *
 * All colours and type pairings come from banjubits-brand-lab (see palettes.ts).
 * Picking one sets `--t-*` custom properties on <html>. Each version's CSS maps
 * its own variables onto those, falling back to the colours it was built with,
 * so "As built" leaves a version untouched.
 *
 * The choice is saved to localStorage and re-applied before first paint by
 * THEME_BOOT (inlined in the root layout), so it follows you between versions.
 */

const VERSIONS = [
  { href: "/", n: "V1", name: "Harbour Flow", sub: "Light, navy + teal, blueprint-led" },
  { href: "/v3", n: "V3", name: "Deep Harbour", sub: "Dark hero, 3D orb, mint" },
  { href: "/v2", n: "V2", name: "Home", sub: "Ledger · warm paper, saffron" },
  { href: "/v4", n: "V4", name: "Cobalt", sub: "Bright, photo-led, white" },
  { href: "/v5", n: "V5", name: "Ivory & Ink", sub: "Editorial, brass detailing, Fraunces" },
  { href: "/v6", n: "V6", name: "Gilt", sub: "Work-first, serif italic accents" },
  { href: "/v7", n: "V7", name: "Ledger Route", sub: "Ledger palette, compass-led, no hero" },
] as const;

type Mode = "light" | "dark";
type Selection = { palette: string; mode: Mode; type: string };

const STORE = "bb-theme";
const DEFAULT: Selection = { palette: "built", mode: "light", type: "built" };

// next/font families that the root layout registers. Literal names such as
// "Inter" would not resolve, because next/font renames its @font-face families.
const TYPE_VARS: Record<string, { display: string; body: string }> = {
  inter: { display: "var(--font-text)", body: "var(--font-text)" },
  manrope: { display: "var(--bl-manrope)", body: "var(--font-text)" },
  jakarta: { display: "var(--bl-jakarta)", body: "var(--bl-jakarta)" },
  fraunces: { display: "var(--bl-fraunces)", body: "var(--font-text)" },
};

const kebab = (s: string) => s.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase());

function stackFor(t: TypePair, which: "display" | "body") {
  const fallback = t[which].split(",").slice(1).join(",").trim();
  return `${TYPE_VARS[t.id][which]}${fallback ? ", " + fallback : ""}`;
}

function resolve(sel: Selection) {
  const vars: Record<string, string> = {};
  const attrs: Record<string, string> = {};

  const dir = DIRECTIONS.find((d) => d.id === sel.palette);
  if (dir) {
    const tokens = sel.mode === "dark" ? dir.dark : dir.light;
    for (const k of TOKEN_KEYS) vars[`--t-${kebab(k)}`] = tokens[k];
    // Derived: the warning colour lifted so it stays readable on dark surfaces.
    vars["--t-warn-lift"] = `color-mix(in srgb, ${tokens.warn} 55%, #ffffff)`;
    attrs["data-bl-palette"] = dir.id;
    attrs["data-bl-mode"] = sel.mode;
  }

  const type = TYPES.find((t) => t.id === sel.type);
  if (type) {
    vars["--t-display"] = stackFor(type, "display");
    vars["--t-text"] = stackFor(type, "body");
    vars["--t-mono"] = `var(--bl-geist-mono), ${MONO_STACK}`;
    attrs["data-bl-type"] = type.id;
  }
  return { vars, attrs };
}

function paint(sel: Selection) {
  const root = document.documentElement;
  // Clear whatever an earlier selection set.
  for (const name of Array.from(root.style)) {
    if (name.startsWith("--t-")) root.style.removeProperty(name);
  }
  for (const a of ["data-bl-palette", "data-bl-mode", "data-bl-type"]) {
    root.removeAttribute(a);
  }
  const { vars, attrs } = resolve(sel);
  for (const [k, v] of Object.entries(vars)) root.style.setProperty(k, v);
  for (const [k, v] of Object.entries(attrs)) root.setAttribute(k, v);
  root.style.colorScheme = sel.mode === "dark" && vars["--t-bg"] ? "dark" : "";
  try {
    localStorage.setItem(STORE, JSON.stringify({ sel, vars, attrs }));
  } catch {
    /* storage unavailable: the choice just won't persist */
  }
}

// ---- tiny external store, so the saved choice is read without an effect ----
let memory: Selection = DEFAULT;
let cache: { raw: string | null; sel: Selection } | null = null;
const listeners = new Set<() => void>();

function parse(raw: string | null): Selection {
  if (!raw) return memory;
  try {
    const saved = JSON.parse(raw)?.sel as Partial<Selection> | undefined;
    return saved ? { ...DEFAULT, ...saved } : DEFAULT;
  } catch {
    return DEFAULT;
  }
}

function getSnapshot(): Selection {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(STORE);
  } catch {
    /* ignore */
  }
  if (!cache || cache.raw !== raw) cache = { raw, sel: parse(raw) };
  return raw === null ? memory : cache.sel;
}
const getServerSnapshot = () => DEFAULT;

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key !== STORE) return;
    paint(getSnapshot()); // another tab changed it: follow
    cb();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

function setSelection(sel: Selection) {
  memory = sel;
  paint(sel);
  listeners.forEach((l) => l());
}

function Swatches({ d, mode }: { d: Direction; mode: Mode }) {
  const t = mode === "dark" ? d.dark : d.light;
  const cols = [t.bg, t.ink, t.primary, t.accent, t.inverse];
  return (
    <span className="bl-sw" aria-hidden="true">
      {cols.map((c, i) => (
        <i key={i} style={{ background: c }} />
      ))}
    </span>
  );
}

export default function ThemePicker() {
  const [open, setOpen] = useState(false);
  const sel = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const panel = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Next's own scroll handling lands near the bottom on these pages (the version
  // links use scroll={false}), so reset to the top once the new version is in.
  const lastPath = useRef(pathname);
  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const update = useCallback(
    (patch: Partial<Selection>) => setSelection({ ...getSnapshot(), ...patch }),
    [],
  );

  const dir = DIRECTIONS.find((d) => d.id === sel.palette);
  const type = TYPES.find((t) => t.id === sel.type);
  const ver = VERSIONS.find((v) => v.href === pathname);
  const label = `${ver ? ver.n + " · " : ""}${dir ? dir.name : "As built"}${dir && sel.mode === "dark" ? " · dark" : ""} / ${type ? type.name : "As built"}`;
  const modified = sel.palette !== "built" || sel.type !== "built";

  return (
    <div className="bl-root" data-open={open || undefined}>
      <button
        type="button"
        className="bl-fab"
        aria-expanded={open}
        aria-controls="bl-panel"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="bl-fab__dots" aria-hidden="true">
          {dir ? (
            <Swatches d={dir} mode={sel.mode} />
          ) : (
            <span className="bl-sw">
              <i style={{ background: "#fff" }} />
              <i style={{ background: "#999" }} />
              <i style={{ background: "#555" }} />
            </span>
          )}
        </span>
        <span className="bl-fab__txt">
          <b>Palette &amp; type</b>
          <small>{label}</small>
        </span>
      </button>

      {open && (
        <div
          id="bl-panel"
          ref={panel}
          className="bl-panel"
          role="dialog"
          aria-label="Palette and type selector"
        >
          <div className="bl-head">
            <div>
              <b>Palette &amp; type</b>
              <small>From Banjubits Brand Lab</small>
            </div>
            <button
              type="button"
              className="bl-x"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="bl-scroll">
            <section>
              <h4>Version</h4>
              <nav className="bl-list" aria-label="Homepage version">
                {VERSIONS.map((v) => (
                  <Link
                    key={v.href}
                    href={v.href}
                    scroll={false}
                    className="bl-opt"
                    aria-current={pathname === v.href ? "page" : undefined}
                  >
                    <span className="bl-ver" aria-hidden="true">
                      {v.n}
                    </span>
                    <span className="bl-opt__t">
                      <b>{v.name}</b>
                      <small>{v.sub}</small>
                    </span>
                  </Link>
                ))}
              </nav>
            </section>

            <section>
              <h4>Palette</h4>
              <div className="bl-list" role="radiogroup" aria-label="Palette">
                <button
                  type="button"
                  role="radio"
                  aria-checked={sel.palette === "built"}
                  className="bl-opt"
                  onClick={() => update({ palette: "built" })}
                >
                  <span className="bl-sw bl-sw--none" aria-hidden="true">
                    <i />
                  </span>
                  <span className="bl-opt__t">
                    <b>As built</b>
                    <small>This version&rsquo;s own colours</small>
                  </span>
                </button>
                {DIRECTIONS.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    role="radio"
                    aria-checked={sel.palette === d.id}
                    className="bl-opt"
                    onClick={() => update({ palette: d.id })}
                  >
                    <Swatches d={d} mode={sel.mode} />
                    <span className="bl-opt__t">
                      <b>
                        <em>{d.n}</em> {d.name}
                      </b>
                      <small>{d.tag}</small>
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h4>Mode</h4>
              <div className="bl-seg" role="radiogroup" aria-label="Mode">
                {(["light", "dark"] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    role="radio"
                    aria-checked={sel.mode === m}
                    disabled={sel.palette === "built"}
                    onClick={() => update({ mode: m })}
                  >
                    {m === "light" ? "Light" : "Dark"}
                  </button>
                ))}
              </div>
              {sel.palette === "built" && (
                <p className="bl-hint">Pick a palette to switch mode.</p>
              )}
            </section>

            <section>
              <h4>Type</h4>
              <div className="bl-list" role="radiogroup" aria-label="Type pairing">
                <button
                  type="button"
                  role="radio"
                  aria-checked={sel.type === "built"}
                  className="bl-opt"
                  onClick={() => update({ type: "built" })}
                >
                  <span className="bl-aa" aria-hidden="true">
                    Aa
                  </span>
                  <span className="bl-opt__t">
                    <b>As built</b>
                    <small>This version&rsquo;s own fonts</small>
                  </span>
                </button>
                {TYPES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    role="radio"
                    aria-checked={sel.type === t.id}
                    className="bl-opt"
                    onClick={() => update({ type: t.id })}
                  >
                    <span
                      className="bl-aa"
                      aria-hidden="true"
                      style={{
                        fontFamily: stackFor(t, "display"),
                        fontWeight: t.dw > 600 ? 650 : 500,
                      }}
                    >
                      Aa
                    </span>
                    <span className="bl-opt__t">
                      <b>{t.name}</b>
                      <small>{t.sub}</small>
                    </span>
                  </button>
                ))}
              </div>
            </section>
          </div>

          <div className="bl-foot">
            <button
              type="button"
              className="bl-reset"
              disabled={!modified && sel.mode === "light"}
              onClick={() => setSelection(DEFAULT)}
            >
              Reset to as built
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
