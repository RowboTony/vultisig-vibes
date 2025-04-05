
import React from "react";
import { BoltIcon, LockClosedIcon, ArrowPathIcon, CpuChipIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Set Spend Limits",
    description: "Prevent overspending with programmable ceilings and granular control.",
    icon: LockClosedIcon,
  },
  {
    name: "Auto-Rotate to Yield",
    description: "Move idle assets into better yield automatically, based on your preferences.",
    icon: ArrowPathIcon,
  },
  {
    name: "Custom Agents & Check-ins",
    description: "Authorize plugins for estate planning, regular pings, and fallback actions.",
    icon: BoltIcon,
  },
  {
    name: "AI Safe Co-Signers",
    description: "Enable agents to co-sign—but never alone. You always hold the final key.",
    icon: CpuChipIcon,
  },
];

export default function ProgrammableSovereignty() {
  return (
    <section id="programmability" className="py-24 sm:py-32 bg-gradient-to-b from-[#071936] to-[#030c1b] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-base font-semibold leading-7 text-cyan-400 tracking-wide uppercase">Programmable Sovereignty</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Sovereignty, On Rails</p>
        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
          The same multi-party vault that secures your funds can authorize plugins and co-signers for specific actions—without exposing your keys.
        </p>
      </div>
      <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-12">
        {features.map((feature) => (
          <div key={feature.name} className="flex gap-x-4">
            <feature.icon className="h-7 w-7 flex-none text-cyan-300" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
              <p className="mt-1 text-sm text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <p className="text-md italic text-gray-400">This is programmable custody. Already live. Quietly powerful.</p>
      </div>
    </section>
  );
}
