'use client';

import React from 'react';
import { GlossyButton } from '@/components/ui/GlossyButton';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan rounded-full mix-blend-multiply filter blur-[128px] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple rounded-full mix-blend-multiply filter blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-bluegrey-700 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-space mb-6 tracking-tight leading-tight">
          Powering the UK's Most Ambitious<br />
          <span className="bg-clip-text text-transparent bg-gradient-cyan-purple">Businesses With AI</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-bluegrey-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Based in Glasgow, AppCloid Technologies democratises elite, AI-first software solutions. 
          We engineer bespoke platforms that eliminate operational bottlenecks and drive unprecedented growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <GlossyButton href="/contact" variant="primary" className="w-full sm:w-auto text-lg px-10 py-4">
            Start Your Transformation
          </GlossyButton>
          <GlossyButton href="/ai-solutions" variant="secondary" className="w-full sm:w-auto text-lg px-10 py-4">
            Explore AI Solutions
          </GlossyButton>
        </div>
      </div>
    </section>
  );
};
