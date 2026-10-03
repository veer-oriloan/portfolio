import React, { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const ACTION_PILLS = [
  { label: "Craft I'm proud of", href: '#craft' },
  { label: 'Skills & Tools', href: '#skills' },
  { label: 'About Me', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
];

const TYPEWRITER_TEXT =
  "Glad you stopped in. I design clear, user-first experiences that don't confuse people. Now, what are we building?";

export const Hero: React.FC = () => {
  const { displayed, done } = useTypewriter(TYPEWRITER_TEXT, 32, 500);
  const [showPills, setShowPills] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPills(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('veerajputji@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative z-[1] w-full min-h-screen flex flex-col justify-end pb-16 md:justify-center md:pb-0 px-5 sm:px-8 md:px-12 overflow-hidden"
    >
      <div className="max-w-2xl relative z-10">
        {/* 1. Blurred intro label */}
        <div
          className="pointer-events-none select-none mb-5 sm:mb-6"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.3,
            fontWeight: 400,
            color: '#000',
            filter: 'blur(3.5px)',
          }}
        >
          Hey there, I'm Veer,
          <br />
          A Delhi-based Product Designer crafting user-first experiences
        </div>

        {/* 2. Typewriter text */}
        <p
          className="text-black mb-6 sm:mb-8 font-normal"
          style={{
            fontSize: 'clamp(20px, 4.2vw, 28px)',
            lineHeight: 1.35,
            minHeight: '60px',
          }}
        >
          {displayed}
          {!done && (
            <span
              className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink"
              aria-hidden="true"
            />
          )}
        </p>

        {/* 3. Action pill buttons */}
        <div
          className={`flex flex-wrap items-center gap-y-2 transition-all ${
            showPills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[8px]'
          }`}
          style={{
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {ACTION_PILLS.map((pill) => (
            <a
              key={pill.label}
              href={pill.href}
              onClick={(e) => scrollToSection(e, pill.href)}
              className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.35em] mx-[0.2em] mb-[0.4em] whitespace-nowrap shadow-sm hover:bg-black hover:text-white transition-all duration-200 cursor-pointer"
            >
              {pill.label}
            </a>
          ))}

          {/* 1 outline email pill button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            title={copied ? 'Copied to clipboard!' : 'Copy email address'}
            className="relative inline-flex items-center justify-center text-white bg-black/80 backdrop-blur-sm border border-black/20 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.35em] mx-[0.2em] mb-[0.4em] whitespace-nowrap gap-2 sm:gap-3 hover:bg-white hover:text-black hover:border-black/20 transition-all duration-200 cursor-pointer shadow-sm group"
          >
            <span>
              Reach us:{' '}
              <span className="underline underline-offset-1">
                veerajputji@gmail.com
              </span>
            </span>

            {/* 12x12 copy icon */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 transition-colors"
            >
              <rect
                x="3.25"
                y="1.25"
                width="7"
                height="7"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <rect
                x="1.25"
                y="3.25"
                width="7"
                height="7"
                rx="1"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>

            {/* Subtle Copied Toast Tooltip */}
            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[11px] px-2.5 py-0.5 rounded shadow pointer-events-none whitespace-nowrap">
                Copied to clipboard!
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Subtle indicator to scroll down to Craft */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity">
        <a
          href="#craft"
          onClick={(e) => scrollToSection(e, '#craft')}
          className="flex flex-col items-center gap-1 text-[11px] tracking-widest uppercase text-black font-medium"
        >
          <span>Scroll to Craft</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </a>
      </div>
    </section>
  );
};
