"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Smartphone,
  Bot,
  Code,
  Activity,
  CheckCircle2,
  TrendingUp,
  Cpu,
} from "lucide-react";

interface HeroSectionProps {
  onOpenInquiry?: () => void;
}

export function HeroSection({ onOpenInquiry }: HeroSectionProps) {
  // 3D tilt spring animation for hero image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    damping: 25,
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    damping: 25,
    stiffness: 150,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const domainPills = [
    { label: "Web", icon: Globe, color: "text-blue-600 bg-blue-50/80 border-blue-200/60" },
    { label: "Mobile", icon: Smartphone, color: "text-purple-600 bg-purple-50/80 border-purple-200/60" },
    { label: "AI", icon: Bot, color: "text-emerald-600 bg-emerald-50/80 border-emerald-200/60" },
    { label: "Software", icon: Code, color: "text-indigo-600 bg-indigo-50/80 border-indigo-200/60" },
  ];

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-32 left-1/4 w-[520px] h-[520px] rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute top-20 right-10 w-[550px] h-[550px] rounded-full bg-purple-400/10 blur-3xl" />
        <div className="absolute top-48 left-10 w-[450px] h-[450px] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50/90 border border-indigo-200/60 mb-6 shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping" />
              <span className="text-xs font-semibold tracking-wider text-indigo-700 uppercase">
                SOFTWARE & DIGITAL SOLUTIONS
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]"
            >
              Building Digital <br />
              Solutions That Move <br />
              Businesses{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Forward.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal"
            >
              From high-performance websites and mobile applications to AI-powered
              solutions and custom software, we build digital experiences designed
              for real-world growth.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group text-base"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-slate-700 bg-white border border-slate-200/90 shadow-2xs hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all duration-200 text-base"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700" />
              </Link>
            </motion.div>

            {/* Interactive Domain Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-3 pt-6 border-t border-slate-100 w-full"
            >
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase mr-1">
                Capabilities:
              </span>
              {domainPills.map((pill) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={pill.label}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border shadow-2xs transition-transform hover:scale-105 ${pill.color}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{pill.label}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: 3D Isometric Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative rounded-3xl p-2 bg-gradient-to-b from-slate-100/60 to-white/80 border border-slate-200/70 shadow-2xl shadow-indigo-500/10 backdrop-blur-xs group cursor-pointer"
            >
              {/* Main 3D Laptop Graphic */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src="/hero/hero-laptop.jpg"
                  alt="ZetasBuild Software Dashboard Showcase"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                />

                {/* Subtle glass reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
              </div>

              {/* Floating holographic card 1: Top Right "Create • Real Solutions" */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl px-3.5 py-2.5 shadow-xl shadow-slate-900/10 flex items-center gap-2.5 animate-float pointer-events-none"
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-2xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Innovate
                  </div>
                  <div className="text-xs font-bold text-slate-800">
                    Create • Real Solutions
                  </div>
                </div>
              </motion.div>

              {/* Floating holographic card 2: Bottom Left "Uptime 99.98%" */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl px-4 py-2.5 shadow-xl shadow-slate-900/10 flex items-center gap-3 animate-float-reverse pointer-events-none"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-medium text-slate-500">
                      System Status
                    </span>
                  </div>
                  <div className="text-xs font-bold text-slate-900">
                    99.98% High Uptime
                  </div>
                </div>
              </motion.div>

              {/* Floating badge: Requests / Performance */}
              <div className="absolute top-1/2 -right-3 sm:-right-5 -translate-y-1/2 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-xl px-3 py-1.5 shadow-lg hidden sm:flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
                <span className="text-[11px] font-bold text-slate-800">
                  8.4M+ Req/hr
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
