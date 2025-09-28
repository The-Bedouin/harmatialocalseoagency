import Hero from "@/components/Hero";
import TopNav from "@/components/TopNav";
import FloatingBadges from "@/components/FloatingBadges";
import Projects from "@/components/Projects";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import InternalLinks from "@/components/InternalLinks";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harmatia Local SEO Agency | Dominate Local Search Results & Grow Your Business",
  description: "We help businesses dominate web search and attract more customers by optimising their website and Google Business Profile (GBP) with proven, tailored SEO strategies. Get more local customers with our expert local SEO services.",
  keywords: "local SEO agency, Google Business Profile optimization, local search marketing, local SEO services, small business SEO, local search rankings, NAP citations, local SEO audit, local search optimization, local SEO consultant",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://harmatialocalseoagency.com"
  },
  openGraph: {
    title: "Harmatia Local SEO Agency | Dominate Local Search Results & Grow Your Business",
    description: "We help businesses dominate web search and attract more customers by optimising their website and Google Business Profile (GBP) with proven, tailored SEO strategies.",
    type: "website",
    url: "https://harmatialocalseoagency.com",
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
        alt: "Harmatia Local SEO Agency - Dominate Local Search Results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harmatia Local SEO Agency | Dominate Local Search Results & Grow Your Business",
    description: "We help businesses dominate web search and attract more customers by optimising their website and Google Business Profile (GBP) with proven, tailored SEO strategies.",
    images: [
      "https://harmatialocalseoagency.com/logo.svg",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"
    ],
    creator: "@harmatialocal",
    site: "@harmatialocal",
  },
};

export default function Home() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Harmatia Local SEO Agency",
    "description": "We help businesses dominate web search and attract more customers by optimising their website and Google Business Profile (GBP) with proven, tailored SEO strategies.",
    "url": "https://harmatialocalseoagency.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://harmatialocalseoagency.com/logo.svg",
      "width": 56,
      "height": 56,
      "contentUrl": "https://harmatialocalseoagency.com/logo.svg"
    },
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
    "telephone": "+1-555-0123",
    "email": "hello@harmatialocalseoagency.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Street",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/harmatia-local-seo",
      "https://twitter.com/harmatialocal",
      "https://www.facebook.com/harmatialocalseo"
    ],
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "The SEO-Bedouin"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.7128",
        "longitude": "-74.0060"
      },
      "geoRadius": "50000"
    }
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://harmatialocalseoagency.com/#localbusiness",
    "name": "Harmatia Local SEO Agency",
    "description": "Professional local SEO services to help businesses dominate local search results and attract more customers.",
    "url": "https://harmatialocalseoagency.com",
    "telephone": "+1-555-0123",
    "email": "hello@harmatialocalseoagency.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Street",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, PayPal",
    "currenciesAccepted": "USD",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Local SEO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Business Profile Optimization",
            "description": "Complete optimization of your Google Business Profile for maximum local visibility"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO Audit",
            "description": "Comprehensive analysis of your local SEO performance and recommendations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "NAP Citation Management",
            "description": "Consistent Name, Address, Phone number citations across the web"
          }
        }
      ]
    }
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Harmatia Local SEO Agency",
    "url": "https://harmatialocalseoagency.com",
    "description": "Professional local SEO services to help businesses dominate local search results and attract more customers.",
    "publisher": {
      "@type": "Organization",
      "name": "Harmatia Local SEO Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://harmatialocalseoagency.com/logo.svg",
        "width": 56,
        "height": 56,
        "contentUrl": "https://harmatialocalseoagency.com/logo.svg"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://harmatialocalseoagency.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
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
      }
    ]
  };

  // Site Navigation Schema for Sitelinks
  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "url": "https://harmatialocalseoagency.com",
    "hasPart": [
      {
        "@type": "SiteNavigationElement",
        "name": "Services",
        "url": "https://harmatialocalseoagency.com/#services",
        "description": "Local SEO services including Google Business Profile optimization, website optimization, and Google Ads management"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "About",
        "url": "https://harmatialocalseoagency.com/about",
        "description": "Learn about Harmatia Local SEO Agency and our team of local SEO experts"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Contact",
        "url": "https://harmatialocalseoagency.com/contact",
        "description": "Get in touch with our local SEO specialists for a free consultation"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Blog",
        "url": "https://harmatialocalseoagency.com/blog-home",
        "description": "Local SEO tips, guides, and strategies to help your business grow online"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Portfolio",
        "url": "https://harmatialocalseoagency.com/#projects",
        "description": "View our successful local SEO case studies and client results"
      }
    ]
  };

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Site Navigation Schema for Sitelinks */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
      />
      <div className="min-h-screen bg-white">
        <TopNav />
        <Hero />
        <InternalLinks />
        <Projects />
        <Mission />
        <Services />
        <Testimonials />
        <CallToAction />
        <FrequentlyAskedQuestions />
        <FloatingBadges />
        <Footer />
      </div>
    </>
  );
}
