# OmegaCore Image Assets

## Required Images for SEO and Browser Compatibility

The following image files need to be created and placed in appropriate directories:

### Favicon and Browser Icons
- `/favicon.ico` - 16x16 or 32x32 ICO file
- `/favicon-16x16.png` - 16x16 PNG file
- `/favicon-32x32.png` - 32x32 PNG file
- `/apple-touch-icon.png` - 180x180 PNG file for iOS
- `/android-chrome-192x192.png` - 192x192 PNG file for Android
- `/android-chrome-512x512.png` - 512x512 PNG file for Android

### Open Graph and Social Media
- `/images/og-image.jpg` - 1200x630 JPEG file for social media sharing

## How to Generate These Files

1. Start with the OmegaCore logo SVG located in `/public/images/logos/omegacore-logo.svg`
2. Use a favicon generator tool such as:
   - [RealFaviconGenerator](https://realfavicongenerator.net/)
   - [Favicon.io](https://favicon.io/favicon-converter/)

3. For the OpenGraph image, create a promotional banner that includes:
   - The OmegaCore logo
   - Tagline "Advanced AI Solutions"
   - A simple, clean background that matches your brand colors

## Design Recommendations

- Keep the favicon simple and recognizable (use just the Omega symbol with the core dot)
- Ensure the OG image has good contrast for text readability
- Maintain consistent branding across all icon formats
- Use the primary brand colors (#3a0ca3, #f72585) in your designs

## Image Optimization

Ensure all images are properly optimized for web use:
- Compress PNG files with tools like TinyPNG
- Optimize JPG files to reduce size while maintaining quality
- Keep SVG files clean by removing unnecessary code

Remember to update the paths in `layout.tsx` if you change the location of any of these files.