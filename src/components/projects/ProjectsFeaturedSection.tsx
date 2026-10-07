"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Compass,
  Car,
  Hotel,
  ExternalLink,
} from "lucide-react";

interface ProjectsFeaturedSectionProps {
  onOpenProject?: (project: any) => void;
}

export function ProjectsFeaturedSection({
  onOpenProject,
}: ProjectsFeaturedSectionProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const featuredProjects = [
    {
      id: 1,
      title: "Stop Travelers Sri Lanka",
      category: "Tourism & Travel",
      desc: "A modern tourism and vehicle rental platform designed to help travelers explore Sri Lanka with ease. The website offers trip planning, vehicle rental options, and accommodation booking in one place.",
      image: "/projects/stop-travelers.jpg",
      tags: ["Next.js", "React", "Tailwind CSS", "Node.js"],
      features: [
        { label: "Trip Planner", icon: Compass },
        { label: "Vehicle Rental", icon: Car },
        { label: "Hotel Booking", icon: Hotel },
      ],
      details:
        "Engineered end-to-end for seamless inbound travelers booking, providing interactive itinerary creation, live vehicle reservation tracking, and instant multi-currency quotes.",
      stats: [
        { label: "Daily Bookings", val: "250+" },
        { label: "Page Load Speed", val: "0.8s" },
      ],
    },
    {
      id: 2,
      title: "Trendy Store",
      category: "E-commerce Platform",
      desc: "High-performance digital fashion storefront featuring lightning-fast cart performance, instant catalog search, and multi-currency Stripe checkout.",
      image: "/projects/trendy-store.jpg",
      tags: ["Next.js", "React", "Stripe", "Tailwind CSS"],
      features: [
        { label: "Instant Search", icon: Compass },
        { label: "Multi-Currency", icon: Car },
        { label: "Inventory Sync", icon: Hotel },
      ],
      details:
        "Modern apparel shopping platform with 45% lift in checkout conversion and sub-second page transition speeds.",
      stats: [
        { label: "Conversion Lift", val: "+45%" },
        { label: "Transactions", val: "10K+" },
      ],
    },
  ];

  const current = featuredProjects[currentIdx];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % featuredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIdx(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );
  };

  return (
    <section className="py-8 pb-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-xl shadow-slate-900/5 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column: Visual Mockup */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-100 shadow-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Project Meta & Content */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            {/* Top Indicator & Category */}
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-200/60">
                <Compass className="w-3.5 h-3.5" />
                <span>{current.category}</span>
              </div>

              {/* Index counter & slider navigation */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-slate-400">
                  0{currentIdx + 1} / 0{featuredProjects.length}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous project"
                    className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next project"
                    className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {current.title}
            </h2>

            {/* Description */}
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {current.desc}
            </p>

            {/* Tech stack pills */}
            <div className="mt-5 flex flex-wrap gap-2">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Feature badges */}
            <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-slate-100">
              {current.features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-50 border border-slate-200/70 text-slate-600"
                  >
                    <Icon className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{feat.label}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-6 pt-2">
              <button
                onClick={() => onOpenProject?.(current)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all text-sm group"
              >
                <span>View Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
