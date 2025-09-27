"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

export default function BlogMobileSidebar() {
  const [activeTab, setActiveTab] = useState("toc");
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

  const relatedPosts = [
    {
      id: 1,
      title: "Google Business Profile Optimization Guide",
      excerpt: "Complete guide to optimizing your Google Business Profile for maximum local visibility.",
      date: "December 10, 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Local SEO Checklist for Small Businesses",
      excerpt: "Essential checklist to improve your local search rankings and attract more customers.",
      date: "December 5, 2024",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "NAP Citations: Building Local Authority",
      excerpt: "Learn how to build consistent NAP citations across the web to boost your local SEO.",
      date: "November 28, 2024",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="lg:hidden bg-white border-t border-gray-200">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("toc")}
          className={`flex-1 py-3 px-4 text-sm font-medium ${activeTab === "toc"
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-600 hover:text-gray-900"
            }`}
        >
          Table of Contents
        </button>
        <button
          onClick={() => setActiveTab("related")}
          className={`flex-1 py-3 px-4 text-sm font-medium ${activeTab === "related"
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-600 hover:text-gray-900"
            }`}
        >
          Related Posts
        </button>
        <button
          onClick={() => setActiveTab("share")}
          className={`flex-1 py-3 px-4 text-sm font-medium ${activeTab === "share"
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-600 hover:text-gray-900"
            }`}
        >
          Share
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === "toc" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-2"
          >
            {tableOfContents.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left text-sm transition-all duration-200 ${activeSection === item.id
                  ? "text-emerald-800 font-semibold bg-emerald-50 border-l-4 border-emerald-600 pl-4 py-2 -ml-2 rounded-r-md"
                  : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 py-2 px-2 rounded-md"
                  } ${item.level === 1
                    ? "font-medium"
                    : item.level === 2
                      ? "ml-4"
                      : "ml-8"
                  }`}
              >
                {item.title}
              </button>
            ))}
          </motion.div>
        )}

        {activeTab === "related" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {relatedPosts.map((post) => (
              <div key={post.id} className="flex space-x-3">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 rounded object-cover flex-shrink-0"
                  width={64}
                  height={64}
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-600 mb-1">{post.date}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "share" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-3 rounded-md hover:bg-blue-700 transition-colors text-sm">
                <i className="fab fa-facebook" />
                <span>Facebook</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-blue-400 text-white py-2 px-3 rounded-md hover:bg-blue-500 transition-colors text-sm">
                <i className="fab fa-twitter" />
                <span>Twitter</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center space-x-2 bg-blue-700 text-white py-2 px-3 rounded-md hover:bg-blue-800 transition-colors text-sm">
                <i className="fab fa-linkedin" />
                <span>LinkedIn</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-gray-600 text-white py-2 px-3 rounded-md hover:bg-gray-700 transition-colors text-sm">
                <i className="fas fa-envelope" />
                <span>Email</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
