import { Link } from "react-router-dom";
import { Calculator, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function HomeEstimatorTeaser() {
  return (
    <section className="py-20 md:py-24 bg-white border-t border-slate-200/80 text-slate-900 font-sans">
      <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
        <div className="rounded-3xl border-2 border-indigo-600/20 bg-gradient-to-br from-indigo-50/50 via-white to-slate-50 p-8 sm:p-12 md:p-14 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          <div className="max-w-xl text-center lg:text-left">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-700 bg-indigo-100/70 px-4 py-1.5 rounded-full mb-4">
              <Calculator size={14} /> Interactive Cost Calculator
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight mb-4 leading-tight">
              Estimate Your Project Cost in 60 Seconds.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
              Select your required system, features, and integrations to calculate an indicative price range using our transparent pricing formulas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold text-slate-700 mb-8 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                <span>Deterministic pricing rules</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                <span>Zero vendor lock-in</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                <span>Direct WhatsApp quote transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                <span>100% source code ownership</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
              <Link
                to="/estimate"
                className="inline-flex h-15 items-center justify-center gap-2.5 rounded-full bg-slate-950 px-8 text-sm font-bold text-white shadow-md hover:bg-slate-800 hover:scale-[1.02] active:scale-98 transition-all"
              >
                Launch Project Estimator <ArrowRight size={16} />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex h-15 items-center justify-center gap-2 rounded-full bg-white border border-slate-300 px-7 text-sm font-bold text-slate-800 hover:bg-slate-50 transition-all shadow-sm"
              >
                View Fixed Tiers
              </Link>
            </div>
          </div>

          {/* Interactive Preview Mockup Box */}
          <div className="w-full lg:w-auto shrink-0 max-w-sm">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md text-left">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Sample Calculation</span>
                <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md">Live Formula</span>
              </div>
              <div className="space-y-2.5 text-xs text-slate-600 mb-5">
                <div className="flex justify-between">
                  <span>Restaurant POS + QR:</span>
                  <span className="font-bold text-slate-900">₹35,000</span>
                </div>
                <div className="flex justify-between">
                  <span>UPI Payment Gateway:</span>
                  <span className="font-bold text-slate-900">+₹8,000</span>
                </div>
                <div className="flex justify-between">
                  <span>WhatsApp Receipts Flow:</span>
                  <span className="font-bold text-slate-900">+₹8,000</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-100 font-bold text-slate-950 text-sm">
                  <span>Indicative Range:</span>
                  <span className="text-emerald-700">₹45k - ₹58k</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 text-center">
                Configure your own system in the estimator
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
