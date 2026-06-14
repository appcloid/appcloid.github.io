'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SectionRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  className?: string;
}

export const SectionReveal = ({
  children,
  direction = 'up',
  delay = 0,
  className = ''
}: SectionRevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  // If reduced motion is requested, just render without animation
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const directionOffsets = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
    none: { x: 0, y: 0 }
  };

  const offset = directionOffsets[direction];

  const variants = {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, delay, ease: 'easeOut' } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
