import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const PROCESS_STEPS = [
  {
    icon: <Search size={24} />,
    title: "1. Strategic Discovery",
    description: "We don't write a single line of code until we understand your exact business bottlenecks. We analyze your current operations, identify friction points, and map out a custom digital strategy.",
    timeline: "Week 1"
  },
  {
    icon: <PenTool size={24} />,
    title: "2. Architecture & Design",
    description: "We design a premium, Apple-grade user interface and architect the backend database structures. You get a fully interactive prototype to review before engineering begins.",
    timeline: "Week 2-3"
  },
  {
    icon: <Code2 size={24} />,
    title: "3. Precision Engineering",
    description: "Our engineers build your system using React, Node, and modern edge networks. We implement all API integrations, payment gateways, and AI automation protocols.",
    timeline: "Week 4-6"
  },
  {
    icon: <Rocket size={24} />,
    title: "4. Deployment & Scale",
    description: "We deploy your system to enterprise-grade cloud servers, perform rigorous security testing, and hand you the keys to your new automated business engine.",
    timeline: "Week 7"
  }
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-black text-white py-24 md:py-32 relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <motion.div 
          className="text-center mb-24 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-white/50">Our Execution Protocol</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">How We Build Empires.</h3>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">A ruthless, systematic engineering process designed to take you from concept to market domination in weeks, not months.</p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          
          {/* Vertical Progress Line (Background) */}
          <div className="absolute left-[38px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full" />
          
          {/* Vertical Progress Line (Animated Foreground) */}
          <motion.div 
            className="absolute left-[38px] md:left-1/2 md:-translate-x-1/2 top-0 w-1 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] origin-top"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-16 md:gap-24 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div key={idx} className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty space for desktop alternating layout */}
                  <div className="hidden md:block w-1/2" />
                  
                  {/* The Icon Node */}
                  <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-black border-4 border-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] z-20">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </div>

                  {/* Content Card */}
                  <motion.div 
                    className="w-full md:w-1/2 pl-24 md:pl-0"
                    initial={{ opacity: 0, x: isEven ? -50 : 50, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`bg-[#0a0a0a] border border-white/10 p-8 rounded-[2rem] relative group hover:border-white/30 transition-colors ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="inline-block px-3 py-1 bg-white/10 text-white/80 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                        {step.timeline}
                      </span>
                      <h4 className="text-2xl font-extrabold mb-3 text-white">{step.title}</h4>
                      <p className="text-white/60 leading-relaxed font-medium">{step.description}</p>
                      
                      {/* Icon watermark in background */}
                      <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'left-8' : 'right-8'} text-white/[0.03] pointer-events-none transform scale-[4]`}>
                        {step.icon}
                      </div>
                    </div>
                  </motion.div>
                  
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
