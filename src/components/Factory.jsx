import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Factory() {
  const { t } = useLanguage();

  const benefits = [
    t.factory.feature1,
    t.factory.feature2,
    t.factory.feature3,
    t.factory.feature4,
  ];

  return (
    <section id="factory" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 dark:bg-slate-950 rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row items-center gap-10 md:gap-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 md:w-96 h-64 md:h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            className="lg:w-1/2 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white tracking-tight">
              {t.factory.title1}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                {t.factory.title2}
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-300 mb-8 md:mb-10 font-light leading-relaxed">
              {t.factory.desc}
            </p>

            <ul className="space-y-4 md:space-y-5">
              {benefits.map((text, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 md:gap-4 text-slate-200 font-medium text-sm md:text-base"
                >
                  <CheckCircle className="text-orange-500 shrink-0 mt-0.5" size={20} />
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="lg:w-1/2 w-full h-64 md:h-[450px] bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-slate-950 rounded-2xl md:rounded-3xl overflow-hidden relative border border-slate-700 z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 md:p-8 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-500/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <MapPin size={32} className="text-orange-500 md:w-10 md:h-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{t.factory.mapTitle}</h3>
              <p className="text-slate-400 max-w-xs text-sm md:text-base">
                {t.factory.mapDesc}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Manufacturing Active
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
