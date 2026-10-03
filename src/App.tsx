import React, { useState } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CraftSection } from './components/CraftSection';
import { SkillsSection } from './components/SkillsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CASE_STUDIES, CaseStudy } from './data/portfolioData';

export const App: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const handleSelectCaseStudy = (study: CaseStudy) => {
    setSelectedCaseStudy(study);
  };

  const handleCloseModal = () => {
    setSelectedCaseStudy(null);
  };

  const handleNextCaseStudy = () => {
    if (!selectedCaseStudy) return;
    const currentIndex = CASE_STUDIES.findIndex((c) => c.id === selectedCaseStudy.id);
    const nextIndex = (currentIndex + 1) % CASE_STUDIES.length;
    setSelectedCaseStudy(CASE_STUDIES[nextIndex]);
  };

  const handlePrevCaseStudy = () => {
    if (!selectedCaseStudy) return;
    const currentIndex = CASE_STUDIES.findIndex((c) => c.id === selectedCaseStudy.id);
    const prevIndex = (currentIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length;
    setSelectedCaseStudy(CASE_STUDIES[prevIndex]);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#FAF9F6] text-black">
      {/* Background Video for Hero */}
      <BackgroundVideo />

      {/* Fixed Navbar with Section Navigation */}
      <Navbar />

      {/* Main Flow */}
      <main className="relative z-10">
        {/* 1. Hero Landing Page */}
        <Hero />

        {/* 2. Craft i'm proud of (Taped Paper Gallery inspired by ryanwalter.work) */}
        <CraftSection onSelectCaseStudy={handleSelectCaseStudy} />

        {/* 3. Skills & Tools */}
        <SkillsSection />

        {/* 4. Testimonials / Endorsements */}
        <TestimonialsSection />

        {/* 5. About Me & Timeline */}
        <AboutSection />

        {/* 6. Contact & Footer */}
        <ContactSection />
      </main>

      {/* In-depth Interactive Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={handleCloseModal}
        onSelectNext={handleNextCaseStudy}
        onSelectPrev={handlePrevCaseStudy}
      />
    </div>
  );
};

export default App;
