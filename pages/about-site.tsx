import React from 'react';
import Link from 'next/link';
import GradientDivider from '../components/GradientDivider';

export default function AboutSitePage() {
  return (
    <main className="prose prose-invert lg:prose-xl max-w-3xl mx-auto px-6 py-16 font-sans">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 font-mono tracking-tight leading-tight text-transparent bg-clip-text bg-text-gradient">
        Vultisig Landing Page Challenge — Submission by Tony ("RowboTony")
      </h1>

      <h2 className="text-3xl font-bold mt-12 mb-6 font-mono text-cyanAccent">Submission Summary</h2>
      <p className="text-lg text-gray-300 leading-relaxed">Thank you for this opportunity.</p>
      <p className="text-lg text-gray-300 leading-relaxed">This wasn't just a landing page build. It was a mission.</p>
      <p className="text-lg text-gray-300 leading-relaxed">
        As someone who's been deeply aligned with Vultisig from the start—not just as a supporter,
        but as a long-time believer and hobbyist contributor since first hearing @jpthor on the
        <strong className="text-cyanAccent"> WOAS </strong> podcast (June 25, 2024)—I approached this challenge as something more
        than a contest. It felt like a quiet job interview. One I prepared for with care, precision,
        and respect for the vision you're building.
      </p>

      <GradientDivider />

      <h3 className="text-2xl font-bold mb-5 font-mono text-cyanAccent">Where I Started</h3>
      <p className="text-lg text-gray-300 leading-relaxed">
        Already familiar with Vultisig's goals and ethos, I didn't have to "study" the brand—I've
        lived with it, used it, and followed its evolution closely. I've submitted bug reports,
        usage feedback, and suggestions across GitHub and Discord. But I did take this opportunity
        to dig even deeper.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed">
        I reviewed every public surface—your site, docs, social tone, branding kit—with one goal
        in mind: elevate the experience without losing the soul. I wasn't trying to reinvent Vultisig.
        I wanted to re-present it at the highest level, with the UX clarity and polish of institutions
        like Cash App, River, Stripe, and Tesla.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed">From typography to layout flow, every decision passed through a single lens:</p>
      <blockquote className="pl-6 border-l-4 border-blueAccent my-6">
        <p className="text-xl italic text-gray-200">"Does this respect and reflect Vultisig's sovereign, seedless, non-custodial foundation?"</p>
      </blockquote>

      <GradientDivider />

      <h3 className="text-2xl font-bold mb-5 font-mono text-cyanAccent">Refining the Message</h3>
      <p className="text-lg text-gray-300 leading-relaxed">
        I focused on communicating cryptographic depth without technical fog. MPC and TSS aren't
        simple concepts—but they represent decades of security research, and Vultisig makes them
        usable by everyone. That story matters.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed">
        So I worked the copy line by line to reflect that power in plain language—confident,
        institutional, accessible.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed">I distilled it down to the core message:</p>
      <blockquote className="pl-6 border-l-4 border-blueAccent my-6">
        <p className="text-xl font-semibold text-transparent bg-clip-text bg-text-gradient">
          "Seedless by design. Sovereign by default. Open and simple self-custody—for everyone,
          everywhere, on any device."
        </p>
      </blockquote>
      <p className="text-lg text-gray-300 leading-relaxed">
        Every headline. Every subheader. Every call to action.<br />
        Nothing was filler. Everything was intentional.
      </p>

      <GradientDivider />

      <h3 className="text-2xl font-bold mb-5 font-mono text-cyanAccent">Design Ethos</h3>
      <p className="text-lg text-gray-300 leading-relaxed">
        The existing vultisig.com and sub-sites already look fantastic—credit where it's due.
        The brand, mascot, color scheme, and layout all reflect world-class design instincts.
        That's what made the vibe coding challenge so surprising. It already felt "done."
      </p>
      <p className="text-lg text-gray-300 leading-relaxed">
        That said, I took a "less is more" approach across the board. I reduced visual noise,
        limited animations to subtle enhancements, and prioritized mobile UX throughout. The site
        should feel like a secure vault—distinguished from any whiff of novelty or gimmickry that
        could distract from its institutional-grade trust model.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed">
        Even the mascot—clever and well-designed—is gently reserved for the airdrop section.
        A nod to the degen crowd, but never at the expense of institutional trust.
      </p>
      <blockquote className="pl-6 border-l-4 border-blueAccent my-6">
        <p className="text-xl font-semibold text-transparent bg-clip-text bg-text-gradient">No hype. No overload. Just clarity, elegance, and purpose.</p>
      </blockquote>
      <p className="text-lg text-gray-300 leading-relaxed">I also made a key usability choice:<br />
      While reviewing the current site, I noticed a global CSS rule:</p>
      <pre className="bg-gray-800 rounded-lg p-4 my-6 overflow-x-auto">
        <code className="text-sm text-gray-300 font-mono">
{`* {
  user-select: none;
}`}
        </code>
      </pre>
      <p className="text-lg text-gray-300 leading-relaxed">
        This disables all text selection across the page—including addresses, commands, and other
        key elements. While I can't presume the intent behind it, I chose not to carry it forward.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed">Restricting user selection can:</p>
      <ul className="list-disc pl-6 my-4 space-y-2 text-gray-300">
        <li className="text-lg">Reduce accessibility (screen readers, keyboard use)</li>
        <li className="text-lg">Frustrate users who want to copy information</li>
        <li className="text-lg">Undermine browser-native behavior</li>
      </ul>
      <p className="text-lg text-gray-300 leading-relaxed">
        So instead, I prioritized openness, accessibility, and trust—especially for a product
        built on sovereignty.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed">
        I'd also be happy to contribute further on any accessibility work for the Vultisig app itself.
        Accessibility is a personal passion of mine, and I believe it's critical for global adoption.
      </p>

      <GradientDivider />

      <h3 className="text-2xl font-bold mb-5 font-mono text-cyanAccent">Mobile-First Focus</h3>
      <p className="text-lg text-gray-300 leading-relaxed">The world is mobile. And so was my build.</p>
      <p className="text-lg text-gray-300 leading-relaxed">
        While the bulk of the submissions are likely to be desktop-first concepts, I flipped it:
        I built the mobile version first and only. It was the primary lens through which I tested
        every decision—spacing, CTA flow, scroll timing, and copy density.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed">
        That said, the desktop experience is still being polished and actively pushed live—even as
        I submit early on April 5th. The deadline stated "submit by April 5," which I interpreted
        as 11:59 PM UTC-11.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed">
        To be safe, I'm submitting early while continuing to ship improvements. Although only
        <strong className="text-cyanAccent"> four sections </strong> are currently visible on the live version, the
        <strong className="text-cyanAccent"> full build includes nine</strong>, with the remainder being polished and released
        nearly hourly. I expect the review process will continue through the weekend.
      </p>

      <GradientDivider />

      <h3 className="text-2xl font-bold mb-5 font-mono text-cyanAccent">Technical Build</h3>
      <p className="text-lg text-gray-300 leading-relaxed">This wasn't just a Figma mockup—it was production-level code.</p>
      <ul className="list-disc pl-6 my-4 space-y-2 text-gray-300">
        <li className="text-lg">Built in <strong className="text-cyanAccent">React + Tailwind</strong>, with clean JSX and modular components</li>
        <li className="text-lg">Used <strong className="text-cyanAccent">Framer Motion</strong> for intentional, low-friction animations</li>
        <li className="text-lg">Fully responsive, with scroll behaviors tested on real devices</li>
        <li className="text-lg">Typography, spacing, and color matched to the brand kit</li>
        <li className="text-lg">Accessible decisions made throughout (e.g., allowing text selection)</li>
      </ul>
      <p className="text-lg text-gray-300 leading-relaxed">As the contest closes, I'm:</p>
      <ul className="list-disc pl-6 my-4 space-y-2 text-gray-300">
        <li className="text-lg">Publishing the full source code</li>
        <li className="text-lg">Annotating the repo for clarity and learning</li>
        <li className="text-lg">Opening the project to community discussion and iteration</li>
      </ul>
      <p className="text-lg text-gray-300 leading-relaxed">Because I believe in the open ethos Vultisig embodies.</p>

      <GradientDivider />

      <h3 className="text-2xl font-bold mb-5 font-mono text-cyanAccent">Why I Care</h3>
      <p className="text-lg text-gray-300 leading-relaxed">
        I've spent years analyzing wallets—especially hardware wallets. I've used them all.
        And I've been underwhelmed.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed">
        Even the market leaders, like Ledger, still ship with pieces of paper to store your seed phrase.
        In 2025. That's not innovation—that's an industry stuck in the past. Hardware wallets feel
        like a trap: expensive up front, dangerous to mismanage, and often reliant on centralized
        bridges or firmware you can't audit.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed">Vultisig fixes all of that.</p>
      <p className="text-lg text-gray-300 leading-relaxed">
        No $100 lock-in. No $100/month custody service.<br />
        Just real sovereignty, running open-source, on hardware I already own.
      </p>
      <blockquote className="pl-6 border-l-4 border-blueAccent my-6">
        <p className="text-xl font-semibold text-transparent bg-clip-text bg-text-gradient">
          Vultisig doesn't chase hype. It doesn't bend to trends.<br />
          It builds and ships with integrity. And that's why this project means so much to me.
        </p>
      </blockquote>

      <GradientDivider />

      <h3 className="text-2xl font-bold mb-5 font-mono text-cyanAccent">Final Thought</h3>
      <p className="text-lg text-gray-300 leading-relaxed">Vultisig didn't just build something cool.</p>
      <p className="text-lg text-gray-300 leading-relaxed">Vultisig built the missing piece.</p>
      <p className="text-lg text-gray-300 leading-relaxed">
        So I didn't treat this like a design gig.<br />
        I treated it like a legacy.<br />
        One I want to be part of.
      </p>

      <div className="mt-12 mb-6">
        <Link href="/" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blueAccent to-cyanAccent text-white rounded-md transition-colors hover:opacity-90">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to home
        </Link>
      </div>

      <p className="pt-10 text-sm text-gray-500 italic border-t border-gray-800">
        I'm happiest when I'm Vultisiging on a Friday night. Just a cowboy coder who loves Vultisig.
      </p>
    </main>
  );
}
