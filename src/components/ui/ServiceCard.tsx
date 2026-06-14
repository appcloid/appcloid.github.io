'use client';

import React from 'react';
import { ServiceCard as ServiceCardType } from '@/types';

interface ServiceCardProps {
  data: ServiceCardType;
}

export const ServiceCard = ({ data }: ServiceCardProps) => {
  const isAI = data.category === 'ai';
  const glowClass = isAI ? 'group-hover:shadow-purple-glow border-purple/20' : 'group-hover:shadow-cyan-glow border-cyan/20';
  const iconColorClass = isAI ? 'text-purple' : 'text-cyan';

  return (
    <div className={`group glass border ${glowClass} rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col`}>
      <div className={`mb-6 p-4 rounded-xl bg-white/5 inline-block w-fit ${iconColorClass}`}>
        {data.icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{data.title}</h3>
      <p className="text-bluegrey-300 mb-6 flex-grow">{data.summary}</p>
      <div className="pt-6 border-t border-white/10 mt-auto">
        <p className="text-sm text-bluegrey-500 leading-relaxed">{data.detail}</p>
      </div>
    </div>
  );
};
