/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["w3roar.com", "github.com", "cloud.appwrite.io", "auraco.app", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
