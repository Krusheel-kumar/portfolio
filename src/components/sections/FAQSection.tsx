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
    <section className="bg-[#FAFAFA] text-slate-900 py-20 md:py-28 relative border-t border-slate-200/80">
      <div className="container px-5 md:px-10 mx-auto max-w-3xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-950 mt-2 mb-4">
            Clear Answers. Zero Confusion.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
            Everything you need to know about our engineering process, pricing, and handover.
          </p>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`border rounded-3xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? "bg-white border-indigo-400 shadow-md ring-2 ring-indigo-500/10"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-7 py-5 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className={`font-black text-lg md:text-xl pr-4 leading-snug ${
                    isOpen ? "text-slate-950" : "text-slate-800"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    isOpen
                      ? "bg-slate-950 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600"
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
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-7 md:px-8 pb-7 pt-1">
                        <div className="w-full h-[1px] bg-slate-100 mb-4" />
                        <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-normal">
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
