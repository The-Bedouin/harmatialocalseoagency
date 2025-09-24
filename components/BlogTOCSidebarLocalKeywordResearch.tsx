"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function BlogTOCSidebarLocalKeywordResearch() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [scrollProgress, setScrollProgress] = useState(0);

  const tocItems = [
    { id: "introduction", title: "Introduction", level: 1 },
    { id: "why-local-keyword-research", title: "Why Local Keyword Research Matters", level: 2 },
    { id: "tool-1-google-keyword-planner", title: "Tool 1: Google Keyword Planner", level: 2 },
    { id: "tool-2-people-also-ask", title: "Tool 2: Google's 'People Also Ask' (PAA)", level: 2 },
    { id: "roi-of-keyword-research", title: "The ROI of Local Keyword Research", level: 2 },
    { id: "conclusion", title: "Need Expert Help to Maximize Results?", level: 1 }
  ];

  // Scroll detection to update active section and progress
  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      // Update active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }

      // Update scroll progress
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        {/* Scroll Progress Indicator */}
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
        
        <div className="mt-6 pt-4 border-t border-neutral-200">
          <p className="text-xs text-neutral-500 mb-3">Share this article:</p>
          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-xs hover:bg-blue-700 transition-colors">
              Twitter
            </button>
            <button className="flex-1 bg-blue-800 text-white px-3 py-2 rounded-lg text-xs hover:bg-blue-900 transition-colors">
              LinkedIn
            </button>
            <button className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg text-xs hover:bg-green-700 transition-colors">
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
