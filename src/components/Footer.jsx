import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-16 md:pt-24 pb-24 md:pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight text-slate-900">Equip your next major event.</h2>
        <p className="text-base md:text-lg text-slate-500 mb-10 md:mb-12 max-w-2xl mx-auto font-light">Contact us today to discuss bulk orders, pan-India logistics, and dealership inquiries for the upcoming season.</p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 md:mb-20">
          <a href="tel:+919800500553" className="w-full sm:w-auto bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-base md:text-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 flex items-center justify-center gap-3">
            <Phone size={20} /> +91 98005 00553
          </a>
          <a href="mailto:Contact@indivainnovations.com" className="w-full sm:w-auto bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-semibold text-base md:text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-3">
            <Mail size={20} /> Email Sales Team
          </a>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Indiva Innovations. All rights reserved.</p>
          <p className="flex items-center gap-1">Made with <span className="text-orange-500">♥</span> in Varanasi, India.</p>
        </div>
      </div>
    </footer>
  );
}