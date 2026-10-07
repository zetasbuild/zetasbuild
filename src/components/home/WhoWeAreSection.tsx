"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Target,
  Cog,
  User,
  TrendingUp,
} from "lucide-react";

interface WhoWeAreSectionProps {
  onOpenInquiry?: () => void;
}

export function WhoWeAreSection({ onOpenInquiry }: WhoWeAreSectionProps) {
  // 3D tilt interaction for the right-side visual
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    damping: 24,
    stiffness: 140,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    damping: 24,
    stiffness: 140,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const pillars = [
    {
      num: "01",
      title: "Strategic Thinking",
      desc: "Turning business goals into executable plans.",
      icon: Target,
      iconGradient: "from-blue-600 to-indigo-600 shadow-blue-500/25",
      arrowBg: "bg-blue-50/90 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      numColor: "text-blue-100/90 group-hover:text-blue-200",
    },
    {
      num: "02",
      title: "Modern Engineering",
      desc: "Clean systems, modern technology stacks.",
      icon: Cog,
      iconGradient: "from-indigo-600 to-purple-600 shadow-purple-500/25",
      arrowBg: "bg-purple-50/90 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
      numColor: "text-purple-100/90 group-hover:text-purple-200",
    },
    {
      num: "03",
      title: "User-Focused Design",
      desc: "Exceptional experiences for your users.",
      icon: User,
      iconGradient: "from-purple-600 to-pink-500 shadow-purple-500/25",
      arrowBg: "bg-purple-50/90 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
      numColor: "text-purple-100/90 group-hover:text-purple-200",
    },
    {
      num: "04",
      title: "Scalable Solutions",
      desc: "Built for today, ready for tomorrow.",
      icon: TrendingUp,
      iconGradient: "from-emerald-500 to-teal-600 shadow-emerald-500/25",
      arrowBg: "bg-emerald-50/90 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
      numColor: "text-emerald-100/90 group-hover:text-emerald-200",
    },
  ];

  return (
    <section
      id="who-we-are"
      className="py-20 md:py-28 relative bg-gradient-to-b from-white via-[#F8FAFC]/50 to-white overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] rounded-full bg-blue-300/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full bg-purple-300/15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtitle & 4 Styled Cards */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Eyebrow with gradient accent bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-7 h-[3px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
              <span className="px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50/90 border border-indigo-200/70 shadow-2xs">
                WHO WE ARE
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-extrabold text-slate-900 tracking-tight leading-[1.14]"
            >
              Technology built around{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0070F3] to-[#9333EA]">
                your goals.
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl"
            >
              ZetasBuild combines software development, modern design, and emerging
              technologies to create practical digital solutions that help businesses grow,
              scale and succeed in the digital world.
            </motion.p>

            {/* 4 Feature Cards Grid (2x2) */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
                    className="relative group p-4 sm:p-5 rounded-2xl bg-white/95 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-indigo-300/80 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="flex items-start justify-between relative z-10">
                      {/* Icon */}
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center text-white bg-gradient-to-br shadow-md transition-transform duration-300 group-hover:scale-105 ${item.iconGradient}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Top-Right Arrow Circle */}
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${item.arrowBg}`}
                      >
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-3.5 relative z-10 pr-6">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Watermark Ghost Number */}
                    <span
                      className={`absolute right-3.5 bottom-1 text-3xl font-black select-none pointer-events-none transition-colors duration-300 ${item.numColor}`}
                    >
                      {item.num}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-6"
            >
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group text-sm sm:text-base cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-slate-700 hover:text-indigo-600 transition-colors group pb-0.5 border-b border-slate-300 hover:border-indigo-600"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Exact Extracted 3D Scene with Laptop, Phone & Floating Cards */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Glowing neon aura behind pedestal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] h-[92%] rounded-full bg-gradient-to-tr from-cyan-400/15 via-blue-400/15 to-purple-400/15 blur-2xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-[620px] aspect-[514/480] select-none"
            >
              {/* Seamless Feathered 3D Scene Plate */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <Image
                  src="/hero/whoweare_scene_v2.png"
                  alt="ZetasBuild Technology Architecture, Laptop and Phone"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Dynamic Pedestal Neon Glow Accent */}
              <motion.div
                animate={{
                  opacity: [0.35, 0.7, 0.35],
                  scale: [0.98, 1.02, 0.98],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[3%] left-[45%] -translate-x-1/2 w-[62%] h-[16%] rounded-[100%] bg-gradient-to-r from-cyan-400/20 via-blue-500/25 to-purple-500/25 blur-md pointer-events-none"
              />

              {/* Floating micro-shimmer overlays for 3D cards */}
              {/* Card 1: Web Development (top) */}
              <motion.div
                animate={{
                  y: [-3, 3, -3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[8%] left-[26%] w-[32%] h-[15%] rounded-2xl pointer-events-none hover:border hover:border-blue-300/40"
              />

              {/* Card 2: AI & ML (left) */}
              <motion.div
                animate={{
                  y: [3, -3, 3],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[24%] left-[4%] w-[26%] h-[15%] rounded-2xl pointer-events-none hover:border hover:border-emerald-300/40"
              />

              {/* Card 3: Mobile Apps (right) */}
              <motion.div
                animate={{
                  y: [-3, 3, -3],
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="absolute top-[18%] right-[4%] w-[26%] h-[16%] rounded-2xl pointer-events-none hover:border hover:border-purple-300/40"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
