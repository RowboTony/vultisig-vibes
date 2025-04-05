import React, { useState, useEffect } from "react";
import { CircleEllipsis, X } from "lucide-react";
import VultisigLogo from "./VultisigLogo";
import { useRouter } from "next/router";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Shortened navigation labels for clarity
  const navItems = [
    { label: "Vault", href: "#vault" },
    { label: "Technology", href: "#core-features" },
    { label: "How It Works", href: "#secure-wallet" },
    { label: "Features", href: "#programmable" },
    { label: "DeFi Access", href: "#defi", disabled: true },
    { label: "Recovery", href: "#respawn" },
    { label: "Trust", href: "#trust", disabled: true },
    { label: "Download", href: "#download" },
  ];

  // Function to get the correct href based on current page
  const getNavHref = (href) => {
    if (isHomePage) {
      return href;
    } else {
      return `/${href}`;
    }
  };

  // Handle navigation click
  const handleNavClick = (e, href) => {
    if (!isHomePage && href.startsWith('#')) {
      e.preventDefault();
      router.push(`/${href}`);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Nav Links - Only visible on 2xl screens (1536px+) */}
      <div className="hidden 2xl:flex space-x-6 font-mono tracking-wide">
        {navItems.filter(item => !item.disabled).map((item) => (
          <a
            key={item.label}
            href={isHomePage ? item.href : `/${item.href}`}
            onClick={(e) => !isHomePage && item.href.startsWith('#') ? handleNavClick(e, item.href) : null}
            className="text-white hover:text-turquoise transition-colors duration-300 whitespace-nowrap text-[22px]"
          >
            {item.label}
          </a>
        ))}
        <a
          href="https://vultisig.com/download"
          className="ml-2 border border-turquoise text-turquoise rounded-md px-3 py-1 hover:bg-turquoise hover:text-black transition-colors duration-300 whitespace-nowrap text-[22px]"
        >
          Get Vultisig
        </a>
      </div>

      {/* Mobile/Tablet Navigation Controls */}
      <div className="flex items-center space-x-3 2xl:hidden">
        {/* "Get Vultisig" Button - Visible on screens 374px+ but hidden on 2xl+ */}
        <a
          href="https://vultisig.com/download"
          className="hidden xs:block border border-turquoise text-turquoise rounded-md px-2 py-1 hover:bg-turquoise hover:text-black transition-colors duration-300 whitespace-nowrap font-mono md:text-[18px] text-[14px]"
        >
          Get Vultisig
        </a>

        {/* Mobile Menu Button - Always visible on screens below 1536px */}
        <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
          <CircleEllipsis
            className="w-8 h-8 text-persian hover:text-turquoise transition-colors duration-300"
            strokeWidth={1}
          />
        </button>
      </div>

      {/* Darkened overlay when menu is open - covers entire viewport */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-30 transition-opacity duration-300"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: '100vh',
            width: '100vw'
          }}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-Out Mobile Nav - Now positioned relative to viewport */}
      {isOpen && (
        <div className="fixed top-0 right-0 z-50 w-64 h-screen bg-[#061B3A] p-6 shadow-lg transition-all overflow-y-auto">
          <div className="flex items-center justify-between">
            <VultisigLogo />
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-turquoise transition-colors duration-300"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="space-y-4 text-white mt-8">
            {navItems.filter(item => !item.disabled).map((item) => (
              <a
                key={item.label}
                href={isHomePage ? item.href : `/${item.href}`}
                onClick={(e) => !isHomePage && item.href.startsWith('#') ? handleNavClick(e, item.href) : null}
                className="block font-mono text-white hover:text-turquoise transition-colors duration-300 text-[22px]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://vultisig.com/download"
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
