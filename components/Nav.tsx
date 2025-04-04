import React, { useState } from "react";
import { CircleEllipsis, X } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Nav */}
      <nav className="space-x-6 hidden md:flex text-sm font-semibold tracking-wide">
        <a href="#features" className="hover:text-teal-400 transition">
          Features
        </a>
        <a href="#security" className="hover:text-teal-400 transition">
          Security
        </a>
        <a href="#download" className="hover:text-teal-400 transition">
          Download
        </a>
      </nav>

      {/* Mobile Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
          <CircleEllipsis
            className="w-8 h-8 text-persian hover:text-turquoise transition-colors duration-300 drop-shadow-lg"
            strokeWidth={1}
            style={{
              filter: "drop-shadow(0 0 4px rgba(51, 230, 191, 0.5))",
            }}
          />
        </button>
      </div>

      {/* Slide-Out Mobile Drawer */}
      {isOpen && (
        <div className="fixed top-0 right-0 z-40 w-64 h-full bg-[#061B3A] p-6 shadow-lg transition-all">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
          <nav className="mt-12 space-y-6 text-white font-semibold">
            <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#security" onClick={() => setIsOpen(false)}>Security</a>
            <a href="#download" onClick={() => setIsOpen(false)}>Download</a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Nav;
