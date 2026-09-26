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
    <section className="bg-[#030712] text-white py-24 md:py-36 relative border-t border-white/5 overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0 line-grid opacity-100 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)", filter: "blur(40px)" }} />

      <div className="container mx-auto px-5 md:px-10 max-w-6xl relative z-10">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-violet-400/70 mb-4 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-violet-500" />
              Our Execution Protocol
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.05]">
              From idea to live
              <br />
              <span className="text-gradient-primary">in weeks.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            <p className="text-white/45 text-base md:text-lg leading-relaxed">
              A disciplined, transparent build process. No surprises. No scope creep. A proven system that ships quality software fast and on budget.
            </p>
            <Link
              to="/start-project"
              className="group inline-flex items-center gap-2 text-sm font-bold text-violet-400 hover:text-violet-300 transition-colors w-fit"
            >
              Start the process
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">

          {/* Vertical line — desktop center, mobile left */}
          <div className="hidden md:block absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-white/6" />
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-[1px] bg-white/6" />

          {/* Animated progress fill */}
          <motion.div
            className="hidden md:block absolute left-1/2 -translate-x-[0.5px] top-0 w-[2px] origin-top"
            style={{
              scaleY: lineScaleY,
              height: "100%",
              background: "linear-gradient(180deg, #7c3aed, #4f46e5, #06b6d4)",
              boxShadow: "0 0 12px rgba(124,58,237,0.7)",
            }}
          />
          <motion.div
            className="md:hidden absolute left-6 top-0 w-[2px] origin-top"
            style={{
              scaleY: lineScaleY,
              height: "100%",
              background: "linear-gradient(180deg, #7c3aed, #06b6d4)",
              boxShadow: "0 0 12px rgba(124,58,237,0.7)",
            }}
          />

          {/* Steps */}
          <div className="flex flex-col gap-16 md:gap-24 relative z-10">
            {STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex items-center md:grid md:grid-cols-2 md:gap-16 pl-16 md:pl-0">

                  {/* Timeline node */}
                  <div className={`absolute left-[17px] md:left-1/2 md:-translate-x-1/2 z-20 flex items-center justify-center`}>
                    <motion.div
                      className="w-[26px] h-[26px] rounded-full border-2 border-white/20 bg-[#030712] flex items-center justify-center"
                      whileInView={{ borderColor: "rgba(124,58,237,0.8)", boxShadow: "0 0 20px rgba(124,58,237,0.5)" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <motion.div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
                        whileInView={{ scale: [0, 1.3, 1] }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      />
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
      initial={{ opacity: 0, x: direction * 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full ${isLeft ? "md:text-right" : ""}`}
    >
      <div className="group relative bg-white/[0.03] border border-white/7 rounded-3xl p-7 md:p-9 overflow-hidden hover:border-white/14 transition-colors duration-500">

        {/* Gradient corner accent */}
        <div className={`absolute top-0 ${isLeft ? "right-0 rounded-bl-3xl rounded-tr-3xl" : "left-0 rounded-br-3xl rounded-tl-3xl"} w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
          style={{ background: `radial-gradient(circle at ${isLeft ? "top right" : "top left"}, rgba(124,58,237,0.2), transparent 70%)` }} />

        {/* Step number (big bg watermark) */}
        <div className={`absolute ${isLeft ? "left-6" : "right-6"} top-1/2 -translate-y-1/2 text-[6rem] font-extrabold text-white/[0.03] tracking-tighter select-none leading-none pointer-events-none`}>
          {step.number}
        </div>

        {/* Header */}
        <div className={`flex items-center gap-3 mb-5 ${isLeft ? "md:flex-row-reverse" : ""}`}>
          <span className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10 text-white/40">
            {step.week}
          </span>
          <div className={`flex items-center gap-1.5 ${isLeft ? "md:flex-row-reverse" : ""}`}>
            <div className={`h-[1px] w-6 bg-gradient-to-r ${step.color} to-transparent`} />
            <span className="text-[10px] font-bold text-white/30 tracking-widest uppercase">{step.number}</span>
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3 leading-tight">{step.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed mb-5">{step.body}</p>

        {/* Tags */}
        <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
          {step.tags.map((tag, ti) => (
            <span key={ti} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-white/50">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
