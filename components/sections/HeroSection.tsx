"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValueEvent } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function HeroSection() {
  const { dict } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const frameCount = 157;

  useEffect(() => {
    setIsMounted(true);
    let loadedCount = 0;
    const cache: HTMLImageElement[] = [];
    for (let i = 1; i <= frameCount; i++) {
        const img = new window.Image();
        const frameStr = i.toString().padStart(3, "0");
        img.src = `/animationcafe/ezgif-frame-${frameStr}.png`;
        img.onload = () => {
            loadedCount++;
            if (loadedCount === frameCount) setImagesPreloaded(true);
        };
        cache.push(img);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 0.42], [1, frameCount]);
  const [currentIndex, setCurrentIndex] = useState(1);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    setCurrentIndex(Math.round(latest) || 1);
  });

  // Phase 1: 0.0 -> 0.12
  const text1Opacity = useTransform(scrollYProgress, [0.35, 0.43, 0.50, 0.56], [0, 1, 1, 0]);
  const text1BlurRaw = useTransform(scrollYProgress, [0.35, 0.43, 0.50, 0.56], [10, 0, 0, 10]);
  const text1Filter = useMotionTemplate`blur(${text1BlurRaw}px)`;
  const text1Scale = useTransform(scrollYProgress, [0.35, 0.56], [0.9, 1.05]);

  // Phase 2: 0.56 -> 0.76
  const text2Opacity = useTransform(scrollYProgress, [0.56, 0.62, 0.70, 0.76], [0, 1, 1, 0]);
  const text2BlurRaw = useTransform(scrollYProgress, [0.56, 0.62, 0.70, 0.76], [10, 0, 0, 10]);
  const text2Filter = useMotionTemplate`blur(${text2BlurRaw}px)`;
  const text2Scale = useTransform(scrollYProgress, [0.56, 0.76], [0.9, 1.05]);

  // Phase 3 (Final Hero Text): 0.76 -> 0.85
  const text3Opacity = useTransform(scrollYProgress, [0.76, 0.84], [0, 1]);
  const text3BlurRaw = useTransform(scrollYProgress, [0.76, 0.84], [10, 0]);
  const text3Filter = useMotionTemplate`blur(${text3BlurRaw}px)`;
  const text3Scale = useTransform(scrollYProgress, [0.76, 0.84], [0.95, 1]);

  const imageOpacity = useTransform(scrollYProgress, [0.76, 0.87], [0.9, 0.15]);

  // Dissolve exit: fade the entire sticky panel cleanly in the last ~20% of scroll
  const stickyOpacity = useTransform(scrollYProgress, [0.78, 0.97], [1, 0]);
  const stickyY = useTransform(scrollYProgress, [0.78, 0.97], ["0%", "-5%"]);

  const currentFrameString = currentIndex.toString().padStart(3, "0");

  return (
    <section ref={containerRef} className="relative w-full bg-background" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ opacity: stickyOpacity, y: stickyY }}
        >
        <motion.div 
          className="absolute inset-0 z-0 flex items-center justify-center w-full h-full"
          style={{ opacity: imageOpacity }}
        >
            {isMounted && (
              <img 
                src={`/animationcafe/ezgif-frame-${currentFrameString}.png`}
                alt="Altura Coffee Premium Packaging"
                className="w-full h-full object-cover md:object-contain mix-blend-lighten transition-opacity duration-100" 
              />
            )}
            
            {!imagesPreloaded && isMounted && (
               <div className="absolute inset-0 flex items-center justify-center bg-background z-50">
                  <span className="text-gold tracking-[0.2em] uppercase text-xs animate-pulse">
                     Loading Experience...
                  </span>
               </div>
            )}
        </motion.div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_90%)] z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-80 z-10 pointer-events-none" />

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center pointer-events-none">
          
          <motion.div 
            className="absolute px-4 text-center w-full max-w-4xl"
            style={{ opacity: text1Opacity, filter: text1Filter, scale: text1Scale }}
          >
             <span className="text-gold font-medium tracking-[0.3em] md:tracking-[0.5em] uppercase text-xs md:text-sm">
                {dict.hero.subtitle1}
             </span>
          </motion.div>

          <motion.div 
            className="absolute px-4 text-center w-full max-w-5xl"
            style={{ opacity: text2Opacity, filter: text2Filter, scale: text2Scale }}
          >
             <span className="text-white font-serif italic text-4xl md:text-6xl font-light">
                {dict.hero.subtitle2}
             </span>
          </motion.div>

          <motion.div 
            className="absolute px-4 w-full max-w-6xl flex flex-col items-center justify-center pointer-events-auto"
            style={{ opacity: text3Opacity, filter: text3Filter, scale: text3Scale }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tighter text-white mb-6 leading-[1.1] md:leading-none text-balance text-center">
              {dict.hero.title1} <br className="hidden md:block" />
              <span className="italic font-serif">{dict.hero.title2}</span>
            </h1>
            <p className="text-sm md:text-base text-muted max-w-lg font-light mb-8 leading-relaxed text-balance mx-auto text-center">
              {dict.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center">
              <button className="bg-white text-background px-8 md:px-10 py-3 md:py-4 rounded-sm font-medium tracking-[0.2em] hover:bg-white/90 transition-all duration-300 uppercase text-xs md:text-sm">
                {dict.hero.shopBtn}
              </button>
              <button className="text-white border-b border-white/30 pb-1 px-2 font-medium tracking-[0.1em] hover:border-white transition-all duration-300 uppercase text-xs md:text-sm">
                {dict.hero.heritageBtn}
              </button>
            </div>
          </motion.div>
          
        </div>

        <motion.div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="flex flex-col items-center">
            <span className="text-[10px] text-white/50 tracking-[0.3em] uppercase mb-3">{dict.hero.scroll}</span>
            <ChevronDown className="w-5 h-5 text-white/50" />
          </motion.div>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
