"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Discovery & Strategy", description: "We analyze your business bottlenecks and map out a precise software solution." },
  { id: "02", title: "Design & Development", description: "We build your custom system using enterprise-grade technology, keeping you updated every week." },
  { id: "03", title: "Launch & Scale", description: "We deploy the software, train your team, and provide ongoing support as your revenue grows." },
];

export default function WorkProcessSection() {
  return (
    <section id="process" className="py-24 border-y border-border/30">
      <div className="container px-4 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Simple 3-Step Process</h2>
          <p className="text-lg text-muted-foreground">
            No confusing tech jargon. Just a clear path to automating your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-card border border-border/50 shadow-sm transition-all hover:border-primary/50"
            >
              <div className="text-6xl font-black text-primary/10 mb-4 absolute top-4 right-6">
                {step.id}
              </div>
              <h3 className="font-bold text-2xl mb-4 text-foreground relative z-10">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

