"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function StorySection() {
  const { dict } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax and scale effects for the background
  const imageScale = useTransform(smoothProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const imageOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const textY = useTransform(smoothProgress, [0, 1], [100, -100]);
  const bgBrightness = useTransform(smoothProgress, [0, 0.5, 1], [0.4, 0.6, 0.4]);

  return (
    <section 
      ref={containerRef}
      id="story" 
      className="relative h-[120vh] md:h-[150vh] flex items-center justify-center overflow-hidden bg-background z-10"
      style={{ marginTop: "-20vh" }}
    >
      {/* Immersive Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 will-change-transform"
        style={{ 
          scale: imageScale,
          opacity: imageOpacity,
        }}
      >
        <div 
          className="absolute inset-0 bg-[url('/images/paysage1.jpg')] bg-cover bg-center grayscale-0"
          style={{ transition: "filter 1.5s ease-in-out" }}
        />
        {/* Dynamic Overlay for Contrast */}
        <motion.div 
          className="absolute inset-0 bg-black/40"
          style={{ opacity: bgBrightness }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </motion.div>

      {/* Cinematic Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <motion.span 
            className="text-accent font-medium tracking-[0.4em] uppercase text-xs mb-8 block"
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.5 }}
          >
            {dict.story.subtitle}
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light leading-tight mb-12 tracking-tighter text-white">
            {dict.story.title.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-4 last:mr-0 italic font-serif text-silver">
                {word}
              </span>
            ))}
          </h2>

          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-silver/90 text-lg md:text-xl leading-relaxed font-light text-balance drop-shadow-md">
              {dict.story.p1}
            </p>
            <p className="text-silver/70 text-base md:text-lg leading-relaxed font-light text-balance drop-shadow-sm">
              {dict.story.p2}
            </p>
          </div>
          
          <motion.div 
            className="mt-16"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="text-white border-b-2 border-accent pb-2 font-medium tracking-widest hover:text-accent transition-all duration-300 uppercase text-sm">
              {dict.story.btn}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
