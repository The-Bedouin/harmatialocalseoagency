import ODHeading from "@/components/ODHeading";
import BlogHeader from "@/components/BlogHeader";
import BlogCards from "@/components/BlogCards";
import StatementSection from "@/components/StatementSection";
import WhyHarmatiaSection from "@/components/WhyHarmatiaSection";
import NewsletterCard from "@/components/NewsletterCard";
import BlogFooter from "@/components/BlogFooter";
import BlogFeaturedSideCard from "@/components/BlogFeaturedSideCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local SEO Blog | Expert Tips & Strategies for Local Search Success | Harmatia Local",
  description: "Master local SEO with our comprehensive blog featuring Google Business Profile optimization, local search strategies, NAP citations, and proven techniques to dominate local search results and grow your business.",
  keywords: "local SEO blog, Google Business Profile optimization, local search strategies, local SEO tips, NAP citations, local SEO guide, local search marketing, local SEO audit, local SEO case studies, local search optimization",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://harmatialocalseoagency.com/blog-home"
  },
  openGraph: {
    title: "Local SEO Blog | Expert Tips & Strategies for Local Search Success",
    description: "Master local SEO with our comprehensive blog featuring Google Business Profile optimization, local search strategies, NAP citations, and proven techniques to dominate local search results.",
    type: "website",
    url: "https://harmatialocalseoagency.com/blog-home",
    siteName: "Harmatia Local SEO Agency",
    locale: "en_US",
    images: [
      {
        url: "https://harmatialocalseoagency.com/logo.svg",
        width: 56,
        height: 56,
        alt: "Harmatia Local SEO Agency Logo",
        type: "image/svg+xml",
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Local SEO Blog - Expert Tips and Strategies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Blog | Expert Tips & Strategies for Local Search Success",
    description: "Master local SEO with our comprehensive blog featuring Google Business Profile optimization, local search strategies, and proven techniques to dominate local search results.",
    images: [
      "https://harmatialocalseoagency.com/logo.svg",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"
    ],
    creator: "@harmatialocal",
    site: "@harmatialocal",
  },
};

export default function BlogHome() {
  // Blog Schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Harmatia Local SEO Blog",
    "description": "Expert local SEO tips, strategies, and guides to help businesses dominate local search results and grow online.",
    "url": "https://harmatialocalseoagency.com/blog-home",
    "publisher": {
      "@type": "Organization",
      "name": "Harmatia Local SEO Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://harmatialocalseoagency.com/logo.svg",
        "width": 56,
        "height": 56
      }
    },
    "author": {
      "@type": "Person",
      "name": "The SEO-Bedouin"
    },
    "inLanguage": "en-US",
    "datePublished": "2024-12-15",
    "dateModified": "2024-12-15"
  };

  // CollectionPage Schema for Blog Home
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Local SEO Blog Articles",
    "description": "Complete collection of local SEO articles, guides, and strategies",
    "url": "https://harmatialocalseoagency.com/blog-home",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Local SEO Blog Posts",
      "description": "Expert local SEO content to help businesses grow online",
      "numberOfItems": 6,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Article",
            "headline": "What is Local SEO? Complete Guide to Dominating Local Search Results",
            "url": "https://harmatialocalseoagency.com/what-is-local-seo",
            "description": "Master local SEO with our comprehensive guide covering Google Business Profile optimization, NAP citations, local content strategy, and advanced techniques."
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Article",
            "headline": "How to Optimize Your Google Business Profile for Local Searches",
            "url": "https://harmatialocalseoagency.com/how-to-optimize-google-business-profile",
            "description": "Boost your local rankings with easy Google Business Profile tweaks like photos and reviews. Learn why 72% of local searches start on Google."
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Article",
            "headline": "Local SEO Strategies for Small Businesses",
            "url": "https://harmatialocalseoagency.com/local-seo-strategies-for-small-businesses",
            "description": "Proven local SEO strategies specifically designed for small businesses to compete with larger competitors in local search results."
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Article",
            "headline": "Common Mistakes in Local SEO Audits",
            "url": "https://harmatialocalseoagency.com/common-mistakes-local-seo-audits",
            "description": "Avoid these common local SEO audit mistakes that could be hurting your local search rankings and business visibility."
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Article",
            "headline": "Website Speed and Local SEO Guide",
            "url": "https://harmatialocalseoagency.com/website-speed-local-seo-guide",
            "description": "How website speed impacts local SEO rankings and practical steps to improve your site's performance for better local search visibility."
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "Article",
            "headline": "Why Local Businesses Need Google Ads",
            "url": "https://harmatialocalseoagency.com/why-local-businesses-need-google-ads",
            "description": "Discover how Google Ads can complement your local SEO efforts and drive more qualified leads to your local business."
          }
        }
      ]
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://harmatialocalseoagency.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Local SEO Blog",
        "item": "https://harmatialocalseoagency.com/blog-home"
      }
    ]
  };

  // SiteNavigationElement Schema for Blog
  const blogNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Blog Navigation",
    "url": "https://harmatialocalseoagency.com/blog-home",
    "hasPart": [
      {
        "@type": "SiteNavigationElement",
        "name": "What is Local SEO?",
        "url": "https://harmatialocalseoagency.com/what-is-local-seo",
        "description": "Complete guide to local SEO fundamentals"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Google Business Profile Guide",
        "url": "https://harmatialocalseoagency.com/how-to-optimize-google-business-profile",
        "description": "How to optimize your Google Business Profile"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Local SEO Strategies",
        "url": "https://harmatialocalseoagency.com/local-seo-strategies-for-small-businesses",
        "description": "Local SEO strategies for small businesses"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Local SEO Audit Guide",
        "url": "https://harmatialocalseoagency.com/common-mistakes-local-seo-audits",
        "description": "Common local SEO audit mistakes to avoid"
      }
    ]
  };

  return (
    <>
      {/* Blog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {/* CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Blog Navigation Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogNavigationSchema) }}
      />
      <div className="min-h-screen bg-white">
        <BlogHeader />
        <ODHeading />
        <BlogFeaturedSideCard />
        <StatementSection />
        <BlogCards />
        <WhyHarmatiaSection />
        <NewsletterCard />
        <BlogFooter />
      </div>
    </>
  );
}
