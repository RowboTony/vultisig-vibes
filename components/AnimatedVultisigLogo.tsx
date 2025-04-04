"use client";
import React, { useState, useEffect } from "react";

const AnimatedVultisigLogo = ({ className = "", size = "large" }: { className?: string, size?: "normal" | "large" }) => {
  const [isTapped, setIsTapped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Start animation on mount
  useEffect(() => {
    setIsAnimating(true);

    // Optional: create a pulsing effect every few seconds
    const interval = setInterval(() => {
      setIsTapped(true);
      setTimeout(() => setIsTapped(false), 800);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTap = () => {
    setIsTapped(true);
    setTimeout(() => setIsTapped(false), 800);
  };

  // Determine size classes
  const sizeClasses = size === "large"
    ? "h-16 w-16 sm:h-20 sm:w-20"
    : "h-8 w-8 sm:h-9 sm:w-9";

  return (
    <div
      onClick={handleTap}
      className={`group inline-flex items-center cursor-pointer ${className}`}
    >
      {/* Circuit board background animation */}
      <div className="relative">
        <svg
          viewBox="0 0 24 24"
          className={`${sizeClasses} mr-3 transition-all duration-300 ${
            isTapped ? "animate-pulse scale-110" : ""
          } relative z-10`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG Paths - same as original logo */}
          <path d="M2.06417 19.7173L0.5 18.1532L0.61805 18.0745L9.0193 12.4277L11.8328 14.0608L11.6558 14.1591L2.06417 19.7173Z" fill="url(#paint0_linear)" />
          <path d="M2.72341 21.9997L2.15283 19.8649L2.23153 19.8157L11.9313 14.228V17.4842L11.8723 17.5138L2.72341 21.9997Z" fill="url(#paint1_linear)" />
          <path d="M21.2768 21.9997L21.149 21.9406L12.0591 17.4842V14.228L21.8474 19.8551L21.2768 21.9898V21.9997Z" fill="url(#paint2_linear)" />
          <path d="M21.9357 19.7173L21.857 19.6682L12.167 14.0608L14.9805 12.4277L23.4998 18.1532L21.9357 19.7173Z" fill="url(#paint3_linear)" />
          <path d="M12.0688 13.8542V2.57058L14.1938 2L14.8922 12.2409L12.0688 13.8542Z" fill="url(#paint4_linear)" />
          <path d="M11.8722 13.8542L9.04883 12.2409V12.1622L9.74729 2L11.882 2.57058V13.8542H11.8722Z" fill="url(#paint5_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="6.16641" y1="2.15736" x2="6.16641" y2="21.8226" gradientUnits="userSpaceOnUse">
              <stop stopColor="#33E6BF" />
              <stop offset="1" stopColor="#0439C7" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="7.04208" y1="2.15738" x2="7.04208" y2="21.8226" gradientUnits="userSpaceOnUse">
              <stop stopColor="#33E6BF" />
              <stop offset="1" stopColor="#0439C7" />
            </linearGradient>
            <linearGradient id="paint2_linear" x1="16.9582" y1="2.14755" x2="16.9582" y2="21.8226" gradientUnits="userSpaceOnUse">
              <stop stopColor="#33E6BF" />
              <stop offset="1" stopColor="#0439C7" />
            </linearGradient>
            <linearGradient id="paint3_linear" x1="17.8334" y1="2.15736" x2="17.8334" y2="21.8226" gradientUnits="userSpaceOnUse">
              <stop stopColor="#33E6BF" />
              <stop offset="1" stopColor="#0439C7" />
            </linearGradient>
            <linearGradient id="paint4_linear" x1="13.4756" y1="2.1574" x2="13.4756" y2="21.8226" gradientUnits="userSpaceOnUse">
              <stop stopColor="#33E6BF" />
              <stop offset="1" stopColor="#0439C7" />
            </linearGradient>
            <linearGradient id="paint5_linear" x1="10.4753" y1="2.1574" x2="10.4753" y2="21.8226" gradientUnits="userSpaceOnUse">
              <stop stopColor="#33E6BF" />
              <stop offset="1" stopColor="#0439C7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Circuit board animation overlay */}
        <svg
          viewBox="0 0 24 24"
          className={`absolute top-0 left-0 ${sizeClasses} opacity-0 ${
            isAnimating ? "animate-circuit" : ""
          }`}
          fill="none"
          stroke="url(#circuit-gradient)"
          strokeWidth="0.3"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circuit paths - simplified circuit board pattern */}
          <path d="M2 2h20v20H2z" fill="none" />
          <path d="M4 4h16v16H4z" fill="none" />
          <path d="M6 12h12M12 6v12" />
          <path d="M8 8h8v8H8z" fill="none" />
          <path d="M6 6l12 12M18 6L6 18" />
          <path d="M10 4v4M14 4v4M4 10h4M4 14h4M16 20v-4M20 10h-4M20 14h-4" />

          {/* Gradient definition for the circuit */}
          <defs>
            <linearGradient id="circuit-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#33E6BF" />
              <stop offset="1" stopColor="#0439C7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <span
        className={`text-3xl sm:text-4xl font-medium tracking-wide text-white/90 transition-colors duration-300 drop-shadow-sm align-middle ${
          isTapped ? "animate-pulse" : ""
        } group-hover:text-turquoise`}
      >
        Vultisig
      </span>
    </div>
  );
};

export default AnimatedVultisigLogo;