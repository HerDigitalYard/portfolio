// src/App.tsx
import { useEffect } from 'react';
import Hero from './components/sections/Hero';
import WorkExperience from './components/sections/WorkExperience';
import { Footer } from './components/layout/Footer';
import { gsap, ScrollTrigger } from './lib/gsap';
import './styles/globals.css';

function App() {
  useEffect(() => {
    // Configure GSAP
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    });

    // Refresh ScrollTrigger after a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <Hero />
      <WorkExperience />
      <Footer />
    </div>
  );
}

export default App;
