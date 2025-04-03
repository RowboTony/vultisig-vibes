'use client';
import * as React from "react";
import Image from "next/image";
import { ShieldCheck, KeyRound, LockKeyhole } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-10 pb-16 px-6 bg-gradient-to-b from-[#061B3A] to-[#02122B] text-white">
      <div className="container mx-auto max-w-3xl text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-snug mb-10">
          <span className="hero-word" data-word="seedless">Seedless</span>.{" "}
          <span className="hero-word" data-word="sovereign">Sovereign</span>.{" "}
          <span className="hero-word" data-word="secure">Secure</span>.
        </h1>

        {/* Bullet List */}
        <div className="space-y-5 text-left">
          <div className="flex items-start gap-4" data-bullet="seedless">
            <KeyRound className="text-teal-400 w-6 h-6 flex-shrink-0 mt-1" />
            <p className="text-[17px] leading-snug">
              No seed phrase, eliminating risk and complexity.
            </p>
          </div>

          <div className="flex items-start gap-4" data-bullet="sovereign">
            <ShieldCheck className="text-teal-400 w-6 h-6 flex-shrink-0 mt-1" />
            <p className="text-[17px] leading-snug">
              You retain full control—truly decentralized custody.
            </p>
          </div>

          <div className="flex items-start gap-4" data-bullet="secure">
            <LockKeyhole className="text-teal-400 w-6 h-6 flex-shrink-0 mt-1" />
            <p className="text-[17px] leading-snug">
              Industry-grade security (TSS cryptography).
            </p>
          </div>
        </div>


        {/* Hero Image */}
        <div className="mt-16">
          <Image
            src="/images/security.png"
            alt="Vultisig App Screenshot"
            width={400}
            height={400}
            className="mx-auto rounded-xl shadow-lg"
          />

        </div>

        {/* CTA */}
        <a
          href="https://vultisig.com/download"
          className="inline-block mt-12 px-10 py-4 rounded-full bg-teal-500 text-white text-lg font-semibold shadow-md hover:bg-teal-600 transition"
        >
          Get Vultisig
        </a>
      </div>
    </section>
  );
};

export default Hero;
