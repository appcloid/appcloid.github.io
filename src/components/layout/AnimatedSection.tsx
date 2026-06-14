'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedSection = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: 'easeOut' } }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  );
};
