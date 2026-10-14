import { Link } from "react-router-dom";
import { 
  ArrowRight, Globe, ShoppingCart, Store, Cpu, Bot, Layers, CheckCircle2 
} from "lucide-react";
import { SERVICES_DATA } from "@/data/servicesData";

const iconMap = {
  Globe: Globe,
  ShoppingCart: ShoppingCart,
  Store: Store,
  Cpu: Cpu,
  Bot: Bot,
  Layers: Layers,
};

export default function ServiceDiscoverySection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white border-t border-slate-200/80 text-slate-900 font-sans">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block mb-3.5">
            Main Service Discovery
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight mb-4">
            What Are You Looking For?
          </h2>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Choose what your business needs. Explore our solutions, features, projects, and estimated investment.
          </p>
        </div>

        {/* 6 Clickable Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.iconName] || Globe;

            return (
              <Link
                key={service.slug}
                to={`/solutions/${service.slug}`}
                className="group relative rounded-3xl border border-slate-200 bg-[#FAFAFA] hover:bg-white p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-indigo-400 hover:shadow-[0_20px_40px_rgba(79,70,229,0.08)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-600 cursor-pointer"
              >
                <div>
                  {/* Top Bar: Icon + Starting Price Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-indigo-600 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all duration-300">
                      <Icon size={26} />
                    </div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full">
                      Starts @ {service.startingPrice}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-3 tracking-tight group-hover:text-indigo-600 transition-colors">
                    {service.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Visual Interface Preview */}
                  <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white mb-6 h-36 sm:h-40 relative">
                    <img
                      src={service.heroImage}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold text-slate-900 shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Live Custom System
                    </div>
                  </div>

                  {/* Sample Key Deliverables */}
                  <div className="space-y-1.5 mb-6">
                    {service.deliverables.slice(0, 2).map((del, di) => (
                      <div key={di} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                        <span className="truncate">{del.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore Action Link */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  <span>Explore Solution Details</span>
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
