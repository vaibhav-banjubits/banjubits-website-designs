"use client";

import { useEffect, useRef } from "react";

/**
 * Page-level motion: scroll progress, reveals (fade, masked lines, image
 * curtains), count-ups and gentle image parallax. Content stays visible
 * without JavaScript: reveals only hide elements once `data-js` is set.
 */
export function Motion() {
  const bar = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".sg-root");
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    /* reveals */
    const reveals = [...root.querySelectorAll<HTMLElement>(".sg-rv, .sg-reveal, .sg-hero__title")];
    for (const el of reveals) {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.94 && r.bottom > 0) el.classList.add("sg-in");
    }
    root.setAttribute("data-js", "");
    // Clip-path curtains report no visible area while closed, so those are
    // tracked through their parent element instead.
    const proxy = new Map<Element, HTMLElement>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            (proxy.get(e.target) ?? e.target).classList.add("sg-in");
            io.unobserve(e.target);
          }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    reveals.forEach((el) => {
      if (el.classList.contains("sg-in")) return;
      const watch = el.classList.contains("sg-reveal") && el.parentElement ? el.parentElement : el;
      proxy.set(watch, el);
      io.observe(watch);
    });
    cleanups.push(() => {
      io.disconnect();
      root.removeAttribute("data-js");
    });

    /* count-ups */
    const rafs = new Set<number>();
    const countIO = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          countIO.unobserve(e.target);
          if (reduce) continue;
          const el = e.target as HTMLElement;
          const end = Number(el.dataset.count);
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / 1800);
            el.textContent = String(Math.round(end * (1 - Math.pow(1 - p, 4))));
            if (p < 1) rafs.add(requestAnimationFrame(tick));
          };
          el.textContent = "0";
          rafs.add(requestAnimationFrame(tick));
        }
      },
      { threshold: 0.6 },
    );
    root.querySelectorAll("[data-count]").forEach((el) => countIO.observe(el));
    cleanups.push(() => {
      countIO.disconnect();
      rafs.forEach(cancelAnimationFrame);
    });

    /* progress bar + parallax */
    const para = reduce ? [] : [...root.querySelectorAll<HTMLElement>("[data-parallax]")];
    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      const max = document.documentElement.scrollHeight - vh;
      if (bar.current)
        bar.current.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
      for (const el of para) {
        const box = el.parentElement!.getBoundingClientRect();
        if (box.bottom < 0 || box.top > vh) continue;
        const k = Number(el.dataset.parallax) || 0.1;
        const off = (box.top + box.height / 2 - vh / 2) * -k;
        el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)`;
      }
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
    <div className="sg-progress" aria-hidden="true">
      <i ref={bar} />
    </div>
  );
}
