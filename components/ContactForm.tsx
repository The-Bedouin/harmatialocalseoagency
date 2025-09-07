"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="relative overflow-hidden space-y-4 rounded-2xl bg-neutral-950 text-white p-6 ring-1 ring-white/10 shadow-[0_22px_40px_-10px_rgba(0,0,0,0.71)]"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      }}
    >
      {/* Background orbs (similar to footer) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 -left-12 h-40 w-40 rounded-full blur-3xl bg-emerald-400/15" />
        <div className="absolute -bottom-12 -right-12 h-44 w-44 rounded-full blur-3xl" style={{ backgroundColor: "rgba(212,175,55,0.13)" }} />
      </div>
      {/* Subtle background graphics */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16]" viewBox="0 0 400 240">
        <defs>
          <linearGradient id="contact-g" x1="0" x2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path d="M40 180 L140 80 L170 110 L240 40 L270 70 L360 -20" fill="none" stroke="url(#contact-g)" strokeWidth="22" strokeLinecap="round" />
      </svg>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/90">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            placeholder="Jane Doe"
            aria-label="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/90">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            placeholder="you@company.com"
            aria-label="Your email"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white/90">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            placeholder="(555) 555‑5555"
            aria-label="Your phone"
          />
        </div>
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-white/90">Website</label>
          <input
            id="website"
            name="website"
            type="url"
            className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            placeholder="https://example.com"
            aria-label="Your website"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/90">How can we help?</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-1 w-full rounded-2xl border border-white/15 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
          placeholder="Describe your goals, location(s), and timeline..."
          aria-label="Your message"
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs text-white/70">We’ll never share your information.</p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white text-neutral-900 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:bg-neutral-100 transition-colors"
        >
          Send message
        </button>
      </div>
      {submitted ? (
        <div className="mt-2 inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-[12px] text-emerald-300">
          Thanks! We’ll be in touch shortly.
        </div>
      ) : null}
    </form>
  );
}


