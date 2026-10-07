"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";

interface ServicesCtaBannerSectionProps {
  onOpenInquiry?: () => void;
}

export function ServicesCtaBannerSection({
  onOpenInquiry,
}: ServicesCtaBannerSectionProps) {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-slate-900">
      {/* Background panoramic mountain image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/cta-mountains.jpg"
          alt="Atmospheric sunset mountains"
          fill
          className="object-cover object-center opacity-40 mix-blend-screen scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-xs font-semibold tracking-wider text-white uppercase">
              LET&apos;S WORK TOGETHER
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Have a project in mind?
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            We&apos;d love to hear from you. Let&apos;s turn your ideas into powerful
            digital solutions with modern technology.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all text-base group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all text-base"
            >
              <MessageSquare className="w-4 h-4 text-indigo-300" />
              <span>Contact Us</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
