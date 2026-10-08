"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Plane,
  Heart,
  X,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

export function FeaturedProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    category: string;
    desc: string;
    image: string;
    tags: string[];
    details: string;
    stats: { label: string; val: string }[];
  }>(null);

  const mainProject = {
    title: "Timeless Closet",
    category: "E-COMMERCE PLATFORM",
    desc: "A modern e-commerce platform with a clean and elegant design, offering a seamless shopping experience with secure payments and fast delivery.",
    image: "/projects/timeless_closet_full.png",
    tags: ["Next.js", "React", "Tailwind CSS", "E-commerce"],
    details:
      "A premium online fashion storefront delivering an intuitive wardrobe browsing experience, ultra-fast checkout flows, and automated inventory sync across multiple fulfillment locations.",
    stats: [
      { label: "Conversion Lift", val: "+48%" },
      { label: "Lighthouse Speed", val: "99/100" },
      { label: "Mobile Traffic", val: "72%" },
    ],
  };

  const sideProjects = [
    {
      title: "SerendibTrailblazers",
      category: "TRAVEL & TOURISM",
      categoryIcon: Plane,
      categoryColor: "text-blue-600 bg-blue-50/90 border-blue-200/60",
      arrowColor: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      desc: "A modern tourism website with stunning visuals, easy navigation and a seamless booking experience for travelers.",
      image: "/projects/serendib_extracted.png",
      tags: ["Next.js", "Tailwind CSS", "SEO"],
      details:
        "Comprehensive destination portal highlighting Sri Lanka's iconic landscapes with interactive itinerary builders, live hotel bookings, and dynamic excursion scheduling.",
      stats: [
        { label: "Booking Inquiries", val: "+65%" },
        { label: "Avg Session Duration", val: "4.2m" },
      ],
    },
    {
      title: "FitPulse",
      category: "HEALTH & FITNESS",
      categoryIcon: Heart,
      categoryColor: "text-purple-600 bg-purple-50/90 border-purple-200/60",
      arrowColor: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
      desc: "A fitness app with workout tracking, wearable integration, and real-time health monitoring.",
      image: "/projects/fitpulse_extracted.png",
      tags: ["React Native", "Firebase", "HealthKit"],
      details:
        "Cross-platform fitness application featuring biometric workout tracking, Apple Watch and wearable sync, daily progress rings, and real-time community challenges.",
      stats: [
        { label: "Active Athletes", val: "30K+" },
        { label: "App Store Rating", val: "4.9 ★" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-white overflow-hidden">
      {/* Soft background ambient light */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] rounded-full bg-blue-100/25 blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] rounded-full bg-purple-100/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-left"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50/90 border border-blue-200/80 shadow-2xs mb-3.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>FEATURED WORK</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[50px] font-black text-[#0B132B] tracking-tight leading-[1.14]">
              Our Featured{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0062FF] via-[#7928CA] to-[#9333EA]">
                Projects
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-3.5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Discover some of the digital solutions we&apos;ve built for amazing
              clients.
            </p>
          </motion.div>

          {/* Header Right: View All Projects Link */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0062FF] hover:text-[#7928CA] group transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Project Grid Showcase: Left Big Card + Right Two Horizontal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 items-stretch">
          {/* Main Left Card: Timeless Closet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedProject(mainProject)}
            className="lg:col-span-7 rounded-[28px] border border-slate-100 bg-white overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(180,200,240,0.35)] hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer p-4 sm:p-5"
          >
            {/* Mockup photo container */}
            <div className="relative aspect-[525/227] w-full rounded-[22px] overflow-hidden bg-slate-900">
              <Image
                src={mainProject.image}
                alt={mainProject.title}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              />
            </div>

            {/* Bottom Content Area */}
            <div className="pt-6 sm:pt-7 px-2 sm:px-3 pb-2 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl sm:text-[26px] font-black text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight">
                    {mainProject.title}
                  </h3>
                  <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>

                <p className="mt-2.5 text-sm sm:text-[15px] text-slate-500 leading-relaxed font-normal">
                  {mainProject.desc}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {mainProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1 rounded-full text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: SerendibTrailblazers + FitPulse */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-7 justify-between">
            {sideProjects.map((proj, idx) => {
              const CategoryIcon = proj.categoryIcon;
              return (
                <motion.div
                  key={proj.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  onClick={() => setSelectedProject(proj)}
                  className="rounded-[28px] border border-slate-100 bg-white p-5 sm:p-5.5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(180,200,240,0.35)] hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-center gap-5 sm:gap-5.5 group cursor-pointer flex-1"
                >
                  {/* Project Thumbnail Image */}
                  <div className="relative w-full sm:w-[155px] h-[160px] sm:h-[155px] rounded-[20px] overflow-hidden shrink-0 border border-slate-100 bg-slate-50">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 flex flex-col justify-between w-full h-full py-0.5">
                    <div>
                      {/* Top Row: Eyebrow Category + Circular Arrow */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div
                          className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase border shadow-2xs ${proj.categoryColor}`}
                        >
                          <CategoryIcon className="w-3 h-3" />
                          <span>{proj.category}</span>
                        </div>

                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${proj.arrowColor}`}
                        >
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug tracking-tight">
                        {proj.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-1.5 text-xs text-slate-500 leading-relaxed font-normal line-clamp-3">
                        {proj.desc}
                      </p>
                    </div>

                    {/* Tech Tags */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 mb-6">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-200/60 mb-2">
                {selectedProject.category}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {selectedProject.title}
              </h3>

              <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                {selectedProject.details}
              </p>

              {/* Highlights & Metrics */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {selectedProject.stats.map((st) => (
                  <div
                    key={st.label}
                    className="p-3 rounded-2xl bg-slate-50 border border-slate-200/60"
                  >
                    <div className="text-xs text-slate-500">{st.label}</div>
                    <div className="text-lg font-bold text-indigo-600 mt-0.5">
                      {st.val}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Ready to build a similar project?
                </span>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
