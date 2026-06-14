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

  return (
    <div 
      className="relative w-full h-80 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden glass glass-border rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-shadow duration-300 hover:shadow-glass">
          <div className="mb-6">{data.icon}</div>
          <h3 className="text-2xl font-bold" style={{ color: data.accentColor }}>{data.sector}</h3>
        </div>

        {/* Back */}
        <div 
          className="absolute w-full h-full backface-hidden glass glass-border rounded-2xl p-6 flex flex-col justify-center"
          style={{ transform: 'rotateY(180deg)', borderTop: `4px solid ${data.accentColor}` }}
        >
          <h4 className="text-lg font-bold mb-4 text-white">Key Capabilities:</h4>
          <ul className="space-y-3">
            {data.useCases.map((useCase, index) => (
              <li key={index} className="text-sm text-bluegrey-300 flex items-start">
                <span className="mr-2" style={{ color: data.accentColor }}>•</span>
                <span>{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
