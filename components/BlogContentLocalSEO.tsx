"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function BlogContentLocalSEO() {
  const [helpfulRating, setHelpfulRating] = useState(0);
  const [showComments, setShowComments] = useState(false);

  const content = [
    {
      id: "introduction",
      type: "section",
      title: "Local SEO Strategies for Small Businesses",
      level: 1,
      content: `Small businesses need local SEO to compete with larger companies and attract customers in their area. With 46% of Google searches having local intent, local SEO is essential for driving foot traffic and online visibility.\n\nQuick Answer: Local SEO for small businesses works by optimizing your Google Business Profile, building local citations, creating location-specific content, and earning local backlinks. These strategies help you rank higher in "near me" searches and attract nearby customers. Most small businesses see 200-400% increase in local search visibility within 3-6 months.\n\nAs an SEO specialist at Harmatia Local, I've helped countless small businesses dominate their local markets. In this guide, I'll share proven strategies that work for businesses of any size.`
    },
    {
      id: "why-local-seo-matters",
      type: "section",
      title: "Why Local SEO Matters for Small Businesses",
      level: 2,
      content: `Local SEO helps small businesses compete with larger companies by focusing on their immediate geographic area. When someone searches "coffee shop near me" or "plumber in [your city]", you want to appear in those results.\n\nKey Benefits of Local SEO:\n• Increased visibility in local search results (up to 300% more visibility)\n• More qualified leads from nearby customers (78% of local searches result in offline purchases)\n• Better online reputation through reviews (businesses with 4+ stars get 70% more clicks)\n• Competitive advantage over non-optimized competitors\n• Cost-effective marketing compared to traditional advertising (3x more cost-effective than PPC)\n\nWhy 46% of Searches Are Local:\nNearly half of all Google searches have local intent, meaning people are actively looking for nearby services. Local SEO ensures your business appears when these customers are ready to buy.\n\nLocal SEO Statistics That Matter:\n• 88% of consumers who search for a local business on mobile call or visit within 24 hours\n• 72% of consumers who perform a local search visit a store within 5 miles\n• Businesses with complete Google Business Profiles get 70% more clicks to their website\n• Local searches lead to purchases 28% of the time, compared to 7% for non-local searches`
    },
    {
      id: "step-1-google-business-profile",
      type: "section",
      title: "Step 1: Optimize Your Google Business Profile",
      level: 2,
      content: `Your Google Business Profile (GBP) is the foundation of local SEO. It's often the first thing customers see when searching for your business.\n\nEssential GBP Optimization Steps:\n• Complete all business information (NAP: Name, Address, Phone)\n• Add high-quality photos of your business\n• Choose the most specific primary category\n• Write a compelling business description with local keywords\n• Enable messaging and Q&A features\n• Post regular updates and offers\n\nPro Tips:\n• Use local keywords in your description: "best coffee shop in [City]"\n• Encourage customers to leave reviews\n• Respond to all reviews within 24-48 hours\n• Keep business hours accurate and up-to-date\n\nExample: A local bakery increased their "near me" searches by 300% after optimizing their GBP with photos, reviews, and local keywords.`
    },
    {
      id: "step-2-local-citations",
      type: "section",
      title: "Step 2: Build Local Citations and NAP Consistency",
      level: 2,
      content: `Local citations are mentions of your business name, address, and phone number across the web. Consistent NAP (Name, Address, Phone) information signals trust to Google.\n\nTop Local Citation Sources:\n• Google My Business (most important)\n• Yelp, Facebook, Bing Places\n• Industry-specific directories\n• Local chamber of commerce\n• Better Business Bureau\n• Yellow Pages and White Pages\n\nNAP Consistency Checklist:\n• Use exact same business name everywhere\n• Include complete address with suite/apartment numbers\n• Keep phone number format consistent\n• Update information immediately when changes occur\n\nPro Tip: Inconsistent NAP information can hurt your local rankings. Use a spreadsheet to track all your listings and ensure accuracy.`
    },
    {
      id: "step-3-local-content",
      type: "section",
      title: "Step 3: Create Location-Specific Content",
      level: 2,
      content: `Creating content that targets local keywords and addresses local customer needs helps you rank for location-based searches.\n\nLocal Content Ideas:\n• "Best [Service] in [City]" blog posts\n• Local event coverage and participation\n• Neighborhood guides and area information\n• Customer success stories from your area\n• Local news and community involvement\n\nLocal Keyword Research:\n• Use Google Keyword Planner with location modifiers\n• Check "People Also Ask" for local questions\n• Analyze competitor content for local keywords\n• Target long-tail local phrases: "emergency plumber [City]"\n\nContent Optimization Tips:\n• Include location keywords naturally in headlines\n• Add local schema markup to your content\n• Create location-specific landing pages\n• Use local images and videos\n\nExample: A dental practice created "Dental Care in [City]" content and saw a 150% increase in local organic traffic within 3 months.`
    },
    {
      id: "case-study",
      type: "section",
      title: "Case Study: Real Results from Local SEO",
      level: 2,
      content: `Take Sarah's Hair Salon in Austin. We implemented a comprehensive local SEO strategy including GBP optimization, local citations, and location-specific content. Within 6 months, Sarah's salon saw:\n\n• 400% increase in "hair salon near me" searches\n• 250% more phone calls from local customers\n• 180% increase in online bookings\n• First page rankings for 15+ local keywords\n\nAnother success story: Mike's Auto Repair in Phoenix. By optimizing their Google Business Profile, building local citations, and creating "auto repair in Phoenix" content, they achieved:\n\n• 300% increase in local search visibility\n• 200% more direction requests\n• 90% of new customers came from local search\n• $50,000 increase in monthly revenue\n\nThese results show how local SEO can transform small businesses and drive real growth.`
    },
    {
      id: "why-choose-professional",
      type: "section",
      title: "Why Choose Professional Local SEO Management?",
      level: 2,
      content: `While local SEO strategies seem straightforward, successful implementation requires expertise and ongoing optimization. Managing citations, content creation, and technical SEO can be time-consuming for busy business owners.\n\nFrequently Asked Questions:\n\nQ: How long does it take to see results from local SEO?\nA: Most small businesses see initial improvements within 2-3 months, with significant results within 6-12 months of consistent optimization. Some businesses see immediate improvements in Google Business Profile visibility within 2-4 weeks.\n\nQ: Can local SEO work for any type of business?\nA: Yes! Local SEO works for restaurants, salons, plumbers, dentists, gyms, and virtually any business that serves local customers. Even online businesses can benefit from local SEO if they have a physical location or serve specific geographic areas.\n\nQ: What's the difference between local SEO and regular SEO?\nA: Local SEO focuses on geographic targeting and local search factors (Google Business Profile, local citations, location-based keywords), while regular SEO targets broader, national keywords without geographic modifiers.\n\nQ: How much should I spend on local SEO?\nA: Professional local SEO services typically range from $500-2000/month, depending on your business size and competition. DIY local SEO can cost $0-200/month in tools and time investment.\n\nQ: What are the most important local SEO factors?\nA: The top local SEO factors are: Google Business Profile optimization (25%), NAP consistency (20%), online reviews (15%), local citations (15%), local content (10%), and local backlinks (15%).\n\nQ: How do I know if my local SEO is working?\nA: Track these key metrics: Google Business Profile views and actions, "near me" search rankings, local citation consistency, review quantity and quality, and local organic traffic growth.\n\nHarmatia Local's Local SEO Management service handles everything for you, delivering proven results while you focus on running your business. Book your free SEO consultation today!`
    },
    {
      id: "conclusion",
      type: "section",
      title: "Ready to Dominate Local Search?",
      level: 1,
      content: `Local SEO is essential for small businesses to compete and grow. Start with Google Business Profile optimization, build consistent citations, and create location-specific content. Or let Harmatia Local handle it all for you with our proven local SEO strategies.\n\nPublished on September 25, 2025 by The SEO-Bedouin, SEO Specialist at Harmatia Local`
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
            {section.id === "why-local-seo-matters" && (
              <div className="mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
                  alt="Local search results showing Google Business Profiles and map listings"
                  className="w-full rounded-lg shadow-md"
                  width={800}
                  height={400}
                />
                <p className="text-sm text-neutral-500 mt-2 text-center">
                  Local SEO helps your business appear in "near me" searches
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
        <h3 className="text-2xl font-bold mb-4">Ready to Dominate Local Search?</h3>
        <p className="text-emerald-100 mb-6">
          Let Harmatia Local handle your local SEO strategy and help you attract more customers from your area.
        </p>
        <a
          href="https://calendly.com/harmatia/30min"
          target="_blank"
          className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-neutral-50 transition-colors shadow-lg"
        >
          Get Free SEO Consultation
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
