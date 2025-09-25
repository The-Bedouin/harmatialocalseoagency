import BlogHeader from "@/components/BlogHeader";
import BlogHeroLocalSEOAudit from "@/components/BlogHeroLocalSEOAudit";
import BlogTOCSidebarLocalSEOAudit from "@/components/BlogTOCSidebarLocalSEOAudit";
import BlogRightSidebar from "@/components/BlogRightSidebar";
import BlogMobileSidebar from "@/components/BlogMobileSidebar";
import BlogContentLocalSEOAudit from "@/components/BlogContentLocalSEOAudit";
import SimilarArticles from "@/components/SimilarArticles";
import BlogFooter from "@/components/BlogFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Common Mistakes in Local SEO Audits and How to Fix Them | Harmatia Local",
  description: "Discover the 5 most common local SEO audit mistakes that cost you leads. Learn how to fix them with our DIY checklist and free professional audit.",
  keywords: "local seo audit mistakes, google business profile audit, local seo checklist, seo audit errors, local seo fixes, seo audit tips",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.harmatialocal.com/blog/common-mistakes-local-seo-audits"
  },
  openGraph: {
    title: "Common Mistakes in Local SEO Audits and How to Fix Them",
    description: "Discover the 5 most common local SEO audit mistakes that cost you leads. Learn how to fix them with our DIY checklist and free professional audit.",
    type: "article",
    url: "https://www.harmatialocal.com/blog/common-mistakes-local-seo-audits",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Local SEO Audit Mistakes - Common Errors and How to Fix Them",
      },
    ],
    siteName: "Harmatia Local",
    locale: "en_US",
    publishedTime: "2025-09-25T00:00:00.000Z",
    authors: ["The SEO-Bedouin"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Common Mistakes in Local SEO Audits and How to Fix Them",
    description: "Discover the 5 most common local SEO audit mistakes that cost you leads. Learn how to fix them with our DIY checklist and free professional audit.",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"],
    creator: "@harmatialocal",
    site: "@harmatialocal",
  },
  other: {
    "article:author": "The SEO-Bedouin",
    "article:published_time": "2025-09-25T00:00:00.000Z",
    "article:section": "Local SEO",
    "article:tag": "Local SEO Audit, Google Business Profile, SEO Mistakes, Local SEO Checklist, SEO Audit Errors",
  },
};

export default function CommonMistakesLocalSEOAudits() {
  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Common Mistakes in Local SEO Audits and How to Fix Them",
    "description": "Discover the 5 most common local SEO audit mistakes that cost you leads. Learn how to fix them with our DIY checklist and free professional audit.",
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
      "@id": "https://www.harmatialocal.com/blog/common-mistakes-local-seo-audits"
    },
    "keywords": ["local seo audit mistakes", "google business profile audit", "local seo checklist", "seo audit errors", "local seo fixes", "seo audit tips"],
    "articleSection": "Local SEO",
    "wordCount": "1200"
  };

  // HowTo Schema for AI Results and Featured Snippets
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Fix Common Local SEO Audit Mistakes",
    "description": "A step-by-step guide to identifying and fixing the most common local SEO audit mistakes that cost businesses leads and visibility.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Claim Your Google Business Profile",
        "text": "Go to google.com/business, claim your profile, and verify ownership to ensure control and boost rankings.",
        "url": "https://www.harmatialocal.com/blog/common-mistakes-local-seo-audits#mistake-1-unclaimed-gbp"
      },
      {
        "@type": "HowToStep",
        "name": "Build Customer Reviews",
        "text": "Ask happy customers to leave reviews and respond to all reviews to increase click-through rates by 10-20%.",
        "url": "https://www.harmatialocal.com/blog/common-mistakes-local-seo-audits#mistake-2-customer-reviews"
      },
      {
        "@type": "HowToStep",
        "name": "Fix NAP Consistency",
        "text": "Audit your Name, Address, Phone information across all platforms and update to match exactly.",
        "url": "https://www.harmatialocal.com/blog/common-mistakes-local-seo-audits#mistake-3-nap-consistency"
      },
      {
        "@type": "HowToStep",
        "name": "Improve Website Speed",
        "text": "Test speed with Google PageSpeed Insights and optimize images and caching to boost conversions by 7%.",
        "url": "https://www.harmatialocal.com/blog/common-mistakes-local-seo-audits#mistake-4-website-speed"
      },
      {
        "@type": "HowToStep",
        "name": "Add Local Keywords",
        "text": "Use Google Keyword Planner to find local terms and add them to your website content and titles.",
        "url": "https://www.harmatialocal.com/blog/common-mistakes-local-seo-audits#mistake-5-local-keywords"
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
    "totalTime": "PT1H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0-100"
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
      <BlogHeroLocalSEOAudit />
      
      {/* Three-Column Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Table of Contents */}
          <div className="hidden lg:block lg:col-span-2">
            <BlogTOCSidebarLocalSEOAudit />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-7">
            <BlogContentLocalSEOAudit />
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
