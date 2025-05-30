import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,

  // GitHub Pagesのリポジトリ名に書き換えてください
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;