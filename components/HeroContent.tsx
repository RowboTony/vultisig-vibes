import * as React from "react";
import { DownloadButton } from "./DownloadButton";

interface HeroContentProps {
  onDownload: () => void; // Example type
}

export const HeroContent: React.FC<HeroContentProps> = ({ onDownload }) => {
  return (
    <div className="w-[55%] max-md:w-full flex flex-col items-start max-md:items-center"> {/* Adjusted alignment */}
      <div className="max-w-[600px] max-sm:max-w-full text-left max-md:text-center"> {/* Responsive text alignment */}
        <h1 className="mb-6 text-6xl font-bold leading-tight text-white max-sm:text-4xl max-xs:text-3xl max-sm:leading-snug">
          Secure Your Crypto with Vultisig
        </h1>
        <p className="mb-10 text-xl leading-relaxed text-white opacity-90 max-sm:text-lg">
          A seedless, self-custodial vault powered by battle-tested cryptography
          and programmable co-signers.
        </p>
        <div className="flex justify-center">
          <DownloadButton href="https://vultisig.com/download">
            Download Now
          </DownloadButton>
        </div>
      </div>
    </div>
  );
};
