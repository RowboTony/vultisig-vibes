import {
  Key,
  ShieldCheck,
  Users,
  Smartphone,
  Code,
  BrainCircuit,
  RefreshCcw
} from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: <Key className="text-cyanAccent h-7 w-7" strokeWidth={1.5} />,
      title: "Seedless Security",
      description: "No seed phrase. No single point of failure.",
    },
    {
      icon: <Users className="text-blueAccent h-7 w-7" strokeWidth={1.5} />,
      title: "Threshold Signing",
      description: "2-of-2, 2-of-3, 3-of-5 vaults — co-sign with your own devices.",
    },
    {
      icon: <Smartphone className="text-turquoise h-7 w-7" strokeWidth={1.5} />,
      title: "Device Flexibility",
      description: "Works across iOS, Android, macOS, Windows, and Linux.",
    },
    {
      icon: <RefreshCcw className="text-cyanAccent h-7 w-7" strokeWidth={1.5} />,
      title: "Vault Reshare",
      description: "Lost a device? Rotate vault members without moving your funds.",
    },
    {
      icon: <Code className="text-blueAccent h-7 w-7" strokeWidth={1.5} />,
      title: "Open Format (.vult)",
      description: "Portable, peer-reviewed vault format supported by others.",
    },
    {
      icon: <BrainCircuit className="text-turquoise h-7 w-7" strokeWidth={1.5} />,
      title: "Programmable Agents",
      description: "Use plugins to automate DCA, limit spending, or respond to inactivity.",
    },
  ];

  return (
    <section id="features" className="py-6 px-4 relative">
      {/* Radial spotlight specific to this section - more subtle */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,224,255,0.03)_0%,_transparent_60%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Gradient Text - Matching Hero style but with reversed gradient */}
        <h2 className="mb-8 font-extrabold tracking-tight leading-[0.95] uppercase text-4xl md:text-5xl lg:text-6xl text-center">
          <span className="text-transparent bg-clip-text bg-text-gradient-alt">Core Features</span>
        </h2>

        <p className="vultisig-subheading max-w-3xl mx-auto text-center mb-12">
          Vultisig is cross-chain native. It combines the security of multi-party computation with the simplicity of modern UX design.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 group"
            >
              <div className="bg-[#0a122a]/40 backdrop-blur-sm p-6 rounded-2xl h-full transition-all duration-200 ease-in-out group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                <div className="flex items-center mb-3">
                  <div className="mr-3 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-mono tracking-tight text-cyanAccent">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 ml-10">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
