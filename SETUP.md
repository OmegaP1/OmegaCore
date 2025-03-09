# OmegaCore AI Website Setup Guide

This guide provides detailed instructions for setting up and deploying the OmegaCore AI website.

## Initial Setup

### Option 1: Using Create Next App

The easiest way to set up this project is using the Create Next App command:

```bash
npx create-next-app@latest OmegaCore AI-website --typescript --tailwind --eslint
```

After creating the project, replace the generated files with the ones from this repository.

### Option 2: Manual Setup

1. Create a new directory for the project:
```bash
mkdir OmegaCore AI-website
cd OmegaCore AI-website
```

2. Initialize a new Node.js project:
```bash
npm init -y
```

3. Install the required dependencies:
```bash
npm install react@18.2.0 react-dom@18.2.0 next@13.4.12 framer-motion@10.15.0 react-icons@4.10.1 react-intersection-observer@9.5.2 react-tsparticles@2.12.2 tsparticles@2.12.0 tsparticles-engine@2.12.0 tsparticles-slim@2.12.0
```

4. Install the development dependencies:
```bash
npm install -D typescript@5.1.6 @types/react@18.2.18 @types/node@20.4.5 @types/react-dom@18.2.7 tailwindcss@3.3.3 postcss@8.4.27 autoprefixer@10.4.14 eslint@8.46.0 eslint-config-next@13.4.12
```

5. Initialize TypeScript configuration:
```bash
npx tsc --init
```

6. Initialize Tailwind CSS:
```bash
npx tailwindcss init -p
```

7. Create the directory structure:
```bash
mkdir -p public/images/{backgrounds,logos,icons} src/{app,components/{layout,ui,home,animations},constants,styles,types,utils}
```

## Configuration Files

Ensure you've created the following configuration files:
- `next.config.js`
- `tailwind.config.js`
- `tsconfig.json`
- `postcss.config.js`
- `.eslintrc.json`

## Environment Setup

If you need environment variables, create a `.env.local` file:
```
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://OmegaCore AI.com
```

## Development Workflow

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:3000`

3. Make changes to the code and see them reflected in real-time

## Building for Production

1. Build the production version:
```bash
npm run build
```

2. The output will be generated in the `.next` folder (or `out` folder if using static export)

3. Test the production build locally:
```bash
npm run start
```

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings

### Option 2: Static Export

For traditional web hosting:

1. Set `output: 'export'` in your `next.config.js` file
2. Run `npm run build`
3. The static site will be generated in the `out` directory
4. Upload the contents of the `out` directory to your web host

### Option 3: Self-Hosted

For Node.js servers:

1. Build the application with `npm run build`
2. Start the Node.js server with `npm run start`
3. Set up a process manager like PM2 to keep the application running

## Troubleshooting

### Common Issues

**Issue**: Tailwind styles not applying
**Solution**: Ensure you've properly configured your `tailwind.config.js` file and imported the Tailwind directives in your CSS.

**Issue**: TypeScript errors
**Solution**: Run `npm run lint` to identify and fix TypeScript errors.

**Issue**: Images not displaying in production
**Solution**: Make sure you're using Next.js Image component with proper configuration or have configured the images in `next.config.js`.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)