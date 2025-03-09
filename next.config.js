/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for hosting on traditional web servers
  output: "export",

  // Configure image domains if you're loading images from external sources
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true, // Required for static export
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