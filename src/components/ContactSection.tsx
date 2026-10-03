import React, { useState } from 'react';

const SOCIALS = [
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Twitter (X)', url: 'https://twitter.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
  { name: 'Dribbble', url: 'https://dribbble.com' },
];

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('veerajputji@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <footer
      id="contact"
      className="relative z-10 w-full bg-[#FAF9F6] pt-24 sm:pt-32 pb-16 px-6 sm:px-12 md:px-20 border-t border-black/10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Top Pitch */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black leading-tight">
              Let me help with a great visual solution for your business.
            </h2>
          </div>

          <div className="md:col-span-5 md:pl-8 space-y-6">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-black/40 block mb-2">
                To get in touch :
              </span>
              <h3 className="text-2xl font-bold text-black">Contact Me</h3>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:veerajputji@gmail.com"
                className="px-6 py-3 rounded-full bg-red-600 text-white text-xs sm:text-sm font-semibold hover:bg-red-700 transition-all shadow-sm"
              >
                Say Hey! 👋
              </a>
              <span className="text-xs text-black/60">
                Set up a time to talk about your design needs.
              </span>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <span className="text-xs uppercase font-mono tracking-widest text-black/40 block mb-3">
                Follow me on:
              </span>
              <div className="flex flex-wrap gap-4">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-black hover:text-blue-600 underline underline-offset-4 transition-colors"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Big Interactive Email Copy Bar */}
        <div className="pt-12 border-t border-black/10">
          <span className="text-xs uppercase font-mono tracking-widest text-black/40 block mb-2">
            Click to copy :
          </span>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="group relative w-full text-left cursor-pointer focus:outline-none"
          >
            <div className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-black/20 group-hover:text-black transition-colors duration-300 break-all select-all">
              veerajputji@gmail.com
            </div>

            {/* Floating indicator */}
            <div className="mt-2 text-xs font-mono font-semibold text-black/50 group-hover:text-black flex items-center gap-2">
              <span>{copied ? '✓ Copied to clipboard!' : 'Click to copy email address'}</span>
              <span className="text-sm">📋</span>
            </div>
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between text-xs text-black/50 gap-4">
          <div>© {new Date().getFullYear()} Veer Singh. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Designed in Delhi, India</span>
            <span>•</span>
            <a href="#hero" className="hover:text-black transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
