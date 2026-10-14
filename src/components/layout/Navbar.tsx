import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface NavLinkItem {
  label: string;
  href: string;
  isRoute?: boolean;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "Solutions", href: "/solutions", isRoute: true },
  { label: "Portfolio", href: "/portfolio", isRoute: true },
  { label: "How We Work", href: "/#process" },
  { label: "Pricing", href: "/pricing", isRoute: true },
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
    const handleResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
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
      <nav 
        aria-label="Main Navigation"
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 py-3 sm:py-3.5 shadow-[0_4px_25px_rgba(0,0,0,0.04)]"
            : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="container mx-auto px-5 sm:px-8 md:px-12 max-w-7xl flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center group shrink-0" aria-label="Krunnex Home">
            <img
              src="/images/krunnex_logo.png"
              alt="Krunnex"
              className="h-14 sm:h-18 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-9 xl:gap-11">
            {NAV_LINKS.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(link)}
                className="text-base font-bold text-slate-700 hover:text-slate-950 transition-all relative group whitespace-nowrap cursor-pointer tracking-tight"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full rounded-full" />
              </button>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="group relative flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 shadow-[0_4px_18px_rgba(15,23,42,0.2)] hover:bg-slate-800 hover:scale-[1.02] active:scale-98"
            >
              Start a Project <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden h-12 w-12 flex items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition-colors shadow-sm cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl pt-24 pb-12 px-6 flex flex-col justify-between overflow-y-auto"
          >
            <nav className="flex flex-col gap-2 mt-4">
              {NAV_LINKS.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link)}
                  className="text-left text-2xl font-black text-slate-900 hover:text-indigo-600 py-3.5 border-b border-slate-100 transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="mt-8 pt-6 space-y-3">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-slate-950 text-white py-4 rounded-2xl text-base font-bold shadow-lg"
              >
                Start a Project <ArrowRight size={17} />
              </Link>
              <Link
                to="/estimate"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-slate-100 text-slate-800 py-4 rounded-2xl text-base font-bold"
              >
                Estimate My Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
