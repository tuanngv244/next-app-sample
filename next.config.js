/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
});
const nextConfig = withPWA({
  // pwa: {
  //   dest: "public",
  //   register: true,
  //   skipWaiting: true,
  //   runtimeCaching,
  // },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "giaxefordvn.online",
        port: "",
      },
    ],
  },
});

module.exports = nextConfig;
