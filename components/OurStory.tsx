"use client";

import { useEffect, useRef, useState } from "react";

type Card = { eyebrow: string; title: string; body: string; tagline: string; img: string; tone: string };

const CARDS: Card[] = [
  {
    eyebrow: "01 / The Welcome",
    title: "Come on in",
    body: "A trattoria cafe in Sector 104, Hajipur, Noida, with the door open from 10:30 in the morning until 11:30 at night, every single day.",
    tagline: "brunch to late dinner",
    img: "/gallery/entrance.jpg",
    tone: "butter",
  },
  {
    eyebrow: "02 / The Fire",
    title: "Wood-fired, always",
    body: "The pizzas are the most-mentioned dish in our reviews. Baked in a wood oven until the crust blisters, then straight to the table.",
    tagline: "left in the flame",
    img: "/gallery/pizza.jpg",
    tone: "toffee",
  },
  {
    eyebrow: "03 / The Table",
    title: "Pasta, mezze, coffee",
    body: "Creamy pastas, Lebanese mezze to share and signature coffees, all freshly prepared. Order a little of everything.",
    tagline: "made to be shared",
    img: "/gallery/spread.jpg",
    tone: "blush",
  },
  {
    eyebrow: "04 / The Courtyard",
    title: "A seat at the table",
    body: "Teal arches, rattan chairs and a courtyard made for long evenings. Sit inside or out, and stay a while.",
    tagline: "open every day",
    img: "/gallery/courtyard-arches.jpg",
    tone: "accent-soft",
  },
];

const clamp = (n: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, n));

/**
 * Scroll-pinned horizontal story carousel. The tall outer section provides the scroll distance,
 * the sticky viewport stays put, and vertical progress is mapped onto the track's translateX.
 * With reduced motion it becomes a plain scroll-snap row.
 */
export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const range = section.offsetHeight - window.innerHeight;
      const p = range > 0 ? clamp(-section.getBoundingClientRect().top / range) : 0;
      const dist = Math.max(0, track.scrollWidth - window.innerWidth);
      track.style.transform = `translate3d(${-p * dist}px,0,0)`;
      setProgress(p);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const n = CARDS.length;
  const active = Math.min(n - 1, Math.floor(progress * n));

  return (
    <section className="story" ref={sectionRef} aria-label="Our story">
      <div className="story-pin">
        <div className="story-head">
          <div>
            <h2 className="story-title">Our story</h2>
            <div className="story-bar" aria-hidden="true">
              {CARDS.map((c, i) => (
                <span key={c.eyebrow}>
                  <span style={{ width: `${clamp(progress * n - i) * 100}%` }} />
                </span>
              ))}
            </div>
          </div>
          <p className="story-count" aria-hidden="true">
            {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </p>
        </div>

        <div className="story-scroll">
          <div className="story-track" ref={trackRef}>
            {CARDS.map((c) => (
              <article className="story-card" key={c.eyebrow}>
                <div className="story-img">
                  <img src={c.img} alt="" loading="lazy" decoding="async" />
                </div>
                <div className="story-copy" style={{ background: `var(--${c.tone})` }}>
                  <span className="story-eyebrow">{c.eyebrow}</span>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                  </div>
                  <span className="story-tag">{c.tagline}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
