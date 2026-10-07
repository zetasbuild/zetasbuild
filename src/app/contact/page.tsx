"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { ContactFormAndInfoSection } from "@/components/contact/ContactFormAndInfoSection";
import { ContactGlobalTeamSection } from "@/components/contact/ContactGlobalTeamSection";
import { ContactCtaBannerSection } from "@/components/contact/ContactCtaBannerSection";
import { ProjectInquiryModal } from "@/components/home/ProjectInquiryModal";

export default function ContactPage() {
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
        {/* 1. Contact Hero with Breadcrumb & Floating Services Plaque */}
        <ContactHeroSection />

        {/* 2. Send Us a Message Form & Contact Channels */}
        <ContactFormAndInfoSection />

        {/* 3. A Global Team Building Your Vision (Map & Remote Work Pillars) */}
        <ContactGlobalTeamSection />

        {/* 4. Pre-Footer Mountain Sunset Banner */}
        <ContactCtaBannerSection onOpenInquiry={() => handleOpenInquiry()} />
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
