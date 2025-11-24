/**
 * Environment variable validator
 * Ensures required environment variables are set and provides helpful error messages
 */

export const validateSupabaseEnv = (): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  if (!process?.env?.NEXT_PUBLIC_SUPABASE_URL) {
    errors.push(
      "Missing NEXT_PUBLIC_SUPABASE_URL. Please add it to your .env.local file."
    );
  }

  if (!process?.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    errors.push(
      "Missing NEXT_PUBLIC_SUPABASE_ANON_KEY. Please add it to your .env.local file."
    );
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Sanitize form input to prevent XSS
 */
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
};
