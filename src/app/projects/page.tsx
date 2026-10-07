"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectsHeroSection } from "@/components/projects/ProjectsHeroSection";
import { ProjectsFeaturedSection } from "@/components/projects/ProjectsFeaturedSection";
import { ProjectsGridSection } from "@/components/projects/ProjectsGridSection";
import { ProjectsCtaBannerSection } from "@/components/projects/ProjectsCtaBannerSection";
import { ProjectDetailModal } from "@/components/projects/ProjectDetailModal";
import { ProjectInquiryModal } from "@/components/home/ProjectInquiryModal";

export default function ProjectsPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Website Development");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

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
        {/* 1. Projects Hero with Stats Badges & Mockup */}
        <ProjectsHeroSection />

        {/* 2. Featured Project Showcase Slider (Stop Travelers Sri Lanka) */}
        <ProjectsFeaturedSection onOpenProject={(proj) => setSelectedProject(proj)} />

        {/* 3. Filterable 6 Projects Showcase Grid */}
        <ProjectsGridSection onOpenProject={(proj) => setSelectedProject(proj)} />

        {/* 4. Panoramic Mountain Pre-Footer Banner */}
        <ProjectsCtaBannerSection onOpenInquiry={() => handleOpenInquiry()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartSimilar={(title) => {
          setSelectedProject(null);
          handleOpenInquiry(`Similar to ${title}`);
        }}
      />

      {/* Interactive Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
