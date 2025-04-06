import React from "react";

export default function Downloads() {
  return (
    <section id="download" className="pt-20 px-6 pb-6 relative text-center">
      <h2 className="w-full mb-8">
        <span className="text-transparent bg-clip-text bg-text-gradient text-4xl md:text-5xl lg:text-6xl uppercase font-mono tracking-tight">
          Download Vultisig
        </span>
      </h2>

      <div className="text-center mb-12">
        <a
          href="https://vultisig.com/download/vultisig"
          className="inline-block border border-turquoise text-turquoise rounded-md px-5 py-3 hover:bg-turquoise hover:text-black transition-colors duration-300 text-[22px] font-mono"
        >
          Download Vultisig
        </a>
      </div>
    </section>
  );
}