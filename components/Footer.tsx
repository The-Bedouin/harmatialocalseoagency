"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/#services" },
    { label: "Portfolio", href: "/#projects" },
    { label: "Testimonials", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "/contact" },
  ];

  const socials = [
    { label: "Twitter", icon: "fa-brands fa-x-twitter", href: "#" },
    { label: "LinkedIn", icon: "fa-brands fa-linkedin-in", href: "#" },
    { label: "Instagram", icon: "fa-brands fa-instagram", href: "#" },
    { label: "Facebook", icon: "fa-brands fa-facebook-f", href: "#" },
  ];

  const [submitted, setSubmitted] = useState(false);

  return (
    <footer id="site-footer" className="relative mt-8 bg-neutral-950 text-white overflow-hidden">
      {/* Gradient glow orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-12 -left-16 h-56 w-56 rounded-full blur-3xl bg-emerald-400/15" />
        <div className="absolute -bottom-14 -right-16 h-56 w-56 rounded-full blur-3xl" style={{ backgroundColor: "rgba(212,175,55,0.13)" }} />
      </div>
      {/* Subtle background graphics */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.18]">
        <svg aria-hidden className="absolute inset-0 h-full w-full" viewBox="0 0 800 400">
          <defs>
            <linearGradient id="footer-g" x1="0" x2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path d="M40 320 L200 160 L240 200 L340 100 L380 140 L560 -20" fill="none" stroke="url(#footer-g)" strokeWidth="32" strokeLinecap="round" />
        </svg>
      </div>

      {/* Top divider glow */}
      <div className="absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <motion.div
        className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-6"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-3">
          {/* Brand */}
          <div className="md:col-span-5 lg:col-span-5 space-y-1.5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="finance-logo inline-flex h-7 w-7 items-center justify-center rounded-lg relative overflow-hidden">
                <svg viewBox="0 0 56 56" width="100%" height="100%" fill="none" aria-hidden="true" className="absolute inset-0">
                  <path d="M8 40 L20 28 L24 32 L34 22 L38 26 L46 16" stroke="#ffffff" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="absolute" style={{ right: 3, top: 5, color: "#D4AF37", fontSize: 10, lineHeight: 1, transform: "rotate(45deg)", transformOrigin: "50% 70%" }} aria-hidden>
                  ⚜
                </span>
              </span>
              <span className="text-base font-semibold tracking-tight">HarmatiaLocal-SEOAgency</span>
            </Link>
            <p className="text-white/70 max-w-md text-xs">
              We help local businesses grow with high-performing SEO and conversion-focused design. Real results, delivered with craft.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <div className="text-xs uppercase tracking-wide text-white/60">Navigate</div>
            <ul className="mt-3 space-y-1.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="relative inline-block text-white/80 hover:text-white transition-colors transition-transform hover:translate-y-[1px] pl-0 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-white/80 after:shadow-[0_0_12px_rgba(255,255,255,0.35)] after:transition-all hover:after:w-full before:content-[''] before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:h-1 before:w-1 before:rounded-full before:bg-emerald-400 before:scale-0 before:transition-transform hover:before:scale-100"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 lg:col-span-4">
            <div className="text-xs uppercase tracking-wide text-white/60">Contact</div>
            <div className="mt-3 space-y-2 text-white/80">
              <a href="mailto:hello@harmatia.agency" className="hover:text-white transition-colors">hello@harmatia.agency</a>
              <a href="tel:+1234567890" className="block hover:text-white transition-colors">+1 (234) 567-890</a>
              <div className="flex items-center gap-2 pt-0.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition-all duration-200 hover:scale-[1.06] hover:rotate-[1.5deg] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    <i className={`${s.icon} text-white/90`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-12 lg:col-span-12 xl:col-span-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-3 items-end mt-1.5 md:mt-0">
              <div className="lg:col-span-4">
                <div className="text-xs uppercase tracking-wide text-white/60">Newsletter</div>
                <p className="mt-1 text-white/70 text-xs max-w-sm">Get monthly insights on local SEO and conversion boosts. No spam, ever.</p>
              </div>
              <form
                className="lg:col-span-8 sm:relative sm:max-w-md flex flex-col sm:block gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                  setTimeout(() => setSubmitted(false), 2500);
                }}
              >
                <div className="group relative">
                  <span className="pointer-events-none absolute -inset-[1px] rounded-xl sm:rounded-full bg-[linear-gradient(90deg,rgba(16,185,129,0.45),rgba(212,175,55,0.45))] opacity-0 blur-[6px] transition-opacity group-focus-within:opacity-100" />
                  <input
                    type="email"
                    required
                    aria-label="Email address"
                    placeholder="Enter your email"
                    className="relative h-9 w-full sm:w-[100%] rounded-xl sm:rounded-full border border-white/15 bg-white/5 px-4 sm:pl-4 sm:pr-32 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 sm:h-8 inline-flex items-center justify-center rounded-lg sm:rounded-full bg-white text-neutral-900 px-4 font-medium shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] hover:bg-neutral-100 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
                {submitted ? (
                  <div className="mt-1 inline-flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-300">
                    <i className="fa-solid fa-check" aria-hidden></i>
                    Subscribed! Check your inbox.
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-5 border-t border-white/10 pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-white/60">
          <div>© {new Date().getFullYear()} HarmatiaLocal-SEOAgency. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <span className="opacity-30">•</span>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}


