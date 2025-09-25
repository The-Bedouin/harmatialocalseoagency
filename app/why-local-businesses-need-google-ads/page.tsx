import BlogHeader from "@/components/BlogHeader";
import BlogHeroGoogleAds from "@/components/BlogHeroGoogleAds";
import BlogTOCSidebarGoogleAds from "@/components/BlogTOCSidebarGoogleAds";
import BlogRightSidebar from "@/components/BlogRightSidebar";
import BlogMobileSidebar from "@/components/BlogMobileSidebar";
import BlogContentGoogleAds from "@/components/BlogContentGoogleAds";
import SimilarArticles from "@/components/SimilarArticles";
import BlogFooter from "@/components/BlogFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Local Businesses Need Google Ads for More Foot Traffic | Harmatia Local",
  description: "Discover how Google Ads can double your local foot traffic with low-budget neighborhood targeting. Real case studies and tips from Harmatia Local experts.",
  keywords: "google ads for local business, local google ads tips, increase foot traffic, low-budget google ads, local SEO advertising",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.harmatialocal.com/blog/why-local-businesses-need-google-ads-for-foot-traffic"
  },
  openGraph: {
    title: "Why Local Businesses Need Google Ads for More Foot Traffic",
    description: "Learn how Google Ads drives local customers to your business with affordable, targeted campaigns. Case studies and tips from Harmatia Local.",
    type: "article",
    url: "https://www.harmatialocal.com/blog/why-local-businesses-need-google-ads-for-foot-traffic",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Google Ads Dashboard showing local targeting and foot traffic results",
      },
    ],
    siteName: "Harmatia Local",
    locale: "en_US",
    publishedTime: "2025-09-25T00:00:00.000Z",
    authors: ["The SEO-Bedouin"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Local Businesses Need Google Ads for More Foot Traffic",
    description: "Learn how Google Ads drives local customers to your business with affordable, targeted campaigns. Case studies and tips from Harmatia Local.",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"],
    creator: "@harmatialocal",
    site: "@harmatialocal",
  },
  other: {
    "article:author": "The SEO-Bedouin",
    "article:published_time": "2025-09-25T00:00:00.000Z",
    "article:section": "Local SEO",
    "article:tag": "Google Ads, Local Advertising, Foot Traffic, Local SEO, Google Ads Management, Neighborhood Targeting",
  },
};

export default function WhyLocalBusinessesNeedGoogleAds() {
  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Why Local Businesses Need Google Ads for More Foot Traffic",
    "description": "Discover how Google Ads can double your local foot traffic with low-budget neighborhood targeting. Real case studies and tips from Harmatia Local experts.",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
    "author": {
      "@type": "Person",
      "name": "The SEO-Bedouin",
      "url": "https://www.harmatialocal.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Harmatia Local",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.harmatialocal.com/logo.png"
      }
    },
    "datePublished": "2025-09-25T00:00:00.000Z",
    "dateModified": "2025-09-25T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.harmatialocal.com/blog/why-local-businesses-need-google-ads-for-foot-traffic"
    },
    "keywords": ["google ads for local business", "local google ads tips", "increase foot traffic", "low-budget google ads", "local SEO advertising"],
    "articleSection": "Local SEO",
    "wordCount": "1200"
  };

  // HowTo Schema for AI Results and Featured Snippets
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Why Local Businesses Need Google Ads for More Foot Traffic",
    "description": "A guide to using Google Ads to drive local foot traffic with low-budget neighborhood targeting.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Target Neighborhoods with Precision",
        "text": "Set a geo-target radius, use local keywords, and start with a $5-10 daily budget.",
        "url": "https://www.harmatialocal.com/blog/why-local-businesses-need-google-ads-for-foot-traffic#step-1-target-neighborhoods"
      },
      {
        "@type": "HowToStep",
        "name": "Craft Compelling Ads on a Budget",
        "text": "Write clear headlines, add extensions, and schedule ads for peak hours.",
        "url": "https://www.harmatialocal.com/blog/why-local-businesses-need-google-ads-for-foot-traffic#step-2-craft-ads"
      },
      {
        "@type": "HowToStep",
        "name": "Track and Optimize for ROI",
        "text": "Monitor conversions, refine keywords, and test ads for better results.",
        "url": "https://www.harmatialocal.com/blog/why-local-businesses-need-google-ads-for-foot-traffic#step-3-track-optimize"
      }
    ],
    "supply": {
      "@type": "HowToSupply",
      "name": "Google Ads Account"
    },
    "tool": {
      "@type": "HowToTool",
      "name": "Computer or Smartphone"
    },
    "totalTime": "PT30M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "5-200"
    },
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
    "author": {
      "@type": "Person",
      "name": "The SEO-Bedouin",
      "url": "https://www.harmatialocal.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Harmatia Local",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.harmatialocal.com/logo.png"
      }
    },
    "datePublished": "2025-09-25"
  };

  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* HowTo Schema for AI Results and Featured Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <div className="min-h-screen bg-white">
      <BlogHeader />
      <BlogHeroGoogleAds />
      
      {/* Three-Column Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Table of Contents */}
          <div className="hidden lg:block lg:col-span-2">
            <BlogTOCSidebarGoogleAds />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-7">
            <BlogContentGoogleAds />
          </div>
          
          {/* Right Sidebar - Related Posts & Ads */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-8">
              <BlogRightSidebar />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Sidebar */}
      <BlogMobileSidebar />
      
      {/* Similar Articles Section - Full Width */}
      <SimilarArticles />
      
      <BlogFooter />
      </div>
    </>
  );
}
