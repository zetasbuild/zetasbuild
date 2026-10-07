"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Clock,
  MessageCircle,
  Laptop,
  Heart,
  MapPin,
  Sparkles,
} from "lucide-react";

export function ContactGlobalTeamSection() {
  const pillars = [
    {
      title: "Remote Work",
      sub: "Global Talent",
      icon: Globe,
      color: "text-blue-600 bg-blue-50 border-blue-200/60",
    },
    {
      title: "Flexible Time",
      sub: "Your Time Zone",
      icon: Clock,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200/60",
    },
    {
      title: "Direct Communication",
      sub: "No Middlemen",
      icon: MessageCircle,
      color: "text-purple-600 bg-purple-50 border-purple-200/60",
    },
  ];

  return (
    <section className="py-16 pb-28 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-xl shadow-slate-900/5 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          {/* Left Column: Stylized Blue World Map Graphic with Floating Badges */}
          <div className="lg:col-span-6 relative rounded-2xl bg-gradient-to-br from-blue-50/80 via-indigo-50/40 to-slate-50 border border-slate-200/60 p-6 sm:p-8 overflow-hidden min-h-[380px] flex items-center justify-center">
            {/* Minimalist World Map SVG Silhouette */}
            <svg
              className="w-full h-full text-blue-200/50 absolute inset-0"
              viewBox="0 0 1000 500"
              fill="currentColor"
            >
              {/* Simplified world continent contours */}
              <path d="M150,120 Q180,80 240,110 Q280,140 260,200 Q200,240 160,210 Z" />
              <path d="M220,260 Q280,240 320,320 Q300,420 250,450 Q200,380 220,260 Z" />
              <path d="M500,100 Q560,70 620,110 Q660,170 580,200 Q520,170 500,100 Z" />
              <path d="M520,220 Q600,200 640,300 Q600,400 540,360 Z" />
              <path d="M680,120 Q800,90 880,150 Q860,260 760,240 Q700,190 680,120 Z" />
              <path d="M780,320 Q860,300 900,380 Q840,430 780,380 Z" />
            </svg>

            {/* Floating Badge 1: Top Left - 100% Remote Team */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 shadow-md flex items-center gap-3 animate-float">
              <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Laptop className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">
                  100% Remote Team
                </div>
                <div className="text-[10px] text-slate-500">
                  Work from anywhere
                </div>
              </div>
            </div>

            {/* Floating Badge 2: Mid Left - Global Talent */}
            <div className="absolute top-1/2 -translate-y-1/2 left-6 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 shadow-md flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">
                  Global Talent
                </div>
                <div className="text-[10px] text-slate-500">
                  Skilled &amp; Experienced
                </div>
              </div>
            </div>

            {/* Floating Badge 3: Bottom Left - Flexible Support */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 shadow-md flex items-center gap-3 animate-float-reverse">
              <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">
                  Flexible Support
                </div>
                <div className="text-[10px] text-slate-500">
                  Across Time Zones
                </div>
              </div>
            </div>

            {/* Location Pin: ZetasBuild Sri Lanka */}
            <div className="absolute top-1/2 right-12 -translate-y-6 flex flex-col items-center">
              <div className="bg-white/95 backdrop-blur-md border border-indigo-200 rounded-xl px-3 py-1.5 shadow-lg flex items-center gap-2 mb-1.5">
                <div className="relative w-4 h-4">
                  <Image
                    src="/brand/logo.png"
                    alt="ZB"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-bold text-slate-900">
                  ZetasBuild
                </span>
                <span className="text-[10px] text-indigo-600 font-semibold bg-indigo-50 px-1.5 py-0.5 rounded">
                  Sri Lanka
                </span>
              </div>
              <div className="w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md animate-bounce">
                <MapPin className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & 3 Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2.5 block">
                OUR TEAM
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
                A Global Team <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Building Your Vision
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                We are a remote-first company with talented developers,
                designers and strategists from around the world. No physical
                office, just a dedicated team focused on your success.
              </p>

              {/* 3 Pillars */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {pillars.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70"
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center border mb-2.5 ${item.color}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-bold text-slate-900">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        {item.sub}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Handwritten cursive note at bottom */}
            <div className="mt-10 pt-4 border-t border-slate-100">
              <div className="font-serif italic text-base sm:text-lg text-slate-700 tracking-tight select-none">
                &ldquo;Different places. Same goal.{" "}
                <span className="font-semibold text-indigo-600">
                  Your success.&rdquo;
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
