'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    if (activeSection === 'about') return <About />;
    if (activeSection === 'projects') return <Projects />;
    if (activeSection === 'contact') return <Contact />;
    return <Hero onNavigate={setActiveSection} />;
  };

  return (
    <>
      <Header currentSection={activeSection} onSectionChange={setActiveSection} />
      <main className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
