"use client";

import * as React from "react";
import { DownloadButton } from "./DownloadButton";

interface HeroContentProps {
  onDownload: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onDownload }) => {
  return (
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
  );
};