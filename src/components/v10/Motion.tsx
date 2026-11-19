"use client";

import { useEffect, useRef } from "react";

/**
 * Page-level motion: scroll-progress bar and scroll reveals. Content stays visible
 * without JavaScript: reveals only hide elements once `data-js` is set on the root.
 */
export function Motion() {
  const bar = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".st-root");
    if (!root) return;
    const cleanups: Array<() => void> = [];

    const reveals = [...root.querySelectorAll<HTMLElement>(".st-rv")];
    for (const el of reveals) {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.94 && r.bottom > 0) el.classList.add("st-in");
    }
    root.setAttribute("data-js", "");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("st-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    reveals.forEach((el) => !el.classList.contains("st-in") && io.observe(el));
    cleanups.push(() => {
      io.disconnect();
      root.removeAttribute("data-js");
    });

    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="st-progress" aria-hidden="true">
      <i ref={bar} />
    </div>
  );
}

/** Counts up to `to` once it scrolls into view. Shows the final number without JS or with reduced motion. */
export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer = 0;
    const show = (v: number) => {
      el.textContent = `${v}${suffix}`;
    };
    // The real value stays on screen until the observer reports the number is below the fold,
    // so if the observer never reports (hidden tab, old browser) nobody sees a stuck zero.
    let started = false;
    const io = new IntersectionObserver(
      ([e]) => {
        if (started) return;
        if (!e.isIntersecting) {
          show(0);
          return;
        }
        started = true;
        io.disconnect();
        const t0 = Date.now();
        const dur = 1400;
        // setInterval (not rAF) so it still finishes if the tab is throttled.
        timer = window.setInterval(() => {
          const p = Math.min(1, (Date.now() - t0) / dur);
          show(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p >= 1) window.clearInterval(timer);
        }, 40);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearInterval(timer);
      show(to);
    };
  }, [to, suffix]);

  return (
    <span ref={ref}>
      {to}
      {suffix}
    </span>
  );
}
