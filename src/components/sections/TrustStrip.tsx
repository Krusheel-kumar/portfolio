import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const STATS = [
  { value: 25, suffix: "+", label: "Projects Delivered", desc: "and counting" },
  { value: 100, suffix: "%", label: "Client Retention", desc: "every client comes back" },
  { value: 7, suffix: " Weeks", label: "Avg. Delivery", desc: "concept to live" },
  { value: 0, suffix: "", label: "Templates Used", desc: "always from scratch" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || target === 0) { if (target === 0) setCount(0); return; }
    const duration = 1600;
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
    <div ref={ref} className="font-extrabold tracking-tighter text-white tabular-nums"
      style={{ fontSize: "clamp(2.8rem, 5vw, 4rem)", lineHeight: 1 }}>
      {count}{suffix}
    </div>
  );
}

const TICKER_ITEMS = [
  "Restaurant Digital Ecosystem",
  "WhatsApp Automation",
  "AI Chatbot Integration",
  "QR Ordering Systems",
  "Loyalty Platforms",
  "Custom Admin Dashboards",
  "E-commerce Storefronts",
  "POS Systems",
  "Payment Integrations",
  "Business Automation",
  "Mobile Apps",
  "Custom Software",
];

export default function TrustStrip() {
  return (
    <section className="bg-[#030712] overflow-hidden relative">

      {/* Top separator line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Stats Row */}
      <div className="container mx-auto px-5 md:px-10 py-16 md:py-20 max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-2 group"
            >
              {/* Number */}
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />

              {/* Divider line */}
              <motion.div
                className="h-[1px] w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-violet-500 to-cyan-500"
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
              />

              {/* Labels */}
              <div className="mt-1">
                <p className="text-white text-sm font-bold">{stat.label}</p>
                <p className="text-white/30 text-xs font-medium">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/6 to-transparent" />

      {/* Ticker row */}
      <div className="relative py-5 overflow-hidden bg-gradient-to-b from-white/[0.02] to-transparent">
        {/* Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #030712, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(-90deg, #030712, transparent)" }} />

        <div
          className="flex gap-10 whitespace-nowrap animate-ticker"
          style={{ width: "max-content" }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3.5 text-[11px] font-semibold text-white/25 uppercase tracking-[0.18em]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L9.8 6.2L14.4 6.9L11.2 10L12 14.6L8 12.4L4 14.6L4.8 10L1.6 6.9L6.2 6.2L8 2Z"
                  fill="rgba(124,58,237,0.6)" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom separator */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/6 to-transparent" />

    </section>
  );
}
