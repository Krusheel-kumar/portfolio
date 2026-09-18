import { Menu, ArrowRight } from "lucide-react";
import { type Persona } from "@/pages/Home";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  persona: Persona;
  setPersona: (p: Persona) => void;
}

const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Success Stories", href: "#work" },
  { label: "How We Build", href: "#process" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar({ persona, setPersona }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isEng = persona === 'engineering';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
      scrolled 
        ? isEng 
          ? "bg-[#0a0a0a]/80 backdrop-blur-2xl border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "bg-white/80 backdrop-blur-2xl border-b border-black/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.05)]"
        : "bg-transparent py-6"
    }`}>
      {/* 
        Using grid layout to ensure the center links are perfectly in the middle 
        while keeping the left and right sections aligned to the edges.
      */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-3 items-center gap-4">
        
        {/* LOGO - Trust Anchor */}
        <div className="flex items-center cursor-pointer group shrink-0">
          <img 
            src="/images/krunnex_logo.png" 
            alt="Krunnex Logo" 
            className="h-14 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
        
        {/* DESKTOP LINKS (Perfectly Centered) */}
        {!isEng && (
          <div className="hidden lg:flex items-center justify-center gap-10">
            {NAV_LINKS.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href}
                className="text-base font-semibold text-gray-500 hover:text-black transition-all relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        )}
        {/* Placeholder div to keep grid balanced when in Engineering mode */}
        {isEng && <div className="hidden lg:block"></div>}
        
        {/* DESKTOP RIGHT (Right Aligned) */}
        <div className="hidden md:flex items-center justify-end gap-5">
          
          {/* Subtle Segmented Control for Persona */}
          <div className={`flex items-center p-1 rounded-full border backdrop-blur-md ${
            isEng ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
          }`}>
            <button 
              onClick={() => setPersona("business")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                !isEng ? 'bg-white text-black shadow-sm' : 'text-white/50 hover:text-white'
              }`}
            >
              Business
            </button>
            <button 
              onClick={() => setPersona("engineering")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                isEng ? 'bg-green-500 text-black shadow-md' : 'text-gray-500 hover:text-black'
              }`}
            >
              Portfolio
            </button>
          </div>
          
          {/* High-Contrast CTA Button */}
          <Link 
            to="/start-project"
            className={`group relative flex items-center justify-center gap-2 rounded-full px-7 py-2.5 text-sm font-semibold transition-all duration-300 overflow-hidden shadow-lg ${
              isEng 
                ? 'bg-green-500 text-black hover:scale-105 shadow-green-500/25' 
                : 'bg-black text-white hover:scale-105 shadow-black/20'
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isEng ? 'bg-green-400' : 'bg-gray-800'}`} />
          </Link>
        </div>
        
        {/* MOBILE VIEW (Right Aligned) */}
        <div className="md:hidden flex items-center justify-end gap-3">
          <div className={`flex items-center p-1 rounded-full border backdrop-blur-md ${
            isEng ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
          }`}>
            <button 
              onClick={() => setPersona("business")}
              className={`px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-wide transition-all ${
                !isEng ? 'bg-white text-black shadow-sm' : 'text-white/50'
              }`}
            >
              Business
            </button>
            <button 
              onClick={() => setPersona("engineering")}
              className={`px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-wide transition-all ${
                isEng ? 'bg-green-500 text-black shadow-md' : 'text-gray-500'
              }`}
            >
              Portfolio
            </button>
          </div>
          
          <button className={`h-10 w-10 flex items-center justify-center rounded-full border transition-colors shrink-0 ${
            isEng ? 'text-white border-white/10 bg-white/5 hover:bg-white/10' : 'text-black border-black/10 bg-black/5 hover:bg-black/10'
          }`}>
            <Menu className="h-5 w-5" />
          </button>
        </div>

      </div>
    </nav>
  );
}
