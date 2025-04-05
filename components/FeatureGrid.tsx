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
      icon: <Key className="text-cyanAccent h-6 w-6" />,
      title: "Seedless Security",
      description: "No seed phrase. No single point of failure.",
    },
    {
      icon: <Users className="text-blueAccent h-6 w-6" />,
      title: "Threshold Signing",
      description: "2-of-2, 2-of-3, 3-of-5 vaults — co-sign with your own devices.",
    },
    {
      icon: <Smartphone className="text-turquoise h-6 w-6" />,
      title: "Device Flexibility",
      description: "Works across iOS, Android, macOS, Windows, and Linux.",
    },
    {
      icon: <RefreshCcw className="text-cyanAccent h-6 w-6" />,
      title: "Vault Reshare",
      description: "Lost a device? Rotate vault members without moving your funds.",
    },
    {
      icon: <Code className="text-blueAccent h-6 w-6" />,
      title: "Open Format (.vult)",
      description: "Portable, peer-reviewed vault format supported by others.",
    },
    {
      icon: <BrainCircuit className="text-turquoise h-6 w-6" />,
      title: "Programmable Agents",
      description: "Use plugins to automate DCA, limit spending, or respond to inactivity.",
    },
  ];

  return (
    <section id="features" className="bg-secondary py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-tertiary p-6 rounded-2xl border-2 border-transparent hover:border-turquoise transform hover:-translate-y-1 transition-all duration-300 text-white"
          >
            <div className="flex items-center mb-3">
              <div className="mr-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold font-mono tracking-tight text-cyanAccent">{feature.title}</h3>
            </div>
            <p className="text-base opacity-80 ml-9">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
