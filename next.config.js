/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['gitlab.com','source.unsplash.com','img.icons8.com'],
  }
}

module.exports = nextConfig
