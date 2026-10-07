"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cloud,
  Compass,
  Map,
  Wrench,
  Rocket,
} from "lucide-react";

interface ServicesWhyAndApproachSectionProps {
  onOpenInquiry?: () => void;
}

export function ServicesWhyAndApproachSection({
  onOpenInquiry,
}: ServicesWhyAndApproachSectionProps) {
  const whyPoints = [
    "Experienced & skilled team",
    "On-time delivery",
    "Transparent communication",
    "Long-term support",
  ];

  const approaches = [
    {
      title: "Understand",
      desc: "We listen to your goals and challenges.",
      icon: Compass,
      color: "text-blue-600 bg-blue-50 border-blue-200/60",
    },
    {
      title: "Plan",
      desc: "We create a clear strategy and roadmap.",
      icon: Map,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200/60",
    },
    {
      title: "Build",
      desc: "We develop with best practices and modern technologies.",
      icon: Wrench,
      color: "text-purple-600 bg-purple-50 border-purple-200/60",
    },
    {
      title: "Launch",
      desc: "We deliver, support and grow together.",
      icon: Rocket,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200/60",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
          {/* Left Column: Dark Navy Card Container */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 rounded-3xl bg-[#091122] text-white p-7 sm:p-9 flex flex-col justify-between border border-slate-800 shadow-xl relative overflow-hidden group"
          >
            {/* Subtle corner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2.5 block">
                WHY CHOOSE US
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                More Than Just <br />
                Development.
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                We combine technology, creativity and strategy to deliver
                solutions that create real value. Our team is committed to
                quality, innovation and your long-term success.
              </p>

              {/* Checklist */}
              <div className="mt-6 space-y-3">
                {whyPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all text-xs sm:text-sm group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Center Column: Workspace Coding Desk Visual with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-xl flex items-center justify-center min-h-[380px]"
          >
            <Image
              src="/about/hero-office.jpg"
              alt="Developer workspace and clean code development"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[1px]" />

            {/* Top Floating Badge */}
            <div className="absolute top-5 inset-x-5 flex justify-center">
              <div className="bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl px-4 py-2 shadow-lg flex items-center gap-2.5 animate-float">
                <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Clean Code
                  </div>
                  <div className="text-xs font-extrabold text-slate-800">
                    Better Performance
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Floating Badge */}
            <div className="absolute bottom-5 inset-x-5 flex justify-center">
              <div className="bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl px-4 py-2 shadow-lg flex items-center gap-2.5 animate-float-reverse">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                  <Cloud className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Scalable Solutions
                  </div>
                  <div className="text-xs font-extrabold text-slate-800">
                    For Your Growth
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Our Approach */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 rounded-3xl bg-white border border-slate-200/80 p-7 sm:p-9 flex flex-col justify-between shadow-2xs"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2.5 block">
                OUR APPROACH
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Turning Ideas Into <br />
                Real Solutions
              </h3>

              <div className="mt-6 space-y-4">
                {approaches.map((app) => {
                  const Icon = app.icon;
                  return (
                    <div
                      key={app.title}
                      className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors"
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 ${app.color}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          {app.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                          {app.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
