import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader = ({ title, subtitle, align = 'center' }: SectionHeaderProps) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col mb-12 ${alignClass}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-cyan-purple pb-2">
        {title}
      </h2>
      <div className="h-1 w-24 bg-gradient-cyan-purple rounded-full mb-6"></div>
      {subtitle && (
        <p className="text-bluegrey-300 text-lg md:text-xl max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
