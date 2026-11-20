"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import "./picker.css";

/**
 * Version switcher for the homepage concepts (/v1 to /v4). It used to include a
 * palette and font selector; that was removed, so each version shows its own colours
 * and type.
 */

const VERSIONS = [
  { href: "/v1", n: "V1", name: "Harbour Flow", sub: "Light, navy + teal, blueprint-led" },
  { href: "/v2", n: "V2", name: "Gilt", sub: "Work-first, serif italic accents" },
  { href: "/v3", n: "V3", name: "Ledger Route", sub: "Ledger palette, compass-led, no hero" },
  { href: "/v4", n: "V4", name: "Harbour Route", sub: "V3 layout in the V1 navy + teal palette" },
] as const;

export default function ThemePicker() {
  const [open, setOpen] = useState(false);
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

  const ver = VERSIONS.find((v) => v.href === pathname);

  return (
    <div className="bl-root" data-open={open || undefined}>
      <button
        type="button"
        className="bl-fab"
        aria-expanded={open}
        aria-controls="bl-panel"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="bl-fab__txt">
          <b>Versions</b>
          <small>{ver ? `${ver.n} · ${ver.name}` : "Choose a version"}</small>
        </span>
      </button>

      {open && (
        <div id="bl-panel" className="bl-panel" role="dialog" aria-label="Version selector">
          <div className="bl-head">
            <div>
              <b>Versions</b>
              <small>Homepage concepts</small>
            </div>
            <button type="button" className="bl-x" aria-label="Close" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>

          <div className="bl-scroll">
            <section>
              <nav className="bl-list" aria-label="Homepage version">
                {VERSIONS.map((v) => (
                  <Link
                    key={v.href}
                    href={v.href}
                    scroll={false}
                    className="bl-opt"
                    aria-current={pathname === v.href ? "page" : undefined}
                  >
                    <span className="bl-opt__t">
                      <b>
                        {v.n} · {v.name}
                      </b>
                      <small>{v.sub}</small>
                    </span>
                  </Link>
                ))}
              </nav>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
