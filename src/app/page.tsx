'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="neobrutalist py-8 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="neobrutalist-h1 flicker-animation">PORTFOLIO</h1>
            <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        {activeSection === 'home' && <Hero />}

        {/* About Section */}
        {activeSection === 'about' && <About />}

        {/* Projects Section */}
        {activeSection === 'projects' && <Projects />}

        {/* Contact Section */}
        {activeSection === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <footer className="neobrutalist bg-black text-white py-8 border-t-4 border-white">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© {new Date().getFullYear()} DEEPANKAR SAHOO. ALL RIGHTS RESERVED.</p>
          <p>SOFTWARE ENGINEER & FULLSTACK DEVELOPER</p>
        </div>
      </footer>
    </div>
  );
}