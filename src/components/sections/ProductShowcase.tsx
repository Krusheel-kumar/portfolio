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
    <section className="bg-[#0a0a0a] text-white relative py-24 md:py-32 border-t border-white/5">

      <div className="container mx-auto px-5 md:px-10 max-w-7xl relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center mb-20 md:mb-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-white/40">Real Work. Real Results.</p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Proof of Execution.</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-base md:text-lg font-medium">
            Every project below was built from scratch — no templates, no page builders. Just clean code and measurable business impact.
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
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-full max-w-6xl rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col md:flex-row bg-[#111] border border-white/8">

                  {/* Accent glow top */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.accentColor} to-transparent pointer-events-none`} />

                  {/* Image */}
                  <div className="w-full md:w-[48%] h-[220px] sm:h-[280px] md:h-[580px] relative overflow-hidden shrink-0">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      whileInView={{ scale: [1.05, 1] }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                    {/* Gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 md:block hidden" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-center">

                    {/* Category */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                      <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-white/55">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-5 leading-tight text-white">
                      {project.title}
                    </h3>

                    <p className="hidden md:block text-sm md:text-base text-white/60 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="hidden md:block w-full h-[1px] bg-white/8 mb-6" />

                    {/* Features + Impact Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mb-6 md:mb-8">

                      {/* What We Built */}
                      <div className="hidden sm:block">
                        <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/40 mb-3 flex items-center gap-1.5">
                          <Code2 size={11} /> What We Built
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((f, fi) => (
                            <span key={fi} className="text-[10px] font-semibold bg-white/8 border border-white/10 px-2.5 py-1 rounded-md text-white/80">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Business Impact */}
                      <div>
                        <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/40 mb-3 flex items-center gap-1.5">
                          <CheckCircle2 size={11} /> Business Impact
                        </h4>
                        <div className="space-y-2.5">
                          {project.impact.map((r, ri) => (
                            <motion.div
                              key={ri}
                              className="flex items-start gap-2.5"
                              initial={{ opacity: 0, x: -8 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.15 + ri * 0.08 }}
                            >
                              <div className="mt-0.5 bg-green-500/15 p-1 rounded-full border border-green-500/25 shrink-0">
                                <CheckCircle2 size={9} className="text-green-400" />
                              </div>
                              <span className="text-[11px] md:text-xs font-semibold text-white/85 leading-snug">{r}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* CTAs */}
                    <div className="flex flex-row gap-3">
                      <Link
                        to={project.ctaPrimary.href}
                        className="flex-1 flex justify-center items-center gap-1.5 bg-white text-black px-3 py-3.5 md:py-4 rounded-full text-[10px] md:text-xs font-extrabold uppercase tracking-wider active:scale-95 transition-all hover:bg-gray-100 shadow-lg"
                      >
                        {project.ctaPrimary.label} <ArrowRight size={11} />
                      </Link>
                      {project.ctaSecondary.external ? (
                        <a
                          href={project.ctaSecondary.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex justify-center items-center gap-1.5 bg-transparent border border-white/20 text-white px-3 py-3.5 md:py-4 rounded-full text-[10px] md:text-xs font-extrabold uppercase tracking-wider active:scale-95 transition-all hover:bg-white/8"
                        >
                          {project.ctaSecondary.label} <ExternalLink size={11} />
                        </a>
                      ) : (
                        <Link
                          to={project.ctaSecondary.href}
                          className="flex-1 flex justify-center items-center gap-1.5 bg-transparent border border-white/20 text-white px-3 py-3.5 md:py-4 rounded-full text-[10px] md:text-xs font-extrabold uppercase tracking-wider active:scale-95 transition-all hover:bg-white/8"
                        >
                          {project.ctaSecondary.label} <ArrowRight size={11} />
                        </Link>
                      )}
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
