"use client";

import * as React from "react";
import { DownloadButton } from "../DownloadButton";

const Hero: React.FC = () => {
  const handleDownload = () => {
    console.log("Download triggered!");
  };

  return (
    <section className="w-full min-h-[90vh] bg-gradient-to-b from-[#061B3A] to-[#02122B]">
      <div className="container mx-auto px-4 sm:px-6 py-16 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Hero Content */}
          <div className="flex-1 max-w-xl md:max-w-2xl">
            <div className="text-left md:pr-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Secure Your Crypto with Vultisig
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed text-white opacity-90 mb-8">
                A seedless, self-custodial vault powered by battle-tested cryptography
                and programmable co-signers.
              </p>
              <div className="flex md:justify-start justify-center">
                <DownloadButton href="https://vultisig.com/download">
                  Download Now
                </DownloadButton>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              alt="Vultisig Crypto Vault Devices"
              src="/images/security.png"
              className="w-full max-w-[400px] md:max-w-[309px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
