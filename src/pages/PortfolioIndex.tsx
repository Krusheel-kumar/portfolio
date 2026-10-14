import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronRight, Code2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import { PROJECTS_DATA, ProjectItem } from "@/data/projectsData";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "restaurant", label: "Restaurant Technology" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "automation", label: "Business Automation" },
  { id: "custom", label: "Custom Software" },
];

export default function PortfolioIndex() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-indigo-500/20 selection:text-indigo-900">
      <Navbar />

      <main className="pt-36 pb-24 sm:pt-44 md:pt-48">
        
        {/* Header */}
        <div className="container mx-auto px-5 md:px-10 max-w-6xl text-center mb-14 md:mb-20">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block mb-4">
            Proof of Execution
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight mb-4">
            Real Projects. Built for Real Businesses.
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Actual platforms, storefronts, and automated operations engines engineered by Krunnex. Zero templates.
          </p>
        </div>

        {/* Category Filters (Mobile-friendly horizontal chip scroll) */}
        <div className="container mx-auto px-5 md:px-10 max-w-6xl mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-slate-950 text-white shadow-md scale-105"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="container mx-auto px-5 md:px-10 max-w-6xl mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image showcase */}
                  <div className="relative h-64 sm:h-80 overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-900 border border-slate-200 shadow-sm">
                      {project.categoryLabel}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 sm:p-9">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">
                      Client: {project.clientOrBrand}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mb-3 leading-tight group-hover:text-indigo-600 transition-colors">
                      {project.name}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {project.shortDesc}
                    </p>

                    {/* Implemented Features */}
                    <div className="mb-6 pt-4 border-t border-slate-100">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-emerald-600" /> Implemented Capabilities:
                      </h3>
                      <div className="space-y-2">
                        {project.implementedFeatures.slice(0, 4).map((f, fi) => (
                          <div key={fi} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech, ti) => (
                        <span key={ti} className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/60">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-7 sm:px-9 pb-8">
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-full bg-slate-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all shadow-sm"
                  >
                    View Complete Case Study <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
