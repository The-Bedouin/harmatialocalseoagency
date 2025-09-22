"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogFeaturedSideCard() {
  const post = {
    category: "Local SEO",
    readTime: "12 min read",
    title: "What is Local SEO? The Complete Guide to Dominating Local Search Results",
    excerpt:
      "Master local SEO with our comprehensive guide covering Google Business Profile optimization, NAP citations, local content strategy, and advanced techniques to dominate local search results and attract more customers.",
    author: "The SEO-Bedouin",
    date: "Dec 15, 2024",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
    href: "/what-is-local-seo",
  };

  return (
    <section className="relative py-6 sm:py-8 bg-white">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative rounded-2xl border border-white/50 ring-1 ring-black/5 bg-white overflow-hidden animate-float shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Left: Text content */}
            <div className="lg:col-span-7 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-[12px] text-neutral-600 font-sans">
                <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium">
                  {post.category}
                </span>
                <span className="mx-1 text-neutral-300">•</span>
                <span className="text-neutral-500">{post.readTime}</span>
              </div>

              <h3
                className="mt-3 text-[22px] sm:text-[26px] font-medium leading-[1.2] tracking-tight text-neutral-900"
                style={{fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif', color: 'rgb(28, 28, 28)'}}
              >
                {post.title}
              </h3>

              <p
                className="mt-3 text-[15px] sm:text-[16px] leading-[1.55] text-neutral-600 max-w-xl"
                style={{fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif', color: 'rgb(110, 110, 110)'}}
              >
                {post.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between text-[12px] text-neutral-600 font-sans">
                <div>
                  <div className="text-neutral-500">Written by</div>
                  <div className="text-neutral-900 font-semibold">{post.author}</div>
                </div>
                <div className="text-right">
                  <div className="text-neutral-500">Posted on</div>
                  <div className="text-neutral-900 font-semibold">{post.date}</div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href={post.href}
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  Read the complete guide
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="lg:col-span-5">
              <Link href={post.href} aria-label={post.title} className="block h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


