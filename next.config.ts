import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    unoptimized: false,
  },
  webpack(config) {
    // SVG を React コンポーネントとして読み込む設定
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
