import React from 'react';
import { SKILLS_PILLARS, SKILLS_LISTS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative z-10 w-full min-h-screen bg-white py-24 sm:py-32 px-6 sm:px-12 md:px-20 border-t border-black/5"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-black/40 block mb-2">
            What and How :
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black">
            Skills & Tools
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {SKILLS_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 rounded-2xl bg-[#FAF9F6] border border-black/5 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* I do / I create / I use lists */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-8 border-t border-black/10">
          {/* I do */}
          <div>
            <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-black/40 mb-6">
              I do
            </h4>
            <ul className="space-y-3">
              {SKILLS_LISTS.iDo.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm sm:text-base text-black font-medium"
                >
                  <span className="text-black/40 text-xs">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* I create */}
          <div>
            <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-black/40 mb-6">
              I create
            </h4>
            <ul className="space-y-3">
              {SKILLS_LISTS.iCreate.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm sm:text-base text-black font-medium"
                >
                  <span className="text-black/40 text-xs">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* I use */}
          <div>
            <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-black/40 mb-6">
              I use
            </h4>
            <ul className="space-y-3">
              {SKILLS_LISTS.iUse.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm sm:text-base text-black font-medium"
                >
                  <span className="text-black/40 text-xs">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
