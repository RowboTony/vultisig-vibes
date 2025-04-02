import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import VultisigLogo from "./VultisigLogo";
import Footer from "./Footer";
import Hero from "./Hero";
import TechnologyExplainer from "./TechnologyExplainer";
import MultiFactorSovereignty from "./MultiFactorSovereignty";
import SeedlessSimplicity from "./SeedlessSimplicity";
import ProgrammableSovereignty from "./ProgrammableSovereignty";
import VulticonnectIntegration from "./VulticonnectIntegration";
import RespawnRestore from "./RespawnRestore";
import FinalProofCredibility from "./FinalProofCredibility";

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
