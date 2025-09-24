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
    title: "Free SEO Consultation & Audit",
    blurb:
      "Want more local customers finding your business online? Our free SEO check-up reveals what's stopping your website from ranking higher. We'll share simple, clear tips to boost your visibility and bring in more foot traffic—no tech talk, just results. Book your free consultation today and start growing!",
    projectsLabel: "Free service",
    images: [
      {
        src:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
        alt: "Team reviewing growth strategy and performance dashboards",
      },
      {
        src:
          "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
        alt: "Laptop with website analytics and SEO performance graphs",
      },
      {
        src:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
        alt: "Marketing analytics charts and metrics on screen",
      },
      {
        src:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        alt: "SEO audit dashboard showing website analysis",
      },
      {
        src:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        alt: "Local SEO consultation meeting",
      },
    ],
  },
  {
    id: 2,
    title: "Google Business Profile Management",
    blurb: "Stand out to local customers with our Google Business Profile Management. Your profile is often the first thing people see when searching for your business, but is it working hard enough? We optimize your listing with the right details, photos, and updates to attract more clicks, calls, and visits. No tech skills needed—we handle it all, so you get more customers through your door. Boost your local presence today!",
    projectsLabel: "GBP",
    images: [
      { src: "/los-angeles-map-pack.png", alt: "Map pack coverage across Los Angeles neighborhoods" },
      { src: "/ccb-map-rank.png", alt: "Local rankings across map results" },
      { src: "/ccb-targeted-web-traffic.png", alt: "Targeted local web traffic analytics" },
      { src: "/google-business-profile-report.png", alt: "Google Business Profile insights and performance report" },
      { src: "/gbp-map-pack.png", alt: "Google Business Profile map pack results" },
    ],
  },
  {
    id: 3,
    title: "Website Optimisation",
    blurb: "Turn your website into a customer magnet with our Website Optimisation service. Slow pages or confusing layouts could be pushing local customers away. We fine-tune your site to load faster, rank higher on search engines, and make it easy for visitors to take action—whether it’s calling, booking, or buying. No tech know-how required; we do the heavy lifting to drive more traffic and sales to your business. Start winning online today!",
    projectsLabel: "Web",
    images: [
      {
        src:
          "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
        alt: "Analytics graphs showing improved conversions",
      },
      {
        src:
          "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?q=80&w=800&auto=format&fit=crop",
        alt: "Design team enhancing website layout and usability",
      },
      {
        src:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
        alt: "Developer optimizing website performance and UX",
      },
      {
        src:
          "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop",
        alt: "Laptop with code and UI improvements for website",
      },
      {
        src:
          "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=800&auto=format&fit=crop",
        alt: "Speed optimization and performance metrics dashboard",
      },
    ],
  },
  {
    id: 4,
    title: "Google Ads Management",
    blurb: "Get your business in front of local customers with our Local Google Ads Management. Not seeing enough clicks or calls from your ads? We create and manage targeted Google Ads campaigns to put your business at the top of local searches, driving more leads and sales. No guesswork—we handle everything to maximize your budget and results. Start attracting more customers today!",
    projectsLabel: "Ads",
    images: [
      { src: "/los-angeles-map-pack.png", alt: "Map pack coverage across Los Angeles neighborhoods" },
      { src: "/ccb-map-rank.png", alt: "Local rankings across map results" },
      { src: "/ccb-targeted-web-traffic.png", alt: "Targeted local web traffic analytics" },
      { src: "/google-business-profile-report.png", alt: "Google Business Profile insights and performance report" },
      { src: "/gbp-map-pack.png", alt: "Google Business Profile map pack results" },
    ],
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

  // Prefer per-service images if provided; otherwise fall back to default placeholders
  const perRowImages = SERVICES.map((service, i) =>
    service.images && service.images.length > 0
      ? service.images.map((img) => img.src)
      : rotateArray(images, i)
  );
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


