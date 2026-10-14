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
    <section className="bg-white text-slate-900 py-20 md:py-32 relative overflow-hidden border-t border-slate-200/80">

      <div className="container mx-auto px-5 md:px-10 max-w-7xl relative z-10">

        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-bold tracking-widest uppercase mb-3 text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100 inline-block">
            Investment Tiers
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mb-3 mt-2">
            Transparent, ROI-Focused Pricing.
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base sm:text-lg font-normal">
            No unexpected hourly rates. We engineer complete business systems that generate measurable revenue and automate operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          {TIERS.map((tier, idx) => (
            <motion.div
              key={idx}
              className={`relative rounded-3xl p-7 md:p-8 flex flex-col justify-between ${
                tier.popular
                  ? "bg-slate-50/80 border-2 border-indigo-600 shadow-[0_20px_50px_rgba(79,70,229,0.12)] md:-translate-y-2"
                  : "bg-white border border-slate-200 shadow-sm"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {tier.tag && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-sm">
                  {tier.tag}
                </div>
              )}

              <div>
                <h3 className="text-base font-bold text-slate-950 mb-2">{tier.name}</h3>

                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-3xl md:text-4xl font-extrabold text-slate-950">{tier.price}</span>
                  {tier.period && <span className="text-slate-400 text-sm font-medium">{tier.period}</span>}
                </div>

                <p className="text-xs text-slate-500 mb-6 leading-relaxed min-h-[3rem]">{tier.description}</p>

                <div className="w-full h-[1px] bg-slate-100 mb-6" />

                <div className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, fi) => (
                    <div key={fi} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={16}
                        className={tier.popular ? "text-indigo-600 mt-0.5 shrink-0" : "text-emerald-600 mt-0.5 shrink-0"}
                      />
                      <span className="text-xs font-semibold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to={tier.ctaHref}
                className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  tier.popular
                    ? "bg-slate-950 text-white hover:bg-slate-800 shadow-md"
                    : "bg-slate-100 text-slate-800 hover:bg-slate-200"
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
            href="https://wa.me/917794971935?text=Hi%20Krunnex%2C%20I%27d%20like%20help%20choosing%20the%20right%20package."
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
