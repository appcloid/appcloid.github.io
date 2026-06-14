import React from 'react';
import { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { GlassContainer } from '@/components/ui/GlassContainer';

export const metadata: Metadata = {
  title: 'Contact Us | AppCloid Technologies',
  description: 'Get in touch with AppCloid Technologies. We provide bespoke AI, software development, and digital transformation services across the UK.',
};

export default function ContactPage() {
  // Generate ContactPage JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact AppCloid Technologies',
    url: 'https://appcloid.com/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'AppCloid Technologies',
      email: 'contact@appcloid.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'UK'
      }
    }
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
            title="Let's Talk" 
            subtitle="Ready to transform your operations? Leave us a message below and one of our senior engineers will be in touch to discuss your requirements."
            align="center"
          />
        </SectionReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <SectionReveal className="lg:col-span-2">
            <ContactForm />
          </SectionReveal>

          <SectionReveal direction="left" delay={0.2} className="lg:col-span-1">
            <GlassContainer className="h-full flex flex-col justify-center border-purple/20 bg-gradient-to-br from-white/5 to-purple/5">
              <h3 className="text-xl font-bold text-white mb-8 font-space">Direct Contact</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-purple mb-2">Email</h4>
                  <a href="mailto:contact@appcloid.com" className="text-lg text-bluegrey-300 hover:text-white transition-colors underline decoration-white/20 underline-offset-4">
                    contact@appcloid.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-purple mb-2">Headquarters</h4>
                  <address className="not-italic text-bluegrey-300 leading-relaxed text-lg">
                    AppCloid Technologies<br />
                    Serving the United Kingdom<br />
                  </address>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-sm text-bluegrey-500">
                    We aim to respond to all technical and commercial enquiries within 24 hours during standard UK business hours.
                  </p>
                </div>
              </div>
            </GlassContainer>
          </SectionReveal>

        </div>
      </div>
    </main>
  );
}
