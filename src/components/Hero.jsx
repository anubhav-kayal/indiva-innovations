import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ChevronRight, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-16 min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[radial-gradient(circle,#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(circle,#334155_1px,transparent_1px)] bg-[length:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <motion.div
        className="lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 text-orange-700 dark:text-orange-400 font-semibold text-xs tracking-wide uppercase mb-6 md:mb-8"
        >
          <Zap size={14} />
          {t.hero.badge}
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
          {t.hero.title1}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
            {t.hero.title2}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
          {t.hero.desc}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <a
            href="#specs"
            className="group w-full sm:w-auto bg-slate-900 dark:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-orange-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/20 dark:shadow-orange-600/20"
          >
            {t.hero.cta}
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
            <Truck size={20} className="text-orange-500" />
            {t.hero.delivery}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="lg:w-1/2 relative w-full mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-orange-500/20 via-orange-300/10 to-transparent dark:from-orange-500/10 dark:via-orange-300/5 rounded-full blur-[100px] -z-10" />
        <div className="relative animate-float">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 dark:bg-orange-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-2xl" />
          <img
            src="/assets/ c1.png"
            alt="Indiva Commercial Cooler"
            className="w-full h-auto drop-shadow-2xl rounded-3xl object-cover border border-white/20 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/50"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      </motion.div>
    </section>
  );
}
