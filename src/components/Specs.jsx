import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Droplets, Shield, Wind } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Specs() {
  const { t } = useLanguage();

  const specifications = [
    { label: t.specs.motor, value: t.specs.motorVal, icon: Zap },
    { label: t.specs.pump, value: t.specs.pumpVal, icon: Droplets },
    { label: t.specs.tank, value: t.specs.tankVal, icon: Shield },
    { label: t.specs.cooling, value: t.specs.coolingVal, icon: Wind },
  ];

  return (
    <section id="specs" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 text-xs font-semibold tracking-wide uppercase mb-4">
            {t.specs.title}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3 md:mb-4">
            {t.specs.title}
          </h2>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-light">
            {t.specs.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800/80 rounded-3xl shadow-xl dark:shadow-slate-900/30 overflow-hidden border border-slate-200 dark:border-slate-700"
        >
          <div className="divide-y divide-slate-100 dark:divide-slate-700">
            {specifications.map((spec, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center p-5 md:p-8 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
              >
                <div className="flex items-center gap-3 md:gap-4 sm:w-1/3 mb-2 sm:mb-0">
                  <spec.icon size={20} className="text-orange-500 shrink-0" />
                  <span className="font-semibold text-slate-900 dark:text-white text-sm md:text-base">
                    {spec.label}
                  </span>
                </div>
                <div className="sm:w-2/3 text-slate-600 dark:text-slate-400 sm:pl-8 text-sm md:text-base">
                  {spec.value}
                </div>
              </div>
            ))}
            <div className="flex flex-col sm:flex-row sm:items-center p-5 md:p-8 bg-gradient-to-r from-orange-50 to-orange-50/30 dark:from-orange-500/5 dark:to-transparent">
              <div className="sm:w-1/3 mb-2 sm:mb-0 font-semibold text-slate-900 dark:text-white flex items-center gap-3 md:gap-4 text-sm md:text-base">
                <span className="w-5" />
                {t.specs.pricing}
              </div>
              <div className="sm:w-2/3 sm:pl-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 font-bold text-base md:text-lg">
                {t.specs.pricingVal}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
