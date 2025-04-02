import * as React from "react";
import Link from "next/link";
import { Github, Twitter, MessageCircleMore, Send } from "lucide-react";
import { SITE_CONFIG } from "../site.config";

export const Footer = () => {
  return (
    <footer className="bg-[#030712] text-white text-sm py-10 px-4 border-t border-secondary">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Discord CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#111827] px-6 py-4 rounded-lg border border-turquoise">
          <p className="text-center md:text-left font-medium text-turquoise text-base uppercase">
            Join the Discord to Request New Features!
          </p>
          <a
            href="https://discord.gg/54wEtGYxuv"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 md:mt-0 bg-turquoise text-slate-900 font-semibold px-5 py-2 rounded-full hover:bg-opacity-90 transition"
          >
            Join Discord
          </a>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Socials */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-turquoise font-bold text-lg">
              {/* Placeholder Logo (You can replace with real SVG/Component) */}
              <span className="w-6 h-6 bg-gradient-to-br from-teal-400 to-blue-700 rounded-full inline-block" />
              Vultisig
            </Link>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/Vultisig" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 text-white hover:text-teal-400 transition" />
              </a>
              <a href="https://twitter.com/vultisig" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 text-white hover:text-teal-400 transition" />
              </a>
              <a href="https://discord.gg/54wEtGYxuv" target="_blank" rel="noopener noreferrer">
                <MessageCircleMore className="w-6 h-6 text-white hover:text-teal-400 transition" />
              </a>
              <a href="https://t.me/vultisig" target="_blank" rel="noopener noreferrer">
                <Send className="w-6 h-6 text-white hover:text-teal-400 transition" />
              </a>
            </div>
            <p className="text-xs text-white opacity-50">
              <span>&copy; {new Date().getFullYear()} Vultisig</span>
            </p>
            <p className="text-xs text-white opacity-50"><span>v{SITE_CONFIG.version}</span></p>
          </div>

          {/* Shortcut Links */}
          <div>
            <h4 className="font-semibold mb-2">Vultisig</h4>
            <ul className="space-y-1">
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/backed-by">Backed by</Link></li>
              <li><Link href="/docs">Docs</Link></li>
              <li><Link href="/vult">$VULT</Link></li>
              <li>
                <a
                  href="https://chromewebstore.google.com/detail/vulticonnect/ggafhcdaplkhmmnlbfjpnnkepdfjaelb"
                  target="_blank"
                  rel="noreferrer"
                >
                  Extension
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1">
              <li><Link href="/support">Support</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
              <li>
                <a
                  href="https://docs.vultisig.com/threshold-signature-scheme/security"
                  target="_blank"
                  rel="noreferrer"
                >
                  Audits
                </a>
              </li>
              <li><a href="https://twitter.com/vultisig">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-1">
              <li><Link href="/termofservice">Terms of Service</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
