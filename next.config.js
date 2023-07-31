/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['gitlab.com','source.unsplash.com'],
  }
}

module.exports = nextConfig
