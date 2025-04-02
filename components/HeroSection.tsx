"use client";

import * as React from "react";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export const HeroSection: React.FunctionComponent = () => {
  const handleDownload = () => {
    console.log("Download triggered!");
  };

  return (
    <section className="w-full min-h-[90vh] bg-gradient-to-b from-[#061B3A] to-[#02122B]">
      <div className="container mx-auto px-4 sm:px-6 py-16 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <HeroContent onDownload={handleDownload} />
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;