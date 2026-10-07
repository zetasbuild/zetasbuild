"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import { AboutValuesSection } from "@/components/about/AboutValuesSection";
import { AboutTeamSection } from "@/components/about/AboutTeamSection";
import { AboutImpactSection } from "@/components/about/AboutImpactSection";
import { AboutProcessSection } from "@/components/about/AboutProcessSection";
import { AboutCtaBannerSection } from "@/components/about/AboutCtaBannerSection";
import { ProjectInquiryModal } from "@/components/home/ProjectInquiryModal";

export default function AboutPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Website Development");

  const handleOpenInquiry = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-indigo-600 selection:text-white">
      {/* Sticky frosted navbar */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      <main className="flex-1">
        {/* 1. Hero with Breadcrumb & Office Visual */}
        <AboutHeroSection onOpenInquiry={() => handleOpenInquiry()} />

        {/* 2. Our Story with Milestones & Team Photo */}
        <AboutStorySection />

        {/* 3. Our Values (Innovation, Quality, Client Success, Integrity) */}
        <AboutValuesSection />

        {/* 4. Our Team (4 Team Member Cards) */}
        <AboutTeamSection onOpenInquiry={() => handleOpenInquiry()} />

        {/* 5. Our Impact (Dark wave banner with 4 metrics) */}
        <AboutImpactSection />

        {/* 6. How We Work (6-Step Connected Flow) */}
        <AboutProcessSection />

        {/* 7. Pre-Footer Banner (Ready to Build Something Amazing?) */}
        <AboutCtaBannerSection onOpenInquiry={() => handleOpenInquiry()} />
      </main>

      {/* Footer */}
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
