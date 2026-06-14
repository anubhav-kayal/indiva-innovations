import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Event Manager, Delhi NCR',
    content: 'We ordered 15 units for a wedding season. The cooling was exceptional even in 45°C heat. Absolute game changer for outdoor events.',
    rating: 5,
  },
  {
    name: 'Priya Verma',
    role: 'Banquet Owner, Lucknow',
    content: 'The build quality is outstanding. After 8 months of heavy use, not a single issue. Highly recommend for commercial setups.',
    rating: 5,
  },
  {
    name: 'Amit Singh',
    role: 'Religious Trust Manager, Varanasi',
    content: 'Perfect for large gatherings. Silent operation means no disturbance during ceremonies. Pan-India service is a huge plus.',
    rating: 5,
  },
];

export default function Testimonials() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            {t.testimonials.title}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-light">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-xl dark:shadow-slate-900/30 border border-slate-200 dark:border-slate-700"
            >
              <Quote className="text-orange-500/20 dark:text-orange-500/10 mb-4" size={48} />
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                "{testimonials[current].content}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonials[current].role}
                  </p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:shadow-md"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'bg-orange-500 w-8'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:shadow-md"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
