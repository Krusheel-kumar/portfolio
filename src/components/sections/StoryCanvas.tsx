import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { User, Monitor, Cpu, CreditCard, Layout, BarChart, ArrowRight } from "lucide-react";

export default function StoryCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll exactly from the top of this massive container to the bottom
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // ==========================================
  // BACKGROUND TRANSITION
  // ==========================================
  // 0% - 40%: Pitch Black
  // 40% - 50%: Crossfade to White
  // 50% - 100%: White
  const bgColor = useTransform(scrollYProgress, [0, 0.4, 0.5, 1], ["#030712", "#030712", "#ffffff", "#ffffff"]);
  const textColor = useTransform(scrollYProgress, [0, 0.4, 0.5, 1], ["#ffffff", "#ffffff", "#030712", "#030712"]);

  // ==========================================
  // SCENE 1: THE HOOK (0% - 25%)
  // ==========================================
  const hookOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const hookScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.5]);
  const hookBlur = useTransform(scrollYProgress, [0.15, 0.25], ["blur(0px)", "blur(20px)"]);

  // ==========================================
  // SCENE 2: THE CHAOS (20% - 45%)
  // ==========================================
  const chaosOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const chaosScale = useTransform(scrollYProgress, [0.15, 0.35, 0.45], [0.8, 1, 1.5]);
  const chaosY = useTransform(scrollYProgress, [0.15, 0.25], [100, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.45], [0, 1, 0]);

  // ==========================================
  // SCENE 3: THE TRANSFORMATION (45% - 65%)
  // ==========================================
  const transOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
  const transScale = useTransform(scrollYProgress, [0.4, 0.7], [0.8, 1.2]);

  // ==========================================
  // SCENE 4: THE ECOSYSTEM (65% - 100%)
  // ==========================================
  const ecoOpacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  const ecoScale = useTransform(scrollYProgress, [0.65, 0.75], [0.8, 1]);

  return (
    <motion.section ref={containerRef} style={{ backgroundColor: bgColor }} className="relative h-[500vh]">
      
      {/* THE VIEWPORT: This stays pinned to the screen while you scroll */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* ==================== SCENE 1 ==================== */}
        <motion.div 
          style={{ opacity: hookOpacity, scale: hookScale, filter: hookBlur }}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 text-white z-10 pointer-events-none"
        >
          <div className="w-16 h-[1px] bg-white/20 mb-8" />
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight text-center">
            Running a business is hard.
          </h1>
          <h2 className="text-2xl md:text-5xl font-medium tracking-tight text-white/50 mt-4 leading-tight text-center">
            Technology shouldn't make it harder.
          </h2>
          <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-50">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent" />
          </div>
        </motion.div>

        {/* ==================== SCENE 2 ==================== */}
        {/* The stress glow */}
        <motion.div 
          style={{ opacity: glowOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          <div className="w-[600px] h-[600px] bg-red-900/30 rounded-full blur-[120px]" />
        </motion.div>

        <motion.div 
          style={{ opacity: chaosOpacity, scale: chaosScale, y: chaosY }}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 z-20 pointer-events-none"
        >
          <p className="text-xl text-white/70 mb-12 text-center max-w-2xl font-light">
            Broken systems, disconnected tools, and manual tasks.
          </p>
          <div className="flex flex-col md:flex-row gap-6 max-w-5xl w-full">
            <div className="flex-1 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 text-white">Restaurant</h3>
              <ul className="space-y-4 text-white/60">
                <li>• Too many manual orders</li>
                <li>• High delivery commissions</li>
                <li>• No customer database</li>
              </ul>
            </div>
            <div className="flex-1 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md mt-10 md:mt-0 md:-translate-y-10">
              <h3 className="text-2xl font-bold mb-6 text-white">E-commerce</h3>
              <ul className="space-y-4 text-white/60">
                <li>• Low conversion rates</li>
                <li>• Manual inventory tracking</li>
                <li>• Poor mobile checkout</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ==================== SCENE 3 ==================== */}
        <motion.div 
          style={{ opacity: transOpacity, scale: transScale, color: textColor }}
          className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none px-4"
        >
          <h2 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-tight text-center">
            Imagine everything <br /> working together.
          </h2>
        </motion.div>

        {/* ==================== SCENE 4 ==================== */}
        <motion.div 
          style={{ opacity: ecoOpacity, scale: ecoScale }}
          className="absolute inset-0 flex items-center justify-center z-40 bg-white"
        >
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">The Solution</h2>
              <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
                A Connected Ecosystem
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Monitor size={32} />, title: "Premium Web App", desc: "High-converting interface." },
                { icon: <Cpu size={32} />, title: "AI Assistant", desc: "Automated support." },
                { icon: <CreditCard size={32} />, title: "Seamless Payments", desc: "Zero manual reconciliation." },
                { icon: <Layout size={32} />, title: "Admin Dashboard", desc: "One unified control panel." },
                { icon: <BarChart size={32} />, title: "Growth Analytics", desc: "Real-time insights." },
                { icon: <User size={32} />, title: "CRM Sync", desc: "Perfect customer data." },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl border border-border/50 bg-secondary/30 hover:bg-secondary/60 transition-colors flex flex-col items-center text-center group cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-border/50 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/5">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
