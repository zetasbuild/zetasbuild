"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  HeartHandshake,
  Globe2,
  ChevronRight,
  Globe,
  Smartphone,
  Bot,
  Palette,
  Code2,
} from "lucide-react";

export function ContactHeroSection() {
  const valuePills = [
    {
      title: "Quick Response",
      sub: "Within 24 hours",
      icon: Zap,
      color: "text-blue-600 bg-blue-50 border-blue-200/60",
    },
    {
      title: "Friendly Support",
      sub: "Real People",
      icon: HeartHandshake,
      color: "text-purple-600 bg-purple-50 border-purple-200/60",
    },
    {
      title: "Global Collaboration",
      sub: "Anywhere, Anytime",
      icon: Globe2,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200/60",
    },
  ];

  const floatingServices = [
    { label: "Web Development", icon: Globe },
    { label: "Mobile Apps", icon: Smartphone },
    { label: "AI & ML", icon: Bot },
    { label: "UI/UX Design", icon: Palette },
    { label: "Custom Solutions", icon: Code2 },
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
          <span className="text-indigo-600 font-semibold">Contact Us</span>
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
                CONTACT US
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]"
            >
              Let&apos;s Build Something <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Great Together.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal"
            >
              Have a project in mind, a question, or just want to say hello?
              We&apos;d love to hear from you. Get in touch with our team and let&apos;s
              turn your ideas into reality.
            </motion.p>

            {/* 3 Value Proposition Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl pt-6 border-t border-slate-100"
            >
              {valuePills.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs"
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 ${item.color}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: 3D Visual with Floating Translucent Services Plaque */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl p-2 bg-gradient-to-b from-indigo-50/60 to-white/90 border border-slate-200/80 shadow-2xl shadow-indigo-500/10 group"
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src="/about/hero-office.jpg"
                  alt="ZetasBuild Contact Office Visual"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Floating Vertical Translucent Service Pill Card on the right */}
              <div className="absolute top-6 -right-3 sm:-right-5 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 shadow-xl space-y-2 pointer-events-none animate-float">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">
                  Our Focus
                </div>
                {floatingServices.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <div
                      key={svc.label}
                      className="flex items-center gap-2 text-xs font-medium text-slate-700 px-2 py-1 rounded-lg bg-slate-50"
                    >
                      <Icon className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{svc.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Floating Handwritten Script Overlay Note at Top Left */}
              <div className="absolute -top-6 left-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl px-4 py-2 shadow-xl select-none animate-float-reverse">
                <div className="font-serif italic text-xs sm:text-sm text-slate-800 leading-snug">
                  <div>Have an idea?</div>
                  <div className="text-indigo-600 font-bold">Let&apos;s talk!</div>
                </div>
                <svg
                  className="w-10 h-5 text-indigo-500 mt-1"
                  viewBox="0 0 40 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M4 4 C 18 16, 26 4, 34 16 M28 14 L34 16 L34 10" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
