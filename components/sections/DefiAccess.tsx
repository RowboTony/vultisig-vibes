import React from "react";
import { Puzzle, Gift, TrendingUp, Bot, ArrowDownRight } from 'lucide-react';

const features = [
  {
    name: "Vulticonnect DeFi Extension",
    description: "Secure browser extension for connecting your vault to DeFi apps.",
    icon: <Puzzle className="text-cyanAccent h-7 w-7" strokeWidth={1.5} />,
    link: "https://vultisig.com/download/browser"
  },
  {
    name: "Airdrop Enabled",
    description: "Eligible vaults can interact with projects offering rewards and incentives.",
    icon: <Gift className="text-blueAccent h-7 w-7" strokeWidth={1.5} />,
    airdropLink: "https://airdrop.vultisig.com/onboarding"
  },
  {
    name: "Auto-Rotate to Yield",
    description: "Idle assets are moved to better yield strategies — based on your preferences.",
    icon: <TrendingUp className="text-turquoise h-7 w-7" strokeWidth={1.5} />,
  },
  {
    name: "Automate Without Compromise",
    description: "Set DeFi automations using plugins while keeping full custody of your keys.",
    icon: <Bot className="text-cyanAccent h-7 w-7" strokeWidth={1.5} />,
  },
];

export default function DefiAccess() {
  return (
    <section id="defi-access" className="py-2 px-4 relative">
      {/* Radial spotlight specific to this section - subtle */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,224,255,0.03)_0%,_transparent_60%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Gradient Text - using font-mono as per user preference */}
        <h2 className="mb-8 font-extrabold font-mono tracking-tight leading-[0.95] uppercase text-4xl md:text-5xl lg:text-6xl text-center">
          <span className="text-transparent bg-clip-text bg-text-gradient">DeFi Access, Unlocked.</span>
        </h2>

        <p className="vultisig-subheading max-w-3xl mx-auto text-center mb-12">
          Yield, automation, and rewards — without compromising custody.
        </p>

        {/* Feature Grid - 2x2 on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 group"
            >
              <div className={`relative bg-[#0a122a]/40 backdrop-blur-sm p-6 rounded-2xl h-full transition-all duration-200 ease-in-out group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-cyan-500/20 ${feature.name === "Airdrop Enabled" ? "bg-[url('/images/banner.png')] bg-cover bg-center bg-no-repeat" : ""}`}>

                {/* Dark overlay for Airdrop card to maintain text readability */}
                {feature.name === "Airdrop Enabled" && (
                  <div className="absolute inset-0 bg-[#0a122a]/60 rounded-2xl"></div>
                )}

                <div className="flex items-center mb-3 relative z-10">
                  <div className="mr-3 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-mono tracking-tight text-cyanAccent">
                    {feature.name}
                  </h3>
                </div>
                <p className="text-gray-300 ml-10 relative z-10">
                  {feature.description}
                </p>

                {/* Vulticonnect Extension link */}
                {feature.link && (
                  <div className="mt-4 ml-10 relative z-10">
                    <a
                      href={feature.link}
                      className="inline-flex items-center gap-1 text-turquoise hover:text-cyan-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download <ArrowDownRight className="w-4 h-4" />
                    </a>
                  </div>
                )}

                {/* Airdrop link */}
                {feature.airdropLink && (
                  <div className="mt-4 ml-10 relative z-10">
                    <a
                      href={feature.airdropLink}
                      className="inline-flex items-center gap-1 text-turquoise hover:text-cyan-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Begin Claim →
                    </a>
                  </div>
                )}

                {/* Mascot image for Vulticonnect card */}
                {feature.name === "Vulticonnect DeFi Extension" && (
                  <div className="-bottom-12 right-0 sm:-bottom-20 sm:-right-20 absolute z-0 opacity-80 pointer-events-none">
                    <img
                      src="/images/Vulti_Agent_Mobile.png"
                      alt="Vulti Agent Mascot"
                      className="w-[120px] md:w-[160px] lg:w-[180px]"
                    />
                  </div>
                )}


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
