import React from "react";
import { Github, Shield, Award } from "lucide-react";

export default function TrustThroughTransparency() {
  const trustFeatures = [
    {
      icon: <Github className="text-cyanAccent h-7 w-7" strokeWidth={1.5} />,
      title: "Open Source Code",
      description: "Publicly available on GitHub. Peer-reviewed. Transparent by default.",
      link: "https://github.com/vultisig"
    },
    {
      icon: <Shield className="text-blueAccent h-7 w-7" strokeWidth={1.5} />,
      title: "Independent Audits",
      description: "Reviewed by top security firms. Audits available for all key components.",
    },
    {
      icon: <Award className="text-turquoise h-7 w-7" strokeWidth={1.5} />,
      title: "Proven Track Record",
      description: "Built by the founder of THORChain. Vultisig is trusted by core protocol teams.",
      link: "https://thorchain.org/"
    },
  ];

  return (
    <section id="trust" className="pt-2 px-4 relative">
      {/* Background gradient effect - subtle */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,224,255,0.03)_0%,_transparent_60%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Gradient Text */}
        <h2 className="mb-8 font-mono font-extrabold tracking-tight leading-[0.95] uppercase text-4xl md:text-5xl lg:text-6xl text-center">
          <span className="text-transparent bg-clip-text gradient-text-light">
            Trust Through Transparency
          </span>
        </h2>

        <p className="vultisig-subheading max-w-3xl mx-auto text-center mb-12">
          Built by pioneers. Open by default. Secure by design.
        </p>

        {/* Trust Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 group"
            >
              {feature.link ? (
                <a 
                  href={feature.link}
                  className="block h-full"
                  target="_blank"
                  rel="noopener noreferrer"
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
                </a>
              ) : (
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
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}