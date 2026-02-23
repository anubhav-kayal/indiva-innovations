import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Spotlight from './components/Spotlight';
import Applications from './components/Applications';
import Specs from './components/Specs';
import Factory from './components/Factory';
import FAQ from './components/FAQ'; 
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

export default function App() {
  return (
    <div className="font-sans text-slate-800 bg-[#fafafa] overflow-x-hidden selection:bg-orange-200 selection:text-orange-900">
      <Navbar />
      <main>
        <Hero />
        <Spotlight />
        <Applications />
        <Specs />
        <Factory />
        <FAQ /> 
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}