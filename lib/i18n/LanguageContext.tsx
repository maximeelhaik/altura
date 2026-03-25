"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, Language } from "./dictionaries";

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  dict: typeof dictionaries.en;
  mounted: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Attempt to load previously saved locale
    const saved = localStorage.getItem("altura_lang") as Language;
    if (saved && (saved === "en" || saved === "fr")) {
      setLang(saved);
    } else {
      // Default to French if browser prefers it
      if (typeof navigator !== "undefined" && navigator.language.startsWith("fr")) {
        setLang("fr");
      }
    }
    setMounted(true);
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("altura_lang", newLang);
  };

  const dict = dictionaries[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, dict, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
