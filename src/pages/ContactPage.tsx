import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { 
  ArrowRight, CheckCircle2, MessageCircle, Mail, Phone, 
  Send, AlertCircle, Building, Check, ChevronRight 
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import { SERVICES_DATA } from "@/data/servicesData";

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get("service") || "";
  const estimateParam = searchParams.get("estimate") || "";
  const tierParam = searchParams.get("tier") || "";

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: serviceParam,
    budget: estimateParam ? `Estimate: ${estimateParam}` : (tierParam ? `Tier: ${tierParam}` : ""),
    features: "",
    description: "",
    contactMethod: "whatsapp"
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  useEffect(() => {
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
    if (estimateParam) {
      setFormData(prev => ({ ...prev, budget: `Estimate: ${estimateParam}` }));
    }
  }, [serviceParam, estimateParam]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Your name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone or WhatsApp number is required.";
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      errs.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!formData.service) errs.service = "Please select a service.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Prepare structured message
    const inquirySummary = 
      `*New Project Inquiry for KRUNNEX*\n` +
      `• *Client Name:* ${formData.name}\n` +
      `• *Business:* ${formData.businessName || "Not specified"}\n` +
      `• *Email:* ${formData.email}\n` +
      `• *Phone / WhatsApp:* ${formData.phone}\n` +
      `• *Selected Service:* ${formData.service}\n` +
      `• *Approximate Budget:* ${formData.budget || "To be discussed"}\n` +
      `• *Key Features Needed:* ${formData.features || "General implementation"}\n` +
      `• *Project Scope / Description:* ${formData.description || "Discuss on call"}\n` +
      `• *Preferred Contact Method:* ${formData.contactMethod.toUpperCase()}`;

    // Open WhatsApp directly with full structured payload
    const waUrl = `https://wa.me/917794971935?text=${encodeURIComponent(inquirySummary)}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      window.open(waUrl, "_blank");
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-indigo-500/20 selection:text-indigo-900">
      <Navbar />

      <main className="pt-32 pb-24 sm:pt-40 md:pt-44">
        
        {/* Breadcrumb */}
        <div className="container mx-auto px-5 md:px-10 max-w-4xl mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-900 font-bold">Start a Project / Enquiry</span>
          </nav>
        </div>

        <div className="container mx-auto px-5 md:px-10 max-w-4xl">
          
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 inline-block mb-4">
              Project Initiation
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
              Let's Build the Right Solution for Your Business.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
              Tell us what you'd like to build. We'll review your requirements and provide a transparent, fixed-price proposal.
            </p>
          </div>

          {/* Submission Success State */}
          {submittedData ? (
            <div className="rounded-3xl border border-emerald-200 bg-white p-8 sm:p-12 shadow-lg text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={36} />
              </div>
              <h2 className="text-3xl font-black text-slate-950 mb-3">Enquiry Ready to Connect!</h2>
              <p className="text-base text-slate-600 max-w-md mx-auto mb-8 font-normal leading-relaxed">
                Thank you, <span className="font-bold text-slate-900">{submittedData.name}</span>. Your project summary has been prepared. We've opened WhatsApp to connect you directly with Krusheel.
              </p>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto mb-8 text-xs space-y-2">
                <p><span className="font-bold text-slate-700">Selected Service:</span> {submittedData.service}</p>
                <p><span className="font-bold text-slate-700">Contact Number:</span> {submittedData.phone}</p>
                <p><span className="font-bold text-slate-700">Budget:</span> {submittedData.budget || "To be confirmed"}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
                <a
                  href={`https://wa.me/917794971935?text=${encodeURIComponent(
                    `Hi Krunnex, continuing our project enquiry for ${submittedData.service}. My name is ${submittedData.name}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-8 text-sm font-bold shadow-md hover:opacity-95 transition-all"
                >
                  <MessageCircle size={18} /> Re-Open WhatsApp Chat
                </a>
                <a
                  href={`mailto:krusheelkumar7@gmail.com?subject=Project%20Inquiry%20-%20${encodeURIComponent(
                    submittedData.service
                  )}&body=Client:%20${encodeURIComponent(submittedData.name)}%0D%0APhone:%20${encodeURIComponent(
                    submittedData.phone
                  )}`}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 text-white px-8 text-sm font-bold shadow-md hover:bg-slate-800 transition-all"
                >
                  <Mail size={18} /> Send via Direct Email
                </a>
              </div>
            </div>
          ) : (
            /* Main Form */
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                
                {/* Row 1: Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-medium bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                        errors.name ? "border-rose-400 bg-rose-50/30" : "border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10"
                      }`}
                    />
                    {errors.name && <p className="text-xs text-rose-500 font-semibold mt-1.5">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Business Name <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Sharma Hospitality / D2C Brand"
                      className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 text-sm font-medium bg-slate-50/50 focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/10 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@example.com"
                      className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-medium bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                        errors.email ? "border-rose-400 bg-rose-50/30" : "border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10"
                      }`}
                    />
                    {errors.email && <p className="text-xs text-rose-500 font-semibold mt-1.5">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Phone / WhatsApp Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-medium bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                        errors.phone ? "border-rose-400 bg-rose-50/30" : "border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10"
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-rose-500 font-semibold mt-1.5">{errors.phone}</p>}
                  </div>
                </div>

                {/* Row 3: Service Selection & Approximate Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Service Required <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-medium bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                        errors.service ? "border-rose-400" : "border-slate-200 focus:border-indigo-600"
                      }`}
                    >
                      <option value="">Select a service category...</option>
                      {SERVICES_DATA.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.name} (from {s.startingPrice})
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="text-xs text-rose-500 font-semibold mt-1.5">{errors.service}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Approximate Budget <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder="e.g. ₹25,000 - ₹50,000"
                      className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 text-sm font-medium bg-slate-50/50 focus:bg-white focus:border-indigo-600 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 4: Key Features Needed */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Key Features Needed <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.features}
                    onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                    placeholder="e.g. QR ordering, Razorpay UPI, WhatsApp receipts, Admin dashboard"
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 text-sm font-medium bg-slate-50/50 focus:bg-white focus:border-indigo-600 focus:outline-none transition-all"
                  />
                </div>

                {/* Row 5: Project Description */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Project Description & Goals
                  </label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Tell us about your business, current bottlenecks, and what you want to achieve..."
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 text-sm font-medium bg-slate-50/50 focus:bg-white focus:border-indigo-600 focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Row 6: Preferred Contact Method */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Preferred Communication Channel
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "whatsapp", label: "WhatsApp Chat", icon: MessageCircle },
                      { id: "phone", label: "Phone Call", icon: Phone },
                      { id: "email", label: "Email", icon: Mail },
                    ].map((m) => {
                      const isSelected = formData.contactMethod === m.id;
                      const Icon = m.icon;
                      return (
                        <button
                          type="button"
                          key={m.id}
                          onClick={() => setFormData({ ...formData, contactMethod: m.id })}
                          className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                            isSelected
                              ? "bg-slate-950 text-white border-slate-950 shadow-sm"
                              : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <Icon size={18} />
                          <span className="text-xs font-bold">{m.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-400">
                    Direct communication with Krusheel · 100% confidential
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex h-15 items-center justify-center gap-2.5 rounded-full bg-slate-950 px-10 text-base font-bold text-white shadow-lg hover:bg-slate-800 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Preparing Submission...</span>
                    ) : (
                      <>
                        <span>Submit Project Enquiry</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          )}

          {/* Direct Contact Info Strip */}
          <div className="mt-12 text-center text-xs text-slate-500 font-medium">
            Prefer direct contact? Call or WhatsApp us directly at{" "}
            <a href="https://wa.me/917794971935" target="_blank" rel="noreferrer" className="text-indigo-600 font-bold hover:underline">
              +91 77949 71935
            </a>{" "}
            or email{" "}
            <a href="mailto:krusheelkumar7@gmail.com" className="text-indigo-600 font-bold hover:underline">
              krusheelkumar7@gmail.com
            </a>.
          </div>

        </div>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
