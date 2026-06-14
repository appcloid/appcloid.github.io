'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IndustryCard as IndustryCardType } from '@/types';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface IndustryCardProps {
  data: IndustryCardType;
}

export const IndustryCard = ({ data }: IndustryCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleToggle = () => setIsFlipped(!isFlipped);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div 
      className="relative w-full h-96 perspective-1000 group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        role="button"
        tabIndex={0}
        aria-pressed={isFlipped}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="w-full h-full relative preserve-3d cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded-2xl"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Front Face */}
        <div 
          className="absolute w-full h-full backface-hidden glass glass-border rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-shadow duration-300 group-hover:shadow-cyan-glow"
          style={{ borderBottom: `4px solid ${data.accentColor}` }}
        >
          <div className="p-6 rounded-full bg-white/5 mb-6" style={{ color: data.accentColor }}>
            {React.cloneElement(data.icon as React.ReactElement, { className: 'w-16 h-16 drop-shadow-md' })}
          </div>
          <h3 className="text-2xl font-bold text-white">{data.sector}</h3>
        </div>

        {/* Back Face */}
        <div 
          className="absolute w-full h-full backface-hidden glass glass-border rounded-2xl p-8 flex flex-col justify-between"
          style={{ transform: 'rotateY(180deg)', borderTop: `4px solid ${data.accentColor}` }}
        >
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: data.accentColor }}>
              Key UK Use Cases
            </h4>
            <ul className="space-y-4">
              {data.useCases.map((useCase, index) => (
                <li key={index} className="text-sm text-bluegrey-300 flex items-start leading-relaxed">
                  <span className="mr-3 mt-1" style={{ color: data.accentColor }}>✦</span>
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center mt-4">
            <span className="text-xs text-bluegrey-500 uppercase tracking-widest hover:text-cyan transition-colors">
              Flip Back ⟲
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
