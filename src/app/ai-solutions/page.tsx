import React from 'react';
import { Metadata } from 'next';
import { aiServices } from '@/data/ai-services';
import { AICapabilityCard } from '@/components/ai-solutions/AICapabilityCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { GlossyButton } from '@/components/ui/GlossyButton';

export const metadata: Metadata = {
  title: 'AI Solutions & Capabilities | AppCloid Technologies',
  description: 'Explore AppCloid\'s bespoke AI solutions: Autonomous Agents, Computer Vision, NLP, Predictive Analytics, and Intelligent Automation for UK businesses.',
};

export default function AISolutionsPage() {
  // Generate Service JSON-LD for AI capabilities
  const jsonLd = aiServices.map(service => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.summary,
    provider: {
      '@type': 'Organization',
      name: 'AppCloid Technologies'
    }
  }));

  return (
    <main className="min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal direction="down">
          <SectionHeader 
            title="Our AI Capabilities" 
            subtitle="Deep tech engineered for immediate business impact. Explore our core artificial intelligence disciplines below."
            align="center"
          />
        </SectionReveal>

        <div className="space-y-6 mt-16">
          {aiServices.map((service, index) => (
            <SectionReveal key={service.id} delay={index * 0.15} direction="up">
              <AICapabilityCard data={service} />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.4} direction="up" className="mt-20 text-center">
          <GlossyButton href="/contact" variant="primary" className="px-12 py-4 text-lg">
            Start Your Transformation
          </GlossyButton>
        </SectionReveal>
      </div>
    </main>
  );
}
