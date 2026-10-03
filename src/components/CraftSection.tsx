import React, { useRef, useState, useEffect } from 'react';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData';

interface CraftSectionProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const CraftSection: React.FC<CraftSectionProps> = ({ onSelectCaseStudy }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStartLeft, setScrollStartLeft] = useState(0);

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      return;
    }
    const progress = (el.scrollLeft / maxScroll) * 100;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse drag to scroll implementation
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollStartLeft(el.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const el = scrollContainerRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    el.scrollLeft = scrollStartLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const toggleSound = () => {
    setIsMuted(!isMuted);
    // Subtle audio feedback synthesize via Web Audio API
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = isMuted ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(isMuted ? 520 : 380, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.15);
    } catch {
      // AudioContext not allowed or not supported; gracefully ignore
    }
  };

  return (
    <section
      id="craft"
      className="relative z-10 w-full min-h-screen bg-[#FAF9F6] py-20 sm:py-24 flex flex-col justify-between select-none overflow-hidden border-t border-black/5"
    >
      {/* Editorial Title inspired by ryanwalter.work */}
      <div className="w-full text-center px-4 mb-10 sm:mb-14">
        <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-black font-normal tracking-tight">
          Craft i'm proud of
        </h2>
        <p className="text-black/50 text-xs sm:text-sm mt-2 tracking-wide font-sans">
          Click any card to explore the full interactive UX case study
        </p>
      </div>

      {/* Horizontal Draggable Paper Cards Gallery */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={`w-full overflow-x-auto no-scrollbar flex items-center px-6 sm:px-14 md:px-20 gap-8 sm:gap-12 md:gap-16 py-8 ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {CASE_STUDIES.map((study, idx) => (
          <div
            key={study.id}
            onClick={() => onSelectCaseStudy(study)}
            className="group flex-shrink-0 w-[300px] sm:w-[360px] md:w-[400px] h-[520px] sm:h-[560px] paper-sheet rounded-[4px] p-6 sm:p-8 flex flex-col justify-between border border-black/[0.06] cursor-pointer"
          >
            {/* Masking Tape Strips inspired by ryanwalter.work */}
            {study.tapeStyle === 'dual-corner' && (
              <>
                <div
                  className="masking-tape tape-blue -top-3 -left-4 -rotate-45"
                  style={{ width: '85px', height: '26px' }}
                />
                <div
                  className="masking-tape tape-blue -top-3 -right-4 rotate-45"
                  style={{ width: '85px', height: '26px' }}
                />
              </>
            )}

            {study.tapeStyle === 'top-center' && (
              <div
                className={`masking-tape ${
                  study.tapeColor === 'red' ? 'tape-red' : 'tape-purple'
                } -top-3.5 left-1/2 -translate-x-1/2 ${
                  idx % 2 === 0 ? '-rotate-1' : 'rotate-1'
                }`}
                style={{ width: '95px', height: '26px' }}
              />
            )}

            {study.tapeStyle === 'top-corner' && (
              <div
                className="masking-tape tape-yellow -top-3 -right-4 rotate-45"
                style={{ width: '85px', height: '26px' }}
              />
            )}

            {/* Card Header: Brand Logo / Typography */}
            <div className="flex flex-col items-center text-center mt-2">
              <span className="text-[10px] tracking-widest uppercase font-mono text-black/40 mb-1">
                {study.location} • {study.year}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black flex items-center gap-2">
                {study.title}
              </h3>
            </div>

            {/* Hero Graphic Centerpiece */}
            <div className="relative w-full h-[240px] sm:h-[260px] my-auto flex items-center justify-center">
              {/* Soft Ambient Radial Glow */}
              <div
                className="absolute inset-0 m-auto w-40 h-40 rounded-full blur-2xl opacity-25 group-hover:opacity-40 transition-opacity duration-300"
                style={{ backgroundColor: study.accentColor }}
              />

              {/* Unique Centerpiece Artwork per Case Study */}
              {study.id === 'styllrax' && (
                <div className="relative z-10 flex flex-col items-center transform group-hover:scale-105 transition-transform duration-300">
                  {/* Hanging Badge Frame */}
                  <div className="w-48 h-56 rounded-2xl bg-white border border-black/10 shadow-lg p-3.5 flex flex-col justify-between">
                    <div className="flex items-center justify-between pb-2 border-b border-black/5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                        <span className="text-[11px] font-bold text-black">
                          Styllrax
                        </span>
                      </div>
                      <span className="text-[9px] font-mono text-black/40">
                        verified
                      </span>
                    </div>
                    {/* Simulated mobile UI */}
                    <div className="space-y-1.5 my-auto">
                      <div className="h-10 rounded-lg bg-blue-50 border border-blue-100 p-2 flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-blue-900">
                          Haircut & Styling
                        </span>
                        <span className="text-[10px] font-bold text-blue-600">
                          ₹499
                        </span>
                      </div>
                      <div className="h-6 rounded-md bg-black/5 flex items-center px-2 text-[9px] text-black/50">
                        ⭐ 4.9 (420+ reviews)
                      </div>
                    </div>
                    <div className="h-7 rounded-lg bg-black text-white text-[10px] font-semibold flex items-center justify-center">
                      Confirm Slot 11:30 AM
                    </div>
                  </div>
                </div>
              )}

              {study.id === 'tripsense' && (
                <div className="relative z-10 flex flex-col items-center transform group-hover:scale-105 transition-transform duration-300">
                  {/* Floating Boarding Pass Card */}
                  <div className="w-48 h-56 rounded-2xl bg-gradient-to-b from-white to-red-50/40 border border-red-200/60 shadow-lg p-3.5 flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-black/5 pb-2">
                      <span className="text-[11px] font-bold text-red-600 tracking-wider">
                        TRIPSENSE
                      </span>
                      <span className="text-[9px] font-mono bg-red-100 text-red-700 px-1.5 py-0.5 rounded">
                        2D TRIP
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="p-2 rounded-lg bg-white border border-black/5 shadow-xs">
                        <div className="text-[9px] text-black/40 uppercase">
                          Target Rhythm
                        </div>
                        <div className="text-[11px] font-semibold text-black">
                          Relaxed • 3 Stops
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-[10px] px-1 font-mono text-black/60">
                        <span>Delhi (DEL)</span>
                        <span>✈</span>
                        <span>Goa (GOI)</span>
                      </div>
                    </div>
                    <div className="h-7 rounded-lg bg-red-600 text-white text-[10px] font-semibold flex items-center justify-center shadow-sm">
                      Smart Schedule Ready
                    </div>
                  </div>
                </div>
              )}

              {study.id === 'goalteller' && (
                <div className="relative z-10 flex flex-col items-center transform group-hover:scale-105 transition-transform duration-300">
                  {/* Floating Wealth Card */}
                  <div className="w-48 h-56 rounded-2xl bg-white border border-purple-200 shadow-lg p-3.5 flex flex-col justify-between">
                    <div className="flex items-center justify-between pb-2 border-b border-black/5">
                      <span className="text-[11px] font-bold text-purple-700">
                        GoalTeller
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <div className="space-y-2 my-auto">
                      <div className="text-[9px] text-black/40 uppercase font-mono">
                        Net Worth Simulator
                      </div>
                      <div className="text-xl font-extrabold text-black font-mono">
                        ₹42.5 L
                      </div>
                      <div className="w-full bg-purple-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-purple-600 h-full w-[72%]" />
                      </div>
                      <div className="text-[9px] text-purple-700 font-medium">
                        72% to Financial Freedom
                      </div>
                    </div>
                    <div className="h-7 rounded-lg bg-purple-600 text-white text-[10px] font-semibold flex items-center justify-center">
                      Explore Portfolio UX
                    </div>
                  </div>
                </div>
              )}

              {study.id === 'experiments' && (
                <div className="relative z-10 flex flex-col items-center transform group-hover:scale-105 transition-transform duration-300">
                  {/* Floating Reflective Disco Sphere */}
                  <div className="relative w-36 h-36 rounded-full bg-gradient-to-tr from-yellow-200 via-amber-300 to-amber-500 shadow-xl flex items-center justify-center border-2 border-white/60">
                    <div className="w-28 h-28 rounded-full border border-white/40 flex items-center justify-center bg-black/10 backdrop-blur-xs">
                      <span className="text-3xl">✨</span>
                    </div>
                    {/* Light reflection flare */}
                    <div className="absolute top-3 left-6 w-8 h-4 rounded-full bg-white/70 blur-xs rotate-[-30deg]" />
                  </div>
                  <span className="mt-3 text-xs font-mono text-black/60 font-semibold">
                    3D • Spline • Motion
                  </span>
                </div>
              )}
            </div>

            {/* Card Description & CTA Footer */}
            <div className="mt-2 pt-3 border-t border-black/[0.06]">
              <p className="text-xs text-black/70 line-clamp-2 leading-relaxed mb-3">
                {study.description}
              </p>
              <div className="flex items-center justify-between text-xs font-semibold text-black group-hover:text-blue-600 transition-colors">
                <span>View full UX case</span>
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Progress Bar & Floating Sound Toggle Widget */}
      <div className="w-full px-6 sm:px-14 md:px-20 mt-8 flex items-center justify-between gap-6">
        {/* Custom Horizontal Progress Bar matching ryanwalter.work */}
        <div className="flex-1 max-w-xl mx-auto h-[3px] bg-black/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-black/80 rounded-full transition-all duration-150"
            style={{ width: `${Math.max(12, scrollProgress)}%` }}
          />
        </div>

        {/* Audio Toggle Widget in bottom right */}
        <button
          onClick={toggleSound}
          title={isMuted ? 'Turn Sound On' : 'Turn Sound Off'}
          className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex-shrink-0"
        >
          {isMuted ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
};
