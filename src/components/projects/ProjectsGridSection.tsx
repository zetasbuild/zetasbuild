"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

interface ProjectsGridSectionProps {
  onOpenProject?: (project: any) => void;
}

export function ProjectsGridSection({ onOpenProject }: ProjectsGridSectionProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "All" },
    { id: "websites", label: "Websites" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "software", label: "Custom Software" },
    { id: "uiux", label: "UI/UX" },
  ];

  const projects = [
    {
      title: "Khety Trading (Pvt) Ltd",
      category: "E-commerce",
      filterCategory: "ecommerce",
      desc: "B2B & B2C e-commerce platform for agricultural products and machinery. Focused on performance, security and easy management.",
      image: "/projects/khety-trading.webp",
      tags: ["Next.js", "TypeScript", "Firebase"],
      details:
        "Engineered for Sri Lanka's leading agricultural supplier, incorporating bulk machinery catalog inquiries, dealer tier accounts, and payment gateways.",
      stats: [
        { label: "Machinery Catalogs", val: "1,200+" },
        { label: "B2B Dealers", val: "450+" },
      ],
    },
    {
      title: "Max Enterprises",
      category: "Business Solution",
      filterCategory: "software",
      desc: "A complete business management system with admin panel, product management, and order tracking features.",
      image: "/projects/max-enterprises.jpg",
      tags: ["Next.js", "React", "MongoDB"],
      details:
        "Comprehensive enterprise ERP workflow system providing unified stock tracking across 4 warehouses, invoice generation, and automated daily P&L reports.",
      stats: [
        { label: "Monthly Orders", val: "25K+" },
        { label: "Warehouses", val: "4 Integrated" },
      ],
    },
    {
      title: "Kiwami Auto Parts",
      category: "Automotive",
      filterCategory: "ecommerce",
      desc: "Modern e-commerce site for auto parts with advanced search, category filters and a smooth shopping experience.",
      image: "/projects/kiwami-autoparts.jpg",
      tags: ["Next.js", "Tailwind CSS", "Stripe"],
      details:
        "Specialized automotive parts retail platform featuring exact model & year search filters, high-resolution 3D parts diagrams, and express global checkout.",
      stats: [
        { label: "SKUs Managed", val: "45,000+" },
        { label: "Checkout Time", val: "<1.2s" },
      ],
    },
    {
      title: "St. Jude College",
      category: "Education",
      filterCategory: "websites",
      desc: "Educational institution website with course details, admission info and online application forms.",
      image: "/projects/st-jude-college.webp",
      tags: ["Next.js", "Tailwind CSS", "Vercel"],
      details:
        "Digital portal for an elite collegiate institute, automating student admissions, faculty directory, examination timetables, and parents portal.",
      stats: [
        { label: "Active Students", val: "3,500+" },
        { label: "Paperless Admissions", val: "100%" },
      ],
    },
    {
      title: "Lakers Villa",
      category: "Hospitality",
      filterCategory: "websites",
      desc: "Villa booking website with room availability, pricing and inquiry system.",
      image: "/projects/lakers-villa.jpg",
      tags: ["Next.js", "React", "Tailwind CSS"],
      details:
        "Luxury boutique villa reservation website with live availability calendar, instant room visualizers, and direct booking WhatsApp integration.",
      stats: [
        { label: "Direct Bookings Lift", val: "+68%" },
        { label: "Average Review", val: "4.95 ★" },
      ],
    },
    {
      title: "Amila Super Center",
      category: "E-commerce",
      filterCategory: "ecommerce",
      desc: "Online store for home appliances with product categories, filters and secure checkout.",
      image: "/projects/amila-super.jpg",
      tags: ["Next.js", "TypeScript", "Stripe"],
      details:
        "High-volume consumer electronics and kitchen appliance online store with warranty verification, multi-branch pickup, and fast local card settlement.",
      stats: [
        { label: "Products Listed", val: "8,000+" },
        { label: "Daily Shoppers", val: "12K+" },
      ],
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (p) =>
            p.filterCategory === activeFilter ||
            (activeFilter === "websites" && p.category.includes("Hospitality")) ||
            (activeFilter === "websites" && p.category.includes("Education"))
        );

  return (
    <section className="py-12 pb-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Navigation Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-50 p-1.5 rounded-full border border-slate-200/80">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeFilter === tab.id
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setActiveFilter("all")}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => onOpenProject?.(proj)}
              className="rounded-3xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md px-3 py-0.5 rounded-full text-[10px] font-bold text-indigo-600 uppercase border border-slate-200/60 shadow-2xs">
                    {proj.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {proj.desc}
                  </p>

                  {/* Tech stack tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-indigo-600 group-hover:text-indigo-700 flex items-center gap-1">
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>

                <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
