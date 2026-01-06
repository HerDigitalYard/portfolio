// App.tsx
import { useEffect } from 'react';
import { gsap } from './lib/gsap';
import Hero from './components/sections/Hero';
import WorkExperience from './components/sections/WorkExperience';
import { Footer } from './components/layout/Footer';

function App() {
  useEffect(() => {
    // Initialize GSAP
    gsap.config({
      force3D: true,
    });
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
