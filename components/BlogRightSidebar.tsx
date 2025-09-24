"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogRightSidebar() {
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
    <div className="space-y-6">
      {/* Advertisement Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-emerald-50 to-lime-50 rounded-xl border border-emerald-200/50 p-6 text-center shadow-sm"
      >
        <div className="mb-4">
          <span className="finance-logo inline-flex h-12 w-12 items-center justify-center rounded-lg relative overflow-hidden mx-auto mb-3">
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
          <h4 className="font-semibold text-neutral-900">Harmatia SEO Tools</h4>
        </div>
        <p className="text-sm text-neutral-700 mb-4">
          Get professional SEO analysis and optimization tools to grow your business online.
        </p>
        <button className="btn-green btn-green-md w-full">
          Try Free Tools
        </button>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="bg-gradient-to-br from-neutral-50 to-white rounded-xl border border-neutral-200/50 p-6 shadow-sm"
      >
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-full mb-3">
            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h4 className="font-semibold text-neutral-900 mb-2">Stay Updated</h4>
          <p className="text-sm text-neutral-600 mb-4">
            Get the latest investment tips and strategies delivered to your inbox.
          </p>
        </div>
        
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-neutral-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 px-3 rounded-md hover:bg-emerald-700 transition-colors text-sm font-medium"
          >
            Subscribe Now
          </button>
        </form>
        
        <p className="text-xs text-neutral-500 text-center mt-3">
          No spam. Unsubscribe anytime.
        </p>
      </motion.div>

      {/* Related Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-black/5 p-6"
      >
        <h3 className="font-semibold text-neutral-900 mb-4">Related Posts</h3>
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
                <h4 className="text-sm font-medium text-neutral-900 line-clamp-2 mb-1">
                  {post.title}
                </h4>
                <p className="text-xs text-neutral-600 mb-1">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Social Share */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-black/5 p-6"
      >
        <h3 className="font-semibold text-neutral-900 mb-4">Share This Article</h3>
        <div className="space-y-3">
          <button className="w-full bg-blue-600 text-white py-2 px-3 rounded-md hover:bg-blue-700 transition-colors text-sm">
            <i className="fab fa-facebook mr-2"></i>Facebook
          </button>
          <button className="w-full bg-blue-400 text-white py-2 px-3 rounded-md hover:bg-blue-500 transition-colors text-sm">
            <i className="fab fa-twitter mr-2"></i>Twitter
          </button>
          <button className="w-full bg-blue-700 text-white py-2 px-3 rounded-md hover:bg-blue-800 transition-colors text-sm">
            <i className="fab fa-linkedin mr-2"></i>LinkedIn
          </button>
          <button className="w-full bg-gray-600 text-white py-2 px-3 rounded-md hover:bg-gray-700 transition-colors text-sm">
            <i className="fas fa-envelope mr-2"></i>Email
          </button>
        </div>
      </motion.div>
    </div>
  );
}
