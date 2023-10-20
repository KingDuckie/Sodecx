/**  @type {import('next').NextConfig} */

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

// module.exports = withBundleAnalyzer({
//     experimental: {
//     appDir: true,
//   },
//   env: {
//     API_URL: "http://localhost:3000",
//     DB_URI: "mongodb://127.0.0.1:27017/buyitnow",
//   },
//   images: {
//     domains: ["res.cloudinary.com"],
//   },
  // webpack: (config, { dev, isServer }) => {
  //   // Replace React with Preact only in client production build
  //   if (!dev && !isServer) {
  //     Object.assign(config.resolve.alias, {
  //       react: 'preact/compat',
  //       'react-dom/test-utils': 'preact/test-utils',
  //       'react-dom': 'preact/compat',
  //     });
  //   }

  //   return config;
  // },
// });

const nextConfig = {
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
};

module.exports = nextConfig;