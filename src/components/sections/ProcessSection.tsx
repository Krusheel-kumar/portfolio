import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    week: "Week 1",
    title: "Strategic Discovery",
    body: "We don't write a single line of code until we deeply understand your business — bottlenecks, goals, and competitive landscape. A bespoke digital strategy is drafted for your exact situation.",
    tags: ["Business Analysis", "Competitor Research", "Strategy Doc"],
    color: "from-violet-500",
  },
  {
    number: "02",
    week: "Week 2–3",
    title: "Design & Architecture",
    body: "Premium UI/UX design in Figma. Full database schema, API architecture, and third-party integrations mapped. You review an interactive prototype before any engineering begins.",
    tags: ["Figma Prototype", "DB Schema", "API Map"],
    color: "from-blue-500",
  },
  {
    number: "03",
    week: "Week 4–6",
    title: "Precision Engineering",
    body: "React, Node.js, modern edge infrastructure. Every integration — payments, WhatsApp, AI automation — is rigorously built and tested with real data before you see a demo.",
    tags: ["React Frontend", "Node.js Backend", "API Integrations"],
    color: "from-cyan-500",
  },
  {
    number: "04",
    week: "Week 7",
    title: "Launch & Handover",
    body: "Enterprise cloud deployment, security audits, and performance tuning. You receive a fully operational system with training, documentation, and a 30-day post-launch safety net.",
    tags: ["Cloud Deploy", "Security Audit", "Training"],
    color: "from-green-500",
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0.05, 0.85], [0, 1]);

  return (
    <section className="bg-[#FAFAFA] text-slate-900 py-20 md:py-32 relative border-t border-slate-200/80 overflow-hidden">

      <div className="container mx-auto px-5 md:px-10 max-w-6xl relative z-10">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100 inline-block mb-4">
              Execution Protocol
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.1]">
              From concept to production <br />
              <span className="text-gradient-primary">in weeks.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              A transparent, agile build process. No delays, no scope creep. We prototype, test, and deploy software that hits the ground running.
            </p>
            <Link
              to="/start-project"
              className="group inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors w-fit"
            >
              Start the build process
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">

          {/* Vertical line — desktop center, mobile left */}
          <div className="hidden md:block absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[2px] bg-slate-200" />
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-[2px] bg-slate-200" />

          {/* Animated progress fill */}
          <motion.div
            className="hidden md:block absolute left-1/2 -translate-x-[0.5px] top-0 w-[2px] origin-top"
            style={{
              scaleY: lineScaleY,
              height: "100%",
              background: "linear-gradient(180deg, #7c3aed, #4f46e5, #06b6d4)",
              boxShadow: "0 0 12px rgba(124,58,237,0.4)",
            }}
          />
          <motion.div
            className="md:hidden absolute left-6 top-0 w-[2px] origin-top"
            style={{
              scaleY: lineScaleY,
              height: "100%",
              background: "linear-gradient(180deg, #7c3aed, #06b6d4)",
              boxShadow: "0 0 12px rgba(124,58,237,0.4)",
            }}
          />

          {/* Steps */}
          <div className="flex flex-col gap-16 md:gap-24 relative z-10">
            {STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex items-center md:grid md:grid-cols-2 md:gap-16 pl-16 md:pl-0">

                  {/* Timeline node */}
                  <div className={`absolute left-[13px] md:left-1/2 md:-translate-x-1/2 z-20 flex items-center justify-center`}>
                    <motion.div
                      className="w-8 h-8 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center shadow-md"
                      whileInView={{ backgroundColor: "#4f46e5", boxShadow: "0 0 15px rgba(79,70,229,0.35)" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    </motion.div>
                  </div>

                  {/* Left spacer / right-side card on even */}
                  {isEven ? (
                    <>
                      <div className="hidden md:block" />
                      <StepCard step={step} idx={idx} direction={1} />
                    </>
                  ) : (
                    <>
                      <StepCard step={step} idx={idx} direction={-1} isLeft />
                      <div className="hidden md:block" />
                    </>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

function StepCard({ step, idx, direction, isLeft }: {
  step: typeof STEPS[0];
  idx: number;
  direction: number;
  isLeft?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction * 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`w-full ${isLeft ? "md:text-right" : ""}`}
    >
      <div className="group relative bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all">

        {/* Header */}
        <div className={`flex items-center gap-3 mb-4 ${isLeft ? "md:flex-row-reverse" : ""}`}>
          <span className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-slate-100 text-slate-800">
            {step.week}
          </span>
          <span className="text-xs font-black text-indigo-600 tracking-wider uppercase">
            Step {step.number}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-slate-950 mb-3 leading-tight">{step.title}</h3>
        <p className="text-slate-600 text-base leading-relaxed mb-6">{step.body}</p>

        {/* Tags */}
        <div className={`flex flex-wrap gap-2.5 ${isLeft ? "md:justify-end" : ""}`}>
          {step.tags.map((tag, ti) => (
            <span key={ti} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/60">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
