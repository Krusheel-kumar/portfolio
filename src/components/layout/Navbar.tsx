import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          : "bg-transparent py-5"
      }`}>
        <div className="container mx-auto px-5 md:px-10 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src="/images/krunnex_logo.png"
              alt="Krunnex"
              className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-semibold text-slate-600 hover:text-slate-950 transition-all relative group whitespace-nowrap cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-indigo-600 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/start-project"
              className="group relative flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 shadow-[0_4px_14px_rgba(15,23,42,0.2)] hover:bg-slate-800 hover:scale-[1.02] active:scale-98"
            >
              Start a Project <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 transition-colors shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl pt-24 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-2 mt-4">
              {NAV_LINKS.map((link, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-2xl font-bold text-slate-800 hover:text-indigo-600 py-4 border-b border-slate-100 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <Link
                to="/start-project"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-4 rounded-2xl text-base font-bold shadow-lg"
              >
                Start a Project <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
