import { motion } from "framer-motion";
import { Industry } from "@/pages/Home";
import { Utensils, ShoppingCart, Building2 } from "lucide-react";

interface IndustrySelectorProps {
  selectedIndustry: Industry;
  onSelect: (industry: Industry) => void;
}

const industries = [
  { id: "restaurant", icon: <Utensils size={20} />, label: "Restaurant", color: "from-orange-500/20" },
  { id: "ecommerce", icon: <ShoppingCart size={20} />, label: "E-commerce", color: "from-blue-500/20" },
  { id: "business", icon: <Building2 size={20} />, label: "Business", color: "from-purple-500/20" },
] as const;

export default function IndustrySelector({ selectedIndustry, onSelect }: IndustrySelectorProps) {
  return (
    <section className="py-12 md:py-24 relative z-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            What type of business do you own?
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto">
            Select your industry below to instantly reveal your customized growth system.
          </p>
        </motion.div>

        {/* Sleek Pill Tabs instead of Massive Cards */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 relative">
          {industries.map((ind, i) => {
            const isSelected = selectedIndustry === ind.id;
            
            return (
              <motion.button
                key={ind.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => onSelect(ind.id as Industry)}
                className={`relative flex items-center gap-3 px-6 py-4 md:px-8 md:py-5 rounded-full border transition-all duration-300 group overflow-hidden ${
                  isSelected 
                    ? 'border-white/40 bg-white/10 text-white shadow-lg shadow-white/5' 
                    : 'border-white/10 bg-[#0a0a0a] text-white/50 hover:bg-white/5 hover:text-white hover:border-white/20'
                }`}
              >
                {/* Smooth Spring Active Background */}
                {isSelected && (
                  <motion.div 
                    layoutId="activePill"
                    className={`absolute inset-0 bg-gradient-to-r ${ind.color} to-transparent opacity-50 rounded-full`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <div className={`relative z-10 transition-transform duration-300 ${isSelected ? 'scale-110 text-white' : 'text-white/50 group-hover:text-white'}`}>
                  {ind.icon}
                </div>
                
                <span className="relative z-10 font-bold text-sm md:text-base">
                  {ind.label}
                </span>
              </motion.button>
            )
          })}
        </div>

      </div>
    </section>
  );
}
