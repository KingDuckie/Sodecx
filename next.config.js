/**  @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
    experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://localhost:3000",
    DB_URI: "mongodb://127.0.0.1:27017/buyitnow",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
});

// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   env: {
//     API_URL: "http://localhost:3000",
//     DB_URI: "mongodb://127.0.0.1:27017/buyitnow",
//   },
//   images: {
//     domains: ["res.cloudinary.com"],
//   },
// };

// module.exports = nextConfig;