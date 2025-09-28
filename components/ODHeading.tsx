"use client";

import { motion } from "framer-motion";

export default function ODHeading() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-neutral-900 font-medium tracking-tight leading-[46px] text-[44px]"
            style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif', color: 'rgb(28, 28, 28)' }}
          >
            Dominate Local Search Results,
            <br className="hidden sm:block" />
            Grow Your Business Revenue with Local SEO.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="mt-5 text-[18px] leading-[29px] max-w-2xl mx-auto text-neutral-600"
            style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif', color: 'rgb(110, 110, 110)' }}
          >
            Expert local SEO strategies that help businesses attract more customers, increase foot traffic, and boost revenue through Google Business Profile optimization and local search marketing.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
