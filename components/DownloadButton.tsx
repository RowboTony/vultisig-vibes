"use client";

import * as React from "react";

interface DownloadButtonProps {
  href: string;
  children: React.ReactNode;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  href,
  children,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-4 text-lg font-semibold bg-teal-400 cursor-pointer border-[none] rounded-[100px] text-slate-900 hover:bg-teal-300 transition-colors"
      aria-label="Download Vultisig"
    >
      {children}
    </a>
  );
};
