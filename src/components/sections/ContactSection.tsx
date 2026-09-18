"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Camera, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-card/30 border-t border-border/30">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">Ready to scale your business? <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Let's talk strategy.</span></h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Stop letting inefficient processes hold you back. Fill out the form below and I'll get back to you within 24 hours with a clear plan of action.
            </p>

            <div className="space-y-6 mb-12">
              <a href="mailto:hello@krunnex.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors text-lg">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                hello@krunnex.com
              </a>
              <a href="https://wa.me/1234567890" target="_blank" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors text-lg">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                +1 (234) 567-890
              </a>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Briefcase size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Code size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Camera size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Company</label>
                  <input type="text" placeholder="Acme Corp" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Project Budget</label>
                  <select className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow appearance-none text-muted-foreground">
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000 - $50,000</option>
                    <option>$50,000+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Message</label>
                <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-primary-foreground rounded-xl px-4 py-4 font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

