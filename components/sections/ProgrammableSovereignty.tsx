import React from "react";
import { Zap, Lock, RefreshCw, Cpu } from 'lucide-react';

const features = [
  {
    name: "Set Spend Limits",
    description: "Prevent overspending with programmable ceilings and granular control.",
    icon: <Lock className="text-cyanAccent h-6 w-6" />,
  },
  {
    name: "Auto-Rotate to Yield",
    description: "Move idle assets into better yield automatically, based on your preferences.",
    icon: <RefreshCw className="text-blueAccent h-6 w-6" />,
  },
  {
    name: "Custom Agents & Check-ins",
    description: "Authorize plugins for estate planning, regular pings, and fallback actions.",
    icon: <Zap className="text-turquoise h-6 w-6" />,
  },
  {
    name: "AI Safe Co-Signers",
    description: "Enable agents to co-sign—but never alone. You always hold the final key.",
    icon: <Cpu className="text-cyanAccent h-6 w-6" />,
  },
];

export default function ProgrammableSovereignty() {
  return (
    <section id="programmability" className="bg-secondary py-16 px-4">
      <div className="max-w-6xl mx-auto">
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
              className="bg-tertiary p-6 rounded-2xl border-2 border-transparent hover:border-turquoise transform hover:-translate-y-1 transition-all duration-300 text-white"
            >
              <div className="flex items-center mb-3">
                <div className="mr-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold font-mono tracking-tight text-cyanAccent">{feature.name}</h3>
              </div>
              <p className="text-base opacity-80 ml-9">{feature.description}</p>
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
