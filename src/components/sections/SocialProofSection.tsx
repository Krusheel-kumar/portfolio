"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "Business Operations Automated", value: "10,000+" },
  { label: "Reduction in Manual Tasks", value: "40%" },
  { label: "Client Satisfaction", value: "100%" }
];

export default function SocialProofSection() {
  return (
    <section className="py-12 bg-secondary/30 border-y border-border/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <p className="text-center text-sm font-bold text-muted-foreground uppercase tracking-widest mb-8">
          Trusted by growing businesses to scale operations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border/50">
          {metrics.map((metric, index) => (
            <motion.div 
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center pt-6 md:pt-0"
            >
              <div className="text-4xl font-extrabold text-primary mb-2">{metric.value}</div>
              <div className="text-sm font-medium text-muted-foreground">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

