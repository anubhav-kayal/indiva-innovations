import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Droplets } from 'lucide-react';

export default function Spotlight() {
  return (
    <section id="spotlight" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-10 md:mb-16 md:flex justify-between items-end" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3 md:mb-4">The <span className="text-orange-600">Storm 5000</span></h2>
            <p className="text-lg md:text-xl text-slate-500 font-light">Uncompromising power for the toughest climates.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Main Image Span */}
          <motion.div className="md:col-span-2 row-span-2 rounded-3xl overflow-hidden relative group bg-slate-100 aspect-square md:aspect-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <img src="/assets/c2.jpeg" alt="Indiva Storm 5000 Detailed View" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => e.target.src='https://via.placeholder.com/800x600?text=Product+Shot'}/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold">Industrial Build Quality</h3>
              <p className="text-white/80 mt-1 md:mt-2 text-sm md:text-base">Designed for relentless 24/7 operation.</p>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div className="bg-blue-50/50 border border-blue-100 rounded-3xl p-6 md:p-8 hover:bg-blue-50 transition-colors" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-blue-600/30"><Wind size={20} className="md:w-6 md:h-6" /></div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">100+ Feet Air Throw</h3>
            <p className="text-slate-600 text-sm leading-relaxed">A massive 900 RPM motor ensures high-velocity cool air reaches the very back of the venue.</p>
          </motion.div>

          <motion.div className="bg-orange-50/50 border border-orange-100 rounded-3xl p-6 md:p-8 hover:bg-orange-50 transition-colors" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-orange-500/30"><Droplets size={20} className="md:w-6 md:h-6" /></div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">High-Density Honeycomb</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Thick cooling pads maximize water retention for rapid temperature drops in dry heat.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}