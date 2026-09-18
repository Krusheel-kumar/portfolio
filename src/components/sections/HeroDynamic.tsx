import { motion, AnimatePresence } from "framer-motion";
import { Industry } from "@/pages/Home";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroDynamicProps {
  selectedIndustry: Industry;
}

export default function HeroDynamic({ selectedIndustry }: HeroDynamicProps) {
  // Dynamic content based on industry state
  const getHeadline = () => {
    switch (selectedIndustry) {
      case "restaurant":
        return "Serve More. Stress Less.";
      case "ecommerce":
        return "Sell While You Sleep.";
      case "business":
        return "Automate Your Operations.";
      default:
        return "Software That Grows Your Business.";
    }
  };

  const getSubheadline = () => {
    switch (selectedIndustry) {
      case "restaurant":
        return "QR menus, WhatsApp ordering, and zero-commission delivery systems.";
      case "ecommerce":
        return "Lightning-fast storefronts and automated inventory management.";
      case "business":
        return "Custom portals, AI chatbots, and seamless payment integrations.";
      default:
        return "Stop fighting with broken tools. We build premium digital ecosystems that run on autopilot.";
    }
  };

  const getBgColor = () => {
    switch (selectedIndustry) {
      case "restaurant":
        return "from-orange-500/20";
      case "ecommerce":
        return "from-blue-500/20";
      case "business":
        return "from-purple-500/20";
      default:
        return "from-white/10";
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden px-4">
      
      {/* Dynamic Background Glow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndustry || "default"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial ${getBgColor()} to-transparent blur-[120px] -z-10`}
        />
      </AnimatePresence>

      <div className="max-w-4xl mx-auto text-center z-10">
        
        {/* Dynamic Typography */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndustry || "default"}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Accepting new clients for 2026
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] text-white mb-6">
              {getHeadline()}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto mb-12">
              {getSubheadline()}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Static CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-white/10">
            Start Your Project <ArrowRight size={20} />
          </Link>
          <Link to="/engineering" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-md">
            View Tech Portfolio
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
