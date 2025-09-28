import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterBlurController from "@/components/FooterBlurController";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Harmatia Local SEO" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}>
        {children}
        {/* Fixed bottom blur that hides when footer is visible */}
        <FooterBlurController />
        <SpeedInsights />
      </body>
    </html>
  );
}
