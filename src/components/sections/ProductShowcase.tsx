import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PlayCircle, Code2, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    category: "RESTAURANT AUTOMATION",
    title: "Restaurant Digital Ecosystem",
    description: "A complete digital transformation that eliminates reliance on third-party delivery apps and automates customer retention.",
    features: ["Premium Website", "QR Ordering", "Payments", "AI Chatbot", "WhatsApp Automation", "Admin Dashboard", "Loyalty", "Analytics"],
    impact: ["Zero commission fees on delivery", "40% increase in repeat customer rate", "Automated operations 24/7"],
    cta1: "Explore Case Study",
    cta2: "Visit Live Website",
    link1: "#",
    link2: "#",
    image: "/project1.jpg"
  },
  {
    id: 2,
    category: "HIGH-CONVERSION E-COMMERCE",
    title: "E-commerce Platform",
    description: "A headless, lightning-fast storefront designed purely to maximize conversions, reduce bounce rates, and recover abandoned carts.",
    features: ["Premium Store", "Payments", "Inventory", "Customer Accounts", "Dashboard", "Analytics"],
    impact: ["Sub-second page load speeds", "65% reduction in cart abandonment", "3x conversion rate on mobile"],
    cta1: "Explore Case Study",
    cta2: "Visit Live Website",
    link1: "#",
    link2: "#",
    image: "/project2.jpg"
  },
  {
    id: 3,
    category: "OPERATIONAL SCALING",
    title: "Business Automation",
    description: "A centralized command center giving you real-time visibility into your entire business operations and automating manual workflows.",
    features: ["Admin Dashboard", "CRM", "Inventory", "Staff Management", "Reports", "Analytics"],
    impact: ["Save 40+ hours of manual work/week", "Eliminate human error in accounting", "Real-time profit margin tracking"],
    cta1: "Explore Case Study",
    cta2: "View Dashboard",
    link1: "#",
    link2: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    category: "24/7 AUTOPILOT",
    title: "AI & Automation",
    description: "Intelligent systems that act as your 24/7 sales representatives and support agents, instantly answering client questions.",
    features: ["AI Chatbot", "WhatsApp Automation", "Lead Generation", "Notifications", "Review Collection", "Customer Support"],
    impact: ["Scale support endlessly", "5x more qualified leads captured", "Instant responses day or night"],
    cta1: "Explore Solution",
    cta2: "View Workflow",
    link1: "#",
    link2: "#",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    category: "ENTERPRISE SOLUTIONS",
    title: "Custom Software",
    description: "Bespoke, scalable architecture built precisely to your complex business requirements. Secure, fast, and completely tailored.",
    features: ["Custom Web Apps", "Admin Panels", "API Integrations", "Cloud Deployment", "Secure Authentication", "Scalable Architecture"],
    impact: ["Enterprise-grade security", "Flawless API integrations", "Infinite cloud scalability"],
    cta1: "Start Your Project",
    cta2: "Book Consultation",
    link1: "#",
    link2: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function ProductShowcase() {
  return (
    <section className="bg-black text-white relative py-24 md:py-32">
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-24 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-white/50">Business Success Stories</h2>
          <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight">Proof of Execution.</h3>
        </motion.div>

        {/* Stacked Sticky Cards Container */}
        {/* We use pb-[30vh] so the user can scroll past the final stacked card smoothly */}
        <div className="flex flex-col gap-12 md:gap-0 pb-[30vh] relative">
          
          {PROJECTS.map((project, idx) => {
            
            // On desktop, we want a tighter stack offset to look like a clean deck
            // On mobile, they stack a bit lower to show the image tops
            const topOffset = `calc(100px + ${idx * 30}px)`;

            return (
              <motion.div 
                key={project.id} 
                className="sticky w-full flex justify-center"
                style={{ top: topOffset }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                
                {/* 
                  The Card Container 
                  Clean Split Layout: Image on top/left, Content on bottom/right.
                */}
                <div 
                  className="w-full max-w-6xl rounded-[2rem] md:rounded-[3rem] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row bg-[#0a0a0a] border border-white/10"
                >
                  
                  {/* Image Section (Shorter on Mobile, Full height on Desktop) */}
                  <div className="w-full md:w-1/2 h-[220px] sm:h-[300px] md:h-[600px] relative overflow-hidden shrink-0">
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover"
                      whileInView={{ scale: [1.1, 1] }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>

                  {/* Content Section (Optimized for Mobile Height) */}
                  <div className="w-full md:w-1/2 p-5 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10 bg-black/40 backdrop-blur-xl">
                    
                    {/* Category Label */}
                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                      <h4 className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-white/70">{project.category}</h4>
                    </div>
                    
                    <h5 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-4 leading-tight text-white">
                      {project.title}
                    </h5>
                    
                    {/* Description - Hidden on Mobile to save space */}
                    <p className="hidden md:block text-sm md:text-base text-white/70 leading-relaxed mb-6 font-medium">
                      {project.description}
                    </p>
                    
                    <div className="hidden md:block w-full h-[1px] bg-white/10 mb-6" />
                    
                    {/* Two-Column Grid for Features & Impact */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                      
                      {/* What We Built - Hidden on Mobile to save space */}
                      <div className="hidden sm:block">
                        <h6 className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-3 flex items-center gap-2">
                          <Code2 size={12} /> What We Built
                        </h6>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature, fIdx) => (
                            <span key={fIdx} className="text-[10px] font-semibold bg-white/10 border border-white/10 px-2 py-1 rounded-md text-white/90">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Business Impact - ALways Visible */}
                      <div>
                        <h6 className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-3 flex items-center gap-2">
                          <CheckCircle2 size={12} /> Business Impact
                        </h6>
                        <div className="space-y-2 md:space-y-3">
                          {project.impact.map((result, rIdx) => (
                            <motion.div 
                              key={rIdx} 
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + (rIdx * 0.1) }}
                            >
                              <div className="mt-0.5 bg-green-500/20 p-1 rounded-full border border-green-500/30">
                                <CheckCircle2 size={10} className="text-green-400 shrink-0" />
                              </div>
                              <span className="text-[11px] md:text-xs font-semibold text-white/90 leading-snug">{result}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* CTAs */}
                    <div className="flex flex-row gap-2 md:gap-3">
                      <a 
                        href={project.link1}
                        className="flex-1 flex justify-center items-center gap-1.5 bg-white text-black px-2 py-3 md:py-4 rounded-full text-[9px] md:text-xs font-extrabold uppercase tracking-widest active:scale-95 transition-transform hover:bg-gray-200"
                      >
                        {project.cta1} <ArrowRight size={12} />
                      </a>
                      <a 
                        href={project.link2}
                        className="flex-1 flex justify-center items-center gap-1.5 bg-transparent border border-white/20 text-white px-2 py-3 md:py-4 rounded-full text-[9px] md:text-xs font-extrabold uppercase tracking-widest active:scale-95 transition-transform hover:bg-white/5"
                      >
                        {project.cta2} {project.cta2.includes("Live Website") ? <ExternalLink size={12} /> : <PlayCircle size={12} />}
                      </a>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
