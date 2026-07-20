"use client";

import { useEffect } from "react";

/* Scroll-reveal på [data-reveal]: translateY(24px)→0 + opacity 0→1, 600ms.
   Elementer som allerede er over folden hoppes over. */
export default function RevealInit() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "none";
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition =
        "opacity .6s cubic-bezier(0.16,1,0.3,1), transform .6s cubic-bezier(0.16,1,0.3,1)";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
