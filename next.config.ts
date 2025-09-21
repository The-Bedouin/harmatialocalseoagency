import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: false, // Enable optimization for local images
  },
};

export default nextConfig;
