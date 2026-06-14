'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface GlossyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  children: React.ReactNode;
}

export const GlossyButton = ({ variant = 'primary', href, children, className = '', ...props }: GlossyButtonProps) => {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold rounded-full transition-all duration-300";
  
  const variants = {
    primary: "text-midnight bg-cyan hover:bg-white glow-cyan",
    secondary: "glass glass-border text-purple hover:bg-white/10 glow-purple",
    ghost: "text-bluegrey-300 hover:text-cyan underline decoration-transparent hover:decoration-cyan underline-offset-4",
  };

  const Component = href ? motion.a : motion.button;
  const linkProps = href ? { href } : {};

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
      {...linkProps}
      {...(props as any)}
    >
      <span className="relative z-10">{children}</span>
    </Component>
  );
};
