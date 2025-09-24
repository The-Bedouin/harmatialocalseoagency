"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function BlogSidebar() {
  const [activeSection, setActiveSection] = useState("introduction");

  const tableOfContents = [
    { id: "introduction", title: "Introduction: The Wealth Secret", level: 1 },
    { id: "traditional-investing", title: "Traditional Investing Limitations", level: 2 },
    { id: "alternative-strategies", title: "Alternative Investment Strategies", level: 2 },
    { id: "real-estate", title: "Real Estate Investment", level: 3 },
    { id: "crypto", title: "Cryptocurrency Opportunities", level: 3 },
    { id: "business-investment", title: "Business Investment", level: 3 },
    { id: "implementation", title: "Implementation Strategy", level: 2 },
    { id: "risk-management", title: "Risk Management", level: 2 },
    { id: "conclusion", title: "Conclusion: Your Path to Freedom", level: 1 },
  ];

  const relatedPosts = [
    {
      id: 1,
      title: "Building Multiple Income Streams",
      excerpt: "Learn how to diversify your income sources for financial stability.",
      date: "March 15, 2025",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Real Estate Investment Guide",
      excerpt: "Complete guide to getting started in real estate investing.",
      date: "March 10, 2025",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Cryptocurrency for Beginners",
      excerpt: "Everything you need to know about crypto investing.",
      date: "March 5, 2025",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Author Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
      >
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src="https://i.pravatar.cc/96?img=12"
            alt="Luke Roberts"
            className="w-16 h-16 rounded-full object-cover"
            width={64}
            height={64}
          />
          <div>
            <h3 className="font-semibold text-gray-900">Luke Roberts</h3>
            <p className="text-sm text-gray-600">Investment Strategist</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 mb-4">
          Luke is a certified financial advisor with over 10 years of experience helping individuals achieve financial freedom through strategic investments.
        </p>
        <div className="flex space-x-3">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </motion.div>

      {/* Table of Contents */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
      >
        <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
        <nav className="space-y-2">
          {tableOfContents.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className={`block text-sm transition-colors ${
                activeSection === item.id
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              } ${
                item.level === 1 ? "font-medium" : item.level === 2 ? "ml-4" : "ml-8"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Advertisement Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg border border-blue-200 p-6 text-center"
      >
        <div className="mb-4">
          <i className="fas fa-chart-line text-3xl text-blue-600 mb-2"></i>
          <h4 className="font-semibold text-gray-900">Harmatia SEO Tools</h4>
        </div>
        <p className="text-sm text-gray-700 mb-4">
          Get professional SEO analysis and optimization tools to grow your business online.
        </p>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          Try Free Tools
        </button>
      </motion.div>

      {/* Related Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
      >
        <h3 className="font-semibold text-gray-900 mb-4">Related Posts</h3>
        <div className="space-y-4">
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
        </div>
      </motion.div>

      {/* Social Share */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
      >
        <h3 className="font-semibold text-gray-900 mb-4">Share This Article</h3>
        <div className="flex space-x-3">
          <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-md hover:bg-blue-700 transition-colors text-sm">
            <i className="fab fa-facebook mr-2"></i>Facebook
          </button>
          <button className="flex-1 bg-blue-400 text-white py-2 px-3 rounded-md hover:bg-blue-500 transition-colors text-sm">
            <i className="fab fa-twitter mr-2"></i>Twitter
          </button>
        </div>
        <div className="flex space-x-3 mt-2">
          <button className="flex-1 bg-blue-700 text-white py-2 px-3 rounded-md hover:bg-blue-800 transition-colors text-sm">
            <i className="fab fa-linkedin mr-2"></i>LinkedIn
          </button>
          <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded-md hover:bg-gray-700 transition-colors text-sm">
            <i className="fas fa-envelope mr-2"></i>Email
          </button>
        </div>
      </motion.div>
    </div>
  );
}
