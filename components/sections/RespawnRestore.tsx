import React from "react";

export default function RespawnRestore() {
  return (
    <section id="respawn-restore" className="px-4 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-blueAccent/5 to-transparent opacity-30 pointer-events-none"></div>

      <div className="vultisig-container max-w-4xl mx-auto">
        <h2 className="mb-8 font-extrabold tracking-tight leading-[0.95] uppercase text-4xl md:text-5xl lg:text-6xl text-center">
          <span className="text-transparent bg-clip-text bg-text-gradient">Respawn & Restore</span>
        </h2>

        <div className="space-y-6 mt-8">
          <p className="vultisig-paragraph">
            Device lost, stolen, damaged? As long as you hold the signing threshold, you're back online in minutes.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-cyanAccent mr-3 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p className="vultisig-paragraph">Restore any .vult share to any device or platform</p>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-cyanAccent mr-3 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p className="vultisig-paragraph">Reshare your vault to remove compromised devices</p>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-cyanAccent mr-3 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p className="vultisig-paragraph">Upgrade security on the fly—move from 2-of-2 to 3-of-5 with no new wallet</p>
            </li>
          </ul>

          <div className="pt-4">
            <p className="vultisig-paragraph font-medium">Your funds stay in place. Your vault stays sovereign.</p>
            <p className="vultisig-paragraph mt-4 text-xl font-semibold">
              Vultisig isn't just recoverable. It's <span className="gradient-text-alt">respawnable</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
