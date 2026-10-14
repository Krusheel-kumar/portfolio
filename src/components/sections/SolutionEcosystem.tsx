import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Industry } from "@/pages/Home";
import { 
  Globe, Utensils, Settings, Bot, TrendingUp, CheckCircle2, PlayCircle,
  ShoppingCart, Cpu, CreditCard, Layout, Store, BarChart
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
          accentColor: "text-orange-600 bg-orange-50 border-orange-200",
          nodes: [
            { 
              icon: <Globe size={22} />, 
              label: "High-Speed Direct Website", 
              desc: "A custom web app with lightning-fast menus and table booking that converts walk-ins into repeat patrons.",
              benefits: ["Outrank local competitors", "Direct reservations", "Zero portal commissions", "Instant Google indexing"],
              image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
            },
            { 
              icon: <Utensils size={22} />, 
              label: "Zero-Commission Ordering & QR", 
              desc: "Save 25-30% on food delivery fees. Allow guests to scan table QR codes, order online, and pay seamlessly.",
              benefits: ["Keep 100% of revenue", "Faster table turns", "Digital contactless menu", "Automated KOT print"],
              image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
            },
            { 
              icon: <Bot size={22} />, 
              label: "AI WhatsApp Assistant", 
              desc: "An intelligent bot that handles order confirmations, customer queries, and table bookings automatically 24/7.",
              benefits: ["Zero staff intervention", "Instant automated replies", "Loyalty balance alerts", "High repeat orders"],
              image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80"
            },
            { 
              icon: <Settings size={22} />, 
              label: "Central Command POS", 
              desc: "One clean dashboard to manage inventory, active tables, kitchen queues, and daily financial statements.",
              benefits: ["Real-time daily revenue", "Waste reduction analytics", "Staff shift tracking", "Multi-branch support"],
              image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        };
      case "ecommerce":
        return {
          title: "The E-Commerce Engine",
          accentColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
          nodes: [
            { 
              icon: <ShoppingCart size={22} />, 
              label: "High-Speed React Storefront", 
              desc: "Sub-second product pages engineered to boost mobile conversion rates and eliminate bounce rates.",
              benefits: ["Sub-second load times", "High SEO rankings", "3x mobile conversions", "Flawless browsing UX"],
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
            },
            { 
              icon: <CreditCard size={22} />, 
              label: "1-Click Checkout & Recovery", 
              desc: "Frictionless checkout capturing UPI, cards, and automated WhatsApp cart recovery messages.",
              benefits: ["Rescue 60%+ abandoned carts", "Instant UPI payments", "Lower drop-off rates", "Bank-grade security"],
              image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
            },
            { 
              icon: <Layout size={22} />, 
              label: "Automated Inventory & Shipping", 
              desc: "Automated order routing, shipping label creation, and real-time stock sync across multiple channels.",
              benefits: ["Save 15+ hours/week", "Prevent stockouts", "Automated tracking links", "Seamless fulfillment"],
              image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        };
      case "business":
        return {
          title: "The Operational Scaler",
          accentColor: "text-purple-600 bg-purple-50 border-purple-200",
          nodes: [
            { 
              icon: <Store size={22} />, 
              label: "B2B Lead Generation Funnel", 
              desc: "High-converting corporate landing pages that attract qualified enterprise inquiries around the clock.",
              benefits: ["5x more qualified leads", "Zero cold calling needed", "Professional brand credibility", "CRM auto-sync"],
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
            },
            { 
              icon: <Cpu size={22} />, 
              label: "24/7 AI Customer Assistant", 
              desc: "Custom AI trained on your company knowledge that handles client inquiries and books consultation calls.",
              benefits: ["Instant customer answers", "Save 40+ hours/week", "Reduces support overhead", "Scales with business"],
              image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80"
            },
            { 
              icon: <BarChart size={22} />, 
              label: "Custom Operations Dashboard", 
              desc: "Centralized real-time visibility into finances, team tasks, and client project deliverables.",
              benefits: ["Data-driven decisions", "Clear profit margins", "No manual spreadsheets", "Complete peace of mind"],
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        };
      default:
        return null;
    }
  };

  const system = getSystem(selectedIndustry || "restaurant");

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-200/80 text-slate-900 font-sans">
      <div className="container mx-auto px-5 md:px-10 max-w-6xl">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Interactive System Architecture
            </span>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mt-2">
              {system?.title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
              Starts @ ₹19,999
            </span>
            <a
              href="https://wa.me/917794971935?text=Hi%20Krunnex%2C%20I%27d%20like%20to%20see%20a%20live%20demo%20of%20the%20system."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-all shadow-sm"
            >
              <PlayCircle size={15} /> Request Live Demo
            </a>
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Feature Navigation Pills */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {system?.nodes.map((node, i) => {
              const isActive = activeStep === i;

              return (
                <div
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex items-start gap-4 ${
                    isActive
                      ? "bg-slate-50 border-slate-300 shadow-sm"
                      : "bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50/50"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                    isActive ? "bg-slate-900 text-white shadow-sm" : "bg-slate-100 text-slate-500"
                  }`}>
                    {node.icon}
                  </div>
                  <div>
                    <h4 className={`text-base font-bold mb-1 ${isActive ? "text-slate-950" : "text-slate-700"}`}>
                      {node.label}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {node.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Product Frame */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                </div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  {system?.nodes[activeStep].label}
                </span>
              </div>

              {/* Showcase Image */}
              <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 bg-slate-100 mb-6">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeStep}
                    src={system?.nodes[activeStep].image}
                    alt={system?.nodes[activeStep].label}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-sm text-xs font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Operational Mode
                </div>
              </div>

              {/* Benefits Checklist */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Impact & ROI</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {system?.nodes[activeStep].benefits.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
