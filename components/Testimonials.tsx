"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, usePresence } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Harmatia Local transformed my bakery's online presence! Their free SEO audit showed us exactly what was missing, and their Google Business Profile tweaks brought in more local customers. Professional, clear, and worth every penny!",
    name: "Sanne van Dijk",
    title: "Bakery Owner",
    avatarUrl: "",
  },
  {
    quote:
      "As a small shop owner, I didn't know much about SEO, but Harmatia Local made it simple. Their website optimisation doubled my online orders, and their team was so easy to work with. Highly recommend!",
    name: "Chidubem Musa",
    title: "Shop Owner",
    avatarUrl: "",
  },
  {
    quote:
      "Harmatia Local's Google Ads service put my salon at the top of local searches. We're getting more bookings than ever, and their friendly team explained everything clearly. Fantastic results!",
    name: "Emily Carter",
    title: "Salon Owner",
    avatarUrl: "",
  },
  {
    quote:
      "The free consultation from Harmatia Local opened my eyes to how much business I was losing online. Their Google Business Profile management brought in more foot traffic to my café. Super professional and effective!",
    name: "Jasper de Vries",
    title: "Café Owner",
    avatarUrl: "",
  },
  {
    quote:
      "Harmatia Local optimised my website and set up targeted Google Ads. My gym's getting way more sign-ups now, and I love how they handle everything so I can focus on my business. Top-notch service!",
    name: "Michael Thompson",
    title: "Gym Owner",
    avatarUrl: "",
  },
];

function Dot({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button
      aria-label="Go to slide"
      onClick={onClick}
      className="h-2.5 w-2.5 rounded-full mx-1"
      style={{
        backgroundColor: active ? "#111827" : "#e5e7eb",
        boxShadow: active ? "0 8px 20px rgba(0,0,0,0.25)" : undefined,
      }}
    />
  );
}

function QuoteCard({ item }: { item: Testimonial }) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-emerald-400/15 via-transparent to-blue-400/15 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
      <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-white/90 supports-[backdrop-filter]:bg-white/60 backdrop-blur-sm p-8 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.22)] transition-all duration-500">
        <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-emerald-500/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />

        <div className="text-5xl leading-none text-emerald-100 mb-4 font-serif">&quot;</div>
        <p className="text-[17px] sm:text-[18px] leading-[28px] text-neutral-800 mb-6" style={{fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif'}}>{item.quote}</p>

        <div className="flex items-center justify-between pt-5 border-t border-neutral-100">
          <div>
            <div className="text-[16px] font-semibold text-neutral-900" style={{fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif'}}>{item.name}</div>
            <div className="text-[14px] text-neutral-500 mt-1">{item.title}</div>
          </div>
          <div className="flex items-center gap-1 text-emerald-500">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimatedPresenceItem({ children }: { children: React.ReactNode }) {
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) {
      const timeout = setTimeout(() => safeToRemove(), 600);
      return () => clearTimeout(timeout);
    }
  }, [isPresent, safeToRemove]);

  return (
    <motion.div className={isPresent ? "testimonial-slide-in" : "testimonial-slide-out"}>
      {children}
    </motion.div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const visible = useMemo(() => {
    // Show 3 at a time like the reference
    const start = index % TESTIMONIALS.length;
    const items: Testimonial[] = [];
    for (let i = 0; i < 3; i++) {
      items.push(TESTIMONIALS[(start + i) % TESTIMONIALS.length]);
    }
    return items;
  }, [index]);

  useEffect(() => {
    timerRef.current = setInterval(() => setIndex((v) => v + 1), 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] uppercase tracking-wide text-neutral-600">
              testimonials
            </div>
            <h2 className="mt-4 text-[44px] leading-[46px] font-medium text-[rgb(110,110,110)]" style={{fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif'}}>40+ partners</h2>
            <h3 className="text-[56px] leading-[58px] font-medium text-[rgb(28,28,28)]" style={{fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif'}}>One outcome: Growth</h3>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[18px] leading-[29px] font-normal text-[rgb(110,110,110)] max-w-sm" style={{fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif'}}>
              Real stories from real businesses who scaled with our funnel systems.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden">
          <AnimatePresence initial={false}>
            {visible.map((t, i) => (
              <AnimatedPresenceItem key={`${index}-${i}-${t.name}`}>
                <QuoteCard item={t} />
              </AnimatedPresenceItem>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center">
          {TESTIMONIALS.slice(0, 6).map((_, i) => (
            <Dot key={i} active={index % TESTIMONIALS.length === i} onClick={() => setIndex(i)} />
          ))}
        </div>

      </div>
    </section>
  );
}


