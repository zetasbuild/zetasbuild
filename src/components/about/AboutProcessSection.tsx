"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Boxes,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  ArrowRight,
} from "lucide-react";

export function AboutProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Understand your needs and goals",
      icon: FileText,
      color: "bg-blue-600 ring-blue-200",
      detail: "Deep dive workshops to uncover product requirements, target audience profiles, and strategic business benchmarks.",
    },
    {
      num: "02",
      title: "Plan",
      desc: "Define strategy and roadmap",
      icon: Boxes,
      color: "bg-emerald-600 ring-emerald-200",
      detail: "Architectural blueprinting, technology stack selection, agile sprint breakdown, and delivery timelines.",
    },
    {
      num: "03",
      title: "Design",
      desc: "Create wireframes and UI/UX",
      icon: Palette,
      color: "bg-purple-600 ring-purple-200",
      detail: "Interactive high-fidelity Figma prototypes, intuitive usability testing, and pixel-perfect design system tokens.",
    },
    {
      num: "04",
      title: "Develop",
      desc: "Build with modern technologies",
      icon: Code2,
      color: "bg-indigo-600 ring-indigo-200",
      detail: "Modern Next.js & React clean code architecture, automated continuous integration, and secure database schemas.",
    },
    {
      num: "05",
      title: "Test",
      desc: "Ensure quality and performance",
      icon: ShieldCheck,
      color: "bg-cyan-600 ring-cyan-200",
      detail: "Automated regression tests, multi-device responsiveness audits, high-load stress testing, and accessibility checks.",
    },
    {
      num: "06",
      title: "Launch",
      desc: "Go live and support",
      icon: Rocket,
      color: "bg-blue-600 ring-blue-200",
      detail: "Zero-downtime production deployment, edge CDN propagation, analytics setup, and dedicated 24/7 SLA maintenance.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with CTA Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2.5 block">
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              How We Work
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              A simple and transparent process to turn your ideas into powerful
              digital solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all text-sm group"
            >
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* 6 Step Connected Flow */}
        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-400 via-emerald-400 via-purple-400 to-blue-400 -z-0 opacity-40" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              const isActive = activeStep === idx;
              return (
                <motion.div
                  key={st.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md transition-all duration-300 ring-4 ${
                      st.color
                    } ${
                      isActive
                        ? "scale-110 ring-indigo-300 shadow-indigo-500/30"
                        : "group-hover:scale-105 ring-white"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="mt-3 text-[11px] font-mono font-bold text-slate-400">
                    {st.num}
                  </span>

                  <h4
                    className={`mt-1 text-sm font-bold transition-colors ${
                      isActive ? "text-indigo-600" : "text-slate-900 group-hover:text-indigo-600"
                    }`}
                  >
                    {st.title}
                  </h4>

                  <p className="mt-1 text-xs text-slate-500 leading-snug">
                    {st.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Active Step Details */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-12 max-w-xl mx-auto p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs text-center"
          >
            <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
              Step {steps[activeStep].num}: {steps[activeStep].title}
            </div>
            <p className="text-sm text-slate-600">
              {steps[activeStep].detail}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
