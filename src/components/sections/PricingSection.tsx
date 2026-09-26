import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const TIERS = [
  {
    name: "Starter",
    price: "₹25,000",
    period: "onwards",
    tag: null,
    description: "Perfect for businesses that need a premium digital presence built to convert.",
    features: [
      "Custom UI/UX Design (Figma)",
      "Premium Frontend (React)",
      "Mobile-First Responsive",
      "Contact & Lead Forms",
      "Basic SEO Setup",
      "2 Weeks Post-Launch Support",
    ],
    cta: "Start This Project",
    ctaHref: "/start-project",
    popular: false,
  },
  {
    name: "Growth Engine",
    price: "₹65,000",
    period: "onwards",
    tag: "Most Popular",
    description: "The complete digital autopilot system — automation, AI, and a custom backend built to scale.",
    features: [
      "Everything in Starter",
      "Custom Backend (Node.js + DB)",
      "Payment Gateway Integration",
      "AI Chatbot Integration",
      "WhatsApp & Email Automation",
      "Admin Dashboard",
      "Loyalty System",
      "3 Months Priority Support",
    ],
    cta: "Build My Growth Engine",
    ctaHref: "/start-project",
    popular: true,
  },
  {
    name: "Enterprise / SaaS",
    price: "Custom",
    period: "",
    tag: null,
    description: "Complex SaaS platforms, multi-tenant apps, and bespoke enterprise software built to your exact spec.",
    features: [
      "Dedicated Engineering Team",
      "Microservices Architecture",
      "AI/ML Model Integration",
      "Cross-platform Mobile Apps",
      "CI/CD Pipeline Setup",
      "24/7 Monitoring & SLA",
    ],
    cta: "Book a Consultation",
    ctaHref: "/start-project",
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-[#030712] text-white py-24 md:py-32 relative overflow-hidden border-t border-white/5">

      {/* Ambient glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-violet-600/[0.07] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-5 md:px-10 max-w-7xl relative z-10">

        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-white/40">Investment Tiers</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Transparent, ROI-Focused Pricing.
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg font-medium">
            We don't charge by the hour. We charge for the value, automation, and revenue our systems generate. Every rupee invested should come back multiplied.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start max-w-5xl mx-auto">
          {TIERS.map((tier, idx) => (
            <motion.div
              key={idx}
              className={`relative rounded-2xl p-7 md:p-9 flex flex-col h-full ${
                tier.popular
                  ? "bg-white/8 border-2 border-white/25 shadow-[0_0_60px_rgba(139,92,246,0.15)] md:-translate-y-3"
                  : "bg-white/[0.04] border border-white/10"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
            >
              {tier.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-500 text-white px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-lg shadow-violet-500/30">
                  {tier.tag}
                </div>
              )}

              <h3 className="text-base font-bold text-white/70 mb-2">{tier.name}</h3>

              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-3xl md:text-4xl font-extrabold text-white">{tier.price}</span>
                {tier.period && <span className="text-white/40 text-sm font-medium">{tier.period}</span>}
              </div>

              <p className="text-xs text-white/50 mb-7 leading-relaxed min-h-[3rem]">{tier.description}</p>

              <div className="w-full h-[1px] bg-white/8 mb-7" />

              <div className="space-y-3.5 mb-8 flex-1">
                {tier.features.map((feature, fi) => (
                  <div key={fi} className="flex items-start gap-3">
                    <CheckCircle2
                      size={15}
                      className={tier.popular ? "text-violet-400 mt-0.5 shrink-0" : "text-white/35 mt-0.5 shrink-0"}
                    />
                    <span className="text-sm font-medium text-white/75">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to={tier.ctaHref}
                className={`w-full py-3.5 rounded-full text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 ${
                  tier.popular
                    ? "bg-white text-black hover:bg-violet-50 hover:scale-105 shadow-xl"
                    : "bg-white/8 text-white hover:bg-white/15 border border-white/12"
                }`}
              >
                {tier.cta} <ArrowRight size={13} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-white/35 text-sm mb-4">
            Not sure which tier fits your business?
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi%20Krunnex%2C%20I%27d%20like%20help%20choosing%20the%20right%20package."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors"
          >
            <MessageCircle size={16} /> Get a Free Quote on WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}
