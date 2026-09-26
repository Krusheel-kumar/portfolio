import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Industry } from "@/pages/Home";
import { 
  Cpu, CreditCard, Layout, BarChart, 
  ShoppingCart, Store, CheckCircle2,
  Globe, Utensils, Settings, Bot, Gift, TrendingUp, PlayCircle
} from "lucide-react";

interface SolutionProps {
  selectedIndustry: Industry;
}

export default function SolutionEcosystem({ selectedIndustry }: SolutionProps) {
  const [activeStep, setActiveStep] = useState(0);

  const getSystem = (industry: Industry) => {
    switch (industry) {
      case "restaurant":
        return {
          title: "The Restaurant Autopilot",
          accentColor: "rgba(249,115,22,0.15)", // Orange
          activeColor: "bg-orange-500 text-white shadow-[0_0_30px_rgba(249,115,22,0.5)]",
          nodes: [
            { 
              icon: <Globe size={28} />, 
              label: "Digital Presence", 
              desc: "A premium, high-converting website that builds instant trust, ranks on Google, and attracts hungry customers to your door.",
              image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
              benefits: ["Increase Walk-ins", "Outrank Competitors", "Direct Reservations", "Premium First Impression"]
            },
            { 
              icon: <Utensils size={28} />, 
              label: "Zero-Commission Ordering", 
              desc: "Stop paying 30% to delivery apps. Accept direct online orders with secure payments and a seamless user experience.",
              image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
              benefits: ["Keep 100% of Profits", "Save Printing Costs", "Faster Table Turns", "Better Ordering UX"]
            },
            { 
              icon: <Settings size={28} />, 
              label: "Central Command", 
              desc: "Manage your entire operation—orders, inventory, staff, and tables—from one beautifully designed smart dashboard.",
              image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80",
              benefits: ["Serve More Customers", "Eliminate Lost Orders", "Reduce Food Waste", "Faster Service Times"]
            },
            { 
              icon: <Bot size={28} />, 
              label: "AI Customer Automation", 
              desc: "Intelligent chatbots and WhatsApp automation that answer FAQs, take reservations, and recover abandoned carts 24/7.",
              image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80",
              benefits: ["3x Higher Conversions", "Zero Staff Needed", "Instant Replies", "Familiar WhatsApp Chat"]
            },
            { 
              icon: <TrendingUp size={28} />, 
              label: "Growth Analytics", 
              desc: "Stop guessing. Get crystal-clear data on your best-selling items, peak hours, and hidden profit bottlenecks.",
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
              benefits: ["Data-Driven Decisions", "Spot Bottlenecks", "Discover Profit", "Total Peace of Mind"]
            }
          ]
        };
      case "ecommerce":
        return {
          title: "The Conversion Engine",
          accentColor: "rgba(59,130,246,0.15)", // Blue
          activeColor: "bg-blue-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.5)]",
          nodes: [
            { 
              icon: <ShoppingCart size={28} />, 
              label: "High-Speed Storefront", 
              desc: "A lightning-fast React storefront architected purely to maximize conversions and eliminate bounce rates.",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
              benefits: ["Lower Bounce Rates", "Higher SEO Rankings", "Conversion Spikes", "Flawless Browsing"]
            },
            { 
              icon: <Cpu size={28} />, 
              label: "AI Recommendations", 
              desc: "Machine learning algorithms that suggest the exact product the customer is most likely to buy next.",
              image: "https://images.unsplash.com/photo-1518932945647-7a3c96922f18?auto=format&fit=crop&w=1200&q=80",
              benefits: ["Higher Customer LTV", "Automated Marketing", "Increased Cart Size", "Personalized Shopping"]
            },
            { 
              icon: <CreditCard size={28} />, 
              label: "1-Click Checkout", 
              desc: "A frictionless checkout experience that captures payments instantly and dramatically rescues abandoned carts.",
              image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
              benefits: ["Rescue Abandoned Carts", "Faster Purchase Flow", "Higher Payment Success", "Bank-Grade Security"]
            },
            { 
              icon: <Layout size={28} />, 
              label: "Automated Fulfillment", 
              desc: "A centralized dashboard that syncs your inventory and prints shipping labels the second an order arrives.",
              image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?auto=format&fit=crop&w=1200&q=80",
              benefits: ["Handle Endless Volume", "Save Hours of Work", "Eliminate Stockouts", "Perfect Delivery"]
            }
          ]
        };
      case "business":
        return {
          title: "The Operational Scaler",
          accentColor: "rgba(139,92,246,0.15)", // Violet
          activeColor: "bg-violet-500 text-white shadow-[0_0_30px_rgba(139,92,246,0.5)]",
          nodes: [
            { 
              icon: <Store size={28} />, 
              label: "Lead Generation", 
              desc: "A highly optimized landing page that acts as your 24/7 sales representative, capturing high-value B2B leads.",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
              benefits: ["5x More Qualified Leads", "Zero Cold Calling", "Lower Customer Cost", "Professional Image"]
            },
            { 
              icon: <Cpu size={28} />, 
              label: "AI Support Assistant", 
              desc: "An intelligent chatbot trained on your company data that answers client questions instantly, day or night.",
              image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80",
              benefits: ["Scale Support Endlessly", "Save 40+ Hours/Week", "Reduce Support Overhead", "Instant Answers"]
            },
            { 
              icon: <CreditCard size={28} />, 
              label: "Automated Invoicing", 
              desc: "Seamless digital contract signing and automated recurring billing infrastructure.",
              image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
              benefits: ["Predictable Cash Flow", "End Manual Accounting", "Get Paid 3x Faster", "Frictionless Onboarding"]
            },
            { 
              icon: <BarChart size={28} />, 
              label: "Growth Analytics", 
              desc: "A centralized command center giving you real-time visibility into your entire business operations.",
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
              benefits: ["Make Data-Driven Decisions", "Instantly Spot Bottlenecks", "Discover Hidden Profit", "Total Peace of Mind"]
            }
          ]
        };
      default:
        return null;
    }
  };

  if (!selectedIndustry) {
    return (
      <section className="py-24 flex flex-col items-center justify-center text-center opacity-50 bg-[#030712]">
        <div className="w-12 h-12 rounded-full border-2 border-white/20 border-t-white animate-spin mb-4" />
      </section>
    );
  }

  const system = getSystem(selectedIndustry);

  return (
    <section className="relative bg-[#030712] font-sans text-white border-t border-white/5 pb-24 md:pb-40">
      
      {/* Background Orbs (Hidden overflow handled by absolute wrapper) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndustry}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute top-[20%] right-0 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] rounded-full"
            style={{
              background: `radial-gradient(circle, ${system?.accentColor} 0%, transparent 60%)`,
              filter: "blur(80px)"
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 dot-grid opacity-[0.15]" />
      </div>

      <div className="container mx-auto px-5 md:px-10 max-w-7xl relative z-10">
        
        {/* Intro Header */}
        <div className="pt-20 md:pt-32 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-3 md:mb-5">
              Scroll to explore
            </h2>
            <AnimatePresence mode="wait">
              <motion.h3 
                key={system?.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[1.05]"
              >
                {system?.title}
              </motion.h3>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${system?.title}-cta`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col sm:flex-row items-center gap-4 shrink-0"
            >
              <div className="bg-white/5 text-white border border-white/10 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Starts @ ₹19,999
              </div>
              <button className="flex items-center gap-2 bg-white text-black px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-all shadow-lg hover:scale-105 active:scale-95">
                <PlayCircle size={18} /> Watch Demo
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sticky Scroll Architecture */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 relative mt-10">
          
          {/* Mobile Sticky Visual (Shows on top on small screens, hidden on desktop) */}
          <div className="lg:hidden sticky top-[90px] z-40 w-full h-[35vh] rounded-[1.5rem] bg-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/10 flex flex-col overflow-hidden">
            <div className="h-8 bg-white/[0.03] border-b border-white/5 flex items-center px-4 gap-1.5 shrink-0 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
            <div className="flex-1 relative">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeStep}
                  src={system?.nodes[activeStep].image} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-90"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Left Column: Scrolling Content */}
          <div className="w-full lg:w-1/2 flex flex-col z-20">
            {system?.nodes.map((node, i) => (
              <motion.div
                key={i}
                onViewportEnter={() => setActiveStep(i)}
                viewport={{ margin: "-45% 0px -45% 0px" }}
                className={`py-12 lg:min-h-[80vh] flex flex-col justify-center transition-all duration-700 ${
                  activeStep === i ? 'opacity-100 scale-100' : 'opacity-20 scale-95'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-700 shadow-xl ${
                  activeStep === i ? system.activeColor : 'bg-white/5 text-white/40'
                }`}>
                  {node.icon}
                </div>
                
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight">
                  {node.label}
                </h4>
                <p className="text-base md:text-lg lg:text-xl text-white/60 mb-8 max-w-lg leading-relaxed">
                  {node.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {node.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-green-400 shrink-0" />
                      <span className="text-sm md:text-base font-semibold text-white/80">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
            
            {/* Spacer for last item to scroll fully up on desktop */}
            <div className="hidden lg:block h-[40vh]" />
          </div>

          {/* Right Column: Desktop Sticky Visual */}
          <div className="hidden lg:block lg:w-1/2 relative z-30">
            <div className="sticky top-[140px] w-full h-[calc(100vh-200px)] max-h-[800px] bg-[#0a0a0a] rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col overflow-hidden">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-white/10 to-transparent opacity-20 blur-xl -z-10" />

              {/* macOS style Window Header */}
              <div className="h-12 bg-white/[0.02] border-b border-white/5 flex items-center px-6 gap-2 shrink-0 backdrop-blur-xl">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>

              {/* Dynamic Image Canvas */}
              <div className="flex-1 relative bg-black overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeStep}
                    src={system?.nodes[activeStep].image} 
                    initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-80"
                  />
                </AnimatePresence>
                
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a]/30" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
