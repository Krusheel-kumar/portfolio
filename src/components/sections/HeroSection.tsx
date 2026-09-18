"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

import { type Persona } from "@/pages/Home";

export default function HeroSection({ selectedIndustry, onIndustrySelect, setPersona }: any) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-20 bg-background">
      {/* Immersive Animated Background Gradients (Desktop) */}
      <motion.div style={{ y: y1 }} className="hidden md:block absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-[120px] mix-blend-multiply opacity-70" />
      <motion.div style={{ y: y2 }} className="hidden md:block absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-accent/30 to-primary/20 rounded-full blur-[100px] mix-blend-multiply opacity-60" />
      
      {/* Simplified Background Gradients (Mobile) */}
      <div className="md:hidden absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px] mix-blend-multiply" />
      <div className="md:hidden absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px] mix-blend-multiply" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      <div className="container relative z-10 px-4 mx-auto">
        {/* DESKTOP LAYOUT (Hidden on mobile) */}
        <motion.div style={{ opacity }} className="hidden md:flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border/50 text-secondary-foreground text-sm font-semibold tracking-wide mb-8 shadow-sm backdrop-blur-md">
              <Sparkles size={16} className="text-primary" />
              <span>Premium Digital Agency Solutions</span>
            </div>
          </motion.div>

          <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-foreground">
            Software That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-accent animate-gradient-x">Grows Your Business.</span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-muted-foreground mb-12 max-w-4xl leading-relaxed font-medium"
          >
            We build custom business systems, automate operations, and create digital experiences that drive revenue and efficiency.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-6"
          >
            <Link to="/start-project" className="group relative inline-flex h-16 items-center justify-center rounded-full bg-foreground px-10 text-lg font-semibold text-background overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-foreground/10">
              <span className="relative z-10 flex items-center gap-2">Start a Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <button onClick={() => setPersona("engineering")} className="inline-flex h-16 items-center justify-center rounded-full bg-white border-2 border-border px-10 text-lg font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-secondary">
              Recruiters: View Tech Portfolio
            </button>
          </motion.div>
        </motion.div>

        {/* MOBILE LAYOUT (Hidden on desktop) */}
        <div className="md:hidden flex flex-col pt-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest"
          >
            <span className="w-8 h-[2px] bg-primary"></span>
            Krunnex
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-extrabold tracking-tight mb-6 leading-tight text-foreground"
          >
            Software That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Grows Business.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 leading-relaxed"
          >
            We automate operations and build systems that scale your revenue.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <Link to="/start-project" className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 active:scale-95 transition-transform">
              Start a Project
            </Link>
            <button onClick={() => setPersona("engineering")} className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-card border border-border px-8 text-base font-bold text-foreground active:scale-95 transition-transform">
              View Tech Portfolio
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

