"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Users, Layers, ShieldCheck } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      value: "50+",
      label: "Digital Projects",
      icon: Rocket,
      iconColor: "text-blue-600 bg-blue-50 border-blue-200/60",
    },
    {
      value: "20+",
      label: "Businesses Supported",
      icon: Users,
      iconColor: "text-cyan-600 bg-cyan-50 border-cyan-200/60",
    },
    {
      value: "10+",
      label: "Technology Solutions",
      icon: Layers,
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-200/60",
    },
    {
      value: "100%",
      label: "Client-Focused Approach",
      icon: ShieldCheck,
      iconColor: "text-purple-600 bg-purple-50 border-purple-200/60",
    },
  ];

  return (
    <section className="relative -mt-6 sm:-mt-10 pb-16 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-900/5 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 sm:gap-4 ${
                  idx > 0 ? "pt-4 sm:pt-0 sm:pl-6 lg:pl-8" : ""
                } group transition-all duration-300 hover:translate-y-[-2px]`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border shadow-2xs transition-transform duration-300 group-hover:scale-110 ${stat.iconColor}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
