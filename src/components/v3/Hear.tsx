"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { pains } from "./data";

const STEP = 5500; // ms each slide rests before gliding to the next
const n = pains.length;
// The first slide is repeated at the end, so after the last one the track keeps gliding
// forward and then snaps back to the start without anyone seeing a jump.
const slides = [...pains, pains[0]];

/** Worry → answer, one at a time, on a track that glides sideways by itself. */
export function Hear() {
  const [i, setI] = useState(0); // 0..n (n is the repeated first slide)
  const [anim, setAnim] = useState(true);
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const playing = !paused && !reduce;
  useEffect(() => {
    if (!playing) return;
    timer.current = setTimeout(() => {
      setAnim(true);
      setI((v) => Math.min(v + 1, n));
    }, STEP);
    return () => clearTimeout(timer.current);
  }, [playing, i]);

  // Arrived on the repeated slide: snap back to the real first one, with no transition.
  // The timeout is a safety net in case the browser never fires transitionend.
  const onEnd = useCallback(() => {
    if (i === n) {
      setAnim(false);
      setI(0);
    }
  }, [i]);
  useEffect(() => {
    if (i !== n) return;
    const t = setTimeout(onEnd, reduce ? 0 : 1300);
    return () => clearTimeout(t);
  }, [i, onEnd, reduce]);

  const step = (dir: 1 | -1) => {
    if (dir === 1) {
      setAnim(true);
      setI((v) => Math.min(v + 1, n));
      return;
    }
    if (i === 0) {
      // jump to the repeated slide, then glide back one
      setAnim(false);
      setI(n);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnim(true);
          setI(n - 1);
        }),
      );
    } else {
      setAnim(true);
      setI(i - 1);
    }
  };

  const k = i % n;

  return (
    <section className="dh-sec dh-sec--dark dh-hear" id="hear">
      <div className="dh-hear__bg" aria-hidden="true" />
      <div className="dh-wrap">
        <header className="dh-head dh-head--dark">
          <h2 className="dh-h2 dh-rv">
            Sound familiar? <span>Here is how we fix it.</span>
          </h2>
        </header>

        <div
          className="dh-slider dh-rv"
          role="group"
          aria-roledescription="carousel"
          aria-label="What leaders tell us, and our answers"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") step(1);
            if (e.key === "ArrowLeft") step(-1);
          }}
        >
          {/* Only the text area pauses on hover, so clicking the controls never freezes the progress bar. */}
          <div
            className="dh-slider__view"
            onPointerEnter={() => setPaused(true)}
            onPointerLeave={() => setPaused(false)}
          >
            <div
              className={`dh-slider__track${anim && !reduce ? " dh-is-anim" : ""}`}
              style={{ transform: `translateX(-${i * 100}%)` }}
              onTransitionEnd={onEnd}
            >
              {slides.map((p, idx) => (
                <div className="dh-slide" key={idx} aria-hidden={idx !== i && !(i === n && idx === 0)} >
                  <div className="dh-slide__worry">
                    <small>Leaders tell us</small>
                    <p>“{p.q}”</p>
                  </div>
                  <span className="dh-slide__rule" aria-hidden="true" />
                  <div className="dh-slide__fix">
                    <small>Our answer</small>
                    <h3>{p.answer}</h3>
                    <p>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dh-slider__bar">
            <span className="dh-slider__count" aria-hidden="true">
              <b>0{k + 1}</b> / 0{n}
            </span>
            <div className="dh-slider__dots" role="tablist" aria-label="Choose a slide">
              {pains.map((x, d) => (
                <button
                  key={x.q}
                  type="button"
                  role="tab"
                  aria-selected={d === k}
                  aria-label={`Slide ${d + 1}: ${x.answer}`}
                  onClick={() => {
                    setAnim(true);
                    setI(d);
                  }}
                >
                  {d === k && !reduce && (
                    <i
                      key={i}
                      className={paused ? "dh-is-paused" : ""}
                      style={{ animationDuration: `${STEP}ms` }}
                    />
                  )}
                </button>
              ))}
            </div>
            <div className="dh-slider__btns">
              <button type="button" onClick={() => step(-1)} aria-label="Previous">
                <Icon n="chevron-left" />
              </button>
              <button type="button" onClick={() => step(1)} aria-label="Next">
                <Icon n="chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
