import { useState } from "react";
import Navbar from "@/components/layout/Navbar";

// Business Components
import HeroSection from "@/components/sections/HeroSection";
import IndustrySelector from "@/components/sections/IndustrySelector";
import SolutionEcosystem from "@/components/sections/SolutionEcosystem";
import ProductShowcase from "@/components/sections/ProductShowcase";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

// Engineering Components
import EngineeringHero from "@/components/sections/EngineeringHero";
import EngineeringSkills from "@/components/sections/EngineeringSkills";
import EngineeringProjects from "@/components/sections/EngineeringProjects";
import EngineeringContact from "@/components/sections/EngineeringContact";

export type Industry = "restaurant" | "ecommerce" | "business" | null;
export type Persona = "business" | "engineering";

export default function Home() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>("restaurant");
  const [persona, setPersona] = useState<Persona>("business");

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-1000 ${persona === 'engineering' ? 'bg-[#030712] font-mono' : 'bg-[#030712]'}`}>
      
      <Navbar persona={persona} setPersona={setPersona} />
      
      {persona === "business" ? (
        // ==========================================
        // PERSONA: BUSINESS OWNER
        // ==========================================
        <main>
          <HeroSection 
            selectedIndustry={selectedIndustry} 
            onIndustrySelect={setSelectedIndustry}
            setPersona={setPersona}
          />
          
          <IndustrySelector 
            selectedIndustry={selectedIndustry} 
            onSelect={(ind: Industry) => {
              setSelectedIndustry(ind);
              window.scrollBy({ top: 400, behavior: "smooth" });
            }} 
          />
          
          <SolutionEcosystem selectedIndustry={selectedIndustry} />
          <ProductShowcase />
          <WhyUsSection />
          <ProcessSection />
          <PricingSection />
          <FAQSection />
          <FinalCTASection />
        </main>
      ) : (
        // ==========================================
        // PERSONA: ENGINEERING / RECRUITER
        // ==========================================
        <main>
          <EngineeringHero />
          <EngineeringSkills />
          <EngineeringProjects />
          <EngineeringContact />
        </main>
      )}

    </div>
  );
}
