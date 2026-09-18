import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="bg-black text-white py-32 md:py-48 relative overflow-hidden flex items-center justify-center border-t border-white/5">
      
      {/* Immersive Glowing Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/[0.05] blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-tight">
            Ready to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40">
              dominate your market?
            </span>
          </h2>
          
          <p className="text-lg md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto font-medium">
            Stop losing customers to outdated technology. Let's build a digital ecosystem that works for you 24/7.
          </p>
          
          <button className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 md:px-12 md:py-6 rounded-full text-sm md:text-base font-extrabold uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]">
            <span>Book Free Consultation</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
