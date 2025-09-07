"use client";

import { useEffect, useRef, useState } from "react";
import GradualBlur from "./GradualBlur";

export default function FooterBlurController() {
  const [footerInView, setFooterInView] = useState(false);
  const [nearBottom, setNearBottom] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterInView(entry.isIntersecting);
      },
      {
        root: null,
        threshold: [0, 0.01, 0.1],
        // Expand the viewport bottom so we hide the blur a bit before the footer fully appears
        rootMargin: "0px 0px 160px 0px",
      }
    );
    observer.observe(footer);

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const distanceFromBottom = doc.scrollHeight - (window.scrollY + window.innerHeight);
        setNearBottom(distanceFromBottom <= 24); // within 24px of bottom
      });
    };

    // Initialize and listen
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const hideBlur = footerInView || nearBottom;

  if (hideBlur) return null;
  return (
    <GradualBlur
      target="page"
      position="bottom"
      height="3rem"
      strength={2}
      divCount={6}
      curve="bezier"
      exponential={true}
      opacity={1}
      style={{ pointerEvents: "none" }}
    />
  );
}


