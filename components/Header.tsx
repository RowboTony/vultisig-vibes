// components/Header.tsx
"use client";

import React from "react";
import Link from "next/link";
import VultisigLogo from "./VultisigLogo"; // same SVG component from footer
import { SITE_CONFIG } from "../site.config";

const Header = () => {
    return (
        <header className="w-full bg-[#061B3A] text-white border-b border-white/10 py-4 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo + Name */}
                <a href="/" className="group">
                    <VultisigLogo />
                </a>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-8 text-sm">
                    <Link href="/how-it-works" className="hover:text-turquoise transition">How it Works</Link>
                    <Link href="/backed-by" className="hover:text-turquoise transition">Backed by</Link>
                    <Link href="/docs" className="hover:text-turquoise transition">Docs</Link>
                    <Link href="/vult" className="hover:text-turquoise transition">$VULT</Link>
                    <a
                        href="https://vultisig.com/download"
                        className="px-4 py-2 bg-turquoise text-oxford rounded-full font-medium text-sm hover:bg-opacity-80 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
