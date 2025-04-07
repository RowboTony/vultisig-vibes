'use client';
import * as React from "react";
import Image from "next/image";
import { ShieldCheck, KeyRound, LockKeyhole } from 'lucide-react';
import GradientHeadline from "../GradientHeadline";

const Hero: React.FC = () => {
  return (
    <section id="vault" className="pt-7 pb-6 relative overflow-hidden">
      {/* Enhanced background gradient effect - more subtle */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,224,255,0.03)_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main content container with consistent max-width */}
        <div className="flex flex-col items-center">
          {/* Top section - using the same max-width as cards for consistency */}
          <div className="w-full max-w-3xl mx-auto mb-8">
            {/* Desktop layout (two columns) */}
            <div className="hidden min-[426px]:flex flex-row items-center justify-between gap-8">
              {/* Left column: Text content */}
              <div className="w-1/2">
                <h2 className="mb-6 font-extrabold tracking-tight leading-[0.95] uppercase text-4xl md:text-5xl lg:text-6xl">
                  <div className="flex flex-col md:block">
                    <div className="mb-[-0.075em]">
                      <span className="gradient-text-light">Seedless.</span>
                    </div>
                    <div className="mb-[-0.075em]">
                      <span className="text-transparent bg-clip-text bg-text-gradient">Sovereign.</span>
                    </div>
                    <div>
                      <span className="gradient-text-light">Secure.</span>
                    </div>
                  </div>
                </h2>
                <p className="vultisig-subheading mb-2">
                  The next generation of self-custody that eliminates seed phrases while enhancing security and control.
                </p>
              </div>

              {/* Right column: Image */}
              <div className="w-1/2 flex justify-end">
                <Image
                  src="/images/devices.png"
                  alt="Vultisig App Screenshot"
                  width={500}
                  height={500}
                  className="w-auto max-h-[380px] object-contain"
                  priority
                />
              </div>
            </div>

            {/* Mobile layout (stacked) */}
            <div className="min-[426px]:hidden text-center">
              <h2 className="mb-6 font-extrabold tracking-tight leading-[0.95] uppercase text-4xl">
                <div className="flex flex-col">
                  <div className="mb-[-0.075em]">
                    <span className="gradient-text-light">Seedless</span>
                  </div>
                  <div className="mb-[-0.075em]">
                    <span className="text-transparent bg-clip-text bg-text-gradient">Sovereign</span>
                  </div>
                  <div>
                    <span className="gradient-text-light">Secure</span>
                  </div>
                </div>
              </h2>

              <p className="vultisig-subheading mb-2 mx-auto">
                The next generation of self-custody that eliminates seed phrases while enhancing security and control.
              </p>
            </div>
          </div>

          {/* Feature cards section - already properly centered */}
          <div className="w-full max-w-3xl mx-auto space-y-6 mb-12">
            <div className="p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 group" data-bullet="seedless">
              <div className="bg-[#0a122a]/40 backdrop-blur-sm p-5 rounded-2xl transition-all duration-200 ease-in-out group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-cyan-500/20">
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

            <div className="p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 group" data-bullet="sovereign">
              <div className="bg-[#0a122a]/40 backdrop-blur-sm p-5 rounded-2xl transition-all duration-200 ease-in-out group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 flex justify-center items-center w-12 h-10">
                    <LockKeyhole className="text-cyanAccent w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyanAccent mt-1 mb-1 font-bold tracking-normal font-mono">Sovereign Control</h3>
                    <p className="vultisig-paragraph">
                      You hold the keys. No third-party risk or dependencies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 group" data-bullet="secure">
              <div className="bg-[#0a122a]/40 backdrop-blur-sm p-5 rounded-2xl transition-all duration-200 ease-in-out group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 flex justify-center items-center w-12 h-10">
                    <ShieldCheck className="text-cyanAccent w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyanAccent mt-1 mb-1 font-bold tracking-normal font-mono">Secure by Design</h3>
                    <p className="vultisig-paragraph">
                      Distributed security model with no single point of failure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile image (only visible on mobile) */}
          <div className="block min-[426px]:hidden w-full mb-12">
            <Image
              src="/images/security.png"
              alt="Vultisig App Screenshot"
              width={500}
              height={500}
              className="mx-auto w-auto max-h-[380px] object-contain"
            />
          </div>

          {/* Final callout text */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-white text-lg md:text-xl font-semibold mb-2 animate-fadeIn tracking-tight">
              Your devices are your multi-factor.
            </p>
            <p className="text-white text-lg md:text-xl font-semibold animate-fadeIn tracking-tight">
              You are the authority.
            </p>
          </div>

          {/* CTA button */}
          <div className="text-center">
            <a
              href="#download"
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
