"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Founder, SaaS Startup",
    content: "Krunnex transformed our vague idea into a fully scalable MVP in record time. The code quality and architecture are outstanding.",
  },
  {
    name: "Sarah Jenkins",
    role: "Restaurant Owner",
    content: "The custom ordering system built by Krusheel completely streamlined our operations. It's fast, reliable, and exactly what we needed.",
  },
  {
    name: "Michael Chen",
    role: "CTO, Logistics Co.",
    content: "We hired Krusheel for a complex backend migration. The communication was transparent, and the final AWS deployment was flawless.",
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border/50 rounded-3xl p-8 relative hover:border-primary/50 transition-colors"
            >
              <Quote className="text-primary/20 w-12 h-12 absolute top-6 right-6" />
              <p className="text-lg text-muted-foreground mb-8 relative z-10 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-foreground">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

