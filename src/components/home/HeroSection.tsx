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

            {/* Right Column: Exact 3D Multi-Layer Recreated Scene */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              {/* Ambient circular pedestal lighting behind the 3D scene */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-gradient-to-tr from-blue-400/15 via-purple-400/15 to-cyan-400/10 blur-3xl pointer-events-none" />

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
                className="relative w-full max-w-[640px] aspect-[1200/896] select-none"
              >
                {/* Layer 1: Clean Base Workspace Plate (Pedestal, Laptop, Phone, Plant, Ribbon) */}
                <div
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ transform: "translateZ(0px)" }}
                >
                  <Image
                    src="/hero/hero_workspace_clean.png"
                    alt="ZetasBuild 3D Futuristic Workspace Scene"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 640px"
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
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-[5%] left-[45%] -translate-x-1/2 w-[55%] h-[16%] rounded-[100%] bg-gradient-to-r from-cyan-400/25 via-blue-500/30 to-purple-500/25 blur-lg pointer-events-none"
                  style={{ transform: "translateZ(5px)" }}
                />

                {/* Layer 2: 3D Animated Floating Robot Companion */}
                <div
                  className="absolute"
                  style={{
                    left: "53%",
                    top: "0%",
                    width: "29%",
                    aspectRatio: "712/848",
                    transformStyle: "preserve-3d",
                    transform: "translateZ(45px)",
                    zIndex: 25,
                  }}
                >
                  <motion.div
                    animate={{
                      y: isRobotHovered ? -10 : [-7, 7, -7],
                      rotateZ: isRobotHovered ? 2.5 : [-2, 2.5, -2],
                      scale: isRobotHovered ? 1.06 : [1, 1.025, 1],
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
                    {/* Floating Soft Ambient Glow behind the robot */}
                    <motion.div
                      animate={{
                        scale: [0.9, 1.15, 0.9],
                        opacity: [0.4, 0.75, 0.4],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-full bg-cyan-400/25 blur-xl pointer-events-none"
                    />

                    {/* Isolated 3D Transparent Robot Asset */}
                    <div className="relative w-full h-full">
                      <Image
                        src="/hero/hero_robot_character.png"
                        alt="ZetasBuild 3D Animated Robot Companion"
                        fill
                        priority
                        sizes="(max-width: 1024px) 25vw, 180px"
                        className="object-contain drop-shadow-[0_12px_24px_rgba(30,58,138,0.22)] transition-transform duration-300 group-hover:brightness-105"
                      />

                      {/* Interactive greeting speech bubble on hover */}
                      {isRobotHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-cyan-200/90 rounded-full px-3 py-1 shadow-xl shadow-cyan-500/20 flex items-center gap-1.5 whitespace-nowrap pointer-events-none z-30"
                        >
                          <Bot className="w-3.5 h-3.5 text-cyan-600" />
                          <span className="text-[11px] font-bold text-slate-800">
                            Hello! Let&apos;s Build
                          </span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Layer 3: Floating 3D Service Badges Collection */}
                {/* Badge 1: Custom Development (Top Left) */}
                <motion.div
                  className="absolute cursor-pointer"
                  style={{
                    top: "6%",
                    left: "1%",
                    width: "31%",
                    aspectRatio: "906/350",
                    transformStyle: "preserve-3d",
                    transform: "translateZ(38px)",
                    zIndex: 20,
                  }}
                  animate={{
                    y: [-6, 6, -6],
                    rotateZ: [-1, 1.2, -1],
                  }}
                  transition={{
                    duration: 4.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0,
                  }}
                  whileHover={{
                    scale: 1.07,
                    y: -8,
                    transition: { duration: 0.25 },
                  }}
                >
                  <Image
                    src="/hero/hero_badge_custom_dev.png"
                    alt="Custom Development - Web & Mobile Apps"
                    fill
                    priority
                    sizes="(max-width: 1024px) 30vw, 200px"
                    className="object-contain drop-shadow-[0_12px_24px_rgba(15,23,42,0.14)]"
                  />
                </motion.div>

                {/* Badge 2: AI & ML (Bottom Left) */}
                <motion.div
                  className="absolute cursor-pointer"
                  style={{
                    top: "32%",
                    left: "-5%",
                    width: "26%",
                    aspectRatio: "973/448",
                    transformStyle: "preserve-3d",
                    transform: "translateZ(42px)",
                    zIndex: 22,
                  }}
                  animate={{
                    y: [6, -6, 6],
                    rotateZ: [1.2, -1.2, 1.2],
                  }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.7,
                  }}
                  whileHover={{
                    scale: 1.07,
                    y: -8,
                    transition: { duration: 0.25 },
                  }}
                >
                  <Image
                    src="/hero/hero_badge_ai_ml.png"
                    alt="AI & ML - Smarter Solutions"
                    fill
                    priority
                    sizes="(max-width: 1024px) 25vw, 175px"
                    className="object-contain drop-shadow-[0_12px_24px_rgba(15,23,42,0.14)]"
                  />
                </motion.div>

                {/* Badge 3: UI/UX Design (Top Right) */}
                <motion.div
                  className="absolute cursor-pointer"
                  style={{
                    top: "13%",
                    right: "0%",
                    width: "31%",
                    aspectRatio: "1032/464",
                    transformStyle: "preserve-3d",
                    transform: "translateZ(40px)",
                    zIndex: 20,
                  }}
                  animate={{
                    y: [-5, 7, -5],
                    rotateZ: [1, -1.2, 1],
                  }}
                  transition={{
                    duration: 4.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.35,
                  }}
                  whileHover={{
                    scale: 1.07,
                    y: -8,
                    transition: { duration: 0.25 },
                  }}
                >
                  <Image
                    src="/hero/hero_badge_ui_ux.png"
                    alt="UI/UX Design - Better Experiences"
                    fill
                    priority
                    sizes="(max-width: 1024px) 30vw, 200px"
                    className="object-contain drop-shadow-[0_12px_24px_rgba(15,23,42,0.14)]"
                  />
                </motion.div>

                {/* Badge 4: Web Security (Bottom Right) */}
                <motion.div
                  className="absolute cursor-pointer"
                  style={{
                    top: "42%",
                    right: "-4%",
                    width: "28%",
                    aspectRatio: "905/414",
                    transformStyle: "preserve-3d",
                    transform: "translateZ(35px)",
                    zIndex: 22,
                  }}
                  animate={{
                    y: [5, -7, 5],
                    rotateZ: [-1.2, 1.2, -1.2],
                  }}
                  transition={{
                    duration: 5.0,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.1,
                  }}
                  whileHover={{
                    scale: 1.07,
                    y: -8,
                    transition: { duration: 0.25 },
                  }}
                >
                  <Image
                    src="/hero/hero_badge_web_security.png"
                    alt="Web Security - Safe & Reliable"
                    fill
                    priority
                    sizes="(max-width: 1024px) 28vw, 180px"
                    className="object-contain drop-shadow-[0_12px_24px_rgba(15,23,42,0.14)]"
                  />
                </motion.div>

                {/* Layer 4: Floating 3D Crystal Cubes */}
                {/* Cube 1: Top-Center drifting */}
                <motion.div
                  className="absolute pointer-events-none"
                  style={{
                    top: "7%",
                    left: "38%",
                    width: "4.5%",
                    aspectRatio: "604/712",
                    transform: "translateZ(55px)",
                    zIndex: 18,
                  }}
                  animate={{
                    y: [-4, 5, -4],
                    rotate: [-3, 4, -3],
                  }}
                  transition={{
                    duration: 5.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                >
                  <Image
                    src="/hero/hero_cube_3d.png"
                    alt="Floating 3D Crystal Cube"
                    fill
                    sizes="35px"
                    className="object-contain drop-shadow-[0_8px_16px_rgba(0,180,255,0.3)]"
                  />
                </motion.div>

                {/* Cube 2: Bottom-Right drifting */}
                <motion.div
                  className="absolute pointer-events-none"
                  style={{
                    top: "62%",
                    right: "6%",
                    width: "5%",
                    aspectRatio: "604/712",
                    transform: "translateZ(50px)",
                    zIndex: 18,
                  }}
                  animate={{
                    y: [5, -5, 5],
                    rotate: [4, -4, 4],
                  }}
                  transition={{
                    duration: 4.9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                >
                  <Image
                    src="/hero/hero_cube_3d.png"
                    alt="Floating 3D Crystal Cube"
                    fill
                    sizes="40px"
                    className="object-contain drop-shadow-[0_8px_16px_rgba(0,180,255,0.3)]"
                  />
                </motion.div>
              </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}
