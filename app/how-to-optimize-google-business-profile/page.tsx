import BlogHeader from "@/components/BlogHeader";
import BlogHeroGoogleBusinessProfile from "@/components/BlogHeroGoogleBusinessProfile";
import BlogTOCSidebarGoogleBusinessProfile from "@/components/BlogTOCSidebarGoogleBusinessProfile";
import BlogRightSidebar from "@/components/BlogRightSidebar";
import BlogMobileSidebar from "@/components/BlogMobileSidebar";
import BlogContentGoogleBusinessProfile from "@/components/BlogContentGoogleBusinessProfile";
import SimilarArticles from "@/components/SimilarArticles";
import BlogFooter from "@/components/BlogFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Optimize Your Google Business Profile for Local Searches | Harmatia Local",
  description: "Boost your local rankings with easy Google Business Profile tweaks like photos and reviews. Learn why 72% of local searches start on Google and how to attract more customers—tips from Harmatia Local experts.",
  keywords: "google business profile optimization, local seo tips, optimize gbp for local searches, google my business seo, local search rankings",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.harmatialocal.com/blog/how-to-optimize-google-business-profile-for-local-searches"
  },
  openGraph: {
    title: "How to Optimize Your Google Business Profile for Local Searches",
    description: "Simple steps to enhance your GBP with photos, reviews, and more for better local SEO. Discover why it's essential for your business.",
    type: "article",
    url: "https://www.harmatialocal.com/blog/how-to-optimize-google-business-profile-for-local-searches",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Google Business Profile Optimization Guide - Boost Local Search Rankings",
      },
    ],
    siteName: "Harmatia Local",
    locale: "en_US",
    publishedTime: "2025-09-23T00:00:00.000Z",
    authors: ["The SEO-Bedouin"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Optimize Your Google Business Profile for Local Searches",
    description: "Simple steps to enhance your GBP with photos, reviews, and more for better local SEO. Discover why it's essential for your business.",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"],
    creator: "@harmatialocal",
    site: "@harmatialocal",
  },
  other: {
    "article:author": "The SEO-Bedouin",
    "article:published_time": "2025-09-23T00:00:00.000Z",
    "article:section": "Local SEO",
    "article:tag": "Google Business Profile, Local SEO, Google My Business, Local Search Optimization",
  },
};

export default function HowToOptimizeGoogleBusinessProfile() {
  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Optimize Your Google Business Profile for Local Searches",
    "description": "Boost your local rankings with easy Google Business Profile tweaks like photos and reviews. Learn why 72% of local searches start on Google and how to attract more customers—tips from Harmatia Local experts.",
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
    "datePublished": "2025-09-23T00:00:00.000Z",
    "dateModified": "2025-09-23T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.harmatialocal.com/blog/how-to-optimize-google-business-profile-for-local-searches"
    },
    "keywords": ["google business profile optimization", "local seo tips", "optimize gbp for local searches", "google my business seo", "local search rankings"],
    "articleSection": "Local SEO",
    "wordCount": "1200"
  };

  // HowTo Schema for AI Results and Featured Snippets
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Optimize Your Google Business Profile for Local Searches",
    "description": "A step-by-step guide to boosting your GBP with simple tweaks like photos and reviews to improve local SEO rankings.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Claim and Verify Your Profile",
        "text": "Go to google.com/business, claim or create your profile, and verify ownership.",
        "url": "https://www.harmatialocal.com/blog/how-to-optimize-google-business-profile-for-local-searches#step-1-claim-verify"
      },
      {
        "@type": "HowToStep",
        "name": "Fill Out Accurate Business Details",
        "text": "Add NAP, hours, categories, and keywords consistently.",
        "url": "https://www.harmatialocal.com/blog/how-to-optimize-google-business-profile-for-local-searches#step-2-business-details"
      },
      {
        "@type": "HowToStep",
        "name": "Upload High-Quality Photos",
        "text": "Add 10-15 authentic images of your business to attract more engagement.",
        "url": "https://www.harmatialocal.com/blog/how-to-optimize-google-business-profile-for-local-searches#step-3-photos"
      },
      {
        "@type": "HowToStep",
        "name": "Encourage and Manage Reviews",
        "text": "Ask for reviews and respond to them to build trust and rankings.",
        "url": "https://www.harmatialocal.com/blog/how-to-optimize-google-business-profile-for-local-searches#step-4-reviews"
      },
      {
        "@type": "HowToStep",
        "name": "Post Regular Updates and Offers",
        "text": "Share weekly posts with CTAs to keep your profile active.",
        "url": "https://www.harmatialocal.com/blog/how-to-optimize-google-business-profile-for-local-searches#step-5-posts"
      }
    ],
    "supply": {
      "@type": "HowToSupply",
      "name": "Google Business Profile Account"
    },
    "tool": {
      "@type": "HowToTool",
      "name": "Computer or Smartphone"
    },
    "totalTime": "PT30M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
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
    "datePublished": "2025-09-23T00:00:00.000Z"
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
      <BlogHeroGoogleBusinessProfile />
      
      {/* Three-Column Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Table of Contents */}
          <div className="hidden lg:block lg:col-span-2">
            <BlogTOCSidebarGoogleBusinessProfile />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-7">
            <BlogContentGoogleBusinessProfile />
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
