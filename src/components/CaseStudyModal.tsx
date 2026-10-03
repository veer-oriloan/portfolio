import React, { useEffect } from 'react';
import { CaseStudy } from '../data/portfolioData';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onSelectNext,
  onSelectPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectNext();
      if (e.key === 'ArrowLeft') onSelectPrev();
    };

    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose, onSelectNext, onSelectPrev]);

  if (!caseStudy) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/60 backdrop-blur-md transition-opacity duration-300 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-black/10 bg-[#FAF9F6] sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: caseStudy.accentColor }}
            />
            <span className="text-xs uppercase tracking-wider text-black/60 font-medium">
              Case Study • {caseStudy.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onSelectPrev}
              title="Previous Case Study (←)"
              className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={onSelectNext}
              title="Next Case Study (→)"
              className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              →
            </button>
            <button
              onClick={onClose}
              title="Close (Esc)"
              className="ml-2 w-8 h-8 rounded-full bg-black/5 hover:bg-black hover:text-white flex items-center justify-center transition-colors cursor-pointer font-bold text-sm"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-10">
          {/* Hero Heading */}
          <div>
            <div className="text-xs uppercase font-mono tracking-widest text-black/50 mb-2">
              {caseStudy.location} • {caseStudy.year} • {caseStudy.role}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-3">
              {caseStudy.title}
            </h2>
            <p className="text-lg sm:text-xl text-black/70 font-normal leading-relaxed">
              {caseStudy.tagline}
            </p>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-black/5">
            {caseStudy.impactMetrics.map((metric, i) => (
              <div key={i} className="text-center sm:text-left">
                <div
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: caseStudy.accentColor }}
                >
                  {metric.value}
                </div>
                <div className="text-xs text-black/60 font-medium mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Project Overview */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-black/50">
              Overview
            </h3>
            <p className="text-base sm:text-lg text-black/80 leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          {/* The Problem & The Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-red-200 bg-red-50/50 space-y-2">
              <div className="text-xs uppercase font-bold tracking-wider text-red-600 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                The Challenge
              </div>
              <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="p-6 rounded-xl border border-blue-200 bg-blue-50/50 space-y-2">
              <div className="text-xs uppercase font-bold tracking-wider text-blue-600 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                The Design Solution
              </div>
              <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Research & User Insights */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-black/50">
              Research & Behavioral Insights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.researchInsights.map((insight, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FAF9F6] border border-black/5 text-sm text-black/80 leading-relaxed"
                >
                  <span className="font-mono text-xs text-black/40 block mb-1">
                    Insight #{idx + 1}
                  </span>
                  {insight}
                </div>
              ))}
            </div>
          </div>

          {/* Key Features Breakdown */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-black/50">
              Core UX Features
            </h3>
            <div className="space-y-3">
              {caseStudy.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-black/10 hover:border-black/30 transition-colors bg-white flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
                >
                  <div className="sm:w-1/3 font-semibold text-black text-base">
                    {feat.title}
                  </div>
                  <div className="sm:w-2/3 text-sm text-black/70 leading-relaxed">
                    {feat.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA / Contact */}
          <div className="p-6 rounded-xl bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-lg">Interested in learning more?</h4>
              <p className="text-xs text-white/70">
                Let's discuss design architecture, user testing findings, and wireframes.
              </p>
            </div>
            <a
              href="mailto:veerajputji@gmail.com?subject=Regarding%20Case%20Study"
              className="px-5 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-white/90 transition-colors whitespace-nowrap cursor-pointer"
            >
              Discuss this project →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
