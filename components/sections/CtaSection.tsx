"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function CtaSection() {
  const { dict } = useLanguage();

  return (
    <section className="py-40 bg-background text-white border-t border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-light mb-8 tracking-tighter uppercase leading-tight">
            {dict.cta.title}
          </h2>
          <p className="text-base md:text-xl text-muted font-light mb-12 max-w-2xl mx-auto text-balance">
            {dict.cta.desc}
          </p>
          <button className="bg-accent text-white px-10 py-4 md:px-12 md:py-5 rounded-sm font-medium tracking-[0.2em] hover:bg-accent/90 transition-all duration-300 uppercase text-xs md:text-sm mb-6 inline-block shadow-[0_0_25px_rgba(250,66,3,0.3)]">
            {dict.cta.btn}
          </button>
          <p className="text-[10px] md:text-xs text-silver/40 tracking-widest uppercase">
            {dict.cta.note}
          </p>
        </motion.div>
      </div>
      
      {/* Subtle background abstract shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cherry/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-crimson/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
