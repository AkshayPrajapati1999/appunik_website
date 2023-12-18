/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    nextScriptWorkers: true,
    // appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
