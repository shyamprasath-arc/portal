import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import HobbyProjects from './components/HobbyProjects';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navigation />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <HobbyProjects />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
