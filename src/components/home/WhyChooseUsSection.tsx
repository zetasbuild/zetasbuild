"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sliders,
  Sparkles,
  HeartHandshake,
  Zap,
  Layers,
  Headphones,
} from "lucide-react";

interface WhyChooseUsSectionProps {
  onOpenInquiry?: () => void;
}

export function WhyChooseUsSection({ onOpenInquiry }: WhyChooseUsSectionProps) {
  const reasons = [
    {
      num: "01",
      title: "Custom-Built Solutions",
      desc: "Tailored to your exact business needs without cookie-cutter templates.",
      icon: Sliders,
      color: "text-blue-600 bg-blue-50 border-blue-200/60",
    },
    {
      num: "02",
      title: "Modern Technology",
      desc: "Clean, maintainable code built with battle-tested modern frameworks.",
      icon: Sparkles,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200/60",
    },
    {
      num: "03",
      title: "User-Centered Design",
      desc: "Interfaces designed intuitively to boost customer retention and delight.",
      icon: HeartHandshake,
      color: "text-purple-600 bg-purple-50 border-purple-200/60",
    },
    {
      num: "04",
      title: "Performance Focused",
      desc: "Blazing fast load times, rigid SEO foundations, and bulletproof security.",
      icon: Zap,
      color: "text-amber-600 bg-amber-50 border-amber-200/60",
    },
    {
      num: "05",
      title: "Scalable Architecture",
      desc: "Engineered from day one to handle exponential traffic and data growth.",
      icon: Layers,
      color: "text-teal-600 bg-teal-50 border-teal-200/60",
    },
    {
      num: "06",
      title: "Long-Term Support",
      desc: "Continuous proactive monitoring, performance tuning, and agile updates.",
      icon: Headphones,
      color: "text-pink-600 bg-pink-50 border-pink-200/60",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 sticky top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2.5 block">
                WHY ZETASBUILD
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
                Why Businesses Choose{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  ZetasBuild
                </span>
              </h2>
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                We&apos;re more than just a development company. We&apos;re your
                long-term digital partner committed to sustainable business
                growth.
              </p>

              <div className="mt-8">
                <button
                  onClick={onOpenInquiry}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all text-sm group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 6 Points (2 columns x 3 rows) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 ${item.color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
