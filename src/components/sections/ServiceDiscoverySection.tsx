import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Globe, ShoppingCart, Store, Cpu, Bot, Layers, 
  CheckCircle2, Sparkles, Zap, Smartphone, Laptop, Check, TrendingUp, Play, MessageCircle
} from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/data/servicesData";

/* ─── 1. Websites Motion Graphic ─────────────────────────────────── */
function WebsitesMotionGraphic() {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[300px] p-4 sm:p-6 bg-slate-900 rounded-2xl text-white flex flex-col justify-between relative overflow-hidden select-none">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

      {/* Top Bar: Controls */}
      <div className="flex items-center justify-between relative z-10 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="text-[11px] font-mono text-slate-400 ml-1">krunnex.dev/site</span>
        </div>

        {/* Viewport Switcher */}
        <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-lg border border-slate-700">
          <button
            onClick={() => setViewMode("desktop")}
            className={`p-1.5 rounded-md transition-colors ${viewMode === "desktop" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"}`}
            title="Desktop Mode"
          >
            <Laptop size={14} />
          </button>
          <button
            onClick={() => setViewMode("mobile")}
            className={`p-1.5 rounded-md transition-colors ${viewMode === "mobile" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"}`}
            title="Mobile Mode"
          >
            <Smartphone size={14} />
          </button>
        </div>
      </div>

      {/* Main Visual Display */}
      <div className="flex-1 flex items-center justify-center relative z-10 py-4">
        <AnimatePresence mode="wait">
          {viewMode === "desktop" ? (
            <motion.div
              key="desktop"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-sm bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-200">Sub-Second React Architecture</span>
                <span className="text-[10px] font-black bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  99/100 Core Web Vitals
                </span>
              </div>
              <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden mb-3">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "98%" }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Page Load Speed:</span>
                <span className="text-emerald-400 font-bold">0.3s (Edge CDN)</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-48 bg-slate-800 border-2 border-indigo-500/50 rounded-2xl p-3.5 shadow-2xl"
            >
              <div className="w-12 h-1 bg-slate-600 rounded-full mx-auto mb-2" />
              <div className="h-3 w-3/4 bg-slate-700 rounded mb-1.5" />
              <div className="h-2 w-1/2 bg-slate-700/60 rounded mb-3" />
              <div className="h-10 bg-indigo-600/30 border border-indigo-500/40 rounded-lg flex items-center justify-center text-[10px] font-bold text-indigo-300">
                1-Thumb Touch CTA
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Speed Chip */}
      <motion.div 
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex items-center justify-between pt-2 border-t border-slate-800 text-[11px] text-slate-400"
      >
        <span className="flex items-center gap-1 text-indigo-400 font-semibold">
          <Zap size={13} /> Zero WordPress Bloat
        </span>
        <span className="text-slate-500">100% Custom Code</span>
      </motion.div>
    </div>
  );
}

/* ─── 2. E-Commerce Motion Graphic ───────────────────────────────── */
function EcommerceMotionGraphic() {
  const [paid, setPaid] = useState(false);

  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[300px] p-4 sm:p-6 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl text-white flex flex-col justify-between relative overflow-hidden select-none">
      <div className="flex items-center justify-between pb-3 border-b border-indigo-900/50">
        <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
          <ShoppingCart size={14} /> 1-Click Storefront
        </span>
        <span className="text-[10px] font-bold bg-indigo-500/20 text-indigo-300 px-2.5 py-0.5 rounded-full border border-indigo-500/30">
          UPI Instant Pay
        </span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center py-4">
        <motion.div
          animate={{ scale: paid ? [1, 1.03, 1] : 1 }}
          className="w-full max-w-xs bg-slate-800/95 border border-indigo-500/40 rounded-2xl p-4 shadow-xl"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-slate-400 font-medium">Order Total:</span>
            <span className="text-lg font-black text-white">₹1,850</span>
          </div>

          <button
            onClick={() => setPaid(!paid)}
            className={`w-full py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all cursor-pointer ${
              paid
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30"
            }`}
          >
            {paid ? (
              <>
                <Check size={14} strokeWidth={3} /> Payment Received via UPI
              </>
            ) : (
              <>
                <Zap size={14} /> Tap to Simulate 1-Click UPI
              </>
            )}
          </button>
        </motion.div>

        {paid && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 text-[11px] text-emerald-400 font-bold flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            WhatsApp receipt sent to customer automatically
          </motion.div>
        )}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-indigo-900/50 text-[11px] text-slate-400">
        <span>GPay · PhonePe · Paytm</span>
        <span className="text-emerald-400 font-bold">Sub-Second Checkout</span>
      </div>
    </div>
  );
}

/* ─── 3. Restaurant POS & QR Motion Graphic ──────────────────────── */
function RestaurantPosMotionGraphic() {
  const [activeTable, setActiveTable] = useState(12);
  const [kotSent, setKotSent] = useState(false);

  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[300px] p-4 sm:p-6 bg-slate-900 rounded-2xl text-white flex flex-col justify-between relative overflow-hidden select-none">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <span className="text-xs font-bold text-orange-400 flex items-center gap-1.5">
          <Store size={14} /> Zero-Commission POS
        </span>
        <span className="text-[10px] font-bold bg-orange-500/20 text-orange-300 px-2.5 py-0.5 rounded-full border border-orange-500/30">
          Live Floor Plan
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-center py-3">
        <p className="text-[11px] text-slate-400 text-center mb-3">Select a table to simulate contactless ordering:</p>
        
        {/* Table Selector */}
        <div className="flex justify-center gap-2.5 mb-4">
          {[4, 8, 12, 16].map((t) => (
            <button
              key={t}
              onClick={() => {
                setActiveTable(t);
                setKotSent(false);
              }}
              className={`w-12 h-11 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                activeTable === t
                  ? "bg-orange-500 text-white border-orange-400 shadow-lg shadow-orange-500/30 scale-105"
                  : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
              }`}
            >
              T-{t}
            </button>
          ))}
        </div>

        {/* Action card */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-3 text-center max-w-xs mx-auto w-full">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-bold text-white">Table #{activeTable} Tab</span>
            <span className="text-emerald-400 font-bold">₹780 (2 Items)</span>
          </div>
          <button
            onClick={() => setKotSent(true)}
            className={`w-full py-2 rounded-lg text-xs font-black transition-all cursor-pointer ${
              kotSent
                ? "bg-emerald-600 text-white"
                : "bg-orange-500 hover:bg-orange-400 text-white"
            }`}
          >
            {kotSent ? "✓ KOT Dispatched to Kitchen" : "Send Order to Kitchen Display (KOT)"}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px] text-slate-400">
        <span>QR Table Menu</span>
        <span className="text-orange-400 font-bold">Zero Swiggy/Zomato Fees</span>
      </div>
    </div>
  );
}

/* ─── 4. Custom Business Software Motion Graphic ─────────────────── */
function CustomSoftwareMotionGraphic() {
  const [role, setRole] = useState<"admin" | "manager">("admin");

  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[300px] p-4 sm:p-6 bg-slate-900 rounded-2xl text-white flex flex-col justify-between relative overflow-hidden select-none">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
          <Cpu size={14} /> Operations Command Hub
        </span>
        <div className="flex items-center gap-1 bg-slate-800 p-0.5 rounded-lg text-[10px] font-bold">
          <button
            onClick={() => setRole("admin")}
            className={`px-2 py-0.5 rounded ${role === "admin" ? "bg-cyan-500 text-slate-950 font-black" : "text-slate-400"}`}
          >
            Admin
          </button>
          <button
            onClick={() => setRole("manager")}
            className={`px-2 py-0.5 rounded ${role === "manager" ? "bg-cyan-500 text-slate-950 font-black" : "text-slate-400"}`}
          >
            Manager
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center py-3">
        <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-3.5 max-w-xs mx-auto w-full">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] text-slate-400">Active Workflow Queue</span>
            <span className="text-xs font-bold text-cyan-400">24 Tasks</span>
          </div>

          {/* Bar Chart Bars */}
          <div className="flex items-end justify-between gap-2 h-14 pt-2 mb-2">
            {[40, 75, 55, 95, 80, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="w-full rounded-t bg-gradient-to-t from-cyan-600 to-indigo-500"
              />
            ))}
          </div>

          <div className="text-[10px] text-slate-400 flex justify-between pt-1 border-t border-slate-700/60">
            <span>Role Permissions:</span>
            <span className="text-white font-mono">{role === "admin" ? "Full Master Access" : "Scoped View"}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px] text-slate-400">
        <span>PostgreSQL & Spring Boot</span>
        <span className="text-cyan-400 font-bold">No Spreadsheets Needed</span>
      </div>
    </div>
  );
}

/* ─── 5. AI & WhatsApp Automation Motion Graphic ─────────────────── */
function AiWhatsappMotionGraphic() {
  const [messages, setMessages] = useState([
    { from: "user", text: "Hi, can I see your menu & prices?" },
    { from: "bot", text: "👋 Here is our live digital menu! Tap below to order with UPI." }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const simulateChat = (userQuery: string, botReply: string) => {
    setIsTyping(true);
    setMessages(prev => [...prev, { from: "user", text: userQuery }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: botReply }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[300px] p-4 sm:p-6 bg-[#0B141A] rounded-2xl text-white flex flex-col justify-between relative overflow-hidden select-none">
      {/* WhatsApp Header Bar */}
      <div className="flex items-center gap-3 pb-2.5 border-b border-slate-800">
        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">
          <MessageCircle size={16} />
        </div>
        <div>
          <p className="text-xs font-bold text-white leading-none">Krunnex AI Assistant</p>
          <p className="text-[10px] text-emerald-400 mt-0.5">Online · Auto-Reply Active</p>
        </div>
      </div>

      {/* Chat Stream */}
      <div className="flex-1 py-3 flex flex-col justify-end gap-2 overflow-hidden">
        {messages.slice(-2).map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-[85%] rounded-xl px-3 py-1.5 text-xs ${
              m.from === "user"
                ? "bg-[#005C4B] text-white self-end rounded-tr-none"
                : "bg-[#202C33] text-slate-200 self-start rounded-tl-none border border-slate-700/40"
            }`}
          >
            {m.text}
          </motion.div>
        ))}

        {isTyping && (
          <div className="bg-[#202C33] text-slate-400 self-start rounded-xl px-3 py-1 text-xs animate-pulse">
            AI is generating response...
          </div>
        )}

        {/* Quick Tap Simulator Chips */}
        <div className="flex gap-2 pt-1">
          <button
            onClick={() => simulateChat("Do you have table booking?", "Yes! Table #12 is ready for you. Confirming now.")}
            className="text-[10px] bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 px-2 py-1 rounded-md transition-colors cursor-pointer"
          >
            + "Book a table?"
          </button>
          <button
            onClick={() => simulateChat("Where is my order?", "Order #48 is in final kitchen prep! Ready in 4 mins.")}
            className="text-[10px] bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 px-2 py-1 rounded-md transition-colors cursor-pointer"
          >
            + "Track order?"
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px] text-slate-400">
        <span>Meta Cloud API</span>
        <span className="text-[#25D366] font-bold">24/7 Instant Responses</span>
      </div>
    </div>
  );
}

/* ─── 6. SaaS & Mobile Apps Motion Graphic ───────────────────────── */
function SaasMobileMotionGraphic() {
  const [tenants, setTenants] = useState(["Acme Corp", "CloudNet"]);

  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[300px] p-4 sm:p-6 bg-slate-900 rounded-2xl text-white flex flex-col justify-between relative overflow-hidden select-none">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <span className="text-xs font-bold text-violet-400 flex items-center gap-1.5">
          <Layers size={14} /> Multi-Tenant Architecture
        </span>
        <span className="text-[10px] font-bold bg-violet-500/20 text-violet-300 px-2.5 py-0.5 rounded-full border border-violet-500/30">
          Stripe Subscriptions
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-center py-3">
        <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-3.5 max-w-xs mx-auto w-full">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-white">Active Tenant</span>
            <span className="text-[10px] font-black bg-indigo-500/30 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/40">
              Pro Tier · ₹4,999/mo
            </span>
          </div>

          <div className="space-y-1.5 text-xs text-slate-300 mb-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-400">Database Isolation:</span>
              <span className="text-emerald-400 font-mono text-[11px]">Enforced</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-400">Mobile App Sync:</span>
              <span className="text-cyan-400 font-mono text-[11px]">iOS + Android</span>
            </div>
          </div>

          <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: ["30%", "85%", "30%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-violet-500 to-indigo-400"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px] text-slate-400">
        <span>React Native & Spring Boot</span>
        <span className="text-violet-400 font-bold">100% Elastic Scale</span>
      </div>
    </div>
  );
}

/* ─── Graphic Switcher Map ───────────────────────────────────────── */
const GRAPHICS_MAP: Record<string, React.FC> = {
  websites: WebsitesMotionGraphic,
  ecommerce: EcommerceMotionGraphic,
  "restaurant-pos": RestaurantPosMotionGraphic,
  "custom-software": CustomSoftwareMotionGraphic,
  "ai-automation": AiWhatsappMotionGraphic,
  "saas-mobile-apps": SaasMobileMotionGraphic,
};

const iconMap = {
  Globe: Globe,
  ShoppingCart: ShoppingCart,
  Store: Store,
  Cpu: Cpu,
  Bot: Bot,
  Layers: Layers,
};

/* ─── Main Service Discovery Section Component ───────────────────── */
export default function ServiceDiscoverySection() {
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>("websites");

  const selectedService = SERVICES_DATA.find(s => s.slug === selectedServiceSlug) || SERVICES_DATA[0];
  const ActiveMotionGraphic = GRAPHICS_MAP[selectedService.slug] || WebsitesMotionGraphic;
  const ActiveIcon = iconMap[selectedService.iconName] || Globe;

  return (
    <section id="services" className="py-20 md:py-32 bg-white border-t border-slate-200/80 text-slate-900 font-sans">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block mb-3.5">
            Main Service Discovery
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight mb-4">
            What Are You Looking For?
          </h2>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Choose what your business needs. Tap below to test live motion graphics, view features, and explore deliverables.
          </p>
        </div>

        {/* 6 Clickable Service Tabs (Mobile-friendly horizontal chip wrap) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 max-w-4xl mx-auto">
          {SERVICES_DATA.map((service) => {
            const isSelected = selectedServiceSlug === service.slug;
            const Icon = iconMap[service.iconName] || Globe;
            return (
              <button
                key={service.slug}
                onClick={() => setSelectedServiceSlug(service.slug)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  isSelected
                    ? "bg-slate-950 text-white shadow-lg scale-105"
                    : "bg-slate-100/90 text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-200/60"
                }`}
              >
                <Icon size={16} />
                <span>{service.name}</span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE SHOWCASE STAGE: Interactive Motion Graphic + Detailed Information */}
        <div className="rounded-3xl border-2 border-indigo-600/30 bg-gradient-to-br from-indigo-50/40 via-white to-slate-50 p-6 sm:p-10 lg:p-12 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Interactive Motion Graphic */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <ActiveMotionGraphic />
              </div>
              <p className="text-[11px] text-slate-400 text-center mt-2 font-medium">
                Interactive motion graphic — simulated production workflow
              </p>
            </div>

            {/* Right Column: Clear Service Breakdown & Direct Action */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100/80 px-3 py-1 rounded-full">
                    Selected Solution
                  </span>
                  <span className="text-sm font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
                    Starts @ {selectedService.startingPrice}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-slate-950 mb-3 tracking-tight">
                  {selectedService.name}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                  {selectedService.shortDesc}
                </p>

                {/* Key Deliverables Checklist */}
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Implemented Deliverables:
                </h4>
                <div className="space-y-2.5 mb-8">
                  {selectedService.deliverables.slice(0, 3).map((del, di) => (
                    <div key={di} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                      <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span>{del.title} — <span className="text-slate-500 font-normal">{del.desc}</span></span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Next-Step CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200/80">
                <Link
                  to={`/solutions/${selectedService.slug}`}
                  className="flex-1 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-bold text-white shadow-md hover:bg-slate-800 transition-all text-center"
                >
                  Explore Full {selectedService.name} Details <ArrowRight size={15} />
                </Link>
                <Link
                  to={`/estimate?service=${selectedService.slug}`}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white border border-slate-300 px-6 text-sm font-bold text-slate-800 hover:bg-slate-50 transition-all text-center shadow-sm"
                >
                  Estimate Cost
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* 6 Grid Cards Below for Quick Scan */}
        <h3 className="text-xl sm:text-2xl font-black text-slate-950 text-center mb-8">
          All 6 Core Systems Available
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.iconName] || Globe;
            const isSelected = selectedServiceSlug === service.slug;

            return (
              <div
                key={service.slug}
                onClick={() => setSelectedServiceSlug(service.slug)}
                className={`group rounded-3xl border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-white border-indigo-600 shadow-xl ring-4 ring-indigo-500/10 -translate-y-1"
                    : "bg-[#FAFAFA] border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                      isSelected ? "bg-slate-950 text-white shadow-md" : "bg-white border border-slate-200 text-indigo-600"
                    }`}>
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                      Starts @ {service.startingPrice}
                    </span>
                  </div>

                  <h4 className="text-xl font-black text-slate-950 mb-2 leading-snug">
                    {service.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5 line-clamp-2">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className={isSelected ? "text-indigo-600" : "text-slate-500 group-hover:text-slate-900"}>
                    {isSelected ? "Active in Preview Stage ↑" : "Tap to Preview Motion Graphic"}
                  </span>
                  <Link
                    to={`/solutions/${service.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-slate-900 hover:text-indigo-600 font-extrabold"
                  >
                    Open Page <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
