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
      "I would highly recommend for companies looking to grow quick!",
    name: "Ryan Smith",
    title: "Ryanzz",
    avatarUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=96&h=96&fit=crop&crop=faces",
  },
  {
    quote:
      "They broke down each part of the funnel into easy wins consistently.",
    name: "Ian Cheung",
    title: "Splitz.com",
    avatarUrl:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=96&h=96&fit=crop&crop=faces",
  },
  {
    quote:
      "Truly next-level experts in the game – partner with us now!",
    name: "Emile Malpas",
    title: "Colish",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&fit=crop&crop=faces",
  },
  {
    quote:
      "They ship fast and with quality. Loved the collaborative process.",
    name: "Ava Gomez",
    title: "Riverlane",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces",
  },
  {
    quote:
      "Clear strategy, crisp execution. Our inbound doubled in 60 days.",
    name: "Priyank Patel",
    title: "DeltaQ",
    avatarUrl:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=96&h=96&fit=crop&crop=faces",
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
    <div className="relative rounded-[22px] border border-black/10 bg-white p-7 shadow-[0_26px_60px_-24px_rgba(0,0,0,0.35)]">
      <div className="text-3xl leading-none text-neutral-300 mb-3">“</div>
      <p className="text-[20px] leading-[34px] text-[rgb(28,28,28)]">{item.quote}</p>
      <div className="mt-6 flex items-center gap-3">
        <img
          src={item.avatarUrl}
          alt=""
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <div className="text-[18px] text-neutral-900">{item.name}</div>
          <div className="text-[15px] text-neutral-500">{item.title}</div>
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


