"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, TrendingUp, ShoppingBag, CheckCircle2, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";

/* ─── 3D Interactive Isometric Product Stage ───────────────────── */
function Interactive3DStage() {
  const [rotate, setRotate] = useState({ x: 12, y: -16 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: -(y / rect.height) * 16 + 8,
      y: (x / rect.width) * 20 - 10,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 10, y: -12 });
  };

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto perspective-1000 py-6 select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Soft Ambient Light Glow behind 3D Stage */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-200/40 via-cyan-100/50 to-emerald-100/40 rounded-full blur-[80px] pointer-events-none -z-10" />

      <motion.div
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="relative transform-3d rounded-3xl bg-white/90 border border-slate-200/90 shadow-[0_30px_70px_rgba(15,23,42,0.12)] p-4 sm:p-7 backdrop-blur-xl transition-shadow"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-400/80" />
            <div className="w-3 h-3 rounded-full bg-amber-400/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
            <span className="ml-2 text-xs font-semibold text-slate-400 tracking-wide">krunnex.system/live-dashboard</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold text-emerald-700">Autopilot Active</span>
          </div>
        </div>

        {/* Dashboard Canvas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          
          {/* Main Chart Card */}
          <div className="md:col-span-7 bg-slate-50/80 rounded-2xl p-5 border border-slate-100 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Direct Business Revenue</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-extrabold text-slate-900 tracking-tight">₹1,48,250</span>
                  <span className="text-xs font-bold text-emerald-600 flex items-center">
                    <TrendingUp size={13} className="mr-0.5" /> +42% direct orders
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-medium bg-white px-2.5 py-1 rounded-lg border border-slate-200 text-slate-600 shadow-sm">
                0% Commission
              </span>
            </div>

            {/* Clean 3D Style SVG Chart Curve */}
            <div className="h-32 w-full pt-3 relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
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
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Right Column: Live Simulated Stream */}
          <div className="md:col-span-5 flex flex-col gap-3">
            
            {/* Live POS Card */}
            <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <ShoppingBag size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">QR Table Order #48</p>
                  <p className="text-[11px] text-slate-400">Paid via UPI · ₹720</p>
                </div>
              </div>
              <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                Instant POS
              </span>
            </div>

            {/* WhatsApp AI Auto-Reply Card */}
            <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">AI WhatsApp Flow</p>
                  <p className="text-[11px] text-slate-400">Order confirmed in 2s</p>
                </div>
              </div>
              <span className="text-[10px] font-extrabold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                24/7 AI
              </span>
            </div>

            {/* Loyalty Trigger Card */}
            <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 shrink-0">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Loyalty Cashback Sent</p>
                  <p className="text-[11px] text-slate-400">100 pts auto-credited</p>
                </div>
              </div>
              <span className="text-[10px] font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                Retention
              </span>
            </div>

          </div>

        </div>
      </motion.div>

      {/* Floating 3D Badge 1 - Left */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:flex items-center gap-2.5 absolute -left-6 top-1/3 bg-white/95 border border-slate-200/80 shadow-[0_15px_35px_rgba(0,0,0,0.08)] px-4 py-2.5 rounded-2xl backdrop-blur-md"
      >
        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
          <CheckCircle2 size={16} />
        </div>
        <div>
          <p className="text-xs font-bold text-slate-900">Zero App Commissions</p>
          <p className="text-[10px] text-slate-400">Save 25-30% on every order</p>
        </div>
      </motion.div>

      {/* Floating 3D Badge 2 - Right */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden lg:flex items-center gap-2.5 absolute -right-6 bottom-1/4 bg-white/95 border border-slate-200/80 shadow-[0_15px_35px_rgba(0,0,0,0.08)] px-4 py-2.5 rounded-2xl backdrop-blur-md"
      >
        <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-600">
          <Zap size={16} />
        </div>
        <div>
          <p className="text-xs font-bold text-slate-900">Lightning-Fast React</p>
          <p className="text-[10px] text-slate-400">Sub-second page speeds</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Main Hero Section ────────────────────────────────────────── */
export default function HeroSection() {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 400], [0, 60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.4]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#FAFAFA] text-slate-900">
      
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-indigo-100/70 via-violet-50/50 to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
      </div>

      <div className="container mx-auto px-5 md:px-10 max-w-6xl relative z-10 text-center">
        
        {/* Top Minimal Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-600" />
          <span className="text-xs font-semibold text-slate-700 tracking-wide">
            Next-Gen Digital Systems · Websites, Apps & Automation
          </span>
        </motion.div>

        {/* Primary Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-950 max-w-4xl mx-auto leading-[1.08] mb-6"
        >
          We build digital systems that <span className="text-gradient-primary">run and scale</span> your business.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          High-performance websites, zero-commission ordering, WhatsApp automation, and custom business software built from scratch.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3.5 items-center justify-center mb-16"
        >
          <Link
            to="/start-project"
            className="w-full sm:w-auto inline-flex h-13 items-center justify-center gap-2 rounded-full bg-slate-950 px-8 text-sm font-bold text-white transition-all shadow-[0_4px_16px_rgba(15,23,42,0.25)] hover:bg-slate-800 hover:scale-[1.02] active:scale-98"
          >
            Start Your Project
            <ArrowRight size={16} />
          </Link>
          <a
            href="https://wa.me/917794971935?text=Hi%20Krunnex%2C%20I%27d%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white border border-slate-200 px-8 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-all shadow-sm"
          >
            <MessageCircle size={17} className="text-[#25D366]" />
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
