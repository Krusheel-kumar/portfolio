import { 
  Menu, X, ArrowRight, MessageCircle, Phone, 
  Mail, Calculator, Sparkles, ChevronDown, CheckCircle2 
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface NavLinkItem {
  label: string;
  href: string;
  isRoute?: boolean;
  badge?: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "Solutions", href: "/solutions", isRoute: true, badge: "6 Systems" },
  { label: "Portfolio", href: "/portfolio", isRoute: true },
  { label: "How We Work", href: "/#process" },
  { label: "Pricing", href: "/pricing", isRoute: true },
  { label: "Cost Estimator", href: "/estimate", isRoute: true, badge: "Interactive" },
  { label: "About", href: "/#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLinkClick = (link: NavLinkItem) => {
    setMobileOpen(false);
    if (link.isRoute) {
      navigate(link.href);
      return;
    }

    if (link.href.startsWith("/#")) {
      const targetId = link.href.replace("/#", "");
      if (location.pathname === "/") {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        navigate(`/#${targetId}`);
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 transition-all duration-300">
        {/* Main Navbar */}
        <nav 
          aria-label="Main Navigation"
          className={`w-full transition-all duration-300 ease-out ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/90 py-2.5 sm:py-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
              : "bg-white/90 backdrop-blur-md border-b border-slate-200/60 py-3 sm:py-4 shadow-2xs"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-8 md:px-12 max-w-7xl flex items-center justify-between">

            {/* LOGO + BRAND SUBTITLE */}
            <Link to="/" className="flex items-center gap-3 group shrink-0" aria-label="Krunnex Home">
              <img
                src="/images/krunnex_logo.png"
                alt="Krunnex"
                className="h-12 sm:h-16 md:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden xl:flex flex-col border-l border-slate-200 pl-3">
                <span className="text-xs font-black tracking-widest text-slate-900 uppercase">DIGITAL SYSTEMS</span>
                <span className="text-[10px] font-semibold text-slate-500">Custom Engineering & POS</span>
              </div>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden lg:flex items-center gap-7 xl:gap-9">
              {NAV_LINKS.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link)}
                  className="text-sm xl:text-[15px] font-bold text-slate-700 hover:text-slate-950 transition-all relative group whitespace-nowrap cursor-pointer tracking-tight flex items-center gap-1.5 py-1"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      {link.badge}
                    </span>
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full rounded-full" />
                </button>
              ))}
            </div>

            {/* DESKTOP CTAS: WHATSAPP DIRECT + START A PROJECT */}
            <div className="hidden lg:flex items-center gap-3">
              {/* WhatsApp Quick Connect Pill */}
              <a
                href="https://wa.me/917794971935?text=Hi%20Krunnex%2C%20I'd%20like%20to%20discuss%20a%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-emerald-300/80 bg-emerald-50/70 hover:bg-emerald-100/80 px-4 py-2.5 text-xs font-bold text-emerald-800 transition-all duration-200 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <MessageCircle size={15} className="text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>

              {/* Start a Project Primary Button */}
              <Link
                to="/contact"
                className="group relative flex items-center gap-2 rounded-full bg-slate-950 px-6 py-2.5 text-xs xl:text-sm font-bold text-white transition-all duration-300 shadow-[0_4px_18px_rgba(15,23,42,0.18)] hover:bg-slate-800 hover:scale-[1.02] active:scale-98"
              >
                <span>Start a Project</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* MOBILE ACTIONS: DIRECT WHATSAPP + HAMBURGER */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href="https://wa.me/917794971935?text=Hi%20Krunnex%2C%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-3 flex items-center gap-1.5 rounded-xl bg-emerald-500 text-white font-bold text-xs shadow-sm active:scale-95 transition-transform"
                aria-label="Direct WhatsApp Chat"
              >
                <MessageCircle size={16} />
                <span>Chat</span>
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="h-11 w-11 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition-colors shadow-sm cursor-pointer"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation</span>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Q4/2026
                </span>
              </div>

              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleLinkClick(link)}
                    className="text-left text-xl font-black text-slate-900 hover:text-indigo-600 py-3 border-b border-slate-100 flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span>{link.label}</span>
                    {link.badge ? (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                        {link.badge}
                      </span>
                    ) : (
                      <ArrowRight size={14} className="text-slate-300" />
                    )}
                  </button>
                ))}
              </nav>

              {/* Direct Reach Card inside Mobile Menu */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Direct Contact</p>
                <div className="space-y-2">
                  <a href="tel:+917794971935" className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <Phone size={15} className="text-emerald-600" /> +91 77949 71935
                  </a>
                  <a href="mailto:krusheelkumar7@gmail.com" className="flex items-center gap-2 text-xs font-medium text-slate-600">
                    <Mail size={14} className="text-indigo-600" /> krusheelkumar7@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 space-y-3">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-slate-950 text-white py-4 rounded-2xl text-base font-bold shadow-lg"
              >
                Start a Project <ArrowRight size={17} />
              </Link>
              <a
                href="https://wa.me/917794971935?text=Hi%20Krunnex%2C%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3.5 rounded-2xl text-sm font-bold shadow-sm"
              >
                <MessageCircle size={18} /> Chat on WhatsApp Directly
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
