import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    id: 1,
    category: "RESTAURANT AUTOMATION",
    title: "Restaurant Digital Ecosystem",
    description: "A complete digital transformation for restaurants — eliminating reliance on third-party delivery apps and building a direct, automated customer relationship engine.",
    features: ["Premium Website", "QR Ordering", "Payments", "AI Chatbot", "WhatsApp Automation", "Admin Dashboard", "Loyalty Program", "Analytics"],
    impact: ["Zero commission fees on all delivery orders", "40% increase in repeat customer rate", "Operations automated 24/7 — no extra staff"],
    ctaPrimary: { label: "Start a Similar Project", href: "/start-project" },
    ctaSecondary: { label: "View Live Demo", href: "#", external: true },
    image: "/images/project_1.jpg",
    accentColor: "from-orange-500/20",
  },
  {
    id: 2,
    category: "HIGH-CONVERSION E-COMMERCE",
    title: "E-commerce Platform",
    description: "A headless, lightning-fast storefront engineered to maximize conversions, reduce bounce rates, and recover abandoned carts through smart AI-driven personalization.",
    features: ["Premium Storefront", "Payment Gateway", "Inventory Management", "Customer Accounts", "Analytics Dashboard", "Mobile-First Design"],
    impact: ["Sub-second page load speeds", "65% reduction in cart abandonment", "3x conversion rate improvement on mobile"],
    ctaPrimary: { label: "Build My Store", href: "/start-project" },
    ctaSecondary: { label: "View Live Store", href: "#", external: true },
    image: "/images/project_2.jpg",
    accentColor: "from-blue-500/20",
  },
  {
    id: 3,
    category: "OPERATIONAL AUTOMATION",
    title: "Business Automation Suite",
    description: "A centralized command center giving real-time visibility into every aspect of operations — automating manual workflows that drain time and invite human error.",
    features: ["Custom Admin Panel", "CRM Integration", "Inventory Sync", "Staff Management", "Financial Reports", "Real-time Analytics"],
    impact: ["Saves 40+ hours of manual work per week", "Eliminated human error in accounting", "Real-time profit margin tracking across branches"],
    ctaPrimary: { label: "Automate My Business", href: "/start-project" },
    ctaSecondary: { label: "View Dashboard Demo", href: "#", external: false },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    accentColor: "from-violet-500/20",
  },
  {
    id: 4,
    category: "AI & WHATSAPP AUTOMATION",
    title: "AI Customer Engine",
    description: "Intelligent AI systems that act as your 24/7 sales representative and support agent — answering queries, capturing leads, and nurturing customers on WhatsApp automatically.",
    features: ["AI Chatbot", "WhatsApp Flows", "Lead Generation", "Auto-notifications", "Review Collection", "Loyalty Triggers"],
    impact: ["5x more qualified leads captured automatically", "3x higher WhatsApp conversion rate", "Zero staff intervention — fully autonomous"],
    ctaPrimary: { label: "Add AI to My Business", href: "/start-project" },
    ctaSecondary: { label: "See How It Works", href: "#", external: false },
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    accentColor: "from-green-500/20",
  },
  {
    id: 5,
    category: "CUSTOM SOFTWARE",
    title: "Bespoke Business Software",
    description: "When off-the-shelf software can't solve your problem, we build the exact system you need — from custom SaaS platforms to enterprise admin panels and API integrations.",
    features: ["Custom Web Apps", "Admin Panels", "API Integrations", "Cloud Deployment", "Secure Authentication", "Scalable Architecture"],
    impact: ["Enterprise-grade security and compliance", "Flawless third-party API integrations", "Scales from 10 users to 10 million"],
    ctaPrimary: { label: "Discuss My Project", href: "/start-project" },
    ctaSecondary: { label: "Book Consultation", href: "/start-project", external: false },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    accentColor: "from-cyan-500/20",
  }
];

export default function ProductShowcase() {
  return (
    <section className="bg-[#FAFAFA] text-slate-900 relative py-20 md:py-28 border-t border-slate-200/80">

      <div className="container mx-auto px-5 md:px-10 max-w-7xl relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block">
            Proof of Execution
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-950 mt-2 mb-4">
            Real Systems. Measurable Impact.
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto text-lg sm:text-xl font-normal leading-relaxed">
            Custom engineered platforms built for real businesses. Zero templates. Clean, scalable architecture.
          </p>
        </motion.div>

        {/* Stacked Cards */}
        <div className="flex flex-col gap-10 md:gap-0 pb-[25vh] relative">
          {PROJECTS.map((project, idx) => {
            const topOffset = `calc(88px + ${idx * 28}px)`;

            return (
              <motion.div
                key={project.id}
                className="md:sticky w-full flex justify-center"
                style={{ top: topOffset }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-full max-w-6xl rounded-3xl overflow-hidden relative shadow-[0_20px_60px_rgba(15,23,42,0.08)] flex flex-col md:flex-row bg-white border border-slate-200">

                  {/* Accent bar top */}
                  <div className={`absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r ${project.accentColor} to-transparent pointer-events-none`} />

                  {/* Image */}
                  <div className="w-full md:w-[46%] h-[260px] sm:h-[340px] md:h-auto min-h-[460px] relative overflow-hidden shrink-0 bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-7 sm:p-9 md:p-12 lg:p-14 flex flex-col justify-center">

                    {/* Category */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-slate-500">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 leading-tight text-slate-950">
                      {project.title}
                    </h3>

                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="w-full h-[1px] bg-slate-100 mb-6" />

                    {/* Features + Impact Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">

                      {/* What We Built */}
                      <div className="hidden sm:block">
                        <h4 className="text-xs font-bold tracking-wider uppercase text-slate-400 mb-3.5 flex items-center gap-1.5">
                          <Code2 size={14} /> Tech Stack & Features
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((f, fi) => (
                            <span key={fi} className="text-xs font-semibold bg-slate-100 border border-slate-200/80 px-3 py-1.5 rounded-lg text-slate-700">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Business Impact */}
                      <div>
                        <h4 className="text-xs font-bold tracking-wider uppercase text-slate-400 mb-3.5 flex items-center gap-1.5">
                          <CheckCircle2 size={14} /> Business Impact
                        </h4>
                        <div className="space-y-2.5">
                          {project.impact.map((r, ri) => (
                            <div key={ri} className="flex items-start gap-2.5">
                              <CheckCircle2 size={16} className="text-emerald-600 mt-1 shrink-0" />
                              <span className="text-sm font-semibold text-slate-800 leading-snug">{r}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3.5">
                      <Link
                        to={project.ctaPrimary.href}
                        className="flex-1 flex justify-center items-center gap-2 bg-slate-950 text-white px-6 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-slate-800 transition-all shadow-md"
                      >
                        {project.ctaPrimary.label} <ArrowRight size={15} />
                      </Link>
                      <a
                        href="https://wa.me/917794971935?text=Hi%20Krunnex%2C%20I%27d%20like%20to%20view%20details%20for%20this%20project."
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex justify-center items-center gap-2 bg-white border border-slate-300 text-slate-900 px-6 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-slate-50 transition-all shadow-sm"
                      >
                        Inquire Project <ExternalLink size={15} />
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
