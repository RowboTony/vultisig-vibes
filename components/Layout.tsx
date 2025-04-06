import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";
import GradientDivider from "./GradientDivider";
import Header from "./Header";
import Hero from "./sections/Hero";
import FeatureGrid from "./FeatureGrid";
import ProgrammableSovereignty from "./sections/ProgrammableSovereignty";
import RespawnRestore from "./sections/RespawnRestore";
import SecureExistingWallet from "./sections/SecureExistingWallet";
import TrustThroughTransparency from "./sections/TrustThroughTransparency";
import DefiAccess from "./sections/DefiAccess";
import Nav from "./Nav";
import VultisigLogo from "./VultisigLogo";

export default function Layout({ children }) {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll for fade-in animation
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#051937] text-white font-sans min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex-grow bg-gradient-to-b from-[#051937] to-[#081f3b] text-white relative z-0">
        {/* Radial spotlight effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,224,255,0.05)_0%,_transparent_70%)] pointer-events-none z-0" />

        {/* Circuit board pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10H30M10 10V30M90 10H70M90 10V30M10 90H30M10 90V70M90 90H70M90 90V70M50 10V30M50 70V90M10 50H30M70 50H90' stroke='%2333E6BF' stroke-opacity='0.15' stroke-width='0.5'/%3E%3Ccircle cx='10' cy='10' r='1.5' fill='%2333E6BF' fill-opacity='0.3'/%3E%3Ccircle cx='50' cy='10' r='1.5' fill='%2333E6BF' fill-opacity='0.3'/%3E%3Ccircle cx='90' cy='10' r='1.5' fill='%2333E6BF' fill-opacity='0.3'/%3E%3Ccircle cx='10' cy='50' r='1.5' fill='%2333E6BF' fill-opacity='0.3'/%3E%3Ccircle cx='50' cy='50' r='2' fill='%2333E6BF' fill-opacity='0.4'/%3E%3Ccircle cx='90' cy='50' r='1.5' fill='%2333E6BF' fill-opacity='0.3'/%3E%3Ccircle cx='10' cy='90' r='1.5' fill='%2333E6BF' fill-opacity='0.3'/%3E%3Ccircle cx='50' cy='90' r='1.5' fill='%2333E6BF' fill-opacity='0.3'/%3E%3Ccircle cx='90' cy='90' r='1.5' fill='%2333E6BF' fill-opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
            backgroundPosition: 'center center',
            backgroundRepeat: 'repeat',
            opacity: 0.15
          }}
        />

        {/* Large logo background elements */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Large logo top left */}
          <div
            className="absolute -top-[10%] -left-[10%] w-[80%] h-[80%] transition-opacity duration-1000"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 226 223' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='M108.765 130.379L14.8049 184.765L1 170.961L83.3688 115.613L108.765 130.379Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M110.889 134.058L16.8091 188.237L21.8619 207.094L110.978 163.435L110.889 134.058Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M114.624 134.058L208.703 188.237L203.65 207.094L114.534 163.434L114.624 134.058Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M116.747 130.379L210.707 184.765L224.512 170.96L142.143 115.613L116.747 130.379Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M114.624 126.36L114.504 17.7957L133.362 12.7427L140.11 111.75L114.624 126.36Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M110.376 126.36L110.496 17.7957L91.6381 12.7427L84.8905 111.75L110.376 126.36Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              transform: 'rotate(-15deg)',
              opacity: scrollY > 100 ? 0.08 : 0.06,
              filter: 'blur(1px) saturate(0.8)'
            }}
          />

          {/* Large logo bottom right */}
          <div
            className="absolute -bottom-[10%] -right-[10%] w-[80%] h-[80%] transition-opacity duration-1000"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 226 223' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='M108.765 130.379L14.8049 184.765L1 170.961L83.3688 115.613L108.765 130.379Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M110.889 134.058L16.8091 188.237L21.8619 207.094L110.978 163.435L110.889 134.058Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M114.624 134.058L208.703 188.237L203.65 207.094L114.534 163.434L114.624 134.058Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M116.747 130.379L210.707 184.765L224.512 170.96L142.143 115.613L116.747 130.379Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M114.624 126.36L114.504 17.7957L133.362 12.7427L140.11 111.75L114.624 126.36Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M110.376 126.36L110.496 17.7957L91.6381 12.7427L84.8905 111.75L110.376 126.36Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              transform: 'rotate(15deg)',
              opacity: scrollY > 300 ? 0.08 : 0.06,
              filter: 'blur(1px) saturate(0.8)'
            }}
          />

          {/* Medium logo center right */}
          <div
            className="absolute top-[30%] -right-[5%] w-[40%] h-[40%] transition-opacity duration-1000"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 226 223' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='M108.765 130.379L14.8049 184.765L1 170.961L83.3688 115.613L108.765 130.379Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M110.889 134.058L16.8091 188.237L21.8619 207.094L110.978 163.435L110.889 134.058Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M114.624 134.058L208.703 188.237L203.65 207.094L114.534 163.434L114.624 134.058Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M116.747 130.379L210.707 184.765L224.512 170.96L142.143 115.613L116.747 130.379Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M114.624 126.36L114.504 17.7957L133.362 12.7427L140.11 111.75L114.624 126.36Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M110.376 126.36L110.496 17.7957L91.6381 12.7427L84.8905 111.75L110.376 126.36Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              transform: 'rotate(45deg)',
              opacity: scrollY > 200 ? 0.07 : 0.05,
              filter: 'blur(1px) saturate(0.8)'
            }}
          />

          {/* Medium logo center left */}
          <div
            className="absolute top-[60%] -left-[5%] w-[40%] h-[40%] transition-opacity duration-1000"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 226 223' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='M108.765 130.379L14.8049 184.765L1 170.961L83.3688 115.613L108.765 130.379Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M110.889 134.058L16.8091 188.237L21.8619 207.094L110.978 163.435L110.889 134.058Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M114.624 134.058L208.703 188.237L203.65 207.094L114.534 163.434L114.624 134.058Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M116.747 130.379L210.707 184.765L224.512 170.96L142.143 115.613L116.747 130.379Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M114.624 126.36L114.504 17.7957L133.362 12.7427L140.11 111.75L114.624 126.36Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3Cpath d='M110.376 126.36L110.496 17.7957L91.6381 12.7427L84.8905 111.75L110.376 126.36Z' stroke='%2333E6BF' stroke-width='2' stroke-opacity='0.4'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              transform: 'rotate(-45deg)',
              opacity: scrollY > 400 ? 0.07 : 0.05,
              filter: 'blur(1px) saturate(0.8)'
            }}
          />
        </div>

        {isHomePage ? (
          <>
            <Hero />
            <GradientDivider />
            <SecureExistingWallet />
            <GradientDivider />
            <FeatureGrid />
            <GradientDivider />
            <ProgrammableSovereignty />
            <GradientDivider />
            <DefiAccess />
            <GradientDivider />
            <RespawnRestore />
            <GradientDivider />
            <TrustThroughTransparency />
            <GradientDivider className="my-4" />
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
