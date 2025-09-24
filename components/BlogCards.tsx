"use client";

import Link from "next/link";

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

const posts: BlogPost[] = [
  {
    category: "Local SEO",
    readTime: "5 min read",
    title:
      "How to Optimize Your Google Business Profile for Local Searches",
    excerpt:
      "As a local business owner, getting found online can make or break your success. Did you know that 72% of consumers who perform a local search use Google to discover businesses like yours? That's a huge opportunity! Your Google Business Profile (GBP) is often the first touchpoint, powering results in Google Search and Maps. But if it's not optimized, you're missing out on local customers. In this guide, I'll share simple tweaks to boost your rankings—focusing on photos, reviews, and more. As an SEO specialist at Harmatia Local, I've helped countless businesses skyrocket their visibility. Let's dive in.",
    author: "The SEO-Bedouin",
    date: "Sep 23, 2025",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    href: "/how-to-optimize-google-business-profile",
  },
  {
    category: "Local SEO",
    readTime: "6 min read",
    title:
      "Best Free Tools for Local Keyword Research Beginners",
    excerpt:
      "As a local business owner, getting found online starts with the right keywords. But where do you begin if you're new to SEO? The good news: you don't need expensive tools to uncover keywords that attract local customers. As an SEO specialist at Harmatia Local, I've helped businesses boost their visibility using free tools. In this guide, I'll walk you through Google Keyword Planner and Google's 'People Also Ask' for quick wins, showing you how to drive more traffic and leads. Plus, I'll explain why these efforts pay off—potentially increasing your leads by 50% or more. Let's get started!",
    author: "The SEO-Bedouin",
    date: "Sep 23, 2025",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    href: "/best-free-tools-local-keyword-research",
  },
  {
    category: "Local SEO",
    readTime: "7 min read",
    title:
      "Step-by-Step Guide to Website Speed for Local SEO Success",
    excerpt:
      "As a local business owner, your website is your digital storefront, but if it's slow, you're losing customers. Studies show that 50% of visitors abandon sites that take over 3 seconds to load. A fast website not only keeps visitors happy but also boosts your local SEO rankings, driving more foot traffic and leads. As an SEO specialist at Harmatia Local, I'll share simple, jargon-free steps to speed up your site, focusing on basics like image compression. Follow these tips to keep customers and rank higher—or let our optimization service accelerate your growth.",
    author: "The SEO-Bedouin",
    date: "Sep 24, 2025",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    href: "/website-speed-local-seo-guide",
  },
  {
    category: "Real Estate",
    readTime: "8 min read",
    title:
      "The Real Estate Revolution: How Smart Investors Are Building Million-Dollar Portfolios",
    excerpt:
      "The real estate market has changed dramatically, and those who understand the new rules are building incredible wealth. Discover the strategies...",
    author: "The SEO-Bedouin",
    date: "Apr 16, 2025",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop",
    href: "#",
  },
  {
    category: "Cryptocurrency",
    readTime: "5 min read",
    title:
      "Bitcoin Beyond the Hype: A Practical Guide to Digital Currency Investment",
    excerpt:
      "Cryptocurrency isn't just a trend—it's the future of money. Learn how to navigate this exciting but volatile market with confidence and...",
    author: "The SEO-Bedouin",
    date: "Apr 15, 2025",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
    href: "#",
  },
  {
    category: "Business",
    readTime: "9 min read",
    title:
      "From Side Hustle to Empire: The Entrepreneur's Guide to Scaling Your Business",
    excerpt:
      "Starting a business is one thing, but scaling it to generate real wealth is another. Here's how successful entrepreneurs turn their ideas into...",
    author: "The SEO-Bedouin",
    date: "Apr 14, 2025",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
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

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="relative animate-float">
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
            className="mt-3 text-[18px] sm:text-[20px] font-medium leading-[1.2] tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-green-600"
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
    </div>
  );
}

export default function BlogCards() {
  return (
    <section aria-labelledby="blog-cards-heading" className="relative py-12 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <h2 id="blog-cards-heading" className="sr-only">Featured posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}


