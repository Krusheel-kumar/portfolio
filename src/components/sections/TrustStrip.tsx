import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const STATS = [
  { value: 25, suffix: "+", label: "Projects Delivered", desc: "Across India & Global" },
  { value: 100, suffix: "%", label: "Client Retention", desc: "Long-term partnerships" },
  { value: 4, suffix: " Weeks", label: "Avg. Turnaround", desc: "Concept to production" },
  { value: 0, suffix: "%", label: "Templates Used", desc: "100% custom engineered" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || target === 0) { if (target === 0) setCount(0); return; }
    const duration = 1400;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <div ref={ref} className="font-black tracking-tight text-slate-950 tabular-nums text-5xl sm:text-6xl md:text-7xl">
      {count}{suffix}
    </div>
  );
}

const TICKER_ITEMS = [
  "Restaurant Digital Ecosystem",
  "Zero-Commission POS",
  "AI WhatsApp Automation",
  "Next.js Storefronts",
  "Custom Admin Panels",
  "QR Ordering Systems",
  "Payment Gateways",
  "Loyalty & Cashback",
  "Business Automation",
  "High-Conversion UI/UX",
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-slate-200/80 overflow-hidden relative">

      {/* Stats Row */}
      <div className="container mx-auto px-5 md:px-10 py-12 md:py-16 max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col gap-1.5"
            >
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              <p className="text-slate-900 text-sm font-bold mt-1">{stat.label}</p>
              <p className="text-slate-500 text-xs font-medium">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ticker marquee row */}
      <div className="relative py-4 border-t border-slate-100 overflow-hidden bg-slate-50/60">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-slate-50 to-transparent" />

        <div
          className="flex gap-8 whitespace-nowrap animate-ticker"
          style={{ width: "max-content" }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-wider"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              {item}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
