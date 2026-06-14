import React from 'react';
import { Metadata } from 'next';
import { traditionalServices } from '@/data/services';
import { ServiceBlock } from '@/components/services/ServiceBlock';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { GlossyButton } from '@/components/ui/GlossyButton';

export const metadata: Metadata = {
  title: 'Bespoke Software Services | AppCloid Technologies',
  description: 'AppCloid offers enterprise-grade web development, mobile app engineering, cloud infrastructure, data engineering, and cybersecurity services across the UK.',
};

export default function ServicesPage() {
  // Generate Service JSON-LD for traditional services
  const jsonLd = traditionalServices.map(service => ({
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
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal direction="down">
          <SectionHeader 
            title="Our Core Services" 
            subtitle="Robust, scalable, and secure engineering. From complex web portals to secure data pipelines, we build software that lasts."
            align="center"
          />
        </SectionReveal>

        <div className="mt-20">
          {traditionalServices.map((service, index) => (
            <ServiceBlock key={service.id} data={service} index={index} />
          ))}
        </div>

        <SectionReveal delay={0.2} direction="up" className="mt-24 text-center">
          <GlossyButton href="/contact" variant="primary" className="px-12 py-4 text-lg">
            Let's Build Something Extraordinary
          </GlossyButton>
        </SectionReveal>
      </div>
    </main>
  );
}
