"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type PointerEvent,
  type ReactNode,
} from "react";
import type { Service } from "@/lib/content";

const FINE = "(hover: hover) and (pointer: fine)";

function subscribeFine(cb: () => void) {
  const mq = window.matchMedia(FINE);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

/** True on devices with a precise pointer that can hover (not touch). */
function useFinePointer() {
  return useSyncExternalStore(
    subscribeFine,
    () => window.matchMedia(FINE).matches,
    () => false,
  );
}

/**
 * Moves `ref` toward the latest pointer position with a little easing.
 * The animation loop only runs while `active` is true.
 */
function useFollower(active: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const primed = useRef(false);

  useEffect(() => {
    if (!active) {
      primed.current = false;
      return;
    }
    let raf = 0;
    const tick = () => {
      const t = target.current;
      const p = pos.current;
      p.x += (t.x - p.x) * 0.2;
      p.y += (t.y - p.y) * 0.2;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  const track = useCallback((x: number, y: number) => {
    target.current = { x, y };
    if (!primed.current) {
      pos.current = { x, y };
      primed.current = true;
    }
  }, []);

  return { ref, track };
}

/**
 * Remembers the last pointer position and, while `active`, calls `check`
 * again on scroll: scrolling moves content under a still pointer without
 * firing any pointer event, which would otherwise leave a hover effect
 * stranded over the wrong section.
 */
function useScrollRecheck(
  active: boolean,
  check: (x: number, y: number, el: Element | null) => void,
) {
  const last = useRef<{ x: number; y: number } | null>(null);
  const checkRef = useRef(check);
  useEffect(() => {
    checkRef.current = check;
  });

  useEffect(() => {
    if (!active) return;
    const onScroll = () => {
      const p = last.current;
      if (p) checkRef.current(p.x, p.y, document.elementFromPoint(p.x, p.y));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);

  return (e: PointerEvent) => {
    last.current = { x: e.clientX, y: e.clientY };
    check(e.clientX, e.clientY, e.target as Element);
  };
}

/* ------------------------------------------------------------------ */

/**
 * Shows a "View case" disc that follows the pointer over any descendant
 * marked with `data-cursor`. Decorative only; the cards stay normal links.
 */
export function CursorZone({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const fine = useFinePointer();
  const [on, setOn] = useState(false);
  const { ref, track } = useFollower(fine && on);
  const zone = useRef<HTMLDivElement>(null);

  const onMove = useScrollRecheck(fine && on, (x, y, el) => {
    track(x, y);
    const target = el?.closest("[data-cursor]");
    setOn(!!target && !!zone.current?.contains(target));
  });

  return (
    <div
      ref={zone}
      className={className}
      data-cursor-zone={fine || undefined}
      onPointerMove={fine ? onMove : undefined}
      onPointerLeave={() => setOn(false)}
    >
      {children}
      {fine ? (
        <div ref={ref} className="cursor" aria-hidden="true">
          <span className="cursor__disc" data-on={on}>
            View case
          </span>
        </div>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */

/**
 * Services list. On desktop, hovering a row floats that service's photo
 * behind the row's title, following the pointer but kept inside the title
 * column so it never covers the description. The photo is decoration only.
 */
export function ServiceList({ services }: { services: Service[] }) {
  const fine = useFinePointer();
  const [active, setActive] = useState<number | null>(null);
  const { ref, track } = useFollower(fine && active !== null);
  const zone = useRef<HTMLDivElement>(null);

  const onMove = useScrollRecheck(fine && active !== null, (x, y, el) => {
    const z = zone.current;
    if (!z) return;
    const row = el?.closest<HTMLElement>(".svc");
    if (!row || !z.contains(row)) {
      setActive(null);
      return;
    }
    setActive(Number(row.dataset.index));
    const title = row.querySelector(".svc__title")?.getBoundingClientRect();
    let px = x;
    if (title) {
      const half = 130; // half the preview width
      px = Math.min(Math.max(px, title.left + half), title.right - half);
    }
    const zr = z.getBoundingClientRect();
    track(px - zr.left, y - zr.top);
  });

  return (
    <div
      ref={zone}
      className="svc-zone"
      onPointerMove={fine ? onMove : undefined}
      onPointerLeave={() => setActive(null)}
    >
      <ol className="svc-list">
        {services.map((s, i) => (
          <li
            key={s.title}
            className="svc rv"
            data-index={i}
            data-active={active === i || undefined}
          >
            <span className="svc__no">0{i + 1}</span>
            <h3 className="svc__title">{s.title}</h3>
            <div className="svc__body">
              <p>{s.text}</p>
              <ul>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      {fine ? (
        <div ref={ref} className="peek" aria-hidden="true">
          <div className="peek__frame" data-on={active !== null}>
            {services.map((s, i) => (
              <Image
                key={s.title}
                src={s.image}
                alt=""
                fill
                sizes="300px"
                className="peek__img"
                data-on={active === i}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
