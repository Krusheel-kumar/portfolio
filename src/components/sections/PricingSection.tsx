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
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block">
            Investment Tiers
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-950 mb-4 mt-2">
            Transparent, ROI-Focused Pricing.
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg sm:text-xl font-normal leading-relaxed">
            No unexpected hourly rates. We engineer complete business systems that generate measurable revenue and automate operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch max-w-6xl mx-auto">
          {TIERS.map((tier, idx) => (
            <motion.div
              key={idx}
              className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between ${
                tier.popular
                  ? "bg-slate-50/90 border-2 border-indigo-600 shadow-[0_20px_50px_rgba(79,70,229,0.15)] md:-translate-y-3"
                  : "bg-white border border-slate-200 shadow-sm hover:border-slate-300"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {tier.tag && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md">
                  {tier.tag}
                </div>
              )}

              <div>
                <h3 className="text-xl font-black text-slate-950 mb-2">{tier.name}</h3>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-black text-slate-950">{tier.price}</span>
                  {tier.period && <span className="text-slate-500 text-base font-semibold">{tier.period}</span>}
                </div>

                <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed min-h-[3.5rem]">{tier.description}</p>

                <div className="w-full h-[1px] bg-slate-100 mb-6" />

                <div className="space-y-3.5 mb-8 flex-1">
                  {tier.features.map((feature, fi) => (
                    <div key={fi} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className={tier.popular ? "text-indigo-600 mt-0.5 shrink-0" : "text-emerald-600 mt-0.5 shrink-0"}
                      />
                      <span className="text-sm font-semibold text-slate-800 leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to={tier.ctaHref}
                className={`w-full py-4 rounded-full text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  tier.popular
                    ? "bg-slate-950 text-white hover:bg-slate-800 shadow-md hover:scale-[1.02]"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                {tier.cta} <ArrowRight size={15} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-slate-600 text-base mb-4 font-medium">
            Not sure which tier fits your business?
          </p>
          <a
            href="https://wa.me/917794971935?text=Hi%20Krunnex%2C%20I%27d%20like%20help%20choosing%20the%20right%20package."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-sm font-bold hover:bg-emerald-100 transition-all shadow-sm"
          >
            <MessageCircle size={18} className="text-emerald-600" /> Get a Free Quote on WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}
