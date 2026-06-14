import React from 'react';

interface GlassContainerProps {
  as?: React.ElementType;
  padding?: string;
  className?: string;
  children: React.ReactNode;
}

export const GlassContainer = ({
  as: Component = 'div',
  padding = 'p-6 sm:p-8',
  className = '',
  children
}: GlassContainerProps) => {
  return (
    <Component className={`glass glass-border rounded-2xl ${padding} ${className}`}>
      {children}
    </Component>
  );
};
