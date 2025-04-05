import React, { useState } from "react";
import { CircleEllipsis, X } from "lucide-react";
import VultisigLogo from "./VultisigLogo";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Shortened navigation labels for clarity
  const navItems = [
    { label: "Vault", href: "#vault" },
    { label: "Tech", href: "#technology" },
    { label: "How It Works", href: "#how" },
    { label: "Features", href: "#features" },
    { label: "DeFi", href: "#defi" },
    { label: "Recovery", href: "#recovery" },
    { label: "Programmable", href: "#programmability" },
    { label: "Trust", href: "#trust" },
    { label: "Download", href: "#download" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-40 bg-[#0a1121] bg-opacity-90 text-white shadow-md">
      {/* 🖥 Desktop Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <VultisigLogo />
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-mono tracking-wide">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-persian hover:text-turquoise transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            className="ml-2 border border-turquoise text-turquoise rounded-md px-3 py-1 hover:bg-turquoise hover:text-black transition-colors duration-300"
          >
            Get Vultisig
          </a>
        </div>

        {/* 📱 Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
            <CircleEllipsis
              className="w-8 h-8 text-persian hover:text-turquoise transition-colors duration-300"
              strokeWidth={2.5}
              style={{
                filter: "drop-shadow(0 0 4px rgba(51, 230, 191, 0.5))",
              }}
            />
          </button>
        </div>
      </div>

      {/* 📱 Slide-Out Mobile Nav */}
      {isOpen && (
        <div className="fixed top-0 right-0 z-50 w-64 h-full bg-[#061B3A] p-6 shadow-lg transition-all">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-turquoise transition-colors duration-300"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="mt-12 mb-6">
            <VultisigLogo />
          </div>
          <nav className="space-y-4 text-white">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block font-mono text-persian hover:text-turquoise transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setIsOpen(false)}
              className="block border border-turquoise text-turquoise rounded-md px-3 py-2 text-center mt-6 font-mono hover:bg-turquoise hover:text-black transition-colors duration-300"
            >
              Get Vultisig
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Nav;
