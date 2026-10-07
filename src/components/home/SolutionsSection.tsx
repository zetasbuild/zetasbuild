"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  ShoppingCart,
  CalendarCheck,
  Headphones,
  Smartphone,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

interface SolutionsSectionProps {
  onOpenInquiry?: () => void;
}

export function SolutionsSection({ onOpenInquiry }: SolutionsSectionProps) {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      title: "Business Management Systems",
      desc: "Custom ERP & CRM workflow automation to streamline operations.",
      icon: Briefcase,
      color: "text-blue-600 bg-blue-50 border-blue-200",
      features: ["Custom CRM Pipelines", "Automated Invoicing", "Real-time Operations KPI"],
    },
    {
      title: "E-commerce Platforms",
      desc: "High-performance digital stores with seamless payment gateways.",
      icon: ShoppingCart,
      color: "text-purple-600 bg-purple-50 border-purple-200",
      features: ["Inventory Automation", "Stripe & Multi-currency", "Sub-second Checkout"],
    },
    {
      title: "Booking Systems",
      desc: "Interactive reservation engines with automated scheduling.",
      icon: CalendarCheck,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200",
      features: ["Live Calendar Sync", "Instant Itinerary Quotes", "SMS & Email Confirmations"],
    },
    {
      title: "Customer Service Portals",
      desc: "Ticketing, live chat, and automated knowledge bases.",
      icon: Headphones,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      features: ["AI Support Assistant", "Multi-tier Ticket Routing", "SLA Monitoring"],
    },
    {
      title: "Enterprise Applications",
      desc: "Secure, role-based cloud applications for growing teams.",
      icon: Smartphone,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
      features: ["Role-Based Access Control", "Audit Logging & Security", "High-Concurrency Cloud"],
    },
    {
      title: "Digital Business Platforms",
      desc: "Comprehensive analytics, tracking, and customer engagement hubs.",
      icon: BarChart3,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      features: ["Executive Dashboards", "Cross-Platform Sync", "Predictive Analytics"],
    },
  ];

  return (
    <section id="solutions" className="py-20 md:py-28 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Title & CTA */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2.5 block">
                OUR SOLUTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
                Powering Businesses with{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Smart Solutions
                </span>
              </h2>
              <p className="mt-5 text-base text-slate-600 leading-relaxed font-normal">
                We create custom digital systems tailored to different industries
                and business types, helping you work smarter, grow faster and reach
                further.
              </p>

              <div className="mt-8">
                <button
                  onClick={onOpenInquiry}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all text-sm group"
                >
                  <span>Explore All Solutions</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Center Column: 3D Multi-Device Visual Showcase */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl p-2 bg-gradient-to-b from-white to-slate-100 border border-slate-200/80 shadow-2xl shadow-indigo-500/10 group"
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src="/hero/solutions-devices.jpg"
                  alt="ZetasBuild Smart Business Solutions Suite"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Active preview overlay pills */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSolution}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600" />
                    <span className="text-xs font-bold text-slate-800">
                      {solutions[activeSolution].title}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {solutions[activeSolution].features.map((feat) => (
                      <span
                        key={feat}
                        className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Column: Interactive Solution Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeSolution === idx;
              return (
                <motion.button
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setActiveSolution(idx)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                    isActive
                      ? "bg-white border-indigo-500 shadow-md ring-2 ring-indigo-500/10"
                      : "bg-white/80 border-slate-200/70 hover:bg-white hover:border-slate-300 shadow-2xs"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-transform ${
                        item.color
                      } ${isActive ? "scale-105" : "group-hover:scale-105"}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-bold transition-colors ${
                          isActive ? "text-indigo-600" : "text-slate-800 group-hover:text-indigo-600"
                        }`}
                      >
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-all ${
                      isActive
                        ? "text-indigo-600 translate-x-0.5"
                        : "text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5"
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
