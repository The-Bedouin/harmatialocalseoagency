/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";

export default function StatementSection() {
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
            I&apos;m so crazy for thinking I can pull this off.
          </motion.h2>

          {/* Right: paragraph + plus button */}
          <div className="flex flex-col gap-4 md:gap-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              className="text-neutral-600 text-[18px] leading-[29px]"
              style={{fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif', color: 'rgb(110, 110, 110)'}}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem id magna fermentum tincidunt. Sed sit amet lectus justo. Fusce vitae ullamcorper eros. Integer non justo id risus bibendum feugiat vitae a nunc.
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
                aria-label="Expand"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:bg-neutral-900 transition-all duration-200 ease-out"
              >
                <span className="text-[20px] leading-none font-medium">+</span>
              </button>
              <span className="font-sans text-[13px] sm:text-[14px] text-neutral-600">See posts</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
