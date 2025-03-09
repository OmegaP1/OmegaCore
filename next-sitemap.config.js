/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://omegacore-ai.com',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 7000,
    exclude: ['/server-sitemap.xml'],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://omegacore-ai.com/server-sitemap.xml',
      ],
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: [
            '/*.json$',
            '/*_buildManifest.js$', 
            '/*_ssgManifest.js$',
            '/*_middlewareManifest.js$',
            '/.*-middleware.js$'
          ],
        },
        {
          userAgent: 'Googlebot',
          allow: '/',
          crawlDelay: 1,
        },
        {
          userAgent: 'bingbot',
          allow: '/',
          crawlDelay: 1,
        },
      ],
    },
    transform: async (config, path) => {
      // Custom priority and changefreq for specific pages
      const defaultConfig = {
        loc: path,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: new Date().toISOString(),
      };
  
      // Custom priorities by path
      if (path === '/') {
        return {
          ...defaultConfig,
          priority: 1.0,
          changefreq: 'monthly',
        };
      }
      
      if (path === '/services') {
        return {
          ...defaultConfig,
          priority: 0.8,
          changefreq: 'monthly',
        };
      }
      
      if (path.startsWith('/services/')) {
        return {
          ...defaultConfig,
          priority: 0.7,
          changefreq: 'monthly',
        };
      }
  
      return defaultConfig;
    },
  }