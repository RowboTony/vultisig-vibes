import React from 'react';

interface GradientDividerProps {
  className?: string;
}

const GradientDivider: React.FC<GradientDividerProps> = ({ className = '' }) => {
  return (
    <div className={`w-full py-12 ${className}`}>
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Main gradient line */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyanAccent/70 to-transparent"></div>

        {/* Glow effect */}
        <div className="absolute top-0 left-0 right-0 h-px blur-sm bg-gradient-to-r from-transparent via-cyanAccent/50 to-transparent"></div>
        <div className="absolute -top-1 left-0 right-0 h-[2px] blur-md bg-gradient-to-r from-transparent via-blueAccent/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default GradientDivider;
