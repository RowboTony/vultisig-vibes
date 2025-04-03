// components/Header.tsx
"use client";

import React from "react";
import VultisigLogo from "./VultisigLogo"; // same SVG component from footer
import Nav from "./Nav"; // adjust path if needed

const Header = () => {
    return (
      <header className="sticky top-0 z-50 w-full bg-oxford/80 backdrop-blur border-b border-secondary py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" aria-label="Home">
          <VultisigLogo className="h-8 sm:h-9 -mt-[1px]" />
        </a>

        <Nav />
      </header>
    );
  };

  export default Header;