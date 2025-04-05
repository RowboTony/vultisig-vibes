// components/Header.tsx
"use client";

import React from "react";
import VultisigLogo from "./VultisigLogo"; // same SVG component from footer
import Nav from "./Nav"; // adjust path if needed

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-oxford/80 backdrop-blur-md border-b border-secondary/50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" aria-label="Home">
          <VultisigLogo />
        </a>

        <Nav />
      </div>
    </header>
  );
};

export default Header;