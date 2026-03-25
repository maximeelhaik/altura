"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function CollectionsSection() {
  const { dict } = useLanguage();

  const collectionsData = [
    {
      id: 1,
      name: dict.collections.products.obsidian.name,
      notes: dict.collections.products.obsidian.notes,
      price: "$45",
      image: "/images/packaging 1.jpg",
    },
    {
      id: 2,
      name: dict.collections.products.cloud.name,
      notes: dict.collections.products.cloud.notes,
      price: "$38",
      image: "/images/packaging 2.png",
    },
    {
      id: 3,
      name: dict.collections.products.volcanic.name,
      notes: dict.collections.products.volcanic.notes,
      price: "$42",
      image: "/images/packaging 3.png",
    }
  ];

  return (
    <section id="collections" className="py-32 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <span className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            {dict.collections.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-light uppercase">
            {dict.collections.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collectionsData.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative w-full aspect-[3/4] mb-8 overflow-hidden rounded-sm bg-surface">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out mix-blend-luminosity group-hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
                
                {/* Glassmorphism Add to Cart */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20">
                  <button className="glass text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
                    {dict.collections.addToCart}
                  </button>
                </div>
              </div>

              <h3 className="text-2xl font-display tracking-wide mb-2 text-white group-hover:text-gold transition-colors text-center">
                {item.name}
              </h3>
              <p className="text-muted text-sm font-light uppercase tracking-wider mb-4 text-center h-10">
                {item.notes}
              </p>
              <span className="text-white font-medium tracking-widest">
                {item.price}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
