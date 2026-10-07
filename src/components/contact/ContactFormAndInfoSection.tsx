"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export function ContactFormAndInfoSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Website Development");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep state or reset after 4s
    }, 4000);
  };

  const contactChannels = [
    {
      title: "Email Us",
      val: "info@zetasbuild.com",
      href: "mailto:info@zetasbuild.com",
      sub: "We reply within 24 hours",
      icon: Mail,
      color: "text-blue-600 bg-blue-50 border-blue-200/60",
    },
    {
      title: "Call Us",
      val: "+94 77 067 7753",
      href: "tel:+94770677753",
      sub: "Mon - Fri, 9:00 AM - 6:00 PM",
      icon: Phone,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200/60",
    },
    {
      title: "WhatsApp",
      val: "+94 77 067 7753",
      href: "https://wa.me/94770677753?text=Hi%20ZetasBuild,%20I%20have%20a%20project%20inquiry",
      sub: "Chat with us directly",
      icon: MessageSquare,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200/60",
    },
    {
      title: "Our Location",
      val: "Sri Lanka",
      href: "#",
      sub: "(Remote Team — No Physical Office)",
      icon: MapPin,
      color: "text-purple-600 bg-purple-50 border-purple-200/60",
    },
  ];

  return (
    <section className="py-12 pb-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/80 p-7 sm:p-10 shadow-xl shadow-slate-900/5"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2 block">
              GET IN TOUCH
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Send Us a Message
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>

            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Message Sent Successfully!
                </h3>
                <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-slate-900">{name || "friend"}</span>! We have received your project details and will be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 text-sm"
                    />
                  </div>
                </div>

                {/* Phone & Service Interested In */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+94 77 123 4567"
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Service Interested In *
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 text-sm text-slate-800"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Mobile Application">Mobile Application</option>
                      <option value="AI & ML Application">AI & ML Application</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Custom Software">Custom Software Solutions</option>
                      <option value="E-commerce">E-commerce Development</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Your Message *</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project, idea or requirements..."
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 text-sm resize-none"
                  />
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all text-sm group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href="https://wa.me/94770677753?text=Hi%20ZetasBuild,%20I%20have%20a%20project%20inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    <span>Or Contact Us on WhatsApp</span>
                    <span className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                      💬
                    </span>
                  </a>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right Column: Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 rounded-3xl bg-slate-50/60 border border-slate-200/80 p-7 sm:p-9 shadow-lg relative flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Contact Information
              </h3>
              <p className="mt-1.5 text-xs text-slate-500">
                Reach out to us through any of the following channels.
              </p>

              {/* 4 Channels */}
              <div className="mt-8 space-y-6">
                {contactChannels.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      className="flex items-start gap-4 p-2 rounded-2xl hover:bg-white transition-all group"
                    >
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center border shrink-0 transition-transform group-hover:scale-110 ${item.color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          {item.title}
                        </div>
                        <div className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors mt-0.5">
                          {item.val}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {item.sub}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Follow Us */}
            <div className="mt-10 pt-6 border-t border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Follow Us
              </span>
              <div className="flex items-center gap-2.5">
                {[
                  { label: "Facebook", href: "https://facebook.com", letter: "f" },
                  { label: "LinkedIn", href: "https://linkedin.com", letter: "in" },
                  { label: "Twitter/X", href: "https://twitter.com", letter: "X" },
                  { label: "Instagram", href: "https://instagram.com", letter: "📷" },
                  { label: "YouTube", href: "https://youtube.com", letter: "▶" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all shadow-2xs"
                  >
                    {s.letter}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
