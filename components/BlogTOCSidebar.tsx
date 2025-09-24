"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

export default function BlogTOCSidebar() {
  const [activeSection, setActiveSection] = useState("introduction");

  const tableOfContents = useMemo(() => [
    { id: "introduction", title: "What is Local SEO? The Complete Guide", level: 1 },
    { id: "what-is-local-seo", title: "Understanding Local SEO: How It Works", level: 2 },
    { id: "google-business-profile", title: "Google Business Profile: Your Foundation", level: 2 },
    { id: "nap-citations", title: "NAP Citations: Building Trust", level: 2 },
    { id: "local-content-strategy", title: "Local Content Strategy", level: 2 },
    { id: "customer-reviews", title: "Customer Reviews: Social Proof", level: 2 },
    { id: "local-link-building", title: "Local Link Building", level: 2 },
    { id: "technical-local-seo", title: "Technical Local SEO", level: 2 },
    { id: "measuring-success", title: "Measuring Success", level: 2 },
    { id: "common-mistakes", title: "Common Mistakes to Avoid", level: 2 },
    { id: "advanced-strategies", title: "Advanced Strategies", level: 2 },
    { id: "conclusion", title: "Conclusion: Building Your Success", level: 1 },
  ], []);

  // Scroll tracking to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tableOfContents]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-black/5 p-4 sticky top-8"
    >
      <h3 className="font-semibold text-neutral-900 mb-4 text-base">Table of Contents</h3>
      <nav className="space-y-1">
        {tableOfContents.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`block w-full text-left transition-all duration-200 ${
              activeSection === item.id
                ? "text-emerald-800 font-semibold bg-emerald-50 border-l-3 border-emerald-600 pl-3 py-1 -ml-1 rounded-r-md"
                : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 py-1 px-1 rounded-md"
            } ${
              item.level === 1 
                ? "text-sm font-medium" 
                : item.level === 2 
                ? "text-xs ml-3" 
                : "text-xs ml-6"
            }`}
          >
            {item.title}
          </button>
        ))}
      </nav>
      
      {/* Progress indicator */}
      <div className="mt-4 pt-3 border-t border-black/5">
        <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
          <span>Progress</span>
          <span>{Math.round((tableOfContents.findIndex(item => item.id === activeSection) + 1) / tableOfContents.length * 100)}%</span>
        </div>
        <div className="w-full bg-neutral-200 rounded-full h-1.5">
          <div 
            className="bg-emerald-600 h-1.5 rounded-full transition-all duration-300"
            style={{ 
              width: `${(tableOfContents.findIndex(item => item.id === activeSection) + 1) / tableOfContents.length * 100}%` 
            }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
}
