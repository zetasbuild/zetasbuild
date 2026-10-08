"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Settings,
  Bot,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface SolutionsSectionProps {
  onOpenInquiry?: (solutionName?: string) => void;
}

export function SolutionsSection({ onOpenInquiry }: SolutionsSectionProps) {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      title: "Web Development",
      desc: "Modern, responsive websites built for performance, SEO and conversions.",
      icon: Code2,
      iconBg: "bg-[#EEF2FF] text-[#2563EB]",
      arrowBg: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      activeBorder: "border-indigo-400 shadow-[0_8px_30px_rgba(99,102,241,0.12)]",
    },
    {
      title: "Mobile Applications",
      desc: "User-focused mobile experiences designed for Android and iOS.",
      icon: Smartphone,
      iconBg: "bg-[#F5F3FF] text-[#9333EA]",
      arrowBg: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
      activeBorder: "border-purple-400 shadow-[0_8px_30px_rgba(147,51,234,0.12)]",
    },
    {
      title: "Custom Software",
      desc: "Powerful software solutions that simplify operations and improve productivity.",
      icon: Settings,
      iconBg: "bg-[#ECFDF5] text-[#10B981]",
      arrowBg: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
      activeBorder: "border-emerald-400 shadow-[0_8px_30px_rgba(16,185,129,0.12)]",
    },
    {
      title: "AI & Automation",
      desc: "Smart automation and AI-powered solutions to help businesses work faster.",
      icon: Bot,
      iconBg: "bg-[#FFFBEB] text-[#F59E0B]",
      arrowBg: "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white",
      activeBorder: "border-amber-400 shadow-[0_8px_30px_rgba(245,158,11,0.12)]",
    },
  ];

  return (
    <section
      id="solutions"
      className="py-20 md:py-28 relative bg-gradient-to-b from-white via-[#F9FBFE] to-white overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-100/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Eyebrow, Title, Subtitle & CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex flex-col items-start text-left"
          >
            {/* Eyebrow badge with Sparkles icon */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50/90 border border-blue-200/80 shadow-2xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>OUR SOLUTIONS</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-black text-[#0B132B] tracking-tight leading-[1.14]">
              Powering <br />
              Businesses with <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0062FF] via-[#7928CA] to-[#9333EA]">
                Smart Solutions.
              </span>
            </h2>

            {/* Description Paragraph */}
            <p className="mt-5 text-base text-slate-600 leading-relaxed font-normal max-w-md">
              We create custom digital solutions tailored to different industries
              and business needs, helping you work smarter, grow faster and reach
              further.
            </p>

            {/* Explore Our Solutions Pill Button */}
            <div className="mt-8">
              <button
                onClick={() => onOpenInquiry?.(solutions[activeSolution]?.title)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#0062FF] via-[#4F46E5] to-[#8B5CF6] shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm whitespace-nowrap group"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Center Column: 3D Multi-Device & Tech Workspace Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[370px] sm:max-w-[410px] aspect-[350/390] select-none pointer-events-none flex items-center justify-center">
              <Image
                src="/hero/solutions_3d_pure_transparent.png"
                alt="ZetasBuild Powering Businesses with Smart Solutions 3D Visual"
                width={410}
                height={457}
                priority
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Right Column: 4 Interactive Solution Cards */}
          <div className="lg:col-span-4 flex flex-col gap-3.5 w-full">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeSolution === idx;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  onClick={() => {
                    setActiveSolution(idx);
                    onOpenInquiry?.(item.title);
                  }}
                  className={`w-full p-4 sm:p-4.5 rounded-[22px] transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? `bg-white border-2 ${item.activeBorder} -translate-y-0.5`
                      : "bg-white/95 border border-slate-100 hover:border-slate-300 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-md hover:-translate-x-1"
                  }`}
                >
                  <div className="flex items-center gap-3.5 pr-3">
                    {/* Squircle Icon */}
                    <div
                      className={`w-12 h-12 rounded-[16px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-2xs ${item.iconBg}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Circular Arrow Action Button */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${item.arrowBg}`}
                  >
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
