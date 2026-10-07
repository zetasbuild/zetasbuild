"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Palette,
  Smartphone,
  Bot,
} from "lucide-react";

interface AboutTeamSectionProps {
  onOpenInquiry?: () => void;
}

export function AboutTeamSection({ onOpenInquiry }: AboutTeamSectionProps) {
  const team = [
    {
      role: "Full Stack Developer",
      subtitle: "Builds the core",
      image: "/team/member-1.jpg",
      icon: Code2,
      color: "text-blue-600 bg-blue-50 border-blue-200/60",
    },
    {
      role: "UI/UX Designer",
      subtitle: "Designs experiences",
      image: "/team/member-2.jpg",
      icon: Palette,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200/60",
    },
    {
      role: "Mobile App Developer",
      subtitle: "Builds for mobile",
      image: "/team/member-3.webp",
      icon: Smartphone,
      color: "text-purple-600 bg-purple-50 border-purple-200/60",
    },
    {
      role: "AI/ML Engineer",
      subtitle: "Builds intelligent solutions",
      image: "/team/member-4.jpg",
      icon: Bot,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200/60",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2.5 block">
              OUR TEAM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
              Talented People.{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Real Impact.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              We&apos;re a team of developers, designers, problem-solvers and
              dreamers. Each member brings unique skills, passion and experience
              to create something meaningful.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all text-sm group"
            >
              <span>Meet Our Team</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* 4 Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Portrait photo */}
                <div className="relative aspect-[3/4] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.role}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Role Pill Card */}
                <div className="p-4 sm:p-5 flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 transition-transform group-hover:scale-110 ${member.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {member.role}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {member.subtitle}
                    </p>
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
