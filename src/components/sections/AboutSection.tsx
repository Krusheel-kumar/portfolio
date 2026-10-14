"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-white border-t border-slate-200/80 font-sans text-slate-900">
      <div className="container px-5 sm:px-8 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Founder Image */}
          <div className="md:col-span-5 relative order-2 md:order-1">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
              <img 
                src="/images/profileimage.jpeg" 
                alt="Krusheel Kumar — Founder & Principal Engineer at Krunnex" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 text-center shadow-sm">
                <p className="font-black text-slate-950 text-base">Krusheel Kumar</p>
                <p className="text-xs text-slate-600 font-semibold mt-0.5">Founder & Principal Engineer</p>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="md:col-span-7 order-1 md:order-2">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block mb-4">
                Founder's Note
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 mb-6 leading-tight">
                Software is an investment. It should pay you back.
              </h2>
            </div>
            
            <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p>
                Hi, I'm Krusheel. I founded Krunnex to help non-technical business owners navigate the modern digital landscape without getting sold confusing, overpriced tech stacks they don't actually need.
              </p>
              <p>
                Whether it's a zero-commission QR ordering system for a restaurant, a headless e-commerce storefront, or an automated operations dashboard—every line of code we write is designed around your actual business workflow.
              </p>
              <p>
                We handle the end-to-end architecture, API integrations, and cloud hosting so you can focus entirely on running and scaling your business.
              </p>
              <div className="pt-4">
                <p className="text-xl text-slate-950 font-black">
                  — Krusheel Kumar
                </p>
                <p className="text-xs text-slate-400 font-medium">Principal Engineer, Krunnex</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
