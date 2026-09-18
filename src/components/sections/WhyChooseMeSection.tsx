"use client";

import { motion } from "framer-motion";
import { MessageSquare, Layout, Server, Briefcase, Zap, Shield, Users, Code, LineChart } from "lucide-react";

const reasons = [
  { title: "No Tech Jargon", description: "We speak your language. We don't confuse you with acronyms; we talk about ROI, efficiency, and solving real business problems.", icon: <MessageSquare size={24} /> },
  { title: "Direct Communication", description: "You work directly with the lead engineers and founders. No hiding behind account managers or middle-men.", icon: <Users size={24} /> },
  { title: "Business-First Approach", description: "We don't build software just to build it. We engineer tools specifically designed to increase your revenue and reduce costs.", icon: <Briefcase size={24} /> }
];

export default function WhyChooseMeSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Why Partner With Me?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The technical execution of a senior engineer combined with the strategic mindset of a business owner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-colors shadow-sm"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

