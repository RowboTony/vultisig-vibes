import React from "react";
import { Check } from 'lucide-react';

export default function RespawnRestore() {
  return (
    <section id="respawn" className="px-4 py-0 relative overflow-hidden">
      {/* Enhanced background gradient effect - more subtle */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,224,255,0.03)_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="vultisig-container max-w-4xl mx-auto relative z-10">
        <h2 className="mb-8 font-extrabold tracking-tight leading-[0.95] uppercase text-4xl md:text-5xl lg:text-6xl text-center">
          <span className="text-transparent bg-clip-text bg-text-gradient">Respawn & Restore</span>
        </h2>

        {/* Glass card container - more transparent */}
        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 backdrop-blur-sm">
          <div className="bg-[#0a122a]/40 backdrop-blur-sm p-8 rounded-2xl">
            <div className="space-y-6">
              <p className="vultisig-paragraph">
                Device lost, stolen, damaged? As long as you hold the signing threshold, you're back online in minutes.
              </p>

              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-cyanAccent mr-3 mt-0.5">
                    <Check className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <p className="vultisig-paragraph">Restore any .vult share to any device or platform</p>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-cyanAccent mr-3 mt-0.5">
                    <Check className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <p className="vultisig-paragraph">Reshare your vault to remove compromised devices</p>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-cyanAccent mr-3 mt-0.5">
                    <Check className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <p className="vultisig-paragraph">Upgrade security on the fly—move from 2-of-2 to 3-of-5 with no new wallet</p>
                </li>
              </ul>

              <div className="pt-4">
                <p className="vultisig-paragraph font-medium">Your funds stay in place. Your vault stays sovereign.</p>
                <p className="vultisig-paragraph mt-4 text-xl font-semibold">
                  Vultisig isn't just recoverable. It's <span className="text-transparent bg-clip-text bg-text-gradient-alt">respawnable</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
