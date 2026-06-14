import React from 'react';
import { Metadata } from 'next';
import { GlossyButton } from '@/components/ui/GlossyButton';
import { SectionReveal } from '@/components/ui/SectionReveal';

export const metadata: Metadata = {
  title: '404 - Page Not Found | AppCloid Technologies',
  description: 'The requested page could not be found.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
        <div className="w-[40rem] h-[40rem] bg-cyan rounded-full mix-blend-multiply filter blur-[128px] animate-pulse"></div>
      </div>

      <SectionReveal className="relative z-10 text-center max-w-2xl mx-auto glass glass-border rounded-3xl p-12 sm:p-16">
        <h1 className="text-8xl md:text-9xl font-bold font-space mb-6 bg-clip-text text-transparent bg-gradient-cyan-purple select-none">
          404
        </h1>
        <h2 className="text-3xl font-bold text-white mb-6">System Anomaly Detected</h2>
        <p className="text-lg text-bluegrey-300 mb-10 leading-relaxed">
          The page you are looking for has been relocated, deleted, or never existed in this iteration. Let's get you back to familiar territory.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <GlossyButton href="/" variant="primary" className="w-full sm:w-auto px-8">
            Return to Home
          </GlossyButton>
          <GlossyButton href="/contact" variant="ghost" className="w-full sm:w-auto px-8">
            Report an Issue
          </GlossyButton>
        </div>
      </SectionReveal>
    </main>
  );
}
