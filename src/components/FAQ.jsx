import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Can it run on a portable generator?",
    answer: "Absolutely. With a highly efficient 550 Watt motor, the Indiva Storm 5000 is designed to run smoothly on standard venue generators without causing power trips."
  },
  {
    question: "How do you handle out-of-state shipping?",
    answer: "We use trusted freight partners for pan-India delivery. The coolers are securely packaged to prevent transit damage, and bulk orders receive subsidized shipping rates."
  },
  {
    question: "Are spare parts easily available locally?",
    answer: "Yes. Unlike imported units, we use industry-standard, high-grade components (like Uniflow pumps) that are easily replaceable and available in any major electrical market in India."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">Common Questions</h2>
          <p className="text-slate-500">Everything you need to know about bulk orders and operations.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-orange-500 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}