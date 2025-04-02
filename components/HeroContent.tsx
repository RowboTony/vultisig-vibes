import * as React from "react";
import { DownloadButton } from "./DownloadButton";

interface HeroContentProps {
  onDownload: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onDownload }) => {
  return (
    <div className="w-[55%] max-md:ml-0 max-md:w-full">
      <div className="max-w-[600px] max-sm:max-w-full">
        <h1 className="mb-6 text-6xl font-bold leading-none text-white max-sm:text-4xl">
          Secure Your Crypto with Vultisig
        </h1>
        <p className="mb-10 text-xl leading-relaxed text-white opacity-90 max-sm:text-lg">
          A seedless, self-custodial vault powered by battle-tested cryptography
          and programmable co-signers.
        </p>
        <DownloadButton href="https://vultisig.com/download">
          Download Now
        </DownloadButton>
        </div>
    </div>
  );
};
