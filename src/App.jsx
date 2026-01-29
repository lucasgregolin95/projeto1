import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import Problems from './components/Problems';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Portfolio from './components/Portfolio';
import VideoSection from './components/VideoSection';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app" style={{
      transition: 'background-color 0.3s ease',
      minHeight: '100vh',
      position: 'relative',
      zIndex: 1
    }}>
      <Navbar />
      <Hero />
      <TargetAudience />
      <Problems />
      <Services />
      <Benefits />
      <Portfolio />
      <VideoSection />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
