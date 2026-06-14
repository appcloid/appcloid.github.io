import React from 'react';
import { ServiceCard as ServiceCardType } from '@/types';
import { GlassContainer } from '@/components/ui/GlassContainer';
import { GlossyButton } from '@/components/ui/GlossyButton';
import { SectionReveal } from '@/components/ui/SectionReveal';

interface ServiceBlockProps {
  data: ServiceCardType;
  index: number;
}

export const ServiceBlock = ({ data, index }: ServiceBlockProps) => {
  const isEven = index % 2 === 0;

  return (
    <SectionReveal direction={isEven ? 'left' : 'right'}>
      <GlassContainer className="mb-12" padding="p-8 sm:p-12">
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
          
          <div className="flex-shrink-0">
            <div className="p-8 rounded-2xl bg-white/5 text-cyan shadow-cyan-glow">
              {React.cloneElement(data.icon as React.ReactElement, { className: 'w-24 h-24' })}
            </div>
          </div>

          <div className="flex-grow space-y-6">
            <h3 className="text-3xl font-bold font-space text-white">{data.title}</h3>
            <p className="text-xl text-cyan">{data.summary}</p>
            <p className="text-bluegrey-300 leading-relaxed text-lg">
              {data.detail}
            </p>
            <div className="pt-4">
              <GlossyButton href="/contact" variant="ghost" className="px-0">
                Discuss This Service <span aria-hidden="true" className="ml-2">→</span>
              </GlossyButton>
            </div>
          </div>

        </div>
      </GlassContainer>
    </SectionReveal>
  );
};
