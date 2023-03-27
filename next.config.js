/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  pageExtensions:['js','jsx','ts','tsx'],
  images: {
    domains: ["links.papareact.com","louisle.s3.ap-southeast-1.amazonaws.com","cdn.hashnode.com"],
  }
}

module.exports = nextConfig
