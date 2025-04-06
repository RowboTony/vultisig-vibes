'use client';
import React from 'react';
import Image from 'next/image';

export default function SecureExistingWallet() {
  const displayWords = [
    "vultisig", "protects", "your", "assets",
    "trust", "yourself", "hold", "your",
    "keys", "acel", "anon", "..."
  ];

  return (
    <section id="secure-wallet" className="pt-7 relative overflow-hidden">
      {/* Soft radial backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,224,255,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          {/* Top: Section Title */}
          <div className="w-full max-w-3xl mx-auto mb-8">
            <div className="hidden min-[426px]:flex flex-row items-center justify-between gap-8">
              {/* Left: Text */}
              <div className="w-1/2">
                <h2 className="mb-6 font-extrabold tracking-tight leading-[0.95] uppercase text-4xl md:text-5xl lg:text-6xl">
                  <div className="flex flex-col md:block">
                    <div className="mb-[-0.075em]">
                      <span className="text-transparent bg-clip-text bg-text-gradient">Secure</span>
                    </div>
                    <div>
                      <span className="text-transparent bg-clip-text bg-text-gradient">Wallet</span>
                    </div>
                  </div>
                </h2>
                <p className="vultisig-subheading mb-2">
                  Vultisig replaces fragile seed phrases with modern cryptography—Threshold Signature Schemes (TSS) powered by Distributed Key Generation (DKG). No single device ever holds your full key.
                </p>
              </div>

              {/* Right: Image */}
              <div className="w-1/2 flex justify-end">
                <Image
                  src="/images/security.png"
                  alt="Vultisig Secure Architecture"
                  width={500}
                  height={500}
                  className="w-auto max-h-[380px] object-contain"
                />
              </div>
            </div>

            {/* Mobile: Stacked Layout */}
            <div className="min-[426px]:hidden text-center">
              <h2 className="mb-6 font-extrabold tracking-tight leading-[0.95] uppercase text-4xl">
                <span className="text-transparent bg-clip-text bg-text-gradient">Secure Wallet</span>
              </h2>
              <p className="vultisig-subheading mb-2">
                Vultisig replaces fragile seed phrases with modern cryptography—Threshold Signature Schemes (TSS) powered by Distributed Key Generation (DKG).
              </p>
            </div>
          </div>

          {/* Callout: Seed Phrase Upgrade */}
          <div className="backdrop-blur-md rounded-xl p-6 max-w-xl mx-auto">
            <h3 className="font-mono text-xl md:text-2xl text-cyanAccent text-center mb-4">
              Already have a wallet? No problem.
            </h3>
            <p className="text-white/90 text-lg text-center mb-8">
              Secure your existing wallet by importing its seed phrase into a Vultisig vault—no address change, no need to move funds.
            </p>

            {/* Glass Card */}
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 shadow-md max-w-xl mx-auto">
              <p className="text-lg md:text-xl text-white/90 text-center mb-6">
                Import your legacy seed phrase and convert it into a secure multi-device vault.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {displayWords.map((word, index) => (
                  <div
                    key={index}
                    className={`rounded-md border px-4 py-2 text-sm font-mono text-left relative ${index === 11
                        ? "border-cyan-400/50 bg-cyan-400/5 shadow-[0_0_15px_rgba(0,224,255,0.15)] text-cyan-300"
                        : "border-white/20 bg-white/5 text-white/70"
                      }`}
                  >
                    <span className={`absolute top-2 left-2 ${index === 11 ? "text-cyan-400/70" : "text-white/40"}`}>
                      {index + 1}
                    </span>
                    <span className="ml-4">
                      {index === 9 ? (
                        <a
                          href="https://www.acel.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/70 hover:text-cyan-300 transition-colors duration-200"
                        >
                          {word}
                        </a>
                      ) : (
                        word
                      )}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-base text-white/60 text-center mt-6">
                Same wallet, new security layer. No need to move funds.
              </p>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-white text-lg md:text-xl font-semibold tracking-tight">
              This isn't a new wallet. It's your wallet—<span className="text-cyanAccent">upgraded</span>.
            </p>
          </div>
          {/* CTA button */}
          <div id="download" className="text-center mt-10 mb-4">
            <a
              href="https://vultisig.com/download"
              className="inline-block border border-turquoise text-turquoise rounded-md px-5 py-3 hover:bg-turquoise hover:text-black transition-colors duration-300 text-[22px] font-mono"
            >
              Upgrade Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
