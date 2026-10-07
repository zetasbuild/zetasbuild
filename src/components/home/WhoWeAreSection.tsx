"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Cpu,
  Smile,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface WhoWeAreSectionProps {
  onOpenInquiry?: () => void;
}

export function WhoWeAreSection({ onOpenInquiry }: WhoWeAreSectionProps) {
  const pillars = [
    {
      title: "Strategic Thinking",
      desc: "Turning business goals into executable plans",
      icon: Compass,
      iconColor: "text-blue-600 bg-blue-50 border-blue-200/60",
    },
    {
      title: "Modern Engineering",
      desc: "Clean systems, modern technology stacks",
      icon: Cpu,
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-200/60",
    },
    {
      title: "User-Focused Design",
      desc: "Exceptional experiences for your users",
      icon: Smile,
      iconColor: "text-purple-600 bg-purple-50 border-purple-200/60",
    },
    {
      title: "Scalable Solutions",
      desc: "Built for today, ready for tomorrow",
      icon: TrendingUp,
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200/60",
    },
  ];

  return (
    <section id="who-we-are" className="py-20 md:py-28 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-3 block">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
                Technology built around{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                  your goals.
                </span>
              </h2>
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                ZetasBuild combines software development, modern design, and
                emerging technologies to create practical digital solutions that
                help businesses grow, scale and succeed in the digital world.
              </p>
            </motion.div>

            {/* 4 Feature Points Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/70 shadow-2xs hover:shadow-md hover:border-indigo-200 transition-all duration-300"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${item.iconColor}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10"
            >
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all text-sm group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Multi-Device 3D Isometric Visual */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl p-2 bg-gradient-to-b from-indigo-50/50 to-white/90 border border-slate-200/80 shadow-2xl shadow-indigo-500/10 group"
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src="/hero/who-we-are.jpg"
                  alt="ZetasBuild Multi-device Technology Architecture"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3.5 right-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-full px-4 py-1.5 shadow-lg flex items-center gap-2 animate-float">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span className="text-xs font-bold text-slate-800">
                  Better Software, Brighter Future
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
