import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="bg-oxford text-white font-sans min-h-screen flex flex-col">
      {/* Header */}
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
