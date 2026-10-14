import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, MessageCircle, Calculator, ChevronRight, HelpCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import { PRICING_TIERS } from "@/data/pricingConfig";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-indigo-500/20 selection:text-indigo-900">
      <Navbar />

      <main className="pt-36 pb-24 sm:pt-44 md:pt-48">
        
        {/* Header */}
        <div className="container mx-auto px-5 md:px-10 max-w-6xl text-center mb-16 md:mb-20">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block mb-4">
            Transparent Pricing
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight mb-4">
            Transparent, ROI-Focused Investment Tiers
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            No surprise hourly billing. We engineer complete business systems with fixed-price scope sign-offs.
          </p>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="container mx-auto px-5 md:px-10 max-w-6xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between ${
                  tier.popular
                    ? "bg-white border-2 border-indigo-600 shadow-xl ring-4 ring-indigo-500/10 lg:-translate-y-3"
                    : "bg-white border border-slate-200 shadow-sm hover:border-slate-300"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <h2 className="text-2xl font-black text-slate-950 mb-2">{tier.name}</h2>
                  
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl sm:text-5xl font-black text-slate-950">{tier.price}</span>
                    <span className="text-slate-500 text-xs font-semibold">{tier.period}</span>
                  </div>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed min-h-[3rem] font-normal">
                    {tier.tagline}
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 mb-6 font-medium">
                    <span className="font-bold text-slate-900">Best for: </span>
                    {tier.idealFor}
                  </div>

                  <div className="w-full h-[1px] bg-slate-100 mb-6" />

                  {/* Included Scope */}
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Included in Scope:</h3>
                  <div className="space-y-3 mb-8">
                    {tier.includedFeatures.map((feat, fi) => (
                      <div key={fi} className="flex items-start gap-2.5 text-xs font-semibold text-slate-800 leading-snug">
                        <CheckCircle2 size={16} className={tier.popular ? "text-indigo-600 mt-0.5 shrink-0" : "text-emerald-600 mt-0.5 shrink-0"} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Optional Add-ons */}
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Optional Add-ons:</h3>
                  <div className="space-y-2 mb-8">
                    {tier.optionalAddons.map((addon, ai) => (
                      <div key={ai} className="text-xs text-slate-500 font-medium">
                        • {addon}
                      </div>
                    ))}
                  </div>

                  {/* Timeline & Support */}
                  <div className="pt-4 border-t border-slate-100 mb-8 space-y-2 text-xs text-slate-500">
                    <p><span className="font-bold text-slate-700">Timeline:</span> {tier.timeline}</p>
                    <p><span className="font-bold text-slate-700">Handover:</span> {tier.supportTerms}</p>
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
        </div>

        {/* Breakdown of One-Time vs Recurring Costs */}
        <div className="container mx-auto px-5 md:px-10 max-w-4xl mb-20">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950 mb-2">Cost Structure Transparency</h2>
            <p className="text-sm text-slate-600 mb-6 font-normal">
              We believe in total transparency. Here is how one-time engineering differs from third-party operational fees:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-base font-black text-slate-950 mb-2">One-Time Development Charges</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Covers all UI/UX design in Figma, bespoke React frontend code, backend APIs, database architecture, payment integrations, QA testing, and cloud deployment setup.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-base font-black text-slate-950 mb-2">External Running Costs (Direct to Providers)</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Domain registration (~₹800/yr), cloud server hosting (often ₹0–₹1,500/mo depending on traffic), Meta WhatsApp conversation fees (paid directly to Meta), and payment gateway transaction fees (typically ~2% per successful order).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Estimator Teaser */}
        <div className="container mx-auto px-5 md:px-10 max-w-4xl text-center">
          <div className="p-10 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-50 to-white border border-indigo-100 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mb-3">
              Want a customized breakdown for your exact feature list?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto mb-8 font-normal">
              Try our step-by-step cost estimator tool. Select your system, features, and integrations to see an indicative budget range.
            </p>
            <Link
              to="/estimate"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-8 text-sm font-bold text-white hover:bg-slate-800 transition-all shadow-md"
            >
              <Calculator size={17} /> Open Interactive Project Estimator
            </Link>
          </div>
        </div>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
