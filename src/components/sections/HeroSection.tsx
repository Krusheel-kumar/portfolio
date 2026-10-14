"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calculator, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-14 sm:pt-40 sm:pb-18 md:pt-44 md:pb-20 overflow-hidden bg-[#FAFAFA] text-slate-900">
      
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[950px] h-[550px] bg-gradient-to-b from-indigo-100/60 via-purple-50/30 to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />
      </div>

      <div className="container mx-auto px-4 sm:px-8 max-w-5xl relative z-10 text-center">

        {/* Primary Headline - Strictly as requested in Master Prompt */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight text-slate-950 max-w-5xl mx-auto leading-[1.08] mb-6 pt-2"
        >
          We Build Digital Systems That{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Grow Your Business.
          </span>
        </motion.h1>

        {/* Supporting Subtitle - Strictly as requested in Master Prompt */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl text-slate-600 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          Custom websites, e-commerce stores, restaurant POS systems, AI automation, and business software built around your operations.
        </motion.p>

        {/* Action Buttons - Stacked on Mobile, Row on Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8 sm:mb-10"
        >
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex h-14 sm:h-16 items-center justify-center gap-2.5 rounded-full bg-slate-950 px-9 text-base font-bold text-white transition-all shadow-[0_6px_20px_rgba(15,23,42,0.22)] hover:bg-slate-800 hover:scale-[1.02] active:scale-98 cursor-pointer"
          >
            Explore Our Solutions
            <ArrowRight size={17} />
          </a>
          <Link
            to="/estimate"
            className="w-full sm:w-auto inline-flex h-14 sm:h-16 items-center justify-center gap-2.5 rounded-full bg-white border border-slate-300 px-9 text-base font-bold text-slate-800 hover:bg-slate-50 transition-all shadow-sm"
          >
            <Calculator size={18} className="text-indigo-600" />
            Estimate My Project
          </Link>
        </motion.div>

        {/* Direct WhatsApp Quick Chat Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex items-center justify-center"
        >
          <a
            href="https://wa.me/917794971935?text=Hi%20Krunnex%2C%20I'd%20like%20to%20discuss%20a%20project%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors"
          >
            <MessageCircle size={16} className="text-[#25D366]" />
            <span>Need immediate consultation? Chat on WhatsApp: <strong className="text-slate-900">+91 77949 71935</strong></span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
            <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              Avg. reply &lt; 15 mins
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
