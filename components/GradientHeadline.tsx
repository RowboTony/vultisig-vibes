import React from 'react';

interface GradientHeadlineProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function GradientHeadline({
  children,
  className = '',
  size = 'lg'
}: GradientHeadlineProps) {
  const sizeClasses = {
    sm: 'text-xl md:text-2xl lg:text-3xl',
    md: 'text-2xl md:text-3xl lg:text-4xl',
    lg: 'text-3xl md:text-4xl lg:text-5xl',
    xl: 'text-4xl md:text-5xl lg:text-6xl'
  };

  return (
    <h2 className={`font-bold tracking-tight leading-tight uppercase ${sizeClasses[size]} ${className}`}>
      <span className="gradient-text">{children}</span>
    </h2>
  );
}
