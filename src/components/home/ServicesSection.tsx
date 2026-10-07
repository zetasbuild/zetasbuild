"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Bot,
  Palette,
  Code2,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const services = [
    {
      num: "01",
      title: "Website Development",
      desc: "Modern, fast and SEO-friendly websites that make an impact.",
      icon: Globe,
      color: "text-blue-600 bg-blue-50 border-blue-200/60",
      accent: "hover:border-blue-400 group-hover:text-blue-600",
    },
    {
      num: "02",
      title: "Mobile Application Development",
      desc: "Native and cross-platform apps for everyday user value.",
      icon: Smartphone,
      color: "text-purple-600 bg-purple-50 border-purple-200/60",
      accent: "hover:border-purple-400 group-hover:text-purple-600",
    },
    {
      num: "03",
      title: "AI & ML Applications",
      desc: "Smart automation that helps adapt and solve real problems.",
      icon: Bot,
      color: "text-teal-600 bg-teal-50 border-teal-200/60",
      accent: "hover:border-teal-400 group-hover:text-teal-600",
    },
    {
      num: "04",
      title: "UI/UX Design",
      desc: "Beautiful, intuitive designs that users love.",
      icon: Palette,
      color: "text-amber-600 bg-amber-50 border-amber-200/60",
      accent: "hover:border-amber-400 group-hover:text-amber-600",
    },
    {
      num: "05",
      title: "Custom Software Solutions",
      desc: "Tailored software for your unique business needs.",
      icon: Code2,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200/60",
      accent: "hover:border-indigo-400 group-hover:text-indigo-600",
    },
    {
      num: "06",
      title: "E-commerce Development",
      desc: "Scalable online stores built for conversions.",
      icon: ShoppingBag,
      color: "text-pink-600 bg-pink-50 border-pink-200/60",
      accent: "hover:border-pink-400 group-hover:text-pink-600",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2.5 block">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              What We Build
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
              We turn your ideas into powerful digital products with modern
              technologies, creative design and robust coded business value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => onSelectService?.("All Services")}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 group transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => onSelectService?.(svc.title)}
                className={`relative rounded-3xl p-7 bg-white border border-slate-200/80 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between ${svc.accent}`}
              >
                <div>
                  {/* Top: Icon + Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 ${svc.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 font-mono tracking-wider">
                      {svc.num}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                {/* Bottom Arrow Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end">
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all duration-200">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
