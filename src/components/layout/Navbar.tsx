"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export function Navbar({ onOpenInquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAboutPage = pathname === "/about";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: isAboutPage ? "/#services" : "#services" },
    { name: "Solutions", href: isAboutPage ? "/#solutions" : "#solutions" },
    { name: "Projects", href: isAboutPage ? "/#projects" : "#projects" },
    { name: "Technologies", href: isAboutPage ? "/#technologies" : "#technologies" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/brand/logo.png"
                  alt="ZetasBuild Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex items-baseline">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                  ZetasBuild
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 ml-0.5 animate-pulse" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-50/80 border border-slate-200/60 rounded-full px-4 py-1.5 shadow-2xs backdrop-blur-xs">
              {navLinks.map((link) => {
                const isActive =
                  (link.name === "Home" && pathname === "/") ||
                  (link.name === "About" && pathname === "/about");

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-indigo-600 font-semibold bg-white shadow-2xs"
                        : "text-slate-600 hover:text-indigo-600 hover:bg-white/80"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-600"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenInquiry}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 rounded-full shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/35 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                <span className="relative flex items-center gap-1.5">
                  Let&apos;s Build Together
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 text-base font-medium rounded-xl transition-colors ${
                    (link.name === "Home" && pathname === "/") ||
                    (link.name === "About" && pathname === "/about")
                      ? "text-indigo-600 font-semibold bg-indigo-50"
                      : "text-slate-800 hover:text-indigo-600 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry?.();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md shadow-indigo-500/25"
                >
                  Let&apos;s Build Together
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
