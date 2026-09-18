"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Technologies Mastered" },
  { value: "5+", label: "Production-Level Projects" },
  { value: "100%", label: "Responsive Design" },
  { value: "24/7", label: "Ongoing Support" },
];

export default function StatisticsSection() {
  return (
    <section className="py-24 bg-card/50 border-y border-border/30 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
      
      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50 mb-4">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

