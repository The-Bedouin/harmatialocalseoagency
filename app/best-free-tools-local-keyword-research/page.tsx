import BlogHeader from "@/components/BlogHeader";
import BlogHeroLocalKeywordResearch from "@/components/BlogHeroLocalKeywordResearch";
import BlogTOCSidebarLocalKeywordResearch from "@/components/BlogTOCSidebarLocalKeywordResearch";
import BlogRightSidebar from "@/components/BlogRightSidebar";
import BlogMobileSidebar from "@/components/BlogMobileSidebar";
import BlogContentLocalKeywordResearch from "@/components/BlogContentLocalKeywordResearch";
import SimilarArticles from "@/components/SimilarArticles";
import BlogFooter from "@/components/BlogFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Free Tools for Local Keyword Research Beginners | Harmatia Local",
  description: "Discover free tools like Google Keyword Planner and People Also Ask to boost your local SEO. Learn easy keyword research tips to attract more customers with Harmatia Local.",
  keywords: "local keyword research, free SEO tools, Google Keyword Planner, People Also Ask, local SEO for beginners",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.harmatialocal.com/blog/best-free-tools-for-local-keyword-research-beginners"
  },
  openGraph: {
    title: "Best Free Tools for Local Keyword Research Beginners",
    description: "Use Google Keyword Planner and People Also Ask to find local keywords that drive customers to your business. Free tips from Harmatia Local experts.",
    type: "article",
    url: "https://www.harmatialocal.com/blog/best-free-tools-for-local-keyword-research-beginners",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Free Local Keyword Research Tools - Google Keyword Planner and People Also Ask Guide",
      },
    ],
    siteName: "Harmatia Local",
    locale: "en_US",
    publishedTime: "2025-09-23T00:00:00.000Z",
    authors: ["The SEO-Bedouin"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Free Tools for Local Keyword Research Beginners",
    description: "Use Google Keyword Planner and People Also Ask to find local keywords that drive customers to your business. Free tips from Harmatia Local experts.",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"],
    creator: "@harmatialocal",
    site: "@harmatialocal",
  },
  other: {
    "article:author": "The SEO-Bedouin",
    "article:published_time": "2025-09-23T00:00:00.000Z",
    "article:section": "Local SEO",
    "article:tag": "Local Keyword Research, Free SEO Tools, Google Keyword Planner, People Also Ask, Local SEO for Beginners",
  },
};

export default function BestFreeToolsLocalKeywordResearch() {
  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Free Tools for Local Keyword Research Beginners",
    "description": "Discover free tools like Google Keyword Planner and People Also Ask to boost your local SEO. Learn easy keyword research tips to attract more customers with Harmatia Local.",
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
      "@id": "https://www.harmatialocal.com/blog/best-free-tools-for-local-keyword-research-beginners"
    },
    "keywords": ["local keyword research", "free SEO tools", "Google Keyword Planner", "People Also Ask", "local SEO for beginners"],
    "articleSection": "Local SEO",
    "wordCount": "1000"
  };

  // HowTo Schema for AI Results and Featured Snippets
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Best Free Tools for Local Keyword Research Beginners",
    "description": "A guide to using Google Keyword Planner and People Also Ask for local keyword research to boost your business's SEO.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Use Google Keyword Planner",
        "text": "Sign up at ads.google.com, discover keywords with location filters, and target low-competition terms.",
        "url": "https://www.harmatialocal.com/blog/best-free-tools-for-local-keyword-research-beginners#tool-1-google-keyword-planner"
      },
      {
        "@type": "HowToStep",
        "name": "Explore People Also Ask",
        "text": "Search your service and city on Google, note PAA questions, and use them in content.",
        "url": "https://www.harmatialocal.com/blog/best-free-tools-for-local-keyword-research-beginners#tool-2-people-also-ask"
      }
    ],
    "supply": {
      "@type": "HowToSupply",
      "name": "Google Account"
    },
    "tool": {
      "@type": "HowToTool",
      "name": "Computer or Smartphone"
    },
    "totalTime": "PT20M",
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
      <BlogHeroLocalKeywordResearch />
      
      {/* Three-Column Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Table of Contents */}
          <div className="hidden lg:block lg:col-span-2">
            <BlogTOCSidebarLocalKeywordResearch />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-7">
            <BlogContentLocalKeywordResearch />
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
