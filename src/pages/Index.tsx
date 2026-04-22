import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InspirationSection from "@/components/InspirationSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import MembershipsSection from "@/components/MembershipsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    // Wait a tick for sections (and images) to mount
    const timeout = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
    return () => window.clearTimeout(timeout);
  }, [hash]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <InspirationSection />
        <div className="section-divider mx-[1cm]" />
        <HowItWorksSection />
        <div className="section-divider mx-[1cm]" />
        <BenefitsSection />
        <MembershipsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
