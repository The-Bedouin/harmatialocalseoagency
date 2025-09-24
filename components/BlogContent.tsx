/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function BlogContent() {
  const [helpfulRating, setHelpfulRating] = useState(0);
  const [showComments, setShowComments] = useState(false);

  const content = [
    {
      id: "introduction",
      type: "section",
      title: "What is Local SEO? The Complete Guide to Dominating Local Search Results",
      level: 1,
      content: `Local SEO (Search Engine Optimization) is the practice of optimizing your business's online presence to attract more customers from local searches on Google, Bing, and other search engines. When people search for services "near me" or include location-specific terms like "best restaurants in [city]", local SEO ensures your business appears prominently in these search results.

According to [Google's research](https://www.thinkwithgoogle.com/marketing-strategies/search/local-search-statistics/), 46% of all searches have local intent, making local SEO crucial for businesses with physical locations or those serving specific geographic areas. Whether you're a local restaurant, law firm, dental practice, or retail store, implementing effective local SEO strategies can dramatically increase your visibility, drive more foot traffic, and boost your revenue.

This comprehensive guide will walk you through everything you need to know about local SEO, from the fundamentals to advanced strategies that will help your business dominate local search results.`
    },
    {
      id: "what-is-local-seo",
      type: "section",
      title: "Understanding Local SEO: How It Works",
      level: 2,
      content: `Local SEO differs from traditional SEO in several key ways. While traditional SEO focuses on ranking for broad keywords, local SEO targets location-based searches and helps businesses appear in the "Local Pack" - the three business listings that appear at the top of Google search results for local queries.

Key Components of Local SEO:

- Google Business Profile Optimization: Your free Google listing that appears in Maps and Search
- NAP Consistency: Ensuring your Name, Address, and Phone number are identical across all platforms
- Local Citations: Mentions of your business on other websites and directories
- Local Content: Creating location-specific content that resonates with your community
- Customer Reviews: Building and managing online reviews from satisfied customers
- Local Link Building: Acquiring backlinks from other local businesses and organizations

The goal of local SEO is to signal to search engines that your business is relevant, trustworthy, and geographically appropriate for users searching in your area.`
    },
    {
      id: "google-business-profile",
      type: "section",
      title: "Google Business Profile: Your Local SEO Foundation",
      level: 2,
      content: `Your Google Business Profile (GBP) is the cornerstone of your local SEO strategy. This free tool allows you to manage how your business appears across Google Search and Maps, making it essential for local visibility.

Essential GBP Optimization Steps:

1. Claim and Verify Your Profile: Ensure you have complete control over your listing
2. Complete All Business Information: Fill out every available field with accurate details
3. Choose Relevant Categories: Select primary and secondary categories that best describe your business
4. Add High-Quality Photos: Upload professional images of your business, products, and services
5. Keep Information Updated: Regularly update hours, contact information, and special offers
6. Enable Messaging: Allow customers to contact you directly through Google
7. Add Products/Services: Showcase what you offer with detailed descriptions

Pro Tips for GBP Success:
- Post regular updates about your business, events, and offers
- Respond to all reviews, both positive and negative
- Use relevant keywords naturally in your business description
- Add attributes that highlight unique features (wheelchair accessible, outdoor seating, etc.)
- Monitor and respond to Q&A sections promptly

A well-optimized Google Business Profile can significantly improve your local search rankings and attract more customers to your business.`
    },
    {
      id: "nap-citations",
      type: "section",
      title: "NAP Citations: Building Trust Through Consistency",
      level: 2,
      content: `NAP citations refer to mentions of your business's Name, Address, and Phone number across the web. Search engines use these citations to verify your business's legitimacy and location, making them crucial for local SEO success.

Why NAP Consistency Matters:
- Trust Signals: Consistent NAP information builds credibility with search engines
- Local Relevance: Helps search engines understand your business location
- Duplicate Prevention: Prevents confusion from inconsistent business information
- Ranking Factor: Google considers NAP consistency when ranking local businesses

Where to Build NAP Citations:

General Directories:
- Google My Business
- Bing Places
- Yelp
- Yellow Pages
- Better Business Bureau

Industry-Specific Directories:
- Healthgrades (healthcare)
- Avvo (legal services)
- Houzz (home improvement)
- TripAdvisor (travel and hospitality)
- Zillow (real estate)

Local Directories:
- Chamber of Commerce listings
- Local newspaper directories
- City-specific business listings
- Regional industry associations

Best Practices for NAP Citations:
- Use the exact same business name across all platforms
- Include suite numbers and apartment numbers consistently
- Use the same phone number format (with or without dashes)
- Update citations immediately when information changes
- Monitor citations regularly for accuracy`
    },
    {
      id: "local-content-strategy",
      type: "section",
      title: "Local Content Strategy: Connecting With Your Community",
      level: 2,
      content: `Creating location-specific content helps establish your business as a local authority and improves your relevance for local searches. This content should resonate with your community while incorporating relevant local SEO keywords naturally.

Types of Local Content to Create:

Location-Specific Landing Pages:
- Create dedicated pages for each neighborhood or city you serve
- Include local landmarks, demographics, and community information
- Highlight how your services benefit the local community

Local News and Events:
- Write about local events your business participates in
- Cover relevant local news in your industry
- Share community involvement stories

Customer Success Stories:
- Feature testimonials from local customers
- Create case studies with local businesses
- Share before-and-after stories from local projects

Local Guides and Resources:
- Create guides specific to your local area
- Develop resource pages for local customers
- Write about local attractions and amenities

Content Ideas for Different Industries:

Restaurants: Local food guides, neighborhood dining trends, local ingredient sourcing
Healthcare: Local health statistics, community wellness programs, local medical resources
Legal Services: Local legal news, community legal resources, local court information
Home Services: Local home improvement trends, neighborhood-specific services, local contractor guides

SEO Tips for Local Content:
- Include location keywords naturally in headlines and content
- Use local landmarks and neighborhood names
- Mention local events, weather, or community characteristics
- Link to other local businesses and organizations
- Include local images with proper alt tags`
    },
    {
      id: "customer-reviews",
      type: "section",
      title: "Customer Reviews: Building Social Proof and Trust",
      level: 2,
      content: `Online reviews are one of the most influential factors in local SEO and consumer decision-making. According to [BrightLocal's Local Consumer Review Survey](https://www.brightlocal.com/research/local-consumer-review-survey/), 87% of consumers read online reviews for local businesses, and reviews influence purchasing decisions for 91% of consumers.

Why Reviews Matter for Local SEO:
- Ranking Factor: Google considers review quantity, quality, and recency
- Click-Through Rates: Businesses with more reviews get more clicks
- Trust Building: Reviews provide social proof for potential customers
- Keyword Opportunities: Reviews often contain relevant local keywords

Strategies for Getting More Reviews:

Ask Satisfied Customers:
- Request reviews at the point of sale
- Follow up with email requests after service completion
- Include review links in receipts and invoices
- Train staff to ask for reviews appropriately

Make It Easy:
- Provide direct links to review platforms
- Create QR codes linking to review pages
- Include review requests in follow-up communications
- Offer incentives (but follow platform guidelines)

Respond to All Reviews:
- Thank customers for positive reviews
- Address negative reviews professionally and constructively
- Show that you value customer feedback
- Use responses to highlight your business's strengths

Review Management Best Practices:
- Monitor reviews across all platforms regularly
- Respond to reviews within 24-48 hours
- Keep responses professional and helpful
- Don't offer incentives for positive reviews
- Address fake or inappropriate reviews through proper channels`
    },
    {
      id: "local-link-building",
      type: "section",
      title: "Local Link Building: Establishing Community Authority",
      level: 2,
      content: `Local link building involves acquiring backlinks from other local websites, organizations, and businesses. These local links signal to search engines that your business is trusted and relevant within your community.

Types of Local Links to Pursue:

Local Business Partnerships:
- Partner with complementary businesses for cross-promotion
- Sponsor local events and get mentioned on event pages
- Collaborate on community projects
- Join local business associations

Local Media and Publications:
- Submit press releases to local newspapers
- Offer expert commentary on local news stories
- Write guest articles for local publications
- Participate in local radio or TV interviews

Community Organizations:
- Sponsor local sports teams or school events
- Partner with local charities and nonprofits
- Join local chambers of commerce
- Participate in community service projects

Local Directories and Listings:
- Submit to local business directories
- List in industry-specific local directories
- Register with local tourism boards
- Join local professional associations

Link Building Strategies:

Content-Based Link Building:
- Create valuable local resources that others want to link to
- Develop local guides and maps
- Create industry-specific local content
- Offer free tools or resources for the community

Relationship Building:
- Attend local networking events
- Build genuine relationships with other business owners
- Offer value before asking for links
- Maintain long-term partnerships

Event-Based Link Building:
- Host community events
- Sponsor local festivals or competitions
- Participate in local trade shows
- Organize educational workshops or seminars`
    },
    {
      id: "technical-local-seo",
      type: "section",
      title: "Technical Local SEO: Website Optimization",
      level: 2,
      content: `While local SEO focuses heavily on off-site factors, technical optimization of your website is equally important for local search success.

Website Speed and Performance:
- Page Load Speed: Optimize images, minimize code, and use caching
- Mobile Optimization: Ensure your site works perfectly on mobile devices
- Core Web Vitals: Meet Google's performance standards
- SSL Certificate: Use HTTPS to secure your website

Local Schema Markup:
Implement structured data to help search engines understand your business information:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Your Business Name",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "telephone": "+1-555-123-4567",
  "url": "https://yourwebsite.com",
  "openingHours": "Mo-Fr 09:00-17:00",
  "priceRange": "$$"
}
\`\`\`

Local SEO URL Structure:
- Use location-based URLs: yoursite.com/services/location-name
- Include city/neighborhood names in page URLs
- Keep URLs clean and descriptive
- Avoid keyword stuffing in URLs

Internal Linking Strategy:
- Link to location-specific pages from your homepage
- Create location-based navigation menus
- Link between related local content
- Use descriptive anchor text for local links

Local SEO Checklist:
- [ ] Optimize title tags with location keywords
- [ ] Include location in meta descriptions
- [ ] Add location information to contact pages
- [ ] Create location-specific landing pages
- [ ] Optimize images with location-based alt tags
- [ ] Include local business hours and contact info
- [ ] Add Google Maps embed to contact page
- [ ] Implement local business schema markup`
    },
    {
      id: "measuring-success",
      type: "section",
      title: "Measuring Local SEO Success: Key Metrics to Track",
      level: 2,
      content: `Tracking the right metrics is essential for understanding the effectiveness of your local SEO efforts and making data-driven improvements.

Primary Local SEO Metrics:

Google Business Profile Insights:
- Views (how many people saw your listing)
- Searches (queries that led to your listing)
- Direction requests (people asking for directions)
- Phone calls (calls made directly from your listing)
- Website clicks (visits to your website from GBP)

Website Analytics:
- Organic traffic from local searches
- Conversion rates from local traffic
- Pages per session from local visitors
- Bounce rate for location-specific pages
- Goal completions from local traffic

Ranking Metrics:
- Local pack rankings for target keywords
- Map pack visibility
- Organic rankings for local keywords
- Competitor comparison rankings

Review Metrics:
- Total number of reviews
- Average review rating
- Review response rate
- Review sentiment analysis
- Review velocity (new reviews per month)

Tools for Tracking Local SEO:

Free Tools:
- Google Business Profile Insights
- Google Analytics
- Google Search Console
- Google My Business app

Paid Tools:
- BrightLocal
- Whitespark
- Moz Local
- Yext
- Local Falcon

Setting Up Tracking:
1. Install Google Analytics and Search Console
2. Set up conversion goals for local traffic
3. Create custom reports for local keywords
4. Monitor Google Business Profile insights weekly
5. Track review metrics monthly
6. Conduct quarterly ranking audits`
    },
    {
      id: "common-mistakes",
      type: "section",
      title: "Common Local SEO Mistakes to Avoid",
      level: 2,
      content: `Many businesses struggle with local SEO due to common mistakes that can hurt their rankings and visibility. Here are the most frequent errors and how to avoid them:

NAP Inconsistency:
- Problem: Different business names, addresses, or phone numbers across platforms
- Solution: Audit all citations and standardize NAP information
- Prevention: Create a master document with exact NAP details

Ignoring Mobile Optimization:
- Problem: Website not optimized for mobile devices
- Solution: Implement responsive design and test on various devices
- Prevention: Regular mobile usability testing

Poor Google Business Profile Management:
- Problem: Incomplete or outdated business information
- Solution: Complete all profile sections and update regularly
- Prevention: Set monthly reminders to review and update

Keyword Stuffing:
- Problem: Overusing location keywords unnaturally
- Solution: Use keywords naturally in content and descriptions
- Prevention: Focus on user experience over keyword density

Neglecting Customer Reviews:
- Problem: Not actively managing or responding to reviews
- Solution: Implement review request system and respond promptly
- Prevention: Make review management part of regular operations

Duplicate Listings:
- Problem: Multiple listings for the same business location
- Solution: Merge or remove duplicate listings
- Prevention: Regular audits of business listings

Lack of Local Content:
- Problem: Generic content without local relevance
- Solution: Create location-specific content regularly
- Prevention: Develop local content calendar

Not Tracking Results:
- Problem: No measurement of local SEO performance
- Solution: Implement tracking tools and regular reporting
- Prevention: Set up automated reports and monthly reviews`
    },
    {
      id: "advanced-strategies",
      type: "section",
      title: "Advanced Local SEO Strategies for Competitive Markets",
      level: 2,
      content: `For businesses in highly competitive local markets, advanced strategies can provide the edge needed to outrank competitors and capture more market share.

Hyperlocal SEO:
- Target neighborhood-specific keywords
- Create content for micro-locations within your service area
- Use hyperlocal landmarks and references
- Build citations in neighborhood-specific directories

Local Content Clusters:
- Create topic clusters around local themes
- Develop pillar pages for major local topics
- Link related local content together
- Build topical authority in your local market

Competitor Analysis:
- Identify top-ranking competitors in your area
- Analyze their Google Business Profile strategies
- Study their content and link building approaches
- Find gaps in their local SEO efforts

Local Influencer Partnerships:
- Partner with local influencers and bloggers
- Collaborate with local social media personalities
- Work with local journalists and media personalities
- Build relationships with local industry experts

Advanced Review Strategies:
- Implement review request automation
- Create review response templates
- Develop review generation campaigns
- Monitor competitor reviews for opportunities

Local PR and Media Relations:
- Develop relationships with local media outlets
- Create newsworthy local stories
- Participate in local community events
- Sponsor local causes and organizations

Multi-Location SEO:
- Optimize each location individually
- Create location-specific landing pages
- Manage multiple Google Business Profiles
- Implement location-specific schema markup

Local Voice Search Optimization:
- Optimize for conversational queries
- Use natural language in content
- Include FAQ sections with voice-friendly answers
- Optimize for "near me" searches

Seasonal Local SEO:
- Create seasonal content for your local area
- Optimize for seasonal keywords
- Update Google Business Profile for seasonal hours
- Develop seasonal local campaigns`
    },
    {
      id: "conclusion",
      type: "section",
      title: "Conclusion: Building Your Local SEO Success",
      level: 1,
      content: `Local SEO is not a one-time effort but an ongoing process that requires consistent attention and optimization. By implementing the strategies outlined in this comprehensive guide, you can significantly improve your business's visibility in local search results and attract more customers from your community.

Key Takeaways:

- Start with Google Business Profile: This is your foundation for local SEO success
- Maintain NAP Consistency: Ensure your business information is identical across all platforms
- Create Local Content: Develop content that resonates with your local community
- Build Local Links: Establish relationships and partnerships within your community
- Manage Reviews: Actively seek and respond to customer reviews
- Track Your Progress: Monitor key metrics to measure success and identify areas for improvement

Next Steps:
1. Audit your current local SEO presence
2. Optimize your Google Business Profile
3. Standardize your NAP information across all platforms
4. Develop a local content strategy
5. Implement review management processes
6. Set up tracking and monitoring systems

Remember, local SEO success takes time. Most businesses see significant improvements within 3-6 months of consistent effort. Stay patient, stay consistent, and focus on providing value to your local community. The results will follow.

For businesses looking to accelerate their local SEO success, consider working with a professional local SEO agency that understands your market and can implement advanced strategies to help you dominate local search results.`
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
            {section.id === "what-is-local-seo" && (
              <div className="mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
                  alt="Local SEO search results showing Google Maps and local business listings"
                  className="w-full rounded-lg shadow-md"
                  width={800}
                  height={400}
                />
                <p className="text-sm text-neutral-500 mt-2 text-center">
                  Local SEO helps businesses appear in Google&apos;s local pack and Maps results
                </p>
              </div>
            )}
            
            {section.id === "google-business-profile" && (
              <div className="mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
                  alt="Google Business Profile dashboard showing business information and optimization options"
                  className="w-full rounded-lg shadow-md"
                  width={800}
                  height={400}
                />
                <p className="text-sm text-neutral-500 mt-2 text-center">
                  Google Business Profile is the foundation of your local SEO strategy
                </p>
              </div>
            )}
            
            {section.id === "nap-citations" && (
              <div className="mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=400&fit=crop"
                  alt="Business directory listings showing consistent NAP information across multiple platforms"
                  className="w-full rounded-lg shadow-md"
                  width={800}
                  height={400}
                />
                <p className="text-sm text-neutral-500 mt-2 text-center">
                  Consistent NAP citations across directories build trust with search engines
                </p>
              </div>
            )}
            
            {section.id === "local-content-strategy" && (
              <div className="mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop"
                  alt="Local community content creation showing neighborhood-specific blog posts and local events"
                  className="w-full rounded-lg shadow-md"
                  width={800}
                  height={400}
                />
                <p className="text-sm text-neutral-500 mt-2 text-center">
                  Creating local content helps establish your business as a community authority
                </p>
              </div>
            )}
            
            {section.id === "customer-reviews" && (
              <div className="mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
                  alt="Customer reviews dashboard showing star ratings and review management tools"
                  className="w-full rounded-lg shadow-md"
                  width={800}
                  height={400}
                />
                <p className="text-sm text-neutral-500 mt-2 text-center">
                  Managing customer reviews is crucial for local SEO success and customer trust
                </p>
              </div>
            )}
            
            {section.id === "local-link-building" && (
              <div className="mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop"
                  alt="Local business networking event showing community partnerships and collaboration"
                  className="w-full rounded-lg shadow-md"
                  width={800}
                  height={400}
                />
                <p className="text-sm text-neutral-500 mt-2 text-center">
                  Building local partnerships and community relationships strengthens your local SEO
                </p>
              </div>
            )}
            
            {section.id === "technical-local-seo" && (
              <div className="mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
                  alt="Website optimization dashboard showing technical SEO metrics and schema markup implementation"
                  className="w-full rounded-lg shadow-md"
                  width={800}
                  height={400}
                />
                <p className="text-sm text-neutral-500 mt-2 text-center">
                  Technical optimization and schema markup improve your local search visibility
                </p>
              </div>
            )}
            
            {section.id === "measuring-success" && (
              <div className="mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
                  alt="Analytics dashboard showing local SEO metrics including Google Business Profile insights and ranking data"
                  className="w-full rounded-lg shadow-md"
                  width={800}
                  height={400}
                />
                <p className="text-sm text-neutral-500 mt-2 text-center">
                  Tracking key metrics helps measure and improve your local SEO performance
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
        <h3 className="text-2xl font-bold mb-4">Ready to Start Your Investment Journey?</h3>
        <p className="text-emerald-100 mb-6">
          Get personalized investment advice and start building wealth with our proven strategies.
        </p>
        <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-neutral-50 transition-colors shadow-lg">
          Get Free Consultation
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
          <h3 className="text-xl font-semibold text-gray-900">Comments (3)</h3>
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
                  <span className="font-semibold text-gray-900">Sarah Johnson</span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-gray-700">
                  Excellent guide! I&apos;ve been struggling with local SEO for my restaurant. The Google Business Profile section was particularly helpful.
                </p>
              </div>

              <div className="border-l-4 border-blue-200 pl-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-gray-900">Mike Chen</span>
                  <span className="text-sm text-gray-500">1 week ago</span>
                </div>
                <p className="text-gray-700">
                  Thanks for the comprehensive overview. I&apos;m interested in learning more about NAP citations. Any recommendations for local directories?
                </p>
              </div>

              <div className="border-l-4 border-blue-200 pl-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-gray-900">Emily Rodriguez</span>
                  <span className="text-sm text-gray-500">2 weeks ago</span>
                </div>
                <p className="text-gray-700">
                  This article opened my eyes to local SEO opportunities I never considered. The local content strategy section was eye-opening!
                </p>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
