/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for dynamic routing
  // output: 'export',

  // Configure image domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Webpack configuration to handle missing optional dependencies
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "utf-8-validate": false,
        bufferutil: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;