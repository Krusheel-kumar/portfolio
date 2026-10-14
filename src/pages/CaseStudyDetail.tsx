import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronRight, MessageCircle, Code2, Clock, ShieldCheck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import { PROJECTS_DATA } from "@/data/projectsData";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-indigo-500/20 selection:text-indigo-900">
      <Navbar />

      <main className="pt-32 pb-24 sm:pt-40 md:pt-44">
        
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-5 md:px-10 max-w-5xl mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <Link to="/portfolio" className="hover:text-slate-900 transition-colors">Portfolio</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-900 font-bold truncate">{project.clientOrBrand}</span>
          </nav>
        </div>

        {/* Case Study Header */}
        <div className="container mx-auto px-5 md:px-10 max-w-5xl mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">
              {project.categoryLabel}
            </span>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
              Industry: {project.industry}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.08] mb-6">
            {project.name}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 max-w-3xl">
            {project.shortDesc}
          </p>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm font-semibold text-emerald-900 flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
            <span>Status: {project.productionStatus}</span>
          </div>
        </div>

        {/* Main Project Hero Screenshot */}
        <div className="container mx-auto px-5 md:px-10 max-w-5xl mb-16">
          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto max-h-[550px] object-cover"
            />
          </div>
        </div>

        {/* 2-Column Overview & Problem Statement */}
        <div className="container mx-auto px-5 md:px-10 max-w-5xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Project Overview</h2>
              <h3 className="text-2xl font-black text-slate-950 mb-3">The Objective</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {project.overview}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Operational Context</h2>
              <h3 className="text-2xl font-black text-slate-950 mb-3">The Challenge</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {project.businessContext}
              </p>
            </div>
          </div>
        </div>

        {/* Implemented Features vs In Development */}
        <div className="container mx-auto px-5 md:px-10 max-w-5xl mb-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">Scope Breakdown</h2>
              <h3 className="text-3xl font-black text-slate-950">Implemented Features in Production</h3>
              <p className="text-sm text-slate-500 mt-1">Verified and actively operating capabilities:</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {project.implementedFeatures.map((f, fi) => (
                <div key={fi} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 mt-0.5 shrink-0" />
                  <span className="text-sm font-semibold text-slate-800 leading-snug">{f}</span>
                </div>
              ))}
            </div>

            {project.inDevelopmentFeatures && project.inDevelopmentFeatures.length > 0 && (
              <div className="pt-8 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2 flex items-center gap-2">
                  <Clock size={14} /> Future Roadmap & In-Development Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  {project.inDevelopmentFeatures.map((f, fi) => (
                    <div key={fi} className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/60 text-xs font-medium text-amber-900">
                      • {f} (Planned / In Development)
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tech Stack Box */}
        <div className="container mx-auto px-5 md:px-10 max-w-5xl mb-20">
          <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1 block">Architecture</span>
              <h3 className="text-2xl font-black">Engineering Technologies Used</h3>
              <p className="text-xs text-slate-400 mt-1">Written cleanly without bloated page-builder themes</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, ti) => (
                <span key={ti} className="text-xs font-bold bg-white/10 text-white border border-white/15 px-3 py-1.5 rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="container mx-auto px-5 md:px-10 max-w-4xl text-center">
          <div className="p-10 sm:p-14 rounded-3xl bg-white border border-slate-200 shadow-md">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-3">
              Need a similar solution for your business?
            </h2>
            <p className="text-base text-slate-600 max-w-lg mx-auto mb-8 font-normal">
              We can engineer a customized digital system tailored to your exact industry and operational workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to={`/contact?service=${project.relatedServiceSlug}&ref=${project.slug}`}
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-8 text-sm font-bold text-white hover:bg-slate-800 transition-all shadow-md"
              >
                Start a Similar Project <ArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/917794971935?text=Hi%20Krunnex%2C%20I%20saw%20your%20case%20study%20for%20${encodeURIComponent(project.name)}%20and%20would%20like%20to%20discuss%20a%20similar%20project.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white border border-slate-300 px-8 text-sm font-bold text-slate-800 hover:bg-slate-50 transition-all shadow-sm"
              >
                <MessageCircle size={18} className="text-[#25D366]" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
