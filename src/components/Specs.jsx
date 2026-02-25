import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Droplets, Shield, Wind } from 'lucide-react';

export default function Specs() {
  const specifications = [
    { label: "Motor Speed & Power", value: "900 RPM | 550 Watts", icon: Zap },
    { label: "Water Pump", value: "40 Watt (Uniflow Brand)", icon: Droplets },
    { label: "Tank Capacity", value: "110 Litre / 150 Litre / 200 Litre", icon: Shield },
    { label: "Cooling Media", value: "High-Density Honeycomb Pads", icon: Wind },
  ];

  return (
    <section id="specs" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-10 md:mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3 md:mb-4">Technical Specifications</h2>
          <p className="text-base md:text-lg text-slate-500 font-light">Everything you need to know for your commercial setup.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100"
        >
          <div className="divide-y divide-slate-100">
            {specifications.map((spec, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center p-5 md:p-8 hover:bg-slate-50/50 transition-colors">
                <div className="flex items-center gap-3 md:gap-4 sm:w-1/3 mb-2 sm:mb-0">
                  <spec.icon size={20} className="text-orange-500 shrink-0" />
                  <span className="font-semibold text-slate-900 text-sm md:text-base">{spec.label}</span>
                </div>
                <div className="sm:w-2/3 text-slate-600 sm:pl-8 text-sm md:text-base">
                  {spec.value}
                </div>
              </div>
            ))}
            <div className="flex flex-col sm:flex-row sm:items-center p-5 md:p-8 bg-orange-50/30">
              <div className="sm:w-1/3 mb-2 sm:mb-0 font-semibold text-slate-900 flex items-center gap-3 md:gap-4 text-sm md:text-base">
                <span className="w-5"></span> Pricing
              </div>
              <div className="sm:w-2/3 sm:pl-8 text-orange-600 font-bold text-base md:text-lg">
                Call for Bulk/B2B Pricing
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}