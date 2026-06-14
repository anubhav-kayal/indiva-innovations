import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Droplets, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Spotlight() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t.spotlight.card1title,
      desc: t.spotlight.card1desc,
      color: 'blue',
    },
    {
      icon: Wind,
      title: t.spotlight.card2title,
      desc: t.spotlight.card2desc,
      color: 'orange',
    },
    {
      icon: Droplets,
      title: t.spotlight.card3title,
      desc: t.spotlight.card3desc,
      color: 'teal',
    },
  ];

  return (
    <section id="spotlight" className="py-16 md:py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-3 md:mb-4">
            {t.spotlight.title}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
              {t.spotlight.brand}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light">
            {t.spotlight.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <motion.div
            className="md:col-span-2 row-span-2 rounded-3xl overflow-hidden relative group bg-slate-100 dark:bg-slate-800 aspect-square md:aspect-auto border border-slate-200 dark:border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/c2.jpeg"
              alt="Indiva Storm 5000 Detailed View"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold">{t.spotlight.card1title}</h3>
              <p className="text-white/80 mt-1 md:mt-2 text-sm md:text-base">
                {t.spotlight.card1desc}
              </p>
            </div>
          </motion.div>

          {features.slice(1).map((feature, i) => (
            <motion.div
              key={i}
              className={`rounded-3xl p-6 md:p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                feature.color === 'orange'
                  ? 'bg-orange-50/50 dark:bg-orange-500/5 border-orange-100 dark:border-orange-500/20 hover:bg-orange-50 dark:hover:bg-orange-500/10'
                  : 'bg-blue-50/50 dark:bg-blue-500/5 border-blue-100 dark:border-blue-500/20 hover:bg-blue-50 dark:hover:bg-blue-500/10'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.1 }}
            >
              <div
                className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg ${
                  feature.color === 'orange'
                    ? 'bg-orange-500 text-white shadow-orange-500/30'
                    : 'bg-blue-600 text-white shadow-blue-600/30'
                }`}
              >
                <feature.icon size={20} className="md:w-6 md:h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
