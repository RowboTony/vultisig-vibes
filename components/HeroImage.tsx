"use client";

import React, { FC } from "react";

export const HeroImage: FC = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <img
        alt="Vultisig Crypto Vault Devices"
        src="https://cdn.builder.io/api/v1/image/assets%2Fba252d5412c242bca4d6218689ca1df4%2F6e963ef9893d4be192ef61f95b9f34d9"
        className="w-full max-w-[500px] md:max-w-[400px] lg:max-w-[450px] h-auto object-contain"
      />
    </div>
  );
};