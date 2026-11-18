"use client";

import { useEffect, useState } from "react";
import { email, nav } from "@/lib/content";
import { Logo } from "./bits";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<string | null>(null);

  // Solid background once scrolled; tuck away while scrolling down,
  // come back as soon as the visitor scrolls up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      if (Math.abs(y - last) < 8) return;
      setHidden(y > last && y > 320);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mark the nav item for the section currently in the middle of the screen.
  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setCurrent(e.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));

    // Clear the marker above the first section.
    const top = document.getElementById("top");
    const topIo = new IntersectionObserver(
      ([e]) => e.isIntersecting && setCurrent(null),
      { rootMargin: "0px 0px -60% 0px" },
    );
    if (top) topIo.observe(top);

    return () => {
      io.disconnect();
      topIo.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className="hdr"
      data-scrolled={scrolled}
      data-hidden={hidden && !open}
      data-open={open}
    >
      <div className="wrap hdr__in">
        <Logo />

        <nav className="hdr__nav" aria-label="Primary">
          {nav.map((l) => (
            <a
              key={l.label}
              href={l.href}
              aria-current={current === l.href.slice(1) ? "true" : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hdr__end">
          <a href="#contact" className="btn btn--dark btn--sm hdr__cta">
            Start a project
          </a>
          <button
            type="button"
            className="hdr__burger"
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <div id="menu" className="menu" hidden={!open}>
        <div className="wrap menu__in">
          <nav aria-label="Mobile">
            {nav.map((l, i) => (
              <a key={l.label} href={l.href} onClick={close}>
                <span className="menu__no">0{i + 1}</span>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="menu__foot">
            <a href="#contact" className="btn btn--primary" onClick={close}>
              Start a project
            </a>
            <a href={`mailto:${email}`} className="menu__mail">
              {email}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
