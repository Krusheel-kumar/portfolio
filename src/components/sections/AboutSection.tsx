"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  return (
    <section id="about" ref={ref} className="py-24 md:py-40 relative overflow-hidden bg-white">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Storytelling Image Reveal */}
          <div className="order-2 md:order-1 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[4/5] md:aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border-8 border-white"
            >
              <motion.div style={{ y: yImage, height: "120%", top: "-10%" }} className="absolute inset-0 w-full">
                <img 
                  src="/images/profileimage.jpeg" 
                  alt="Krusheel Kumar" 
                  fill
                  className="object-cover"
                />
              </motion.div>
              {/* Glass overlay text */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/50 text-center">
                <p className="font-bold text-foreground">Krusheel Kumar</p>
                <p className="text-sm text-muted-foreground font-medium">Founder & Principal Engineer</p>
              </div>
            </motion.div>
            
            {/* Decorative Blobs */}
            <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-[-20%] w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full mix-blend-multiply" />
          </div>
          
          {/* Text Content */}
          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">A Note From The Founder</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-8 leading-tight">
                Software is an investment. <br className="hidden md:block"/> It should pay you back.
              </h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-xl text-muted-foreground font-medium leading-relaxed"
            >
              <p>
                Hi, I'm Krusheel. I started Krunnex because I saw too many business owners getting burned by generic agencies who sold them confusing, overpriced technology they didn't need.
              </p>
              <p>
                My mission is simple: I want to build software that actually makes your life easier and your business more profitable. Whether that's a custom ordering system for your restaurant or a dashboard that automates your inventory.
              </p>
              <p>
                I handle all the complex engineering behind the scenes so you can focus on what you do best—running your business.
              </p>
              <div className="pt-6">
                <p className="text-2xl text-foreground font-bold font-serif italic">
                  - Krusheel Kumar
                </p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

