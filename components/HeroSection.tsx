"use client";

import * as React from "react";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export const HeroSection: React.FC = () => {
  const handleDownload = React.useCallback(() => {
    console.log("Download initiated");
  }, []);

  return (
    <section className="flex items-center px-6 py-16 min-h-[90vh] max-sm:px-4 max-sm:py-12 max-sm:text-center bg-gradient-to-b from-[#061B3A] to-[#02122B]">
      <div className="items-center mx-auto my-0 max-w-[1200px]">
        <div className="flex gap-5 max-md:flex-col">
          <HeroContent onDownload={handleDownload} />
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
