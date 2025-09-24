"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function BlogContentGoogleBusinessProfile() {
  const [helpfulRating, setHelpfulRating] = useState(0);
  const [showComments, setShowComments] = useState(false);

  const content = [
    {
      id: "introduction",
      type: "section",
      title: "How to Optimize Your Google Business Profile for Local Searches",
      level: 1,
      content: `As a local business owner, getting found online can make or break your success. Did you know that 72% of consumers who perform a local search use Google to discover businesses like yours? That's a huge opportunity! Your Google Business Profile (GBP) is often the first touchpoint, powering results in Google Search and Maps. But if it's not optimized, you're missing out on local customers. In this guide, I'll share simple tweaks to boost your rankings—focusing on photos, reviews, and more. As an SEO specialist at Harmatia Local, I've helped countless businesses skyrocket their visibility. Let's dive in.

Quick Answer: To optimize your Google Business Profile for local searches, you need to: claim and verify your profile, fill out accurate business details, upload high-quality photos, encourage and manage reviews, and post regular updates. These simple GBP tweaks can boost your local search rankings significantly.`
    },
    {
      id: "why-gbp-matters",
      type: "section",
      title: "Why Your Google Business Profile Matters for Local SEO",
      level: 2,
      content: `Nearly half (46%) of all Google searches have local intent, meaning people are looking for nearby services right now. GBP acts as your digital storefront, influencing where you appear in the "local pack" results. A well-optimized profile can increase clicks, calls, and foot traffic by up to 70% in some cases. Plus, it's free to set up and manage—though it takes time to get right. Optimizing it signals to Google that your business is active and trustworthy, improving your chances against competitors.

Key Benefits of Google Business Profile Optimization:
• Increased Visibility: Appear in local pack results and Google Maps
• Higher Click-Through Rates: Optimized profiles get 35% more website clicks
• More Customer Engagement: 42% more direction requests with photos
• Better Local Search Rankings: Signals trust and relevance to Google
• Free Marketing Tool: No cost to set up and maintain

Why 72% of Local Searches Start on Google:
Google dominates local search because it provides instant, relevant results with business information, reviews, and directions all in one place. Your GBP is your chance to control this first impression.`
    },
    {
      id: "step-1-claim-verify",
      type: "section",
      title: "Step 1: Claim and Verify Your Profile",
      level: 2,
      content: `How to Claim Your Google Business Profile:

1. Visit google.com/business and search for your business name
2. Claim existing listing if found, or create new one if not
3. Choose verification method: postcard, phone, or email
4. Complete verification to unlock full control

Why Verification Matters:
• Prevents competitors from editing your information
• Unlocks all optimization features
• Required for ranking in local search results
• Foundation for all other GBP tweaks

Pro Tip: Unclaimed profiles often rank lower in local search results. Verification is the first step to boosting your local SEO rankings.`
    },
    {
      id: "step-2-business-details",
      type: "section",
      title: "Step 2: Fill Out Accurate Business Details",
      level: 2,
      content: `Essential Business Information to Add:

NAP (Name, Address, Phone):
• Use exact same information across all platforms
• Include suite numbers and apartment numbers
• Keep phone number format consistent

Business Categories:
• Primary: Most specific category (e.g., "Italian Restaurant" not "Restaurant")
• Secondary: Additional relevant categories
• Choose categories that match your actual services

Additional Details:
• Business hours (including special hours)
• Website URL
• Business description with local keywords
• Service areas if applicable

Pro Tips for Better Rankings:
• Use natural keywords in descriptions: "best coffee shop in [Your City]"
• Enable messaging and Q&A features for user engagement
• Keep all information consistent with your website
• Update information immediately when changes occur

Why Complete Profiles Rank Higher:
Google favors complete, accurate profiles because they provide better user experience and more relevant search results.`
    },
    {
      id: "step-3-photos",
      type: "section",
      title: "Step 3: Upload High-Quality Photos",
      level: 2,
      content: `Why Photos Matter for Local SEO:
Photos are a game-changer—profiles with images get 42% more directions requests and 35% more website clicks. This visual tweak makes your listing stand out in local searches, drawing in more curious clicks.

Types of Photos to Upload:
• Storefront exterior - First impression for customers
• Interior shots - Show your business atmosphere
• Products/services - What you offer customers
• Team photos - Build trust and personal connection
• Cover photo - Main image that represents your business
• Logo - Professional brand representation

Photo Optimization Tips:
• Upload 10-15 high-quality images minimum
• Use clear, well-lit photos
• Include recent images (not outdated)
• Geotag photos if possible
• Avoid stock images - authenticity wins
• Encourage customers to add their own photos

Pro Tip: Photos with people and activity perform better than empty spaces. Show your business in action!`
    },
    {
      id: "step-4-reviews",
      type: "section",
      title: "Step 4: Encourage and Manage Reviews",
      level: 2,
      content: `Why Reviews Are Gold for Local SEO:
Reviews are gold for local SEO—Google favors businesses with high ratings and fresh feedback. More reviews mean better visibility; studies show profiles with 10+ reviews rank higher.

Review Goals:
• Aim for 4.5+ star average rating
• Collect 10+ reviews minimum
• Encourage fresh, recent reviews
• Respond to all reviews within 24-48 hours

How to Get More Reviews:
• Ask satisfied customers - "Scan this QR code to share your experience"
• Follow up via email after service completion
• Include review links in receipts and invoices
• Train staff to ask for reviews appropriately
• Make it easy with direct links to review platforms

Review Management Best Practices:
• Respond to all reviews - positive and negative
• Thank customers for positive feedback
• Address concerns in negative reviews professionally
• Show you care about customer feedback
• Use responses to highlight business strengths

Pro Tip: Turn feedback into fuel for growth. Every review is an opportunity to improve and show your commitment to customer satisfaction.`
    },
    {
      id: "step-5-posts",
      type: "section",
      title: "Step 5: Post Regular Updates and Offers",
      level: 2,
      content: `Why Google Posts Matter:
Keep your profile alive with Google Posts—short updates like events, specials, or news. These appear in search results and can drive immediate traffic. This signals to Google that your business is active, improving your local search rankings over time.

What to Post:
• Events - Grand openings, special occasions, community events
• Offers - Discounts, promotions, seasonal specials
• News - Business updates, new services, achievements
• Products - Featured items, new arrivals, bestsellers
• Behind-the-scenes - Team spotlights, process insights

Posting Best Practices:
• Post weekly for consistent activity
• Use local keywords - "local [service] deals in [City]"
• Add compelling images - Visual content performs better
• Include CTAs - "Book Now," "Call Today," "Visit Us"
• Keep posts fresh - Don't repeat the same content

Pro Tips for Better Engagement:
• Post during peak business hours
• Use action-oriented language
• Include location-specific information
• Test different post types to see what works
• Monitor which posts drive the most traffic

Pro Tip: Regular posting shows Google your business is active and engaged, which can boost your local search rankings.`
    },
    {
      id: "conclusion",
      type: "section",
      title: "Ready to Take Your Local SEO to the Next Level?",
      level: 1,
      content: `Optimizing your Google Business Profile is straightforward but time-consuming. These tweaks—like adding photos and gathering reviews—can significantly boost your rankings and bring in more local customers. But if you'd rather focus on running your business, let Harmatia Local handle it. Our Google Business Profile Management service optimizes everything for you, delivering quick wins and ongoing results. Contact us today for a free SEO consultation and audit to see how we can help your business thrive.

Published on September 23, 2025 by the seo bedouin SEO Specialist at Harmatia Local`
    }
  ];

  return (
    <div className="space-y-8">
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
            {section.type === "subsection" && (
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {section.title}
              </h3>
            )}
            <div className="open-runde-400-paragraph text-neutral-700 leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
            
            {/* Add relevant images for specific sections */}
            {section.id === "why-gbp-matters" && (
              <div className="mt-6">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
                  alt="Google Business Profile showing local search results and business listings"
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-neutral-500 mt-2 text-center">
                  Google Business Profile is your digital storefront for local searches
                </p>
              </div>
            )}
            
            {section.id === "step-3-photos" && (
              <div className="mt-6">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
                  alt="High-quality business photos showing storefront, interior, and products"
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-neutral-500 mt-2 text-center">
                  High-quality photos significantly improve your Google Business Profile performance
                </p>
              </div>
            )}
            
            {section.id === "step-4-reviews" && (
              <div className="mt-6">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
                  alt="Customer reviews dashboard showing star ratings and review management"
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-neutral-500 mt-2 text-center">
                  Managing customer reviews is crucial for local SEO success
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
        <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Google Business Profile?</h3>
        <p className="text-emerald-100 mb-6">
          Let Harmatia Local handle your Google Business Profile optimization and boost your local search rankings.
        </p>
        <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-neutral-50 transition-colors shadow-lg">
          Get Free SEO Consultation
        </button>
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
          <h3 className="text-xl font-semibold text-gray-900">Comments (2)</h3>
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

            {/* Existing Comments */}
            <div className="space-y-4">
              <div className="border-l-4 border-blue-200 pl-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-gray-900">Maria Santos</span>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
                <p className="text-gray-700">
                  Great tips! I've been struggling with my Google Business Profile. The photo optimization section was particularly helpful.
                </p>
              </div>

              <div className="border-l-4 border-blue-200 pl-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-gray-900">David Kim</span>
                  <span className="text-sm text-gray-500">3 days ago</span>
                </div>
                <p className="text-gray-700">
                  Thanks for the step-by-step guide. I'm going to implement these changes this week. The review management tips are gold!
                </p>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
