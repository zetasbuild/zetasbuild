"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, HeartHandshake, Scale } from "lucide-react";

export function AboutValuesSection() {
  const values = [
    {
      title: "Innovation",
      desc: "We embrace new ideas and emerging technologies to stay ahead.",
      icon: Lightbulb,
      color: "text-blue-600 bg-blue-50 border-blue-200/60",
    },
    {
      title: "Quality",
      desc: "We focus on clean code, modern design and reliable solutions.",
      icon: ShieldCheck,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200/60",
    },
    {
      title: "Client Success",
      desc: "Your goals are our goals. We're committed to your growth.",
      icon: HeartHandshake,
      color: "text-purple-600 bg-purple-50 border-purple-200/60",
    },
    {
      title: "Integrity",
      desc: "We build trust through honesty, transparency and accountability.",
      icon: Scale,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200/60",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2.5 block">
              OUR VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              What Drives Us
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Our values are the foundation of everything we do — guiding our
              decisions, shaping our culture, and helping us deliver the best for
              our clients.
            </p>
          </motion.div>
        </div>

        {/* 4 Value Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 mb-5 ${val.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {val.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
