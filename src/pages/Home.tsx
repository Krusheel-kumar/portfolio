import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";

// Sections
import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import IndustrySelector from "@/components/sections/IndustrySelector";
import SolutionEcosystem from "@/components/sections/SolutionEcosystem";
import ProductShowcase from "@/components/sections/ProductShowcase";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export type Industry = "restaurant" | "ecommerce" | "business" | null;

export default function Home() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>("restaurant");

  return (
    <div className="flex flex-col min-h-screen bg-[#030712]">
      <Navbar />

      <main>
        <HeroSection />
        <TrustStrip />

        {/* Industry Selector + Ecosystem */}
        <div id="solutions">
          <IndustrySelector
            selectedIndustry={selectedIndustry}
            onSelect={(ind: Industry) => {
              setSelectedIndustry(ind);
              setTimeout(() => {
                const element = document.getElementById("ecosystem");
                if (element) {
                   const y = element.getBoundingClientRect().top + window.scrollY - 90; // offset for navbar
                   window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }, 150);
            }}
          />
          <div id="ecosystem">
            <SolutionEcosystem selectedIndustry={selectedIndustry} />
          </div>
        </div>

        <div id="work">
          <ProductShowcase />
        </div>

        <WhyUsSection />

        <div id="process">
          <ProcessSection />
        </div>

        <div id="pricing">
          <PricingSection />
        </div>

        <FAQSection />
        <FinalCTASection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
