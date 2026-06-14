import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-white dark:bg-slate-950 pt-16 md:pt-24 pb-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/assets/logo.svg"
                alt="Indiva Innovations"
                className="h-10 w-auto object-contain transition-[filter] dark:invert"
              />
              <span className="font-bold text-xl text-slate-900 dark:text-white">Indiva</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              {t.footer.desc}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: t.nav.product, href: '#spotlight' },
                { label: t.nav.specifications, href: '#specs' },
                { label: t.nav.manufacturing, href: '#factory' },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919800500553"
                  className="text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Phone size={14} className="text-orange-500" />
                  +91 98005 00553
                </a>
              </li>
              <li>
                <a
                  href="mailto:Contact@indivainnovations.com"
                  className="text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Mail size={14} className="text-orange-500" />
                  Contact@indivainnovations.com
                </a>
              </li>
              <li className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2">
                <MapPin size={14} className="text-orange-500" />
                Varanasi, India
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-6">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-orange-100 dark:hover:bg-orange-500/20 hover:text-orange-600 dark:hover:text-orange-400 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">
          <p>
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p className="flex items-center gap-1">
            {t.footer.made}{' '}
            <span className="text-orange-500 inline-block animate-pulse">♥</span>{' '}
            {t.footer.inCity}
          </p>
          <button
            onClick={scrollToTop}
            className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors text-xs font-semibold"
          >
            {t.backToTop} ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
