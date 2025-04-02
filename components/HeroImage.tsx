import React, { FC } from "react";

export const HeroImage: FC = () => {
  return (
    <div className="ml-5 w-[60%] max-md:ml-0 max-md:w-full"> {/* Increased width by 20% */}
      <img
        alt="Vultisig Crypto Vault Devices"
        src="https://cdn.builder.io/api/v1/image/assets%2Fba252d5412c242bca4d6218689ca1df4%2F6e963ef9893d4be192ef61f95b9f34d9"
        className="object-contain overflow-hidden w-full h-auto aspect-[0.95] max-w-[309px] max-sm:mx-auto max-sm:mt-10 max-sm:mb-0 max-sm:max-w-[80%]"
      />
    </div>
  );
};
