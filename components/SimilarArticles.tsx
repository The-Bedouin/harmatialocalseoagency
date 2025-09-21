"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type BlogPost = {
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  href?: string;
};

const similarPosts: BlogPost[] = [
  {
    category: "Local SEO",
    readTime: "6 min read",
    title: "Google Business Profile Optimization: Complete Guide to Dominating Local Search",
    excerpt: "Master your Google Business Profile with our comprehensive optimization guide. Learn proven strategies to improve your local search rankings and attract more customers...",
    author: "The SEO-Bedouin",
    date: "Dec 10, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    href: "#",
  },
  {
    category: "Local SEO",
    readTime: "8 min read",
    title: "Local SEO Checklist: 25 Essential Steps to Boost Your Local Rankings",
    excerpt: "Follow our comprehensive local SEO checklist to improve your business visibility in local search results. From NAP consistency to local link building...",
    author: "The SEO-Bedouin",
    date: "Dec 5, 2024",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
    href: "#",
  },
  {
    category: "Local SEO",
    readTime: "5 min read",
    title: "NAP Citations: How to Build Consistent Business Listings Across the Web",
    excerpt: "Learn how to build consistent Name, Address, and Phone number citations across directories and platforms to strengthen your local SEO foundation...",
    author: "The SEO-Bedouin",
    date: "Nov 28, 2024",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2000&auto=format&fit=crop",
    href: "#",
  },
];

function CategoryAndMeta({ category, readTime }: { category: string; readTime: string }) {
  return (
    <div className="flex items-center gap-2 text-[12px] text-neutral-600 font-sans">
      <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium">
        {category}
      </span>
      <span className="mx-1 text-neutral-300">•</span>
      <span className="text-neutral-500">{readTime}</span>
    </div>
  );
}

function SimilarArticleCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative animate-float"
    >
      <div className="absolute inset-0 bg-white rounded-2xl scale-[1.02] shadow-[0_8px_24px_-10px_rgba(0,0,0,0.18)] animate-shadow-float"></div>

      <Link
        href={post.href || "#"}
        aria-label={post.title}
        className="group relative block rounded-2xl bg-white ring-1 ring-black/5 border border-white/40 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="p-6">
          <CategoryAndMeta category={post.category} readTime={post.readTime} />

          <h3
            className="mt-3 text-[18px] sm:text-[20px] font-medium leading-[1.2] tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-emerald-600"
            style={{fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif', color: 'rgb(28, 28, 28)'}}
          >
            {post.title}
          </h3>

          <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.5] text-neutral-600"
             style={{fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif', color: 'rgb(110, 110, 110)'}}>
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
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out"></div>
      </Link>
    </motion.div>
  );
}

export default function SimilarArticles() {
  return (
    <section aria-labelledby="similar-articles-heading" className="relative py-12 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 id="similar-articles-heading" className="open-runde-500 text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            See Similar Articles
          </h2>
          <p className="open-runde-400-paragraph text-neutral-600 max-w-2xl mx-auto">
            Continue your local SEO journey with these related guides and strategies to help your business dominate local search results.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {similarPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SimilarArticleCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
