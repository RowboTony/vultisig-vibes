import React from "react";
import { ClipboardCopyIcon } from "@radix-ui/react-icons";

const downloads = [
  {
    name: "App Store",
    icon: "/images/appstore.svg",
    link: "https://apps.apple.com/app/vultisig/id6503023896",
  },
  {
    name: "macOS",
    icon: "/images/mac-os.webp",
    link: "https://github.com/vultisig/vultisig-ios/releases/download/v1.14.0/VultisigApp.v1.14.0.signed.pkg",
    sha: "182f4aee5a10a29190f2b2639878a15294abf357036e2e4a73163e65b6a6334c",
  },
  {
    name: "Google Play",
    icon: "/images/playstore.svg",
    link: "https://play.google.com/store/apps/details?id=com.vultisig.wallet",
  },
  {
    name: "Windows",
    icon: "/images/windows.webp",
    link: "https://github.com/vultisig/vultisig-windows/releases/download/v1.0.19/Vultisig-amd64-installer-v1.0.19.exe",
    sha: "5c306cccd03018fb673b89319b17913b5aaa19712cd15a5a9bfef66b39f91d4f",
  },
  {
    name: "Linux",
    icon: "/images/linux.svg",
    link: "https://github.com/vultisig/vultisig-windows/releases/download/v1.0.19/vultisig_1.0.19_amd64.deb",
    sha: "84f7faad8f78b300834ff5b4316f34ce2784bf076bfedf968f6ca1f40053b906",
  },
];

export default function Downloads() {
  return (
    <section id="download" className="pt-12 px-6 pb-16 relative text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-8">Download Vultisig</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {downloads.map((d, i) => (
          <a key={i} href={d.link} target="_blank" rel="noopener noreferrer">
            <img
              src={d.icon}
              alt={`Download for ${d.name}`}
              className="w-[160px] h-auto transition-transform hover:scale-105"
            />
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-4 max-w-xl mx-auto text-left">
        {downloads
          .filter((d) => d.sha)
          .map((d, i) => (
            <div
              key={i}
              className="bg-[#0d1324] border border-gray-700 rounded-md p-4 flex items-center justify-between gap-4 text-white text-sm font-mono"
            >
              <span className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                <span className="opacity-70">{d.name}</span>: {d.sha}
              </span>
              <button
                onClick={() => navigator.clipboard.writeText(d.sha || "")}
                className="text-turquoise hover:text-white transition-colors"
              >
                <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.5"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="w-5 h-5"
>
  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
</svg>

              </button>
            </div>
          ))}
      </div>
    </section>
  );
}