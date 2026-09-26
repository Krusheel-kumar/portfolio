import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTASection() {
  return (
    <section className="relative text-white py-32 md:py-52 overflow-hidden flex items-center justify-center border-t border-white/5"
      style={{ background: "linear-gradient(180deg, #030712 0%, #09050f 50%, #030712 100%)" }}>

      {/* ── Background layers ── */}

      {/* Animated gradient orb cluster */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, rgba(6,182,212,0.1) 50%, transparent 75%)", filter: "blur(60px)" }}
        animate={{ scale: [1, 1.08, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)", filter: "blur(40px)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Line grid */}
      <div className="absolute inset-0 line-grid opacity-100 pointer-events-none" />

      {/* Horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), transparent)" }}
        animate={{ top: ["20%", "80%", "20%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-white/15 rounded-tl-xl pointer-events-none" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-white/15 rounded-tr-xl pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-white/15 rounded-bl-xl pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-white/15 rounded-br-xl pointer-events-none" />

      {/* ── Content ── */}
      <div className="container mx-auto px-5 md:px-10 max-w-4xl relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-violet-400/60 mb-7">
            Ready to move?
          </p>

          <h2 className="text-[clamp(2.6rem,6.5vw,5.5rem)] font-extrabold tracking-tighter leading-[1.06] mb-7">
            Your competitors are
            <br className="hidden md:block" />
            <span className="text-gradient-primary"> already building</span>
            <br className="hidden md:block" />
            their edge.
          </h2>

          <p className="text-base md:text-xl text-white/40 mb-12 max-w-xl mx-auto font-medium leading-relaxed">
            Stop relying on outdated systems. Let's build a digital ecosystem that works for your business 24 hours a day, 7 days a week — without extra staff.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              to="/start-project"
              className="group relative inline-flex items-center gap-2.5 rounded-full overflow-hidden px-10 py-5 text-sm font-extrabold text-white shadow-[0_0_60px_rgba(124,58,237,0.5)] hover:shadow-[0_0_80px_rgba(124,58,237,0.7)] transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
              style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5, #0891b2)" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2.5">
                Start Your Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <a
              href="https://wa.me/919876543210?text=Hi%20Krunnex%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/4 px-10 py-5 text-sm font-semibold text-white/70 hover:text-white hover:border-white/25 hover:bg-white/8 transition-all w-full sm:w-auto justify-center"
            >
              <MessageCircle size={17} className="text-[#25D366]" />
              Chat on WhatsApp First
            </a>
          </div>

          <p className="text-white/20 text-xs mt-8 tracking-wide">
            Free consultation · Fixed-price quotes · No surprises
          </p>
        </motion.div>

      </div>
    </section>
  );
}
