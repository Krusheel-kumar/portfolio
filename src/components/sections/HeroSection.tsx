"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Calculator, TrendingUp, ShoppingBag, 
  MessageCircle, Sparkles, Zap, Store, Layers, Globe 
} from "lucide-react";
import { useState } from "react";

/* ─── 3D Connected Digital Products Composition ───────────────────── */
function ConnectedDigitalProductsStage() {
  const [rotate, setRotate] = useState({ x: 6, y: -8 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only apply tilt on desktop screens
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: -(y / rect.height) * 12 + 4,
      y: (x / rect.width) * 16 - 6,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 6, y: -8 });
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto perspective-1000 py-4 sm:py-8 select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Soft Ambient Light Glow behind 3D Stage */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] md:w-[750px] h-[300px] sm:h-[450px] bg-gradient-to-tr from-indigo-200/50 via-cyan-100/50 to-emerald-100/40 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -z-10" />

      <motion.div
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="relative transform-3d rounded-3xl bg-white/95 border border-slate-200 shadow-[0_30px_70px_rgba(15,23,42,0.12)] p-4 sm:p-8 md:p-9 backdrop-blur-xl"
      >
        {/* Top Product Window Bar */}
        <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-slate-100 mb-6 sm:mb-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="ml-2 sm:ml-3 text-xs sm:text-sm font-semibold text-slate-500 tracking-wide truncate max-w-[140px] sm:max-w-none">
              krunnex.system/connected-ecosystem
            </span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold text-emerald-700">Connected Hub</span>
          </div>
        </div>

        {/* Multi-Product Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Main Module: Live Analytics & Revenue Hub */}
          <div className="md:col-span-7 bg-slate-50 rounded-2xl p-5 sm:p-7 border border-slate-100 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Direct Business Revenue</p>
                <div className="flex items-baseline gap-2.5 mt-1.5">
                  <span className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">₹1,48,250</span>
                  <span className="text-xs font-bold text-emerald-600 flex items-center">
                    <TrendingUp size={14} className="mr-0.5" /> +42%
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold bg-white px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 shadow-sm shrink-0">
                0% Commission
              </span>
            </div>

            {/* Smooth SVG Chart Graphic */}
            <div className="h-32 sm:h-40 w-full pt-3 relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradHero" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,80 Q50,65 100,50 T200,30 T300,10 L300,100 L0,100 Z"
                  fill="url(#chartGradHero)"
                />
                <path
                  d="M0,80 Q50,65 100,50 T200,30 T300,10"
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Connected Stream: E-commerce, Restaurant POS & AI Assistant */}
          <div className="md:col-span-5 flex flex-col gap-3 justify-center">
            
            {/* Restaurant POS & QR Table Item */}
            <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                  <Store size={18} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-950">Restaurant QR Table #48</p>
                  <p className="text-[11px] text-slate-500">Order sent to Kitchen (KOT)</p>
                </div>
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200 shrink-0">
                POS Active
              </span>
            </div>

            {/* E-Commerce Storefront Checkout Item */}
            <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <ShoppingBag size={18} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-950">E-Commerce Storefront</p>
                  <p className="text-[11px] text-slate-500">1-Click UPI Payment Confirmed</p>
                </div>
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                UPI Paid
              </span>
            </div>

            {/* AI WhatsApp Assistant Item */}
            <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-950">AI WhatsApp Assistant</p>
                  <p className="text-[11px] text-slate-500">Auto-replied in 1.8s</p>
                </div>
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200 shrink-0">
                24/7 AI
              </span>
            </div>

          </div>

        </div>
      </motion.div>
    </div>
  );
}

/* ─── Main Hero Section ────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 md:pt-48 md:pb-28 overflow-hidden bg-[#FAFAFA] text-slate-900">
      
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-indigo-100/60 via-violet-50/40 to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />
      </div>

      <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative z-10 text-center">
        
        {/* Top Minimal Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6 sm:mb-8"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />
          <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide">
            Next-Gen Digital Systems & Business Automation
          </span>
        </motion.div>

        {/* Primary Headline - Strictly as requested in Master Prompt */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-950 max-w-5xl mx-auto leading-[1.08] mb-6"
        >
          We Build Digital Systems That <span className="text-gradient-primary">Grow Your Business.</span>
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
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-14 sm:mb-20"
        >
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex h-15 sm:h-16 items-center justify-center gap-2.5 rounded-full bg-slate-950 px-9 text-base font-bold text-white transition-all shadow-[0_6px_20px_rgba(15,23,42,0.25)] hover:bg-slate-800 hover:scale-[1.02] active:scale-98"
          >
            Explore Our Solutions
            <ArrowRight size={17} />
          </a>
          <Link
            to="/estimate"
            className="w-full sm:w-auto inline-flex h-15 sm:h-16 items-center justify-center gap-2.5 rounded-full bg-white border border-slate-300 px-9 text-base font-bold text-slate-800 hover:bg-slate-50 transition-all shadow-sm"
          >
            <Calculator size={18} className="text-indigo-600" />
            Estimate My Project
          </Link>
        </motion.div>

        {/* Connected Digital Products Visual Composition */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <ConnectedDigitalProductsStage />
        </motion.div>

      </div>
    </section>
  );
}
