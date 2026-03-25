"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function TestimonialsSection() {
  const { dict } = useLanguage();

  const testimonialsData = [
    {
      quote: dict.testimonials.t1.text,
      author: dict.testimonials.t1.author,
      role: dict.testimonials.t1.role
    },
    {
      quote: dict.testimonials.t2.text,
      author: dict.testimonials.t2.author,
      role: dict.testimonials.t2.role
    },
    {
      quote: dict.testimonials.t3.text,
      author: dict.testimonials.t3.author,
      role: dict.testimonials.t3.role
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-background border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-gold font-medium tracking-[0.2em] uppercase text-xs block">
            {dict.testimonials.subtitle}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-gold text-4xl font-serif mb-6">&quot;</div>
              <p className="text-muted text-lg font-light leading-relaxed mb-8 italic text-balance">
                {item.quote}
              </p>
              <div>
                <p className="text-white font-medium tracking-wide uppercase text-sm mb-1">
                  {item.author}
                </p>
                <p className="text-muted/60 text-xs tracking-widest uppercase">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
