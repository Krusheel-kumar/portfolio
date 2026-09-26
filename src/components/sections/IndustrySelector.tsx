import { motion, AnimatePresence } from "framer-motion";
import { Industry } from "@/pages/Home";
import { Utensils, ShoppingCart, Building2 } from "lucide-react";

interface IndustrySelectorProps {
  selectedIndustry: Industry;
  onSelect: (industry: Industry) => void;
}

const industries = [
  {
    id: "restaurant",
    icon: <Utensils size={28} strokeWidth={1.5} />,
    label: "Restaurant & Food",
    description: "Ordering, loyalty & automation",
    theme: {
      primaryBg: "bg-orange-500",
      primaryText: "text-orange-500",
      softBg: "bg-orange-500/20",
      border: "border-orange-500/50",
      glowRing: "shadow-[0_0_20px_rgba(249,115,22,0.4)]",
      ambientGlow: "rgba(249,115,22,0.35)",
    }
  },
  {
    id: "ecommerce",
    icon: <ShoppingCart size={28} strokeWidth={1.5} />,
    label: "E-commerce",
    description: "Store, payments & fulfillment",
    theme: {
      primaryBg: "bg-blue-500",
      primaryText: "text-blue-500",
      softBg: "bg-blue-500/20",
      border: "border-blue-500/50",
      glowRing: "shadow-[0_0_20px_rgba(59,130,246,0.4)]",
      ambientGlow: "rgba(59,130,246,0.35)",
    }
  },
  {
    id: "business",
    icon: <Building2 size={28} strokeWidth={1.5} />,
    label: "Service Business",
    description: "CRM, dashboards & automation",
    theme: {
      primaryBg: "bg-violet-500",
      primaryText: "text-violet-500",
      softBg: "bg-violet-500/20",
      border: "border-violet-500/50",
      glowRing: "shadow-[0_0_20px_rgba(139,92,246,0.4)]",
      ambientGlow: "rgba(139,92,246,0.35)",
    }
  },
] as const;

export default function IndustrySelector({ selectedIndustry, onSelect }: IndustrySelectorProps) {
  return (
    <section className="pt-24 pb-16 bg-[#030712] relative z-20 font-sans" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
      
      {/* Cinematic Ambient Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {industries.map((ind) => (
          <motion.div
            key={ind.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: selectedIndustry === ind.id ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[120%] opacity-70"
            style={{
              background: `radial-gradient(ellipse at top, ${ind.theme.ambientGlow} 0%, transparent 65%)`,
              filter: "blur(80px)"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-5 md:px-10 max-w-6xl text-center relative z-10">

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl mb-6 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
            <span className="text-[10.5px] font-extrabold tracking-[0.25em] uppercase text-white/70">
              Select Your Industry
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[1.05] mb-5">
            Built exactly for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">your business.</span>
          </h2>
        </motion.div>

        {/* Premium Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {industries.map((ind, i) => {
            const isSelected = selectedIndustry === ind.id;
            const t = ind.theme;

            return (
              <motion.button
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect(ind.id as Industry)}
                className={`relative flex flex-col items-start text-left p-7 md:p-8 lg:p-9 rounded-[2rem] border transition-all duration-500 overflow-hidden group ${
                  isSelected
                    ? `bg-white/[0.05] ${t.border} shadow-[0_30px_60px_rgba(0,0,0,0.5)]`
                    : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15"
                }`}
              >
                {/* Active Subdued Background Fill */}
                {isSelected && (
                  <motion.div
                    layoutId="industryCardActiveBg"
                    className={`absolute inset-0 bg-gradient-to-br from-transparent to-${t.softBg} opacity-20 pointer-events-none`}
                    transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                  />
                )}

                {/* Top Row: Icon + Radio Indicator */}
                <div className="flex justify-between items-start w-full mb-10 relative z-10">
                  
                  {/* Icon Block */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    isSelected 
                      ? `${t.primaryBg} text-white ${t.glowRing} scale-110` 
                      : "bg-white/[0.04] text-white/40 group-hover:bg-white/[0.08] group-hover:text-white/80"
                  }`}>
                    {ind.icon}
                  </div>
                  
                  {/* Premium Radio Button Indicator */}
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isSelected 
                      ? `${t.border} bg-black/50` 
                      : "border-white/10 bg-transparent group-hover:border-white/30"
                  }`}>
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className={`w-2.5 h-2.5 rounded-full ${t.primaryBg} ${t.glowRing}`} 
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Bottom Row: Typography */}
                <div className="relative z-10 w-full mt-auto">
                  <h3 className={`font-extrabold text-2xl lg:text-3xl tracking-tight mb-2.5 transition-colors ${
                    isSelected ? "text-white" : "text-white/70 group-hover:text-white"
                  }`}>
                    {ind.label}
                  </h3>
                  <p className={`text-sm lg:text-base font-medium leading-relaxed transition-colors ${
                    isSelected ? "text-white/70" : "text-white/40 group-hover:text-white/60"
                  }`}>
                    {ind.description}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
