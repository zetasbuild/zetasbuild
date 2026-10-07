"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function ServicesTechSection() {
  const techs = [
    { name: "Next.js", badge: "v16 / App Router" },
    { name: "React", badge: "v19 / Components" },
    { name: "Node.js", badge: "Runtime" },
    { name: "TypeScript", badge: "Strict Typing" },
    { name: "Firebase", badge: "Cloud & Auth" },
    { name: "MongoDB", badge: "NoSQL DB" },
    { name: "PostgreSQL", badge: "Relational DB" },
    { name: "AI / ML", badge: "Neural & LLM" },
    { name: "Cloud", badge: "Edge / AWS" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Title & Tech Pills */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2.5 block">
                OUR TECHNOLOGIES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
                Built With Modern Technology
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                We use the latest and most reliable technologies to build
                scalable, secure and high-performance solutions.
              </p>
            </motion.div>

            {/* Badges Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {techs.map((tech) => (
                <div
                  key={tech.name}
                  className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-indigo-300 hover:bg-white transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform" />
                  <span className="text-xs font-bold text-slate-800">
                    {tech.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium border-l border-slate-200 pl-2">
                    {tech.badge}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: 3D Stacked Tech Visual with Handwritten Arrow */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl p-2 bg-gradient-to-b from-indigo-50/50 to-white/90 border border-slate-200/80 shadow-2xl shadow-indigo-500/10 group"
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
                <Image
                  src="/services/ZetasBuild_engineering.webp"
                  alt="ZetasBuild 3D Engineering Architecture"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Handwritten note at top right with arrow */}
              <div className="absolute -top-5 right-2 sm:right-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl px-4 py-2 shadow-xl select-none animate-float">
                <div className="font-serif italic text-xs sm:text-sm text-slate-800 leading-snug">
                  <div>Modern Tech.</div>
                  <div className="text-indigo-600 font-bold">Real Impact.</div>
                </div>
                <svg
                  className="w-10 h-6 text-indigo-500 mt-1 ml-auto"
                  viewBox="0 0 40 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M4 4 C 18 18, 28 6, 36 20 M30 18 L36 20 L36 14" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
