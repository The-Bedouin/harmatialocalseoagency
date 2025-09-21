import BlogHeader from "@/components/BlogHeader";
import BlogHero from "@/components/BlogHero";
import BlogTOCSidebar from "@/components/BlogTOCSidebar";
import BlogRightSidebar from "@/components/BlogRightSidebar";
import BlogMobileSidebar from "@/components/BlogMobileSidebar";
import BlogContent from "@/components/BlogContent";
import SimilarArticles from "@/components/SimilarArticles";
import BlogFooter from "@/components/BlogFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is Local SEO? Complete Guide to Dominating Local Search Results | Harmatia SEO",
  description: "Master local SEO with our comprehensive guide covering Google Business Profile optimization, NAP citations, local content strategy, and advanced techniques to dominate local search results and attract more customers.",
  keywords: "local SEO, Google Business Profile, local search optimization, NAP citations, local SEO strategy, local search results, local SEO guide, local SEO tips",
  openGraph: {
    title: "What is Local SEO? Complete Guide to Dominating Local Search Results",
    description: "Master local SEO with our comprehensive guide covering Google Business Profile optimization, NAP citations, local content strategy, and advanced techniques to dominate local search results and attract more customers.",
    type: "article",
    url: "https://harmatialocalseoagency.com/blog",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        width: 800,
        height: 400,
        alt: "Local SEO Guide - Complete Guide to Dominating Local Search Results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is Local SEO? Complete Guide to Dominating Local Search Results",
    description: "Master local SEO with our comprehensive guide covering Google Business Profile optimization, NAP citations, local content strategy, and advanced techniques to dominate local search results and attract more customers.",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"],
  },
};

export default function Blog() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What is Local SEO? The Complete Guide to Dominating Local Search Results",
    "description": "Master local SEO with our comprehensive guide covering Google Business Profile optimization, NAP citations, local content strategy, and advanced techniques to dominate local search results and attract more customers.",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    "author": {
      "@type": "Person",
      "name": "The SEO-Bedouin"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Harmatia Local SEO Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://harmatialocalseoagency.com/logo.png"
      }
    },
    "datePublished": "2024-12-15",
    "dateModified": "2024-12-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://harmatialocalseoagency.com/blog"
    },
    "keywords": ["local SEO", "Google Business Profile", "local search optimization", "NAP citations", "local SEO strategy", "local search results", "local SEO guide"],
    "articleSection": "Local SEO",
    "wordCount": "4500"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <div className="min-h-screen bg-white">
      <BlogHeader />
      <BlogHero />
      
      {/* Three-Column Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Table of Contents */}
          <div className="hidden lg:block lg:col-span-2">
            <BlogTOCSidebar />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-7">
            <BlogContent />
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


