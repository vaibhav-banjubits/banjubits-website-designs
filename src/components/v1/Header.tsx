"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV } from "./data";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Scroll-spy: highlight the nav item for the section in the middle of the screen (homepage only).
  useEffect(() => {
    const ids = NAV.map((n) => n.href.split("#")[1]).filter(Boolean);
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1020px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.documentElement.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="hb-hdr" data-scrolled={scrolled || undefined} data-open={open || undefined}>
      <div className="hb-hdr__bar hb-wrap">
        <Link href="/v1" className="hb-hdr__logo" aria-label="Banjubits home" onClick={close}>
          <Logo />
        </Link>

        <nav className="hb-hdr__nav" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              aria-current={active && n.href.endsWith(`#${active}`) ? "true" : undefined}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hb-hdr__end">
          <Link href="/v1#start" className="hb-btn hb-btn--sm hb-hdr__cta">
            Start a project
          </Link>
          <button
            type="button"
            className="hb-hdr__burger"
            aria-expanded={open}
            aria-controls="hb-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="hb-sr">{open ? "Close menu" : "Open menu"}</span>
            <i />
            <i />
            <i />
          </button>
        </div>
      </div>

      <div id="hb-menu" className="hb-menu" hidden={!open}>
        <nav aria-label="Mobile">
          {NAV.map((n, i) => (
            <Link key={n.label} href={n.href} onClick={close}>
              <span>0{i + 1}</span>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/v1#start" className="hb-btn hb-menu__cta" onClick={close}>
          Start a project
          <span className="hb-btn__ic">
            <Icon n="arrow" />
          </span>
        </Link>
      </div>
    </header>
  );
}
