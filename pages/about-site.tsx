import React from 'react';
import Link from 'next/link';
import AnimatedVultisigLogo from '../components/AnimatedVultisigLogo';
import GradientDivider from '../components/GradientDivider';

export default function AboutSitePage() {
  return (
    <main className="prose prose-invert lg:prose-xl max-w-3xl mx-auto px-6 pt-2 font-sans">
      {/* Hero section with animated logo */}
      <div className="flex flex-col items-center justify-center py-12 -mb-2">
        <AnimatedVultisigLogo size="large" className="mb-8" />
        <h2 className="text-2xl md:text-3xl font-bold text-center gradient-text-light mt-4">
          <span className="max-[425px]:block">Seedless by design.</span> <span className="max-[425px]:block">Sovereign by default.</span>
        </h2>
      </div>

      <GradientDivider />

      <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tight leading-tight gradient-text-light uppercase mt-10">
        <div>Vultisig Landing Page Challenge  -  Submission by:</div>
        <div className="flex items-center">
          <a href="https://x.com/tgroff" rel="noopener noreferrer" className="inline-flex items-center group">
            <span className="text-persian group-hover:text-turquoise transition-colors duration-300"
              style={{
                filter: "drop-shadow(0 0 1px rgba(51, 230, 191, 0.5))",
              }}>
              RowboTony
            </span>
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-persian group-hover:border-turquoise transition-colors duration-300 ml-2"
              style={{
                filter: "drop-shadow(0 0 4px rgba(51, 230, 191, 0.5))",
              }}>
              <img
                src="https://i2.seadn.io/ethereum/0xa98b29a8f5a247802149c268ecf860b8308b7291/3c9e7623305d8b2217a54939c2383104.png?w=1000"
                alt="ThroGuard #3443"
                className="w-full h-full object-cover"
              />
            </div>
          </a>
        </div>
      </h1>

      <div className="bg-gray-900 rounded-lg p-6 my-6 border border-cyanAccent text-sm text-gray-100 font-mono">
        <p className="mb-2">
          <strong>Proof of Work</strong>
        </p>
        <p className="mb-2 sm:mb-1">Live site: <br className="sm:hidden" /><a className="text-cyanAccent hover:text-turquoise transition-colors duration-300" href="https://vultisig-vibes.vercel.app" target="_blank" rel="noopener noreferrer">https://vultisig-vibes.vercel.app</a></p>
        <p>GitHub Repo: <br className="sm:hidden" /><a className="text-cyanAccent hover:text-turquoise transition-colors duration-300 break-all overflow-wrap-anywhere" href="https://github.com/RowboTony/vultisig-vibes" target="_blank" rel="noopener noreferrer">https://github.com/RowboTony/vultisig-vibes</a></p>
      </div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight mb-8 uppercase gradient-text-light">SUBMISSION SUMMARY</h2>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">Thank you for this opportunity.</p>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">This wasn't just a landing page build. It was a mission.</p>
      <p className="text-lg text-gray-300 leading-relaxed">
        As someone who's been deeply aligned with Vultisig from the start - not just as a supporter,
        but as a long-time believer and hobbyist contributor since first hearing <a href="https://x.com/jpthor" target="_blank" rel="noopener noreferrer" className="text-cyanAccent hover:text-turquoise transition-colors duration-300">@jpthor</a> on the
        <a href="https://podcasts.apple.com/us/podcast/btc-down-alts-outperform-crypto-town-hall-w-thorchain/id1500066831?i=1000660227158" target="_blank" rel="noopener noreferrer" className="text-cyanAccent hover:text-turquoise transition-colors duration-300"> WOAS  podcast (June 25, 2024)</a> - I approached this challenge as something more
        than a contest. It felt like a quiet job interview. One I prepared for with care, precision,
        and respect for the vision you're building.
      </p>

      <GradientDivider className="my-6" />

      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight mb-8 uppercase gradient-text-light">WHERE I STARTED</h3>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        Already familiar with Vultisig's goals and ethos, I didn't have to "study" the brand - I've
        lived with it, used it, and followed its evolution closely. I've submitted bug reports,
        usage feedback, and suggestions across GitHub and Discord. But I did take this opportunity
        to dig even deeper.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        I reviewed every public surface - your site, docs, social tone, branding kit - with one goal
        in mind: elevate the experience without losing the soul. I wasn't trying to reinvent Vultisig.
        I wanted to re-present it at the highest level, with the UX clarity and polish of institutions
        like Cash App, River, Stripe, and Tesla.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">From typography to layout flow, every decision passed through a single lens:</p>
      <blockquote className="pl-6 border-l-4 border-blueAccent my-8">
        <p className="text-xl italic gradient-text-light">"Does this respect and reflect Vultisig's sovereign, seedless, non-custodial foundation?"</p>
      </blockquote>

      <GradientDivider className="my-7" />

      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight mb-8 uppercase gradient-text-light">REFINING THE MESSAGE</h3>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        I focused on communicating cryptographic depth without technical fog. MPC and TSS aren't
        simple concepts - but they represent decades of security research, and Vultisig makes them
        usable by everyone. That story matters.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        So I worked the copy line by line to reflect that power in plain language - confident,
        institutional, accessible.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">I distilled it down to the core message:</p>
      <blockquote className="pl-6 border-l-4 border-blueAccent my-8">
        <p className="text-xl font-semibold gradient-text-light">
          "Seedless by design. Sovereign by default. Open and simple self-custody - for everyone,
          everywhere, on any device."
        </p>
      </blockquote>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">Every headline. Every subheader. Every call to action.</p>
      <p className="text-lg text-gray-300 leading-relaxed">
        Nothing was filler. Everything was intentional.
      </p>

      <GradientDivider className="my-6"/>

      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight mb-8 uppercase gradient-text-light">DESIGN ETHOS</h3>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        The existing <a href="https://vultisig.com" target="_blank" rel="noopener noreferrer" className="text-cyanAccent hover:text-turquoise transition-colors duration-300">vultisig.com</a> and sub-sites already look fantastic - credit where it's due. The brand, mascot, color scheme, and layout all reflect world-class design instincts.
        That's what made the <a href="https://x.com/vultisig/status/1905309260231196795" target="_blank" rel="noopener noreferrer" className="text-cyanAccent hover:text-turquoise transition-colors duration-300">vibe coding challenge</a> so surprising. It already felt "done." - they don't need a new website.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        With a focus on simplicity, I aimed to create a clean and streamlined design. By minimizing unnecessary elements
        and using animations sparingly, I prioritized the mobile user experience. The goal was to ensure the site
        feels like a secure and trustworthy platform, free from distractions or gimmicks.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        Even the bot mascot (who I've named "R2V2") - clever and well-designed - is gently reserved for the airdrop section.
        A nod to the degen crowd, but never at the expense of institutional trust.
      </p>
      <blockquote className="pl-6 border-l-4 border-blueAccent my-8">
        <p className="text-xl font-semibold gradient-text-light">No hype. No overload. Just clarity, elegance, and purpose.</p>
      </blockquote>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">I also made a key usability choice:<br />
        While reviewing the current site, I noticed a global CSS rule:</p>
      <pre className="bg-gray-800 rounded-lg p-4 my-8 overflow-x-auto">
        <code className="text-sm text-gray-300 font-mono">
          {`* {
  user-select: none;
}`}
        </code>
      </pre>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        This disables all text selection across the page - including addresses, commands, and other
        key elements. I chose not to carry it forward.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">Restricting user selection can:</p>
      <ul className="list-disc pl-6 my-6 space-y-3 text-gray-300">
        <li className="text-lg">Reduce accessibility (screen readers, keyboard use)</li>
        <li className="text-lg">Frustrate users who want to copy information</li>
        <li className="text-lg">Undermine browser-native behavior</li>
      </ul>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        So instead, I prioritized openness, accessibility, and trust - especially for a product
        built on sovereignty.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed">
        I'd also be happy to contribute further on any accessibility work for the Vultisig app itself.
        Accessibility is a personal passion of mine, and I believe it's critical for global adoption.
      </p>

      <GradientDivider className="my-6" />

      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight mb-8 uppercase gradient-text-light">MOBILE-FIRST FOCUS</h3>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">The world is mobile. And so was my build.</p>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        While the bulk of the submissions are likely to be desktop-first concepts, I flipped it:
        I built the mobile version first and polished later for larger viewports. Mobile was the primary lens through which I tested
        every decision - spacing, CTA flow, scroll timing, and copy density.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed">
        The desktop experience is now fully polished and pushed live. All <strong className="text-cyanAccent">eight sections</strong> are
        now complete and responsive across devices. (Initial submission launched with four sections live, per timeline constraints.)
      </p>

      <GradientDivider className="my-6" />

      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight mb-8 uppercase gradient-text-light">TECHNICAL BUILD</h3>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">This was never a Figma mockup. It was production-level code from the start.</p>
      <ul className="list-disc pl-6 my-6 space-y-3 text-gray-300">
        <li className="text-lg">Built in <strong className="text-cyanAccent">React + Tailwind</strong>, with clean JSX and modular components</li>
        <li className="text-lg">Used <strong className="text-cyanAccent">Framer Motion</strong> for intentional, low-friction animations</li>
        <li className="text-lg">Fully responsive, with scroll behaviors tested on real devices</li>
        <li className="text-lg">Typography, spacing, and color matched to the brand kit</li>
        <li className="text-lg">Accessible decisions made throughout (e.g., allowing text selection)</li>
        <li className="text-lg">Created by human, enhanced by AI.</li>
      </ul>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">As the contest closes, I've:</p>
      <ul className="list-disc pl-6 my-6 space-y-3 text-gray-300">
        <li className="text-lg">Published the full source code</li>
        <li className="text-lg">Annotated the repo for clarity and learning</li>
        <li className="text-lg">Opened the project to community discussion and iteration</li>
      </ul>
      <p className="text-lg text-gray-300 leading-relaxed">Because I believe in the open ethos Vultisig embodies.</p>

      <GradientDivider className="my-6" />

      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight mb-8 uppercase gradient-text-light">WHY I CARE</h3>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        I've spent years analyzing wallets - especially hardware wallets. I've used them all.
        And I've been underwhelmed.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        Even the market leaders, like Ledger, still ship with pieces of paper to store your seed phrase.
        In 2025. That's not innovation - that's an industry stuck in the past. Hardware wallets feel
        like a trap: expensive up front, dangerous to mismanage, and often reliant on centralized
        bridges or firmware you can't audit.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">Vultisig fixes all of that.</p>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        No $100 lock-in. No $100/month custody service.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        Just real sovereignty, running open-source, on hardware I already own.
      </p>
      <blockquote className="pl-6 border-l-4 border-blueAccent my-8">
        <p className="text-xl font-semibold gradient-text-light">
          Vultisig doesn't chase hype. It doesn't bend to trends.<br />
          It builds and ships with integrity. And that's why this project means so much to me.
        </p>
      </blockquote>

      <GradientDivider />

      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight mb-8 uppercase gradient-text-light">FINAL THOUGHT</h3>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">Vultisig didn't just build something cool.</p>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">Vultisig built the missing piece.</p>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        So I didn't treat this like a design gig.<br />
        I treated it like a legacy.<br />
        One I want to be part of.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed">
        Respectfully,<br />
         -  Tony ("RowboTony")
      </p>

      <div className="mt-12 mb-6">
        <Link href="/" className="inline-block border border-turquoise text-turquoise rounded-md px-5 py-3 hover:bg-turquoise hover:text-black transition-colors duration-300 text-[22px] font-mono">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to home
        </Link>
      </div>

      <p className="pt-10 pb-10 text-sm text-gray-500 italic border-t border-gray-800">
        I'm happiest when I'm Vultisiging on a Friday night.
        <br />Just a cowboy coder who loves Vultisig.
      </p>
    </main>
  );
}
