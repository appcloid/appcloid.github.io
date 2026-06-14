import React from 'react';
import { Metadata } from 'next';
import { industries } from '@/data/industries';
import { IndustryCard } from '@/components/industries/IndustryCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { GlossyButton } from '@/components/ui/GlossyButton';

export const metadata: Metadata = {
  title: 'Industries We Serve | AppCloid Technologies',
  description: 'Discover how AppCloid provides bespoke AI and software solutions for Healthcare, Finance, Retail, Manufacturing, Logistics, Real Estate, Education, Legal, and Hospitality.',
};

export default function IndustriesPage() {
  // Generate LocalBusiness JSON-LD (AppCloid serves these industries)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AppCloid Technologies',
    url: 'https://appcloid.com',
    knowsAbout: industries.map(ind => ind.sector)
  };

  return (
    <main className="min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal direction="down">
          <SectionHeader 
            title="Industries We Serve" 
            subtitle="Deep sector expertise combined with bleeding-edge AI. We engineer solutions tailored to the unique operational challenges of your industry."
            align="center"
          />
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {industries.map((industry) => (
              <IndustryCard key={industry.id} data={industry} />
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.4} direction="up" className="mt-24 text-center">
          <div className="glass glass-border rounded-2xl p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Don't see your industry?</h3>
            <p className="text-bluegrey-300 mb-8">
              Our AI engineers and software architects can tackle complex challenges in any vertical. Let's discuss your specific requirements.
            </p>
            <GlossyButton href="/contact" variant="primary">
              Let's Talk
            </GlossyButton>
          </div>
        </SectionReveal>
      </div>
    </main>
  );
}
