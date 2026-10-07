"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Rocket,
  Users,
  Code2,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export function ProjectsHeroSection() {
  const stats = [
    {
      value: "50+",
      label: "Projects Delivered",
      icon: Rocket,
      color: "text-blue-600 bg-blue-50 border-blue-200/60",
    },
    {
      value: "20+",
      label: "Happy Clients",
      icon: Users,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200/60",
    },
    {
      value: "10+",
      label: "Technologies Used",
      icon: Code2,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200/60",
    },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-indigo-50/40 via-white to-white">
      {/* Curved top light ambient glow */}
      <div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[1200px] h-[550px] rounded-full bg-gradient-to-b from-blue-100/50 via-purple-100/30 to-transparent blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6"
        >
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-indigo-600 font-semibold">Our Projects</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/60 mb-5 shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-indigo-700 uppercase">
                OUR PROJECTS
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]"
            >
              Turning Ideas Into <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Real Digital Solutions.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal"
            >
              We are proud to showcase some of our recent work. Each project
              represents our commitment to quality, innovation, and delivering
              solutions that create real value for our clients.
            </motion.p>

            {/* 3 Stats Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-slate-100"
            >
              {stats.map((st) => {
                const Icon = st.icon;
                return (
                  <div key={st.label} className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${st.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                        {st.value}
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        {st.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: 3D Visual Showcase with Handwritten Formula */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl p-2 bg-gradient-to-b from-indigo-50/60 to-white/90 border border-slate-200/80 shadow-2xl shadow-indigo-500/10 group"
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src="/projects/stop-travelers.jpg"
                  alt="ZetasBuild Digital Projects Showcase"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Floating Handwritten Script Overlay Note at Top Right */}
              <div className="absolute -top-6 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl px-4 py-2.5 shadow-xl select-none animate-float">
                <div className="font-serif italic text-xs sm:text-sm text-slate-800 leading-snug">
                  <div>Ideas</div>
                  <div className="text-indigo-600 font-semibold">→ Design</div>
                  <div className="text-cyan-600">→ Code</div>
                  <div className="text-purple-600 font-bold">→ Launch</div>
                </div>
                {/* Arrow flourish */}
                <svg
                  className="w-10 h-6 text-indigo-500 mt-1 ml-auto"
                  viewBox="0 0 40 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M4 4 C 18 18, 28 6, 36 20 M30 18 L36 20 L36 14" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
