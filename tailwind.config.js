/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
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
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'hero-pattern': "url('/images/backgrounds/hero-pattern.svg')",
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        animation: {
          'orbit': 'orbit 8s linear infinite',
          'orbit-reverse': 'orbit 6s linear infinite reverse',
          'pulse': 'pulse 2s ease-out infinite',
        },
        keyframes: {
          orbit: {
            '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
            '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
          },
          pulse: {
            '0%': { transform: 'translate(-50%, -50%) scale(0.5)', opacity: 0.8 },
            '100%': { transform: 'translate(-50%, -50%) scale(1.2)', opacity: 0 },
          },
        },
        backdropBlur: {
          xs: '2px',
        },
      },
    },
    plugins: [],
  }