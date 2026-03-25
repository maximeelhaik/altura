"use client";

import React from "react";
import Link from "next/link";
import { Coffee, Menu } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Navbar() {
  const { lang, setLang, dict, mounted } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 bg-background/50 backdrop-blur-md transition-all pt-4 md:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center gap-2">
            <Coffee className="w-6 h-6 md:w-8 md:h-8 text-accent" />
            <Link href="/" className="text-xl md:text-2xl font-display font-light tracking-widest text-white uppercase hover:text-accent transition-colors duration-300">
              Altura
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-12">
            <Link href="#story" className="text-[11px] font-medium text-silver/60 hover:text-accent transition-all duration-300 tracking-[0.3em] uppercase">
              {dict.nav.story}
            </Link>
            <Link href="#collections" className="text-[11px] font-medium text-silver/60 hover:text-accent transition-all duration-300 tracking-[0.3em] uppercase">
              {dict.nav.collections}
            </Link>
            <Link href="#testimonials" className="text-[11px] font-medium text-silver/60 hover:text-accent transition-all duration-300 tracking-[0.3em] uppercase">
              {lang === "fr" ? "Avis" : "Reviews"}
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-8">
            {mounted && (
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-silver/30">
                <button 
                  onClick={() => setLang('en')} 
                  className={`transition-colors ${lang === 'en' ? 'text-accent' : 'hover:text-silver'}`}
                >EN</button>
                <span className="opacity-10">|</span>
                <button 
                  onClick={() => setLang('fr')} 
                  className={`transition-colors ${lang === 'fr' ? 'text-accent' : 'hover:text-silver'}`}
                >FR</button>
              </div>
            )}
            
            <button className="bg-accent text-white px-6 py-2.5 rounded-sm font-medium tracking-widest hover:bg-accent/90 transition-all duration-300 uppercase text-[11px] shadow-[0_0_15px_rgba(250,66,3,0.2)]">
               {lang === "fr" ? "Pré-commander" : "Pre-Order"}
            </button>
          </div>
          
          <div className="flex items-center md:hidden gap-4">
            {mounted && (
              <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-white/50">
                <button 
                  onClick={() => setLang('en')} 
                  className={`transition-colors ${lang === 'en' ? 'text-white' : 'hover:text-white/80'}`}
                >EN</button>
                <span className="opacity-30">|</span>
                <button 
                  onClick={() => setLang('fr')} 
                  className={`transition-colors ${lang === 'fr' ? 'text-white' : 'hover:text-white/80'}`}
                >FR</button>
              </div>
            )}
            <button className="text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
