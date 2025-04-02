import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import VultisigLogo from "./VultisigLogo";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-oxford text-white font-sans min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
