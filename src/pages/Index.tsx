import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ClassesSection from "@/components/ClassesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [lang, setLang] = useState<"en" | "zh">("en");

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} onToggleLang={() => setLang(lang === "en" ? "zh" : "en")} />
      <HeroSection lang={lang} />
      <AboutSection lang={lang} />
      <ClassesSection lang={lang} />
      <PricingSection lang={lang} />
      <TestimonialsSection lang={lang} />
      <ContactSection lang={lang} />
      <CtaSection lang={lang} />
      <Footer lang={lang} />
    </div>
  );
};

export default Index;
