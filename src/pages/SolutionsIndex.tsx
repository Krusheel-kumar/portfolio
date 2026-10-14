import { Link } from "react-router-dom";
import { ArrowRight, Globe, ShoppingCart, Store, Cpu, Bot, Layers, CheckCircle2, Calculator } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import { SERVICES_DATA } from "@/data/servicesData";

const iconMap = {
  Globe: Globe,
  ShoppingCart: ShoppingCart,
  Store: Store,
  Cpu: Cpu,
  Bot: Bot,
  Layers: Layers,
};

export default function SolutionsIndex() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-indigo-500/20 selection:text-indigo-900">
      <Navbar />

      <main className="pt-36 pb-24 sm:pt-44 md:pt-48">
        
        {/* Header */}
        <div className="container mx-auto px-5 md:px-10 max-w-6xl text-center mb-16 md:mb-24">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block mb-4">
            Engineered For Your Operations
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight mb-5">
            Digital Solutions & Custom Software
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Choose what your business needs. Explore features, deliverables, genuine portfolio projects, and indicative pricing.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="container mx-auto px-5 md:px-10 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20">
            {SERVICES_DATA.map((service) => {
              const Icon = iconMap[service.iconName] || Globe;
              return (
                <div
                  key={service.slug}
                  className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 flex flex-col justify-between hover:border-indigo-400 hover:shadow-xl transition-all duration-300 group"
                >
                  <div>
                    {/* Top Row: Icon + Price */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-105 group-hover:bg-slate-950 group-hover:text-white transition-all">
                        <Icon size={26} />
                      </div>
                      <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                        Starts @ {service.startingPrice}
                      </span>
                    </div>

                    <h2 className="text-2xl font-black text-slate-950 mb-3 tracking-tight group-hover:text-indigo-600 transition-colors">
                      {service.name}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {service.shortDesc}
                    </p>

                    {/* Key Deliverables Sample */}
                    <div className="space-y-2 mb-8 pt-4 border-t border-slate-100">
                      {service.deliverables.slice(0, 3).map((d, di) => (
                        <div key={di} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                          <span className="truncate">{d.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/solutions/${service.slug}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-full bg-slate-950 text-white text-xs font-bold uppercase tracking-wider group-hover:bg-indigo-600 transition-all shadow-sm"
                  >
                    Explore Solution & Case Studies <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Quick Estimator CTA Card */}
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-indigo-50 via-white to-slate-50 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">Interactive Tool</span>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-950 mb-3">
              Need to estimate costs across multiple services?
            </h3>
            <p className="text-base text-slate-600 max-w-xl mx-auto mb-8 font-normal">
              Use our interactive, step-by-step project estimator to calculate an indicative price range for your required features and integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/estimate"
                className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-slate-950 px-8 text-sm font-bold text-white hover:bg-slate-800 transition-all shadow-md"
              >
                <Calculator size={18} /> Launch Project Cost Estimator
              </Link>
              <Link
                to="/pricing"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white border border-slate-300 px-8 text-sm font-bold text-slate-800 hover:bg-slate-50 transition-all"
              >
                View Standard Pricing Tiers
              </Link>
            </div>
          </div>

        </div>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
