import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTASection() {
  return (
    <section className="relative text-slate-900 py-24 md:py-36 overflow-hidden flex items-center justify-center border-t border-slate-200/80 bg-white">

      {/* Soft Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-indigo-100/50 via-sky-50/60 to-purple-100/50 rounded-full blur-[90px]" />
      </div>

      <div className="container mx-auto px-5 md:px-10 max-w-4xl relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block mb-6">
            Get Started
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-950 mb-6 leading-[1.08]">
            Let's build the right solution for <span className="text-gradient-primary">your business.</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you need a high-speed website, zero-commission restaurant POS, or bespoke business software—we're ready to engineer it.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              to="/contact"
              className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-slate-950 px-10 text-base font-black text-white transition-all shadow-[0_8px_30px_rgba(15,23,42,0.25)] hover:bg-slate-800 hover:scale-[1.02] active:scale-98 w-full sm:w-auto"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>

            <a
              href="https://wa.me/917794971935?text=Hi%20Krunnex%2C%20I%27d%20like%20to%20discuss%20a%20project%20for%20my%20business."
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-white border border-slate-300 px-10 text-base font-bold text-slate-900 hover:bg-slate-50 transition-all shadow-sm w-full sm:w-auto hover:border-slate-400"
            >
              <MessageCircle size={20} className="text-[#25D366]" />
              Chat on WhatsApp
            </a>
          </div>

          <p className="text-slate-500 text-sm mt-8 font-medium">
            Free strategy call · Fixed-price proposal · 100% custom code
          </p>
        </motion.div>

      </div>
    </section>
  );
}
