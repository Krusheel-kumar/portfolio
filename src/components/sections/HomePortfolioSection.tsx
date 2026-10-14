import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projectsData";

const FILTER_TABS = [
  { id: "all", label: "All Projects" },
  { id: "restaurant", label: "Restaurant Technology" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "automation", label: "Business Automation" },
  { id: "custom", label: "Custom Software" },
];

export default function HomePortfolioSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-slate-200/80 text-slate-900 font-sans">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block mb-3.5">
            Proof of Execution
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight mb-4">
            Real Projects. Built for Real Businesses.
          </h2>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Engineered systems solving actual operational bottlenecks. No templates.
          </p>
        </div>

        {/* Filter Pills (Mobile-friendly horizontal scroll / wrap) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {FILTER_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-slate-950 text-white shadow-md scale-105"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 mb-14">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Project Image Preview */}
                <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-100">
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
                <div className="p-6 sm:p-8">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                    Client: {project.clientOrBrand}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-2.5 leading-tight group-hover:text-indigo-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {project.shortDesc}
                  </p>

                  {/* Implemented Features */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                    {project.implementedFeatures.slice(0, 3).map((f, fi) => (
                      <div key={fi} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 size={13} className="text-emerald-600 mt-0.5 shrink-0" />
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech, ti) => (
                      <span key={ti} className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 sm:px-8 pb-7">
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-slate-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all shadow-sm"
                >
                  View Case Study <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            Explore All Case Studies & Projects <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}
