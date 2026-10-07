"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  Rocket,
  Users,
  Globe2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function AboutStorySection() {
  const milestones = [
    {
      value: "2020",
      label: "Founded",
      icon: Calendar,
      color: "text-blue-600 bg-blue-50 border-blue-200/60",
    },
    {
      value: "50+",
      label: "Projects Delivered",
      icon: Rocket,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200/60",
    },
    {
      value: "10+",
      label: "Team Members",
      icon: Users,
      color: "text-purple-600 bg-purple-50 border-purple-200/60",
    },
    {
      value: "Worldwide",
      label: "Clients",
      icon: Globe2,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200/60",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Story text & stats */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2.5 block">
                OUR STORY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
                A Journey Built on{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Passion and Purpose.
                </span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                ZetasBuild was founded with a simple belief — technology should
                make life easier, businesses stronger, and ideas bigger. What
                started as a small team of passionate developers has grown into
                a trusted software company, delivering modern digital solutions
                for clients around the world.
              </p>
            </motion.div>

            {/* 4 Milestone Badges in a Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
            >
              {milestones.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all text-center flex flex-col items-center"
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center border mb-2 ${item.color}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-base sm:text-lg font-bold text-slate-900">
                      {item.value}
                    </div>
                    <div className="text-[11px] font-medium text-slate-500">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Handwritten note at bottom left with cursive styling & scribble */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 pt-4 inline-block"
            >
              <div className="relative inline-block font-serif italic text-lg sm:text-xl text-slate-700 tracking-tight select-none">
                <span>&ldquo;Still the same mission,</span> <br />
                <span className="font-semibold text-indigo-700 ml-6">
                  Bigger dreams.&rdquo;
                </span>
                {/* Hand-drawn underline svg flourish */}
                <svg
                  className="w-44 h-4 text-indigo-500 mt-1"
                  viewBox="0 0 160 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M4 12 C 40 4, 110 14, 156 8" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Team Collaboration Photo */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl p-2 bg-gradient-to-b from-indigo-50/50 to-white/90 border border-slate-200/80 shadow-2xl shadow-indigo-500/10 group"
            >
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src="/about/story-team.jpg"
                  alt="ZetasBuild Team Collaboration"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating collaboration pill on bottom-right */}
              <div className="absolute -bottom-3 right-4 sm:right-6 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-full px-4 py-2 shadow-xl flex items-center gap-2 group-hover:scale-105 transition-transform">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-800">
                  Better Solutions Through Collaboration
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
