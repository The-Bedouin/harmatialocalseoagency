"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function BlogContentWebsiteSpeed() {
  const [helpfulRating, setHelpfulRating] = useState(0);
  const [showComments, setShowComments] = useState(false);

  const content = [
    {
      id: "introduction",
      type: "section",
      title: "Step-by-Step Guide to Website Speed for Local SEO Success",
      level: 1,
      content: `As a local business owner, your website is your digital storefront, but if it's slow, you're losing customers. Studies show that 50% of visitors abandon sites that take over 3 seconds to load. A fast website not only keeps visitors happy but also boosts your local SEO rankings, driving more foot traffic and leads. As an SEO specialist at Harmatia Local, I'll share simple, jargon-free steps to speed up your site, focusing on basics like image compression. Follow these tips to keep customers and rank higher—or let our optimization service accelerate your growth.

Quick Answer: To speed up your website for local SEO success, focus on: checking your current speed, compressing images, enabling browser caching, minimizing CSS/JavaScript, and regular testing. These steps can boost conversions by 7% and improve your local search rankings.

How to improve website speed for local SEO?
The best website speed optimization steps for local SEO are:
1. Check your current speed using Google PageSpeed Insights
2. Compress images with tools like TinyPNG or Squoosh
3. Enable browser caching with plugins like W3 Total Cache
4. Minimize CSS and JavaScript using tools like CSSNano
5. Test and monitor regularly with monthly speed checks

Why Website Speed Matters for Local SEO:
• 50% of visitors abandon slow sites (3+ seconds load time)
• Faster sites increase conversions by 7%
• Google prioritizes fast websites for local searches
• 46% of all Google queries are local searches
• Fast sites rank higher in local pack results

Website Speed Optimization Benefits:
• Keep 50% more visitors with faster loading times
• Boost local search rankings in Google results
• Improve user experience and engagement
• Increase mobile performance for local mobile searches
• Better Core Web Vitals scores for SEO`
    },
    {
      id: "why-speed-matters",
      type: "section",
      title: "Why Website Speed Matters for Local SEO",
      level: 2,
      content: `Google prioritizes fast websites, especially for local searches, which make up 46% of all queries. A slow site frustrates users and signals poor quality to search engines, dropping your rankings. Faster sites can increase conversions by 7% and improve your chances of appearing in the local pack.

Key Benefits of Fast Website Speed:
• Better User Experience: Visitors stay longer and engage more
• Higher Search Rankings: Google favors fast-loading sites
• Increased Conversions: 7% boost in conversion rates
• Lower Bounce Rates: Visitors are less likely to leave immediately
• Mobile Performance: Critical for local mobile searches
• Local Pack Visibility: Fast sites appear more often in local results

The 3-Second Rule:
If your website takes longer than 3 seconds to load, you're losing half your potential customers before they even see your services. This is especially critical for local businesses where customers are looking for immediate solutions.

Local SEO Speed Tips:
1. Optimize for mobile first - Most local searches happen on mobile
2. Focus on Core Web Vitals - Google's key ranking factors
3. Improve page load times - Aim for under 3 seconds
4. Use local SEO speed tools - Google PageSpeed Insights, GTmetrix
5. Monitor bounce rates - High rates may indicate speed issues

Local SEO Impact:
• 46% of searches are local - speed affects local visibility
• Mobile-first indexing - Google prioritizes mobile speed
• Core Web Vitals - Google's ranking factors include speed metrics
• User signals - bounce rate and time on site affect rankings
• Local pack rankings - Speed influences local business listings

Image Compression for SEO Benefits:
• 30-50% faster load times with compressed images
• Better mobile performance for local mobile searches
• Improved Core Web Vitals scores
• Higher search rankings due to better user experience
• Reduced bounce rates from faster loading`
    },
    {
      id: "step-1-check-speed",
      type: "section",
      title: "Step 1: Check Your Current Website Speed",
      level: 2,
      content: `Start by knowing where you stand. Use free tools like Google PageSpeed Insights or GTmetrix to get a baseline measurement of your website's performance.

How to Check Your Website Speed:
1. Visit Google PageSpeed Insights (pagespeed.web.dev)
2. Enter your website URL
3. Review the score (aim for 85+ on mobile)
4. Note recommendations like "reduce image sizes" or "minify code"
5. Test both mobile and desktop versions

Understanding Your Speed Score:
• 90-100: Excellent - Your site loads very fast
• 80-89: Good - Minor optimizations needed
• 70-79: Needs Improvement - Several issues to address
• 50-69: Poor - Significant speed problems
• 0-49: Very Poor - Major speed issues

What to Look For:
• First Contentful Paint (FCP): Time until first content appears
• Largest Contentful Paint (LCP): Time until main content loads
• Cumulative Layout Shift (CLS): Visual stability during loading
• First Input Delay (FID): Time until site responds to user interaction

Website Speed for SEO Tools:
• Google PageSpeed Insights - Official Google tool
• GTmetrix - Detailed performance analysis
• Google Lighthouse - Built into Chrome DevTools
• WebPageTest - Advanced testing options
• Pingdom - Uptime and performance monitoring

Pro Tip: A low score could mean you're losing half your potential customers before they even see your services. This baseline helps you track progress as you optimize.`
    },
    {
      id: "step-2-compress-images",
      type: "section",
      title: "Step 2: Compress Images Without Losing Quality",
      level: 2,
      content: `Large images are a common speed killer. Here's how to fix them without sacrificing visual quality:

How to Compress Images:
1. Use Compression Tools: Try free tools like TinyPNG or Squoosh
2. Upload your images to the compression tool
3. Download smaller versions while maintaining quality
4. Choose the Right Format: Use JPEG for photos and PNG for logos
5. Aim for file sizes under 100KB for web images

Image Optimization Best Practices:
• Resize Images: Scale to exact dimensions your site needs (e.g., 800x600px, not 4000x3000px)
• Use WebP Format: Modern format with better compression than JPEG
• Optimize Alt Text: Include descriptive alt text for SEO
• Lazy Loading: Load images only when needed
• Responsive Images: Use different sizes for different devices

Free Image Compression Tools:
• TinyPNG - Simple drag-and-drop compression
• Squoosh - Google's image optimization tool
• Compressor.io - Online image compression
• ImageOptim - Mac app for batch compression
• RIOT - Windows image optimizer

Results You Can Expect:
Compressed images can cut load times by 30-50%, keeping visitors engaged and boosting SEO. This is often the quickest win for improving website speed.

Pro Tips:
• Compress images before uploading to your website
• Use appropriate image dimensions for your layout
• Consider using a CDN for faster image delivery
• Test different compression levels to find the sweet spot`
    },
    {
      id: "step-3-enable-caching",
      type: "section",
      title: "Step 3: Enable Browser Caching",
      level: 2,
      content: `Caching stores parts of your site on a visitor's device, so it loads faster next time. This reduces server load and significantly improves repeat visitor experience.

How to Enable Browser Caching:
1. Install a caching plugin (if using WordPress)
2. Try W3 Total Cache or WP Super Cache (both free)
3. Enable browser caching in the settings
4. Configure cache expiration times
5. Test with PageSpeed Insights to confirm improvements

Caching Plugin Setup (WordPress):
• W3 Total Cache: Most popular, comprehensive features
• WP Super Cache: Simple, lightweight option
• WP Rocket: Premium but very effective
• LiteSpeed Cache: If using LiteSpeed hosting

Caching Configuration:
• Browser Caching: 1 year for static assets
• Page Caching: Enable for logged-out users
• Object Caching: Use if available on your hosting
• Database Caching: Cache database queries
• Minification: Combine and compress CSS/JS files

What Gets Cached:
• Images and media files
• CSS and JavaScript files
• HTML pages (for logged-out users)
• Database queries
• API responses

Results You Can Expect:
This reduces server load and shaves seconds off load times, helping local customers find you faster. Repeat visitors will see dramatically improved load times.

Pro Tips:
• Clear cache after making changes to see updates
• Test caching with different browsers
• Monitor your site after enabling caching
• Consider using a CDN for even better performance`
    },
    {
      id: "step-4-minimize-code",
      type: "section",
      title: "Step 4: Minimize CSS and JavaScript",
      level: 2,
      content: `Extra code bloats your site and slows it down. Simplifying your code can significantly improve load times and user experience.

How to Minimize CSS and JavaScript:
1. Use free tools like CSSNano or UglifyJS to shrink code files
2. Remove unused plugins or themes if you're on WordPress
3. Combine multiple CSS/JS files into single files
4. Check PageSpeed Insights for specific files to optimize
5. Enable minification in your caching plugin

Code Optimization Tools:
• CSSNano - Minify CSS files
• UglifyJS - Compress JavaScript files
• HTML Minifier - Compress HTML code
• Autoptimize - WordPress plugin for code optimization
• WP Rocket - Premium optimization plugin

What to Remove:
• Unused CSS - Styles not used on your site
• Unused JavaScript - Scripts that aren't needed
• Unused plugins - Deactivate and delete unused WordPress plugins
• Unused themes - Keep only active theme
• Unused fonts - Remove fonts you don't use

Code Optimization Best Practices:
• Combine files - Merge multiple CSS/JS files
• Minify code - Remove spaces and comments
• Use critical CSS - Load above-the-fold styles first
• Defer JavaScript - Load non-critical scripts later
• Remove unused code - Clean up regularly

Results You Can Expect:
Streamlining code can improve load times by up to 20%, signaling to Google that your site is efficient and user-friendly.

Pro Tips:
• Always backup before making changes
• Test your site after optimization
• Use browser developer tools to identify unused code
• Consider hiring a developer for complex optimizations`
    },
    {
      id: "step-5-test-monitor",
      type: "section",
      title: "Step 5: Test and Monitor Regularly",
      level: 2,
      content: `Speed isn't a one-time fix. Regular testing and monitoring ensure your site stays fast as you add new content or make changes.

Monthly Testing Routine:
1. Test with Google PageSpeed Insights - Check mobile and desktop scores
2. Use GTmetrix - Get detailed performance reports
3. Test with Google Lighthouse - Comprehensive performance audit
4. Check Core Web Vitals - Monitor Google's ranking factors
5. Test on different devices - Mobile, tablet, desktop

Monitoring Tools:
• Google PageSpeed Insights - Free, official Google tool
• GTmetrix - Detailed performance analysis
• Google Lighthouse - Built into Chrome DevTools
• WebPageTest - Advanced testing options
• Pingdom - Uptime and performance monitoring

What to Monitor:
• Page load times - Overall site speed
• Core Web Vitals - Google's ranking factors
• Bounce rates - High rates may indicate speed issues
• Time on site - Longer times suggest good user experience
• Conversion rates - Track if speed improvements help sales

Google Analytics Setup:
• Set up Site Speed reports in Google Analytics
• Monitor bounce rates for speed-related issues
• Track page load times by page
• Set up goals to measure conversion improvements
• Create custom reports for speed metrics

Warning Signs to Watch For:
• High bounce rates (visitors leaving quickly)
• Low time on site (users not engaging)
• Decreasing search rankings (Google may be penalizing slow sites)
• Poor mobile scores (mobile-first indexing impact)
• User complaints about slow loading

Pro Tips:
• Test after every major site update
• Monitor your competitors' speeds
• Set up automated monitoring if possible
• Keep a log of your speed improvements
• Celebrate improvements and share results with your team`
    },
    {
      id: "conclusion",
      type: "section",
      title: "Accelerate Your Growth with Expert Help",
      level: 1,
      content: `A fast website is a proven way to keep customers and climb local search rankings. These steps—starting with image compression—are beginner-friendly but take time to perfect. Want faster results? Harmatia Local's Website Optimisation service handles everything, from speed tweaks to full SEO strategies, to drive more traffic and sales. Book your free SEO consultation and audit today to unlock your website's full potential!

Summary of Website Speed Benefits:
• 50% fewer visitors abandon your site
• 7% increase in conversions from faster loading
• Better local SEO rankings in Google search results
• Improved user experience leading to more sales
• Higher mobile performance for local mobile searches

Next Steps:
1. Test your current website speed
2. Start with image compression (biggest impact)
3. Enable browser caching
4. Minimize CSS and JavaScript
5. Set up regular monitoring
6. Consider professional optimization for advanced results

Published on September 24, 2025 by The SEO-Bedouin, SEO Specialist at Harmatia Local.`
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
            {section.id === "why-speed-matters" && (
              <div className="mt-6">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
                  alt="Website speed optimization showing fast loading times and performance metrics"
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-neutral-500 mt-2 text-center">
                  Fast website speed is crucial for local SEO success and user experience
                </p>
              </div>
            )}
            
            {section.id === "step-1-check-speed" && (
              <div className="mt-6">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
                  alt="Google PageSpeed Insights dashboard showing website speed test results and recommendations"
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-neutral-500 mt-2 text-center">
                  Use Google PageSpeed Insights to test and monitor your website speed
                </p>
              </div>
            )}
            
            {section.id === "step-2-compress-images" && (
              <div className="mt-6">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
                  alt="Image compression tools and techniques for optimizing website images"
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-neutral-500 mt-2 text-center">
                  Compressing images can reduce load times by 30-50% without losing quality
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
        <h3 className="text-2xl font-bold mb-4">Ready to Speed Up Your Website?</h3>
        <p className="text-emerald-100 mb-6">
          Let Harmatia Local optimize your website speed and boost your local SEO rankings with our expert optimization service.
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
                  <span className="font-semibold text-gray-900">Jennifer Martinez</span>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
                <p className="text-gray-700">
                  Excellent guide! I followed the image compression steps and my site speed improved dramatically. The PageSpeed score went from 45 to 78!
                </p>
              </div>

              <div className="border-l-4 border-blue-200 pl-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-gray-900">Robert Chen</span>
                  <span className="text-sm text-gray-500">3 days ago</span>
                </div>
                <p className="text-gray-700">
                  Great step-by-step instructions. The caching section was particularly helpful for my WordPress site. Thanks for the practical tips!
                </p>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
