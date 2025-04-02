import * as React from "react";
import { Github, Twitter, MessageCircle, Send } from "lucide-react";
import VultisigLogo from "./VultisigLogo";
import { SITE_CONFIG } from "../site.config";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#061B3A] text-white pt-10 pb-6 px-6 md:px-12 lg:px-20">
      <div className="border-t border-turquoise/20 pt-10 flex flex-col lg:flex-row justify-between gap-12">
        {/* Left column */}
        <div className="flex flex-col items-center gap-4 flex-1 lg:items-center lg:justify-start lg:text-center lg:[align-items:center] lg:[justify-content:flex-start]">


          <a href="/" className="group">
            <VultisigLogo />
          </a>
          {/* Social Icons */}
          <div className="flex gap-4 text-2xl mt-4">
            <a
              href="https://github.com/Vultisig"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-turquoise"
            >
              <Github />
            </a>
            <a
              href="https://x.com/vultisig"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-turquoise"
            >
              <Twitter />
            </a>
            <a
              href="https://discord.gg/54wEtGYxuv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-turquoise"
            >
              <MessageCircle />
            </a>
            <a
              href="https://t.me/vultisig"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-turquoise"
            >
              <Send />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/70 mt-4">
            &copy; {currentYear} {SITE_CONFIG.company}.
          </p>

          {/* Version - centered */}
          <div className="w-full text-center">
            <p className="text-sm text-white/40">v{SITE_CONFIG.version}</p>
          </div>
        </div>

        {/* Right columns */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
          <div>
            <h4 className="font-semibold mb-3">Vultisig</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="/how-it-works" className="hover:text-white">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/backed-by" className="hover:text-white">
                  Backed by
                </a>
              </li>
              <li>
                <a href="/docs" className="hover:text-white">
                  Docs
                </a>
              </li>
              <li>
                <a href="/vult" className="hover:text-white">
                  $VULT
                </a>
              </li>
              <li>
                <a
                  href="https://chromewebstore.google.com/detail/vulticonnect/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Extension
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="/support" className="hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="https://docs.vultisig.com/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Audits
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/vultisig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="/termofservice" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
