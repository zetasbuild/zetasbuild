"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Bot,
  Palette,
  Code2,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

interface ServicesOfferSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export function ServicesOfferSection({
  onSelectService,
}: ServicesOfferSectionProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Services" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "ai", label: "AI & ML" },
    { id: "design", label: "Design" },
    { id: "software", label: "Software" },
    { id: "ecommerce", label: "E-commerce" },
  ];

  const services = [
    {
      num: "01",
      category: "web",
      title: "Website Development",
      desc: "Modern, fast and SEO-friendly websites that make an impact. Built for performance and growth.",
      image: "/services/web-engineering.webp",
      icon: Globe,
      color: "text-blue-600 bg-blue-50 border-blue-200/60",
    },
    {
      num: "02",
      category: "mobile",
      title: "Mobile Application Development",
      desc: "Powerful mobile apps for iOS & Android that your users will love.",
      image: "/services/mobile-force.webp",
      icon: Smartphone,
      color: "text-purple-600 bg-purple-50 border-purple-200/60",
    },
    {
      num: "03",
      category: "ai",
      title: "AI & ML Applications",
      desc: "Smart solutions that learn, adapt and solve real problems.",
      image: "/services/ai-machine.webp",
      icon: Bot,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200/60",
    },
    {
      num: "04",
      category: "design",
      title: "UI/UX Design",
      desc: "Beautiful, intuitive designs that put users first.",
      image: "/services/creative-mastery.webp",
      icon: Palette,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200/60",
    },
    {
      num: "05",
      category: "software",
      title: "Custom Software Solutions",
      desc: "Tailored software for your unique business needs.",
      image: "/services/security-support.webp",
      icon: Code2,
      color: "text-purple-600 bg-purple-50 border-purple-200/60",
    },
    {
      num: "06",
      category: "ecommerce",
      title: "E-commerce Development",
      desc: "Secure and scalable online stores for your brand.",
      image: "/projects/trendy-store.jpg",
      icon: ShoppingBag,
      color: "text-pink-600 bg-pink-50 border-pink-200/60",
    },
  ];

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((s) => s.category === activeFilter);

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2.5 block">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              What We Offer
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Explore our core services designed to help your business thrive in
              the digital world.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-1.5 bg-slate-50/80 p-1.5 rounded-full border border-slate-200/80"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeFilter === tab.id
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => onSelectService?.(svc.title)}
                className="relative rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/80 shadow-2xs hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Top: Icon + Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 ${svc.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {svc.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {svc.title}
                  </h3>

                  {/* 3D Visual Thumbnail */}
                  <div className="my-4 relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-900/5 border border-slate-100">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                {/* Bottom Row: Learn More Link + Circle Button */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-indigo-600 group-hover:text-indigo-700 flex items-center gap-1">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>

                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
