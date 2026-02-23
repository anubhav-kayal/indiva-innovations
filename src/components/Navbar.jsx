import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/50 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="Indiva Innovations" className="h-8 md:h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-sm font-semibold text-slate-600">
          <a href="#spotlight" className="hover:text-orange-600 transition-colors">Product</a>
          <a href="#specs" className="hover:text-orange-600 transition-colors">Specifications</a>
          <a href="#factory" className="hover:text-orange-600 transition-colors">Manufacturing</a>
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="tel:+919800500553" className="hidden sm:flex group bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-orange-600 transition-all duration-300 items-center gap-2 shadow-md">
            <Phone size={16} className="group-hover:animate-pulse" />
            <span>+91 98005 00553</span>
          </a>
          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4 shadow-xl">
          <a href="#spotlight" onClick={() => setIsOpen(false)} className="block font-medium text-slate-700">The Cooler</a>
          <a href="#specs" onClick={() => setIsOpen(false)} className="block font-medium text-slate-700">Specifications</a>
          <a href="#factory" onClick={() => setIsOpen(false)} className="block font-medium text-slate-700">Manufacturing</a>
          <a href="tel:+919800500553" className="flex items-center justify-center gap-2 bg-orange-600 text-white w-full py-3 rounded-xl font-bold mt-4">
            <Phone size={18} /> Call Now
          </a>
        </div>
      )}
    </nav>
  );
}