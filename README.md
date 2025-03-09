# OmegaCore AI Website

A modern, responsive website for OmegaCore AI - an AI solutions provider with a focus on personal assistants and generative AI technologies.

## Features

- **Modern Design**: Sleek, glass-morphism inspired UI with gradients and animations
- **Responsive Layout**: Fully responsive design that works on all device sizes
- **Animated Elements**: Interactive UI with subtle animations for enhanced UX
- **Performance Optimized**: Built with performance in mind
- **SEO Ready**: Structured for optimal search engine visibility

## Tech Stack

- **React 18**: For component-based UI development
- **Next.js 13**: React framework with static site generation
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For utility-first styling
- **Framer Motion**: For smooth animations
- **React Icons**: For comprehensive icon library
- **React tsParticles**: For interactive background particles

## Getting Started

### Prerequisites

- Node.js 16.0.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/OmegaPrimePlusIT/OmegaCore AI.git
cd OmegaCore AI
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
OmegaCore AI-website/
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   │   ├── animations/   # Animation components
│   │   ├── home/         # Home page components
│   │   ├── layout/       # Layout components
│   │   └── ui/           # Reusable UI components
│   ├── constants/        # Application constants
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Customization

### Changing Colors

Edit the `tailwind.config.js` file to modify the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: '#3a0ca3',
      secondary: '#4cc9f0',
      accent: '#f72585',
      dark: '#0f172a',
      medium: '#1e293b',
      light: '#ffffff',
    },
    // ...
  }
}
```

### Adding New Pages

Create new files in the `src/app` directory to add new pages to the website.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern AI and tech websites
- Icons from React Icons library