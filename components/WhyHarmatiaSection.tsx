/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";

export default function WhyHarmatiaSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-16 sm:px-20 lg:px-28 xl:px-40 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: bold statement */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-neutral-900 font-medium tracking-tight text-[44px] leading-[46px]"
            style={{fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif', color: 'rgb(28, 28, 28)'}}
          >
            Why Harmatia Local
          </motion.h2>

          {/* Right: paragraph + CTA button */}
          <div className="flex flex-col gap-4 md:gap-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              className="text-neutral-600 text-[18px] leading-[29px]"
              style={{fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif', color: 'rgb(110, 110, 110)'}}
            >
              We&apos;re not just another SEO agency. We&apos;re your local business growth partners who understand the unique challenges of competing in today&apos;s digital landscape. Our proven strategies have helped hundreds of local businesses dominate their markets and achieve sustainable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="inline-flex items-center gap-3"
            >
              <button
                type="button"
                aria-label="Get Started"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white shadow-[0_8px_30px_rgba(34,197,94,0.3)] hover:shadow-[0_12px_40px_rgba(34,197,94,0.4)] hover:bg-green-700 transition-all duration-200 ease-out"
              >
                <span className="text-[20px] leading-none font-medium">+</span>
              </button>
              <span className="font-sans text-[13px] sm:text-[14px] text-neutral-600">Get started today</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
