import React from 'react';

interface GradientHeadlineProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  useLightGradient?: boolean;
}

export default function GradientHeadline({
  children,
  className = '',
  size = 'lg',
  useLightGradient
}: GradientHeadlineProps) {
  const sizeClasses = {
    sm: 'text-xl md:text-2xl lg:text-3xl',
    md: 'text-2xl md:text-3xl lg:text-4xl',
    lg: 'text-3xl md:text-4xl lg:text-5xl',
    xl: 'text-4xl md:text-5xl lg:text-6xl'
  };

  // If useLightGradient is not explicitly set, randomly determine whether to use light gradient
  // This creates a random pattern of gradient styles throughout the site
  const useLight = useLightGradient !== undefined ? useLightGradient : Math.random() > 0.5;
  const gradientClass = useLight ? "gradient-text-light" : "gradient-text";

  return (
    <h2 className={`font-extrabold tracking-tight leading-[0.95] uppercase ${sizeClasses[size]} ${className}`}>
      <span className={gradientClass}>{children}</span>
    </h2>
  );
}
