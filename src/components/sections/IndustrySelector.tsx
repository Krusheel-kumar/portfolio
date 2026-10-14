import { motion, AnimatePresence } from "framer-motion";
import { Industry } from "@/pages/Home";
import { Utensils, ShoppingCart, Building2, Check } from "lucide-react";

interface IndustrySelectorProps {
  selectedIndustry: Industry;
  onSelect: (industry: Industry) => void;
}

const industries = [
  {
    id: "restaurant",
    icon: <Utensils size={24} />,
    label: "Restaurant & Food",
    description: "Zero-commission ordering, QR menus & WhatsApp automation",
    tag: "Most Popular",
    color: "from-orange-500 to-amber-500",
    bgActive: "bg-orange-50/80 border-orange-200",
    iconBg: "bg-orange-500 text-white shadow-orange-200",
  },
  {
    id: "ecommerce",
    icon: <ShoppingCart size={24} />,
    label: "E-Commerce Brands",
    description: "High-speed storefronts, 1-click checkout & cart recovery",
    tag: "High Conversion",
    color: "from-blue-600 to-indigo-600",
    bgActive: "bg-indigo-50/80 border-indigo-200",
    iconBg: "bg-indigo-600 text-white shadow-indigo-200",
  },
  {
    id: "business",
    icon: <Building2 size={24} />,
    label: "Service Businesses",
    description: "Custom admin portals, 24/7 AI lead bots & workflow sync",
    tag: "Scale Operations",
    color: "from-violet-600 to-purple-600",
    bgActive: "bg-purple-50/80 border-purple-200",
    iconBg: "bg-purple-600 text-white shadow-purple-200",
  },
] as const;

export default function IndustrySelector({ selectedIndustry, onSelect }: IndustrySelectorProps) {
  return (
    <section className="pt-20 pb-12 bg-[#FAFAFA] relative z-20 font-sans">
      
      <div className="container mx-auto px-5 md:px-10 max-w-6xl text-center relative z-10">

        {/* Header Block */}
        <div className="mb-12 flex flex-col items-center">
          <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100 mb-4">
            Select Your Industry
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Tailored systems for your business model.
          </h2>
          <p className="text-base text-slate-500 max-w-xl">
            Choose your sector below to see the exact digital ecosystem, integrations, and ROI we deliver.
          </p>
        </div>

        {/* Minimal Light Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {industries.map((ind) => {
            const isSelected = selectedIndustry === ind.id;

            return (
              <button
                key={ind.id}
                onClick={() => onSelect(ind.id as Industry)}
                className={`relative flex flex-col text-left p-6 sm:p-7 rounded-2xl border transition-all duration-300 text-slate-900 ${
                  isSelected
                    ? `${ind.bgActive} border-2 shadow-[0_15px_30px_rgba(0,0,0,0.06)] scale-[1.02]`
                    : "bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                {/* Top Row: Icon + Check Indicator */}
                <div className="flex justify-between items-center w-full mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                    isSelected ? ind.iconBg : "bg-slate-100 text-slate-600"
                  }`}>
                    {ind.icon}
                  </div>
                  
                  {isSelected ? (
                    <div className="w-6 h-6 rounded-full bg-slate-950 text-white flex items-center justify-center">
                      <Check size={14} />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border border-slate-200" />
                  )}
                </div>

                {/* Typography */}
                <h3 className="font-extrabold text-xl text-slate-950 tracking-tight mb-2">
                  {ind.label}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  {ind.description}
                </p>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
