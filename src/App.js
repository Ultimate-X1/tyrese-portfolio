import React, { useEffect } from 'react';
import './App.css';
import './styles/components.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => {
    // Update scroll progress indicator
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;

      const scrollIndicator = document.querySelector('.scroll-indicator');
      if (scrollIndicator) {
        scrollIndicator.style.width = `${scrollProgress}%`;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', updateScrollProgress);

    // Initial call
    updateScrollProgress();

    // Cleanup
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="App min-h-screen">
      {/* Progress Indicator */}
      <div className="scroll-indicator" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;