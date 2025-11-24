/**
 * Application-wide constants for animations, timings, and configuration
 */

// Animation timings
export const ANIMATION_TIMINGS = {
  LOADER_MINIMUM_MS: 800,
  TRANSITION_DURATION: 0.5,
  FADE_IN_DELAY: 0.3,
  PAGE_LOAD_DELAY: 0.8,
  SCROLL_INDICATOR_DELAY: 1.5,
  BUTTON_ANIMATION_SCALE: 1.05,
  BUTTON_ANIMATION_SCALE_TAP: 0.95,
} as const;

// Particle system configuration
export const PARTICLES_CONFIG = {
  DESKTOP_COUNT: 80,
  MOBILE_COUNT: 40,
  DESKTOP_SIZE: 3,
  MOBILE_SIZE: 2,
  DESKTOP_DISTANCE: 150,
  MOBILE_DISTANCE: 100,
  DESKTOP_GRAB_DISTANCE: 140,
  MOBILE_GRAB_DISTANCE: 80,
  DESKTOP_FPS_LIMIT: 120,
  MOBILE_FPS_LIMIT: 60,
  OPACITY_VALUE: 0.5,
  OPACITY_MIN: 0.1,
  SIZE_ANIMATION_SPEED: 2,
  MOVE_SPEED: 1,
  COLOR: '#4cc9f0',
  LINE_COLOR: '#3a0ca3',
  LINE_OPACITY: 0.4,
} as const;

// Responsive breakpoints
export const BREAKPOINTS = {
  MOBILE: 640,
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// Scroll behavior
export const SCROLL_CONFIG = {
  HEADER_SCROLL_THRESHOLD: 10,
  TEXT_ANIMATION_THRESHOLD: 0.1,
} as const;

// Form configuration
export const FORM_CONFIG = {
  SUCCESS_MESSAGE_DELAY_MS: 3000,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 5000,
  MAX_NAME_LENGTH: 100,
  MAX_COMPANY_LENGTH: 100,
} as const;

// Supabase configuration
export const SUPABASE_CONFIG = {
  TABLE_NAME: 'contact_submissions',
  REQUIRED_ENV_VARS: [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  ],
} as const;

// Text animation variants
export const TEXT_ANIMATION_VARIANTS = {
  WORD_STAGGER: 0.03,
  CHARACTER_STAGGER: 0.05,
  LINE_STAGGER: 0.1,
  DURATION: 0.5,
} as const;

// Parallax speed multipliers
export const PARALLAX_SPEEDS = {
  SLOW: 0.5,
  NORMAL: 1,
  FAST: 1.5,
} as const;

// Color values (mirrors tailwind config)
export const COLORS = {
  PRIMARY: '#3a0ca3',
  SECONDARY: '#4cc9f0',
  ACCENT: '#f72585',
  DARK: '#0f172a',
  MEDIUM: '#1e293b',
  LIGHT: '#ffffff',
} as const;
