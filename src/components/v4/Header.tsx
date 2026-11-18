"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "Products", href: "#products" },
  { label: "Insights", href: "#insights" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 640);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll(".sg-root main > section[id]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 960px)");
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
    <header
      className="sg-hdr"
      data-scrolled={scrolled || undefined}
      data-hidden={(hidden && !open) || undefined}
      data-open={open || undefined}
    >
      <div className="sg-hdr__bar">
        <a href="#top" className="sg-hdr__logo" aria-label="Banjubits, back to top" onClick={close}>
          <Logo />
        </a>
        <nav className="sg-hdr__nav" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} aria-current={active === n.href ? "true" : undefined}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="sg-hdr__end">
          <a href="#contact" className="sg-hdr__cta">
            <span>Start a project</span>
            <i aria-hidden="true">
              <Icon n="arrow-ur" />
            </i>
          </a>
          <button
            type="button"
            className="sg-hdr__burger"
            aria-expanded={open}
            aria-controls="sg-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sg-sr">{open ? "Close menu" : "Open menu"}</span>
            <i />
            <i />
          </button>
        </div>
      </div>

      <div id="sg-menu" className="sg-menu" hidden={!open}>
        <nav aria-label="Mobile">
          {NAV.concat({ label: "Contact", href: "#contact" }).map((n, i) => (
            <a key={n.href} href={n.href} onClick={close} style={{ ["--i" as string]: i }}>
              <span>({String(i + 1).padStart(2, "0")})</span>
              {n.label}
            </a>
          ))}
        </nav>
        <a href="mailto:coreops@banjubits.com" className="sg-menu__mail" onClick={close}>
          coreops@banjubits.com
        </a>
      </div>
    </header>
  );
}
