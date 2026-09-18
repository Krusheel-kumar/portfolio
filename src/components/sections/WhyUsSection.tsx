import { motion } from "framer-motion";
import { Zap, Code, ShieldCheck, Cpu, Infinity } from "lucide-react";

const REASONS = [
  {
    icon: <Code size={24} />,
    title: "Zero Templates",
    description: "Every line of code is custom-written. We do not use bloated WordPress themes or slow drag-and-drop builders.",
    colSpan: "md:col-span-2",
    accent: "from-blue-500/20 to-transparent"
  },
  {
    icon: <Zap size={24} />,
    title: "Sub-Second Speeds",
    description: "Built on headless React and Edge networks for instantaneous load times that maximize SEO.",
    colSpan: "md:col-span-1",
    accent: "from-yellow-500/20 to-transparent"
  },
  {
    icon: <Cpu size={24} />,
    title: "AI-Powered",
    description: "We don't just build websites. We integrate AI automation that runs your business while you sleep.",
    colSpan: "md:col-span-1",
    accent: "from-purple-500/20 to-transparent"
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Bank-Grade Security",
    description: "Your customer data is protected by enterprise-level encryption and secure authentication flows.",
    colSpan: "md:col-span-1",
    accent: "from-green-500/20 to-transparent"
  },
  {
    icon: <Infinity size={24} />,
    title: "Infinite Scalability",
    description: "Whether you have 10 visitors or 10 million, our cloud architecture scales dynamically without crashing.",
    colSpan: "md:col-span-1",
    accent: "from-red-500/20 to-transparent"
  }
];

export default function WhyUsSection() {
  return (
    <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden border-t border-white/5">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-white/50">The Krunnex Difference</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Why Settle for Average?</h3>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">We don't build digital brochures. We build high-performance software engines designed to completely dominate your market.</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REASONS.map((reason, idx) => (
            <motion.div
              key={idx}
              className={`group relative overflow-hidden rounded-[2rem] bg-[#0a0a0a] border border-white/10 p-8 md:p-10 flex flex-col justify-between ${reason.colSpan}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-white/80 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform-gpu">
                  {reason.icon}
                </div>
                
                <h4 className="text-2xl font-extrabold mb-4">{reason.title}</h4>
                <p className="text-white/60 leading-relaxed font-medium">{reason.description}</p>
              </div>

              {/* Glossy corner highlight */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
