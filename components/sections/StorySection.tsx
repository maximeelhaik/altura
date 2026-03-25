"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function StorySection() {
  const { dict } = useLanguage();

  return (
    <section id="story" className="py-32 md:py-48 bg-background relative z-10 -mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-silver font-medium tracking-[0.2em] uppercase text-xs mb-8 block">
              {dict.story.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-tight mb-8 max-w-sm">
              {dict.story.title}
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6 font-light">
              {dict.story.p1}
            </p>
            <p className="text-muted text-lg leading-relaxed font-light mb-10">
              {dict.story.p2}
            </p>
            
            <button className="text-accent border-b border-accent/30 pb-1 font-medium tracking-wide hover:border-accent transition-all duration-300 uppercase text-sm">
              {dict.story.btn}
            </button>
          </motion.div>

          <motion.div
            className="relative h-[400px] lg:h-[600px] w-full bg-surface rounded-sm overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div 
              className="absolute inset-0 bg-[url('/images/paysage1.jpg')] 
              bg-cover bg-center grayscale opacity-60 mix-blend-multiply hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-cherry/20 to-transparent pointer-events-none" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
