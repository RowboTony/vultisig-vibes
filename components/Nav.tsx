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
    { label: "How It Works", href: "#secure-wallet" },
    { label: "Vault Tech", href: "#core-features" },
    { label: "Smart Vault", href: "#programmable" },
    { label: "DeFi Access", href: "#defi-access" },
    { label: "Recovery", href: "#respawn" },
    { label: "Trust", href: "#trust" },
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

  const SidebarContent = ({ showClose = true }) => (
    <>
      <div className="flex items-center justify-between">
        <VultisigLogo />
        {showClose && (
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-turquoise transition-colors duration-300"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </div>
      <nav className="space-y-4 text-white mt-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={isHomePage ? item.href : `/${item.href}`}
            onClick={(e) => handleNavClick(e, item.href)}
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
    </>
  );

  return (
    <>
      {/* Sidebar navigation controls */}
      <div className={`flex items-center space-x-3 2xl:hidden ${isOpen ? "invisible" : ""}`}>
        <a
          href="https://vultisig.com/download"
          className="hidden xs:block border border-turquoise text-turquoise rounded-md px-2 py-1 hover:bg-turquoise hover:text-black transition-colors duration-300 whitespace-nowrap font-mono md:text-[18px] text-[14px]"
        >
          Get Vultisig
        </a>

        <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
          <CircleEllipsis
            className="w-8 h-8 text-persian hover:text-turquoise transition-colors duration-300"
            strokeWidth={1}
          />
        </button>
      </div>

      {/* Slide-Out Nav - positioned relative to viewport */}
      {isOpen && (
        <div className="fixed top-0 right-0 z-50 w-64 h-screen bg-[#061B3A] border-l border-secondary p-6 shadow-2xl transition-all overflow-y-auto 2xl:hidden">
          <SidebarContent />
        </div>
      )}

      <aside className="fixed top-0 right-0 z-40 hidden w-64 h-screen bg-[#061B3A] border-l border-secondary p-6 shadow-2xl overflow-y-auto 2xl:block">
        <SidebarContent showClose={false} />
      </aside>
    </>
  );
};

export default Nav;
