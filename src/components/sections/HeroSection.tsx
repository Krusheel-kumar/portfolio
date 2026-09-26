"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, TrendingUp, Star, Zap, ShoppingBag } from "lucide-react";

/* ─── Floating UI Cards ───────────────────────────────────── */

function OrderCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 1.0, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="animate-float-slow absolute left-[3%] top-[22%] hidden xl:block z-20 w-[220px]"
    >
      <div className="glass rounded-2xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center">
            <ShoppingBag size={13} className="text-green-400" />
          </div>
          <div>
            <p className="text-white text-[11px] font-bold leading-none">New Order</p>
            <p className="text-white/40 text-[9px] mt-0.5">Just now · QR Table 4</p>
          </div>
          <span className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </div>
        {/* Items */}
        <div className="space-y-1.5 mb-3">
          {["Butter Chicken", "Garlic Naan × 2", "Lassi"].map((item, i) => (
            <div key={i} className="flex justify-between">
              <span className="text-white/60 text-[10px]">{item}</span>
              <span className="text-white/40 text-[10px]">₹{[380, 120, 80][i]}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-white/8 pt-2.5 flex items-center justify-between">
          <span className="text-white/40 text-[10px] font-semibold">TOTAL</span>
          <span className="text-white font-extrabold text-sm">₹580</span>
        </div>
      </div>
    </motion.div>
  );
}

function RevenueCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 1.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="animate-float-medium absolute right-[3%] top-[16%] hidden xl:block z-20 w-[210px]"
    >
      <div className="glass rounded-2xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-white/45 text-[10px] font-semibold uppercase tracking-wide">Today's Revenue</p>
            <p className="text-white font-extrabold text-xl leading-tight mt-0.5">₹24,680</p>
          </div>
          <div className="w-9 h-9 rounded-xl bg-violet-500/20 flex items-center justify-center">
            <TrendingUp size={16} className="text-violet-400" />
          </div>
        </div>
        {/* Mini bar chart */}
        <div className="flex items-end gap-1 h-8">
          {[40, 65, 45, 80, 55, 90, 70, 100, 85, 95].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm bg-violet-500/40"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1.6 + i * 0.05, duration: 0.4, ease: "easeOut" }}
              style={{ height: `${h}%`, transformOrigin: "bottom" }}
            />
          ))}
        </div>
        <div className="flex items-center gap-1.5 mt-2.5">
          <span className="flex items-center gap-1 text-green-400 text-[10px] font-bold">
            <TrendingUp size={9} /> +32%
          </span>
          <span className="text-white/30 text-[10px]">vs yesterday</span>
        </div>
      </div>
    </motion.div>
  );
}

function LoyaltyCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, y: -20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 1.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="animate-float-fast absolute right-[3%] bottom-[18%] hidden xl:block z-20 w-[200px]"
    >
      <div className="glass rounded-2xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center">
            <Star size={13} className="text-amber-400" />
          </div>
          <div>
            <p className="text-white text-[11px] font-bold">Loyalty Reward</p>
            <p className="text-white/40 text-[9px]">Auto-sent via WhatsApp</p>
          </div>
        </div>
        <p className="text-white/70 text-[11px] leading-snug mb-2.5 bg-white/5 rounded-lg p-2.5 border border-white/8 italic">
          "You've earned 50 points! Redeem for a free dessert 🎁"
        </p>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "72%" }}
              transition={{ delay: 2, duration: 1.2, ease: "easeOut" }}
            />
          </div>
          <span className="text-amber-400 text-[10px] font-bold">72%</span>
        </div>
      </div>
    </motion.div>
  );
}

function WhatsAppBotCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60, y: -20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 1.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="animate-float-slow absolute left-[3%] bottom-[20%] hidden xl:block z-20 w-[215px]"
      style={{ animationDelay: "1.5s" }}
    >
      <div className="glass rounded-2xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-full bg-[#25D366]/20 flex items-center justify-center">
            <MessageCircle size={13} className="text-[#25D366]" />
          </div>
          <div>
            <p className="text-white text-[11px] font-bold">AI WhatsApp Bot</p>
            <p className="text-white/40 text-[9px]">3 conversations active</p>
          </div>
        </div>
        <div className="space-y-1.5">
          {[
            { msg: "Is the mutton biryani available?", time: "2m", from: "customer" },
            { msg: "Yes! Ready in 20 mins. Order now?", time: "now", from: "bot" },
          ].map((m, i) => (
            <div key={i} className={`flex ${m.from === "bot" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] px-2.5 py-1.5 rounded-xl text-[10px] leading-snug ${
                m.from === "bot"
                  ? "bg-[#25D366]/20 text-green-300"
                  : "bg-white/8 text-white/70"
              }`}>
                {m.msg}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1.5 mt-2.5">
          <Zap size={9} className="text-violet-400" />
          <span className="text-white/35 text-[9px]">Automated · Zero staff needed</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Background Mesh ─────────────────────────────────────── */
function BackgroundMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Primary orb — violet */}
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full animate-glow-pulse"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0) 70%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary orb — cyan */}
      <motion.div
        className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, rgba(6,182,212,0) 70%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Center glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top-center line accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-violet-500/50 to-transparent" />

      {/* Spinning ring (large, very subtle) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/[0.03]"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-violet-500/[0.05]"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

/* ─── Main Hero ───────────────────────────────────────────── */
export default function HeroSection() {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity  = useTransform(scrollY, [0, 300], [1, 0]);

  const words = ["Restaurants.", "E-commerce.", "Businesses."];

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#030712]">

      <BackgroundMesh />

      {/* Floating UI Cards */}
      <OrderCard />
      <RevenueCard />
      <LoyaltyCard />
      <WhatsAppBotCard />

      {/* Main Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 container mx-auto px-5 md:px-10 max-w-4xl xl:max-w-5xl pt-28 pb-20"
      >
        <div className="flex flex-col items-center text-center">

          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border-glow-violet mb-8 text-xs font-semibold text-white/70 tracking-widest uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Premium Digital Solutions — India
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.8rem,7.5vw,6.5rem)] font-extrabold tracking-tighter leading-[1.03] text-white"
            >
              We Build Digital
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.8rem,7.5vw,6.5rem)] font-extrabold tracking-tighter leading-[1.03] text-gradient-primary"
            >
              Systems That Run
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.29, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.8rem,7.5vw,6.5rem)] font-extrabold tracking-tighter leading-[1.03] text-white/30"
            >
              Your Business.
            </motion.h1>
          </div>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-white/45 mb-10 max-w-2xl leading-relaxed font-medium"
          >
            Custom websites, ordering systems, AI automation, WhatsApp flows, and business software — built from scratch for restaurants, e-commerce, and growing businesses across India.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 items-center w-full max-w-sm sm:max-w-none justify-center"
          >
            {/* Primary CTA */}
            <Link
              to="/start-project"
              className="group relative inline-flex h-14 items-center justify-center gap-2.5 rounded-full overflow-hidden shadow-[0_0_40px_rgba(124,58,237,0.4)] w-full sm:w-auto px-9 text-sm font-extrabold text-white transition-all hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5, #0891b2)" }}
            >
              {/* Shimmer sweep */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                Start a Project
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210?text=Hi%20Krunnex%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-full glass border border-white/12 px-8 text-sm font-semibold text-white/80 hover:text-white hover:border-white/25 hover:bg-white/8 transition-all w-full sm:w-auto"
            >
              <MessageCircle size={17} className="text-[#25D366]" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Micro trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex items-center gap-6 mt-10 flex-wrap justify-center"
          >
            {[
              { label: "25+ Projects Built" },
              { label: "4–8 Week Delivery" },
              { label: "Zero Templates" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-white/30 text-xs font-semibold">
                <div className="w-1 h-1 rounded-full bg-violet-500" />
                {s.label}
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
      >
        <span className="text-white/20 text-[10px] font-semibold tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
          <motion.div
            className="absolute w-full bg-gradient-to-b from-violet-400 to-cyan-400"
            style={{ height: "40%" }}
            animate={{ y: ["0%", "250%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

    </section>
  );
}
