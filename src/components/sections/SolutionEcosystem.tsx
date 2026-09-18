import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Industry } from "@/pages/Home";
import { 
  Cpu, CreditCard, Layout, BarChart, User,
  ShoppingCart, Store, MessageSquare,
  MousePointer2, CheckCircle2,
  Globe, Utensils, Settings, Bot, Gift, TrendingUp, PlayCircle
} from "lucide-react";

interface SolutionProps {
  selectedIndustry: Industry;
}

export default function SolutionEcosystem({ selectedIndustry }: SolutionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout>();
  
  // Refs for mobile auto-scrolling
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (!selectedIndustry || hasInteracted) {
      clearInterval(autoplayRef.current);
      return;
    }
    
    setActiveStep(0);
    setHasInteracted(false);
    setIsMobileExpanded(false);

    autoplayRef.current = setInterval(() => {
      setActiveStep((prev) => {
        const systemLength = getSystem(selectedIndustry)?.nodes.length || 4;
        return (prev + 1) % systemLength;
      });
    }, 4000); 

    return () => clearInterval(autoplayRef.current);
  }, [selectedIndustry, hasInteracted]);

  // Auto-scroll the mobile horizontal timeline when activeStep changes
  useEffect(() => {
    if (window.innerWidth < 768 && itemRefs.current[activeStep] && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const item = itemRefs.current[activeStep];
      
      // Calculate scroll position to center the active item
      const scrollLeft = item.offsetLeft - (container.clientWidth / 2) + (item.clientWidth / 2);
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [activeStep]);

  const handleInteraction = (index: number) => {
    setActiveStep(index);
    setHasInteracted(true);
  };

  const getSystem = (industry: Industry) => {
    switch (industry) {
      case "restaurant":
        return {
          title: "The Restaurant Autopilot",
          accent: "from-orange-500/20 to-transparent",
          nodes: [
            { 
              icon: <Globe />, 
              label: "Digital Presence", 
              desc: "Premium websites that build trust and attract more customers.",
              image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
              benefits: ["📈 Increase Walk-in Customers", "⚡ Outrank Competitors on Google", "💰 Drive Direct Online Reservations", "😊 Premium First Impression"]
            },
            { 
              icon: <Utensils />, 
              label: "Online Ordering", 
              desc: "Accept online orders with secure payments and a seamless experience.",
              image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
              benefits: ["📈 Higher Average Order Value", "⚡ Save Printing Costs", "💰 Faster Table Turnarounds", "😊 Better Ordering Experience"]
            },
            { 
              icon: <Settings />, 
              label: "Business Management", 
              desc: "Manage your entire business from one smart dashboard.",
              image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
              benefits: ["📈 Serve More Customers", "⚡ Eliminate Lost Orders", "💰 Reduce Food Waste", "😊 Faster Service Times"]
            },
            { 
              icon: <Bot />, 
              label: "Customer Automation", 
              desc: "AI chatbots and WhatsApp automation that work 24/7.",
              image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80",
              benefits: ["📈 3x Higher Conversion Rate", "⚡ Zero Staff Intervention", "💰 Eliminate Delivery App Fees", "😊 Familiar Customer Chat"]
            },
            { 
              icon: <Gift />, 
              label: "Customer Loyalty", 
              desc: "Keep customers coming back with rewards and personalized offers.",
              image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
              benefits: ["📈 Higher Customer LTV", "⚡ Automated Marketing", "💰 Increased Cart Size", "😊 Highly Personalized Rewards"]
            },
            { 
              icon: <TrendingUp />, 
              label: "Business Growth", 
              desc: "Analytics and insights to help you make smarter business decisions.",
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
              benefits: ["📈 Make Data-Driven Decisions", "⚡ Instantly Spot Bottlenecks", "💰 Discover Hidden Profit", "😊 Total Peace of Mind"]
            }
          ]
        };
      case "ecommerce":
        return {
          title: "The Conversion Engine",
          accent: "from-blue-500/20 to-transparent",
          nodes: [
            { 
              icon: <ShoppingCart />, 
              label: "High-Speed Storefront", 
              desc: "A lightning-fast React storefront designed purely to maximize conversions and reduce bounce rates.",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
              features: ["Sub-second Page Loads", "Headless Architecture", "Dynamic Search", "Frictionless UI/UX"],
              benefits: ["📈 Lower Bounce Rates", "⚡ Higher SEO Rankings", "💰 Massive Conversion Spikes", "😊 Flawless Browsing Experience"]
            },
            { 
              icon: <Cpu />, 
              label: "AI Recommendation Engine", 
              desc: "Machine learning algorithms that suggest the exact product the customer is most likely to buy next.",
              image: "https://images.unsplash.com/photo-1518932945647-7a3c96922f18?auto=format&fit=crop&w=800&q=80",
              features: ["Behavioral Tracking", "Personalized Upsells", "Dynamic Pricing Modules", "Abandoned Cart Recovery"],
              benefits: ["📈 Higher Customer LTV", "⚡ Automated Marketing", "💰 Increased Cart Size", "😊 Highly Personalized Shopping"]
            },
            { 
              icon: <CreditCard />, 
              label: "1-Click Checkout", 
              desc: "A frictionless checkout experience that captures payments instantly and reduces cart abandonment.",
              image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
              features: ["Apple Pay & Google Pay", "Auto-fill Addresses", "Multi-currency Support", "Fraud Prevention AI"],
              benefits: ["📈 Rescue Abandoned Carts", "⚡ Faster Purchase Flow", "💰 Higher Payment Success", "😊 Trust and Security"]
            },
            { 
              icon: <Layout />, 
              label: "Automated Fulfillment", 
              desc: "A centralized dashboard that syncs inventory and prints shipping labels the second an order arrives.",
              image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?auto=format&fit=crop&w=800&q=80",
              features: ["Multi-warehouse Sync", "Automated Shipping Labels", "Live Tracking Updates", "Low Stock Alerts"],
              benefits: ["📈 Handle Endless Volume", "⚡ Save Hours of Manual Work", "💰 Eliminate Stockouts", "😊 Perfect Delivery Expectations"]
            }
          ]
        };
      case "business":
        return {
          title: "The Operational Scaler",
          accent: "from-purple-500/20 to-transparent",
          nodes: [
            { 
              icon: <Store />, 
              label: "Lead Generation Portal", 
              desc: "A highly optimized landing page that acts as your 24/7 sales representative, capturing high-value B2B leads.",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
              features: ["A/B Tested Forms", "Automated Lead Scoring", "CRM Integration", "Exit Intent Popups"],
              benefits: ["📈 5x More Qualified Leads", "⚡ Zero Cold Calling", "💰 Lower Customer Acquisition", "😊 Professional Brand Image"]
            },
            { 
              icon: <Cpu />, 
              label: "AI Support Assistant", 
              desc: "An intelligent chatbot trained on your company data that answers client questions instantly, day or night.",
              image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
              features: ["Natural Language Processing", "Custom Knowledge Base", "Human Handoff Protocols", "Multi-language Support"],
              benefits: ["📈 Scale Support Endlessly", "⚡ Save 40+ Hours a Week", "💰 Reduce Support Overhead", "😊 Instant Client Answers"]
            },
            { 
              icon: <CreditCard />, 
              label: "Automated Invoicing", 
              desc: "Seamless digital contract signing and automated recurring billing infrastructure.",
              image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
              features: ["Auto-generated Invoices", "Stripe Subscription Sync", "Digital Signatures", "Late Payment Reminders"],
              benefits: ["📈 Predictable Cash Flow", "⚡ End Manual Accounting", "💰 Get Paid 3x Faster", "😊 Frictionless Onboarding"]
            },
            { 
              icon: <BarChart />, 
              label: "Growth Analytics", 
              desc: "A centralized command center giving you real-time visibility into your entire business operations.",
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
              features: ["Real-time KPI Tracking", "Custom Report Generation", "Profit Margin Analysis", "Goal Forecasting"],
              benefits: ["📈 Make Data-Driven Decisions", "⚡ Instantly Spot Bottlenecks", "💰 Discover Hidden Profit", "😊 Total Peace of Mind"]
            }
          ]
        };
      default:
        return null;
    }
  };

  if (!selectedIndustry) {
    return (
      <section className="py-32 flex flex-col items-center justify-center text-center opacity-50">
        <div className="w-16 h-16 rounded-full border-2 border-white/20 border-t-white animate-spin mb-4" />
        <p className="text-white/50 text-lg">Select an industry above to reveal your customized growth system.</p>
      </section>
    );
  }

  const system = getSystem(selectedIndustry);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-white text-black transition-colors duration-1000 rounded-t-[3rem]">
      
      {/* Dynamic Background Glow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndustry}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b ${system?.accent} pointer-events-none`}
        />
      </AnimatePresence>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-black/50">Your Custom Ecosystem</h2>
          <AnimatePresence mode="wait">
            <motion.h3 
              key={system?.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              {system?.title}
            </motion.h3>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${system?.title}-cta`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1 }}
              className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4"
            >
              <div className="bg-green-500/10 text-green-700 border border-green-500/20 px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider shadow-sm">
                Complete Ecosystem Starts @ ₹19,999
              </div>
              <button className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider shadow-md hover:bg-black/80 transition-colors cursor-pointer hover:scale-105 active:scale-95">
                <PlayCircle size={16} /> Watch Live Demo
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative max-w-7xl mx-auto">
          
          {/* ==================================================== */}
          {/* TIMELINE GRID (Desktop & Mobile)                     */}
          {/* ==================================================== */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1 pt-4 pb-8">
            
            {/* The SVG Snaking Circuit Line */}
            <div className="absolute inset-0 z-0 pointer-events-none pt-[2.25rem] pb-[3.5rem] px-[20%] md:pt-[1.75rem] md:pb-[4rem] md:px-[25%]">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="overflow-visible">
                {/* Background static track */}
                <path 
                  d="M 0 0 L 100 0 C 150 0, 150 50, 100 50 L 0 50 C -50 50, -50 100, 0 100 L 100 100" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  vectorEffect="non-scaling-stroke"
                  className="text-black/5"
                />
                
                {/* Animated glowing neon wire */}
                <motion.path 
                  d="M 0 0 L 100 0 C 150 0, 150 50, 100 50 L 0 50 C -50 50, -50 100, 0 100 L 100 100" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  vectorEffect="non-scaling-stroke"
                  className={`drop-shadow-[0_0_10px_currentColor] ${
                    selectedIndustry === 'restaurant' ? 'text-orange-500' : 
                    selectedIndustry === 'ecommerce' ? 'text-blue-500' : 
                    'text-purple-500'
                  }`}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: activeStep === 0 ? 0.05 : activeStep / 5 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </svg>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndustry}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-x-8 md:gap-y-8 relative z-10"
              >
                {system?.nodes.map((node, i) => {
                  const isHiddenOnMobile = !isMobileExpanded && i >= 4;
                  return (
                    <div 
                      key={i}
                      ref={(el) => (itemRefs.current[i] = el)}
                      onClick={() => handleInteraction(i)}
                      className={`relative flex-col items-center text-center cursor-pointer group ${isHiddenOnMobile ? 'hidden md:flex' : 'flex'}`}
                    >
                      {/* The Icon */}
                      <div className={`relative z-20 flex-shrink-0 w-12 h-12 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border mb-2 ${
                        activeStep === i 
                          ? 'bg-black border-black text-white shadow-xl scale-110' 
                          : 'bg-white border-black/10 text-black/30 group-hover:border-black/30 group-hover:text-black/60'
                      }`}>
                        {node.icon}
                      </div>
                      
                      {/* The Text */}
                      <div className={`transition-opacity duration-300 px-1 flex flex-col items-center ${activeStep === i ? 'opacity-100' : 'opacity-40 group-hover:opacity-80'}`}>
                        <h4 className="text-xs md:text-sm font-bold leading-tight mb-1">{node.label}</h4>
                        <p className="text-[10px] md:text-xs text-black/60 leading-snug">{node.desc}</p>
                        
                        {!hasInteracted && i === 0 && (
                          <motion.span 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[10px] bg-black/5 text-black/60 px-2 py-1 rounded-full animate-pulse whitespace-nowrap"
                          >
                            <MousePointer2 size={10} /> Click to explore
                          </motion.span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Mobile "Explore More" Button */}
            {system && system.nodes.length > 4 && (
              <div className="w-full flex justify-center mt-8 md:hidden relative z-20">
                <button 
                  onClick={() => setIsMobileExpanded(!isMobileExpanded)}
                  className="bg-black/5 hover:bg-black/10 text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  {isMobileExpanded ? "Show Less" : "Explore Full System"}
                </button>
              </div>
            )}
          </div>

          {/* ==================================================== */}
          {/* THE PRODUCT SHOWCASE CARD                            */}
          {/* ==================================================== */}
          <div className="w-full lg:w-1/2 order-2 lg:sticky lg:top-8 z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedIndustry}-${activeStep}`}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full bg-white rounded-2xl shadow-2xl border border-black/5 flex flex-col overflow-hidden"
              >
                {/* Mockup Image */}
                <div className="w-full h-[180px] md:h-[200px] bg-black/5 relative overflow-hidden group">
                  <img 
                    src={system?.nodes[activeStep].image} 
                    alt={system?.nodes[activeStep].label} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex flex-col gap-4 bg-white relative z-10">
                  
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-xl font-extrabold mb-1 tracking-tight">{system?.nodes[activeStep].label}</h4>
                      <p className="text-black/60 text-sm leading-relaxed">{system?.nodes[activeStep].desc}</p>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-black/5 my-1" />

                  <div>
                    <h5 className="font-bold text-[10px] tracking-widest uppercase text-black/40 mb-3">Business Benefits</h5>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                      {system?.nodes[activeStep].benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs md:text-sm">
                          <span className="leading-none shrink-0 text-base">{benefit.split(" ")[0]}</span>
                          <span className="font-medium text-black/80 leading-tight">{benefit.substring(benefit.indexOf(" ") + 1)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
