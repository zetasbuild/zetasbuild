"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";

interface ProjectDetailModalProps {
  project: any | null;
  onClose: () => void;
  onStartSimilar?: (projectTitle: string) => void;
}

export function ProjectDetailModal({
  project,
  onClose,
  onStartSimilar,
}: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/65 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 mb-6">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-200/60 mb-2">
            {project.category}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {project.title}
          </h3>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {project.details || project.desc}
          </p>

          {/* Stats */}
          {project.stats && (
            <div className="mt-6 grid grid-cols-2 gap-3">
              {project.stats.map((st: any) => (
                <div
                  key={st.label}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60"
                >
                  <div className="text-xl font-extrabold text-indigo-600">
                    {st.val}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => {
                onClose();
                onStartSimilar?.(project.title);
              }}
              className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all"
            >
              Start Similar Project
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
