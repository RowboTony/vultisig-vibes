'use client';
import * as React from "react";
import Image from "next/image";
import { ShieldCheck, KeyRound, LockKeyhole } from 'lucide-react';
import GradientHeadline from "../GradientHeadline";

const Hero: React.FC = () => {
  return (
    <section className="pt-7 pb-2 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-blueAccent/10 to-transparent opacity-40 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-10">
        {/* Content wrapper with proper centering */}
        <div className="max-w-[1000px] mx-auto">
          {/* Headline */}
          {/* Headline */}
          <div className="text-center md:text-left">
            <h2 className="mb-6 max-w-4xl mx-auto md:mx-0 font-extrabold tracking-tight leading-[0.95] uppercase text-4xl md:text-5xl lg:text-6xl">
              <div className="flex flex-col md:block">
                <div className="mb-[-0.075em]">
                  <span className="hidden min-[460px]:inline text-transparent bg-clip-text bg-text-gradient">Seedless.</span>
                  <span className="min-[460px]:hidden text-transparent bg-clip-text bg-text-gradient">Seedless</span>
                </div>
                <div className="mb-[-0.075em]">
                  <span className="hidden min-[460px]:inline text-transparent bg-clip-text bg-text-gradient">Sovereign.</span>
                  <span className="min-[460px]:hidden text-transparent bg-clip-text bg-text-gradient">Sovereign</span>
                </div>
                <div>
                  <span className="hidden min-[460px]:inline text-transparent bg-clip-text bg-text-gradient">Secure.</span>
                  <span className="min-[460px]:hidden text-transparent bg-clip-text bg-text-gradient">Secure</span>
                </div>
              </div>
            </h2>

            <p className="vultisig-subheading max-w-2xl mx-auto md:mx-0 mb-8">
              The next generation of self-custody that eliminates seed phrases while enhancing security and control.
            </p>
          </div>

          {/* Bullet List */}
          <div className="space-y-6 max-w-3xl mx-auto md:mx-0 mt-8">
            <div className="flex items-start gap-2" data-bullet="seedless">
              <div className="flex-shrink-0 flex justify-center items-center w-12 h-10 ">
                <KeyRound className="text-cyanAccent w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyanAccent mt-1 mb-1 font-bold tracking-normal font-mono">Seedless Security</h3>
                <p className="vultisig-paragraph">
                  No seed phrase, eliminating risk and complexity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2" data-bullet="sovereign">
              <div className="flex-shrink-0 flex justify-center items-center w-12 h-10 ">
                <ShieldCheck className="text-cyanAccent w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyanAccent mt-1 mb-1 font-bold tracking-normal font-mono">True Sovereignty</h3>
                <p className="vultisig-paragraph">
                  You retain full control—truly decentralized custody.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2" data-bullet="secure">
              <div className="flex-shrink-0 flex justify-center items-center w-12 h-10 ">
                <LockKeyhole className="text-cyanAccent w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyanAccent mt-1 mb-1 font-bold tracking-normal font-mono">MPC-Grade Security</h3>
                <p className="vultisig-paragraph">
                  Industry-standard cryptography powered by multi-party computation and TSS.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-10 relative">
            <div className="absolute inset-0"></div>
            <Image
              src="/images/security.png"
              alt="Vultisig App Screenshot"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://vultisig.com/download"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blueAccent to-cyanAccent text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]"
            >
              Download Vultisig
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
