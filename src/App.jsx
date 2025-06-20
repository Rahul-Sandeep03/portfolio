import React, { useEffect } from 'react';
import NavigationBar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;