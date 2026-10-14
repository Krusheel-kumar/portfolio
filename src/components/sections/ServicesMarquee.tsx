import { Link } from "react-router-dom";

const CORE_SERVICES = [
  { name: "Websites & Web Applications", slug: "websites-web-applications" },
  { name: "Restaurant POS & QR Ordering", slug: "restaurant-pos-qr-ordering" },
  { name: "E-Commerce Stores", slug: "ecommerce-stores" },
  { name: "Custom Business Software", slug: "custom-business-software" },
  { name: "AI & WhatsApp Automation", slug: "ai-whatsapp-automation" },
  { name: "SaaS Platforms & Mobile Apps", slug: "saas-platforms-mobile-apps" },
  { name: "Custom Billing & KOT Systems", slug: "restaurant-pos-qr-ordering" },
  { name: "Business Workflow Automation", slug: "custom-business-software" },
  { name: "Cloud Architecture & APIs", slug: "custom-business-software" },
];

export default function ServicesMarquee() {
  // Triple the items to ensure infinite seamless loop without gaps on all viewports
  const items = [...CORE_SERVICES, ...CORE_SERVICES, ...CORE_SERVICES];

  return (
    <div className="relative w-full overflow-hidden bg-white/70 backdrop-blur-md py-3 sm:py-3.5 border-y border-slate-200/70 z-20">
      
      {/* Light Gradient Left & Right Fade Masks for Smooth Continuous Flow */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA]/90 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-l from-[#FAFAFA] via-[#FAFAFA]/90 to-transparent" />

      {/* Auto-scrolling Single-Line Service Names */}
      <div 
        className="flex items-center gap-7 sm:gap-10 whitespace-nowrap animate-ticker hover:[animation-play-state:paused]"
        style={{ width: "max-content" }}
      >
        {items.map((service, idx) => (
          <Link
            key={idx}
            to={`/solutions/${service.slug}`}
            className="inline-flex items-center gap-7 sm:gap-10 group cursor-pointer select-none"
          >
            <span className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-slate-800 group-hover:text-indigo-600 transition-colors duration-200">
              {service.name}
            </span>
            
            {/* Glowing Purple-Indigo Accent Diamond */}
            <span 
              className="text-indigo-600 group-hover:scale-125 transition-transform text-[11px] font-black drop-shadow-[0_0_6px_rgba(99,102,241,0.4)]"
              aria-hidden="true"
            >
              ✦
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
