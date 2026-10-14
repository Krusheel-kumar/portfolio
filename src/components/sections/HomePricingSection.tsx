import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Calculator, MessageCircle } from "lucide-react";
import { PRICING_TIERS } from "@/data/pricingConfig";

export default function HomePricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white border-t border-slate-200/80 text-slate-900 font-sans">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block mb-3.5">
            Investment Tiers
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight mb-4">
            Transparent, ROI-Focused Pricing
          </h2>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Starting prices based on proven architectural scopes. All custom proposals are fixed-price before kickoff.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 sm:gap-8 items-stretch mb-14">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between ${
                tier.popular
                  ? "bg-white border-2 border-indigo-600 shadow-xl ring-4 ring-indigo-500/10 lg:-translate-y-2"
                  : "bg-white border border-slate-200 shadow-sm hover:border-slate-300"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-1">{tier.name}</h3>
                
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl sm:text-4xl font-black text-slate-950">{tier.price}</span>
                  <span className="text-slate-500 text-xs font-semibold">{tier.period}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed font-normal min-h-[2.5rem]">
                  {tier.tagline}
                </p>

                <div className="w-full h-[1px] bg-slate-100 mb-6" />

                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Core Inclusions:</h4>
                <div className="space-y-2.5 mb-8">
                  {tier.includedFeatures.slice(0, 5).map((feat, fi) => (
                    <div key={fi} className="flex items-start gap-2.5 text-xs font-semibold text-slate-800 leading-snug">
                      <CheckCircle2 size={15} className={tier.popular ? "text-indigo-600 mt-0.5 shrink-0" : "text-emerald-600 mt-0.5 shrink-0"} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to={tier.ctaLink}
                className={`inline-flex items-center justify-center gap-2 w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  tier.popular
                    ? "bg-slate-950 text-white hover:bg-slate-800 shadow-md hover:scale-[1.02]"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                {tier.ctaText} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Footer actions for Pricing */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            to="/estimate"
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <Calculator size={16} /> Calculate a custom estimate with our Cost Estimator
          </Link>
          <span className="hidden sm:inline text-slate-300">•</span>
          <Link
            to="/pricing"
            className="text-sm font-bold text-slate-700 hover:text-slate-950 transition-colors underline"
          >
            View full pricing breakdown & cost factors
          </Link>
        </div>

      </div>
    </section>
  );
}
