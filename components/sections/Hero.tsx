'use client';
import * as React from "react";
import Image from "next/image";
import { ShieldCheck, KeyRound, LockKeyhole } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-10 pb-16 px-6 bg-gradient-to-b from-[#061B3A] to-[#02122B] text-white">
      <div className="container mx-auto max-w-3xl text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-5xl mx-auto text-center">
          Seedless. Sovereign. Secure.
        </h1>


        {/* Bullet List */}
        <div className="space-y-6 max-w-3xl mx-auto text-left md:text-left pt-6">
          <div className="flex items-start gap-4" data-bullet="seedless">
            <KeyRound className="text-teal-400 w-7 h-7 flex-shrink-0 mt-1" />
            <p className="text-[18px] md:text-[20px] leading-relaxed mt-[2px]">
              No seed phrase, eliminating risk and complexity.
            </p>
          </div>

          <div className="flex items-start gap-4" data-bullet="sovereign">
            <ShieldCheck className="text-teal-400 w-7 h-7 flex-shrink-0 mt-1" />
            <p className="text-[18px] md:text-[20px] leading-relaxed mt-[2px]">
              You retain full control—truly decentralized custody.
            </p>
          </div>

          <div className="flex items-start gap-4" data-bullet="secure">
            <LockKeyhole className="text-teal-400 w-7 h-7 flex-shrink-0 mt-1" />
            <p className="text-[18px] md:text-[20px] leading-relaxed mt-[2px]">
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
