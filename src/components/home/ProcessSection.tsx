"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Map,
  Palette,
  Code,
  ShieldCheck,
  Rocket,
  Headphones,
  CheckCircle2,
} from "lucide-react";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Understand your goals & requirements",
      icon: Search,
      color: "bg-blue-600 ring-blue-200",
      details: "In-depth discovery workshops, stakeholder interviews, competitor analysis, and clear KPIs.",
    },
    {
      num: "02",
      title: "Plan",
      desc: "Define the roadmap & architecture",
      icon: Map,
      color: "bg-indigo-600 ring-indigo-200",
      details: "Milestone planning, tech stack selection, sprint roadmaps, and scope specification.",
    },
    {
      num: "03",
      title: "Design",
      desc: "Wireframes & interactive prototypes",
      icon: Palette,
      color: "bg-cyan-600 ring-cyan-200",
      details: "User flow design, design system tokens, Figma prototypes, and accessibility audits.",
    },
    {
      num: "04",
      title: "Develop",
      desc: "Code with precision & modern standards",
      icon: Code,
      color: "bg-emerald-600 ring-emerald-200",
      details: "Next.js 16, clean modular code, automated CI/CD pipeline, and database optimization.",
    },
    {
      num: "05",
      title: "Test",
      desc: "Comprehensive QA & security audits",
      icon: ShieldCheck,
      color: "bg-amber-600 ring-amber-200",
      details: "End-to-end testing, cross-browser verification, penetration testing, and load stress tests.",
    },
    {
      num: "06",
      title: "Launch",
      desc: "Seamless production deployment",
      icon: Rocket,
      color: "bg-pink-600 ring-pink-200",
      details: "Zero-downtime deployment, DNS configuration, CDN edge caching, and launch monitoring.",
    },
    {
      num: "07",
      title: "Support",
      desc: "Continuous maintenance & scaling",
      icon: Headphones,
      color: "bg-purple-600 ring-purple-200",
      details: "24/7 SLA uptime monitoring, regular security updates, feature scaling, and performance tuning.",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2.5 block">
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              From Idea to Impact
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
              A simple, transparent process to turn your vision into a successful
              product.
            </p>
          </motion.div>
        </div>

        {/* Desktop Process Timeline */}
        <div className="relative">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 via-emerald-500 via-amber-500 to-purple-500 -translate-y-8 z-0 opacity-40 rounded-full" />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 relative z-10">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              const isActive = activeStep === idx;
              return (
                <motion.div
                  key={st.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Step Circle */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg transition-all duration-300 ring-4 ${
                      st.color
                    } ${
                      isActive
                        ? "scale-115 ring-indigo-400 shadow-indigo-500/30"
                        : "group-hover:scale-110 ring-white"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Number Badge */}
                  <span className="mt-3 text-[11px] font-mono font-bold text-slate-400">
                    Step {st.num}
                  </span>

                  {/* Title */}
                  <h4
                    className={`mt-1 text-sm font-bold transition-colors ${
                      isActive ? "text-indigo-600" : "text-slate-900 group-hover:text-indigo-600"
                    }`}
                  >
                    {st.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-1 text-xs text-slate-500 leading-snug line-clamp-2">
                    {st.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Active Step Details Card */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-12 max-w-xl mx-auto p-5 rounded-2xl bg-white border border-slate-200/80 shadow-md text-center"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
              <span>Step {steps[activeStep].num}: {steps[activeStep].title}</span>
            </div>
            <p className="text-sm text-slate-600">
              {steps[activeStep].details}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
