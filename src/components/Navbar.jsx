import React, { useState } from 'react';
import { Phone, Menu, X, Moon, Sun, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { dark, toggle } = useTheme();
  const { toggleLang, t } = useLanguage();

  const links = [
    { href: '#spotlight', label: t.nav.product },
    { href: '#specs', label: t.nav.specifications },
    { href: '#factory', label: t.nav.manufacturing },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm">II</span>
          </div>
          <span className="font-bold text-lg text-slate-900 dark:text-white">Indiva</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={toggleLang}
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group relative"
            aria-label="Toggle language"
          >
            <Languages size={18} />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-medium bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {t.languageToggle}
            </span>
          </button>

          <button
            onClick={toggle}
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="tel:+919800500553"
            className="hidden sm:flex group bg-slate-900 dark:bg-orange-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-orange-600 dark:hover:bg-orange-700 transition-all items-center gap-2 shadow-md hover:shadow-lg"
          >
            <Phone size={15} className="group-hover:animate-pulse" />
            <span className="text-sm">+91 98005 00553</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+919800500553"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-700 text-white w-full py-3.5 rounded-xl font-bold mt-2 shadow-lg"
              >
                <Phone size={18} /> {t.nav.call}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
