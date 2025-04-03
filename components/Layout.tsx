import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import VultisigLogo from "./VultisigLogo";
import Footer from "./Footer";
import Hero from "./sections/Hero";
import TechnologyExplainer from "./sections/TechnologyExplainer";
import MultiFactorSovereignty from "./sections/MultiFactorSovereignty";
import SeedlessSimplicity from "./sections/SeedlessSimplicity";
import ProgrammableSovereignty from "./sections/ProgrammableSovereignty";
import VulticonnectIntegration from "./sections/VulticonnectIntegration";
import RespawnRestore from "./sections/RespawnRestore";
import FinalProofCredibility from "./sections/FinalProofCredibility";

export default function Layout({ children }) {
  return (
    <div className="bg-oxford text-white font-sans min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex-grow bg-gradient-to-b from-[#0C1834] to-[#030B1B] text-white relative z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(0,64,255,0.1),_transparent)] pointer-events-none z-0" />
        <Hero />
        <TechnologyExplainer />
        <MultiFactorSovereignty />
        <SeedlessSimplicity />
        <ProgrammableSovereignty />
        <VulticonnectIntegration />
        <RespawnRestore />
        <FinalProofCredibility />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
