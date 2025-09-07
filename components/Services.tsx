"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BounceCards from "./BounceCards";
import GradualBlur from "./GradualBlur";

type ServiceItem = {
  id: number;
  title: string;
  blurb: string;
  projectsLabel?: string;
  images?: { src: string; alt: string }[];
};

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Landing pages",
    blurb:
      "Responsive and SEO-friendly, designed to turn visitors to customers.",
    projectsLabel: "12 projects",
    images: [
      {
        src:
          "https://images.unsplash.com/photo-1547658719-94a6f1a8072b?q=80&w=800&auto=format&fit=crop",
        alt: "Landing page mock 1",
      },
      {
        src:
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop",
        alt: "Landing page mock 2",
      },
    ],
  },
  {
    id: 2,
    title: "Social media ads",
    blurb: "High-performing ads crafted to capture attention and drive clicks.",
  },
  {
    id: 3,
    title: "Email campaigns",
    blurb: "Sequences that nurture leads and convert them into customers.",
  },
  {
    id: 4,
    title: "Lead automation",
    blurb: "Systems that qualify, route, and follow up with leads automatically.",
  },
];

function ServiceRow({
  item,
  index,
  isActive,
  onToggle,
  images,
  transformStyles,
}: {
  item: ServiceItem;
  index: number;
  isActive: boolean;
  onToggle: () => void;
  images: string[];
  transformStyles: string[];
}) {
  return (
    <div className="relative">
      <button
        className="group grid w-full grid-cols-12 items-center gap-4 py-6 text-left"
        aria-expanded={isActive}
        onClick={onToggle}
      >
        <div className="col-span-2 sm:col-span-1">
          <span className="text-xs tracking-[0.2em] text-neutral-400">
            {String(index + 1).padStart(3, "0")}
          </span>
        </div>
        <div className="col-span-8 sm:col-span-7">
          <h4
            className="text-xl sm:text-2xl font-medium text-white"
            style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}
          >
            {item.title}
          </h4>
          <AnimatePresence initial={false}>
            {isActive && (
              <motion.p
                key="blurb"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="mt-3 max-w-xl text-neutral-400"
              >
                {item.blurb}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div className="col-span-2 sm:col-span-4 flex items-center justify-end gap-4">
          {item.projectsLabel ? (
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-wide text-neutral-400">
              {item.projectsLabel}
            </span>
          ) : null}
          <span
            className="grid h-8 w-8 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 text-white"
            aria-hidden
          >
            <span
              className="relative block h-3 w-3 before:absolute before:inset-x-0 before:top-1/2 before:h-[2px] before:-translate-y-1/2 before:bg-white after:absolute after:left-1/2 after:top-0 after:h-3 after:w-[2px] after:-translate-x-1/2 after:bg-white"
              style={{ opacity: isActive ? 0.35 : 1 }}
            />
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="-mt-6 pb-3 flex justify-end">
              <div className="scale-50 origin-right">
                <BounceCards
                  className="custom-bounceCards"
                  images={images}
                  containerWidth={500}
                  containerHeight={250}
                  animationDelay={0.6}
                  animationStagger={0.08}
                  easeType="elastic.out(1, 0.5)"
                  transformStyles={transformStyles}
                  enableHover={false}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-px w-full bg-white/10" />
    </div>
  );
}

export default function Services() {
  // Start collapsed so bounce cards are hidden by default
  const [active, setActive] = useState<number>(-1);

  const images = [
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/300/300?grayscale",
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];

  // Helpers to create per-row variety
  const rotateArray = <T,>(arr: T[], count: number): T[] => {
    const n = arr.length;
    const k = ((count % n) + n) % n;
    return arr.slice(k).concat(arr.slice(0, k));
  };

  const shiftTranslateX = (transformStr: string, dx: number): string => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = transformStr.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + dx;
      return transformStr.replace(translateRegex, `translate(${newX}px)`);
    }
    // no translate present
    return transformStr === "none" ? `translate(${dx}px)` : `${transformStr} translate(${dx}px)`;
  };

  const perRowImages = SERVICES.map((_, i) => rotateArray(images, i));
  const perRowTransforms = SERVICES.map((_, i) => transformStyles.map((t) => shiftTranslateX(t, (i - 1) * 20)));

  return (
    <section id="services" className="relative text-white py-16 sm:py-20 lg:py-24 overflow-hidden" style={{ backgroundColor: '#1F1F1F' }}>
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wide text-neutral-300">
              services
            </div>
             <h2
               className="mt-4 text-[44px] leading-[46px] font-medium"
               style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif', color: 'rgb(110, 110, 110)' }}
             >
               How can we help
             </h2>
             <h3
               className="text-[44px] leading-[46px] font-medium"
               style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif', color: 'rgb(255, 255, 255)' }}
             >
               Your business grow
             </h3>
          </div>
          <div className="lg:col-span-5">
            <p
              className="text-[18px] leading-[29px] font-normal text-neutral-300 max-w-sm"
              style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}
            >
              Achieving goals for businesses and entrepreneurs around the globe.
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-10">
          <div className="h-px w-full bg-white/10" />
          {SERVICES.map((item, i) => (
            <ServiceRow
              key={item.id}
              item={item}
              index={i}
              isActive={active === i}
              onToggle={() => setActive(active === i ? -1 : i)}
              images={perRowImages[i]}
              transformStyles={perRowTransforms[i]}
            />
          ))}
        </div>
      </div>

      {/* Bottom fade using GradualBlur */}
      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </section>
  );
}


