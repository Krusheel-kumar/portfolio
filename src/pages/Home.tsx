import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";

// Homepage Sections
import HeroSection from "@/components/sections/HeroSection";
import ServicesMarquee from "@/components/sections/ServicesMarquee";
import ServiceDiscoverySection from "@/components/sections/ServiceDiscoverySection";
import TrustStrip from "@/components/sections/TrustStrip";
import HomePortfolioSection from "@/components/sections/HomePortfolioSection";
import HomeEstimatorTeaser from "@/components/sections/HomeEstimatorTeaser";
import HomeProcessSection from "@/components/sections/HomeProcessSection";
import HomePricingSection from "@/components/sections/HomePricingSection";
import FAQSection from "@/components/sections/FAQSection";
import AboutSection from "@/components/sections/AboutSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export type Industry = "restaurant" | "ecommerce" | "business" | null;

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-indigo-500/20 selection:text-indigo-900">
      <Navbar />

      <main>
        {/* Section 2: Hero */}
        <HeroSection />

        {/* Auto-Scrolling Services Marquee Ticker */}
        <ServicesMarquee />

        {/* Section 3: Main Service Discovery — Immediately After Hero */}
        <ServiceDiscoverySection />

        {/* Trust Indicator Strip */}
        <TrustStrip />

        {/* Section 4: Portfolio Section */}
        <HomePortfolioSection />

        {/* Section 5: Interactive Project Cost Estimator Teaser */}
        <HomeEstimatorTeaser />

        {/* Section 6: How We Work — 4-Step Process */}
        <HomeProcessSection />

        {/* Section 7: Pricing Section */}
        <HomePricingSection />

        {/* Section 8: FAQ & Founder Note */}
        <FAQSection />
        <AboutSection />

        {/* Final CTA Section */}
        <FinalCTASection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
