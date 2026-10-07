"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { ServicesOfferSection } from "@/components/services/ServicesOfferSection";
import { ServicesWhyAndApproachSection } from "@/components/services/ServicesWhyAndApproachSection";
import { ServicesTechSection } from "@/components/services/ServicesTechSection";
import { ServicesCtaBannerSection } from "@/components/services/ServicesCtaBannerSection";
import { ProjectInquiryModal } from "@/components/home/ProjectInquiryModal";

export default function ServicesPage() {
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
      {/* Sticky navigation */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      <main className="flex-1">
        {/* 1. Services Hero with Curved Ambient Light & 3D Showcase */}
        <ServicesHeroSection onOpenInquiry={() => handleOpenInquiry()} />

        {/* 2. What We Offer (Filterable 6 Rich Service Cards with 3D thumbnails) */}
        <ServicesOfferSection onSelectService={(svc) => handleOpenInquiry(svc)} />

        {/* 3. Why Choose Us (Dark Navy Card) + Code Workspace + Our Approach (4 Steps) */}
        <ServicesWhyAndApproachSection onOpenInquiry={() => handleOpenInquiry()} />

        {/* 4. Our Technologies & 3D Layered Architecture */}
        <ServicesTechSection />

        {/* 5. Pre-Footer Banner (Have a project in mind?) */}
        <ServicesCtaBannerSection onOpenInquiry={() => handleOpenInquiry()} />
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
