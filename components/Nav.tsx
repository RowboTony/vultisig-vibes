import React, { useState } from "react";
import { CircleEllipsis, X } from "lucide-react";
import VultisigLogo from "./VultisigLogo";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Shortened navigation labels for clarity
  const navItems = [
    { label: "Vault", href: "#vault" },
    { label: "Technology", href: "#technology" },
    { label: "How It Works", href: "#how" },
    { label: "Features", href: "#features" },
    { label: "DeFi Access", href: "#defi" },
    { label: "Recovery", href: "#recovery" },
    { label: "Programmable", href: "#programmability" },
    { label: "Trust", href: "#trust" },
    { label: "Download", href: "#download" },
  ];

  return (
    <>
      {/* Desktop Nav Links - Only visible on 2xl screens (1536px+) */}
      <div className="hidden 2xl:flex space-x-6 font-mono tracking-wide">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-persian hover:text-turquoise transition-colors duration-300 whitespace-nowrap text-[22px]"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#cta"
          className="ml-2 border border-turquoise text-turquoise rounded-md px-3 py-1 hover:bg-turquoise hover:text-black transition-colors duration-300 whitespace-nowrap text-[22px]"
        >
          Get Vultisig
        </a>
      </div>

      {/* Mobile/Tablet Navigation Controls */}
      <div className="flex items-center space-x-3 2xl:hidden">
        {/* "Get Vultisig" Button - Visible on screens 374px+ but hidden on 2xl+ */}
        <a
          href="#cta"
          className="hidden xs:block border border-turquoise text-turquoise rounded-md px-2 py-1 hover:bg-turquoise hover:text-black transition-colors duration-300 whitespace-nowrap font-mono md:text-[18px] text-[14px]"
        >
          Get Vultisig
        </a>

        {/* 📱 Mobile Menu Button - Always visible on screens below 1536px */}
        <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
          <CircleEllipsis
            className="w-8 h-8 text-persian hover:text-turquoise transition-colors duration-300"
            strokeWidth={1}
          />
        </button>
      </div>

      {/* 📱 Slide-Out Mobile Nav - Now positioned relative to viewport */}
      {isOpen && (
        <div className="fixed top-0 right-0 z-50 w-64 h-screen bg-[#061B3A] p-6 shadow-lg transition-all overflow-y-auto">
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
                className="block font-mono text-persian hover:text-turquoise transition-colors duration-300 text-[22px]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setIsOpen(false)}
              className="block border border-turquoise text-turquoise rounded-md px-3 py-2 text-center mt-6 font-mono hover:bg-turquoise hover:text-black transition-colors duration-300 text-[22px]"
            >
              Get Vultisig
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Nav;
