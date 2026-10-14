"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Calculator, TrendingUp, ShoppingBag, 
  MessageCircle, Sparkles, Zap, Store, Layers, Globe,
  ShieldCheck, Clock, CheckCircle2, Cpu, Printer, Server
} from "lucide-react";
import { useState } from "react";

/* ─── 3D Connected Digital Products Composition ───────────────────── */
function ConnectedDigitalProductsStage() {
  const [rotate, setRotate] = useState({ x: 5, y: -6 });
  const [timeframe, setTimeframe] = useState<"today" | "7d" | "30d">("today");

  const timeframeData = {
    today: {
      revenue: "₹48,250",
      orders: "38 Direct Orders",
      growth: "+34% vs yesterday",
      savedCommission: "₹9,650 saved on commissions",
      path: "M0,75 Q50,60 100,55 T200,35 T300,15",
      fillPath: "M0,75 Q50,60 100,55 T200,35 T300,15 L300,100 L0,100 Z"
    },
    "7d": {
      revenue: "₹3,42,800",
      orders: "264 Direct Orders",
      growth: "+48% this week",
      savedCommission: "₹68,500 saved on commissions",
      path: "M0,80 Q50,70 100,45 T200,25 T300,10",
      fillPath: "M0,80 Q50,70 100,45 T200,25 T300,10 L300,100 L0,100 Z"
    },
    "30d": {
      revenue: "₹14,92,000",
      orders: "1,180 Direct Orders",
      growth: "+56% this month",
      savedCommission: "₹2,98,400 saved on commissions",
      path: "M0,85 Q50,65 100,40 T200,20 T300,5",
      fillPath: "M0,85 Q50,65 100,40 T200,20 T300,5 L300,100 L0,100 Z"
    }
  };

  const currentData = timeframeData[timeframe];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: -(y / rect.height) * 10 + 3,
      y: (x / rect.width) * 14 - 5,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 5, y: -6 });
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto perspective-1000 py-4 sm:py-6 select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Soft Multi-Layered Ambient Light Behind 3D Stage */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] md:w-[820px] h-[320px] sm:h-[480px] bg-gradient-to-tr from-indigo-200/40 via-purple-100/30 to-blue-200/35 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10" />

      <motion.div
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: "spring", stiffness: 130, damping: 22 }}
        className="relative transform-3d rounded-3xl bg-white/95 border border-slate-200/90 shadow-[0_25px_60px_rgba(15,23,42,0.1)] p-5 sm:p-8 md:p-9 backdrop-blur-2xl"
      >
        {/* Top Product Window Bar */}
        <div className="flex flex-wrap items-center justify-between pb-4 sm:pb-5 border-b border-slate-100 mb-6 gap-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <div className="ml-2 sm:ml-3 flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg text-xs font-semibold text-slate-600">
              <Server size={12} className="text-indigo-600" />
              <span>krunnex.cloud/production-gateway</span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold text-emerald-800">Direct Gateway: 99.98% Live</span>
            </div>
            <span className="text-[11px] font-bold text-slate-500 hidden sm:inline">
              Latency: 18ms
            </span>
          </div>
        </div>

        {/* Multi-Product Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Main Module: Live Analytics & 0% Commission Hub */}
          <div className="md:col-span-7 bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/80 flex flex-col justify-between">
            <div>
              {/* Header with Timeframe Filter */}
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Direct Gross Business Revenue
                  </p>
                  <div className="flex items-baseline gap-2.5 mt-1">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
                      {currentData.revenue}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 flex items-center bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      <TrendingUp size={13} className="mr-0.5" /> {currentData.growth}
                    </span>
                  </div>
                </div>

                {/* Filter Toggles */}
                <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-xs text-xs font-bold">
                  {(["today", "7d", "30d"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTimeframe(t)}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        timeframe === t 
                          ? "bg-slate-950 text-white shadow-xs" 
                          : "text-slate-600 hover:text-slate-950"
                      }`}
                    >
                      {t.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Commission Saved Highlight */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-900 mb-2">
                <CheckCircle2 size={13} className="text-emerald-600" />
                <span>{currentData.savedCommission} (0% Aggregator Cuts)</span>
              </div>
            </div>

            {/* Smooth SVG Chart Graphic */}
            <div className="h-28 sm:h-36 w-full pt-2 relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d={currentData.fillPath}
                  fill="url(#heroChartGrad)"
                  className="transition-all duration-500 ease-out"
                />
                <path
                  d={currentData.path}
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="transition-all duration-500 ease-out"
                />
              </svg>
            </div>

            {/* Micro Tickers */}
            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-200/70 text-xs">
              <div>
                <span className="text-slate-400 font-medium">Processed Orders: </span>
                <span className="font-bold text-slate-800">{currentData.orders}</span>
              </div>
              <div className="text-right">
                <span className="text-slate-400 font-medium">Payout Rate: </span>
                <span className="font-bold text-indigo-600">Direct to Bank Instant</span>
              </div>
            </div>
          </div>

          {/* Connected Stream: Restaurant POS, E-commerce & AI WhatsApp */}
          <div className="md:col-span-5 flex flex-col gap-3 justify-center">
            
            {/* Restaurant POS & QR Table Item */}
            <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-indigo-300 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <Store size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-950">Restaurant POS • Table #12</p>
                    <p className="text-[11px] text-slate-500">2x Special Biryani, 1x Mocktail</p>
                  </div>
                </div>
                <span className="text-xs font-black text-slate-900">₹1,640</span>
              </div>
              <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-100">
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <Printer size={12} className="text-emerald-600" /> KOT Dispatched to Kitchen
                </span>
                <span className="bg-orange-50 text-orange-700 font-bold px-2 py-0.5 rounded-md text-[10px]">
                  QR Ordered
                </span>
              </div>
            </div>

            {/* E-Commerce Storefront Checkout Item */}
            <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-indigo-300 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <ShoppingBag size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-950">D2C E-Commerce Storefront</p>
                    <p className="text-[11px] text-slate-500">Cart Checkout: Order #8921</p>
                  </div>
                </div>
                <span className="text-xs font-black text-slate-900">₹3,499</span>
              </div>
              <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-100">
                <span className="text-indigo-700 font-semibold flex items-center gap-1">
                  <Zap size={12} className="text-indigo-600" /> 1-Click UPI Verified
                </span>
                <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-md text-[10px]">
                  Paid
                </span>
              </div>
            </div>

            {/* AI WhatsApp Assistant Item */}
            <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-indigo-300 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#25D366] shrink-0">
                    <MessageCircle size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-950">WhatsApp AI Automation</p>
                    <p className="text-[11px] text-slate-500">Customer Support & Reservation</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                  1.4s Reply
                </span>
              </div>
              <div className="text-[11px] bg-slate-50 p-2 rounded-xl text-slate-700 border border-slate-100 leading-snug">
                <span className="font-semibold text-emerald-800">Bot: </span>
                "Table for 4 is confirmed for 8:30 PM. Booking ID #K402 sent to WhatsApp!"
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Hardware & Cloud Connectors Strip */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <Cpu size={14} className="text-indigo-600" />
            <span>Built on React, Node/Java, PostgreSQL & WhatsApp Cloud API</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-slate-700 font-semibold">
              <ShieldCheck size={14} className="text-emerald-600" /> Bank-Grade Security
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-slate-700 font-semibold">Zero Vendor Lock-in</span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

/* ─── Main Hero Section ────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 md:pt-44 md:pb-24 overflow-hidden bg-[#FAFAFA] text-slate-900">
      
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[950px] h-[550px] bg-gradient-to-b from-indigo-100/70 via-purple-50/40 to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="container mx-auto px-4 sm:px-8 max-w-6xl relative z-10 text-center">
        
        {/* Top Iridescent Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-slate-200/90 shadow-xs mb-6 sm:mb-8"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />
          <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide">
            Next-Gen Digital Systems & Business Automation
          </span>
          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 hidden sm:inline">
            0% Commission
          </span>
        </motion.div>

        {/* Primary Headline - Strictly as requested in Master Prompt */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight text-slate-950 max-w-5xl mx-auto leading-[1.08] mb-6"
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
          className="text-base sm:text-xl md:text-2xl text-slate-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          Custom websites, e-commerce stores, restaurant POS systems, AI automation, and business software built around your operations.
        </motion.p>

        {/* Action Buttons - Stacked on Mobile, Row on Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6 sm:mb-8"
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
          className="flex items-center justify-center mb-12 sm:mb-14"
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

        {/* 4 Trust Proof Micro-Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-left flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 font-black text-xs">
              0%
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">0% Commissions</p>
              <p className="text-[10px] text-slate-500">Keep 100% of order revenue</p>
            </div>
          </div>

          <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-left flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Zap size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">&lt; 0.4s Fast Speeds</p>
              <p className="text-[10px] text-slate-500">React & Next-Gen Architecture</p>
            </div>
          </div>

          <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-left flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <ShieldCheck size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Full Code Ownership</p>
              <p className="text-[10px] text-slate-500">Zero restrictive platform lock-in</p>
            </div>
          </div>

          <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-left flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Clock size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Direct Support</p>
              <p className="text-[10px] text-slate-500">Speak directly with engineers</p>
            </div>
          </div>
        </motion.div>

        {/* Connected Digital Products Visual Composition */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <ConnectedDigitalProductsStage />
        </motion.div>

      </div>
    </section>
  );
}
