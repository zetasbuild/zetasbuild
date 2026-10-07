"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WhoWeAreSection } from "@/components/home/WhoWeAreSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { TechnologiesSection } from "@/components/home/TechnologiesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CtaBannerSection } from "@/components/home/CtaBannerSection";
import { ProjectInquiryModal } from "@/components/home/ProjectInquiryModal";

export default function HomePage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Website Development");

  const handleOpenInquiry = (serviceName?: string) => {
    if (serviceName && serviceName !== "All Services") {
      setSelectedService(serviceName);
    }
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-indigo-600 selection:text-white">
      {/* Top sticky frosted navigation */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      <main className="flex-1">
        {/* 1. Hero Section with 3D isometric mockup and live badges */}
        <HeroSection onOpenInquiry={() => handleOpenInquiry()} />

        {/* 2. Key Metrics & Stats Strip */}
        <StatsSection />

        {/* 3. Who We Are (Technology built around your goals) */}
        <WhoWeAreSection onOpenInquiry={() => handleOpenInquiry()} />

        {/* 4. What We Build (6 Service Cards) */}
        <ServicesSection onSelectService={(svc) => handleOpenInquiry(svc)} />

        {/* 5. Our Solutions (Powering Businesses with Smart Solutions) */}
        <SolutionsSection onOpenInquiry={() => handleOpenInquiry()} />

        {/* 6. Featured Work (Trendy Store, Lanka Tours, FitPulse) */}
        <FeaturedProjectsSection />

        {/* 7. Technologies (Built With Modern Technology) */}
        <TechnologiesSection />

        {/* 8. Why Choose Us (Why Businesses Choose ZetasBuild) */}
        <WhyChooseUsSection onOpenInquiry={() => handleOpenInquiry()} />

        {/* 9. Our Process (From Idea to Impact timeline) */}
        <ProcessSection />

        {/* 10. CTA Banner (Have an idea? Let's build it.) */}
        <CtaBannerSection onOpenInquiry={() => handleOpenInquiry()} />
      </main>

      {/* 11. Dark Navy Theme Footer */}
      <Footer />

      {/* Interactive Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
