import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, ArrowLeft, Check, CheckCircle2, RotateCcw, 
  MessageCircle, Calculator, ChevronRight, Sparkles, AlertCircle 
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import { 
  ESTIMATOR_SERVICES, 
  COMPLEXITY_MULTIPLIERS, 
  INTEGRATION_OPTIONS, 
  EstimatorServiceOption 
} from "@/data/pricingConfig";

export default function ProjectEstimator() {
  const [searchParams] = useSearchParams();
  const initialServiceId = searchParams.get("service") || "website";

  // Step state (1 to 5)
  const [step, setStep] = useState(1);

  // User selections
  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [complexity, setComplexity] = useState<"basic" | "standard" | "advanced">("standard");
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([]);

  const currentService = useMemo(() => {
    return ESTIMATOR_SERVICES.find((s) => s.id === selectedServiceId) || ESTIMATOR_SERVICES[0];
  }, [selectedServiceId]);

  // Toggle feature selection
  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId) ? prev.filter((id) => id !== featureId) : [...prev, featureId]
    );
  };

  // Toggle integration selection
  const toggleIntegration = (intId: string) => {
    setSelectedIntegrations((prev) =>
      prev.includes(intId) ? prev.filter((id) => id !== intId) : [...prev, intId]
    );
  };

  // Deterministic calculation
  const calculation = useMemo(() => {
    const base = currentService.basePrice;

    const featuresTotal = selectedFeatures.reduce((acc, featId) => {
      const feat = currentService.features.find((f) => f.id === featId);
      return acc + (feat ? feat.price : 0);
    }, 0);

    const integrationsTotal = selectedIntegrations.reduce((acc, intId) => {
      const opt = INTEGRATION_OPTIONS.find((i) => i.id === intId);
      return acc + (opt ? opt.price : 0);
    }, 0);

    const subtotal = base + featuresTotal + integrationsTotal;
    const multiplier = COMPLEXITY_MULTIPLIERS[complexity].multiplier;
    const estimatedMid = Math.round(subtotal * multiplier);

    // Range: -10% to +15%
    const minEstimate = Math.round(estimatedMid * 0.9);
    const maxEstimate = Math.round(estimatedMid * 1.15);

    return {
      base,
      featuresTotal,
      integrationsTotal,
      subtotal,
      minEstimate,
      maxEstimate
    };
  }, [currentService, selectedFeatures, complexity, selectedIntegrations]);

  const resetEstimator = () => {
    setStep(1);
    setSelectedFeatures([]);
    setSelectedIntegrations([]);
    setComplexity("standard");
  };

  const formatRupees = (amount: number) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  // Pre-formatted WhatsApp text
  const whatsappText = encodeURIComponent(
    `Hi Krunnex, I used your project estimator:\n` +
    `• Project Type: ${currentService.name}\n` +
    `• Complexity: ${complexity.toUpperCase()}\n` +
    `• Features: ${selectedFeatures.length} selected\n` +
    `• Integrations: ${selectedIntegrations.length} selected\n` +
    `• Estimated Range: ${formatRupees(calculation.minEstimate)} - ${formatRupees(calculation.maxEstimate)}\n` +
    `I would like to discuss a formal quotation.`
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-indigo-500/20 selection:text-indigo-900">
      <Navbar />

      <main className="pt-32 pb-24 sm:pt-40 md:pt-44">
        
        {/* Breadcrumb */}
        <div className="container mx-auto px-5 md:px-10 max-w-4xl mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-900 font-bold">Project Cost Estimator</span>
          </nav>
        </div>

        {/* Main Card Wrapper */}
        <div className="container mx-auto px-5 md:px-10 max-w-4xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            
            {/* Step Progress Bar */}
            <div className="mb-10">
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                <span>Step {step} of 5</span>
                <span>
                  {step === 1 && "Choose System Type"}
                  {step === 2 && "Select Desired Features"}
                  {step === 3 && "Select Project Complexity"}
                  {step === 4 && "Choose Integrations"}
                  {step === 5 && "Calculated Estimate"}
                </span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-slate-950 transition-all duration-300 rounded-full"
                  style={{ width: `${(step / 5) * 100}%` }}
                />
              </div>
            </div>

            {/* STEP 1: What do you want to build? */}
            {step === 1 && (
              <div>
                <h1 className="text-2xl sm:text-4xl font-black text-slate-950 mb-3">
                  What do you want to build?
                </h1>
                <p className="text-sm sm:text-base text-slate-600 mb-8 font-normal">
                  Select the digital system category that best matches your business requirements.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {ESTIMATOR_SERVICES.map((s) => {
                    const isSelected = selectedServiceId === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => {
                          setSelectedServiceId(s.id);
                          setSelectedFeatures([]);
                        }}
                        className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "bg-slate-50 border-indigo-600 ring-2 ring-indigo-600/20 shadow-sm"
                            : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            isSelected ? "border-indigo-600 bg-indigo-600 text-white" : "border-slate-300 bg-white"
                          }`}>
                            {isSelected && <Check size={12} strokeWidth={3} />}
                          </span>
                          <span className="text-xs font-bold text-slate-400">
                            Starts @ {formatRupees(s.basePrice)}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-black text-slate-950">{s.name}</h3>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-8 text-sm font-bold text-white hover:bg-slate-800 transition-all cursor-pointer shadow-md"
                  >
                    Next: Features <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Select the required features */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-950 mb-3">
                  Select Required Features
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mb-8 font-normal">
                  Customize the capabilities for your <span className="font-bold text-slate-900">{currentService.name}</span>.
                </p>

                <div className="space-y-3 mb-10">
                  {currentService.features.map((feat) => {
                    const isChecked = selectedFeatures.includes(feat.id);
                    return (
                      <div
                        key={feat.id}
                        onClick={() => toggleFeature(feat.id)}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                          isChecked
                            ? "bg-indigo-50/50 border-indigo-500 shadow-sm"
                            : "bg-white border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                            isChecked ? "bg-indigo-600 border-indigo-600 text-white" : "border-slate-300 bg-white"
                          }`}>
                            {isChecked && <Check size={13} strokeWidth={3} />}
                          </div>
                          <span className="text-sm sm:text-base font-bold text-slate-900">{feat.label}</span>
                        </div>
                        <span className="text-xs font-bold text-slate-500 shrink-0">
                          +{formatRupees(feat.price)}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-100 px-6 text-sm font-bold text-slate-700 hover:bg-slate-200 transition-all cursor-pointer"
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-8 text-sm font-bold text-white hover:bg-slate-800 transition-all cursor-pointer shadow-md"
                  >
                    Next: Complexity <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Choose project complexity */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-950 mb-3">
                  Choose Project Complexity
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mb-8 font-normal">
                  Complexity determines architectural rigor, custom edge cases, and performance engineering requirements.
                </p>

                <div className="space-y-4 mb-10">
                  {(Object.keys(COMPLEXITY_MULTIPLIERS) as Array<keyof typeof COMPLEXITY_MULTIPLIERS>).map((key) => {
                    const comp = COMPLEXITY_MULTIPLIERS[key];
                    const isSelected = complexity === key;
                    return (
                      <div
                        key={key}
                        onClick={() => setComplexity(key)}
                        className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                          isSelected
                            ? "bg-slate-50 border-indigo-600 ring-2 ring-indigo-600/20 shadow-sm"
                            : "bg-white border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-start gap-3.5">
                          <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 ${
                            isSelected ? "border-indigo-600 bg-indigo-600 text-white" : "border-slate-300 bg-white"
                          }`}>
                            {isSelected && <Check size={12} strokeWidth={3} />}
                          </span>
                          <div>
                            <h3 className="text-base sm:text-lg font-black text-slate-950">{comp.label}</h3>
                            <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">{comp.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-100 px-6 text-sm font-bold text-slate-700 hover:bg-slate-200 transition-all cursor-pointer"
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-8 text-sm font-bold text-white hover:bg-slate-800 transition-all cursor-pointer shadow-md"
                  >
                    Next: Integrations <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Select integrations */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-950 mb-3">
                  Select Third-Party Integrations
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mb-8 font-normal">
                  Select any external services or automation channels you want connected.
                </p>

                <div className="space-y-3 mb-10">
                  {INTEGRATION_OPTIONS.map((opt) => {
                    const isChecked = selectedIntegrations.includes(opt.id);
                    return (
                      <div
                        key={opt.id}
                        onClick={() => toggleIntegration(opt.id)}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                          isChecked
                            ? "bg-indigo-50/50 border-indigo-500 shadow-sm"
                            : "bg-white border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                            isChecked ? "bg-indigo-600 border-indigo-600 text-white" : "border-slate-300 bg-white"
                          }`}>
                            {isChecked && <Check size={13} strokeWidth={3} />}
                          </div>
                          <span className="text-sm sm:text-base font-bold text-slate-900">{opt.label}</span>
                        </div>
                        <span className="text-xs font-bold text-slate-500 shrink-0">
                          +{formatRupees(opt.price)}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setStep(3)}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-100 px-6 text-sm font-bold text-slate-700 hover:bg-slate-200 transition-all cursor-pointer"
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button
                    onClick={() => setStep(5)}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-8 text-sm font-bold text-white hover:bg-slate-800 transition-all cursor-pointer shadow-md"
                  >
                    Calculate Estimate <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: Display estimated investment range and summary */}
            {step === 5 && (
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100 inline-block mb-4">
                  Indicative Project Estimate
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-2">
                  Estimated Investment Range
                </h2>
                <p className="text-sm text-slate-500 mb-8">
                  Calculated based on your selected system, features, and integrations.
                </p>

                {/* Estimate Big Display Card */}
                <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white shadow-xl mb-8 text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Estimated Budget Range (One-Time)
                  </span>
                  <div className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-3">
                    {formatRupees(calculation.minEstimate)} — {formatRupees(calculation.maxEstimate)}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                    Includes custom UI/UX design, engineering, testing, cloud deployment, and initial handover support.
                  </p>
                </div>

                {/* Scope Summary Box */}
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Selected Specification Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="font-semibold text-slate-600">Selected System:</span>
                      <span className="font-bold text-slate-900">{currentService.name}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="font-semibold text-slate-600">Complexity Grade:</span>
                      <span className="font-bold text-slate-900 uppercase">{complexity}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="font-semibold text-slate-600">Selected Features:</span>
                      <span className="font-bold text-slate-900">{selectedFeatures.length} feature(s)</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="font-semibold text-slate-600">Selected Integrations:</span>
                      <span className="font-bold text-slate-900">{selectedIntegrations.length} integration(s)</span>
                    </div>
                  </div>
                </div>

                {/* Mandatory Disclaimer as per Prompt */}
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 mb-8 flex items-start gap-3">
                  <AlertCircle size={18} className="text-amber-700 mt-0.5 shrink-0" />
                  <p className="leading-relaxed">
                    <span className="font-bold">Disclaimer: </span>
                    This is an indicative estimate, not a final quotation. The final price will be confirmed after reviewing your detailed requirements and technical specifications.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3.5 mb-6">
                  <Link
                    to={`/contact?service=${currentService.id}&estimate=${encodeURIComponent(
                      `${formatRupees(calculation.minEstimate)} - ${formatRupees(calculation.maxEstimate)}`
                    )}`}
                    className="flex-1 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-8 text-sm font-bold text-white hover:bg-slate-800 transition-all text-center shadow-md"
                  >
                    Request a Detailed Quote <ArrowRight size={16} />
                  </Link>
                  <a
                    href={`https://wa.me/917794971935?text=${whatsappText}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-emerald-600 text-white px-8 text-sm font-bold hover:bg-emerald-700 transition-all text-center shadow-md"
                  >
                    <MessageCircle size={18} /> WhatsApp Enquiry
                  </a>
                </div>

                <div className="text-center">
                  <button
                    onClick={resetEstimator}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer py-2"
                  >
                    <RotateCcw size={14} /> Start Again with New Selection
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
