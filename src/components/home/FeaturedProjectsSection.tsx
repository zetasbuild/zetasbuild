"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, X, CheckCircle, Sparkles } from "lucide-react";

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
    title: "Trendy Store",
    category: "E-COMMERCE PLATFORM",
    desc: "Modern e-commerce platform with seamless shopping experience, lightning-fast cart performance, and secure multi-gateway payments.",
    image: "/projects/trendy-store.jpg",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS"],
    details:
      "A scalable high-concurrency online fashion boutique delivering 45% higher conversion rates with sub-second page loads and automated inventory syncing.",
    stats: [
      { label: "Conversion Lift", val: "+45%" },
      { label: "Page Speed", val: "99/100" },
      { label: "Daily Transactions", val: "10K+" },
    ],
  };

  const sideProjects = [
    {
      title: "Lanka Tours",
      category: "TRAVEL & BOOKING",
      desc: "Custom booking and interactive itinerary system with automated tour quotes and multi-destination planner.",
      image: "/projects/lanka-tours.jpg",
      tags: ["React", "Node.js", "MongoDB", "Tailwind"],
      details:
        "Comprehensive travel booking engine for Sri Lanka's leading inbound tour operator, automating quote generation from 48 hours to under 30 seconds.",
      stats: [
        { label: "Quote Speed", val: "<30s" },
        { label: "Tour Bookings", val: "5,000+" },
      ],
    },
    {
      title: "FitPulse",
      category: "HEALTH & FITNESS",
      desc: "Fitness app with workout tracking, wearable sensor integration, and real-time community engagement.",
      image: "/projects/fitpulse.jpg",
      tags: ["React Native", "Firebase", "HealthKit"],
      details:
        "Cross-platform mobile application combining biomechanical workout logging with active community leaderboards and smart push notifications.",
      stats: [
        { label: "Active Users", val: "25K+" },
        { label: "App Store Rating", val: "4.9 ★" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2.5 block">
              FEATURED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Our Featured Projects
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
              Discover some of the digital solutions we&apos;ve built for amazing
              clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setSelectedProject(mainProject)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 group transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* Project Grid Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Left Card: Trendy Store */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedProject(mainProject)}
            className="lg:col-span-7 rounded-3xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
          >
            <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
              <Image
                src={mainProject.image}
                alt={mainProject.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-indigo-600 uppercase border border-slate-200/60">
                {mainProject.category}
              </div>
            </div>

            <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {mainProject.title}
                  </h3>
                  <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>

                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {mainProject.desc}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-2">
                {mainProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            {sideProjects.map((proj, idx) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onClick={() => setSelectedProject(proj)}
                className="rounded-3xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row group cursor-pointer"
              >
                <div className="relative aspect-video sm:aspect-square sm:w-44 shrink-0 bg-slate-900 overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 sm:hidden bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-indigo-600 uppercase">
                    {proj.category}
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider text-indigo-600 mb-1">
                      {proj.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                      <span>{proj.title}</span>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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

              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                {selectedProject.details}
              </p>

              {/* Stats highlights */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {selectedProject.stats.map((st) => (
                  <div
                    key={st.label}
                    className="p-3 rounded-2xl bg-slate-50 border border-slate-200/60"
                  >
                    <div className="text-xl font-extrabold text-indigo-600">
                      {st.val}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
