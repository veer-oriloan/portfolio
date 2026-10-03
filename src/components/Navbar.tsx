import React, { useState } from 'react';

const NAV_LINKS = [
  { name: 'Craft', href: '#craft' },
  { name: 'Skills & Tools', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-40 px-5 sm:px-8 py-4 sm:py-5 flex flex-row justify-between items-center backdrop-blur-md bg-white/40 border-b border-black/5 transition-all">
        {/* Logo (left) */}
        <div className="flex flex-row items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-[21px] sm:text-[26px] tracking-tight text-black select-none font-bold"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Veer Singh
          </a>
        </div>

        {/* Desktop nav links (center, hidden below md) */}
        <nav className="hidden md:flex flex-row items-center text-[20px] text-black font-normal">
          {NAV_LINKS.map((link, idx) => (
            <React.Fragment key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:opacity-60 transition-opacity"
              >
                {link.name}
              </a>
              {idx < NAV_LINKS.length - 1 && <span>,&nbsp;</span>}
            </React.Fragment>
          ))}
        </nav>

        {/* Desktop CTA (right, hidden below md) */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-[20px] text-black underline underline-offset-4 hover:opacity-60 transition-opacity"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile hamburger (visible below md) */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] focus:outline-none p-1 cursor-pointer"
        >
          <span
            className={`block w-6 h-[2px] bg-black transition-all duration-300 origin-center ${
              isOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-black transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-black transition-all duration-300 origin-center ${
              isOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile overlay (z-index: 39) */}
      <div
        className={`fixed inset-0 z-30 bg-white/95 backdrop-blur-md flex flex-col justify-center items-start px-8 gap-8 md:hidden transition-all duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-[32px] font-medium text-black hover:opacity-60 transition-opacity"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="text-[32px] font-medium text-black underline underline-offset-4 hover:opacity-60 transition-opacity"
        >
          Get in touch
        </a>
      </div>
    </>
  );
};
