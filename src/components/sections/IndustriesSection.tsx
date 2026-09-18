"use client";

import { motion } from "framer-motion";
import { Utensils, ShoppingBag, Rocket, HeartPulse } from "lucide-react";

const industries = [
  { name: "Restaurants & Hospitality", icon: <Utensils size={32} /> },
  { name: "Retail & E-Commerce", icon: <ShoppingBag size={32} /> },
  { name: "Startups & SaaS", icon: <Rocket size={32} /> },
  { name: "Healthcare & Services", icon: <HeartPulse size={32} /> }
];

export default function IndustriesSection() {
  return (
    <section className="py-24 overflow-hidden bg-secondary/10">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We build specialized software that understands the unique challenges of your industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-8 bg-card border border-border/50 rounded-3xl hover:border-primary/50 transition-colors shadow-sm group"
            >
              <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                {industry.icon}
              </div>
              <h3 className="text-center font-semibold text-foreground text-sm md:text-base">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

