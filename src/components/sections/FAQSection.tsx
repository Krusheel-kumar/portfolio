"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    question: "Do I need to understand technology to work with you?",
    answer: "Not at all. Our job is to handle every technical detail so you don't have to. You tell us your business problem — what's slowing you down, what you wish was automated, what you want customers to experience — and we translate that into a working software solution."
  },
  {
    question: "How long does a typical project take?",
    answer: "It depends on complexity. A custom restaurant ordering system, business dashboard, or WhatsApp automation setup typically takes 4 to 8 weeks from discovery to launch. We establish a clear timeline before we start, and we stick to it."
  },
  {
    question: "How much does custom software cost?",
    answer: "Projects start from ₹25,000 for premium websites and go up based on complexity — backend systems, AI, automation, and integrations each add scope. During our initial consultation, we provide a transparent, fixed-price quote based on your exact requirements. No surprises."
  },
  {
    question: "What makes Krunnex different from a regular web agency?",
    answer: "Most agencies deliver websites. We deliver working business systems. Every project includes a digital strategy, custom code (no templates), business-specific integrations, and post-launch support. We measure success by the revenue and efficiency your system generates — not by how the homepage looks."
  },
  {
    question: "Do you handle WhatsApp automation and AI chatbots?",
    answer: "Yes — this is one of our core specialties. We build custom WhatsApp flows using the official WhatsApp Business API: automated order confirmations, loyalty rewards, customer re-engagement campaigns, and AI chatbots that answer questions 24/7. No third-party chatbot platforms — everything is built specifically for your business."
  },
  {
    question: "What happens after the project is launched?",
    answer: "We offer ongoing maintenance and support packages for all projects. This covers performance monitoring, security updates, feature additions, and scaling as your business grows. You'll never be left alone with a system you don't understand."
  },
  {
    question: "Can you build on top of existing software we already use?",
    answer: "Absolutely. We integrate with most business tools — existing POS systems, payment gateways, accounting software, CRMs, and more. If something can be connected via API, we can build around it."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#030712] text-white py-24 md:py-32 relative border-t border-white/5">
      <div className="container px-5 md:px-10 mx-auto max-w-3xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-18"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-white/40">Clarity & Transparency</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Common Questions.
          </h2>
          <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto font-medium">
            Everything you need to know before partnering with Krunnex.
          </p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "bg-white/6 border-white/25"
                    : "bg-white/[0.03] border-white/8 hover:border-white/15"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 md:px-7 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className={`font-bold text-base md:text-lg pr-6 leading-snug transition-colors ${
                    isOpen ? "text-white" : "text-white/75 group-hover:text-white"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all border ${
                    isOpen
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-white/40 border-white/15 group-hover:border-white/35 group-hover:text-white"
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-7 pb-6 pt-1">
                        <div className="w-full h-[1px] bg-white/8 mb-5" />
                        <p className="text-white/60 leading-relaxed text-sm md:text-base font-medium">
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
