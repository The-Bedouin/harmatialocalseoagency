"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

export default function BlogTOCSidebarGoogleAds() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [scrollProgress, setScrollProgress] = useState(0);

  const tocItems = useMemo(() => [
    { id: "introduction", title: "Introduction", level: 1 },
    { id: "why-google-ads-work", title: "Why Google Ads Work", level: 2 },
    { id: "step-1-target-neighborhoods", title: "Step 1: Target Neighborhoods", level: 2 },
    { id: "step-2-craft-ads", title: "Step 2: Craft Compelling Ads", level: 2 },
    { id: "step-3-track-optimize", title: "Step 3: Track & Optimize", level: 2 },
    { id: "case-study", title: "Case Study", level: 2 },
    { id: "why-choose-professional", title: "Why Professional Management", level: 2 },
    { id: "conclusion", title: "Conclusion", level: 1 }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }

      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-8"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-black/5 p-6 shadow-sm">
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
            <span>Reading Progress</span>
            <span>{Math.round(scrollProgress)}%</span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-1.5">
            <div 
              className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Table of Contents</h3>
        <nav className="space-y-1">
          {tocItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-emerald-100 text-emerald-700 font-medium border-l-4 border-emerald-500"
                  : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 border-l-4 border-transparent"
              } ${
                item.level === 1 ? "font-semibold" : item.level === 2 ? "ml-4" : "ml-8"
              }`}
            >
              <span className="block truncate">{item.title}</span>
            </button>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}


