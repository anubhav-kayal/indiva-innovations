import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Spotlight from './components/Spotlight';
import Stats from './components/Stats';
import Applications from './components/Applications';
import Specs from './components/Specs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Factory from './components/Factory';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import ContactForm from './components/ContactForm';
import BackToTop from './components/BackToTop';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="overflow-x-hidden selection:bg-orange-200 dark:selection:bg-orange-500/30 selection:text-orange-900 dark:selection:text-orange-200 min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <Navbar />
      <main>
        <Hero onContactOpen={() => setContactOpen(true)} />
        <Spotlight />
        <Stats />
        <Applications />
        <Specs />
        <Gallery />
        <Testimonials />
        <Factory />
        <FAQ />
      </main>
      <Footer />
      <FloatingContact onContactOpen={() => setContactOpen(true)} />
      <ContactForm isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <BackToTop />
    </div>
  );
}
