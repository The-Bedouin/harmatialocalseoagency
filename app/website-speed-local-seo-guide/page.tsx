import BlogHeader from "@/components/BlogHeader";
import BlogHeroWebsiteSpeed from "@/components/BlogHeroWebsiteSpeed";
import BlogTOCSidebarWebsiteSpeed from "@/components/BlogTOCSidebarWebsiteSpeed";
import BlogRightSidebar from "@/components/BlogRightSidebar";
import BlogMobileSidebar from "@/components/BlogMobileSidebar";
import BlogContentWebsiteSpeed from "@/components/BlogContentWebsiteSpeed";
import SimilarArticles from "@/components/SimilarArticles";
import BlogFooter from "@/components/BlogFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Step-by-Step Guide to Website Speed for Local SEO Success | Harmatia Local",
  description: "Learn how to speed up your website with simple steps like image compression to boost local SEO. A fast site keeps 50% more visitors—tips from Harmatia Local.",
  keywords: "website speed for SEO, local SEO website optimization, image compression for SEO, fast website tips, local search rankings",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.harmatialocal.com/blog/step-by-step-guide-to-website-speed-for-local-seo-success"
  },
  openGraph: {
    title: "Step-by-Step Guide to Website Speed for Local SEO Success",
    description: "Speed up your website with easy tips like image compression to rank higher in local searches and keep more customers. Advice from Harmatia Local.",
    type: "article",
    url: "https://www.harmatialocal.com/blog/step-by-step-guide-to-website-speed-for-local-seo-success",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Website Speed Optimization Guide - PageSpeed Insights and Local SEO Tips",
      },
    ],
    siteName: "Harmatia Local",
    locale: "en_US",
    publishedTime: "2025-09-24T00:00:00.000Z",
    authors: ["The SEO-Bedouin"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Step-by-Step Guide to Website Speed for Local SEO Success",
    description: "Speed up your website with easy tips like image compression to rank higher in local searches and keep more customers. Advice from Harmatia Local.",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"],
    creator: "@harmatialocal",
    site: "@harmatialocal",
  },
  other: {
    "article:author": "The SEO-Bedouin",
    "article:published_time": "2025-09-24T00:00:00.000Z",
    "article:section": "Local SEO",
    "article:tag": "Website Speed for SEO, Local SEO Website Optimization, Image Compression for SEO, Fast Website Tips, Local Search Rankings",
  },
};

export default function WebsiteSpeedLocalSEOGuide() {
  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Step-by-Step Guide to Website Speed for Local SEO Success",
    "description": "Learn how to speed up your website with simple steps like image compression to boost local SEO. A fast site keeps 50% more visitors—tips from Harmatia Local.",
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
    "datePublished": "2025-09-24T00:00:00.000Z",
    "dateModified": "2025-09-24T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.harmatialocal.com/blog/step-by-step-guide-to-website-speed-for-local-seo-success"
    },
    "keywords": ["website speed for SEO", "local SEO website optimization", "image compression for SEO", "fast website tips", "local search rankings"],
    "articleSection": "Local SEO",
    "wordCount": "1200"
  };

  // HowTo Schema for AI Results and Featured Snippets
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Step-by-Step Guide to Website Speed for Local SEO Success",
    "description": "A guide to improving website speed with simple steps like image compression to boost local SEO rankings.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Check Your Current Website Speed",
        "text": "Use Google PageSpeed Insights or GTmetrix to assess your site's speed and identify issues.",
        "url": "https://www.harmatialocal.com/blog/step-by-step-guide-to-website-speed-for-local-seo-success#step-1-check-speed"
      },
      {
        "@type": "HowToStep",
        "name": "Compress Images Without Losing Quality",
        "text": "Use TinyPNG or Squoosh to reduce image sizes and choose the right format.",
        "url": "https://www.harmatialocal.com/blog/step-by-step-guide-to-website-speed-for-local-seo-success#step-2-compress-images"
      },
      {
        "@type": "HowToStep",
        "name": "Enable Browser Caching",
        "text": "Use plugins like W3 Total Cache to store site data for faster repeat visits.",
        "url": "https://www.harmatialocal.com/blog/step-by-step-guide-to-website-speed-for-local-seo-success#step-3-enable-caching"
      },
      {
        "@type": "HowToStep",
        "name": "Minimize CSS and JavaScript",
        "text": "Shrink code with tools like CSSNano and remove unused plugins.",
        "url": "https://www.harmatialocal.com/blog/step-by-step-guide-to-website-speed-for-local-seo-success#step-4-minimize-code"
      },
      {
        "@type": "HowToStep",
        "name": "Test and Monitor Regularly",
        "text": "Check speed monthly and monitor bounce rates with Google Analytics.",
        "url": "https://www.harmatialocal.com/blog/step-by-step-guide-to-website-speed-for-local-seo-success#step-5-test-monitor"
      }
    ],
    "supply": {
      "@type": "HowToSupply",
      "name": "Website Access"
    },
    "tool": {
      "@type": "HowToTool",
      "name": "Computer or Smartphone"
    },
    "totalTime": "PT45M",
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
    "datePublished": "2025-09-24T00:00:00.000Z"
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
      <BlogHeroWebsiteSpeed />
      
      {/* Three-Column Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Table of Contents */}
          <div className="hidden lg:block lg:col-span-2">
            <BlogTOCSidebarWebsiteSpeed />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-7">
            <BlogContentWebsiteSpeed />
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
