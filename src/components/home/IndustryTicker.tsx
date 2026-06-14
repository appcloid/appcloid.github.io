'use client';

import React from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface IndustryTickerProps {
  items: string[];
  speed?: number; // seconds per cycle
}

export const IndustryTicker = ({ items, speed = 40 }: IndustryTickerProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="py-6 border-y border-white/10 glass bg-midnight/50 text-center">
        <p className="text-bluegrey-500 text-sm max-w-7xl mx-auto px-4">
          Trusted across: {items.join(', ')}
        </p>
      </div>
    );
  }

  // Duplicate items twice to ensure seamless infinite scrolling loop
  const tickerItems = [...items, ...items, ...items];

  return (
    <div className="py-8 border-y border-white/10 glass bg-midnight/50 overflow-hidden flex whitespace-nowrap group">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: scrollMarquee ${speed}s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
      <div className="flex animate-marquee min-w-full">
        {tickerItems.map((item, index) => (
          <div key={index} className="flex items-center px-12">
            <span className="text-cyan mr-4">✦</span>
            <span className="text-xl font-bold text-bluegrey-300 tracking-wide uppercase">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
