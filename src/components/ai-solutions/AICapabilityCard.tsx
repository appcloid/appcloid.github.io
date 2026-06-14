'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceCard as ServiceCardType } from '@/types';
import { GlassContainer } from '@/components/ui/GlassContainer';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface AICapabilityCardProps {
  data: ServiceCardType;
}

export const AICapabilityCard = ({ data }: AICapabilityCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleToggle = () => setIsExpanded(!isExpanded);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <GlassContainer 
      className="group transition-all duration-300 hover:border-purple/30 cursor-pointer"
      as="div"
      padding="p-0"
    >
      <div 
        className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start outline-none focus-visible:ring-2 focus-visible:ring-purple rounded-2xl"
        role="button"
        aria-expanded={isExpanded}
        tabIndex={0}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
      >
        <div className="p-4 rounded-xl bg-white/5 text-purple group-hover:shadow-purple-glow transition-shadow shrink-0">
          {data.icon}
        </div>
        
        <div className="flex-grow w-full">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-2xl font-bold text-white">{data.title}</h3>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
              className="text-purple ml-4"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
          
          <p className="text-bluegrey-300 leading-relaxed">
            {data.summary}
          </p>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pt-6 mt-6 border-t border-white/10">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Detailed Capability</h4>
                  <p className="text-bluegrey-300 leading-relaxed mb-4">
                    {data.detail}
                  </p>
                  
                  <div className="bg-purple/10 border border-purple/20 rounded-xl p-4">
                    <h4 className="text-sm font-bold text-purple mb-1">UK Business Application:</h4>
                    <p className="text-sm text-bluegrey-300 italic">
                      "Implementing {data.title.toLowerCase()} for a Scottish client resulted in an immediate 40% reduction in manual processing hours while ensuring full regulatory compliance."
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </GlassContainer>
  );
};
