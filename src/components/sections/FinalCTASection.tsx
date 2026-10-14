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
          <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100 inline-block mb-6">
            Ready to Build Your Edge?
          </span>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 mb-6 leading-tight">
            Stop relying on manual processes.
            <br className="hidden md:block" />
            <span className="text-gradient-primary"> Start automating today.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed font-normal">
            We partner with businesses to build high-performance digital systems that capture orders, automate customer interactions, and scale revenue 24/7.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3.5 items-center justify-center">
            <Link
              to="/start-project"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-slate-950 px-8 text-sm font-bold text-white transition-all shadow-[0_4px_16px_rgba(15,23,42,0.25)] hover:bg-slate-800 hover:scale-[1.02] active:scale-98 w-full sm:w-auto"
            >
              Start Your Project
              <ArrowRight size={16} />
            </Link>

            <a
              href="https://wa.me/917794971935?text=Hi%20Krunnex%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white border border-slate-200 px-8 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-all shadow-sm w-full sm:w-auto"
            >
              <MessageCircle size={17} className="text-[#25D366]" />
              Chat on WhatsApp
            </a>
          </div>

          <p className="text-slate-400 text-xs mt-8">
            Free strategy call · Fixed-price proposal · 100% custom code
          </p>
        </motion.div>

      </div>
    </section>
  );
}
