"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Do I need to know about technology to work with you?",
    answer: "Absolutely not. My job is to handle all the complex technical details. You just need to tell me what business problem you want to solve, and I will translate that into a working software solution."
  },
  {
    question: "How long does a typical project take?",
    answer: "It depends on the complexity. A custom restaurant ordering system or business dashboard typically takes 4 to 8 weeks from discovery to launch. We will establish a clear timeline before we start."
  },
  {
    question: "How much does custom software cost?",
    answer: "Custom solutions are an investment in your business's efficiency and growth. Projects typically start at ₹30,000. During our initial consultation, I will provide a transparent, fixed-price quote based on your exact requirements."
  },
  {
    question: "Will I get ongoing support after the software is launched?",
    answer: "Yes. I offer ongoing maintenance and support packages to ensure your software continues to run smoothly and scales seamlessly as your business grows."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-black text-white py-24 md:py-32 relative border-t border-white/5">
      <div className="container px-4 mx-auto max-w-4xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-white/50">Clarity & Transparency</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Common Questions.</h3>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Everything you need to know about partnering with Krusheel Tech.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'bg-[#111] border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.03)]' 
                    : 'bg-[#0a0a0a] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-6 md:px-8 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className={`font-bold text-lg md:text-xl pr-8 transition-colors ${isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors border ${
                    isOpen 
                      ? 'bg-white text-black border-white' 
                      : 'bg-transparent text-white/50 border-white/20 group-hover:border-white/50 group-hover:text-white'
                  }`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2">
                        <div className="w-full h-[1px] bg-white/10 mb-6" />
                        <p className="text-white/60 leading-relaxed font-medium md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

