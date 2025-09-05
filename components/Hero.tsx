"use client";

import { motion } from "framer-motion";
import CardSwap, { Card } from "./CardSwap";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import TrueFocus from './TrueFocus';


export default function Hero() {

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(closest-side,black,transparent)]">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl bg-orange-300/30" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl bg-lime-300/30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center pt-2 sm:pt-3 lg:pt-4 pb-12 lg:pb-16">
          {/* Left copy */}
          <div className="ml-4 sm:ml-6 lg:ml-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/5 px-3 py-1 text-xs shadow-sm backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <span className="uppercase tracking-wide text-neutral-600 dark:text-neutral-300">
                Available for June
              </span>
            </div>

            <h1 className="open-runde-500 mt-4 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] text-neutral-900 dark:text-white">
              Grow
              <span className="align-middle inline-block mx-3 translate-y-1">
                <span className="finance-logo inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl relative overflow-hidden">
                  <svg viewBox="0 0 56 56" width="100%" height="100%" fill="none" aria-hidden="true" className="absolute inset-0">
                    <path d="M8 40 L20 28 L24 32 L34 22 L38 26 L46 16" stroke="#ffffff" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span
                    className="absolute"
                    style={{
                      right: 3,
                      top: 5,
                      color: "#D4AF37",
                      fontSize: 10,
                      lineHeight: 1,
                      transform: "rotate(45deg)",
                      transformOrigin: "50% 70%",
                    }}
                    aria-hidden="true"
                  >
                    ⚜
                  </span>
                </span>
              </span>
              your business
              <br />
              with <TrueFocus 
                sentence="Local SEO"
                manualMode={false}
                blurAmount={5}
                borderColor="green"
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            </h1>

            <p className="open-runde-400-paragraph mt-4 max-w-xl">
              We help local businesses dominate search results and attract more customers with proven SEO strategies tailored for your area.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                className="px-6 py-3 rounded-2xl text-white bg-black shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-colors"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
                  backgroundColor: "#1a1a1a"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17 
                }}
              >
                Drive results now
              </motion.a>
              <motion.a
                href="#learn"
                className="px-6 py-3 rounded-2xl border border-black/10 bg-white text-neutral-900 transition-colors"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#f8f9fa",
                  borderColor: "rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17 
                }}
              >
                Learn more
              </motion.a>
            </div>

            <div className="mt-8 flex items-center gap-8">
              <div className="flex -space-x-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                    style={{
                      background:
                        [
                          "linear-gradient(135deg,#06b6d4,#3b82f6)",
                          "linear-gradient(135deg,#f59e0b,#ef4444)",
                          "linear-gradient(135deg,#a78bfa,#6366f1)",
                          "linear-gradient(135deg,#10b981,#059669)",
                        ][i],
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex text-yellow-400">★★★★★</div>
                <span className="text-neutral-500">Rated excellent: 5/5</span>
              </div>
            </div>
          </div>

          {/* Right visuals - Card Swap (Desktop) */}
          <div className="hidden md:block h-[350px] sm:h-[400px] lg:h-[450px]" style={{ position: 'relative' }}>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <h3>Card 1</h3>
                <p>technical seo</p>
              </Card>
              <Card>
                <h3>Card 2</h3>
                <p>gmb</p>
              </Card>
              <Card>
                <h3>Card 3</h3>
                <p>local listing</p>
              </Card>
            </CardSwap>
          </div>

          {/* Mobile ScrollStack */}
          <div className="block md:hidden w-full h-[350px]">
            <ScrollStack>
              <ScrollStackItem>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=center" 
                  alt="A vibrant marketing analytics dashboard showing website performance metrics and SEO insights"
                  className="w-full h-full object-cover rounded-lg"
                />
              </ScrollStackItem>
              <ScrollStackItem>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center" 
                  alt="A modern Google My Business profile dashboard displaying local business optimization tools and customer reviews"
                  className="w-full h-full object-cover rounded-lg"
                />
              </ScrollStackItem>
              <ScrollStackItem>
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center" 
                  alt="A comprehensive local business listing management interface showing directory optimization and citation tracking"
                  className="w-full h-full object-cover rounded-lg"
                />
              </ScrollStackItem>
              <ScrollStackItem>
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop&crop=center" 
                  alt="A professional SEO strategy planning interface with keyword research and content optimization tools"
                  className="w-full h-full object-cover rounded-lg"
                />
              </ScrollStackItem>
              <ScrollStackItem>
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop&crop=center" 
                  alt="A comprehensive digital marketing analytics dashboard showing conversion tracking and ROI metrics"
                  className="w-full h-full object-cover rounded-lg"
                />
              </ScrollStackItem>
            </ScrollStack>
          </div>
        </div>
      </div>
    </section>
  );
}


