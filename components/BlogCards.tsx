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
    category: "Wealth",
    readTime: "4 min read",
    title:
      "How to Build Wealth from Scratch: The Ultimate Guide to Achieving Financial Freedom!",
    excerpt:
      "Achieving financial freedom isn't a matter of luck; it's the result of strategic planning, disciplined action, and an unwavering...",
    author: "The SEO-Bedouin",
    date: "Apr 19, 2025",
    image:
      "https://images.unsplash.com/photo-1612817159949-1f97d1c5ad87?q=80&w=2000&auto=format&fit=crop",
    href: "#",
  },
  {
    category: "Investing",
    readTime: "7 min read",
    title:
      "The Millionaire's Secret: How to Invest Like the Ultra-Wealthy and Watch Your Money Grow",
    excerpt:
      "When you look at the ultra-wealthy, you might wonder how they seem to accumulate so much wealth, even during economic...",
    author: "The SEO-Bedouin",
    date: "Apr 18, 2025",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop",
    href: "#",
  },
  {
    category: "Savings",
    readTime: "6 min read",
    title:
      "The Hidden Truth About Saving Money That Banks Don't Want You to Know!",
    excerpt:
      "When you put your money into a traditional savings account, you likely think you're taking a step toward financial security. But here's the...",
    author: "The SEO-Bedouin",
    date: "Apr 17, 2025",
    image:
      "https://images.unsplash.com/photo-1520975693416-46f5d14222de?q=80&w=2000&auto=format&fit=crop",
    href: "#",
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


