// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function BlogContentGoogleAds() {
  const [helpfulRating, setHelpfulRating] = useState(0);
  const [showComments, setShowComments] = useState(false);

  const content = [
    {
      id: "introduction",
      type: "section",
      title: "Why Local Businesses Need Google Ads for More Foot Traffic",
      level: 1,
      content: `As a local business owner, you want more customers walking through your door. Google Ads can make that happen by putting your business in front of people searching for your services nearby. With 46% of Google searches having local intent, the right ad strategy can double your leads and drive foot traffic.\n\nQuick Answer: Google Ads for local businesses work because they target customers actively searching for your services nearby. With proper neighborhood targeting and low-budget campaigns ($5-10/day), you can increase foot traffic by 2x within 30 days.\n\nAs an SEO specialist at Harmatia Local, I've seen businesses transform with targeted, low-budget Google Ads campaigns. In this guide, I'll break down how to target neighborhoods affordably and share real success stories—showing why our managed campaigns are the hassle-free way to grow..`
    },
    {
      id: "why-google-ads-work",
      type: "section",
      title: "Why Google Ads Work for Local Businesses",
      level: 2,
      content: `Google Ads places your business at the top of local search results, reaching customers ready to buy. Unlike traditional advertising, you only pay when someone clicks, making it cost-effective. For local businesses, targeting specific neighborhoods ensures your budget drives real foot traffic.\n\nKey Benefits of Google Ads for Local Businesses:\n• Pay-per-click model: Only pay when customers actually click\n• Immediate visibility: Appear at the top of search results instantly\n• Precise targeting: Focus on specific neighborhoods and demographics\n• Measurable results: Track clicks, calls, and foot traffic in real-time\n• Cost-effective: Start with as little as $5-10 per day\n\nWhy 46% of Local Searches Matter:\nNearly half of all Google searches have local intent, meaning people are actively looking for nearby services. Google Ads ensures your business appears when these customers are ready to buy.`
    },
    {
      id: "step-1-target-neighborhoods",
      type: "section",
      title: "Step 1: Target Neighborhoods with Precision",
      level: 2,
      content: `Google Ads lets you focus on local customers without wasting money. Here’s how to start small:\n\nSet a Geo-Target:\n• In Google Ads, select a radius (e.g., 5–10 miles) around your business or specific neighborhoods.\n\nUse Local Keywords:\n• Bid on terms like “coffee shop near [Neighborhood]” or “emergency plumber [City]”.\n\nSet a Low Budget:\n• Start with $5–10/day, adjusting based on clicks and conversions.\n\nThis keeps costs low while reaching nearby customers searching right now.`
    },
    {
      id: "step-2-craft-ads",
      type: "section",
      title: "Step 2: Craft Compelling Ads on a Budget",
      level: 2,
      content: `Create ads that grab attention without breaking the bank:\n\nWrite Clear Headlines:\n• Use phrases like “Top-Rated Bakery in [City]” or “24/7 Plumber Near You.”\n\nAdd Extensions:\n• Include location, call, or sitelink extensions to boost clicks (free to add).\n\nUse Ad Scheduling:\n• Run ads during peak hours (e.g., lunch for restaurants) to save money.\n\nExample: A small café in Seattle spent $100/month on ads targeting “brunch near Capitol Hill” and saw a 2× increase in weekend foot traffic within 30 days.`
    },
    {
      id: "step-3-track-optimize",
      type: "section",
      title: "Step 3: Track and Optimize for ROI",
      level: 2,
      content: `Use Google Ads’ free analytics to monitor performance:\n\nCheck Conversions:\n• Track calls, bookings, or directions requests.\n\nRefine Keywords:\n• Pause low-performing keywords and boost high-ROI ones.\n\nTest Ads:\n• Try different headlines to find what drives the most clicks.\n\nExample: A local gym in Austin doubled its sign-ups by optimizing ads for “gym membership near me,” spending just $150/month. Smart tweaks maximize every dollar.`
    },
    {
      id: "case-study",
      type: "section",
      title: "Case Study: Real Results from Google Ads",
      level: 2,
      content: `Take Jane’s Flower Shop in Miami. With a $200/month budget, we targeted “flower delivery in Brickell” and “wedding florist Miami.” Within two months, Jane’s leads tripled, and in-store visits rose by 60%. Another client, a Chicago dentist, used “emergency dentist near Loop” ads and saw a 2.5× increase in appointments. These results show how Google Ads can transform local businesses with minimal investment.`
    },
    {
      id: "why-choose-professional",
      type: "section",
      title: "Why Choose Professional Google Ads Management?",
      level: 2,
      content: `Setting up Google Ads is simple, but optimizing for maximum foot traffic takes expertise. Managing bids, keywords, and ad schedules can be time-consuming. Harmatia Local's Google Ads Management service handles it all, delivering tailored campaigns that drive results. Our clients commonly see rapid ROI once optimized.\n\nFrequently Asked Questions:\n\nQ: How much should I spend on Google Ads for my local business?\nA: Start with $5-10 per day for small businesses. This budget allows you to test keywords and optimize before scaling up.\n\nQ: How long does it take to see results from Google Ads?\nA: Most local businesses see increased foot traffic within 2-4 weeks, with significant improvements within 30-60 days.\n\nQ: Can Google Ads work for any type of local business?\nA: Yes! Google Ads work for restaurants, salons, plumbers, dentists, gyms, and virtually any local service business.\n\nQ: What's the difference between Google Ads and local SEO?\nA: Google Ads provide immediate visibility (you pay for clicks), while local SEO builds long-term organic rankings (free but takes time).\n\nBook your free SEO consultation and audit today to start driving more customers to your door with hassle-free Google Ads!`
    },
    {
      id: "conclusion",
      type: "section",
      title: "Ready to Get More Local Customers?",
      level: 1,
      content: `Google Ads can put your business in front of ready-to-buy customers today. Start small, target smart, and optimize often—or let us manage it for you so you can focus on running your business.\n\nPublished on September 25, 2025 by The SEO-Bedouin, SEO Specialist at Harmatia Local`
    }
  ];

  return (
    <div id="content" className="space-y-8">
      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        {content.map((section, index) => (
          <motion.div
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`mb-8 ${section.level === 1 ? "border-b border-gray-200 pb-8" : ""
              }`}
          >
            {section.type === "section" && (
              <h2 className={`open-runde-500 font-bold text-neutral-900 mb-4 ${section.level === 1 ? "text-3xl" : section.level === 2 ? "text-2xl" : "text-xl"
                }`}>
                {section.title}
              </h2>
            )}
            <div className="open-runde-400-paragraph text-neutral-700 leading-relaxed whitespace-pre-line">
              {section.content}
            </div>

            {/* Illustrations for select sections */}
            {section.id === "why-google-ads-work" && (
              <div className="mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
                  alt="Google Ads shown above local search results"
                  className="w-full rounded-lg shadow-md"
                  width={800}
                  height={400}
                />
                <p className="text-sm text-neutral-500 mt-2 text-center">
                  Google Ads helps you appear when local customers are ready to act
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </article>

      {/* Helpfulness Rating */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 backdrop-blur-sm rounded-xl border border-black/5 p-6 text-center"
      >
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Was this article helpful?</h3>
        <div className="flex justify-center space-x-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setHelpfulRating(star)}
              className={`text-2xl transition-colors ${star <= helpfulRating ? "text-yellow-400" : "text-gray-300"
                } hover:text-yellow-400`}
            >
              ★
            </button>
          ))}
        </div>
        <p className="text-sm text-neutral-600">
          {helpfulRating > 0 ? "Thank you for your feedback!" : "Rate this article to help us improve"}
        </p>
      </motion.div>

      {/* Cta Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-emerald-600 to-lime-600 rounded-xl p-8 text-white text-center shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-4">Ready to Get More Foot Traffic with Google Ads?</h3>
        <p className="text-emerald-100 mb-6">
          Let Harmatia Local manage Google Ads for you—targeted campaigns that drive local customers.
        </p>
        <a
          href="https://calendly.com/harmatia/30min"
          target="_blank"
          className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-neutral-50 transition-colors shadow-lg"
        >
          Book Free SEO Consultation
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>

      {/* Comments Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg border border-gray-200 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Comments</h3>
          <button
            onClick={() => setShowComments(!showComments)}
            className="text-blue-600 hover:text-blue-800"
          >
            {showComments ? "Hide Comments" : "Show Comments"}
          </button>
        </div>

        {showComments && (
          <div className="space-y-6">
            {/* Comment Form */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-4">Leave a Comment</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <textarea
                  placeholder="Your Comment"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}


