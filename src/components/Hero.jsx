import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ChevronRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-16">
      <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <motion.div className="lg:w-1/2 text-center lg:text-left" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 font-semibold text-xs tracking-wide uppercase mb-6 md:mb-8">
          <Zap size={14} className="text-orange-500" />
          Low Power • Generator Friendly
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
          Industrial Cooling for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">India's Events.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
          Heavy-duty. Commercial grade. Built to beat the intense heat of open lawns, banquets, and large gatherings across the nation.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <a href="#specs" className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/20">
            View Specs <ChevronRight size={18} />
          </a>
          <div className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 font-medium">
            <Truck size={20} className="text-orange-500" /> Pan-India Delivery
          </div>
        </div>
      </motion.div>
      
      <motion.div className="lg:w-1/2 relative w-full mt-8 lg:mt-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-300/30 rounded-full blur-[80px] -z-10"></div>
        <img src="/assets/ c1.png" alt="Indiva Commercial Cooler" className="w-full h-auto drop-shadow-2xl rounded-3xl object-cover border border-white/50" />
      </motion.div>
    </section>
  );
}