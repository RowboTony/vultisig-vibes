'use client';
import * as React from "react";
import Image from "next/image";
import { ShieldCheck, KeyRound, LockKeyhole } from 'lucide-react';
import GradientHeadline from "../GradientHeadline";

const Hero: React.FC = () => {
  return (
    <section className="pt-7 pb-16 relative overflow-hidden">
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,224,255,0.08)_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-10 relative z-10">
        {/* Content wrapper with proper centering */}
        <div className="max-w-[1000px] mx-auto">
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

          {/* Enhanced Bullet List with glass-style cards */}
          <div className="space-y-6 max-w-3xl mx-auto md:mx-0 mt-8">
            <div className="p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 group" data-bullet="seedless">
              <div className="bg-[#0a122a]/80 backdrop-blur-sm p-5 rounded-2xl transition-all duration-200 ease-in-out group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 flex justify-center items-center w-12 h-10">
                    <KeyRound className="text-cyanAccent w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyanAccent mt-1 mb-1 font-bold tracking-normal font-mono">Seedless Security</h3>
                    <p className="vultisig-paragraph">
                      No seed phrase, eliminating risk and complexity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 group" data-bullet="sovereign">
              <div className="bg-[#0a122a]/80 backdrop-blur-sm p-5 rounded-2xl transition-all duration-200 ease-in-out group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 flex justify-center items-center w-12 h-10">
                    <ShieldCheck className="text-cyanAccent w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyanAccent mt-1 mb-1 font-bold tracking-normal font-mono">True Sovereignty</h3>
                    <p className="vultisig-paragraph">
                      You retain full control—truly decentralized.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 group" data-bullet="secure">
              <div className="bg-[#0a122a]/80 backdrop-blur-sm p-5 rounded-2xl transition-all duration-200 ease-in-out group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 flex justify-center items-center w-12 h-10">
                    <LockKeyhole className="text-cyanAccent w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyanAccent mt-1 mb-1 font-bold tracking-normal font-mono">MPC-Grade Security</h3>
                    <p className="vultisig-paragraph">
                      Industry-standard cryptography powered by secure multi-party computation and TSS.
                    </p>
                  </div>
                </div>
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
              className="inline-block border border-turquoise text-turquoise rounded-md px-5 py-3 hover:bg-turquoise hover:text-black transition-colors duration-300 text-[22px] font-mono"
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
