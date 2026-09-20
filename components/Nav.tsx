"use client";

import { useEffect, useState } from "react";
import { cafe } from "@/lib/content";

const links = [
  ...cafe.stages.map((s) => ({ href: `#${s.id}`, label: s.nav })),
  { href: `#${cafe.reviews.id}`, label: cafe.reviews.nav },
  { href: `#${cafe.visit.id}`, label: cafe.visit.nav },
];

/** Three teal arches, echoing the arched windows in the cafe. */
function Mark() {
  return (
    <svg className="mark" viewBox="0 0 36 30" aria-hidden="true">
      <path d="M2 30V14a6 6 0 0 1 12 0v16z" fill="#2fa7a0" />
      <path d="M12 30V10a6 6 0 0 1 12 0v20z" fill="#fff1dc" />
      <path d="M22 30V14a6 6 0 0 1 12 0v16z" fill="#d9683f" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <a className="logo" href="#top" aria-label={`${cafe.name}, back to top`}>
        <Mark />
        {cafe.name}
      </a>
      <nav aria-label="Main">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <a className="btn primary nav-cta" href="#reserve">
        Reserve
      </a>
    </header>
  );
}
