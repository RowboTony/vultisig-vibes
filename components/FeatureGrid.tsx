export default function FeatureGrid() {
  const features = [
    {
      icon: "/icons/device.svg",
      title: "Full Control",
      description: "Only your devices approve transactions — no third-party control.",
    },
    {
      icon: "/icons/vault.svg",
      title: "Self-Custody",
      description: "Seedless, secure, and never stored in the cloud.",
    },
    {
      icon: "/icons/shield.svg",
      title: "Tamper Proof",
      description: "Cryptographically secure and resilient against compromise.",
    },
  ];

  return (
    <section className="bg-secondary py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-tertiary p-6 rounded-2xl border-2 border-transparent hover:border-turquoise transform hover:-translate-y-1 transition-all duration-300 text-white"
          >
            <img src={feature.icon} alt="" className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm opacity-80">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}