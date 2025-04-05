import React from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";
import GradientDivider from "./GradientDivider";
import Header from "./Header";
import Hero from "./sections/Hero";
import FeatureGrid from "./FeatureGrid";
import ProgrammableSovereignty from "./sections/ProgrammableSovereignty";
import RespawnRestore from "./sections/RespawnRestore";
import Nav from "./Nav";
import VultisigLogo from "./VultisigLogo";

export default function Layout({ children }) {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <div className="bg-oxford text-white font-sans min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex-grow bg-gradient-to-b from-[#0C1834] to-[#030B1B] text-white relative z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(0,64,255,0.1),_transparent)] pointer-events-none z-0" />

        {isHomePage ? (
          <>
            <Hero />
            <FeatureGrid />
            <GradientDivider />
            <RespawnRestore />
            <GradientDivider />
            <ProgrammableSovereignty />
          </>
        ) : (
          children
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
