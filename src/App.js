import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="animate-fadeIn transition-all duration-1000">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
