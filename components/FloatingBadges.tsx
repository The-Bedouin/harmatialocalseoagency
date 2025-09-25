"use client";

import { useEffect, useState } from "react";

export default function FloatingBadges() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      const currentY = window.scrollY;
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const isScrollingDown = currentY > lastY;
        if (isScrollingDown && currentY > 80) {
          setIsVisible(true);
        } else if (!isScrollingDown) {
          setIsVisible(false);
        }
        lastY = currentY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-16 right-0 z-50 flex flex-col items-end gap-3 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <a
        href="https://calendly.com/harmatia/30min"
        target="_blank"
        className="btn-green btn-green-lg rounded-2xl"
      >
        Book a call
      </a>
    </div>
  );
}


