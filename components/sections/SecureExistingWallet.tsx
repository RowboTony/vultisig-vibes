import React from "react";

export default function SecureExistingWallet() {
  return (
    <section id="secure-existing-wallet" className="px-4 py-2 relative overflow-hidden">
      {/* Background gradient effect - subtle */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,224,255,0.03)_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="vultisig-container max-w-4xl mx-auto relative z-10">
        <h2 className="mb-8 font-extrabold tracking-tight leading-[0.95] uppercase text-4xl md:text-5xl lg:text-6xl text-center">
          <span className="text-transparent bg-clip-text bg-text-gradient font-mono text-cyanAccent">Secure Your Existing Wallet</span>
        </h2>

        {/* Glass card container */}
        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 backdrop-blur-sm">
          <div className="bg-[#0a122a]/40 backdrop-blur-sm p-8 rounded-2xl">
            <div className="space-y-6">
              <p className="vultisig-paragraph text-center text-lg">
                Import your legacy seed phrase and convert it into a secure multi-device vault.
              </p>

              <p className="vultisig-paragraph text-center text-sm text-gray-400 mt-6">
                Same wallet, new security layer. No need to move funds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}