import BlogHeader from "@/components/BlogHeader";
import BlogHeroLocalSEO from "@/components/BlogHeroLocalSEO";
import BlogTOCSidebarLocalSEO from "@/components/BlogTOCSidebarLocalSEO";
import BlogRightSidebar from "@/components/BlogRightSidebar";
import BlogMobileSidebar from "@/components/BlogMobileSidebar";
import BlogContentLocalSEO from "@/components/BlogContentLocalSEO";
import SimilarArticles from "@/components/SimilarArticles";
import BlogFooter from "@/components/BlogFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local SEO Strategies for Small Businesses: Dominate Local Search | Harmatia Local",
  description: "Master local SEO with proven strategies for small businesses. Learn Google Business Profile optimization, local citations, and content tactics that drive foot traffic.",
  keywords: "local seo strategies, small business local seo, google business profile optimization, local search ranking, small business seo tips, local seo guide",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.harmatialocal.com/blog/local-seo-strategies-for-small-businesses"
  },
  openGraph: {
    title: "Local SEO Strategies for Small Businesses: Dominate Local Search",
    description: "Master local SEO with proven strategies for small businesses. Learn Google Business Profile optimization, local citations, and content tactics that drive foot traffic.",
    type: "article",
    url: "https://www.harmatialocal.com/blog/local-seo-strategies-for-small-businesses",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Local SEO Strategies Dashboard showing Google Business Profile optimization and local search results",
      },
    ],
    siteName: "Harmatia Local",
    locale: "en_US",
    publishedTime: "2025-09-25T00:00:00.000Z",
    authors: ["The SEO-Bedouin"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Strategies for Small Businesses: Dominate Local Search",
    description: "Master local SEO with proven strategies for small businesses. Learn Google Business Profile optimization, local citations, and content tactics that drive foot traffic.",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"],
    creator: "@harmatialocal",
    site: "@harmatialocal",
  },
  other: {
    "article:author": "The SEO-Bedouin",
    "article:published_time": "2025-09-25T00:00:00.000Z",
    "article:section": "Local SEO",
    "article:tag": "Local SEO, Small Business, Google Business Profile, Local Search, SEO Strategies, Local Citations, Local Content",
  },
};

export default function LocalSEOStrategiesForSmallBusinesses() {
  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Local SEO Strategies for Small Businesses: Dominate Local Search",
    "description": "Master local SEO with proven strategies for small businesses. Learn Google Business Profile optimization, local citations, and content tactics that drive foot traffic.",
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
      "@id": "https://www.harmatialocal.com/blog/local-seo-strategies-for-small-businesses"
    },
    "keywords": ["local seo strategies", "small business local seo", "google business profile optimization", "local search ranking", "small business seo tips", "local seo guide"],
    "articleSection": "Local SEO",
    "wordCount": "1500"
  };

  // HowTo Schema for AI Results and Featured Snippets
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Implement Local SEO Strategies for Small Businesses",
    "description": "A step-by-step guide to implementing local SEO strategies that help small businesses dominate local search results and attract more customers.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Optimize Your Google Business Profile",
        "text": "Complete your profile with accurate NAP information, add high-quality photos, and encourage customer reviews.",
        "url": "https://www.harmatialocal.com/blog/local-seo-strategies-for-small-businesses#step-1-google-business-profile"
      },
      {
        "@type": "HowToStep",
        "name": "Build Local Citations and NAP Consistency",
        "text": "List your business on relevant local directories and ensure consistent NAP across all platforms.",
        "url": "https://www.harmatialocal.com/blog/local-seo-strategies-for-small-businesses#step-2-local-citations"
      },
      {
        "@type": "HowToStep",
        "name": "Create Location-Specific Content",
        "text": "Develop content targeting local keywords and address local customer needs to attract nearby customers.",
        "url": "https://www.harmatialocal.com/blog/local-seo-strategies-for-small-businesses#step-3-local-content"
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
    "totalTime": "PT2H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0-500"
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
      <BlogHeroLocalSEO />
      
      {/* Three-Column Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Table of Contents */}
          <div className="hidden lg:block lg:col-span-2">
            <BlogTOCSidebarLocalSEO />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-7">
            <BlogContentLocalSEO />
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
