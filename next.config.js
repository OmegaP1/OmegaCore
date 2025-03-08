/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static exports for hosting on traditional web servers
    output: 'export',
    
    // Optional: Configure image domains if you're loading images from external sources
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
      unoptimized: true, // Required for static export
    },
  }
  
  module.exports = nextConfig