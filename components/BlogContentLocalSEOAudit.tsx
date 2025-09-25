"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function BlogContentLocalSEOAudit() {
  const [helpfulRating, setHelpfulRating] = useState(0);
  const [showComments, setShowComments] = useState(false);

  const content = [
    {
      id: "introduction",
      type: "section",
      title: "Common Mistakes in Local SEO Audits and How to Fix Them",
      level: 1,
      content: `As a local business owner, a local SEO audit can reveal why your website isn't attracting nearby customers. But many audits miss critical issues, costing you leads and sales. With 46% of Google searches seeking local businesses, fixing these mistakes can boost your visibility and foot traffic.\n\nQuick Answer: The 5 most common local SEO audit mistakes are: unclaimed Google Business Profiles, neglecting customer reviews, inconsistent NAP information, overlooking website speed, and missing local keywords. Fixing these can increase local search visibility by 200-400% and boost conversions by 7%.\n\nAs an SEO specialist at Harmatia Local, I've seen these pitfalls derail businesses. Below, I'll highlight common local SEO audit mistakes, share a DIY checklist to empower you, and show how our free audit can uncover hidden opportunities.`
    },
    {
      id: "mistake-1-unclaimed-gbp",
      type: "section",
      title: "Mistake 1: Ignoring Unclaimed Google Business Profiles",
      level: 2,
      content: `An unclaimed Google Business Profile (GBP) is a missed opportunity. Unclaimed profiles rank lower and can be edited by anyone, risking inaccurate info.\n\nWhy This Matters:\n• Unclaimed profiles rank 30% lower in local search results\n• Anyone can edit your business information\n• You lose control over your online presence\n• Missing out on valuable customer insights\n\nFix It: Go to google.com/business, claim your profile, and verify ownership via postcard or phone. This ensures control and boosts rankings, as 72% of local searches start with GBP.\n\nPro Tip: Claim your profile immediately to prevent competitors from editing your information. Verified profiles get 70% more clicks than unverified ones.`
    },
    {
      id: "mistake-2-customer-reviews",
      type: "section",
      title: "Mistake 2: Neglecting Customer Reviews",
      level: 2,
      content: `Reviews drive trust and rankings, yet many businesses ignore them. Profiles with fewer than 10 reviews often rank lower.\n\nWhy Reviews Are Critical:\n• 88% of consumers trust online reviews as much as personal recommendations\n• Businesses with 4+ stars get 70% more clicks\n• Reviews are the #2 ranking factor for local SEO\n• Each new review can increase visibility by 5-10%\n\nFix It: Ask happy customers to leave reviews via email or QR codes. Respond to all reviews, even negative ones, to show engagement. Aim for a 4.5+ star average to increase click-through rates by 10-20%.\n\nReview Strategy:\n• Send follow-up emails after service completion\n• Display QR codes at checkout for easy reviewing\n• Respond to all reviews within 24-48 hours\n• Thank customers for positive feedback\n• Address concerns in negative reviews professionally\n\nPro Tip: Turn negative reviews into opportunities to showcase your customer service by responding professionally and offering solutions.`
    },
    {
      id: "mistake-3-nap-consistency",
      type: "section",
      title: "Mistake 3: Inconsistent NAP Information",
      level: 2,
      content: `Inconsistent Name, Address, Phone (NAP) details across your website, GBP, and directories confuse Google and hurt rankings.\n\nWhy NAP Consistency Matters:\n• Google uses NAP as a trust signal for local rankings\n• Inconsistent information confuses search engines\n• Customers may call the wrong number or visit wrong address\n• Hurts your local pack visibility significantly\n\nFix It: Audit your NAP on Google, Yelp, and your site. Use tools like Moz Local to check consistency. Update all listings to match exactly, improving local pack visibility.\n\nNAP Audit Checklist:\n• Google Business Profile\n• Yelp, Facebook, Bing Places\n• Industry-specific directories\n• Your website footer and contact page\n• Local chamber of commerce listings\n• Better Business Bureau\n• Yellow Pages and White Pages\n\nPro Tip: Use a spreadsheet to track all your listings and ensure NAP consistency. Even small differences like "St." vs "Street" can hurt rankings.`
    },
    {
      id: "mistake-4-website-speed",
      type: "section",
      title: "Mistake 4: Overlooking Website Speed",
      level: 2,
      content: `Slow websites lose 50% of visitors and rank lower in local searches. Many audits skip this critical factor.\n\nWhy Speed Matters for Local SEO:\n• 50% of visitors abandon sites that take over 3 seconds to load\n• Google uses page speed as a ranking factor\n• Mobile users expect even faster loading times\n• Slow sites hurt user experience and conversions\n\nFix It: Test speed with Google PageSpeed Insights. Compress images using TinyPNG and enable caching with plugins like W3 Total Cache. Faster sites can boost conversions by 7%.\n\nSpeed Optimization Checklist:\n• Test your site with Google PageSpeed Insights\n• Compress images using TinyPNG or similar tools\n• Enable browser caching\n• Use a content delivery network (CDN)\n• Minimize CSS and JavaScript files\n• Choose a fast hosting provider\n• Optimize your database\n\nPro Tip: Aim for a PageSpeed score of 90+ on mobile and desktop. Even a 1-second improvement can increase conversions by 7%.`
    },
    {
      id: "mistake-5-local-keywords",
      type: "section",
      title: "Mistake 5: Missing Local Keywords",
      level: 2,
      content: `Audits often ignore local keyword optimization, like "best plumber in [City]." Without them, you're invisible to nearby customers.\n\nWhy Local Keywords Are Essential:\n• 46% of Google searches have local intent\n• Local keywords help you rank for "near me" searches\n• They signal to Google that you serve specific areas\n• Drive qualified traffic from nearby customers\n\nFix It: Use Google Keyword Planner to find low-competition, local terms (10-100 monthly searches). Add these to your site's titles, headers, and content to rank higher.\n\nLocal Keyword Research Strategy:\n• Use Google Keyword Planner with location modifiers\n• Check "People Also Ask" for local questions\n• Analyze competitor content for local keywords\n• Target long-tail local phrases: "emergency plumber [City]"\n• Include neighborhood names in your content\n• Use local landmarks and area references\n\nPro Tip: Target 5-10 local keywords per page. Focus on terms your customers actually use when searching for your services.`
    },
    {
      id: "diy-checklist",
      type: "section",
      title: "DIY Local SEO Audit Checklist",
      level: 2,
      content: `Empower yourself with this quick checklist:\n\nEssential Local SEO Audit Steps:\n• Claim and verify your Google Business Profile\n• Request and respond to at least 10 customer reviews\n• Ensure NAP consistency across all platforms\n• Test and improve website speed (aim for under 3 seconds)\n• Add 5-10 local keywords to your website content\n• Update GBP with photos and weekly posts\n\nMonthly Maintenance Tasks:\n• Check for new review opportunities\n• Update business hours and special offers\n• Post fresh content to your Google Business Profile\n• Monitor your local search rankings\n• Check for new citation opportunities\n• Respond to customer questions and reviews\n\nRun this checklist monthly to stay on track. Need a deeper dive? A professional audit can uncover more.\n\nPro Tip: Set up Google Alerts for your business name to monitor mentions and catch any negative reviews quickly.`
    },
    {
      id: "free-audit-cta",
      type: "section",
      title: "Unlock Hidden Opportunities with a Free Audit",
      level: 2,
      content: `Fixing these common mistakes can transform your local SEO, driving more calls, clicks, and customers. But audits take time and expertise to get right.\n\nFrequently Asked Questions:\n\nQ: How often should I run a local SEO audit?\nA: Run a comprehensive audit every 3-6 months, with monthly check-ins on key metrics like reviews and NAP consistency.\n\nQ: What tools should I use for a local SEO audit?\nA: Use Google PageSpeed Insights, Google Business Profile, Moz Local, and Google Search Console for comprehensive auditing.\n\nQ: How long does it take to see results from fixing these mistakes?\nA: Some fixes show immediate results (like claiming your GBP), while others take 2-3 months to impact rankings significantly.\n\nQ: Can I do a local SEO audit myself?\nA: Yes, with the right checklist and tools. However, a professional audit can uncover technical issues and opportunities you might miss.\n\nQ: What's the most important mistake to fix first?\nA: Start with claiming and optimizing your Google Business Profile, as this has the biggest immediate impact on local visibility.\n\nAt Harmatia Local, our Free SEO Consultation & Audit digs deeper, revealing hidden issues and providing a custom plan to dominate local searches. Book your free audit today and start growing your business!\n\nPublished on September 25, 2025 by The SEO-Bedouin, SEO Specialist at Harmatia Local`
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
            className={`mb-8 ${
              section.level === 1 ? "border-b border-gray-200 pb-8" : ""
            }`}
          >
            {section.type === "section" && (
              <h2 className={`open-runde-500 font-bold text-neutral-900 mb-4 ${
                section.level === 1 ? "text-3xl" : section.level === 2 ? "text-2xl" : "text-xl"
              }`}>
                {section.title}
              </h2>
            )}
            <div className="open-runde-400-paragraph text-neutral-700 leading-relaxed whitespace-pre-line">
              {section.content}
            </div>

            {/* Illustrations for select sections */}
            {section.id === "introduction" && (
              <div className="mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
                  alt="Local SEO audit dashboard showing common mistakes and fixes"
                  className="w-full rounded-lg shadow-md"
                  width={800}
                  height={400}
                />
                <p className="text-sm text-neutral-500 mt-2 text-center">
                  Common local SEO audit mistakes that cost businesses leads and visibility
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
              className={`text-2xl transition-colors ${
                star <= helpfulRating ? "text-yellow-400" : "text-gray-300"
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

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-emerald-600 to-lime-600 rounded-xl p-8 text-white text-center shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-4">Ready to Fix Your Local SEO Mistakes?</h3>
        <p className="text-emerald-100 mb-6">
          Get a free professional audit that uncovers hidden issues and provides a custom plan to dominate local searches.
        </p>
        <a
          href="https://calendly.com/harmatia/30min"
          target="_blank"
          className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-neutral-50 transition-colors shadow-lg"
        >
          Get Free SEO Audit
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
