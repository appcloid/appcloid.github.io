'use client';

import React from 'react';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { GlassContainer } from '@/components/ui/GlassContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlossyButton } from '@/components/ui/GlossyButton';
import { IconAIAgents, IconWebDev, IconData } from '@/components/icons';

export const ValueProposition = () => {
  const features = [
    {
      title: 'Autonomous AI Agents',
      description: 'Deploy intelligent workflows that operate 24/7, qualify leads, and automate customer support instantly.',
      icon: <IconAIAgents />
    },
    {
      title: 'Bespoke Web Engineering',
      description: 'Lightning-fast, visually mesmerising platforms built on Next.js. We never use generic templates.',
      icon: <IconWebDev />
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end modernisation of your legacy systems, powered by robust cloud architecture and secure data pipelines.',
      icon: <IconData />
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionReveal>
          <SectionHeader 
            title="Beyond Ordinary IT" 
            subtitle="We engineer solutions that give your business an unfair advantage."
          />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <SectionReveal key={feature.title} delay={index * 0.2} direction="up">
              <GlassContainer className="h-full flex flex-col group hover:border-cyan/30 transition-colors">
                <div className="p-4 rounded-xl bg-white/5 inline-block w-fit text-cyan mb-6 group-hover:shadow-cyan-glow transition-shadow">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-bluegrey-300 leading-relaxed mb-8 flex-grow">
                  {feature.description}
                </p>
              </GlassContainer>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.6} direction="up" className="mt-16 text-center">
          <GlossyButton href="/services" variant="ghost">
            Discover all our services
          </GlossyButton>
        </SectionReveal>

      </div>
    </section>
  );
};
