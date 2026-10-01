import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a0.muscache.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'carpediemcabanas.com.br',
        pathname: '/wp/wp-content/uploads/**',
      },
    ],
    qualities: [75, 90],
  },
};

export default nextConfig;
