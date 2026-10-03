import React from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full select-auto overflow-hidden">
      {/* Background Video */}
      <BackgroundVideo />

      {/* Fixed Navbar & Mobile Overlay */}
      <Navbar />

      {/* Main Hero Content */}
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
