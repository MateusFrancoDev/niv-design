import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 640],
    imageSizes: [320],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 ano
  },
  compress: true,
};

export default nextConfig;
