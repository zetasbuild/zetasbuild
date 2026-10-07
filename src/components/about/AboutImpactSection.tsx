"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Users, Code, Heart } from "lucide-react";

export function AboutImpactSection() {
  const impactStats = [
    {
      value: "50+",
      label: "Projects Delivered",
      icon: Rocket,
    },
    {
      value: "20+",
      label: "Happy Clients",
      icon: Users,
    },
    {
      value: "10+",
      label: "Technologies Used",
      icon: Code,
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      icon: Heart,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-r from-[#0F172A] via-[#1E1B4B] to-[#0F172A] text-white overflow-hidden">
      {/* Background glowing wave mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 block">
              OUR IMPACT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Numbers That <br />
              Tell Our Story
            </h2>
          </motion.div>

          {/* Right: 4 stats in a row */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {impactStats.map((st, idx) => {
              const Icon = st.icon;
              return (
                <motion.div
                  key={st.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                    idx > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-indigo-300 mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {st.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                    {st.label}
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
