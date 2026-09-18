"use client";

import { motion } from "framer-motion";
import { Code2, Store, Server, ShoppingCart, AppWindow, Database, Boxes, Cpu, Smartphone, Cloud, PenTool, Headset } from "lucide-react";

const services = [
  { title: "Business Automation Systems", description: "Streamline operations with custom POS, inventory, and restaurant management solutions.", icon: <Store size={24} /> },
  { title: "Premium Web Experiences", description: "High-performance, beautifully designed websites that convert visitors into paying customers.", icon: <AppWindow size={24} /> },
  { title: "AI Integration & Chatbots", description: "Implement intelligent automation and 24/7 customer support to give your business an edge.", icon: <Cpu size={24} /> },
  { title: "Custom Software Solutions", description: "Tailored digital tools engineered specifically to solve your unique operational bottlenecks.", icon: <Database size={24} /> },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-card/30 border-y border-border/30">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">How We Drive Growth</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop losing money to inefficient processes. We build the exact tools you need to scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border/50 rounded-2xl p-8 overflow-hidden transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {service.description}
              </p>
              
              {/* Subtle Glow Effect */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                style={{ background: "radial-gradient(400px circle at 100% 100%, rgba(139, 92, 246, 0.05), transparent 40%)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

