"use client";

import React from "react";
import Image from "next/image";
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
      iconGradient: "from-[#2563EB] to-[#1D4ED8] shadow-blue-500/25",
      arrowBg: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      numColor: "text-[#C7D7F9] group-hover:text-blue-300",
      graphic: "/hero/service_art_1_final.png",
      graphicAlt: "3D Website Browser & Globe Illustration",
    },
    {
      num: "02",
      title: "Mobile Application Development",
      desc: "Native and cross-platform apps for everyday business needs.",
      icon: Smartphone,
      iconGradient: "from-[#9333EA] to-[#7E22CE] shadow-purple-500/25",
      arrowBg: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
      numColor: "text-[#DDC8F8] group-hover:text-purple-300",
      graphic: "/hero/service_art_2_final.png",
      graphicAlt: "3D Dual Smartphones App Showcase Illustration",
    },
    {
      num: "03",
      title: "AI & ML Applications",
      desc: "Smart automation that helps adapt and solve real problems.",
      icon: Bot,
      iconGradient: "from-[#10B981] to-[#059669] shadow-emerald-500/25",
      arrowBg: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
      numColor: "text-[#BFE9E0] group-hover:text-emerald-300",
      graphic: "/hero/service_art_3_final.png",
      graphicAlt: "3D Cute Robot with AI Microchip Illustration",
    },
    {
      num: "04",
      title: "UI/UX Design",
      desc: "Beautiful intuitive designs that users love.",
      icon: Palette,
      iconGradient: "from-[#F59E0B] to-[#D97706] shadow-amber-500/25",
      arrowBg: "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white",
      numColor: "text-[#FCE5B5] group-hover:text-amber-300",
      graphic: "/hero/service_art_4_final.png",
      graphicAlt: "3D Design Canvas, Palette & Stylus Illustration",
    },
    {
      num: "05",
      title: "Custom Software Solutions",
      desc: "Tailored software for your unique business needs.",
      icon: Code2,
      iconGradient: "from-[#4F46E5] to-[#4338CA] shadow-indigo-500/25",
      arrowBg: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
      numColor: "text-[#CCD2F8] group-hover:text-indigo-300",
      graphic: "/hero/service_art_5_final.png",
      graphicAlt: "3D Desktop Screen with Code IDE and Gears",
    },
    {
      num: "06",
      title: "E-commerce Development",
      desc: "Scalable online stores built for conversions.",
      icon: ShoppingBag,
      iconGradient: "from-[#EC4899] to-[#E11D48] shadow-pink-500/25",
      arrowBg: "bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
      numColor: "text-[#FCCDE0] group-hover:text-pink-300",
      graphic: "/hero/service_art_6_final.png",
      graphicAlt: "3D Shopping Cart, Bags & Mobile Store Illustration",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-28 relative bg-gradient-to-b from-[#F9FBFE] via-white to-[#F8FAFC] overflow-hidden"
    >
      {/* Decorative ambient background wave matching reference image */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft bottom-left violet/blue curved swoosh */}
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-[#6366F1]/20 via-[#8B5CF6]/15 to-transparent blur-3xl" />
        {/* Top-right soft lavender ambient glow */}
        <div className="absolute -top-20 -right-20 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#3B82F6]/15 via-[#A855F7]/10 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Left (Title/Sub) + Center-Right (3D Pedestal) + Right (View All Services) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-14 lg:mb-16">
          {/* Header Left: Eyebrow, Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 max-w-xl text-left"
          >
            {/* Eyebrow badge with pink dash */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-pink-500 font-bold text-lg select-none">—</span>
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50/90 border border-indigo-200/60 shadow-2xs">
                OUR SERVICES
              </span>
            </div>

            {/* Headline: What We Build */}
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-[#0B132B] tracking-tight leading-[1.12]">
              What We{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0062FF] to-[#8B5CF6]">
                Build
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We turn your ideas into powerful digital products with modern technologies,
              creative design and robust coded business value.
            </p>
          </motion.div>

          {/* Header Right: 3D Pedestal Visual & "View All Services ->" Pill Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-end gap-6 sm:gap-8 w-full lg:w-auto"
          >
            {/* 3D Pedestal with laptop, smartphone, succulent & tags */}
            <div className="relative w-[280px] h-[145px] select-none pointer-events-none drop-shadow-md">
              <Image
                src="/hero/services_header_clean.png"
                alt="ZetasBuild What We Build 3D Tech Workspace"
                width={280}
                height={145}
                priority
                className="object-contain"
              />
            </div>

            {/* "View All Services ->" Pill Button */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#0066FF] to-[#8B5CF6] shadow-md shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm whitespace-nowrap group shrink-0"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* 6 Services Cards Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
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
                className="relative rounded-[28px] p-6 sm:p-7 bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(180,200,240,0.45)] hover:border-indigo-200 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between overflow-hidden min-h-[210px]"
              >
                {/* Top Row: Squircle Icon + Ghost Number */}
                <div className="flex items-start justify-between relative z-10">
                  <div
                    className={`w-12 h-12 rounded-[18px] flex items-center justify-center text-white bg-gradient-to-br shadow-md transition-transform duration-300 group-hover:scale-105 ${svc.iconGradient}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span
                    className={`text-3xl font-black select-none pointer-events-none transition-colors duration-300 ${svc.numColor}`}
                  >
                    {svc.num}
                  </span>
                </div>

                {/* Middle Content */}
                <div className="mt-4 relative z-10 max-w-[190px] sm:max-w-[210px]">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug tracking-tight">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    {svc.desc}
                  </p>
                </div>

                {/* Bottom Row: Circular Arrow Button */}
                <div className="mt-5 relative z-10 flex items-center justify-start">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${svc.arrowBg}`}
                  >
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Right 3D Illustration */}
                <div className="absolute right-0 bottom-0 w-[140px] sm:w-[150px] h-[115px] sm:h-[125px] pointer-events-none select-none transition-transform duration-500 ease-out group-hover:scale-108 group-hover:-translate-y-1 rounded-br-[28px] overflow-hidden">
                  <Image
                    src={svc.graphic}
                    alt={svc.graphicAlt}
                    fill
                    sizes="(max-width: 768px) 140px, 150px"
                    className="object-contain object-bottom-right"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
