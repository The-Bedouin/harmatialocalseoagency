"use client";

import { motion } from "framer-motion";

export default function OneDollarHero() {
  const cards = [
    {
      id: 1,
      title: "Google Business Profile Optimization",
      description: "Dominate local search with optimized GBP listings",
      image: "/gbp-map-pack.png",
      alt: "Google Business Profile map pack results"
    },
    {
      id: 2,
      title: "Local Citation Building",
      description: "Build authority through strategic local citations",
      image: "/local-citation.png",
      alt: "Local citation distribution and management"
    },
    {
      id: 3,
      title: "Targeted Web Traffic",
      description: "Drive qualified local traffic to your business",
      image: "/ccb-targeted-web-traffic.png",
      alt: "Targeted web traffic analytics dashboard"
    },
    {
      id: 4,
      title: "Los Angeles Market Domination",
      description: "Comprehensive local SEO coverage across LA",
      image: "/los-angeles-map-pack.png",
      alt: "Los Angeles map pack with business locations"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative bg-transparent py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-sm text-neutral-700 font-sans mb-4">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium">Featured</span>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium">Local SEO</span>
            <span className="mx-2 text-neutral-300">•</span>
            <span className="text-neutral-500">Complete Guide</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-neutral-900 mb-6"
              style={{fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif'}}>
            Master Local SEO with Our
            <span className="block text-emerald-600">Proven Strategies</span>
          </h1>
          
          <p className="text-lg sm:text-xl leading-relaxed text-neutral-600 max-w-3xl mx-auto"
             style={{fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif'}}>
            Dominate local search results with our comprehensive approach covering Google Business Profile optimization, 
            NAP citations, local content strategy, and advanced techniques to attract more customers.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                {/* Fallback regular img tag if Next.js Image fails */}
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    console.error(`Failed to load image: ${card.image}`, e);
                    // Try to load with a different approach
                    const target = e.target as HTMLImageElement;
                    target.src = card.image;
                  }}
                  onLoad={() => {
                    console.log(`Successfully loaded image: ${card.image}`);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-emerald-600 transition-colors"
                    style={{fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif'}}>
                  {card.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed"
                   style={{fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif'}}>
                  {card.description}
                </p>
                {/* Debug info */}
                <p className="text-xs text-gray-400 mt-2">Image: {card.image}</p>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <motion.a 
            href="/contact"
            className="inline-flex items-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-xl hover:bg-emerald-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}


