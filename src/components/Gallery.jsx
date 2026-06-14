import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const images = [
  { src: '/assets/c2.jpeg', alt: 'Storm 5000 Front View' },
  { src: '/assets/ c1.png', alt: 'Storm 5000 Side View' },
  { src: '/assets/c2.jpeg', alt: 'Storm 5000 Industrial Setup' },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            {t.gallery.title}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-light">{t.gallery.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(i)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  {t.gallery.title}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[70]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[80] flex items-center justify-center"
            >
              <div className="relative max-w-4xl w-full">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 z-10"
                >
                  <X size={24} />
                </button>
                <img
                  src={images[selected].src}
                  alt={images[selected].alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + images.length) % images.length); }}
                    className="p-2 m-2 text-white/80 hover:text-white bg-black/30 hover:bg-black/50 rounded-full transition-all"
                  >
                    <ChevronLeft size={28} />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % images.length); }}
                    className="p-2 m-2 text-white/80 hover:text-white bg-black/30 hover:bg-black/50 rounded-full transition-all"
                  >
                    <ChevronRight size={28} />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
