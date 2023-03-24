/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  pageExtensions:['js','jsx','ts','tsx'],
  images: {
    domains: ["links.papareact.com"],
  }
}

module.exports = nextConfig
