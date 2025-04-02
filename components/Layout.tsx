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
      <main className="flex-grow">
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
