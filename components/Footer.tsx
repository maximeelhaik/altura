"use client";

import React from "react";
import Link from "next/link";
import { Coffee } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
  const { dict } = useLanguage();

  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 border-b border-white/5 pb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Coffee className="w-6 h-6 text-white" />
              <span className="text-xl font-display font-bold tracking-widest text-white uppercase">
                {dict.footer.brand}
              </span>
            </div>
            <p className="text-muted max-w-sm mb-8 leading-relaxed">
              {dict.footer.desc}
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold tracking-wider uppercase mb-6 text-sm">{dict.footer.shop}</h3>
            <ul className="space-y-4">
              <li><Link href="#collections" className="text-muted hover:text-white transition-colors">{dict.footer.shopLinks.all}</Link></li>
              <li><Link href="#collections" className="text-muted hover:text-white transition-colors">{dict.footer.shopLinks.reserve}</Link></li>
              <li><Link href="#" className="text-muted hover:text-white transition-colors">{dict.footer.shopLinks.equipment}</Link></li>
              <li><Link href="#" className="text-muted hover:text-white transition-colors">{dict.footer.shopLinks.gifts}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold tracking-wider uppercase mb-6 text-sm">{dict.footer.about}</h3>
            <ul className="space-y-4">
              <li><Link href="#story" className="text-muted hover:text-white transition-colors">{dict.footer.aboutLinks.story}</Link></li>
              <li><Link href="#" className="text-muted hover:text-white transition-colors">{dict.footer.aboutLinks.sourcing}</Link></li>
              <li><Link href="#" className="text-muted hover:text-white transition-colors">{dict.footer.aboutLinks.journal}</Link></li>
              <li><Link href="#" className="text-muted hover:text-white transition-colors">{dict.footer.aboutLinks.contact}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted">
          <p>{dict.footer.copyright}</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link href="#" className="hover:text-white transition-colors">{dict.footer.socialLinks.ig}</Link>
            <Link href="#" className="hover:text-white transition-colors">{dict.footer.socialLinks.x}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
