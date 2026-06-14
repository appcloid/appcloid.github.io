import React from 'react';
import { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { IndustryTicker } from '@/components/home/IndustryTicker';
import { ValueProposition } from '@/components/home/ValueProposition';
import { industries } from '@/data/industries';

export const metadata: Metadata = {
  title: 'AppCloid Technologies — AI-First IT for UK Businesses',
  description: 'AppCloid Technologies builds high-performance, AI-driven software, web platforms, and intelligent agents for ambitious businesses across the UK.',
};

export default function HomePage() {
  const industryNames = industries.map(ind => ind.sector);

  // Generate Organization JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AppCloid Technologies',
    url: 'https://appcloid.com',
    logo: 'https://appcloid.com/icon.svg',
    email: 'contact@appcloid.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UK'
    }
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <IndustryTicker items={industryNames} />
      <ValueProposition />
    </main>
  );
}
