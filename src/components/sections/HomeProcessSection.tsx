import { Link } from "react-router-dom";
import { ArrowRight, Search, Layout, Code2, Rocket } from "lucide-react";

const STEPS = [
  {
    number: "01",
    name: "Discovery & Scope Mapping",
    subtitle: "Understanding your exact operational requirements",
    desc: "We analyze your business model, customer journey, and operational bottlenecks before writing a line of code. You receive a structured technical roadmap with clear milestones.",
    icon: Search,
    deliverables: ["Requirements specification", "System architecture plan", "Fixed-price milestone proposal"]
  },
  {
    number: "02",
    name: "Interactive UI/UX Design",
    subtitle: "Visualizing the product before development",
    desc: "We design complete mobile and desktop interface prototypes in Figma. You test user flows, screen interactions, and table or catalog layouts before engineering begins.",
    icon: Layout,
    deliverables: ["Interactive Figma prototype", "Mobile-first responsive layouts", "Design review & approval"]
  },
  {
    number: "03",
    name: "Custom Precision Engineering",
    subtitle: "Clean code, secure databases & integrations",
    desc: "We build your solution using modern frameworks (React, TypeScript, Spring Boot, Node.js). Payments, WhatsApp APIs, and databases are integrated and thoroughly tested with real data.",
    icon: Code2,
    deliverables: ["Bespoke frontend & backend APIs", "Payment & WhatsApp integrations", "Rigorous cross-device testing"]
  },
  {
    number: "04",
    name: "Production Launch & Support",
    subtitle: "Deployment, team training & handover",
    desc: "We deploy your system onto high-performance cloud infrastructure with automated SSL and backups. Your team receives thorough training and dedicated post-launch support.",
    icon: Rocket,
    deliverables: ["Edge cloud deployment", "Staff training & documentation", "Dedicated post-launch warranty"]
  }
];

export default function HomeProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-slate-200/80 text-slate-900 font-sans">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block mb-3.5">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight mb-4">
            A Transparent, Four-Step Engineering Process
          </h2>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            From initial business discovery to live production deployment. No surprises, no scope creep.
          </p>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 border border-indigo-100 flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                    <span className="text-sm font-black text-slate-400 tracking-wider">
                      STEP {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-1 leading-snug">
                    {step.name}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 mb-4">
                    {step.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Key Milestone Deliverables:</h4>
                  <div className="space-y-1.5">
                    {step.deliverables.map((del, di) => (
                      <div key={di} className="text-xs text-slate-700 font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            Ready to start Step 1 with a discovery call? Let's connect <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}
