import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative z-10 w-full min-h-screen bg-white py-24 sm:py-32 px-6 sm:px-12 md:px-20 border-t border-black/5"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-black/40 block mb-2">
            Who am I :
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black">
            About Me
          </h2>
        </div>

        {/* Bio & Intro Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-medium text-black leading-snug">
              I'm Veer, <br />
              <span className="font-bold">a Delhi-based Product designer.</span>
            </h3>

            <p className="text-base sm:text-lg text-black/80 leading-relaxed">
              I design clear, user-first experiences that don't confuse people. I combine systems thinking with tactile design craft to turn complex product requirements into simple, delightful interfaces.
            </p>

            <p className="text-sm text-black/60 italic leading-relaxed">
              Learned from trails 🏔️, Delhi traffic 🚦, and late-night gaming sessions 🎮.
            </p>

            {/* Resume Action */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black text-white text-xs sm:text-sm font-semibold hover:bg-black/80 transition-all shadow-sm"
              >
                <span>Download Resume (PDF)</span>
                <span>↓</span>
              </a>
            </div>
          </div>

          {/* Recent Jobs / Work History Timeline */}
          <div className="md:col-span-6 md:pl-8 space-y-6">
            <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-black/40">
              Recent jobs /
            </h4>

            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FAF9F6] border border-black/5 space-y-2 hover:border-black/20 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base sm:text-lg text-black">
                      {exp.role}
                    </span>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                        exp.isCurrent
                          ? 'bg-emerald-100 text-emerald-800 font-semibold'
                          : 'bg-black/5 text-black/60'
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-black/60">
                    {exp.company}
                  </div>

                  <p className="text-xs sm:text-sm text-black/70 leading-relaxed pt-1">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
