import React from "react";
import { Zap, Lock, RefreshCw, Cpu } from 'lucide-react';

const features = [
  {
    name: "Set Spend Limits",
    description: "Prevent overspending with programmable ceilings and granular control.",
    icon: <Lock className="text-cyanAccent h-7 w-7" strokeWidth={1.5} />,
  },
  {
    name: "Auto-Rotate to Yield",
    description: "Move idle assets into better yield automatically, based on your preferences.",
    icon: <RefreshCw className="text-blueAccent h-7 w-7" strokeWidth={1.5} />,
  },
  {
    name: "Custom Agents & Check-ins",
    description: "Authorize plugins for estate planning, regular pings, and fallback actions.",
    icon: <Zap className="text-turquoise h-7 w-7" strokeWidth={1.5} />,
  },
  {
    name: "AI Safe Co-Signers",
    description: "Enable agents to co-sign—but never alone. You always hold the final key.",
    icon: <Cpu className="text-cyanAccent h-7 w-7" strokeWidth={1.5} />,
  },
];

export default function ProgrammableSovereignty() {
  return (
    <section id="programmability" className="bg-secondary py-16 px-4 relative">
      {/* Radial spotlight specific to this section */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,224,255,0.05)_0%,_transparent_60%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Gradient Text */}
        <h2 className="mb-8 font-extrabold tracking-tight leading-[0.95] uppercase text-4xl md:text-5xl lg:text-6xl text-center">
          <span className="text-transparent bg-clip-text bg-text-gradient-alt">Programmable Sovereignty</span>
        </h2>

        <p className="vultisig-subheading max-w-3xl mx-auto text-center mb-12">
          The same multi-party vault that secures your funds can authorize plugins and co-signers for specific actions—without exposing your keys.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 group"
            >
              <div className="bg-[#0a122a]/80 backdrop-blur-sm p-6 rounded-2xl h-full transition-all duration-200 ease-in-out group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                <div className="flex items-center mb-3">
                  <div className="mr-3">{feature.icon}</div>
                  <h3 className="text-xl font-semibold font-mono tracking-tight text-cyanAccent">{feature.name}</h3>
                </div>
                <p className="text-base opacity-80 ml-9">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg italic text-gray-300">
            This is programmable custody. Already live. Quietly powerful.
          </p>
        </div>
      </div>
    </section>
  );
}
