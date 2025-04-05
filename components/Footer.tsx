import * as React from "react";
import { Github, Twitter, MessageCircle, Send } from "lucide-react";
import VultisigLogo from "./VultisigLogo";
import { SITE_CONFIG } from "../site.config";
import GradientDividerFooter from "./GradientDividerFooter";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#061B3A] text-white pt-3 pb-6 px-6 md:px-12 lg:px-20">
      <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left column */}
        <div className="flex flex-col items-center lg:col-span-3 gap-4">
          <a href="/" className="group">
            <VultisigLogo />
          </a>
          {/* Social Icons */}
          <div className="flex gap-4 text-2xl mt-4">
            <a
              href="https://github.com/Vultisig"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-turquoise transition-colors duration-300"
            >
              <Github />
            </a>
            <a
              href="https://x.com/vultisig"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-turquoise transition-colors duration-300"
            >
              <Twitter />
            </a>
            <a
              href="https://discord.gg/54wEtGYxuv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-turquoise transition-colors duration-300"
            >
              <MessageCircle />
            </a>
            <a
              href="https://t.me/vultisig"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-turquoise transition-colors duration-300"
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
            <a
              href="/about-site"
              className="text-sm font-bold font-mono text-persian hover:text-turquoise transition-all duration-300 hover:border-b hover:border-turquoise/50 pb-[1px]"
              style={{
                filter: "drop-shadow(0 0 0 rgba(51, 230, 191, 0.5))",
              }}
            >
              v{SITE_CONFIG.version}
            </a>
          </div>
        </div>
        <div className="max-[424px]:block hidden">
          <GradientDividerFooter />
        </div>
        {/* Right columns - Equal 3-column grid for 425px-1023px, stacked for smaller screens */}
        <div className="lg:col-span-9 lg:pr-2">
          <div className="grid max-[424px]:grid-cols-1 min-[425px]:grid-cols-3 gap-6 lg:gap-10 lg:flex lg:justify-end text-center lg:text-left">
            <div className="max-[424px]:py-0">
              <h4 className="font-semibold mb-3 text-turquoise font-mono tracking-wide text-sm uppercase">Vultisig</h4>
              <ul className="space-y-1 text-white/80 leading-tight">
                <li>
                  <a href="/how-it-works" className="hover:text-turquoise transition-all duration-300 text-sm hover:border-b hover:border-turquoise/50 pb-[1px]">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="/backed-by" className="hover:text-turquoise transition-all duration-300 text-sm hover:border-b hover:border-turquoise/50 pb-[1px]">
                    Backed by
                  </a>
                </li>
                <li>
                  <a href="/docs" className="hover:text-turquoise transition-all duration-300 text-sm hover:border-b hover:border-turquoise/50 pb-[1px]">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="/vult" className="hover:text-turquoise transition-all duration-300 text-sm hover:border-b hover:border-turquoise/50 pb-[1px]">
                    $VULT
                  </a>
                </li>
                <li>
                  <a
                    href="https://chromewebstore.google.com/detail/vulticonnect/..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-turquoise transition-all duration-300 text-sm hover:border-b hover:border-turquoise/50 pb-[1px]"
                  >
                    Extension
                  </a>
                </li>
              </ul>
            </div>

            {/* Gradient Divider for small screens */}
            <div className="max-[424px]:block hidden">
              <GradientDividerFooter />
            </div>

            <div className="max-[424px]:py-0">
              <h4 className="font-semibold mb-3 text-turquoise font-mono tracking-wide text-sm uppercase">Support</h4>
              <ul className="space-y-1 text-white/80 leading-tight">
                <li>
                  <a href="/support" className="hover:text-turquoise transition-all duration-300 text-sm hover:border-b hover:border-turquoise/50 pb-[1px]">
                    Support
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-turquoise transition-all duration-300 text-sm hover:border-b hover:border-turquoise/50 pb-[1px]">
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.vultisig.com/..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-turquoise transition-all duration-300 text-sm hover:border-b hover:border-turquoise/50 pb-[1px]"
                  >
                    Audits
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/vultisig"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-turquoise transition-all duration-300 text-sm hover:border-b hover:border-turquoise/50 pb-[1px]"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Gradient Divider for small screens */}
            <div className="max-[424px]:block hidden">
              <GradientDividerFooter />
            </div>

            <div className="max-[424px]:py-0">
              <h4 className="font-semibold mb-3 text-turquoise font-mono tracking-wide text-sm uppercase">Legal</h4>
              <ul className="space-y-1 text-white/80 leading-tight">
                <li>
                  <a href="/termofservice" className="hover:text-turquoise transition-all duration-300 text-sm hover:border-b hover:border-turquoise/50 pb-[1px]">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-turquoise transition-all duration-300 text-sm hover:border-b hover:border-turquoise/50 pb-[1px]">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
