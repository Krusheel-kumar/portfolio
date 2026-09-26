import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/* ─── Animated Visual for each card ──────────────────────── */

function CodeVisual() {
  const lines = [
    { w: "70%", color: "bg-violet-400" },
    { w: "90%", color: "bg-cyan-400" },
    { w: "55%", color: "bg-white/30" },
    { w: "80%", color: "bg-violet-300" },
    { w: "65%", color: "bg-white/20" },
    { w: "75%", color: "bg-cyan-300" },
  ];
  return (
    <div className="absolute bottom-6 right-6 w-32 flex flex-col gap-1.5 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
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
    <div className="absolute top-5 right-5 opacity-40 group-hover:opacity-80 transition-opacity duration-500">
      <svg width="70" height="70" viewBox="0 0 70 70">
        <circle cx="35" cy="35" r="28" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
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
        <text x="35" y="40" textAnchor="middle" className="text-xs fill-white font-bold" fontSize="11">0.3s</text>
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
    <div className="absolute bottom-5 right-5 flex flex-col gap-1.5 opacity-35 group-hover:opacity-65 transition-opacity duration-500 w-28">
      {[
        { msg: "My order?", align: "start", color: "bg-white/10" },
        { msg: "Ready in 5 mins! 🎉", align: "end", color: "bg-violet-500/30" },
        { msg: "Thank you!", align: "start", color: "bg-white/10" },
      ].map((b, i) => (
        <motion.div
          key={i}
          className={`flex ${b.align === "end" ? "justify-end" : "justify-start"}`}
          initial={{ opacity: 0, x: b.align === "end" ? 10 : -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.2 }}
        >
          <div className={`${b.color} rounded-lg px-2 py-1 text-[9px] text-white/70 max-w-[90%]`}>
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
    desc: "React frontends on edge CDNs. 0.3s load times that maximize SEO and minimize bounce.",
    col: "md:col-span-1",
    accent: "from-yellow-500/15 to-orange-500/5",
    Visual: SpeedVisual,
  },
  {
    id: "ai",
    label: "Artificial Intelligence",
    number: "03",
    title: "AI-Native by Default",
    desc: "Every system is architected to leverage automation from day one — not bolted on as an afterthought.",
    col: "md:col-span-1",
    accent: "from-violet-500/20 to-blue-500/5",
    Visual: AIVisual,
  },
  {
    id: "scale",
    label: "Cloud Infrastructure",
    number: "05",
    title: "Built to Scale",
    desc: "10 users or 10 million — our cloud architecture scales dynamically. You'll never hit a wall.",
    col: "md:col-span-2",
    accent: "from-cyan-500/15 to-blue-500/5",
    Visual: ScaleVisual,
  },
  {
    id: "security",
    label: "Enterprise Security",
    number: "04",
    title: "Bank-Grade Security",
    desc: "End-to-end encryption, secure auth flows, and GDPR-ready data handling for your customers.",
    col: "md:col-span-1",
    accent: "from-green-500/20 to-emerald-500/5",
    Visual: SecurityVisual,
  },
  {
    id: "support",
    label: "Ongoing Partnership",
    number: "06",
    title: "Post-Launch Support",
    desc: "We don't disappear after delivery. Ongoing maintenance, updates, and optimisation as you grow.",
    col: "md:col-span-1",
    accent: "from-pink-500/15 to-rose-500/5",
    Visual: SupportVisual,
  },
];

/* ─── Main Section ────────────────────────────────────────── */
export default function WhyUsSection() {
  return (
    <section className="bg-[#030712] text-white py-24 md:py-36 relative overflow-hidden border-t border-white/5">

      {/* Section ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-5 md:px-10 max-w-7xl relative z-10">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-violet-400/70 mb-4 flex items-center gap-2">
            <span className="w-6 h-[1px] bg-violet-500" />
            The Krunnex Difference
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.05] mb-5">
            Why not just use
            <br />
            <span className="text-gradient-primary">a template?</span>
          </h2>
          <p className="text-white/45 text-base md:text-lg font-medium max-w-xl leading-relaxed">
            Because your business deserves software that actually fits — not a generic site that makes you look like everyone else.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {CARDS.map((card, idx) => {
            const { Visual } = card;
            return (
              <motion.div
                key={card.id}
                className={`${card.col} group relative overflow-hidden rounded-3xl border border-white/7 bg-white/[0.03] p-7 md:p-9 min-h-[220px] cursor-default transition-colors duration-500 hover:border-white/15`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
              >
                {/* Hover gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                {/* Card number */}
                <span className="absolute top-7 right-7 text-[11px] font-bold text-white/15 tracking-widest">
                  {card.number}
                </span>

                {/* Visual element */}
                <Visual />

                {/* Content */}
                <div className="relative z-10 max-w-[75%]">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mb-4 block">
                    {card.label}
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{card.desc}</p>
                </div>

                {/* Corner glow */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(circle, rgba(124,58,237,0.2), transparent)` }} />
              </motion.div>
            );
          })}
        </div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/start-project"
            className="group relative inline-flex items-center gap-2.5 rounded-full overflow-hidden px-8 py-3.5 text-sm font-extrabold text-white shadow-[0_0_30px_rgba(124,58,237,0.35)] transition-all hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5,#0891b2)" }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
              Start Your Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-white/45 hover:text-white transition-colors border border-white/10 px-8 py-3.5 rounded-full hover:border-white/20"
          >
            Ask a Question on WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}
