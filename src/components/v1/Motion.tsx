"use client";

import { useEffect } from "react";

/**
 * Page-level motion for v1. Progressive: content is fully visible without JavaScript (reveals only
 * hide elements once `data-js` is on the root) and every effect is skipped under
 * prefers-reduced-motion.
 *   - blur-and-rise reveals on scroll
 *   - count-up figures in the proof stage
 *   - magnetic buttons that lean towards the pointer
 *   - a thin reading-progress line
 */
export function Motion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".hb-root");
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    // Reveals: anything already on screen shows at once, the rest on scroll.
    const reveals = [...root.querySelectorAll<HTMLElement>(".hb-rv")];
    for (const el of reveals) {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.95 && r.bottom > 0) el.classList.add("hb-in");
    }
    if (!reduce) root.setAttribute("data-js", "");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            e.target.classList.add("hb-in");
            io.unobserve(e.target);
          }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    reveals.forEach((el) => !el.classList.contains("hb-in") && io.observe(el));
    cleanups.push(() => {
      io.disconnect();
      root.removeAttribute("data-js");
    });

    if (!reduce) {
      // Count-ups: data-count holds the end value; symbols around it stay in the markup.
      const rafs = new Set<number>();
      const countIO = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            countIO.unobserve(e.target);
            const el = e.target as HTMLElement;
            const end = Number(el.dataset.count);
            const t0 = performance.now() + 150;
            el.textContent = "0";
            const tick = (t: number) => {
              const p = Math.min(1, Math.max(0, (t - t0) / 1600));
              el.textContent = Math.round(end * (1 - Math.pow(1 - p, 4))).toLocaleString("en-US");
              if (p < 1) rafs.add(requestAnimationFrame(tick));
            };
            rafs.add(requestAnimationFrame(tick));
          }
        },
        { threshold: 0.6 },
      );
      root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => countIO.observe(el));
      cleanups.push(() => {
        countIO.disconnect();
        rafs.forEach(cancelAnimationFrame);
      });

      // Magnetic buttons (fine pointers only).
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        root.querySelectorAll<HTMLElement>("[data-magnet]").forEach((el) => {
          const move = (e: PointerEvent) => {
            const r = el.getBoundingClientRect();
            const x = (e.clientX - (r.left + r.width / 2)) / r.width;
            const y = (e.clientY - (r.top + r.height / 2)) / r.height;
            el.style.transform = `translate(${x * 10}px, ${y * 8}px)`;
          };
          const leave = () => {
            el.style.transform = "";
          };
          el.addEventListener("pointermove", move);
          el.addEventListener("pointerleave", leave);
          cleanups.push(() => {
            el.removeEventListener("pointermove", move);
            el.removeEventListener("pointerleave", leave);
          });
        });
      }
    }

    // Reading progress.
    const bar = root.querySelector<HTMLElement>(".hb-prog");
    if (bar) {
      const onScroll = () => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${h > 0 ? Math.min(1, window.scrollY / h) : 0})`;
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    return () => cleanups.forEach((c) => c());
  }, []);

  return null;
}
