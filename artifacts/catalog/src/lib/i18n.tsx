import React, { createContext, useContext, useState, useEffect } from "react";
import { LocalizedString, translations, Translations } from "../data/translations";

type Language = "en" | "lv" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations) => string;
  tl: (ls: LocalizedString) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && ["en", "lv", "ru"].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: keyof Translations) => translations[key][language];
  const tl = (ls: LocalizedString) => ls[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, tl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
