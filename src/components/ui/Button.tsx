"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
}) => {
  // Define base styles
  const baseStyles =
    "inline-block font-bold rounded-full transition-all duration-300 mobile-friendly-button";

  // Size variations - adjusted for better mobile touch targets
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 sm:px-7 sm:py-3 text-base",
    lg: "px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg",
  };
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:-translate-y-1',
    secondary: 'bg-gradient-to-r from-secondary to-primary text-white hover:shadow-lg hover:-translate-y-1',
    outline: 'bg-transparent border-2 border-accent text-accent hover:bg-accent/10 hover:-translate-y-1',
  };
  
  // Combine all styles with disabled state
  const styles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`;
  
  // Button motion variants
  const buttonVariants = {
    hover: {
      scale: disabled ? 1 : 1.05,
      boxShadow: disabled ? 'none' : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
    tap: {
      scale: disabled ? 1 : 0.95,
    },
  };

  // Render button or link
  if (href) {
    return (
      <motion.a
        href={href}
        className={styles}
        whileHover={!disabled ? "hover" : undefined}
        whileTap={!disabled ? "tap" : undefined}
        variants={buttonVariants}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={disabled ? undefined : onClick}
      className={styles}
      whileHover={!disabled ? "hover" : undefined}
      whileTap={!disabled ? "tap" : undefined}
      variants={buttonVariants}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default Button;