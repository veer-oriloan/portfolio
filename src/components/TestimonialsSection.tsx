import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="relative z-10 w-full min-h-screen bg-[#FAF9F6] py-24 sm:py-32 px-6 sm:px-12 md:px-20 border-t border-black/5"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-black/40 block mb-2">
            Endorsements :
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black">
            What People Say
          </h2>
          <p className="text-black/60 text-sm sm:text-base mt-2">
            Feedback from founders, engineering leaders, and teammates I've collaborated with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-black/5 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-200"
            >
              {/* Quote mark & text */}
              <div className="space-y-4">
                <span className="text-3xl font-serif text-black/20 block leading-none">
                  “
                </span>
                <p className="text-sm sm:text-base text-black/80 leading-relaxed font-normal italic">
                  {t.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-black/5">
                <div className="w-10 h-10 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-black">{t.name}</div>
                  <div className="text-xs text-black/50">
                    {t.role} • <span className="font-medium text-black/70">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
