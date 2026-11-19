"use client";

import { useEffect, useRef } from "react";

/**
 * Page-level motion for the Maison homepage. Renders the scroll-progress bar and
 * wires the decorative effects that act on server-rendered markup:
 * scroll reveals, count-ups, the hero orb tilt and the process road.
 *
 * Content stays visible without JavaScript: reveals only hide elements once
 * `data-js` is set on the root.
 */
export function Motion() {
  const bar = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".mn-root");
    if (!root) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const cleanups: Array<() => void> = [];

    /* ---- scroll reveals ---- */
    const reveals = [...root.querySelectorAll<HTMLElement>(".mn-rv")];
    // Anything already on screen is marked in the same tick that hiding
    // starts, so above-the-fold content never flashes.
    for (const el of reveals) {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.94 && r.bottom > 0)
        el.classList.add("mn-in");
    }
    root.setAttribute("data-js", "");
    const revealIO = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("mn-in");
            revealIO.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    reveals.forEach(
      (el) => !el.classList.contains("mn-in") && revealIO.observe(el),
    );
    cleanups.push(() => {
      revealIO.disconnect();
      root.removeAttribute("data-js");
    });

    /* ---- count-ups ---- */
    const counters = [...root.querySelectorAll<HTMLElement>("[data-count]")];
    let raf = 0;
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
            const p = Math.min(1, (t - t0) / 1500);
            el.textContent = String(Math.round(end * (1 - Math.pow(1 - p, 4))));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          el.textContent = "0";
          raf = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 },
    );
    counters.forEach((el) => countIO.observe(el));
    cleanups.push(() => {
      countIO.disconnect();
      cancelAnimationFrame(raf);
    });

    /* ---- hero orb tilt (fine pointers only) ---- */
    const orb = root.querySelector<HTMLElement>(".mn-orb");
    const hero = root.querySelector<HTMLElement>(".mn-hero");
    if (orb && hero && !reduce && window.matchMedia("(hover: hover)").matches) {
      const move = (e: PointerEvent) => {
        const r = orb.getBoundingClientRect();
        const nx = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
        const ny = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
        orb.style.setProperty("--ry", `${(nx * 26).toFixed(2)}deg`);
        orb.style.setProperty("--rx", `${(-ny * 22).toFixed(2)}deg`);
      };
      const leave = () => {
        orb.style.setProperty("--rx", "0deg");
        orb.style.setProperty("--ry", "0deg");
      };
      hero.addEventListener("pointermove", move);
      hero.addEventListener("pointerleave", leave);
      cleanups.push(() => {
        hero.removeEventListener("pointermove", move);
        hero.removeEventListener("pointerleave", leave);
      });
    }

    /* ---- soft gold spotlight that follows the pointer over cards ---- */
    if (!reduce && window.matchMedia("(hover: hover)").matches) {
      const SURFACES = ".mn-whys__i";
      let current: HTMLElement | null = null;
      const clear = () => {
        current?.style.removeProperty("--mx");
        current?.style.removeProperty("--my");
        current = null;
      };
      const onMove = (e: PointerEvent) => {
        const el =
          (e.target as Element | null)?.closest<HTMLElement>(SURFACES) ?? null;
        if (el !== current) clear();
        if (!el) return;
        current = el;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      };
      root.addEventListener("pointermove", onMove);
      root.addEventListener("pointerleave", clear);
      cleanups.push(() => {
        root.removeEventListener("pointermove", onMove);
        root.removeEventListener("pointerleave", clear);
        clear();
      });
    }

    /* ---- scroll progress bar + process road ---- */
    const road = root.querySelector<HTMLElement>(".mn-road");
    const glow = root.querySelector<SVGPathElement>("#mn-roadGlow");
    const roadSvg = root.querySelector<SVGElement>(".mn-road__svg");
    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) {
        bar.current.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
      }
      if (
        road &&
        glow &&
        roadSvg &&
        getComputedStyle(roadSvg).display !== "none"
      ) {
        const r = road.getBoundingClientRect();
        const p = Math.min(
          1,
          Math.max(
            0,
            (window.innerHeight * 0.85 - r.top) /
              (r.height + window.innerHeight * 0.25),
          ),
        );
        glow.style.strokeDashoffset = (1 - p).toFixed(4);
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
    <div className="mn-progress" aria-hidden="true">
      <i ref={bar} />
    </div>
  );
}
