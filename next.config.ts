import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
      unoptimized: true,
  },
  output: 'export',
  distDir: "build",
};

export default nextConfig;
