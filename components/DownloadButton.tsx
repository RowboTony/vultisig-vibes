"use client";

import * as React from "react";

interface DownloadButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  onClick,
  children,
}) => {
  return (
    <button
      className="px-8 py-4 text-lg font-semibold bg-teal-400 cursor-pointer border-[none] rounded-[100px] text-slate-900 hover:bg-teal-300 transition-colors"
      onClick={onClick}
      aria-label="Download Vultisig"
    >
      {children}
    </button>
  );
};
