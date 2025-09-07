"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      const currentY = window.scrollY;
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        if (currentY > lastY && currentY > 80) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
        lastY = currentY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "/#services" },
    { name: "Resources", href: "#" },
    { name: "Portfolio", href: "/#projects" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className={`sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-black/5 text-neutral-900 mb-0 transition-transform duration-300 will-change-transform ${isHidden && !isOpen ? "-translate-y-full" : "translate-y-0"}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">
          <span className="finance-logo inline-flex h-7 w-7 items-center justify-center rounded-md relative overflow-hidden">
            <svg viewBox="0 0 56 56" width="100%" height="100%" fill="none" aria-hidden="true" className="absolute inset-0">
              <path d="M8 40 L20 28 L24 32 L34 22 L38 26 L46 16" stroke="#ffffff" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span
              className="absolute"
              style={{
                right: 1,
                top: 1,
                color: "#D4AF37",
                fontSize: 5,
                lineHeight: 1,
                transform: "rotate(45deg)",
                transformOrigin: "50% 70%",
              }}
              aria-hidden="true"
            >
              ⚜
            </span>
          </span>
          <span className="tracking-tight">HarmatiaLocal-SEOAgency</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-neutral-700 hover:text-neutral-900 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-neutral-900 after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <a
            href="https://calendly.com/ramish-design"
            target="_blank"
            className="btn-green btn-green-md"
          >
            Book a call
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://calendly.com/ramish-design"
            target="_blank"
            className="btn-green btn-green-sm hidden xs:inline-flex"
          >
            Call
          </a>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white/70 hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          >
            <svg
              className="h-5 w-5 text-neutral-900"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-nav"
        className={`${isOpen ? "block" : "hidden"} md:hidden border-t border-black/5 bg-white/90 backdrop-blur`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-2 text-sm text-neutral-800 hover:text-neutral-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://calendly.com/ramish-design"
              target="_blank"
              className="btn-green btn-green-md mt-1"
            >
              Book a call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}


