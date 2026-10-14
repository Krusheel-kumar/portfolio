import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, MessageCircle, Calculator, ChevronRight, 
  ExternalLink, Layers, ShieldCheck, Zap, Globe, ShoppingCart, Store, Cpu, Bot 
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import { SERVICES_DATA, ServiceItem } from "@/data/servicesData";
import { PROJECTS_DATA } from "@/data/projectsData";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/solutions" replace />;
  }

  // Interactive feature explorer state (mobile-friendly click/tap)
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0);
  const activeFeature = service.features[selectedFeatureIndex] || service.features[0];

  // Related projects
  const relatedProjects = PROJECTS_DATA.filter((p) =>
    service.relatedProjectSlugs.includes(p.slug)
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-indigo-500/20 selection:text-indigo-900">
      <Navbar />

      <main className="pt-32 pb-24 sm:pt-40 md:pt-44">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-5 md:px-10 max-w-6xl mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <Link to="/solutions" className="hover:text-slate-900 transition-colors">Solutions</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-900 font-bold truncate">{service.name}</span>
          </nav>
        </div>

        {/* SECTION A: Service Introduction */}
        <section className="container mx-auto px-5 md:px-10 max-w-6xl mb-20 md:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 mb-6">
                Custom Digital Solution
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.08] mb-6">
                {service.headline}
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
                {service.subtitle}
              </p>

              {/* Business Problem Solved Banner */}
              <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/80 border border-amber-200/80 mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" /> The Challenge We Solve
                </p>
                <p className="text-sm sm:text-base text-amber-950/85 leading-relaxed font-medium">
                  {service.businessProblem}
                </p>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <Link
                  to={`/contact?service=${service.slug}`}
                  className="inline-flex h-15 items-center justify-center gap-2.5 rounded-full bg-slate-950 px-8 text-base font-bold text-white transition-all shadow-[0_6px_20px_rgba(15,23,42,0.25)] hover:bg-slate-800 hover:scale-[1.02] active:scale-98"
                >
                  Request a Quote <ArrowRight size={17} />
                </Link>
                <Link
                  to={`/estimate?service=${service.slug}`}
                  className="inline-flex h-15 items-center justify-center gap-2.5 rounded-full bg-white border border-slate-300 px-8 text-base font-bold text-slate-800 hover:bg-slate-50 transition-all shadow-sm"
                >
                  <Calculator size={18} className="text-indigo-600" /> Estimate My Project
                </Link>
              </div>

              <div className="flex items-center gap-3 mt-6 text-xs text-slate-500 font-medium">
                <span className="font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Starts @ {service.startingPrice}
                </span>
                <span>· {service.priceNote}</span>
              </div>
            </div>

            {/* Visual Hero Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.1)]">
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-100 bg-slate-50/80">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-2 truncate">
                    {service.name}
                  </span>
                </div>
                <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.heroImage}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200 shadow-md text-xs font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Production Ready
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION B: What We Can Build (Actual Deliverables) */}
        <section className="bg-white py-20 md:py-28 border-t border-slate-200/80">
          <div className="container mx-auto px-5 md:px-10 max-w-6xl">
            <div className="text-center mb-14 md:mb-18">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block mb-3">
                Deliverables & Scope
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
                What We Can Build For Your Business
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
                Concrete, measurable modules tailored to your operational workflow. Everything is custom engineered with zero vendor lock-in.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-3xl border border-slate-200 bg-[#FAFAFA] hover:bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-black text-sm mb-4 border border-indigo-100">
                      {(idx + 1).toString().padStart(2, "0")}
                    </div>
                    <h3 className="text-xl font-black text-slate-950 mb-2.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION C: Interactive Feature Explorer (Mobile-friendly chip selector) */}
        <section className="py-20 md:py-28 border-t border-slate-200/80 bg-[#FAFAFA]">
          <div className="container mx-auto px-5 md:px-10 max-w-6xl">
            
            <div className="text-center mb-12">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block mb-3">
                Visual Deep Dive
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
                Interactive Feature Explorer
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
                Tap each feature below to explore how it functions in production.
              </p>
            </div>

            {/* Mobile-Friendly Feature Selector Chips */}
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10 max-w-3xl mx-auto">
              {service.features.map((feat, idx) => {
                const isActive = selectedFeatureIndex === idx;
                return (
                  <button
                    key={feat.id}
                    onClick={() => setSelectedFeatureIndex(idx)}
                    className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-slate-950 text-white shadow-md scale-105"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {feat.name}
                  </button>
                );
              })}
            </div>

            {/* Active Feature Showcase Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border border-slate-200 p-7 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  <div className="lg:col-span-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2 block">
                      {activeFeature.tagline}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 mb-4 leading-tight">
                      {activeFeature.name}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed font-normal mb-6">
                      {activeFeature.description}
                    </p>

                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Highlights</h4>
                    <div className="space-y-3">
                      {activeFeature.bullets.map((b, bi) => (
                        <div key={bi} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-emerald-600 mt-0.5 shrink-0" />
                          <span className="text-sm font-semibold text-slate-800 leading-snug">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md h-64 sm:h-80 bg-slate-100">
                      <img
                        src={activeFeature.image}
                        alt={activeFeature.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </section>

        {/* SECTION D: Actual Portfolio and Case Studies */}
        {relatedProjects.length > 0 && (
          <section className="bg-white py-20 md:py-28 border-t border-slate-200/80">
            <div className="container mx-auto px-5 md:px-10 max-w-6xl">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
                <div>
                  <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block mb-3">
                    Proof of Execution
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
                    Actual Projects in this Category
                  </h2>
                </div>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors shrink-0"
                >
                  View All Portfolio <ArrowRight size={15} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProjects.map((project) => (
                  <div
                    key={project.slug}
                    className="rounded-3xl border border-slate-200 bg-[#FAFAFA] overflow-hidden flex flex-col hover:border-slate-300 hover:shadow-lg transition-all"
                  >
                    <div className="h-60 sm:h-72 overflow-hidden bg-slate-100 relative">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                        {project.industry}
                      </div>
                    </div>
                    <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-black text-slate-950 mb-2.5 leading-snug">
                          {project.name}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
                          {project.shortDesc}
                        </p>

                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Implemented Scope:</h4>
                        <div className="space-y-2 mb-6">
                          {project.implementedFeatures.slice(0, 4).map((f, fi) => (
                            <div key={fi} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                              <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 shrink-0" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        to={`/portfolio/${project.slug}`}
                        className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-slate-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all shadow-sm"
                      >
                        View Full Case Study <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION E: Technology and Integrations */}
        <section className="py-20 md:py-28 border-t border-slate-200/80 bg-[#FAFAFA]">
          <div className="container mx-auto px-5 md:px-10 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block mb-3">
                Engineering Stack
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
                Technologies & Integrations Used
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
                Strictly relevant technologies applied to build this specific solution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {service.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                      {tech.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-950 mb-1">{tech.name}</h3>
                    <p className="text-xs text-slate-500 font-medium">{tech.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION F: Estimated Investment */}
        <section className="bg-white py-20 md:py-28 border-t border-slate-200/80">
          <div className="container mx-auto px-5 md:px-10 max-w-4xl">
            <div className="rounded-3xl border-2 border-indigo-600/30 bg-gradient-to-br from-indigo-50/40 via-white to-slate-50 p-8 sm:p-12 shadow-lg">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slate-200/80 mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100/70 px-3 py-1 rounded-full">
                    Indicative Investment
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mt-2">
                    {service.name}
                  </h3>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-3xl sm:text-4xl font-black text-slate-950">{service.startingPrice}</span>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{service.priceNote}</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">What affects the cost for this service?</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.costFactors.map((factor, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm font-semibold text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                      <span>{factor}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 mb-8 leading-relaxed">
                <span className="font-bold text-slate-700">Transparency Note: </span>
                All projects receive a transparent, fixed-price proposal before engineering commences. No surprise hourly overages.
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={`/estimate?service=${service.slug}`}
                  className="flex-1 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-8 text-sm font-bold text-white shadow-md hover:bg-slate-800 transition-all text-center"
                >
                  <Calculator size={17} /> Estimate Custom Cost for My Business
                </Link>
                <Link
                  to={`/pricing`}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white border border-slate-300 px-8 text-sm font-bold text-slate-800 hover:bg-slate-50 transition-all text-center"
                >
                  View All Pricing Tiers
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION G: Final Service CTA */}
        <section className="py-20 md:py-28 bg-[#FAFAFA] border-t border-slate-200/80 text-center">
          <div className="container mx-auto px-5 md:px-10 max-w-3xl">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block mb-4">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
              Let's build the right {service.name.toLowerCase()} for your business.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-10 max-w-xl mx-auto font-normal">
              Book a strategy consultation. We'll map your operational bottlenecks and provide a transparent, fixed-price execution plan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                to={`/contact?service=${service.slug}`}
                className="w-full sm:w-auto inline-flex h-15 items-center justify-center gap-2.5 rounded-full bg-slate-950 px-9 text-base font-bold text-white shadow-lg hover:bg-slate-800 hover:scale-[1.02] active:scale-98 transition-all"
              >
                Get a Free Quote <ArrowRight size={17} />
              </Link>
              <a
                href={`https://wa.me/917794971935?text=Hi%20Krunnex%2C%20I%27d%20like%20to%20discuss%20a%20project%20for%20${encodeURIComponent(service.name)}.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex h-15 items-center justify-center gap-2.5 rounded-full bg-white border border-slate-300 px-9 text-base font-bold text-slate-800 hover:bg-slate-50 transition-all shadow-sm"
              >
                <MessageCircle size={19} className="text-[#25D366]" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
