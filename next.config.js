/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['api.dicebear.com']
  },
  reactStrictMode: true,
}

module.exports = nextConfig
