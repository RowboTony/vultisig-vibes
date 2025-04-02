import React from "react";

const Nav = () => {
    return (
      <nav className="space-x-6 hidden md:flex">
        <a href="#features" className="hover:text-turquoise transition">
          Features
        </a>
        <a href="#security" className="hover:text-turquoise transition">
          Security
        </a>
        <a href="#download" className="hover:text-turquoise transition">
          Download
        </a>
      </nav>
    );
  };

  export default Nav;
