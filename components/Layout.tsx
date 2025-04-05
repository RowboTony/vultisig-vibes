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
    <div className="bg-[#051937] text-white font-sans min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex-grow bg-gradient-to-b from-[#051937] to-[#081f3b] text-white relative z-0">
        {/* Radial spotlight effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,224,255,0.05)_0%,_transparent_70%)] pointer-events-none z-0" />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2333e6bf' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />

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
