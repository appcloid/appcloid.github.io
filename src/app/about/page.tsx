import React from 'react';
import { Metadata } from 'next';
import { AboutContent } from '@/components/about/AboutContent';

export const metadata: Metadata = {
  title: 'About Us | AppCloid Technologies, Glasgow',
  description: 'Learn about AppCloid Technologies, headquartered in Glasgow, Scotland. We deliver bespoke, AI-first software engineering to SMBs across the UK.',
};

export default function AboutPage() {
  // Generate ProfessionalService & LocalBusiness JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    name: 'AppCloid Technologies',
    url: 'https://appcloid.com',
    description: 'Bespoke AI solutions and software engineering for UK businesses.',
    email: 'contact@appcloid.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Newton Mearns',
      addressRegion: 'Glasgow',
      postalCode: 'G77 5TA',
      addressCountry: 'UK'
    },
    areaServed: 'GB'
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <AboutContent />
    </main>
  );
}
