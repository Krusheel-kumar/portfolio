import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/* ─── Animated Visual for each card ──────────────────────── */

function CodeVisual() {
  const lines = [
    { w: "70%", color: "bg-violet-400" },
    { w: "90%", color: "bg-cyan-400" },
    { w: "55%", color: "bg-slate-300" },
    { w: "80%", color: "bg-violet-300" },
    { w: "65%", color: "bg-slate-200" },
    { w: "75%", color: "bg-cyan-300" },
  ];
  return (
    <div className="absolute bottom-6 right-6 w-32 flex flex-col gap-1.5 opacity-40 group-hover:opacity-75 transition-opacity duration-500">
      {lines.map((l, i) => (
        <motion.div
          key={i}
          className={`h-1.5 rounded-full ${l.color}`}
          style={{ width: l.w }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

function SpeedVisual() {
  const ref = useRef<SVGCircleElement>(null);
  const inView = useInView(ref, { once: true });
  const circumference = 2 * Math.PI * 28;
  return (
    <div className="absolute top-5 right-5 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
      <svg width="70" height="70" viewBox="0 0 70 70">
        <circle cx="35" cy="35" r="28" fill="none" stroke="rgba(15,23,42,0.08)" strokeWidth="3" />
        <circle
          ref={ref}
          cx="35" cy="35" r="28"
          fill="none"
          stroke="url(#speedGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={inView ? circumference * 0.12 : circumference}
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
            transition: "stroke-dashoffset 1.5s cubic-bezier(0.16,1,0.3,1) 0.4s",
          }}
        />
        <defs>
          <linearGradient id="speedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <text x="35" y="40" textAnchor="middle" className="text-xs fill-slate-900 font-black" fontSize="12">0.3s</text>
      </svg>
    </div>
  );
}

function AIVisual() {
  const dots = [
    { cx: 35, cy: 35, r: 4 },
    { cx: 15, cy: 20, r: 3 }, { cx: 55, cy: 20, r: 3 },
    { cx: 10, cy: 45, r: 2.5 }, { cx: 60, cy: 45, r: 2.5 },
    { cx: 28, cy: 58, r: 2.5 }, { cx: 42, cy: 58, r: 2.5 },
    { cx: 22, cy: 10, r: 2 }, { cx: 48, cy: 10, r: 2 },
  ];
  const lines = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [1, 7], [2, 8],
  ];
  return (
    <div className="absolute top-5 right-5 opacity-35 group-hover:opacity-70 transition-opacity duration-500">
      <svg width="70" height="70" viewBox="0 0 70 70">
        {lines.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={dots[a].cx} y1={dots[a].cy}
            x2={dots[b].cx} y2={dots[b].cy}
            stroke="rgba(124,58,237,0.6)" strokeWidth="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
          />
        ))}
        {dots.map((d, i) => (
          <motion.circle
            key={i}
            cx={d.cx} cy={d.cy} r={d.r}
            fill={i === 0 ? "#7c3aed" : "#06b6d4"}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.07 }}
            style={{ transformOrigin: `${d.cx}px ${d.cy}px` }}
          />
        ))}
      </svg>
    </div>
  );
}

function SecurityVisual() {
  return (
    <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-65 transition-opacity duration-500">
      <div className="relative w-14 h-14 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full border border-green-500/40"
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border border-green-400/30"
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
        />
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
          <path d="M12 2L3 6v7c0 5.25 3.75 10.15 9 11.4C17.25 23.15 21 18.25 21 13V6L12 2Z" fill="rgba(34,197,94,0.3)" stroke="rgba(34,197,94,0.8)" strokeWidth="1.5" />
          <path d="M8 14l2.5 2.5L16 10" stroke="rgba(34,197,94,1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

function ScaleVisual() {
  const bars = [20, 35, 28, 50, 42, 68, 58, 85, 75, 100];
  return (
    <div className="absolute bottom-6 right-6 flex items-end gap-1 h-12 opacity-35 group-hover:opacity-65 transition-opacity duration-500">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-2.5 rounded-sm"
          style={{
            background: `linear-gradient(180deg, #7c3aed, #06b6d4)`,
            height: `${h}%`,
          }}
          initial={{ scaleY: 0, originY: 1 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </div>
  );
}

function SupportVisual() {
  return (
    <div className="absolute bottom-5 right-5 flex flex-col gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-500 w-32">
      {[
        { msg: "Order ready?", align: "start", color: "bg-slate-200 text-slate-800" },
        { msg: "Delivered in 5m! 🎉", align: "end", color: "bg-indigo-600 text-white font-medium" },
        { msg: "Amazing!", align: "start", color: "bg-slate-200 text-slate-800" },
      ].map((b, i) => (
        <motion.div
          key={i}
          className={`flex ${b.align === "end" ? "justify-end" : "justify-start"}`}
          initial={{ opacity: 0, x: b.align === "end" ? 10 : -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.2 }}
        >
          <div className={`${b.color} rounded-lg px-2.5 py-1 text-[10px] shadow-sm max-w-[90%]`}>
            {b.msg}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Card data ───────────────────────────────────────────── */
const CARDS = [
  {
    id: "code",
    label: "Custom Code Only",
    number: "01",
    title: "100% Custom Built",
    desc: "Every line written from scratch. No WordPress. No Webflow. No templates. Your software is as unique as your business.",
    col: "md:col-span-2",
    accent: "from-blue-500/20 to-violet-500/10",
    Visual: CodeVisual,
  },
  {
    id: "speed",
    label: "Performance",
    number: "02",
    title: "Sub-Second Speed",
    desc: "React frontends on edge CDNs. 0.3s load times that maximize SEO and minimize bounce rates.",
    col: "md:col-span-1",
    accent: "from-yellow-500/15 to-orange-500/5",
    Visual: SpeedVisual,
  },
  {
    id: "ai",
    label: "Artificial Intelligence",
    number: "03",
    title: "AI-Native by Default",
    desc: "Every system is architected to leverage automation and LLMs from day one — not bolted on as an afterthought.",
    col: "md:col-span-1",
    accent: "from-violet-500/20 to-blue-500/5",
    Visual: AIVisual,
  },
  {
    id: "scale",
    label: "Cloud Infrastructure",
    number: "05",
    title: "Built to Scale",
    desc: "10 users or 10 million — our cloud architecture scales dynamically with zero downtime. You'll never hit a wall.",
    col: "md:col-span-2",
    accent: "from-cyan-500/15 to-blue-500/5",
    Visual: ScaleVisual,
  },
  {
    id: "security",
    label: "Enterprise Security",
    number: "04",
    title: "Bank-Grade Security",
    desc: "End-to-end encryption, secure auth flows, and GDPR-ready data handling to protect your customers.",
    col: "md:col-span-1",
    accent: "from-green-500/20 to-emerald-500/5",
    Visual: SecurityVisual,
  },
  {
    id: "support",
    label: "Ongoing Partnership",
    number: "06",
    title: "Post-Launch Support",
    desc: "We don't disappear after delivery. Ongoing maintenance, performance tuning, and continuous feature expansion.",
    col: "md:col-span-1",
    accent: "from-pink-500/15 to-rose-500/5",
    Visual: SupportVisual,
  },
];

/* ─── Main Section ────────────────────────────────────────── */
export default function WhyUsSection() {
  return (
    <section className="bg-white text-slate-900 py-24 md:py-36 relative overflow-hidden border-t border-slate-200/80">

      <div className="container mx-auto px-5 md:px-10 max-w-7xl relative z-10">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block mb-4">
            The Krunnex Standard
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-950 mb-4">
            Why custom engineering wins over templates.
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl font-normal max-w-2xl leading-relaxed">
            Your brand deserves software engineered for your specific business logic — not bloated page-builder themes that slow down your conversion rates.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, idx) => {
            return (
              <motion.div
                key={card.id}
                className={`${card.col} group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/70 p-8 sm:p-10 min-h-[220px] cursor-default transition-all duration-300 hover:border-indigo-400 hover:shadow-xl hover:bg-white`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                {/* Visual */}
                <card.Visual />

                {/* Card number */}
                <span className="absolute top-8 right-8 text-sm font-black text-slate-300 tracking-widest">
                  {card.number}
                </span>

                {/* Content */}
                <div className="relative z-10 max-w-[85%]">
                  <span className="text-xs font-bold tracking-wider uppercase text-indigo-600 mb-2.5 block">
                    {card.label}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-950 mb-3 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/start-project"
            className="group relative inline-flex items-center justify-center gap-2.5 rounded-full overflow-hidden px-9 py-4 text-sm font-extrabold text-white shadow-[0_4px_20px_rgba(79,70,229,0.35)] transition-all hover:scale-105 active:scale-95 bg-slate-950 hover:bg-slate-800"
          >
            Start Your Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://wa.me/917794971935?text=Hi%20Krunnex%2C%20I%27d%20like%20to%20ask%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold text-slate-800 hover:text-slate-950 transition-colors border border-slate-300 bg-white hover:bg-slate-50 px-8 py-4 rounded-full shadow-sm"
          >
            Ask a Question on WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}
