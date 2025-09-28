"use client";

import { motion } from "framer-motion";

function AvailabilityPill({ label = "Available for June" }: { label?: string }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-6 py-3 text-sm tracking-wide shadow-sm">
      <span className="inline-block h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
      <span className="uppercase text-neutral-600">{label}</span>
    </div>
  );
}

function AvatarGroup() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-8 w-8 rounded-full ring-2 ring-white"
            style={{
              background: [
                "linear-gradient(135deg,#06b6d4,#3b82f6)",
                "linear-gradient(135deg,#f59e0b,#ef4444)",
                "linear-gradient(135deg,#a78bfa,#6366f1)",
                "linear-gradient(135deg,#10b981,#059669)",
                "linear-gradient(135deg,#f472b6,#fb7185)",
              ][i],
            }}
          />
        ))}
      </div>
      <span className="text-sm text-neutral-600">40+ partners</span>
    </div>
  );
}

function LightCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl border border-black/10 bg-white p-5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
      {children}
    </div>
  );
}


function StatLarge({ value, suffix, label }: { value: string; suffix?: string; label: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-7 shadow-[0_18px_30px_-12px_rgba(0,0,0,0.28)]">
      <div className="flex items-end gap-1">
        <div className="text-[52px] leading-none font-medium text-neutral-900">{value}</div>
        {suffix ? <div className="text-2xl text-neutral-500 pb-1">{suffix}</div> : null}
      </div>
      <div className="mt-2 text-sm text-neutral-500">{label}</div>
    </div>
  );
}

function DarkScoreCard() {
  return (
    <div className="relative rounded-2xl bg-neutral-900 text-white p-6 sm:p-8 shadow-[0_22px_40px_-10px_rgba(0,0,0,0.71)] ring-1 ring-black/40 overflow-hidden h-full min-h-[255px] w-full max-w-[710px]">
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.15]"
        viewBox="0 0 400 240"
      >
        <path
          d="M40 180 L140 80 L170 110 L240 40 L270 70 L360 -20"
          fill="none"
          stroke="url(#g)"
          strokeWidth="24"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative h-full flex flex-col justify-between">
        <p className="text-white/85 max-w-sm">
          We delivered 50+ projects worldwide, helping service-based companies secure more clients
        </p>
        <div className="flex items-end gap-2">
          <span className="text-5xl font-semibold">4.8</span>
          <span className="text-xl text-white/70">/5</span>
        </div>
        <p className="text-xs uppercase tracking-wide text-white/75">
          Trusted by clients worldwide
        </p>
      </div>
    </div>
  );
}

export default function Mission() {
  return (
    <section id="mission" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] uppercase tracking-wide text-neutral-600">
              mission
            </div>
            <h2 className="mt-4 text-[44px] leading-[46px] font-medium text-[rgb(110,110,110)]" style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}>Our focus is simple</h2>
            <h3 className="text-[44px] leading-[46px] font-medium text-[rgb(28,28,28)]" style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}>Design to convert</h3>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[18px] leading-[29px] font-normal text-[rgb(110,110,110)] max-w-sm" style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}>
              We deliver beyond expeCtations for your business.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <LightCard>
              <AvatarGroup />
            </LightCard>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_18px_30px_-8px_rgba(0,0,0,0.28)] h-full min-h-[180px] flex flex-col justify-between">
              <p className="text-neutral-600">Earn back on your investment within 60 days</p>
              <div className="flex items-end gap-2">
                <span className="text-[56px] leading-none font-medium text-neutral-900">90</span>
                <span className="pb-2 text-2xl text-neutral-500">%</span>
              </div>
              <p className="text-sm text-neutral-500">Return on investment (ROI)</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_18px_30px_-8px_rgba(0,0,0,0.28)] h-full min-h-[255px] flex flex-col justify-between">
              <p className="text-neutral-600">Through our custom-tailored funnel systems</p>
              <div className="flex items-end gap-2">
                <span className="text-[56px] leading-none font-medium text-neutral-900">$200k+</span>
                <span className="pb-2 text-2xl text-neutral-500">+</span>
              </div>
              <p className="text-sm text-neutral-500">Revenue generated</p>
            </div>
            <AvailabilityPill />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:row-span-2"
          >
            <DarkScoreCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


