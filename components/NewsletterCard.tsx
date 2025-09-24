"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Normally we'd POST to an API route here
    setSubmitted(true);
  }

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        <div className="relative">
          {/* Dark floating shadow underlay */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-white scale-[1.02] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.4)] animate-shadow-float" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative rounded-2xl border border-white/50 ring-1 ring-black/5 bg-white overflow-hidden animate-float shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)]"
          >
            {/* Subtle gradient accent */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="p-3 sm:p-4 grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-stretch">
              {/* Image - Left side */}
              <div className="lg:col-span-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2000&auto=format&fit=crop"
                  alt="Growth analytics dashboard"
                  className="h-full w-full rounded-xl object-cover border border-white/60 ring-1 ring-black/5 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.25)]"
                />
              </div>

              {/* Content - Right side */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <h3
                  className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium leading-[1.15] tracking-tight text-neutral-900"
                  style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif', color: 'rgb(28, 28, 28)' }}
                >
                  Become the most discoverable business in your city
                </h3>
                <p
                  className="mt-2 text-[14px] sm:text-[15px] leading-[1.5] text-neutral-600"
                  style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif', color: 'rgb(110, 110, 110)' }}
                >
                  Join 3,000+ local owners who get one short email each week with proven SEO plays that win calls, foot traffic, and repeat customers. No fluff—just what to copy, paste, and deploy.
                </p>
                {/* Email Form */}
                <div className="mt-3">
                  {submitted ? (
                    <div className="rounded-xl border border-black/5 bg-neutral-50 p-4 text-center">
                      <p className="text-[15px]" style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif', color: 'rgb(28, 28, 28)' }}>
                        You&apos;re in. Check your inbox for a welcome email with your first playbook.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                      <input
                        id="newsletter-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@business.com"
                        className="flex-1 rounded-xl border border-black/10 bg-white/90 px-4 py-3 text-[14px] text-neutral-900 placeholder:text-neutral-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_8px_25px_-8px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_12px_30px_-8px_rgba(0,0,0,0.4)]"
                        style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}
                      />
                      <button
                        type="submit"
                        className="btn-green btn-green-md rounded-xl"
                        aria-label="Subscribe to newsletter"
                      >
                        Get the plays
                      </button>
                    </form>
                  )}
                  <p className="mt-2 text-[12px] text-neutral-500" style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}>
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


