"use client";

import { motion } from "framer-motion";

export default function BlogHeroLocalKeywordResearch() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-white"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(closest-side,black,transparent)]">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl bg-emerald-300/20" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl bg-lime-300/20" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs shadow-sm backdrop-blur mb-6"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          <span className="uppercase tracking-wide text-neutral-600">
            Local SEO Tools Guide
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="open-runde-500 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[0.95] text-neutral-900 mb-6"
        >
          Best Free Tools for Local Keyword Research Beginners
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center space-x-4 text-neutral-600 text-sm"
        >
          <span>By The SEO-Bedouin</span>
          <span>•</span>
          <span>September 23, 2025</span>
          <span>•</span>
          <span>6 min read</span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="open-runde-400-paragraph mt-6 max-w-3xl mx-auto"
        >
          Discover the best free tools for local keyword research. Learn Google Keyword Planner and People Also Ask to boost your local SEO and increase leads by 50% or more.
        </motion.p>
      </div>
    </motion.section>
  );
}
