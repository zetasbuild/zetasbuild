"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Layers,
  Database,
  Cloud,
  Cpu,
  Server,
  Sparkles,
  Zap,
} from "lucide-react";

export function TechnologiesSection() {
  const [filter, setFilter] = useState("all");

  const technologies = [
    {
      name: "Next.js",
      role: "Fullstack React Framework",
      category: "frontend",
      badge: "v16 / App Router",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 180 180" fill="none">
          <mask id="mask0_next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
            <circle cx="90" cy="90" r="90" fill="black" />
          </mask>
          <g mask="url(#mask0_next)">
            <circle cx="90" cy="90" r="90" fill="black" />
            <path d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="url(#paint0_linear_next)" />
            <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_next)" />
          </g>
          <defs>
            <linearGradient id="paint0_linear_next" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear_next" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "React",
      role: "Frontend UI Library",
      category: "frontend",
      badge: "v19 / Components",
      svg: (
        <svg className="w-8 h-8 text-[#00D8FF]" viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
          <g stroke="#00D8FF" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: "Node.js",
      role: "Backend Runtime",
      category: "backend",
      badge: "High Concurrency",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 256 289" fill="none">
          <path d="M128 0L0 74.24V214.76L128 289L256 214.76V74.24L128 0Z" fill="#339933" />
          <path d="M128 28.5L24 88.66V200.34L128 260.5L232 200.34V88.66L128 28.5Z" fill="#68A063" />
          <path d="M128 144.5V260.5L232 200.34V88.66L128 144.5Z" fill="#339933" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      role: "Type-Safe Architecture",
      category: "language",
      badge: "Strict Typing",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 256 256" fill="none">
          <rect width="256" height="256" rx="32" fill="#3178C6" />
          <path d="M150.9 122.9C150.9 110.8 159.2 103.7 172.9 103.7C183.4 103.7 190.8 107.5 194.7 110.4L188.7 125.8C184.8 123.1 179.6 120.7 173.7 120.7C167.9 120.7 165.2 123.6 165.2 127.3C165.2 131.6 168.3 134.4 177.3 138.8C191.6 145.7 197.6 153.3 197.6 166.4C197.6 180.8 186.7 188.9 171.1 188.9C158.8 188.9 149.7 184.7 145.4 181.1L151.7 165.4C156.4 169.1 163.6 172.2 170.8 172.2C177.4 172.2 182.8 168.9 182.8 163.3C182.8 158.4 179.2 155.6 170.4 151.2C157.1 144.4 150.9 136.7 150.9 122.9Z" fill="white" />
          <path d="M125.5 105.4H63.6V121.7H86.2V187.3H102.9V121.7H125.5V105.4Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Firebase",
      role: "Cloud Platform & Auth",
      category: "backend",
      badge: "Real-time Sync",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 256 351" fill="none">
          <path d="M0 282.8L2.4 280.9L99.8 183.5L40.2 71.9C37.6 67 43.8 62.4 47.9 66.2L127.5 141.4L0 282.8Z" fill="#FFA000" />
          <path d="M145.6 158.4L183.5 120.5L166.9 17.5C165.2 7.1 151.7 4.1 145.8 12.8L108.9 67.5L145.6 158.4Z" fill="#F57C00" />
          <path d="M1.9 285.4L121.8 351.2C125.6 353.3 130.3 353.3 134.1 351.2L254.1 285.4L145.6 158.4L1.9 285.4Z" fill="#FFCA28" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      role: "NoSQL Document Database",
      category: "database",
      badge: "Flexible Schema",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 256 573" fill="none">
          <path d="M117.8 565.4C122.9 570 128.8 572.7 134.6 572.7C136.6 572.7 138.6 572.3 140.6 571.4L140.7 571.3C143.6 570.1 146.4 568 148.4 565.4C188.7 514.8 256 384.6 256 261.2C256 123.6 195.4 47.5 144.5 3.3C137.9 -2.4 128.4 -0.5 124.2 7.2L124.1 7.4C118.9 16.9 119.5 28.8 125.6 37.6C125.8 37.9 126 38.2 126.3 38.6C147.1 66.9 174.9 133 174.9 233.1C174.9 334.3 133.7 433.8 117.8 565.4Z" fill="#13AA52" />
          <path d="M125.4 1.5C125.1 1.7 124.7 1.9 124.4 2.2C73.4 46.4 12.8 122.5 12.8 260.1C12.8 383.5 80.1 513.7 120.4 564.3C122.4 566.9 125.2 569 128.1 570.2C128.5 570.4 128.9 570.5 129.3 570.7L129.3 1.5H125.4Z" fill="#116149" />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      role: "Relational Enterprise DB",
      category: "database",
      badge: "ACID Compliant",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 256 264" fill="none">
          <path d="M128 0C57.3 0 0 57.3 0 128C0 198.7 57.3 256 128 256C198.7 256 256 198.7 256 128C256 57.3 198.7 0 128 0Z" fill="#336791" />
          <path d="M188 128C188 95 161 68 128 68C95 68 68 95 68 128C68 161 95 188 128 188C161 188 188 161 188 128Z" fill="white" />
          <circle cx="128" cy="128" r="42" fill="#336791" />
        </svg>
      ),
    },
    {
      name: "Cloud & AWS",
      role: "Edge Infrastructure & CI/CD",
      category: "cloud",
      badge: "99.99% Availability",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 256 154" fill="none">
          <path d="M128 140C72.5 140 26.6 109.8 1.4 67.2C-0.5 64 2 59.8 5.7 61.8C62.4 92.4 127.3 95.7 186.2 71.3C188.6 70.3 190.9 72.8 189.5 75C171.6 103.5 150.3 140 128 140Z" fill="#FF9900" />
          <path d="M200 48C218 48 233 63 233 81C233 99 218 114 200 114C198 114 196 113.8 194 113.4C192 119.5 186 124 179 124C170 124 163 117 163 108C163 107.5 163 107 163.1 106.5C158.4 103.8 155 98.7 155 93C155 84.7 161.7 78 170 78C171.5 78 173 78.2 174.4 78.6C178.6 61.3 194.2 48 213 48H200Z" fill="#232F3E" />
        </svg>
      ),
    },
  ];

  const filteredTechs =
    filter === "all"
      ? technologies
      : technologies.filter((t) => t.category === filter);

  return (
    <section id="technologies" className="py-20 md:py-28 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2.5 block">
              OUR TECHNOLOGIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Built With Modern Technology
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
              We use the latest technologies and tools to build fast, secure and
              scalable solutions.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Tech" },
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "database", label: "Database" },
              { id: "cloud", label: "Cloud & DevOps" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  filter === f.id
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredTechs.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110 shadow-2xs">
                {tech.svg}
              </div>

              <h3 className="mt-4 text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {tech.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                {tech.role}
              </p>

              <span className="mt-4 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-50 text-indigo-600 border border-indigo-100">
                {tech.badge}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
