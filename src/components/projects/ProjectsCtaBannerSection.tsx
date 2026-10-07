"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface ProjectsCtaBannerSectionProps {
  onOpenInquiry?: () => void;
}

export function ProjectsCtaBannerSection({
  onOpenInquiry,
}: ProjectsCtaBannerSectionProps) {
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
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
            <span className="text-xs font-semibold tracking-wider text-white">
              Ready to start your project?
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Let&apos;s Build Something <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Amazing Together.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Have a project in mind? We&apos;d love to hear from you. Get in
            touch and let&apos;s turn your ideas into powerful digital solutions.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all text-base group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating handwritten note in top right */}
      <div className="hidden lg:block absolute top-10 right-12 text-right select-none pointer-events-none opacity-90">
        <div className="font-serif italic text-sm text-slate-300 leading-snug">
          <div>Your Idea</div>
          <div className="text-indigo-400 font-semibold">Our Code</div>
          <div className="text-purple-300 font-bold">Real Impact.</div>
        </div>
        <svg
          className="w-10 h-6 text-indigo-400 mt-1 ml-auto"
          viewBox="0 0 40 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 4 C 18 18, 28 6, 36 20 M30 18 L36 20 L36 14" />
        </svg>
      </div>
    </section>
  );
}
