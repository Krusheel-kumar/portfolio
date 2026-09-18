import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, ArrowLeft, Check, CheckCircle2, Building2, Store, 
  ShoppingCart, HeartPulse, GraduationCap, Building, Rocket, Sparkles, 
  MessageSquare, Calendar, Home
} from "lucide-react";

// --- DATA ---
const BUSINESS_TYPES = [
  { id: "restaurant", label: "Restaurant", icon: Store },
  { id: "ecommerce", label: "E-commerce", icon: ShoppingCart },
  { id: "retail", label: "Retail", icon: Building2 },
  { id: "healthcare", label: "Healthcare", icon: HeartPulse },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "realestate", label: "Real Estate", icon: Building },
  { id: "startup", label: "Startup", icon: Rocket },
  { id: "other", label: "Other", icon: Sparkles },
];

const SERVICES = [
  "Premium Website", "E-commerce Website", "Admin Dashboard", 
  "AI Chatbot", "WhatsApp Automation", "Payment Integration", 
  "Loyalty System", "SEO", "Mobile App", "Custom Software"
];

const BUDGETS = [
  "₹20k–50k", "₹50k–1L", "₹1L–3L", "₹3L+", "Let's Discuss"
];

const TIMELINES = [
  "ASAP", "Within 2 Weeks", "Within 1 Month", "Flexible", "Just Exploring"
];

// --- VARIANTS ---
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  })
};

export default function StartProject() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    businessType: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    contact: {
      name: "",
      businessName: "",
      email: "",
      phone: "",
      location: "",
      description: ""
    }
  });

  const nextStep = () => {
    if (step < 6) {
      setDirection(1);
      setStep(s => s + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(s => s - 1);
    }
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      contact: { ...prev.contact, [name]: value }
    }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formData.businessType !== "";
      case 2: return formData.services.length > 0;
      case 3: return formData.budget !== "";
      case 4: return formData.timeline !== "";
      case 5: 
        return formData.contact.name.trim() !== "" && 
               formData.contact.email.trim() !== "" && 
               formData.contact.phone.trim() !== "";
      default: return true;
    }
  };

  // --- RENDERERS ---

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">What is your business type?</h2>
              <p className="text-muted-foreground">Select the industry that best describes your business.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {BUSINESS_TYPES.map((type) => {
                const isSelected = formData.businessType === type.id;
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setFormData({ ...formData, businessType: type.id })}
                    className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 ${
                      isSelected 
                        ? 'border-primary bg-primary/10 scale-[1.02]' 
                        : 'border-border/50 bg-card hover:border-primary/50 hover:bg-secondary'
                    }`}
                  >
                    <Icon className={`w-8 h-8 mb-4 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className={`font-semibold ${isSelected ? 'text-primary' : 'text-foreground'}`}>{type.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">What services do you need?</h2>
              <p className="text-muted-foreground">Select all the digital solutions you're looking for.</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
              {SERVICES.map((service) => {
                const isSelected = formData.services.includes(service);
                return (
                  <button
                    key={service}
                    onClick={() => toggleService(service)}
                    className={`px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-300 flex items-center gap-2 ${
                      isSelected 
                        ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
                        : 'border-border/50 bg-card hover:border-primary/50 text-foreground'
                    }`}
                  >
                    {isSelected && <Check size={16} />}
                    {service}
                  </button>
                )
              })}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">What is your estimated budget?</h2>
              <p className="text-muted-foreground">This helps us propose the best solutions within your range.</p>
            </div>
            <div className="flex flex-col gap-4 max-w-xl mx-auto">
              {BUDGETS.map((budget) => {
                const isSelected = formData.budget === budget;
                return (
                  <button
                    key={budget}
                    onClick={() => setFormData({ ...formData, budget })}
                    className={`px-6 py-5 rounded-2xl text-lg font-medium border-2 transition-all duration-300 flex items-center justify-between ${
                      isSelected 
                        ? 'border-primary bg-primary/10 text-primary scale-[1.02]' 
                        : 'border-border/50 bg-card hover:border-primary/50 text-foreground'
                    }`}
                  >
                    {budget}
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-primary bg-primary' : 'border-muted-foreground'}`}>
                      {isSelected && <Check size={12} className="text-primary-foreground" />}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">When do you want to launch?</h2>
              <p className="text-muted-foreground">Select your ideal timeline for this project.</p>
            </div>
            <div className="flex flex-col gap-4 max-w-xl mx-auto">
              {TIMELINES.map((time) => {
                const isSelected = formData.timeline === time;
                return (
                  <button
                    key={time}
                    onClick={() => setFormData({ ...formData, timeline: time })}
                    className={`px-6 py-5 rounded-2xl text-lg font-medium border-2 transition-all duration-300 flex items-center justify-between ${
                      isSelected 
                        ? 'border-primary bg-primary/10 text-primary scale-[1.02]' 
                        : 'border-border/50 bg-card hover:border-primary/50 text-foreground'
                    }`}
                  >
                    {time}
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-primary bg-primary' : 'border-muted-foreground'}`}>
                      {isSelected && <Check size={12} className="text-primary-foreground" />}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Let's get in touch</h2>
              <p className="text-muted-foreground">Where should we send your custom proposal?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Full Name *</label>
                <input required type="text" name="name" value={formData.contact.name} onChange={handleContactChange} className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Business Name</label>
                <input type="text" name="businessName" value={formData.contact.businessName} onChange={handleContactChange} className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Acme Corp" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Email Address *</label>
                <input required type="email" name="email" value={formData.contact.email} onChange={handleContactChange} className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Phone / WhatsApp *</label>
                <input required type="tel" name="phone" value={formData.contact.phone} onChange={handleContactChange} className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="+91 98765 43210" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-foreground">Business Location</label>
                <input type="text" name="location" value={formData.contact.location} onChange={handleContactChange} className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="City, Country" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-foreground">Project Description (Optional)</label>
                <textarea name="description" value={formData.contact.description} onChange={handleContactChange} rows={4} className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder="Tell us briefly about what you want to build..."></textarea>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Review & Submit</h2>
              <p className="text-muted-foreground">Please confirm your project details before sending.</p>
            </div>
            
            <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
              <div className="p-6 md:p-8 space-y-6">
                
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Business Type</h4>
                    <p className="font-semibold text-foreground capitalize">{BUSINESS_TYPES.find(t => t.id === formData.businessType)?.label || 'Not specified'}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Budget</h4>
                    <p className="font-semibold text-foreground">{formData.budget || 'Not specified'}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Timeline</h4>
                    <p className="font-semibold text-foreground">{formData.timeline || 'Not specified'}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Contact</h4>
                    <p className="font-semibold text-foreground">{formData.contact.name}</p>
                    <p className="text-sm text-muted-foreground">{formData.contact.email}</p>
                  </div>
                </div>

                <hr className="border-border" />

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Services Required</h4>
                  <div className="flex flex-wrap gap-2">
                    {formData.services.map(s => (
                      <span key={s} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium border border-border">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
              <div className="bg-muted/30 p-6 border-t border-border flex justify-end">
                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Submit Request <ArrowRight size={18} />
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full bg-card border border-border rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Confetti / Glow effect background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-green-500/20 to-transparent blur-3xl -z-10" />
          
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-extrabold mb-4 text-foreground">Project Received!</h1>
          <p className="text-muted-foreground mb-10 text-lg">
            Thank you, {formData.contact.name.split(' ')[0]}! We've received your request and will get back to you within 24 hours with a custom proposal.
          </p>
          
          <div className="flex flex-col gap-4">
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-transform shadow-lg shadow-[#25D366]/20">
              <MessageSquare size={20} /> Chat on WhatsApp
            </a>
            <button className="w-full flex items-center justify-center gap-2 bg-foreground text-background px-6 py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-transform shadow-lg">
              <Calendar size={20} /> Schedule Free Consultation
            </button>
            <Link to="/" className="w-full flex items-center justify-center gap-2 mt-4 text-muted-foreground hover:text-foreground font-semibold transition-colors">
              <Home size={18} /> Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  const progress = (step / 6) * 100;

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      
      {/* Simple Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border py-4">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img 
              src="/images/krunnex_logo.png" 
              alt="Krunnex Logo" 
              className="h-14 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>
          <Link to="/" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-4 py-2 hover:bg-secondary rounded-full">
            Cancel
          </Link>
        </div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[3px] bg-secondary w-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <div className="flex-1 container mx-auto px-4 py-8 flex flex-col justify-center max-w-5xl">
          
          <div className="mb-8 flex justify-center">
            <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase">
              Step {step} of 6
            </span>
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="w-full"
            >
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Navigation */}
        <footer className="border-t border-border bg-background/80 backdrop-blur-xl p-4 md:p-6 sticky bottom-0 z-40">
          <div className="container mx-auto max-w-5xl flex items-center justify-between">
            <button 
              onClick={prevStep}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-colors ${
                step === 1 ? 'opacity-0 pointer-events-none' : 'text-foreground hover:bg-secondary'
              }`}
            >
              <ArrowLeft size={18} /> Back
            </button>
            
            {step < 6 && (
              <button 
                onClick={nextStep}
                disabled={!canProceed()}
                className="flex items-center gap-2 bg-foreground text-background px-8 py-3 rounded-full font-bold hover:scale-105 active:scale-95 transition-all disabled:opacity-30 disabled:pointer-events-none shadow-lg"
              >
                Next Step <ArrowRight size={18} />
              </button>
            )}
          </div>
        </footer>
      </main>

    </div>
  );
}
