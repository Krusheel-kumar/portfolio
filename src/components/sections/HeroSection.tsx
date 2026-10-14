"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, TrendingUp, ShoppingBag, CheckCircle2, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";

/* ─── 3D Interactive Isometric Product Stage ───────────────────── */
function Interactive3DStage() {
  const [rotate, setRotate] = useState({ x: 10, y: -12 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: -(y / rect.height) * 14 + 6,
      y: (x / rect.width) * 18 - 8,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 8, y: -10 });
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto perspective-1000 py-8 select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Soft Ambient Light Glow behind 3D Stage */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-indigo-200/50 via-cyan-100/60 to-emerald-100/50 rounded-full blur-[100px] pointer-events-none -z-10" />

      <motion.div
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="relative transform-3d rounded-3xl bg-white/95 border border-slate-200 shadow-[0_35px_80px_rgba(15,23,42,0.14)] p-4 sm:p-9 backdrop-blur-xl transition-shadow"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-slate-100 mb-6 sm:mb-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="ml-2 sm:ml-3 text-xs sm:text-sm font-semibold text-slate-500 tracking-wide truncate max-w-[130px] sm:max-w-none">krunnex.system/live-dashboard</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold text-emerald-700">Autopilot Active</span>
          </div>
        </div>

        {/* Dashboard Canvas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Chart Card */}
          <div className="md:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-100 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Direct Business Revenue</p>
                <div className="flex items-baseline gap-2.5 mt-1.5">
                  <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">₹1,48,250</span>
                  <span className="text-xs font-bold text-emerald-600 flex items-center">
                    <TrendingUp size={15} className="mr-0.5" /> +42%
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold bg-white px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 shadow-sm">
                0% Commission
              </span>
            </div>

            {/* Clean 3D Style SVG Chart Curve */}
            <div className="h-40 w-full pt-4 relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,80 Q50,65 100,50 T200,30 T300,10 L300,100 L0,100 Z"
                  fill="url(#chartGrad)"
                />
                <path
                  d="M0,80 Q50,65 100,50 T200,30 T300,10"
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Right Column: Live Simulated Stream */}
          <div className="md:col-span-5 flex flex-col gap-3.5 justify-center">
            
            {/* Live POS Card */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-950">QR Table Order #48</p>
                  <p className="text-xs text-slate-500">Paid via UPI · ₹720</p>
                </div>
              </div>
              <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                Instant POS
              </span>
            </div>

            {/* WhatsApp AI Auto-Reply Card */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-950">AI WhatsApp Flow</p>
                  <p className="text-xs text-slate-500">Auto-confirmed in 2s</p>
                </div>
              </div>
              <span className="text-xs font-extrabold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                24/7 AI
              </span>
            </div>

            {/* Loyalty Trigger Card */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 shrink-0">
                  <Sparkles size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-950">Loyalty Rewards</p>
                  <p className="text-xs text-slate-500">100 pts auto-credited</p>
                </div>
              </div>
              <span className="text-xs font-extrabold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                Retention
              </span>
            </div>

          </div>

        </div>
      </motion.div>

      {/* Floating 3D Badge 1 - Left */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:flex items-center gap-3 absolute -left-8 top-1/3 bg-white border border-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.08)] px-5 py-3.5 rounded-2xl backdrop-blur-md"
      >
        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
          <CheckCircle2 size={18} />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-950">Zero App Commissions</p>
          <p className="text-xs text-slate-500">Save 25-30% on every order</p>
        </div>
      </motion.div>

      {/* Floating 3D Badge 2 - Right */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden lg:flex items-center gap-3 absolute -right-8 bottom-1/4 bg-white border border-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.08)] px-5 py-3.5 rounded-2xl backdrop-blur-md"
      >
        <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-600">
          <Zap size={18} />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-950">Lightning-Fast React</p>
          <p className="text-xs text-slate-500">Sub-second page speeds</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Main Hero Section ────────────────────────────────────────── */
export default function HeroSection() {
  const { scrollY } = useScroll();

  return (
    <section className="relative pt-36 sm:pt-48 md:pt-52 pb-20 md:pb-36 overflow-hidden bg-[#FAFAFA] text-slate-900">
      
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-indigo-100/70 via-violet-50/50 to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="container mx-auto px-5 md:px-10 max-w-7xl relative z-10 text-center">
        
        {/* Top Minimal Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
          <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide">
            Next-Gen Digital Systems · Websites, Apps & Automation
          </span>
        </motion.div>

        {/* Primary Headline - Zoomed & Bold */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-slate-950 max-w-5xl mx-auto leading-[1.05] mb-8"
        >
          We build digital systems that <span className="text-gradient-primary">run and scale</span> your business.
        </motion.h1>

        {/* Sub-headline - Larger & Clear */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          High-performance websites, zero-commission ordering, WhatsApp automation, and custom business software built from scratch.
        </motion.p>

        {/* Action Buttons - Prominent & Zoomed */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16 sm:mb-20"
        >
          <Link
            to="/start-project"
            className="w-full sm:w-auto inline-flex h-14 sm:h-15 items-center justify-center gap-2.5 rounded-full bg-slate-950 px-10 text-base font-bold text-white transition-all shadow-[0_6px_20px_rgba(15,23,42,0.3)] hover:bg-slate-800 hover:scale-[1.02] active:scale-98"
          >
            Start Your Project
            <ArrowRight size={18} />
          </Link>
          <a
            href="https://wa.me/917794971935?text=Hi%20Krunnex%2C%20I%27d%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex h-14 sm:h-15 items-center justify-center gap-2.5 rounded-full bg-white border border-slate-300 px-9 text-base font-bold text-slate-800 hover:bg-slate-50 transition-all shadow-sm"
          >
            <MessageCircle size={19} className="text-[#25D366]" />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* 3D Interactive Stage Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Interactive3DStage />
        </motion.div>

      </div>
    </section>
  );
}
