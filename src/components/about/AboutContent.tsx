import React from 'react';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { GlassContainer } from '@/components/ui/GlassContainer';
import { GlossyButton } from '@/components/ui/GlossyButton';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const AboutContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
      
      <SectionReveal direction="down">
        <SectionHeader 
          title="About AppCloid" 
          subtitle="Democratising elite, AI-first technology for ambitious SMBs across the UK."
          align="center"
        />
      </SectionReveal>

      <div className="space-y-16 mt-16">
        
        {/* Founding Story */}
        <SectionReveal>
          <div className="prose prose-invert max-w-none text-bluegrey-300">
            <h3 className="text-2xl font-bold text-white mb-6 font-space">The AppCloid Mission</h3>
            <p className="text-lg leading-relaxed mb-4">
              Enterprise-grade AI and scalable software engineering have traditionally been gated by exorbitant agency fees, leaving Small and Medium-sized Businesses (SMBs) at a competitive disadvantage. AppCloid Technologies was founded to dismantle that barrier.
            </p>
            <p className="text-lg leading-relaxed">
              We bring the rigorous engineering standards of top-tier tech conglomerates to the UK SMB market. From bespoke web applications to autonomous AI agents, we build solutions that eliminate operational bottlenecks, slash costs, and drive unprecedented growth.
            </p>
          </div>
        </SectionReveal>

        {/* Glasgow Roots & UK Reach */}
        <SectionReveal delay={0.2}>
          <GlassContainer className="bg-gradient-to-br from-white/5 to-cyan/5 border-cyan/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-white mb-4 font-space">Engineered in Glasgow, Impacting the UK</h3>
                <p className="text-bluegrey-300 leading-relaxed mb-4">
                  Headquartered in <strong>Newton Mearns, Glasgow (G77 5TA)</strong>, AppCloid is proudly rooted in Scotland's burgeoning tech ecosystem. 
                </p>
                <p className="text-bluegrey-300 leading-relaxed">
                  While our engineering hub is in Glasgow, our digital footprint spans the entire United Kingdom. We partner with clinics in London, logistics firms in Manchester, and retailers in Edinburgh—delivering transformative digital infrastructure wherever you operate.
                </p>
              </div>
              <div className="md:w-1/3 flex flex-col items-center justify-center p-6 bg-midnight/50 rounded-xl border border-white/5">
                <span className="text-4xl mb-4">🇬🇧</span>
                <span className="text-cyan font-bold uppercase tracking-widest text-sm text-center">Serving the entire UK</span>
                <a href="mailto:contact@appcloid.com" className="text-bluegrey-300 hover:text-white mt-4 text-sm underline decoration-bluegrey-500 underline-offset-4">contact@appcloid.com</a>
              </div>
            </div>
          </GlassContainer>
        </SectionReveal>

        {/* Technical Ethos */}
        <SectionReveal delay={0.2}>
          <div className="prose prose-invert max-w-none text-bluegrey-300">
            <h3 className="text-2xl font-bold text-white mb-6 font-space">Our Engineering Ethos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-cyan font-bold mb-2">Zero Bug Tolerance</h4>
                <p className="leading-relaxed text-sm">We utilise strict TypeScript, robust CI/CD pipelines, and comprehensive automated testing. If it isn't bulletproof, we don't deploy it.</p>
              </div>
              <div>
                <h4 className="text-purple font-bold mb-2">Visually Mesmerising</h4>
                <p className="leading-relaxed text-sm">Functionality is the baseline; aesthetic excellence is our standard. We craft deeply engaging, immersive user experiences that reflect the quality of your brand.</p>
              </div>
              <div>
                <h4 className="text-cyan font-bold mb-2">Performance Obsessed</h4>
                <p className="leading-relaxed text-sm">Sub-second load times, 60fps animations, and perfect Core Web Vitals. We optimize every kilobyte because speed equals conversion.</p>
              </div>
              <div>
                <h4 className="text-purple font-bold mb-2">AI-First Architecture</h4>
                <p className="leading-relaxed text-sm">We don't just bolt on AI. We architect systems from the ground up to leverage machine learning, NLP, and generative models natively.</p>
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.4} className="text-center pt-12 border-t border-white/10">
          <GlossyButton href="/contact" variant="primary" className="px-12 py-4 text-lg">
            Partner With Us
          </GlossyButton>
        </SectionReveal>

      </div>
    </div>
  );
};
