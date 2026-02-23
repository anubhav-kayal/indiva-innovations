import React from 'react';
import { motion } from 'framer-motion';

export default function Applications() {
  const cases = [
    { title: "Marriage Lawns", desc: "Keep massive outdoor crowds comfortable in peak summer.", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop" },
    { title: "Banquet Halls", desc: "Rapid, high-volume cooling for large indoor spaces.", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop" },
    { title: "Religious Gatherings", desc: "Silent operation combined with maximum airflow.", img: "/public/assets/image.png" }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 tracking-tight">One Machine. <span className="text-orange-500">Multiple Uses.</span></h2>
          <p className="text-base md:text-lg text-slate-400 font-light max-w-2xl mx-auto">Engineered to adapt to any large-scale environment.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="relative group overflow-hidden rounded-3xl aspect-[4/5] border border-slate-700/50"
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-700 opacity-60 md:group-hover:opacity-40" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-slate-950 via-slate-900/80 md:via-slate-900/60 to-transparent">
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                <p className="text-slate-300 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}