// components/Header.tsx
"use client";

import React from "react";
import VultisigLogo from "./VultisigLogo"; // same SVG component from footer
import Nav from "./Nav"; // adjust path if needed

const Header = () => {
    return (
      <header className="w-full bg-oxford border-b border-secondary py-4 px-6 flex items-center justify-between">
        <a href="/" aria-label="Home">
          <VultisigLogo />
        </a>
        <Nav />
      </header>
    );
  };

  export default Header;