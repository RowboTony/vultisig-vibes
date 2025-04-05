import React from "react";

export default function SecureExistingWallet() {
  // Static list of BIP-39 words from across the alphabet
  const displayWords = [
     "vultisig", "protects ", "your", "assets", "trust",
      "yourself", "hold", "your", "keys ", "acel ", "anon"
  ];

  return (
    <section id="secure-existing-wallet" className="px-4 py-3 relative overflow-hidden">
      {/* Background gradient effect - subtle */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,224,255,0.03)_0%,_transparent_70%)] pointer-events-none"></div>

      <h2 className="mb-8 font-extrabold tracking-tight leading-[0.95] uppercase text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
        <span className="text-transparent bg-clip-text bg-text-gradient">
          Secure Your<br className="block lg:hidden" /> Existing Wallet
        </span>
      </h2>

      <div className="vultisig-container mx-auto relative z-10">
        {/* Glass card container */}
        <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 shadow-md max-w-xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-white/90 text-center">
              Import your legacy seed phrase and convert it into a secure multi-device vault.
            </p>

            {/* Seed Phrase Mock Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-8">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className={`rounded-md border px-4 py-2 text-sm font-mono text-left relative ${
                    index === 11
                      ? "border-cyan-400/50 bg-cyan-400/5 shadow-[0_0_15px_rgba(0,224,255,0.15)] text-cyan-300"
                      : "border-white/20 bg-white/5 text-white/70"
                  }`}
                >
                  <span className={`absolute top-2 left-2 ${index === 11 ? "text-cyan-400/70" : "text-white/40"}`}>
                    {index + 1}
                  </span>
                  <span className="ml-4">
                    {index < 11 ? displayWords[index] : "..."}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm text-white/60 text-center mt-6">
              Same wallet, new security layer. No need to move funds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}