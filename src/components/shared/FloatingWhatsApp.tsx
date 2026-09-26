import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X, ArrowRight } from "lucide-react";

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">

      {/* Popup card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-[280px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10"
          >
            {/* Header */}
            <div className="px-4 py-3.5 flex items-center gap-3" style={{ background: "#128C7E" }}>
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle size={18} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm leading-none">Krunnex Support</p>
                <p className="text-white/70 text-[11px] mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300" /> Typically replies instantly
                </p>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>

            {/* Chat bubble */}
            <div className="p-4 bg-[#ece5dd]">
              <div className="bg-white rounded-lg rounded-tl-none px-3.5 py-3 shadow-sm max-w-[85%]">
                <p className="text-[#111b21] text-xs leading-relaxed">
                  👋 Hi! I'm the Krunnex team. Tell me about your business and what you'd like to build — I'll get back to you within the hour!
                </p>
                <p className="text-[#8696a0] text-[9px] mt-1.5 text-right">Now</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/919876543210?text=Hi%20Krunnex%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: "#25D366" }}
            >
              <MessageCircle size={16} />
              Start Conversation
              <ArrowRight size={14} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.5)] transition-all"
        style={{ background: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        {/* Ping ring */}
        {!open && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: "rgba(37,211,102,0.4)" }}
            animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={22} className="text-white" />
            </motion.div>
          ) : (
            <motion.div key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle size={24} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

    </div>
  );
}
