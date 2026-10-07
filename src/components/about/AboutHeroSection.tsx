"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";

interface AboutHeroSectionProps {
  onOpenInquiry?: () => void;
}

export function AboutHeroSection({ onOpenInquiry }: AboutHeroSectionProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="absolute top-10 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute top-20 right-10 w-[450px] h-[450px] rounded-full bg-purple-400/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
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
          <span className="text-indigo-600 font-semibold">About Us</span>
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
                ABOUT ZETASBUILD
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]"
            >
              We&apos;re More Than <br />
              Just a Tech Company. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                We Build Futures.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal"
            >
              ZetasBuild is a modern software and technology company focused on
              creating innovative digital solutions. We combine technology,
              creativity and strategy to help businesses achieve real growth in
              the digital world.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all text-base group"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-slate-700 bg-white border border-slate-200/90 shadow-2xs hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all text-base"
              >
                <span>Get in Touch</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Visual with office scene and floating blueprint notes */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl p-2 bg-gradient-to-b from-slate-100/60 to-white/90 border border-slate-200/80 shadow-2xl shadow-indigo-500/10 group"
            >
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src="/about/hero-office.jpg"
                  alt="ZetasBuild Innovation Office"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Floating Handwritten Blueprint Overlay */}
                <div className="absolute top-4 left-4 bg-slate-950/40 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 text-white shadow-xl">
                  <div className="text-[10px] font-mono tracking-wider text-indigo-300 uppercase">
                    Our Formula
                  </div>
                  <div className="mt-1 font-mono text-xs space-y-0.5 text-slate-100">
                    <div>Ideas</div>
                    <div className="text-indigo-300">→ Design</div>
                    <div className="text-cyan-300">→ Code</div>
                    <div className="text-purple-300 font-bold">→ Impact</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
