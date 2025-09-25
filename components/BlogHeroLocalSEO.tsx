"use client";

import { motion } from "framer-motion";

export default function BlogHeroLocalSEO() {
  return (
    <section className="relative bg-gradient-to-br from-neutral-50 via-white to-emerald-50/30 py-16 sm:py-20 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            Local SEO
          </div>

          {/* Main Headline */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-neutral-900 mb-6"
            style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}
          >
            Local SEO Strategies for{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Small Businesses
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg sm:text-xl leading-relaxed text-neutral-600 max-w-3xl mx-auto mb-8"
            style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}
          >
            Discover proven local SEO strategies that help small businesses dominate local search results and attract more customers. Expert tips and real case studies from Harmatia Local.
          </p>

          {/* Author Info */}
          <div className="flex items-center justify-center gap-4 text-sm text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                SB
              </div>
              <span>By The SEO-Bedouin</span>
            </div>
            <span>•</span>
            <span>Sep 25, 2025</span>
            <span>•</span>
            <span>7 min read</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://calendly.com/harmatia/30min"
              target="_blank"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free SEO Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
            <motion.a
              href="#content"
              className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-700 px-6 py-3 rounded-xl hover:bg-neutral-50 transition-colors font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read Article
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
    </section>
  );
}
