import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const TIERS = [
  {
    name: "Growth Catalyst",
    price: "₹30,000",
    period: "/project",
    description: "Perfect for scaling businesses needing a premium digital ecosystem.",
    features: [
      "Custom UI/UX Design (Figma)",
      "Premium Frontend Development (React)",
      "Headless CMS Integration",
      "Basic SEO Optimization",
      "Analytics Dashboard",
      "2 Weeks Post-Launch Support"
    ],
    cta: "Start Scaling",
    popular: false
  },
  {
    name: "Enterprise Engine",
    price: "₹75,000",
    period: "/project",
    description: "The complete autopilot system. End-to-end automation and scalable infrastructure.",
    features: [
      "Everything in Growth Catalyst",
      "Custom Backend Architecture (Node.js)",
      "AI Chatbot Integration",
      "WhatsApp & Email Automation",
      "Advanced Third-Party APIs",
      "Enterprise Grade Security",
      "3 Months Priority Support"
    ],
    cta: "Dominate Your Market",
    popular: true
  },
  {
    name: "Venture/SaaS",
    price: "Custom",
    period: "",
    description: "Bespoke SaaS platforms and complex web applications built from scratch.",
    features: [
      "Dedicated Engineering Team",
      "Microservices Architecture",
      "Machine Learning Models",
      "Cross-platform Mobile Apps",
      "Continuous Integration (CI/CD)",
      "24/7 Server Monitoring"
    ],
    cta: "Book Consultation",
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden">
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-white/50">Investment Tiers</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">ROI-Driven Pricing.</h3>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">We don't charge for hours. We charge for the value, automation, and revenue our systems generate for your business.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {TIERS.map((tier, idx) => (
            <motion.div
              key={idx}
              className={`relative rounded-[2rem] p-8 md:p-10 flex flex-col ${
                tier.popular 
                  ? 'bg-[#111] border-2 border-white/30 shadow-[0_0_50px_rgba(255,255,255,0.1)] md:-translate-y-4' 
                  : 'bg-[#0a0a0a] border border-white/10'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-xl">
                  Most Popular
                </div>
              )}

              <h4 className="text-xl font-bold text-white/80 mb-2">{tier.name}</h4>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-extrabold">{tier.price}</span>
                <span className="text-white/50 mb-1 font-medium">{tier.period}</span>
              </div>
              
              <p className="text-sm text-white/60 mb-8 h-10">{tier.description}</p>
              
              <div className="w-full h-[1px] bg-white/10 mb-8" />
              
              <div className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className={tier.popular ? "text-white" : "text-white/40"} />
                    <span className="text-sm font-medium text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-full text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                tier.popular 
                  ? 'bg-white text-black hover:bg-gray-200 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                {tier.cta} <ArrowRight size={14} />
              </button>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
