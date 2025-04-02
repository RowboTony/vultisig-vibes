"use client";

import * as React from "react";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export const HeroSection: React.FunctionComponent = () => {
  const handleDownload = () => {
    console.log("Download triggered!");
  };

  return (
    <section className="flex items-center justify-center px-6 py-16 min-h-[90vh] max-sm:px-4 max-sm:py-12 bg-gradient-to-b from-[#061B3A] to-[#02122B]">
      <div className="flex flex-col items-center mx-auto my-0 max-w-[1200px]">
        <div className="flex gap-10 max-md:flex-col items-center justify-between w-full max-md:gap-6">
          <HeroContent onDownload={handleDownload} />
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
