import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["placehold.co"],
    // remotePatterns: [new URL("https://placehold.co/**")],
  },
};

export default nextConfig;
