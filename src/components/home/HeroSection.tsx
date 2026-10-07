"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Bot } from "lucide-react";

interface HeroSectionProps {
  onOpenInquiry?: () => void;
}

export function HeroSection({ onOpenInquiry }: HeroSectionProps) {
  const [isRobotHovered, setIsRobotHovered] = useState(false);

  // Mouse tracking for realistic 3D isometric tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D rotation of entire scene
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    damping: 24,
    stiffness: 140,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    damping: 24,
    stiffness: 140,
  });

  // Enhanced 3D parallax tilt specifically for the floating robot
  const robotRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [9, -9]), {
    damping: 20,
    stiffness: 160,
  });
  const robotRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    damping: 20,
    stiffness: 160,
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
    setIsRobotHovered(false);
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden bg-gradient-to-b from-[#FAFBFD] via-[#F4F7FC]/60 to-[#FFFFFF]"
    >
      {/* Ambient background curves & futuristic light sweeps */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Top left subtle blue glow */}
        <div className="absolute -top-40 -left-20 w-[680px] h-[680px] rounded-full bg-gradient-to-br from-blue-300/15 via-indigo-200/10 to-transparent blur-3xl" />
        {/* Top right purple aura */}
        <div className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-purple-300/15 via-blue-200/10 to-transparent blur-3xl" />
        {/* Pedestal ambient glow */}
        <div className="absolute top-1/3 right-1/4 w-[480px] h-[480px] rounded-full bg-cyan-300/10 blur-3xl" />

        {/* Fluid background curve shapes matching the reference image */}
        <svg
          className="absolute left-0 bottom-0 w-[55%] h-auto opacity-35 text-blue-200"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 600C150 580 250 480 320 380C390 280 470 200 650 220C750 230 820 300 900 350"
            stroke="currentColor"
            strokeWidth="80"
            strokeLinecap="round"
            className="text-blue-100/50"
          />
          <path
            d="M-50 550C200 520 280 430 360 340C430 250 520 180 700 210"
            stroke="url(#blueGradCurve)"
            strokeWidth="35"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="blueGradCurve" x1="0" y1="0" x2="800" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" stopOpacity="0.4" />
              <stop offset="0.6" stopColor="#818CF8" stopOpacity="0.25" />
              <stop offset="1" stopColor="#C084FC" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Recreated exactly like reference */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/70 mb-6 shadow-2xs backdrop-blur-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-indigo-700 uppercase">
                SOFTWARE &amp; DIGITAL SOLUTIONS
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[60px] font-extrabold text-slate-900 tracking-tight leading-[1.12]"
            >
              Building Digital <br />
              Solutions That Move <br />
              Businesses{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0070F3] via-[#4F46E5] to-[#9333EA]">
                Forward.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal"
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
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group text-base cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-slate-800 bg-white border border-slate-200/90 shadow-2xs hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all duration-200 text-base"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Exact Seamless 3D Scene with 3D Animated Robot */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Ambient circular pedestal lighting behind the 3D scene */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-gradient-to-tr from-blue-400/15 via-purple-400/15 to-cyan-400/10 blur-2xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-[640px] aspect-[574/410] select-none"
            >
              {/* Layer 1: Seamless Feathered 3D Scene Plate */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <Image
                  src="/hero/hero-bg-feathered.png"
                  alt="ZetasBuild 3D Futuristic Digital Solutions Scene"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Dynamic Pedestal Neon Glow Accent */}
              <motion.div
                animate={{
                  opacity: [0.35, 0.65, 0.35],
                  scale: [0.98, 1.02, 0.98],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[6%] left-[34%] -translate-x-1/2 w-[52%] h-[18%] rounded-[100%] bg-gradient-to-r from-cyan-400/20 via-blue-500/25 to-purple-500/20 blur-md pointer-events-none"
              />

              {/* Layer 2: 3D Animated Robot Layer */}
              <div
                className="absolute"
                style={{
                  left: "39.20%",
                  top: "3.66%",
                  width: "33.97%",
                  height: "42.68%",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Robot Dynamic Levitating & 3D Parallax Tilt Container */}
                <motion.div
                  animate={{
                    y: isRobotHovered ? -8 : [-5, 5, -5],
                    rotateZ: isRobotHovered ? 2.5 : [-2, 2.5, -2],
                    scale: isRobotHovered ? 1.05 : [1, 1.02, 1],
                  }}
                  transition={{
                    y: {
                      duration: isRobotHovered ? 0.3 : 4,
                      repeat: isRobotHovered ? 0 : Infinity,
                      ease: "easeInOut",
                    },
                    rotateZ: {
                      duration: 4.5,
                      repeat: isRobotHovered ? 0 : Infinity,
                      ease: "easeInOut",
                    },
                    scale: {
                      duration: 3.5,
                      repeat: isRobotHovered ? 0 : Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  style={{
                    rotateX: robotRotateX,
                    rotateY: robotRotateY,
                    transformStyle: "preserve-3d",
                    transformOrigin: "50% 85%",
                  }}
                  onMouseEnter={() => setIsRobotHovered(true)}
                  onMouseLeave={() => setIsRobotHovered(false)}
                  className="relative w-full h-full cursor-pointer group"
                >
                  {/* Floating Soft Ambient Blue Glow behind the robot */}
                  <motion.div
                    animate={{
                      scale: [0.9, 1.1, 0.9],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full bg-cyan-400/25 blur-lg pointer-events-none"
                  />

                  {/* Cutout Robot Transparent Graphic */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/hero/robot_isolated.png"
                      alt="ZetasBuild 3D Animated Companion Robot"
                      fill
                      priority
                      className="object-contain drop-shadow-[0_8px_16px_rgba(30,58,138,0.25)] transition-transform duration-300 group-hover:brightness-105"
                    />

                    {/* Cyan LED Eyes & Visor Light Animation Overlay */}
                    {/* Left Eye LED Glow Arc */}
                    <motion.div
                      animate={{
                        scaleY: [1, 1, 0.08, 1, 1],
                        opacity: [0.85, 1, 0.85],
                      }}
                      transition={{
                        scaleY: {
                          duration: 4,
                          repeat: Infinity,
                          times: [0, 0.45, 0.5, 0.55, 1],
                        },
                        opacity: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                      className="absolute rounded-full pointer-events-none"
                      style={{
                        left: "51.5%",
                        top: "23.3%",
                        width: "6.5%",
                        height: "5%",
                        backgroundColor: "#00F0FF",
                        boxShadow:
                          "0 0 6px #00F0FF, 0 0 12px #00F0FF, 0 0 20px rgba(0, 240, 255, 0.7)",
                        transform: "translate(-50%, -50%)",
                      }}
                    />

                    {/* Right Eye LED Glow Arc */}
                    <motion.div
                      animate={{
                        scaleY: [1, 1, 0.08, 1, 1],
                        opacity: [0.85, 1, 0.85],
                      }}
                      transition={{
                        scaleY: {
                          duration: 4,
                          repeat: Infinity,
                          times: [0, 0.45, 0.5, 0.55, 1],
                        },
                        opacity: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                      className="absolute rounded-full pointer-events-none"
                      style={{
                        left: "71.5%",
                        top: "22.8%",
                        width: "6.5%",
                        height: "5%",
                        backgroundColor: "#00F0FF",
                        boxShadow:
                          "0 0 6px #00F0FF, 0 0 12px #00F0FF, 0 0 20px rgba(0, 240, 255, 0.7)",
                        transform: "translate(-50%, -50%)",
                      }}
                    />

                    {/* Left Ear Ring LED Light Pulse */}
                    <motion.div
                      animate={{
                        opacity: [0.6, 1, 0.6],
                        scale: [0.95, 1.15, 0.95],
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute rounded-full pointer-events-none"
                      style={{
                        left: "34%",
                        top: "24%",
                        width: "4%",
                        height: "4%",
                        backgroundColor: "#00F0FF",
                        boxShadow: "0 0 8px #00F0FF, 0 0 14px rgba(0, 240, 255, 0.8)",
                        transform: "translate(-50%, -50%)",
                      }}
                    />

                    {/* Right Ear Ring LED Light Pulse */}
                    <motion.div
                      animate={{
                        opacity: [0.6, 1, 0.6],
                        scale: [0.95, 1.15, 0.95],
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3,
                      }}
                      className="absolute rounded-full pointer-events-none"
                      style={{
                        left: "89%",
                        top: "24%",
                        width: "4%",
                        height: "4%",
                        backgroundColor: "#00F0FF",
                        boxShadow: "0 0 8px #00F0FF, 0 0 14px rgba(0, 240, 255, 0.8)",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>

                  {/* Interactive greeting speech bubble on hover */}
                  {isRobotHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-cyan-200/80 rounded-full px-3 py-1 shadow-lg shadow-cyan-500/15 flex items-center gap-1.5 whitespace-nowrap pointer-events-none z-30"
                    >
                      <Bot className="w-3.5 h-3.5 text-cyan-600" />
                      <span className="text-[10px] font-bold text-slate-800">
                        Hello! Let&apos;s Build
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Layer 3: Foreground Laptop Overlay */}
              {/* Ensures the robot naturally floats BEHIND the laptop top bezel in 3D */}
              <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
                <Image
                  src="/hero/laptop_foreground_feathered.png"
                  alt="Foreground Laptop Depth Layer"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
